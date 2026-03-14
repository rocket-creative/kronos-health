# Kronos Health — Vercel Migration Plan

**Domain:** kronoshealth.co
**Entity:** Kronos Health (B2B healthcare services and software)
**Migration Priority:** 1st — start here. B2B audience, no HIPAA patient PHI, smaller site, fastest to execute.
**Current Stack:** WordPress + Divi Builder v4.27.6 on GoDaddy
**Target Stack:** Next.js 15 App Router + Tailwind CSS on Vercel
**Current DNS:** GoDaddy (domain registered and hosted there)

> No HIPAA restrictions — Kronos Health is B2B. No patient health information is handled. Standard security practices apply.

---

## Why Start Here

- Smallest page count of the three sites
- B2B audience — demo request forms do not carry HIPAA risk
- New pages (Revenue Cycle, CognificaAI, Synaptix) need to be built regardless for Google Ads
- No SEO ranking history as strong as iss.health — less risk if something goes wrong during migration
- Success here builds confidence and repeatable process for the other two sites

---

## Pre-Migration Checklist

- [ ] Full URL crawl — export all live URLs
- [ ] Screenshot every current page → save to `kronoshealth.co/screenshots/`
- [ ] Record GA4 baseline metrics
- [ ] Export WordPress content backup XML
- [ ] Download all images from GoDaddy Media Library → `kronoshealth.co/images/`
- [ ] Note existing inbound links from Google Search Console
- [ ] Set up 301 redirect map: `/arbitration/` → `/revenue-cycle/` (confirmed needed)
- [ ] Lower DNS TTL to 300 on GoDaddy 48 hours before cutover

---

## Page Inventory

All current pages plus the three new pages Dr. Abrahams requested (March 10, 2026):

```
/                                      → app/page.tsx
/about/                                → app/about/page.tsx
/contact/                              → app/contact/page.tsx

← CURRENT PAGES BEING RESTRUCTURED →
/arbitration/          → REDIRECT 301 to /revenue-cycle/
/revenue-cycle/                        → app/revenue-cycle/page.tsx (new, replaces arbitration)

← EXISTING PAGES REMOVED FROM NAV (keep as internal pages) →
/clinically-integrated-neuropsychology/ → app/clinically-integrated-neuropsychology/page.tsx
/cognitive-franchise-program-2/        → app/cognitive-franchise-program/page.tsx
/digital-health-tools/                 → app/digital-health-tools/page.tsx

← NEW PAGES (Google Ads destinations) →
/cognificaai/                          → app/cognificaai/page.tsx
/synaptix/                             → app/synaptix/page.tsx
```

### New Navigation Structure

```
Home | About | Revenue Cycle | CognificaAI | Synaptix | Contact
```

> Full content and copy for all three new pages: `cursor-prompts/01_KRONOS_SITE_RESTRUCTURE.md`
> HTML mockups for design reference: `cognifica_ai_page.html` and `synaptix_page.html`

---

## Next.js Project Scaffold

### 1. Create the project

```bash
npx create-next-app@latest kronos-health --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd kronos-health
```

### 2. Install dependencies

```bash
npm install @next/font lucide-react clsx
npm install -D @types/node
```

### 3. Directory structure

```
kronos-health/
├── src/
│   ├── app/
│   │   ├── layout.tsx                 ← Root layout (nav, footer, GA4, Google Ads tag)
│   │   ├── page.tsx                   ← Homepage
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── revenue-cycle/page.tsx     ← Google Ads LP + replaces /arbitration/
│   │   ├── cognificaai/page.tsx       ← Google Ads LP + new product page
│   │   ├── synaptix/page.tsx          ← Google Ads LP + new product page
│   │   ├── clinically-integrated-neuropsychology/page.tsx
│   │   ├── cognitive-franchise-program/page.tsx
│   │   ├── digital-health-tools/page.tsx
│   │   ├── api/
│   │   │   └── contact/route.ts       ← Demo/contact form handler
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── Nav.tsx
│   │   ├── Footer.tsx
│   │   ├── DemoRequestForm.tsx        ← Shared B2B demo form
│   │   ├── ServiceCard.tsx
│   │   ├── TeamSection.tsx
│   │   └── StatsBar.tsx
│   └── lib/
│       └── metadata.ts
├── public/
│   └── images/
├── next.config.ts
└── tailwind.config.ts
```

### 4. Brand colors in Tailwind

