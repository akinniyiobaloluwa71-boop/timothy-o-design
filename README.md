# Timothy O Design — Portfolio Website

A one-page portfolio site for Akinniyi Timothy Obaloluwa (Timothy O Design).

## Project structure

```
timothy-o-design/
├── index.html          → all page content and sections
├── css/
│   └── style.css       → all styling (colors, layout, responsive rules)
├── js/
│   └── script.js       → mobile menu + scroll animation
└── assets/
    └── images/
        ├── logo.png
        ├── profile.jpg
        ├── poster-hours-of-restoration.jpg
        └── poster-come-unto-christ.jpg
```

Everything is plain HTML/CSS/JS — no build step, no frameworks, no dependencies to install.

## How to preview it locally

**Easiest option — just open the file:**
Double-click `index.html` and it will open in your browser. This works fine for viewing, but a couple of browsers block local image loading slightly, so if images don't show, use the option below instead.

**Recommended option — run a tiny local server:**

If you have Python installed (most Macs/Linux do by default):
```bash
cd timothy-o-design
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

If you have Node.js installed:
```bash
cd timothy-o-design
npx serve
```

Either way, you'll see the site exactly as it will appear online.

## How to deploy it to Netlify

**Option A — Drag and drop (fastest, no account setup needed beyond signing in):**
1. Go to [app.netlify.com](https://app.netlify.com) and log in (or create a free account).
2. On your dashboard, find the **"Add new site" → "Deploy manually"** area (it shows a drag-and-drop box).
3. Drag the whole `timothy-o-design` folder into that box.
4. Netlify uploads it and gives you a live link (something like `random-name-123.netlify.app`) within seconds.
5. To use your own domain or a nicer subdomain, go to **Site settings → Domain management** and change the site name or add a custom domain.

**Option B — Connect to GitHub (better if you'll keep editing the site):**
1. Create a new repository on GitHub and push this folder to it.
2. In Netlify, choose **"Add new site" → "Import an existing project"** and connect your GitHub account.
3. Select the repository. Leave the build command empty and set the publish directory to the project root (`/`).
4. Deploy. From then on, every time you push a change to GitHub, Netlify updates the live site automatically.

## Making future edits

- **Text:** open `index.html` and edit the text directly — it's grouped into clearly labelled sections (`<!-- HERO -->`, `<!-- ABOUT -->`, `<!-- SERVICES -->`, etc.).
- **Colors:** open `css/style.css` and edit the values at the very top under `:root` — for example, change `--sky` or `--brand-blue` to adjust the accent color everywhere at once.
- **Adding portfolio projects:** in `index.html`, find the `portfolio-grid` section and copy one of the existing `<article class="project-card">` blocks, replacing the image, title, category and description. Drop new images into `assets/images/` first.
- **Contact details:** all contact links are in the `contact-links` block near the bottom of `index.html`.
