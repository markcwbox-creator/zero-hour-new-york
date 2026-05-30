# Zero Hour: New York — Promotional Website

A 4-page static marketing site for the political thriller *Zero Hour: New York*
by John O'Brien. Hand-built HTML/CSS/JS — no build step, no dependencies, no framework.

## Pages
| File | Page |
|------|------|
| `index.html` | Home / landing (cinematic hero, hook, CTA) |
| `story.html` | The Story — synopsis, characters, series note |
| `author.html` | About the Author — bio, quote, other works |
| `praise.html` | Praise & Buy — reviews, buy options, newsletter, FAQ |

## View it locally
Just open `index.html` in any browser — double-click it, or:

```powershell
# optional: serve with a tiny local web server (nicer for relative links)
python -m http.server 8000
# then visit http://localhost:8000
```

## Edit the content
The site is populated with **verified details from the Amazon listing**. A few
items that aren't known yet are shown as **Placeholder** blocks (an amber dashed
box / badge, styled via `.is-ph` / `.ph-badge`) — author bio, photo, social links,
and reader reviews. See [`CONTENT-TO-REPLACE.md`](CONTENT-TO-REPLACE.md) for the
full status list. To change the Amazon link everywhere, find-and-replace `B0GCSYCY38`.

## Customize the look
All colors and fonts are CSS variables at the top of
[`assets/css/styles.css`](assets/css/styles.css). Change `--accent` to re-theme
the whole site, or `--display` / `--body` to swap fonts.

## Structure
```
index.html  story.html  author.html  praise.html
assets/
  css/styles.css   # design system + responsive layout
  js/main.js       # mobile nav, scroll-reveal, demo newsletter form
  img/             # (empty) optional real cover art / author photo
```

## Notes
- The book cover and author photo are pure CSS/SVG placeholders, so the site
  renders complete with zero image files.
- The newsletter form is front-end only (no backend) — it shows a confirmation
  but stores nothing.
- Fonts (Oswald + Inter) load from Google Fonts, so the styled type needs an
  internet connection; everything else works fully offline.
