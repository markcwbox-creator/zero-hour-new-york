# Content to Replace

All demo copy is improvised placeholder text. Every spot you'll want to swap is
marked in the HTML with a comment: `<!-- REPLACE: ... -->`. This checklist maps
each marker to the file(s) it appears in.

> Tip: open a file and search (Ctrl/Cmd+F) for `REPLACE:` to jump between them.

## Global (appears on every page)
| What | Marker | Where |
|------|--------|-------|
| **Buy / Amazon URL** | `REPLACE: buy URL` | header nav + footer + every CTA button, all 5 pages. Search the project for `B0GCSYCY38` to replace it everywhere at once. |
| **Author name** | `REPLACE: author name` | `index.html` (book cover), `author.html` (hero, bio, quote) |
| Site brand wordmark | — | `ZERO HOUR` in the header `.brand` and footer `.footer-brand` |

## index.html (Home)
- `REPLACE: title / subtitle` — the big hero title + "Book One" subtitle
- `REPLACE: one-line hook / tagline` — the hero tagline sentence
- `REPLACE: rating / format meta` — the `★★★★★ 4.8 · Kindle & Paperback` line
- `REPLACE: featured blurb` — the social-proof quote strip
- `REPLACE: short premise paragraph` — the "Premise" section lede
- (The 3 "Why Read" cards are generic — edit freely.)

## story.html (The Story)
- `REPLACE: full synopsis` — the main multi-paragraph synopsis
- `REPLACE: page count` — `384`
- `REPLACE: series length` — `1 of 3`
- `REPLACE: series description` — the "Why The Beginning?" note
- (Pull quote + theme cards are improvised — edit to taste.)

## author.html (Author)
- `REPLACE: author headshot` — swap the placeholder `.author__photo` block for
  `<img src="assets/img/author.jpg" alt="Author name" class="author__photo">`
- `REPLACE: social links` — the 4 `.socials` anchors (X / IG / Goodreads / email)
- `REPLACE: author bio` — the 3-paragraph biography
- `REPLACE: author name` — hero heading + quote attribution

## excerpt.html (Excerpt)
- `REPLACE: excerpt text` — the entire Chapter One sample. Paste your real
  opening; keep the `<p class="scene-break">· · ·</p>` and final
  `<p class="fade-end">` for the styled break + fade-out effect.

## praise.html (Praise & Buy)
- `REPLACE: review quotes & attributions` — the 4 review cards
- `REPLACE: price` (Kindle) — `$4.99`
- `REPLACE: price + link` (Paperback) — `$14.99` + its button URL
- `REPLACE: price + link / or remove if N/A` (Audiobook) — remove the card if there's no audiobook
- `REPLACE: FAQ answers` — the 4 FAQ entries

## Images / branding (optional polish)
- The **book cover** (home hero) and **author photo** are CSS/SVG placeholders so
  the site needs no image files to look complete. To use real art, drop files in
  `assets/img/` and replace the `.book` block (cover) and `.author__photo` block.
- Colors live as CSS variables at the top of `assets/css/styles.css` (`:root`).
  Change `--accent` to re-theme the whole site in one edit.
