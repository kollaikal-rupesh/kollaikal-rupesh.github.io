# Kollaikal Rupesh — Personal academic website

Live website: **https://kollaikal-rupesh.github.io/**

This is a classic website: editable HTML pages, one shared CSS file, and a small optional JavaScript file for copying BibTeX citations. There is no framework, package installation, bundler, or compilation step. All content and navigation work without JavaScript.

## Files

```text
index.html                       Homepage, portrait, and profile links
assets/styles.css                Shared responsive design
assets/site.js                   Optional citation-copy enhancement
images/kollaikal-rupesh.webp      Owner-supplied portrait
images/social.png                Social sharing image
research/index.html              Research overview
research/audrey/index.html       Audrey research page
research/turn-1/index.html        turn-1 research page
research/turn-1-mini/index.html   turn-1-mini research page
publications/index.html          Publication listing
publications/<slug>/index.html   Individual publication and citation pages
cv/index.html                    Background and CV contact page
404.html                         Custom missing-page response
sitemap.xml                      Public page inventory
robots.txt                       Crawler configuration
scripts/check_site.py            Optional checks (Python standard library)
.github/workflows/pages.yml      Automatic GitHub Pages deployment
```

## Preview locally

Serve this directory with any static web server. For example, with Python 3.9 or newer:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Open **http://localhost:8000/**. Use a server rather than opening HTML directly from disk because links and assets use paths relative to the website root.

Validate local links, metadata, structured data, and citation controls:

```bash
python3 scripts/check_site.py
```

No Python code runs on the public website. Python is only used for optional local checks and GitHub workflow validation.

## Publish updates

The public repository is **kollaikal-rupesh/kollaikal-rupesh.github.io**. Push changes to `main`:

```bash
git add .
git commit -m "Update academic website"
git push origin main
```

The workflow validates the HTML, collects the static website files, and deploys them to GitHub Pages. It installs no website packages and performs no frontend build. Documentation and validation scripts are excluded from the deployment artifact.

Hosting uses GitHub Pages with HTTPS. A custom domain can be connected later; registration and annual renewal are separate costs. No domain was purchased.

## Edit content

Edit the corresponding HTML file directly. The homepage includes selected research, publications, experience, education, open-source contributions, recognition, and research philosophy. Keep summaries on the homepage and detail pages consistent when changing a project or publication.

Header and footer markup is deliberately plain HTML and appears in each page. Apply shared navigation changes to every page. Visual design is centralized in `assets/styles.css`.

To add a project or publication:

1. Copy a similar detail page into a new directory with an `index.html` file.
2. Update its title, description, canonical URL, social metadata, content, and structured data where applicable.
3. Add links from the homepage and appropriate index page.
4. Add the canonical URL to `sitemap.xml`.
5. Run the checker, inspect the page, and push.

Research numbers must retain checkpoint, benchmark population/version, source, and date context. Do not mix original benchmark results with later expanded evaluations. See `VERIFICATION.md` for sources and pending factual questions.

## Portrait and profile links

The supplied portrait is stored at `images/kollaikal-rupesh.webp`, optimized to approximately 25 KB. The homepage uses explicit image dimensions and responsive CSS. To replace it, preserve the path or update the homepage image reference and dimensions.

GitHub and LinkedIn appear below the name on the homepage and in each page’s footer. Keep the Person structured data's `sameAs` links consistent with the actual profiles.

## Add the academic CV when supplied

Place the genuine document at:

```text
cv/kollaikal-rupesh-cv.pdf
```

Then add these links to `cv/index.html` and remove the interim email-request sentence if appropriate:

```html
<a href="/cv/kollaikal-rupesh-cv.pdf" target="_blank" rel="noopener noreferrer">View CV (PDF, new tab)</a>
<a href="/cv/kollaikal-rupesh-cv.pdf" download>Download CV (PDF)</a>
```

The public URL stays the same whenever the PDF is replaced. The checker fails if a local PDF link points to a missing file. No substitute CV has been generated; the live site currently offers a CV request by email. Reconcile the supplied role dates/titles with the latest CV before final application submission.

## Custom domain or another static host

For GitHub Pages, verify domain ownership, configure the domain in **Settings → Pages**, set DNS using [GitHub’s current instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site), and enable HTTPS. GitHub supports redirects between properly configured apex and `www` domains.

When the primary domain changes, replace `https://kollaikal-rupesh.github.io` in all page metadata/structured data, `sitemap.xml`, and `robots.txt`, and update the expected sitemap origin in `scripts/check_site.py`. Keep local paths unchanged. This site is intended to live at the root of a domain, as it does on the current user-site address.

Any static host, including Vercel, can serve these files directly with no framework/build command. Upload only the HTML pages, `assets/`, `images/`, `research/`, `publications/`, `cv/`, `favicon.svg`, `robots.txt`, `sitemap.xml`, and `.nojekyll`.

## Verification and limitations

See `VERIFICATION.md` for research evidence and omitted claims, and `QA.md` for completed checks and limits. The source contains no personal phone number, residential address, GPA, or private circumstances. No analytics or third-party browser requests are required to render a page.

The previous Next.js implementation remains available in Git history; current source and deployment use plain HTML, CSS, and optional JavaScript.
