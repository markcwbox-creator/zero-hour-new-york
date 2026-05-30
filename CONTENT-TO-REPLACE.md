# Content status

The site is now populated with **verified details from the Amazon listing**.
A few spots remain as bracketed `[ ... ]` placeholders because that information
isn't available yet. Search any file for `[ ` to find them.

## Verified content now live (from the Amazon listing)
- **Title:** Zero Hour: New York — *The blackout was only the beginning*
- **Author:** John O'Brien
- **Genre:** political thriller (Mystery, Thriller & Suspense › Crime; Action & Adventure)
- **Series:** Book 1 of 2 in the ZERO HOUR series (Book 2: *The Republic of Compromises*)
- **Length / language / date:** 706 pages · English · published December 27, 2025
- **Prices:** Kindle $7.99 (free with Kindle Unlimited) · Paperback $15.99 · 2-book set $15.98
- **Synopsis & characters:** official description; Marcus Vance, Ash, Mayor Lyla Serrano, Constance Drake
- **Buy links:** point to the Amazon ASIN `B0GCSYCY38`

## Still placeholder — replace when you have it
| Item | File(s) | Notes |
|------|---------|-------|
| **Author bio (full)** | `author.html` | Only "author of the ZERO HOUR series" is verified; add the real bio. |
| **Author photo** | `author.html` | Swap the `.author__photo` block for `<img src="assets/img/author.jpg" …>`. |
| **Author social links** | `author.html` | The X / IG / Goodreads / email links are `#` placeholders. |
| **Author quote** | `author.html` | Use a real, attributable quote. |
| **Reviews / ratings** | `praise.html`, `index.html` | Empty placeholders — add only genuine, attributable reviews. The listing showed no star rating. |
| **Full excerpt (optional)** | `excerpt.html` | Currently uses the official description hook + a link to Amazon's free sample. Paste an authorized in-book passage if you want a full chapter on the page. |
| **Book cover art** | `index.html` | The `.book` block is a CSS mockup; replace with the real cover image if desired. |

## Things to keep honest before launch
- Never add invented reviews, star ratings, or "average" figures.
- Prices change — the buy buttons go to Amazon (authoritative), and the buy page
  notes that listed prices may change.

## Customize the look
Colors/fonts are CSS variables at the top of `assets/css/styles.css` (`:root`).
Change `--accent` to re-theme the whole site in one edit.
