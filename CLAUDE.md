# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (exposed on all interfaces via --host)
npm run build     # Production build
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

There are no tests in this project.

## Architecture

This is Ebuka Amadi-Obi's personal portfolio site — a React SPA built with Vite, deployed on Vercel.

**Routing** (`src/App.jsx`): React Router v7 with `useRoutes`. Routes: `/` (Home), `/blog`, `/projects`, `/lounge`. All unknown routes and `/card` redirect to `/`. Vercel is configured (`vercel.json`) to rewrite all non-asset paths to `/` for SPA client-side routing.

**Analytics**: PostHog wraps the entire app in `src/main.jsx`, configured via `VITE_PUBLIC_POSTHOG_KEY` and `VITE_PUBLIC_POSTHOG_HOST` env vars.

**Styling**: Tailwind CSS v4 (via `@tailwindcss/vite` plugin — no `tailwind.config.js`). Two CSS files:
- `src/index.css` — global base styles, typography scale, and the `.colsection` layout utility (responsive centered content column: 80% width on mobile, 62.5% on desktop)
- `src/styles/globals.css` — shadcn/ui CSS variable tokens and `tw-animate-css` import

**UI components** (`src/components/ui/`): shadcn/ui-style components (Button, Card, Carousel, HoverCard). The `TouchHoverCard` wrapper in `hover-card.jsx` is a custom extension that makes hover cards tap-to-toggle on touch devices.

**Color palette**: Dark warm brown theme — background `#1f0e07`, primary text `#cd9272`, secondary text `#ab795e`, links `#8b3923`.

**Content data**: Experience entries live in `src/pages/home/experience-data.json`. Project entries are hardcoded as `<ProjectEntry>` components in `src/pages/projects/projects.jsx`.

**Font**: Geist variable font, self-hosted from `public/fonts/`, loaded via `@font-face` in `src/index.css`.
