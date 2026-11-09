# James Magpantay portfolio

Static site for Vercel. No build step.

## Deploy
1. Push this folder to a GitHub repository (the files in the root of the repo).
2. In Vercel: Add New Project, import the repo, framework preset "Other", leave build settings empty, Deploy.

## Add the OSH certificate
1. Save the image as `assets/certs/osh-safety-officer-ii.jpg` (JPG, about 1400 px wide).
2. Open `certificates.html`, find `ADD A CERTIFICATE`, delete the `<!--` and `-->` lines around the block, and set the date.
3. In `index.html` change `data-count="5"` and the text `5` in the "certificates earned" highlight to the new total.

## Other updates
- Resume PDF: replace `assets/resume/James-Magpantay-Resume.pdf` (keep phone and home address off it, the file is public).
- Photos: put them in `assets/img/` and reference them from the page that shows them.
