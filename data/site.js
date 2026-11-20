/* ================================================================
   SITE SETTINGS
   The menu at the top of every page, and the footer.
   ================================================================ */

window.SITE = {
  // Your name exactly as it appears in author lists.
  // Every occurrence is highlighted in publications and teaching.
  me: "Nong Minh Hieu",

  // Shown in the top-left corner of every page.
  siteTitle: "Nong Minh Hieu",

  // The menu. To hide an item, put // at the start of its line.
  nav: [
    { label: "Home",         href: "index.html" },
    { label: "Publications", href: "publications.html" },
    { label: "Teaching",     href: "teaching.html" },
    // { label: "Blog",      href: "blog.html" },   // remove the // at the start to show the blog
    { label: "CV",           href: "media/cv/CV_Nong_Minh_Hieu.pdf", newTab: true }
  ],

  // Shown at the bottom of every page.
  lastUpdated: "November 2026"
};
