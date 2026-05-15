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
