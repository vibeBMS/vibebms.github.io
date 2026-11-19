# vibebms.github.io

The landing page of the [vibeBMS](https://github.com/vibeBMS) organisation, served by GitHub Pages at the
organisation's root. The apps themselves are other repositories' Pages, under the same host:

- `/vibe/`: the web build of [vibe](https://github.com/vibeBMS/vibe), the BMS player
- `/BMSeeker/`: the web build of [BMSeeker](https://github.com/vibeBMS/BMSeeker)

## Files

```text
index.html        the page (English text; other languages come from site.js)
site.css          styles: dark by default, light with prefers-color-scheme
site.js           languages (en / ko / ja), OS detection, nightly info from the GitHub API, screenshot carousel
img/              logo and icons (from vibe's assets/logo/), screenshots (WebP), og.png
.nojekyll         serve the files as they are
```

No build step, no frameworks or CDNs: edit and push. To preview, serve the folder, e.g.
`python3 -m http.server`, and open <http://localhost:8000/> (the `/vibe/` and `/BMSeeker/` links need the real
site).

## Notes

- **Links to the apps are root-relative** (`/vibe/`, `/BMSeeker/`), so they keep working if a custom domain is
  added (the other repositories' Pages follow the organisation site's domain). Nothing hard-codes
  `vibebms.github.io`.
- **`og:image` is relative** (`img/og.png`). Most crawlers (Facebook, X, Discord, Slack) need an absolute URL there,
  so once the domain is decided, change it to e.g. `https://vibebms.github.io/img/og.png` (or the custom domain's)
  and add a matching `<meta property="og:url">`.
- **Nightly info**: `site.js` reads `api.github.com/repos/vibeBMS/{vibe,BMSeeker}/releases/tags/nightly` (cached
  15 minutes in `localStorage`) for the version, the build time and file sizes. If the API fails (it allows 60
  unauthenticated requests an hour per IP), the page says so and the download links, which point at
  `github.com/vibeBMS/<repo>/releases/download/nightly/<file>`, still work. The F-Droid part of the Android card
  shows only when the release has `fdroid.txt` (and its QR code when it has `fdroid-qr.png`).
- **File names** follow `.github/workflows/ci.yml` (job `nightly`) of vibe and `.github/workflows/nightly.yml` /
  `build.yml` of BMSeeker. If a file is renamed there, change its link in `index.html`.
- **Texts**: every string is in `site.js` (`T.en`, `T.ko`, `T.ja`), keyed by the `data-i18n*` attributes in
  `index.html`. The English text in `index.html` is what shows without JavaScript; keep both in step.
- **Screenshots** were taken from the desktop build (debug, under Xvfb) with the built-in default skins and
  generated test charts ("Test Pattern: …", made for this page; no third-party songs). The touch one shows the
  touch perspective skin at phone size, portrait and landscape, with TOUCH AREA at 25 %.

## License

`MIT OR Apache-2.0`, as vibe. The logo is vibe's (`assets/logo/`; its letters are Inter, SIL OFL 1.1, as outlines).
