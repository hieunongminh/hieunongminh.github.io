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
    title: "Generalization Bounds for Neural Networks with Sparse Connectivity",
    authors: ["Nong Minh Hieu", "Antoine Ledent"],
    venue: "NeurIPS",
    venueFull: "Conference on Neural Information Processing Systems (NeurIPS - To Appear)",
    year: 2026,
    type: "conference",
    selected: true,
    note: "",
    abstract: "",
    bibtex: "",
    links: [
      { label: "arXiv",   url: "https://arxiv.org/abs/2611.19382v1" },
    ]
  },
  {
    title: "A Refined Generalization Analysis for Extreme Multi-class Supervised Contrastive Representation Learning",
    authors: ["Nong Minh Hieu", "Antoine Ledent"],
    venue: "ICML",
    venueFull: "International Conference on Machine Learning (ICML), PMLR 306",
    year: 2026,
    type: "conference",
    selected: true,
    note: "",
    abstract: "",
    bibtex: "",
    links: [
      { label: "arXiv",   url: "https://arxiv.org/abs/2605.07596" },
      { label: "PMLR",    url: "https://proceedings.mlr.press/v306/hieu26a.html" },
      { label: "Erratum", url: "media/papers/erratum_icml2026.pdf", kind: "erratum" }
    ]
  },
   {
    title: "Generalization Bounds for Semi-supervised Matrix Completion with Distributional Side Information",
    authors: ["Antoine Ledent", "Mun Chong Soo", "Nong Minh Hieu"],
    venue: "AAAI",
    venueFull: "AAAI Conference on Artificial Intelligence (AAAI)",
    year: 2026,
    type: "conference",
    selected: false,
    note: "Oral Presentation",
    abstract: "",
    bibtex: "",
    links: [
      { label: "arXiv",   url: "https://arxiv.org/abs/2511.13049" },
      { label: "AAAI",    url: "https://ojs.aaai.org/index.php/AAAI/article/view/39439/43400" },
      { label: "Presentation",    url: "https://underline.io/lecture/142105-generalization-bounds-for-semi-supervised-matrix-completion-with-distributional-side-information" },
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
      { label: "arXiv", url: "https://arxiv.org/abs/2505.04937" },
      { label: "PMLR",  url: "https://proceedings.mlr.press/v267/hieu25a.html" }
    ]
  },
   {
    title: "Decoupling Epistemic and Aleatoric Uncertainties with Possibility Theory",
    authors: ["Nong Minh Hieu", "Jeremie Houssineau", "Neil K. Chada", "Emmanuel Delande" ],
    venue: "AISTATS",
    venueFull: "International Conference on Artificial Intelligence and Statistics (AISTATS), PMLR 258",
    year: 2025,
    type: "conference",
    selected: false,
    note: "",
    abstract: "",
    bibtex: "",
    links: [
      { label: "PMLR",  url: "https://proceedings.mlr.press/v258/hieu25a.html" }
    ]
  },
  {
    title: "Generalization Analysis for Deep Contrastive Representation Learning",
    authors: ["Nong Minh Hieu", "Antoine Ledent", "Y. Lei", "C. Y. Ku"],  // write out first names if you like
    venue: "AAAI",
    venueFull: "AAAI Conference on Artificial Intelligence (AAAI)",
    year: 2024,
    type: "conference",
    selected: false,
    note: "",
    abstract: "",
    bibtex: "",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2412.12014" },
      { label: "AAAI", url: "https://ojs.aaai.org/index.php/AAAI/article/view/33889" }
    ]
  }
];
