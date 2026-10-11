# Trinh Van Thanh — Developer Portfolio

A responsive, dark navy portfolio for a Computer Science student seeking a Software Engineer internship, with a focus on backend engineering. Built with semantic HTML, CSS, and a small amount of vanilla JavaScript. No build step or package installation is required.

Live URL: [https://trinhthanh-25.github.io](https://trinhthanh-25.github.io)

## Structure

```text
index.html          Profile, about, projects, skills, and contact
styles.css          Shared tokens, layouts, responsive styles, focus states
config.js           LinkedIn URL and resume availability
script.js           Mobile navigation and optional resource links
assets/
  banner.svg        Shared visual identity with the GitHub profile README
  favicon.svg       Local favicon
.nojekyll           Serve the static files without Jekyll processing
CONTENT-AUDIT.md    Source references and content decisions
```

The public GitHub avatar is loaded from `https://github.com/TrinhThanh-25.png`. All other visual assets are local. System fonts avoid external font dependencies.

## Local preview

From this repository root, run:

```sh
python -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000). The site can also be opened directly through `index.html`; an HTTP server is preferred for checking asset paths.

## GitHub Pages deployment

Keep `index.html` and `.nojekyll` at the root of the `main` branch. In this repository’s **Settings → Pages**, select **Deploy from a branch**, then **main** and **/ (root)**, and save. No custom domain or workflow is required.

The expected URL is [https://trinhthanh-25.github.io](https://trinhthanh-25.github.io). GitHub may take a few minutes to build changes. Existing Pages configuration should be preserved if it already serves `main` from the root.

## LinkedIn

In `config.js`, replace the intentional placeholder `YOUR_LINKEDIN_URL` with your exact HTTPS LinkedIn profile URL, such as the URL copied from your own profile. The script accepts `linkedin.com/in/` and `www.linkedin.com/in/` profile URLs.

Until configured, the hero shows “LinkedIn — coming soon” and no broken link is exposed. When configured, the hero and contact section are updated automatically. Also add the same URL to the contact links in the separate `TrinhThanh-25/TrinhThanh-25` profile README and remove its pending comment.

## Resume

Place your real PDF at:

```text
assets/Trinh-Van-Thanh-Resume.pdf
```

Then set `resumeAvailable: true` in `config.js`. Leave it `false` while the PDF is missing; the hero will display “Resume — coming soon.” A different local PDF path can be configured through `resumePath`. No resume has been fabricated or included.

## Content maintenance

Edit project descriptions in `index.html` and keep the separate GitHub profile README in sync. Recheck project source before adding technology or implementation claims. Update student status and internship availability as needed.

The current version intentionally omits the unfinished marketplace project at the owner’s request. Tourism Media’s backend is featured. Languages reflect the owner’s supplied profile; project and tooling claims are supported by inspected source. See `CONTENT-AUDIT.md` for evidence and exclusions.

## Accessibility and behavior

- Semantic landmarks, a skip link, labeled navigation, and visible keyboard focus.
- Mobile menu with `aria-expanded`, Escape dismissal, and focus restoration.
- Navigation remains available if JavaScript is disabled.
- Responsive layouts for desktop, tablet, and mobile; reduced-motion preference respected.
- Missing LinkedIn and resume resources remain visibly pending instead of linking to invalid destinations.

## Intentional placeholders

- `YOUR_LINKEDIN_URL` in `config.js` (and the profile README’s maintainer comment).
- The resume PDF path is reserved; the file is not yet present.

There are no unfinished project placeholders, fabricated metrics, stats widgets, or framework dependencies.
