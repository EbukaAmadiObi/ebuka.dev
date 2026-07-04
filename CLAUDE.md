# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Next.js, http://localhost:3000)
npm run build     # Production build
npm run start     # Serve the production build locally
npm run lint      # Run ESLint
```

There are no tests in this project.

## Architecture

This is Ebuka Amadi-Obi's personal portfolio site — a Next.js (App Router) app deployed on Vercel.

**Routing** (`src/app/`): File-based App Router. Routes: `/` (`src/app/page.jsx`), `/blog`, `/projects`, `/lounge`. `src/app/[...catchAll]/page.jsx` redirects any unmatched path (including the legacy `/card` route) to `/`. Path alias `@/*` maps to `./src/*` (see `jsconfig.json`).

**Analytics**: PostHog wraps the app via `src/app/providers.jsx` (a client component rendered from the root layout), configured via `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` env vars.

**Metadata**: Page title, Open Graph/Twitter tags, icons, and the AdSense script live in `src/app/layout.jsx`, using Next's metadata API rather than a static `index.html`.

**Styling**: Tailwind CSS v4 (via `@tailwindcss/postcss` in `postcss.config.mjs` — no `tailwind.config.js`). Two CSS files, both imported from `src/app/layout.jsx`:
- `src/index.css` — global base styles, typography scale, and the `.colsection` layout utility (responsive centered content column: 80% width on mobile, 62.5% on desktop)
- `src/styles/globals.css` — shadcn/ui CSS variable tokens and `tw-animate-css` import

**UI components** (`src/components/ui/`): shadcn/ui-style components (Button, Card, Carousel, HoverCard). The `TouchHoverCard` wrapper in `hover-card.jsx` is a custom extension that makes hover cards tap-to-toggle on touch devices. Components using hooks or browser APIs (header, footer, split-flap, hover-card, carousel) are marked `"use client"`.

**Color palette**: Dark warm brown theme — background `#1f0e07`, primary text `#cd9272`, secondary text `#ab795e`, links `#8b3923`.

**Content data**: Experience entries live in `src/data/experience-data.json` (currently unused — not imported by any page). Project entries are hardcoded as `<ProjectEntry>` components in `src/app/projects/page.jsx` / `src/app/projects/project_entry.jsx`.

**Font**: Geist variable font, self-hosted from `public/fonts/`, loaded via `@font-face` in `src/index.css`.
