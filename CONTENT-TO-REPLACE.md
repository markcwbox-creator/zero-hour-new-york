# Content to Replace

**Important:** This site contains almost no verified information about the book.
The real Amazon listing could not be accessed, so all descriptive copy has been
removed and replaced with bracketed `[ ... ]` placeholders. **Do not present any
of this as fact until you have verified it.**

## What is actually verified (kept on the site)
- **Title:** *Zero Hour: New York — The Beginning* (from the Amazon URL you supplied)
- **Availability:** it is sold on **Amazon as a Kindle / ebook** at the linked ASIN
  (`B0GCSYCY38`)
- The **New York** setting reference and skyline artwork (the words "New York" are
  in the title) — purely thematic, not a plot claim

Everything else is a placeholder.

## What was removed (was invented — do NOT reuse without verifying)
- Author name ("A. R. Vance") and the entire author bio/quote
- The whole plot/synopsis (the blackout, "9:14 P.M.", the character "Maya Cole")
- The sample excerpt / "Chapter One"
- Genre and "thriller series" / "trilogy / 1 of 3" labels
- Page count (384) and other stats
- Prices ($4.99 / $14.99) and the paperback/audiobook claims
- All reviews, star ratings, and the "4.8 average"

> The previous, invented copy still exists in this repo's **git history** if you
> ever want to refer to it as a rough draft — but it should not go live as-is.

## How to fill it in
Open any file and search (Ctrl/Cmd+F) for `[ ` or `REPLACE:` to jump between the
spots that need real content. Replace each bracketed placeholder with verified copy.

| Detail | Files |
|--------|-------|
| **Author name** | `index.html` (book cover), `author.html` (hero, bio, quote) |
| **Book description / synopsis** | `index.html` (About the Book), `story.html` (Synopsis) |
| **Genre / category** | `index.html` (book cover top) |
| **Tagline / hook** | `index.html` (hero) |
| **Themes / highlights** | `index.html` (cards), `story.html` (themes) |
| **Stats** (pages, format, pub date) | `story.html` (facts) |
| **Series details** (only if a series exists) | `story.html` (series note) |
| **Author bio, photo, social links** | `author.html` |
| **Excerpt** | `excerpt.html` (use only text you may publish) |
| **Reviews / ratings** | `praise.html`, `index.html` — real & attributable only |
| **Prices & formats** | `praise.html` (buy cards) |
| **FAQ** | `praise.html` |
| **Buy / Amazon URL** | every page — search the project for `B0GCSYCY38` to change it everywhere |

## Reviews, ratings & claims — read before launch
Never publish invented reviews, star ratings, "average" figures, prices, or any
factual claim about the book. Those are materially false advertising. Add a figure
only when it is real and verifiable (e.g. a true Amazon/Goodreads number).

## Images / branding (optional polish)
- The **book cover** (home hero) and **author photo** are CSS/SVG placeholders so
  the site needs no image files to look complete. To use real art, drop files in
  `assets/img/` and replace the `.book` block (cover) and `.author__photo` block.
- Colors live as CSS variables at the top of `assets/css/styles.css` (`:root`).
  Change `--accent` to re-theme the whole site in one edit.
