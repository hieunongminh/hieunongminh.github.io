/* ================================================================
   PUBLICATIONS
   Add a new paper by copying one block { ... }, from the opening {
   to the closing }, and pasting it at the top of the list.

   Fields
     title      Paper title.
     authors    List of names. Your name (from data/site.js) is highlighted.
                Add * after a name for equal contribution, e.g. "Jane Doe*".
     venue      Short name shown in the badge, e.g. "ICML".
     venueFull  Full venue line, shown in italics.
     year       A number, used to group papers by year.
     type       "conference", "journal" or "preprint".
     selected   true shows the paper on the Home page.
     note       Optional, e.g. "Oral presentation". Leave "" for none.
     abstract   Optional. Shown when the reader clicks "Abstract".
     bibtex     Optional. Shown when the reader clicks "BibTeX".
     links      Buttons. Each has a label and a url.
                Add  kind: "erratum"  to show a button in the warning colour.
   ================================================================ */

window.PUBLICATIONS = [
  {
    title: "A Refined Generalization Analysis for Extreme Multi-class Supervised Contrastive Representation Learning",
    authors: ["Nong Minh Hieu", "Antoine Ledent"],
    venue: "ICML",
    venueFull: "International Conference on Machine Learning (ICML), PMLR 306",
    year: 2026,
    type: "conference",
    selected: true,
    note: "",
    abstract: "Contrastive Representation Learning (CRL) has achieved strong empirical success in multiple machine learning disciplines, yet its theoretical sample complexity remains poorly understood. Existing analyses usually assume that input tuples are identically and independently distributed, an assumption violated in most practical settings where contrastive tuples are constructed from a finite pool of labeled data, inducing dependencies among tuples. While one recent work analyzed this learning setting using U-Statistics to estimate the population risk, the techniques used therein require the risk of each class to concentrate uniformly, making excess risk bounds scale in the order of &rho;<sub>min</sub><sup>&minus;1/2</sup> where &rho;<sub>min</sub> denotes the probability of the rarest class. Such a dependency can be overly pessimistic in the extreme multiclass settings where there are many tail classes which contribute minimally to the overall population risk. Our contributions are two-fold. Firstly, we improve upon the previous work and prove a bound with a sample complexity of the same order as the number of classes R, regardless of the distribution over classes. Furthermore, we formulate a different estimator (of a debiased surrogate of the collision-free risk) that captures the concentration of the risk across classes, enabling sharper bounds in extreme multi-class learning scenarios, especially where class distributions are long-tailed. Under mild assumptions on the class distributions, the resulting sample complexity is O(k) where k is the number of samples per tuple.",
    bibtex: "@inproceedings{hieu2026refined,\n  title     = {A Refined Generalization Analysis for Extreme Multi-class Supervised Contrastive Representation Learning},\n  author    = {Hieu, Nong Minh and Ledent, Antoine},\n  booktitle = {Proceedings of the 43rd International Conference on Machine Learning},\n  series    = {Proceedings of Machine Learning Research},\n  volume    = {306},\n  year      = {2026}\n}",
    links: [
      { label: "arXiv",   url: "https://arxiv.org/abs/2605.07596" },
      { label: "PMLR",    url: "" },
      { label: "Erratum", url: "media/papers/erratum_icml2026.pdf", kind: "erratum" }
    ]
  },
  {
    title: "Generalization Analysis for Supervised Contrastive Representation Learning under Non-IID Settings",
    authors: ["Nong Minh Hieu", "Antoine Ledent"],
    venue: "ICML",
    venueFull: "International Conference on Machine Learning (ICML), PMLR 267",
    year: 2025,
    type: "conference",
    selected: true,
    note: "",
    abstract: "",
    bibtex: "",
    links: [
      { label: "PMLR",  url: "" },
      { label: "arXiv", url: "" }
    ]
  },
  {
    title: "Generalization Analysis for Deep Contrastive Representation Learning",
    authors: ["Nong Minh Hieu", "Antoine Ledent", "Y. Lei", "C. Y. Ku"],  // write out first names if you like
    venue: "AAAI",
    venueFull: "AAAI Conference on Artificial Intelligence",
    year: 2024,
    type: "conference",
    selected: false,
    note: "",
    abstract: "",
    bibtex: "",
    links: [
      { label: "Paper", url: "" },
      { label: "arXiv", url: "" }
    ]
  }
];
