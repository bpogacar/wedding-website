# 💍 Wedding Website

A beautiful, production-ready wedding website built with **Next.js 14**, **Tailwind CSS**, and deployed on **Vercel**.

---

## ✨ Features

- **Hero section** with full-screen photo of the couple
- **Live countdown** to the wedding day
- **Event details** — date, time, venue, map link
- **Dress code** with color palette suggestions
- **Day-of itinerary** timeline
- **Travel section** — hotel blocks + directions from major cities
- **Wedding party** profiles with photos
- **Registry links** to multiple stores
- **Local attractions** guide for out-of-town guests
- Responsive mobile-first design
- Smooth scroll navigation
- SEO + Open Graph metadata

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

---

## 📝 Customizing Your Site

**All content lives in one file:** `app/lib/wedding-data.ts`

Edit this file to update:
- Couple names
- Wedding date, time, and venue
- Itinerary items
- Hotel recommendations
- Driving directions
- Registry links
- Wedding party members
- Local attractions
- Dress code

### Adding Photos

Place photos in the `/public/images/` folder. Then reference them in `wedding-data.ts`:

```
public/
  images/
    couple-hero.jpg         ← Full-screen hero photo
    couple-engagement.jpg   ← Secondary couple photo
    party/
      emily.jpg             ← Wedding party photos
      sarah.jpg
      michael.jpg
      chris.jpg
```

**Recommended photo sizes:**
- Hero: 2400×1600px minimum
- Engagement: 1200×900px
- Wedding party: 400×500px (portrait orientation)

---

## 🌐 Deploying to Vercel

### Option A: Vercel CLI (Recommended)

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts. On subsequent deploys:

```bash
vercel --prod
```

### Option B: GitHub + Vercel Dashboard

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live! Every push to `main` auto-deploys.

### Custom Domain

In Vercel Dashboard → Project → **Settings → Domains**, add your custom domain (e.g. `janeandjon2025.com`).

---

## Database Setup

The RSVP backend uses **Neon Postgres** for persistent guest and RSVP data. This project does not need a separate custom backend server: the Next.js API routes in `app/api/rsvp/` are the backend layer, and they connect to Neon through `app/lib/db.ts`.

Request flow:

```text
/rsvp page -> app/api/rsvp/* -> app/lib/rsvp.ts -> app/lib/db.ts -> Neon Postgres
```

### 1. Create a Neon project

1. Create a Neon account at [neon.tech](https://neon.tech).
2. Create a new project, for example `wedding-website`.
3. Choose a region close to your guests or Vercel deployment region. For a mostly US audience, a US region is usually a good default.
4. Keep the default `main` branch for production.
5. Copy the pooled or standard Postgres connection string from the Neon dashboard.

The connection string should look like:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOSTNAME/DATABASE?sslmode=require"
```

### 2. Configure local development

Create a `.env.local` file in the project root:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOSTNAME/DATABASE?sslmode=require"
```

Never commit `.env.local` or paste the production connection string into client-side files. RSVP guest data must stay server-only.

### 3. Connect Neon to Vercel

For deployment, configure `DATABASE_URL` in Vercel:

1. Open the Vercel project dashboard.
2. Go to **Settings -> Environment Variables**.
3. Add `DATABASE_URL`.
4. Enable it for **Production**, **Preview**, and **Development** as appropriate.
5. Redeploy after adding or changing the variable.

You can also use the official Neon/Vercel integration:

- Use the **Vercel-managed Neon integration** if you want Neon billing and setup managed through Vercel.
- Use the **Neon-managed Vercel integration** if you already have a Neon account or want to manage billing directly in Neon.
- Prefer an integration if you want automatic database branches for Vercel preview deployments.
- Use manual environment variables if you want the simplest setup and do not need preview database branching.

### 4. Apply database migrations

Run the SQL files in `db/migrations/` against the Neon database before using the RSVP route. You can apply them with:

- the Neon SQL Editor,
- `psql`,
- the Neon CLI,
- or a future npm migration script.

Keep schema changes in `db/migrations/` so production, preview, and local databases stay understandable and repeatable.

### 5. Seed RSVP households and guests

Guest and household seed files belong in `db/seeds/`. Apply seeds only from a trusted server-side tool such as the Neon SQL Editor, `psql`, or a private script.

Do not place the full guest list in `app/lib/wedding-data.ts` or any client-bundled file. The browser should only search, load, and submit RSVP data through the server-side API routes.

### 6. Recommended environment strategy

- **Production:** Neon `main` branch connected to Vercel Production.
- **Preview:** Neon preview branches connected to Vercel Preview deployments if using the integration.
- **Local development:** either a separate Neon development branch or a local `.env.local` pointing at a non-production Neon branch.

Before launch, test the full RSVP flow on a non-production branch, then confirm the production `DATABASE_URL` points at the intended Neon production database.

---

## 📂 Project Structure

```
wedding-website/
├── app/
│   ├── components/
│   │   ├── Nav.tsx           # Sticky navigation
│   │   ├── Footer.tsx        # Footer
│   │   └── Countdown.tsx     # Live countdown timer
│   ├── sections/
│   │   ├── HeroSection.tsx   # Full-screen hero
│   │   ├── DetailsSection.tsx # Date/venue/dress code
│   │   ├── ItinerarySection.tsx # Day-of timeline
│   │   ├── TravelSection.tsx # Hotels + directions
│   │   ├── WeddingPartySection.tsx
│   │   ├── RegistrySection.tsx
│   │   └── AttractionsSection.tsx
│   ├── lib/
│   │   └── wedding-data.ts   # ← ALL CONTENT LIVES HERE
│   ├── globals.css           # Global styles + fonts
│   ├── layout.tsx            # Root layout + metadata
│   └── page.tsx              # Home page (assembles sections)
├── public/
│   └── images/               # Add your photos here
├── package.json
├── tailwind.config.js
├── next.config.mjs
└── vercel.json
```

---

## 🎨 Design Customization

The color palette is defined in `app/globals.css` via CSS variables:

```css
:root {
  --color-ivory: #f9f8f0;
  --color-sage: #8fab80;
  --color-blush: #e8c4b8;
  --color-gold: #c4a044;
  --color-charcoal: #2d2d2d;
}
```

Fonts are loaded from Google Fonts (Cormorant Garamond, Jost, Great Vibes). To swap fonts, update `globals.css`.

---

## 🗺️ Future Enhancements (Optional)

- [ ] **RSVP form** — integrate with Airtable, Supabase, or Formspree
- [ ] **Photo gallery** — add a shareable gallery section
- [ ] **Story section** — add a "How We Met" timeline
- [ ] **Music playlist** — embed a Spotify playlist
- [ ] **Guest Q&A / FAQ** — answers to common questions
- [ ] **Password protection** — gate the site for guests only

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| [Next.js 14](https://nextjs.org) | React framework (App Router) |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first styling |
| [Lucide React](https://lucide.dev) | Icon library |
| [Vercel](https://vercel.com) | Hosting & deployment |
| Google Fonts | Typography |