Kronos Health uses a DARK theme — near-black backgrounds with cyan accents.

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      colors: {
        'kronos-bg': '#1A1A1A',
        'kronos-card': '#2B2B2B',
        'kronos-cyan': '#00FFFF',
        'kronos-teal': '#009B8D',
        'kronos-mint': '#B8F5B0',
        'kronos-lavender': '#D4B8E8',
      },
      fontFamily: {
        heading: ['Bebas Neue', 'sans-serif'],
        body: ['IBM Plex Sans', 'sans-serif'],
        nav: ['Open Sans', 'sans-serif'],
      },
    },
  },
}
export default config
```

### 5. Root layout — Google Ads and GA4 tags

```tsx
// src/app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-XXXXXXXXXX');
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body className="bg-kronos-bg text-white">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
```

### 6. Demo request form — conversion tracking

This is a B2B form. No HIPAA restrictions. Name, company, and phone are safe to log and email.

```tsx
// src/components/DemoRequestForm.tsx
'use client'

export function DemoRequestForm({ productLabel }: { productLabel: string }) {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        ...Object.fromEntries(data),
        product: productLabel,
      }),
      headers: { 'Content-Type': 'application/json' },
    })

    // Fire Google Ads conversion
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: `AW-XXXXXXXXXX/${productLabel === 'CognificaAI' ? 'COGNIFICAAI_LABEL' : 'SYNAPTIX_LABEL'}`,
        value: 100.0,
        currency: 'USD',
      })
    }

    form.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="bg-kronos-card p-8 rounded">
      <input name="name" type="text" placeholder="Your Name" required />
      <input name="phone" type="tel" placeholder="Phone Number" required />
      <input name="email" type="email" placeholder="Email Address" required />
      <input name="organization" type="text" placeholder="Organization / Practice Name" required />
      <button type="submit" className="bg-kronos-cyan text-kronos-bg font-bold">
        Request a Demo
      </button>
    </form>
  )
}
```

### 7. Contact API route

```typescript
// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()

  // B2B — it is acceptable to log and email this data
  // Forward to info@kronoshealth.co
  console.log('Kronos demo request', {
    product: body.product,
    organization: body.organization,
    timestamp: new Date().toISOString(),
  })

  // Send email via transactional service (Resend, SES, etc.)
  // await sendEmail({ to: 'info@kronoshealth.co', subject: `Demo Request: ${body.product}`, ... })

  return NextResponse.json({ success: true })
}
```

### 8. next.config.ts — redirects and security headers

```typescript
import type { NextConfig } from 'next'

const securityHeaders = [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
]

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }]
  },
  async redirects() {
    return [
      {
        source: '/arbitration',
        destination: '/revenue-cycle',
        permanent: true,
      },
      {
        source: '/arbitration/',
        destination: '/revenue-cycle/',
        permanent: true,
      },
    ]
  },
  images: {
    formats: ['image/webp'],
  },
}

