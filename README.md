# Helen Lin — personal site

A single-page scrolling site: growing up, academics, competitions, current studies,
extracurriculars, projects, and work. Plain HTML, CSS, and a few lines of JavaScript.
No build step, no framework, no dependencies to install.

```
index.html     all of the words and the page structure
style.css      colours, fonts, spacing, layout
script.js      highlights the nav link for the section you're looking at
images/        your photos go here
```

---

## Putting it online with GitHub Pages

1. On GitHub, click **New repository**. Name it `helenlin2029.github.io` (use your own
   username) and make it **Public**. Don't add a README — you already have one.
2. On the empty repo page, click **uploading an existing file** and drag in
   `index.html`, `style.css`, `script.js`, `.nojekyll`, and the `images` folder.
   Click **Commit changes**.
3. Go to **Settings → Pages**. Under *Source*, choose **Deploy from a branch**,
   pick branch `main` and folder `/ (root)`, then **Save**.
4. Wait about a minute and visit `https://helenlin2029.github.io`.

Naming the repo `username.github.io` gives you the short address. If you'd rather call
it something else — `personal-site`, say — everything works the same, the address just
becomes `https://helenlin2029.github.io/personal-site/`.

---

## Changing the text

Every word on the page is in `index.html`. You can edit it two ways:

**In the browser.** Open `index.html` in your repo, click the pencil icon, change the
text, then **Commit changes**. The live site updates within a minute or so.

**On your computer.** Open `index.html` in any text editor, save, and either drag the
file back into GitHub or use `git add . && git commit -m "update" && git push`.

Text sits between tags. To change a heading, edit only the part between `<h2>` and
`</h2>` and leave the tags alone:

```html
<h2>Growing up</h2>          →   <h2>Where I started</h2>
```

Search the file for **`EDIT ME`** to find every passage I drafted from your resume
rather than from something you actually told me — the childhood section and the
competitions especially. Those are the ones to rewrite first.

To preview changes before publishing, just double-click `index.html` on your computer.
It opens in your browser and works exactly like the live site.

---

## Adding photos

1. Put the image file in the `images/` folder. Lowercase names, no spaces
   (`hangar-2023.jpg`, not `Hangar 2023.JPG`).
2. In `index.html`, find the grey box you want to fill. It looks like this:

```html
<div class="frame">Photo slot — your team, the build, or the award</div>
```

3. Replace that whole line with:

```html
<img class="frame" src="images/hangar-2023.jpg" alt="Working on a landing gear assembly">
```

Keep `class="frame"` — it's what crops the photo to the right shape. Some slots have a
second word in the class (`frame tall`, `frame wide`); copy whichever was there so the
layout doesn't shift.

The `alt` text describes the photo for screen readers and for anyone whose image fails
to load. Write a short, literal description.

Resize photos to roughly 1600px on the long edge before uploading. Full-resolution
phone photos are several megabytes each and will make the page slow to load.

---

## Changing the colours or fonts

Open `style.css`. The first block sets everything:

```css
--navy:#0F1F38;        /* dark section backgrounds */
--navy-deep:#0A1628;   /* hero and footer */
--cream:#F4EDDD;       /* light section backgrounds */
--brass:#B4884B;       /* the accent: rules, years, active nav */
--ink:#12233C;         /* body text on cream */
```

Change a hex value in one place and it updates everywhere it's used.

The fonts are Bodoni Moda for headings and IBM Plex Sans for body text, loaded from
Google Fonts in the `<link>` tag near the top of `index.html`. To swap one, pick a
family at fonts.google.com, replace that link, and update the `font-family` lines in
`style.css`.

---

## Adding or removing a section

Each section in `index.html` is wrapped in a banner comment, like
`<!-- ══ COMPETITIONS ══ -->`. To add a new one, copy an existing section block and
change three things:

1. the `id` on the `<section>` tag, e.g. `id="travel"`
2. the class: `light` for cream, `dark` for navy — they alternate down the page
3. the heading and text

Then add it to the navigation in two places: the `<nav>` list at the top of the file,
and the `.rail` block just below it. Finally, add the new id to the `ids` array at the
top of `script.js` so the nav highlights correctly.

To remove a section, delete its whole block and its entries in those three places.
