# James Magpantay portfolio

A static website for GitHub Pages. No build step, no frameworks: just HTML, CSS and JavaScript.

## Files

| File | What it does |
|---|---|
| `index.html` | Page structure |
| `style.css` | Design (colors, layout, animation) |
| `script.js` | Builds the page from your content (you rarely need to touch it) |
| `data.js` | **All your content.** This is the file you edit. |
| `assets/` | Your photos, certificates, screenshots and resume |

## Put it online (GitHub Pages)

1. Sign in at github.com and create a new repository named `magpantayjames2-ux.github.io` (public).
2. Upload everything in this folder to the repository root: `index.html`, `style.css`, `script.js`, `data.js`, and the whole `assets` folder (an empty file named `.nojekyll` is optional).
3. In the repository go to **Settings, Pages**. Under "Build and deployment" choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then Save.
4. After a minute your site is live at `https://magpantayjames2-ux.github.io`.

If you prefer a different repository name, the site will be at `https://magpantayjames2-ux.github.io/<repository-name>/`. It works either way because every path in the site is relative.

To preview on your computer, double-click `index.html`. For the most accurate preview, run `python -m http.server` in this folder and open `http://localhost:8000`.

## How to add things later

Every change is two steps: **drop the image into the right folder**, then **edit `data.js`**. After editing, upload the changed files to GitHub again and the site updates.

### Add a certificate

1. Save the certificate image (JPG or PNG, ideally under 500 KB) in `assets/images/certificates/`, for example `osh-safety-officer-2.jpg`.
2. In `data.js`, find `certificates: [`. For the existing OSH card, fill in `issuer`, `date` and `image`:

```js
image: "assets/images/certificates/osh-safety-officer-2.jpg",
issuer: "Training provider name",
date: "Month Year",
```

3. For a new certificate, copy the commented example block under it, remove the `/*` and `*/`, and fill it in. Add as many as you like.

Blank fields are hidden automatically. If you blur out a certificate number first, the preview and the full-size view are both blurred.

### Add seminars, workshops and trainings

Same idea in the `training: [ ... ]` list. Use the example inside the comment. Images go in `assets/images/training/`.

### Add photos to Education

Put photos (graduation ceremony, thesis, OJT) in `assets/images/education/`, then add them to `photos: []` under `education`:

```js
photos: [
  { src: "assets/images/education/ceremony-1.jpg", caption: "Graduation ceremony" },
  { src: "assets/images/education/thesis-demo.jpg", caption: "Thesis demo" }
],
```

### Add SPLI Portal screenshots (sanitized only)

Put the images in `assets/images/projects/spli-portal/`, then fill `screenshots: []` under `featured`:

```js
screenshots: [
  { src: "assets/images/projects/spli-portal/dashboard.png", caption: "Dashboard", device: "desktop" },
  { src: "assets/images/projects/spli-portal/mobile.png", caption: "Mobile view", device: "mobile" }
],
```

Use `device: "mobile"` for phone screenshots so they get a phone-style frame. The "coming soon" panel disappears as soon as there is at least one screenshot.

Before you publish a screenshot, check that it shows **no** employee names, IDs, emails, internal documents or real approval records.

### Add Visitor Logs or thesis photos

Same as above, in the matching project under `projects: [ ... ]`, using `screenshots: []`. Folders: `assets/images/projects/visitor-logs/` and `assets/images/projects/thesis/`. Use a copy of the Visitor Logs system with dummy data for screenshots.

### Add an achievement photo

In `achievements`, set `image: "assets/images/achievements/your-photo.jpg"` on the achievement. Leave it empty for the clean text card.

### Add your resume

1. Save the PDF as `assets/resume/James-Magpantay-Resume.pdf`.
2. In `data.js`, under `resume`, change `enabled: false` to `enabled: true`.

Use a web version of your resume without your phone number or home address, since the PDF is public.

### Change wording

About me, skills, services, highlights, contact text: all in `data.js`. The About Me text is a draft, so edit it until it sounds like you.

## Image tips

- Resize large photos to about 1600 px on the long side before uploading so the site loads fast.
- Use lowercase file names without spaces (`osh-certificate.jpg`, not `OSH Certificate (1).JPG`).
- File names are case sensitive on GitHub Pages: `Photo.jpg` and `photo.jpg` are different files.
