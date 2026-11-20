/* ================================================================
   PROFILE: the top of the Home page and the About section.
   Text between quotes can contain simple HTML such as <em>...</em>
   or <a href="...">...</a>.
   ================================================================ */

window.PROFILE = {
  name: "Nong Minh Hieu",
  position: "PhD student in Computer Science",
  affiliation: [
    "School of Computing and Information Systems",
    "Singapore Management University"
  ],
  email: "mh.nong.2024@phdcs.smu.edu.sg",

  // Put your CV in media/cv/ with exactly this file name.
  cv: "media/cv/CV_Nong_Minh_Hieu.pdf",

  // Profile links. Leave a url empty ("") to hide that link.
  links: [
    { label: "Google Scholar", url: "" },
    { label: "GitHub",         url: "" },
    { label: "ORCID",          url: "" }
  ],

  // About: one or more paragraphs.
  about: [
    "I study the statistical learning theory of representation learning. My current work is on generalization bounds for supervised contrastive learning when the training tuples are built from one finite labelled dataset, so the tuples share data points and are not independent.",
    "I use U-statistics and coupling arguments to analyse the estimators used in practice, with a focus on sample complexity in extreme multi-class and long-tailed settings."
  ],

  // Education, newest first.
  education: [
    {
      years: "2024 to present",
      degree: "PhD in Computer Science",
      place: "Singapore Management University"
    },
    {
      years: "[Years]",
      degree: "[Previous degree, e.g. BSc in Mathematics]",
      place: "[University]"
    }
  ]
};
