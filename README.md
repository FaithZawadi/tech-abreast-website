# Technology Abreast Limited — Website

Terminal-aesthetic Next.js 14 website. Runs on **Node 18.13+**.

## Quick Start

```bash
cd tech-abreast
npm install
npm run dev
```

Open http://localhost:3000

## If you see SSL errors

Your network is intercepting npm (corporate proxy / self-signed cert). Run:

```bash
export NODE_TLS_REJECT_UNAUTHORIZED=0
npm install
export NODE_TLS_REJECT_UNAUTHORIZED=1
npm run dev
```

## Stack

| Package       | Version | Notes                    |
|---------------|---------|--------------------------|
| next          | 14.1.4  | Node >=18.13 compatible  |
| react         | 18.3.1  | —                        |
| tailwindcss   | 3.4.4   | Tailwind 3, not 4        |
| typescript    | 5.4.5   | —                        |
| framer-motion | 10.16.4 | —                        |
| lucide-react  | 0.441.0 | —                        |

## Structure

```
app/
  globals.css     — CSS vars, scanline, animations
  layout.tsx      — root layout
  page.tsx        — assembles all sections
components/
  Navbar.tsx      — fixed nav, live clock, dropdowns
  Hero.tsx        — terminal boot animation
  About.tsx       — vision/mission + values pentagon
  Services.tsx    — 6 service cards
  Solutions.tsx   — interactive solution selector
  AISolutions.tsx — AI cards + metrics dashboard
  Industries.tsx  — 8 sector cards
  Resources.tsx   — case studies + resources
  Contact.tsx     — terminal-style form
  Footer.tsx      — footer + system status
```
