# Azan Khan — Personal Portfolio

Responsive dark portfolio built with plain HTML, CSS and JavaScript. It can be deployed to Vercel as a static site without a build command or framework dependencies.

## Files
- `index.html` — page content and metadata
- `styles.css` — responsive layout, colors, project artwork and mobile styling
- `script.js` — mobile navigation, scroll progress, copy-profile action and footer year
- `public/` — place your portrait and project screenshots here

## Add your profile photo
1. Put your image in `public/` and name it `profile.jpg`.
2. In `index.html`, find `<div class="profile-photo" id="profilePhoto">` and replace its inside placeholder with:
   `<img src="public/profile.jpg" alt="Portrait of Azan Khan" class="real-profile-photo">`
3. Add this CSS rule near the bottom of `styles.css`:
   `.real-profile-photo{width:100%;height:100%;object-fit:cover;object-position:center;display:block}`
4. Open `index.html` to check the crop. Adjust `object-position:center 25%` if needed.

## Add a CV later
1. Save your CV PDF as `Azan-Khan-CV.pdf` in the website root (same folder as `index.html`).
2. In `index.html`, add a link where you want the CV button:
   `<a class="button button-secondary" href="Azan-Khan-CV.pdf" target="_blank" rel="noreferrer">View my CV ↗</a>`
   Or use `download` instead of `target="_blank"` to encourage downloading.
3. Upload the PDF with the rest of the site files. Do not add a CV until you are happy for the public to access it.

## Add real project screenshots
1. Put screenshots in `public/`, e.g. `public/civicai-dashboard.jpg` and `public/social-elevate-home.jpg`.
2. In `index.html`, find the matching project card and add an image, e.g.:
   `<img class="project-screenshot" src="public/civicai-dashboard.jpg" alt="CivicAI dashboard screenshot">`
3. Add this rule to `styles.css`:
   `.project-screenshot{display:block;width:100%;height:100%;object-fit:cover}`
   For an image within the visual area, give its container a defined height and `overflow:hidden`.
4. Use real screenshots only. The current CSS project illustrations are concept mockups, not screenshots of shipped products.

## Preview locally
Keep `index.html`, `styles.css` and `script.js` together in the same folder. Double-click `index.html` to preview it. Internet access is only needed for the externally hosted Google Fonts; the core design and interactions are local.

## Deploy to Vercel using GitHub
1. Create a GitHub repository named `azan-portfolio`.
2. Upload the contents of this folder to the repository root, preserving the `public/` folder.
3. Sign in to https://vercel.com and import that GitHub repository using **Add New → Project**.
4. Keep the root directory as `./`. No build command is needed; this is a static HTML website. If Vercel asks for an output directory, use `.`.
5. Deploy. Check the live URL on desktop and mobile. Later GitHub commits will trigger redeployment when the repository is connected.

## Included project links
- Afaq Construction — https://afaq-construction-company.vercel.app/?utm_source=chatgpt.com
- China Hardware — https://chinahardwareshop.com/?utm_source=chatgpt.com
- Social Elevate — https://social-elevate.netlify.app/?utm_source=chatgpt.com
- Health Lens — https://health-lens-website.netlify.app/?utm_source=chatgpt.com
- Bouquet Studio — https://bouquetstudio.netlify.app/?utm_source=chatgpt.com
- Crystal Drop — https://crystaldrop.netlify.app/?utm_source=chatgpt.com
- CivicAI — https://civic-ai-website.netlify.app/
- CivicAI 2 — https://civicaisecond.netlify.app

## Social profiles
- GitHub — https://github.com/ctrlazan?utm_source=chatgpt.com
- Facebook — https://www.facebook.com/profile.php?id=61572878365192&\&utm_source=chatgpt.com
- Instagram — https://www.instagram.com/ctrl.azan/?utm_source=chatgpt.com
- TikTok — https://www.tiktok.com/@ctrlazan?utm_source=chatgpt.com
- LinkedIn — https://www.linkedin.com/in/ctrlazan/?utm_source=chatgpt.com

## Accuracy notes
- Project cards link to the supplied project websites, and the About section includes GitHub, Facebook, Instagram, TikTok and LinkedIn profiles.
- Project descriptions and status labels should be confirmed before public launch.
- CSS-made project illustrations are illustrative mockups. Replace them with actual screenshots when available.
- CV, email, phone, testimonials, client metrics and other social accounts are not included because verified details were not supplied.
