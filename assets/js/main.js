/* ================================================================
   Builds the header, footer and page content from the files in data/.
   You should not need to edit this file.
   ================================================================ */

(function () {
  "use strict";

  var SITE = window.SITE || {};
  var PROFILE = window.PROFILE || {};
  var PUBS = window.PUBLICATIONS || [];
  var NEWS = window.NEWS || [];
  var TEACHING = window.TEACHING || [];
  var page = document.body.getAttribute("data-page");
  var root = document.documentElement;
  var uid = 0;

  function $(sel) { return document.querySelector(sel); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function isExternal(url) { return /^https?:\/\//.test(url); }
  function linkAttrs(url, newTab) {
    var ext = newTab || isExternal(url) || /\.pdf$/i.test(url);
    return 'href="' + esc(url) + '"' + (ext ? ' target="_blank" rel="noopener"' : "");
  }

  /* ---------- Theme ---------- */

  var ICONS = {
    moon: '<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>',
    sun: '<svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11M7 10.5l5 5 5-5M5 19.5h14"/></svg>'
  };

  function currentTheme() { return root.getAttribute("data-theme") === "dark" ? "dark" : "light"; }
  function setTheme(t) {
    root.setAttribute("data-theme", t);
    try { localStorage.setItem("theme", t); } catch (e) {}
    var btn = $(".theme-toggle");
    if (btn) btn.setAttribute("aria-label", t === "dark" ? "Switch to light theme" : "Switch to dark theme");
  }

  /* ---------- Header and footer ---------- */

  function renderHeader() {
    var el = $("#site-header");
    if (!el) return;
    var here = (location.pathname.split("/").pop() || "index.html");
    var items = (SITE.nav || []).map(function (item) {
      var current = item.href === here || (here === "" && item.href === "index.html");
      return "<a " + linkAttrs(item.href, item.newTab) + (current ? ' aria-current="page"' : "") + ">" + esc(item.label) + "</a>";
    }).join("");

    el.className = "site-header";
    el.innerHTML =
      '<div class="wrap">' +
        '<a class="site-title" href="index.html">' + esc(SITE.siteTitle || PROFILE.name || "") + "</a>" +
        '<div class="header-actions">' +
          '<nav class="nav" id="site-nav" aria-label="Main">' + items + "</nav>" +
          '<button class="theme-toggle" type="button">' + ICONS.moon + ICONS.sun + "</button>" +
          '<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>' +
        "</div>" +
      "</div>";

    var toggle = el.querySelector(".theme-toggle");
    toggle.setAttribute("aria-label", currentTheme() === "dark" ? "Switch to light theme" : "Switch to dark theme");
    toggle.addEventListener("click", function () {
      setTheme(currentTheme() === "dark" ? "light" : "dark");
    });

    var menu = el.querySelector(".menu-toggle");
    var nav = el.querySelector(".nav");
    menu.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      menu.setAttribute("aria-expanded", open ? "true" : "false");
      menu.textContent = open ? "Close" : "Menu";
    });
  }

  function renderFooter() {
    var el = $("#site-footer");
    if (!el) return;
    el.className = "site-footer";
    el.innerHTML =
      '<div class="wrap">' +
        "<span>&copy; " + new Date().getFullYear() + " " + esc(PROFILE.name || SITE.siteTitle || "") + "</span>" +
        (SITE.lastUpdated ? "<span>Last updated " + esc(SITE.lastUpdated) + "</span>" : "") +
      "</div>";
  }

  /* ---------- Shared pieces ---------- */

  function peopleHTML(list) {
    var me = (SITE.me || "").trim();
    return (list || []).map(function (name) {
      var star = /\*$/.test(name);
      var clean = name.replace(/\*$/, "").trim();
      var html = esc(clean) + (star ? "<sup>*</sup>" : "");
      return clean === me ? '<span class="me">' + html + "</span>" : html;
    }).join(", ");
  }

  function linksHTML(links) {
    return (links || []).filter(function (l) { return l && l.url; }).map(function (l) {
      var cls = "chip" + (l.kind === "erratum" ? " erratum" : "");
      return '<a class="' + cls + '" ' + linkAttrs(l.url) + ">" + esc(l.label) + "</a>";
    }).join("");
  }

  function panelButton(label, panelId) {
    return '<button class="chip" type="button" aria-expanded="false" aria-controls="' + panelId + '">' + esc(label) + "</button>";
  }

  function pubHTML(p) {
    var id = "p" + (++uid);
    var badgeCls = "badge" + (p.type === "preprint" ? " preprint" : "");
    var buttons = "";
    var panels = "";
    if (p.abstract) {
      buttons += panelButton("Abstract", id + "-abs");
      panels += '<div class="panel" id="' + id + '-abs" hidden><p>' + p.abstract + "</p></div>";
    }
    if (p.bibtex) {
      buttons += panelButton("BibTeX", id + "-bib");
      panels += '<div class="panel" id="' + id + '-bib" hidden><pre>' + esc(p.bibtex) + "</pre>" +
        '<button class="chip copy" type="button" data-copy="' + id + '-bib">Copy BibTeX</button></div>';
    }
    var linkRow = buttons + linksHTML(p.links);
    var searchText = [p.title, (p.authors || []).join(" "), p.venue, p.venueFull, p.year, p.note].join(" ").toLowerCase();

    return '<li class="entry" data-search="' + esc(searchText) + '">' +
      '<span class="' + badgeCls + '">' + esc(p.venue || (p.type === "preprint" ? "Preprint" : "")) + "</span>" +
      "<div>" +
        '<h3 class="entry-title">' + p.title + "</h3>" +
        '<p class="entry-authors">' + peopleHTML(p.authors) + "</p>" +
        '<p class="entry-venue">' + esc(p.venueFull || p.venue || "") + ", " + esc(p.year) +
          (p.note ? ' <span class="note">' + esc(p.note) + "</span>" : "") + "</p>" +
        (linkRow ? '<div class="entry-links">' + linkRow + "</div>" : "") +
        panels +
      "</div>" +
    "</li>";
  }

  function courseHTML(c) {
    var meta = [c.role, c.term, c.institution].filter(Boolean).map(esc).join(", ");
    return '<li class="entry">' +
      '<span class="badge">' + esc(c.code || c.year || "") + "</span>" +
      "<div>" +
        '<h3 class="entry-title">' + c.title + "</h3>" +
        (c.people && c.people.length ? '<p class="entry-authors">' + peopleHTML(c.people) + "</p>" : "") +
        (meta ? '<p class="entry-venue">' + meta + "</p>" : "") +
        (c.description ? '<p class="entry-desc">' + c.description + "</p>" : "") +
        (linksHTML(c.links) ? '<div class="entry-links">' + linksHTML(c.links) + "</div>" : "") +
      "</div>" +
    "</li>";
  }

  function groupByYear(items) {
    var groups = {};
    items.forEach(function (it) {
      var y = it.year || "Other";
      (groups[y] = groups[y] || []).push(it);
    });
    return Object.keys(groups).sort(function (a, b) { return b - a; }).map(function (y) {
      return { year: y, items: groups[y] };
    });
  }

  function yearGroupsHTML(items, render) {
    return groupByYear(items).map(function (g) {
      return '<section class="year-group" aria-label="' + esc(g.year) + '">' +
        '<div class="year-label">' + esc(g.year) + "</div>" +
        '<ol class="entries">' + g.items.map(render).join("") + "</ol>" +
      "</section>";
    }).join("");
  }

  /* Abstract / BibTeX toggles and the copy button */
  function wireEntries(scope) {
    scope.addEventListener("click", function (e) {
      var btn = e.target.closest("button");
      if (!btn) return;
      if (btn.hasAttribute("data-copy")) {
        var pre = document.getElementById(btn.getAttribute("data-copy")).querySelector("pre");
        var done = function () {
          btn.textContent = "Copied";
          setTimeout(function () { btn.textContent = "Copy BibTeX"; }, 1600);
        };
        try {
          navigator.clipboard.writeText(pre.textContent).then(done, function () { selectText(pre); });
        } catch (err) { selectText(pre); }
        return;
      }
      var target = btn.getAttribute("aria-controls");
      if (!target || btn.classList.contains("menu-toggle")) return;
      var panel = document.getElementById(target);
      if (!panel) return;
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", open ? "false" : "true");
      panel.hidden = open;
    });
  }
  function selectText(node) {
    var r = document.createRange();
    r.selectNodeContents(node);
    var s = window.getSelection();
    s.removeAllRanges();
    s.addRange(r);
  }

  /* ---------- Home ---------- */

  function renderHome() {
    var P = PROFILE;
    var hero = $("#hero");
    if (hero) {
      var extra = (P.links || []).filter(function (l) { return l.url; }).map(function (l) {
        return "<a " + linkAttrs(l.url) + ">" + esc(l.label) + "</a>";
      }).join("");
      hero.innerHTML =
        "<div>" +
          "<h1>" + esc(P.name) + "</h1>" +
          '<p class="position">' + esc(P.position) + "</p>" +
          '<p class="affiliation">' + (P.affiliation || []).map(esc).join("<br>") + "</p>" +
          '<div class="contact">' +
            (P.cv ? '<a class="button" ' + linkAttrs(P.cv) + ">" + ICONS.download + "Download CV</a>" : "") +
            (P.email ? '<a href="mailto:' + esc(P.email) + '">' + esc(P.email) + "</a>" : "") +
            extra +
          "</div>" +
        "</div>" +
        sphereFigure();
      animateSphere();
    }

    var about = $("#about-body");
    if (about) {
      about.innerHTML =
        '<div class="about-text">' + (P.about || []).map(function (t) { return "<p>" + t + "</p>"; }).join("") + "</div>" +
        "<div>" +
          '<h3 class="timeline-title">Education</h3>' +
          '<ol class="timeline">' + (P.education || []).map(function (e) {
            return "<li>" +
              '<span class="years">' + esc(e.years) + "</span>" +
              '<span class="degree">' + esc(e.degree) + "</span>" +
              '<span class="place">' + esc(e.place) + "</span>" +
            "</li>";
          }).join("") + "</ol>" +
        "</div>";
    }

    var sel = $("#selected-pubs");
    if (sel) {
      var chosen = PUBS.filter(function (p) { return p.selected; })
        .sort(function (a, b) { return (b.year || 0) - (a.year || 0); });
      sel.innerHTML = chosen.map(pubHTML).join("");
      wireEntries(sel);
    }

    var news = $("#news-list");
    if (news) {
      news.innerHTML = NEWS.map(function (n) {
        return '<li><span class="date">' + esc(n.date) + "</span><span>" + n.text + "</span></li>";
      }).join("");
    }
  }

  /* The figure: one anchor, its positive, and five negatives on the unit sphere.
     On load the positive moves toward the anchor and the negatives spread out, once. */
  var FIG = {
    c: 160, r: 118,
    anchor: -32,
    posFrom: 78, posTo: -52,
    negFrom: [-8, 14, -70, 34, -96],
    negTo: [58, 108, 156, 204, 250]
  };
  function pt(deg) {
    var a = deg * Math.PI / 180;
    return [FIG.c + FIG.r * Math.cos(a), FIG.c + FIG.r * Math.sin(a)];
  }
  function sphereFigure() {
    var a = pt(FIG.anchor);
    var negs = FIG.negFrom.map(function (d, i) {
      var p = pt(d);
      return '<line class="push" data-i="' + i + '" x1="' + a[0] + '" y1="' + a[1] + '" x2="' + p[0] + '" y2="' + p[1] + '"/>';
    }).join("");
    var negDots = FIG.negFrom.map(function (d, i) {
      var p = pt(d);
      return '<circle class="negative" data-i="' + i + '" cx="' + p[0] + '" cy="' + p[1] + '" r="6"/>';
    }).join("");
    var p0 = pt(FIG.posFrom);
    return '<figure class="sphere">' +
      '<svg viewBox="0 0 320 320" role="img" aria-labelledby="fig-cap">' +
        '<circle class="outline" cx="160" cy="160" r="' + FIG.r + '"/>' +
        '<ellipse class="equator" cx="160" cy="160" rx="' + FIG.r + '" ry="34"/>' +
        negs +
        '<line class="pull" id="fig-pull" x1="' + a[0] + '" y1="' + a[1] + '" x2="' + p0[0] + '" y2="' + p0[1] + '"/>' +
        negDots +
        '<circle class="positive" id="fig-pos" cx="' + p0[0] + '" cy="' + p0[1] + '" r="7"/>' +
        '<circle class="anchor" cx="' + a[0] + '" cy="' + a[1] + '" r="8"/>' +
      "</svg>" +
      '<figcaption id="fig-cap">An anchor (filled), its positive (ring) and five negatives on the unit sphere.</figcaption>' +
    "</figure>";
  }
  function animateSphere() {
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var pos = document.getElementById("fig-pos");
    var pull = document.getElementById("fig-pull");
    if (!pos) return;
    var negDots = document.querySelectorAll(".sphere .negative");
    var negLines = document.querySelectorAll(".sphere .push");
    function draw(t) {
      var e = 1 - Math.pow(1 - t, 3);
      var p = pt(FIG.posFrom + (FIG.posTo - FIG.posFrom) * e);
      pos.setAttribute("cx", p[0]); pos.setAttribute("cy", p[1]);
      pull.setAttribute("x2", p[0]); pull.setAttribute("y2", p[1]);
      for (var i = 0; i < negDots.length; i++) {
        var q = pt(FIG.negFrom[i] + (FIG.negTo[i] - FIG.negFrom[i]) * e);
        negDots[i].setAttribute("cx", q[0]); negDots[i].setAttribute("cy", q[1]);
        negLines[i].setAttribute("x2", q[0]); negLines[i].setAttribute("y2", q[1]);
      }
    }
    if (reduce) { draw(1); return; }
    var start = null, dur = 1900, delay = 350;
    function step(ts) {
      if (start === null) start = ts;
      var t = Math.min(1, Math.max(0, (ts - start - delay) / dur));
      draw(t);
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------- Publications ---------- */

  function renderPublications() {
    var list = $("#pub-list");
    if (!list) return;
    list.innerHTML = yearGroupsHTML(PUBS, pubHTML);
    wireEntries(list);

    var input = $("#pub-filter");
    var count = $("#pub-count");
    var empty = $("#pub-empty");
    function apply() {
      var q = (input.value || "").trim().toLowerCase();
      var shown = 0;
      list.querySelectorAll(".year-group").forEach(function (g) {
        var any = 0;
        g.querySelectorAll(".entry").forEach(function (e) {
          var hit = !q || e.getAttribute("data-search").indexOf(q) !== -1;
          e.hidden = !hit;
          if (hit) any++;
        });
        g.hidden = any === 0;
        shown += any;
      });
      count.textContent = shown + (shown === 1 ? " paper" : " papers");
      empty.hidden = shown !== 0;
      if (shown === 0) empty.querySelector("span").textContent = "No papers match “" + input.value.trim() + "”.";
    }
    input.addEventListener("input", apply);
    empty.querySelector("button").addEventListener("click", function () { input.value = ""; apply(); input.focus(); });
    apply();
  }

  /* ---------- Teaching ---------- */

  function renderTeaching() {
    var list = $("#teaching-list");
    if (!list) return;
    if (!TEACHING.length) {
      list.innerHTML = '<p class="empty">No courses listed yet. Add one in data/teaching.js.</p>';
      return;
    }
    list.innerHTML = yearGroupsHTML(TEACHING, courseHTML);
  }

  /* ---------- Start ---------- */

  renderHeader();
  renderFooter();
  if (page === "home") renderHome();
  if (page === "publications") renderPublications();
  if (page === "teaching") renderTeaching();
})();
