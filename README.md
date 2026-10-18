# Azan Khan — Portfolio

A hand-built, dependency-free portfolio website: semantic HTML, one stylesheet, one small script. No framework, no build step, no tracking, and no external requests (fonts and icons are self-hosted or inlined), so it loads fast and deploys anywhere that serves static files.

## What's inside

| Section | Content |
| --- | --- |
| Hero | Portrait, headline, "Explore My Work" and "Let's Connect" buttons, location and quick facts |
| About | Short bio and an at-a-glance fact sheet |
| Selected work | Eight live projects, each with its own illustrative artwork and a link to the exact live URL |
| Skills & technologies | Six groups of tags, with no invented percentages |
| Education & credentials | Education, certifications and the RELO English Access Microscholarship Program |
| Contact | Email (mailto + copy button) and five social profiles |

The artwork on the project cards is original, illustrative SVG, not screenshots of the live sites.

## Run it locally

No install is needed. Serve the folder with any static server:

```bash
# Option 1: Node
npx serve .

# Option 2: Python
python3 -m http.server 8080
```

Then open the printed address (for example http://localhost:3000 or http://localhost:8080).
Opening `index.html` directly by double-click also works in most browsers.

`package.json` is included only for convenience: `npm start` runs `npx serve .`.

## Deploy

The folder is the site. Upload it as-is.

- **Netlify:** drag the folder onto <https://app.netlify.com/drop>, or connect the Git repository (no build command, publish directory `.`).
- **Vercel:** `npx vercel` from this folder, or import the repository (Framework preset: *Other*, no build command, output directory `.`).
- **GitHub Pages:** push to a repository, then Settings → Pages → deploy from the `main` branch, root folder.

### After you have a live domain (one-time step)

Social platforms need an absolute image address for link previews. In `index.html`, change these two values from the relative path to your full domain:

```html
<meta property="og:image"  content="https://YOUR-DOMAIN/assets/img/og-image.jpg">
<meta name="twitter:image" content="https://YOUR-DOMAIN/assets/img/og-image.jpg">
```

You can also add `<meta property="og:url" content="https://YOUR-DOMAIN/">` and a canonical link.

## Editing content

Everything is plain HTML in `index.html`.

- **Projects:** each project is one `<article class="card">`. Change its `href`, text, or accent colour (`--accent` and `--m-bg` in the `style` attribute).
- **Skills:** edit the `<ul class="chips">` lists in the Skills section.
- **Education and credentials:** edit the `<ol class="timeline">` lists.
- **Colours, fonts, spacing:** design tokens are at the top of `assets/css/styles.css` (`:root`).
- **Email:** appears in the Contact section, the copy button's `data-email`, and the JSON-LD block near the top of the file.

## Project structure

```
azan-portfolio/
├── index.html
├── package.json
├── robots.txt
├── README.md
└── assets/
    ├── css/styles.css
    ├── js/main.js
    ├── fonts/            self-hosted woff2 (Instrument Serif, Inter Tight, JetBrains Mono)
    └── img/              portrait (webp + jpg), favicon (svg + png), apple-touch-icon, og-image.jpg
```

## Accessibility and performance

- Semantic landmarks, a skip link, visible focus states, and labelled external links (new-tab warnings for screen readers).
- Full keyboard support, including the mobile menu (Escape closes it).
- `prefers-reduced-motion` turns off animations, the cursor glow and scroll reveals.
- The site is fully readable with JavaScript disabled; JavaScript only adds the mobile menu, reveals, hover spotlight and the copy-email button.
- Portrait is served as responsive WebP with a JPEG fallback.

## Credits

- Fonts: Instrument Serif, Inter Tight and JetBrains Mono, all under the SIL Open Font License (via Fontsource).
- GitHub, Instagram, TikTok and Facebook glyphs: Simple Icons (CC0). The LinkedIn glyph is based on Font Awesome Free (CC BY 4.0).
