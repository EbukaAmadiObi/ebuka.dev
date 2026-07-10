# pSEO Discovery Report

**Site:** ebuka.dev — Ebuka Amadi-Obi's personal portfolio (Next.js App Router)
**Date:** 2026-07-10
**Verdict:** ❌ **Not a viable programmatic SEO candidate in its current form.**

---

## Data Assets Found

| Entity | Record Count | Key Fields | Source |
|--------|-------------|------------|--------|
| Projects | 5 | image, title, description, link | Hardcoded JSX in `src/app/projects/page.jsx` |
| Experience | 4 | title, duration, description[] | `src/data/experience-data.json` (currently unused — imported by no page) |
| Blog posts | 0 | — | `src/app/blog/page.jsx` ("There's nothing here… yet.") |
| Lounge | 0 | — | `src/app/lounge/page.jsx` (empty `<div>`) |
| Travel/cities | 3 | previous, current, next city | Hardcoded consts in `src/app/page.jsx` |

Total unique content records across the whole site: **~12**, all hand-authored, none in a queryable data layer.

---

## Programmatic SEO Fitness Test

pSEO needs **50+ unique records per page type**, each carrying enough structured data to produce a genuinely differentiated page targeting a real search intent. Applying the gate:

| Requirement | This site |
|-------------|-----------|
| 50+ unique records? | ❌ Largest set is 5 projects |
| Enough data per record for a full page? | ❌ One-line descriptions only |
| Real search intent at scale? | ❌ No keyword pattern — nobody searches "[project] by Ebuka" at volume |
| Meaningfully different per page? | ❌ Would be variable-swap thin pages |
| Serves the business? | N/A — personal portfolio, not a traffic/conversion business |

## Rejected Candidates

| Entity | Reason Rejected |
|--------|----------------|
| Projects | Only 5 records; well below the 50-record floor; thin descriptions |
| Experience | Only 4 records; no search intent; belongs on an About page, not indexed spokes |
| Blog | Zero posts — this is editorial/content SEO, not *programmatic* SEO |
| Cities | 3 values driving a UI widget; no page-worthy content behind them |

## YMYL Assessment

- **YMYL category:** None
- **Risk level:** Low
- **Recommendation:** N/A — no pSEO planned.

---

## Conclusion

A personal portfolio is the classic example of a site that is **not** a pSEO fit: pSEO trades on scale (hundreds to thousands of data-backed pages matching long-tail search intent), and a portfolio's value is a handful of curated, high-intent-for-*you* pages. Manufacturing templated `[project]`/`[skill]`/`[city]` pages here would produce thin content that hurts, not helps.

**What would actually move the needle for ebuka.dev instead of pSEO:**
1. **On-page SEO fundamentals** — dynamic metadata, Open Graph/Twitter tags, canonical URLs, a `sitemap.xml` and `robots.txt`, and JSON-LD `Person` + `WebSite` schema. (Several of the `pseo-*` skills — metadata, schema, performance — apply cleanly to a small site too.)
2. **Editorial content** — write real blog posts. A genuine technical blog is the highest-leverage organic-search play for a personal site.
3. **Structured data hygiene** — `Person` schema with `sameAs` links to GitHub/LinkedIn/X so search engines build an accurate entity for you.

**Recommended next step:** Skip the pSEO pipeline. If you want, run the on-page SEO subset (metadata + schema + a sitemap/robots) as a standalone improvement — that's genuinely worth doing for a portfolio.
