# My personal website

A plain website that runs on GitHub Pages. No build step is needed: upload the files and they work.

## Where things are

```
index.html          Home page
publications.html   Full list of publications
teaching.html       Teaching materials
blog.html           Blog (hidden from the menu for now)

data/               <- YOUR CONTENT. Edit these files.
  site.js           Menu items, your name for highlighting, "last updated" date
  profile.js        Name, position, email, CV, About text, education
  news.js           News items on the Home page
  publications.js   All papers (mark selected: true to show one on Home)
  teaching.js       Courses and their materials

media/              <- YOUR FILES. Upload PDFs and images here.
  cv/               Your CV (keep the name CV_Nong_Minh_Hieu.pdf)
  papers/           Paper PDFs, errata, slides, posters
  teaching/         One folder per course
  images/           Photos and figures

assets/             Design files (CSS, JavaScript, icon). No need to edit.
```

## Common edits (all done on github.com)

Open the file, click the pencil icon, edit, then click **Commit changes**.
The site updates within a few minutes.

- **Add a paper:** in `data/publications.js`, copy one block from `{` to `},`
  and paste it at the top of the list, then change the text.
- **Add news:** in `data/news.js`, copy one line block and paste it at the top.
- **Add a course:** in `data/teaching.js`, same idea. Upload the PDFs to
  `media/teaching/your-course-folder/` and put their paths in `links`.
- **Replace the CV:** upload your CV to `media/cv/` with the name
  `CV_Nong_Minh_Hieu.pdf`. GitHub will replace the placeholder.
- **Show the Blog in the menu:** in `data/site.js`, delete the `//` at the
  start of the Blog line.

Tips:
- Keep the quotes `"..."` and the commas at the end of lines exactly as they are.
- If a page goes blank after an edit, a quote or comma is probably missing.
  Open the file's history on GitHub to compare with the previous version.
