# CognificaAI — Workplace Mental Health Platform

A standalone B2B marketing site for **CognificaAI**, an employer-facing mental health screening and risk stratification platform built by [Kronos Health](https://kronoshealth.co). This site lives on its own domain (cognificaai.com or cognificaai.health — TBD).

---

## Product Overview

**CognificaAI** gives employers a clinically rigorous, automated system for:

- **Screening** — employees complete six validated clinical instruments in under 10 minutes
- **Risk stratification** — a proprietary algorithm scores results into Low / Moderate / Elevated / High risk tiers
- **Care pathways** — each risk tier triggers automated recommendations, referrals, or crisis response
- **Employer dashboard** — anonymized, aggregate workforce wellness trends; no individual data shared

**Target buyers:** HR leaders, benefits managers, occupational health directors at mid-to-large employers.

**Owner:** Dr. John M. Abrahams / Kronos Health  
**Contact:** info@kronoshealth.co | 914 705 6830

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styles | Tailwind CSS |
| Database | Supabase (lead storage — no PHI) |
| Email | Resend (demo notification to team) |
| Hosting | Vercel |
| Analytics | Google Analytics 4 |
| Ads | Google Ads conversion tracking |
| Version control | GitHub |

---

## Brand Colors

| Token | Hex | Role |
|---|---|---|
| `sage` | `#4A7C6F` | Primary — buttons, accents, eyebrows |
| `sage-lt` | `#6B9E90` | Focus rings, lighter sage moments |
| `sage-dk` | `#2E5449` | Hero background, dark sections |
| `cream` | `#F7F3EE` | Page background, section backgrounds |
| `warm` | `#EDE7DC` | Trust bar background, card fills |
| `sand` | `#D4C9B8` | Borders, dividers |
| `clay` | `#B07D5A` | CTA buttons (primary), logo dot |
| `rust` | `#8B4E2E` | CTA hover state |
| `ink` | `#1C2420` | Body text (darkest) |
| `ink-2` | `#3A4A44` | Secondary text |
| `muted` | `#7A8880` | Captions, descriptive text |

**Color pattern (section order):** HERO (sage-dk) → warm → white → sage-dk → cream → white → sage-dk gradient

---

## Typography

| Role | Font | Source |
|---|---|---|
| Headings | Playfair Display | Google Fonts |
| Body / UI | Mulish | Google Fonts |

Both loaded via `next/font/google` with `display: swap` and CSS variable injection (`--font-playfair`, `--font-mulish`).

---

## Assessments Covered

| Code | Full Name | Domain |
|---|---|---|
| PHQ-9 | Patient Health Questionnaire | Depression |
| GAD-7 | Generalized Anxiety Disorder Scale | Anxiety |
| PSQI | Pittsburgh Sleep Quality Index | Sleep Quality |
| DAST-10 | Drug Abuse Screening Test | Substance Use |
| AUDIT | Alcohol Use Disorders Identification Test | Alcohol Use |
| PCL-5 | PTSD Checklist — DSM-5 | Trauma / PTSD |

---

## Supabase Setup

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. In the SQL editor, run the contents of `src/lib/supabase-schema.sql`
3. Copy your project URL and keys into `.env.local` (see `.env.example`)

### Table: `demo_requests`

```sql
id           uuid (PK, auto)
name         text NOT NULL
email        text NOT NULL
phone        text
organization text
created_at   timestamptz (default now())
```

Row Level Security is enabled with a deny-all policy — only the service role key (used in API routes) can read or write. Individual employee health data is **never** stored here.

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes | Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes | Supabase service role (server only) |
| `RESEND_API_KEY` | When email is enabled | Resend API key |
| `NOTIFICATION_EMAIL` | Yes | Where demo requests are emailed |
| `NEXT_PUBLIC_SITE_URL` | Yes | Full domain with https:// |
| `NEXT_PUBLIC_GOOGLE_ADS_COGNIFICAAI_LABEL` | For ads | Google Ads conversion label |

---

## Domain

Domain is TBD. Owner should register one of:

- `cognificaai.com` — preferred
- `cognificaai.health` — relevant TLD for healthcare context

Update `NEXT_PUBLIC_SITE_URL` and all hardcoded `https://cognificaai.com` references in `src/app/page.tsx`, `src/app/sitemap.ts`, and `src/lib/metadata.ts` once the domain is finalized.

---

## Local Development

```bash
# Install dependencies
npm install

# Copy env file
cp .env.example .env.local
# Fill in .env.local values

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Vercel Deployment

1. Push repo to GitHub
2. Import project at [vercel.com/new](https://vercel.com/new)
3. Add all environment variables from `.env.example` in the Vercel dashboard
4. Vercel auto-deploys on push to `main` / `master`
5. Add custom domain in Vercel → Settings → Domains

---

## GitHub Repo Setup

Suggested branch structure:

```
COGNIFICA_MAIN   — production (default branch, what Vercel deploys)
COGNIFICA_DEV    — active development
```

```bash
git init
git checkout -b COGNIFICA_MAIN
git add .
git commit -m "001_chore_initial-scaffold"
git remote add origin git@github.com:kronoshealth/cognifica-ai.git
git push -u origin COGNIFICA_MAIN

git checkout -b COGNIFICA_DEV
git push -u origin COGNIFICA_DEV
```

---

## Google Ads Conversion Tracking

The demo form fires a Google Ads conversion event on successful submission:

```typescript
gtag('event', 'conversion', {
  send_to: `AW-XXXXXXXXXX/${process.env.NEXT_PUBLIC_GOOGLE_ADS_COGNIFICAAI_LABEL}`,
  value: 100.0,
  currency: 'USD',
})
```

Replace `AW-XXXXXXXXXX` in `src/app/layout.tsx` and `src/components/DemoForm.tsx` with your real Google Ads account ID. Set `NEXT_PUBLIC_GOOGLE_ADS_COGNIFICAAI_LABEL` in Vercel env vars.

**HIPAA note:** Demo form collects employer contact info only (name, email, org, phone). No Protected Health Information (PHI) passes through this tracking. Conversion tracking is compliant.

---

## Design Reference

The original HTML mockup lives at:

```
/Users/rocketcreative/Desktop/Dr_Abrahams/cognifica_ai_page.html
```

This Next.js scaffold faithfully ports that design. Color tokens, typography, layout, card styles, and copy are all preserved. Component file names map directly to sections in the mockup.

---

## File Structure

```
cognifica-ai/
├── public/
│   └── .gitkeep
├── src/
│   ├── app/
│   │   ├── api/demo/
│   │   │   └── route.ts          # POST /api/demo — stores leads in Supabase
│   │   ├── privacy/
│   │   │   └── page.tsx          # Privacy policy page
│   │   ├── globals.css
│   │   ├── layout.tsx            # Root layout, fonts, GA/Ads scripts
│   │   ├── page.tsx              # Homepage — composes all sections
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── AssessmentsSection.tsx
│   │   ├── DemoForm.tsx          # 'use client' — form with Supabase submit
│   │   ├── EmployerValue.tsx
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx        # 'use client' — interactive step list
│   │   ├── Nav.tsx               # 'use client' — mobile hamburger menu
│   │   ├── ProblemSection.tsx
│   │   ├── RiskModel.tsx
│   │   └── TrustBar.tsx
│   └── lib/
│       ├── metadata.ts           # buildMetadata() helper
│       ├── supabase-schema.sql   # Run in Supabase SQL editor
│       └── supabase.ts           # Supabase client + server client
├── .env.example
├── next.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```
