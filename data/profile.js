/* ================================================================
   PROFILE: the top of the Home page and the About section.
   Text between quotes can contain simple HTML such as <em>...</em>
   or <a href="...">...</a>.
   ================================================================ */

window.PROFILE = {
  name: "Nong Minh Hieu",
  position: "PhD student",
  affiliation: [
    "School of Computing and Information Systems",
    "Singapore Management University"
  ],
  email: "mh.nong.2024@phdcs.smu.edu.sg",

  // Put your CV in media/cv/ with exactly this file name.
  cv: "media/cv/CV_Nong_Minh_Hieu.pdf",

  // Profile links. Leave a url empty ("") to hide that link.
  links: [
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=6ZtPiA8AAAAJ&hl=en" },
    { label: "Linkedin",       url: "https://www.linkedin.com/in/nong-minh-hieu-194318171/" }
  ],

  // About: one or more paragraphs.
  about: [
    "I study the statistical learning theory of representation learning. My current work is on generalization bounds for supervised contrastive learning when the training tuples are built from one finite labelled dataset.",
    "I am also interested in efficient robustification methods (such as huberization, median-of-means, etc) for estimation of multi-way kernels under heavy-tailed data assumptions."
  ],

  // Education, newest first.
  education: [
    {
      years: "2024 to present",
      degree: "Doctor of Philosophy (PhD)",
      place: "School of Computing and Information Systems (SCIS), Singapore Management University"
    },
    {
      years: "2023 to 2024",
      degree: "Masters of Science (Msc)",
      place: "School of Physical and Mathematical Sciences (SPMS), Nanyang Technological University"
    }
  ]
};