export default nextConfig
```

---

## Page Metadata (SEO)

### Homepage

```typescript
export const metadata: Metadata = {
  title: 'Kronos Health — Smarter Healthcare. Stronger Revenue.',
  description: 'Revenue cycle management, out-of-network billing, and digital health tools for medical practices. CognificaAI workplace mental health platform. Synaptix concussion software.',
  alternates: { canonical: 'https://kronoshealth.co/' },
  openGraph: {
    title: 'Kronos Health — Smarter Healthcare. Stronger Revenue.',
    url: 'https://kronoshealth.co/',
    siteName: 'Kronos Health',
    type: 'website',
  },
}
```

### Revenue Cycle

```typescript
export const metadata: Metadata = {
  title: 'Revenue Cycle Management & Payment Dispute Resolution | Kronos Health',
  description: 'Expert revenue cycle management, out-of-network billing, and IDR dispute resolution for healthcare providers. Kronos Health maximizes your reimbursements.',
  alternates: { canonical: 'https://kronoshealth.co/revenue-cycle/' },
}
```

### CognificaAI

```typescript
export const metadata: Metadata = {
  title: 'CognificaAI — Workplace Mental Health Platform | Kronos Health',
  description: 'Intelligent mental health screening and risk stratification for employers. Evidence-based assessments, proprietary risk scoring, and smart care pathways. Request a demo.',
  alternates: { canonical: 'https://kronoshealth.co/cognificaai/' },
}
```

### Synaptix

```typescript
export const metadata: Metadata = {
  title: 'Synaptix — Concussion Assessment & Recovery Platform | Kronos Health',
  description: 'Structured, billable, recurring concussion management software for orthopedic and neurosurgery practices. 12-week program, $260K annual revenue potential. Request a demo.',
  alternates: { canonical: 'https://kronoshealth.co/synaptix/' },
}
```

### JSON-LD Schema (homepage)

```typescript
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kronos Health',
  url: 'https://kronoshealth.co',
  telephone: '+19147056830',
  email: 'info@kronoshealth.co',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '244 Westchester Ave, Ste 209',
    addressLocality: 'West Harrison',
    addressRegion: 'NY',
    postalCode: '10604',
    addressCountry: 'US',
  },
  description: 'B2B healthcare services including revenue cycle management, out-of-network billing, CognificaAI workplace mental health platform, and Synaptix concussion software.',
}
```

---

## Key Pages — Build Notes

### /revenue-cycle/ (Highest Priority for Google Ads)

This page is the landing destination for the "Kronos - Search - RCM & Billing" campaign. It must be live before the campaign can unpause.

Required elements:
- Phone 914 705 6830 above the fold (tap-to-call on mobile)
- Demo/contact form with fields: Name, Phone, Email, Practice Name, Message
- Form submissions to info@kronoshealth.co
- Google Ads conversion event on form submit (label: Kronos — Revenue Cycle Lead)
- Four service cards: Case Management, Compelling Submissions, Deadline Tracking, Post-Arbitration
- Team section: Heisha Rivera, Camila Nicasio, Nicole Cedeno, Soily Rivera

### /cognificaai/ (Google Ads landing page)

Use `cognifica_ai_page.html` as the layout and content reference, but restyle entirely to Kronos dark theme (#1A1A1A background, #00FFFF accents, Bebas Neue headings).

Required elements:
- Clear B2B framing (employer-focused, not patient-facing)
- Demo request form above fold or easily reachable
- 6 clinical instrument cards (PHQ-9, GAD-7, PSQI, DAST-10, AUDIT, PCL-5)
- Risk stratification tiers (Low/Moderate/Elevated/High)
- Trust stats (1 in 5, $1T, 46%, 4x ROI)
- Conversion event: Kronos — CognificaAI Demo

### /synaptix/ (Google Ads landing page)

Use `synaptix_page.html` as the layout and content reference, but restyle to Kronos dark theme.

Required elements:
- Revenue model prominently displayed: $260K / $1,500-$5,000 / 12 weeks / 3 visits
- CPT code reference section (for provider credibility)
- Clinical workflow timeline (Initial → Feedback → Weekly → Re-eval)
- Demo request form
- Conversion event: Kronos — Synaptix Demo

---

## DNS Cutover — Step by Step

Kronos Health is on GoDaddy (domain and hosting). 2-step auth via Dr. Abrahams' phone — coordinate timing.

1. **Build and validate** the Next.js site on Vercel preview URL
2. **QA all new pages** — Revenue Cycle, CognificaAI, Synaptix forms submit correctly
3. **Test 301 redirect** `/arbitration/` → `/revenue-cycle/` on preview URL
4. **Add kronoshealth.co in Vercel:**
   - Vercel Dashboard → Project → Settings → Domains → Add `kronoshealth.co` and `www.kronoshealth.co`
5. **Update GoDaddy DNS for kronoshealth.co:**
   - Change A record IP → `76.76.21.21` (Vercel)
   - Update CNAME for www → `cname.vercel-dns.com`
   - Requires Dr. Abrahams' phone for 2-step auth
6. **Propagation:** 5-15 minutes at 300 TTL
7. **Verify SSL** — auto-provisioned by Vercel
8. **Test /arbitration/ redirect** goes to /revenue-cycle/ on live domain
9. **Submit sitemap** to Google Search Console
10. **Update Google Ads sitelink URLs** in account 393-266-9621 to new page slugs

---

## Vercel Environment Setup

```bash
npm i -g vercel
vercel

vercel env add CONTACT_EMAIL production          # info@kronoshealth.co
vercel env add EMAIL_API_KEY production          # Resend or SES key
vercel env add GA4_MEASUREMENT_ID production     # Kronos GA4 ID
vercel env add GOOGLE_ADS_CONVERSION_ID production
vercel env add KRONOS_RCM_LABEL production
vercel env add KRONOS_COGNIFICAAI_LABEL production
vercel env add KRONOS_SYNAPTIX_LABEL production
```

### Vercel Project Settings

- Framework: Next.js
- Node.js: 20.x
- Region: US East (iad1)
- No special HIPAA configuration needed (B2B only)

---

## Post-Launch Checklist

- [ ] kronoshealth.co loads the Next.js build
- [ ] /arbitration/ redirects to /revenue-cycle/ with 301
- [ ] /revenue-cycle/, /cognificaai/, /synaptix/ all return 200
- [ ] Demo forms on all three pages submit and reach info@kronoshealth.co
- [ ] Conversion events show in Google Ads account 393-266-9621
- [ ] Phone click (914 705 6830) conversion fires
- [ ] Google Search Console verified, sitemap submitted
- [ ] No crawl errors on old URLs
- [ ] PageSpeed Insights mobile ≥ 90 on all three Google Ads landing pages
- [ ] SSL active
- [ ] Update Google Ads sitelink URLs to final slugs
- [ ] GoDaddy hosting can be cancelled after 30-day monitoring period
- [ ] Document success and repeat process for cognifica.health
