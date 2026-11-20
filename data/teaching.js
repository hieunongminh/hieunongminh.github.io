/* ================================================================
   TEACHING
   Add a course by copying one block { ... } and pasting it at the top.
   Put the files for a course in its own folder, for example
   media/teaching/cs101-fall2025/lecture-notes.pdf

   Fields
     title        Course title.
     code         Optional course code, shown in the badge.
     term         e.g. "Fall 2025".
     year         A number, used to group courses by year.
     institution  Where you taught it.
     role         e.g. "Teaching assistant" or "Instructor".
     people       Who prepared the materials. Your name is highlighted.
     description  Optional short description.
     links        Buttons. Each has a label and a url. Empty urls are hidden.
   ================================================================ */

window.TEACHING = [
  {
    title: "[Course title]",
    code: "[CODE]",
    term: "[Term, e.g. Fall 2025]",
    year: 2025,
    institution: "Singapore Management University",
    role: "Teaching assistant",
    people: ["Nong Minh Hieu"],
    description: "[One sentence on what the course covers.]",
    links: [
      { label: "Lecture notes", url: "" },
      { label: "Assignments",   url: "" },
      { label: "Slides",        url: "" }
    ]
  }
];
