# Edgaroo GitHub Pages Site

This repository is a GitHub Pages-ready static version of the Edgaroo website.

## What is included

- Plain static `index.html`
- `assets/` for CSS, JavaScript, images, and fonts
- `.nojekyll` so GitHub Pages will not ignore files or folders with leading underscores
- GitHub Actions workflow at `.github/workflows/deploy-pages.yml`
- `404.html`, `robots.txt`, and `sitemap.xml`

## Deploy on GitHub Pages

### Option 1: Use this repository as-is
1. Create a GitHub repository.
2. Upload all files from this folder to the repository root.
3. Push to the `main` branch.
4. In GitHub, go to **Settings → Pages**.
5. Set **Source** to **GitHub Actions**.

The included workflow will publish the site automatically.

## Local preview

Open `index.html` directly in a browser, or run a simple local server:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Notes

- This version does **not** depend on Next.js runtime files.
- Asset paths are relative, so it works locally and on GitHub Pages project sites.
- The contact form uses a `mailto:` fallback for static hosting compatibility.
