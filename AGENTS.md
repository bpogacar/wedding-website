# CLAUDE.md

This file provides context for Claude Code, GitHub Copilot, and other AI assistants working with this repository.

## Project Overview

A wedding website built with Next.js and hosted on Vercel. The homepage remains the primary single-page wedding site, displaying wedding information organized into stacked sections (hero, details, itinerary, travel, attractions, registry, wedding party) below a navigation bar, with a sticky footer. The site also includes a dedicated `/rsvp` route for invited guests to submit persistent RSVP responses.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Hosting:** Vercel
- **Package Manager:** npm

## Project Structure

    /app
      /api/rsvp         # Server-only RSVP search, household lookup, and submit endpoints
      /components        # Reusable UI components used across sections
        countdown.tsx    # Countdown timer to the wedding date
        footer.tsx       # Sticky footer
        nav.tsx          # Top navigation bar
      /lib
        db.ts            # Neon Postgres connection helper
        rsvp.ts          # RSVP server queries and validation helpers
        rsvp-config.ts   # RSVP copy, deadline, and meal options
        wedding-data.ts  # Single source of truth for all wedding content
      /rsvp              # Dedicated RSVP route and client form
      /sections          # Page sections, stacked vertically on the single page
        herosection.tsx
        detailssection.tsx
        itinerarysection.tsx
        travelsection.tsx
        attractionssection.tsx
        registrysection.tsx
        weddingpartysection.tsx
      globals.css        # Global styles and Tailwind directives
      layout.tsx         # Root layout (nav + footer wrapping)
      page.tsx           # Main page composing all sections in order
    postcss.config.js
    tailwind.config.js
    tsconfig.json
    vercel.json
    next.config.mjs
    package.json
    /db
      /migrations        # SQL schema changes
      /seeds             # Server-only guest/household seed data

## Architecture & Conventions

### Data Flow

- **All content lives in `/app/lib/wedding-data.ts`** as a single exported `const wedding` object containing structured JSON-like data.
- Each section component imports from `wedding-data.ts` and renders its corresponding slice of the data.
- **When adding new content (e.g., new itinerary item, attraction, registry link), update `wedding-data.ts` rather than hardcoding values inside section components.**
- When adding a new field, update both the data object and the TypeScript types (if defined) so consumers stay type-safe.
- RSVP-specific copy, deadline, and meal options live in `/app/lib/rsvp-config.ts`.
- RSVP guest/household records live in Neon Postgres and should be managed through SQL migrations/seeds or Neon directly, not through client-bundled data files.
- Do not expose the full RSVP guest list to the browser. Use the server-side RSVP API routes for search and household loading.

### Components vs. Sections

- **`/app/components/`** — small, reusable pieces (nav, footer, countdown) that may appear in `layout.tsx` or be reused across sections.
- **`/app/sections/`** — large, page-level building blocks. Each section is self-contained and represents one visible "block" on the page.

### Page Composition

- `app/layout.tsx` wraps everything with the nav bar and sticky footer.
- `app/page.tsx` stacks all section components vertically in the desired display order.
- `app/rsvp/page.tsx` is the dedicated RSVP route. Keep the rest of the wedding content on the homepage unless a separate route is intentional.
- To reorder sections on the page, edit `page.tsx`.
- To add a new section: create a file in `/app/sections/`, add corresponding data to `wedding-data.ts`, and import/render it in `page.tsx` (and add a nav link in `nav.tsx` if it should be scrollable to).

### Styling

- Use **Tailwind utility classes** for styling. Avoid inline styles and custom CSS unless absolutely necessary.
- Global styles and Tailwind base layers live in `globals.css`.
- Keep the visual style consistent with the existing wedding aesthetic across all sections.

### Navigation

- The nav bar in `nav.tsx` uses anchor links to scroll to each section. When adding/removing/renaming a section, update the nav links and ensure the section has a matching `id` attribute.

## Development

    npm install        # install dependencies
    npm run dev        # start dev server (http://localhost:3000)
    npm run build      # production build
    npm run start      # run production build locally
    npm run lint       # lint the codebase

## RSVP

- RSVP persistence uses Neon Postgres via `@neondatabase/serverless`.
- Required environment variable: `DATABASE_URL`.
- Apply SQL files in `db/migrations/` before using the RSVP API routes.
- Guest list seed files belong in `db/seeds/` and must stay server-only.
- RSVP submissions are household-level lookups with per-guest responses. Each guest may have at most one current response, and submissions upsert existing responses.
- Server validation in `app/lib/rsvp.ts` is authoritative; keep client validation in `app/rsvp/components/RsvpForm.tsx` aligned with it.

## Deployment

- Deployed automatically to Vercel on push to the main branch.
- `vercel.json` contains any custom Vercel configuration.

## Guidelines for AI Assistants

- **Prefer editing `wedding-data.ts`** over hardcoding content in components when changing wedding details.
- **Keep section components focused** — they should mostly handle layout/presentation, pulling data from `wedding-data.ts`.
- **Use TypeScript** properly: type props, avoid `any`, and keep the `wedding` data object's shape consistent.
- **Maintain the single-page structure** — this is not a multi-route app; new content typically means a new section, not a new route.
- **Use Tailwind classes** for styling; match the existing design language.
- **Server Components by default** — only add `"use client"` when interactivity (state, effects, event handlers) is required (e.g., the countdown component).
- **AVOID IMPORTING NEW PACKAGES** when possible re-use packages that are already imported in the project in favor of frivolous package use.
- When suggesting changes, respect the existing file organization (`components/` vs `sections/` vs `lib/`).
