# Cognifica Health — Vercel Migration Plan

**Domain:** cognifica.health
**Entity:** Cognifica Health (patient-facing clinical neuropsychology)
**Migration Priority:** 2nd (after kronoshealth.co, before iss.health)
**Current Stack:** WordPress + Divi Builder on GoDaddy
**Target Stack:** Next.js 15 App Router + Tailwind CSS on Vercel
**Current DNS:** GoDaddy (domain registered and hosted there)

> HIPAA Note: Cognifica Health is a patient-facing clinical practice handling neuropsychological evaluation requests, TMS therapy inquiries, and mental health appointment bookings. HIPAA compliance rules apply throughout this build. See Section 6.

---

## Pre-Migration Checklist

- [ ] Full URL crawl — export every live page URL (Screaming Frog or similar)
- [ ] Screenshot archive of all current pages → save to `cognifica.health/screenshots/`
- [ ] Record current GA4 baseline (organic traffic, top landing pages)
- [ ] Export WordPress content — backup XML from Settings → Export
- [ ] Download all images from GoDaddy Media Library → save to `cognifica.health/images/`
- [ ] Record all inbound links from Google Search Console
- [ ] Note current PageSpeed scores for top 5 pages
- [ ] Confirm all Google Ads landing page URLs are live during migration
- [ ] Lower DNS TTL to 300 on GoDaddy 48 hours before cutover

---

## Page Inventory

All existing pages — every route needs a corresponding page in Next.js:

```
/                                          → app/page.tsx
/team/                                     → app/team/page.tsx
/conditions-we-treat/                      → app/conditions-we-treat/page.tsx
/brain-health-and-wellness/                → app/brain-health-and-wellness/page.tsx
/consults/                                 → app/consults/page.tsx
/news/                                     → app/news/page.tsx
```

New Google Ads landing pages (build these first — campaigns can't launch without them):

```
/tms-therapy/                              → app/tms-therapy/page.tsx
/memory-brain-fog/                         → app/memory-brain-fog/page.tsx
/concussion-tbi/                           → app/concussion-tbi/page.tsx
/neuropsychological-testing/               → app/neuropsychological-testing/page.tsx
```

> Source content for existing pages lives in `cognifica.health/page-content/*.md`
> Source prompts and full copy for new landing pages: `cursor-prompts/02_COGNIFICA_HEALTH_LANDING_PAGES.md`

---

## Next.js Project Scaffold

### 1. Create the project

```bash
npx create-next-app@latest cognifica-health --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd cognifica-health
```

### 2. Install dependencies

```bash
npm install @next/font lucide-react clsx
npm install -D @types/node
```

### 3. Directory structure

```
cognifica-health/
├── src/
│   ├── app/
│   │   ├── layout.tsx                      ← Root layout (nav, footer, GA4, Google Ads tag)
│   │   ├── page.tsx                        ← Homepage
│   │   ├── team/page.tsx
│   │   ├── conditions-we-treat/page.tsx
│   │   ├── brain-health-and-wellness/page.tsx
│   │   ├── consults/page.tsx
│   │   ├── news/page.tsx
│   │   ├── tms-therapy/page.tsx            ← Google Ads LP 1
│   │   ├── memory-brain-fog/page.tsx       ← Google Ads LP 2
│   │   ├── concussion-tbi/page.tsx         ← Google Ads LP 3
│   │   ├── neuropsychological-testing/page.tsx  ← Google Ads LP 4
│   │   ├── api/
│   │   │   └── contact/route.ts            ← First-party form handler (HIPAA)
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── Nav.tsx
│   │   ├── Footer.tsx
│   │   ├── AppointmentForm.tsx             ← Shared form component
│   │   ├── TrustBar.tsx
│   │   ├── LocationsSection.tsx
│   │   └── InsuranceSection.tsx
│   └── lib/
│       └── metadata.ts
├── public/
│   └── images/
├── next.config.ts
└── tailwind.config.ts
```

### 4. Brand colors in Tailwind

Add to `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      colors: {
        'cognifica-indigo': '#333B94',
        'cognifica-cta': '#5E89FB',
        'cognifica-submit': '#4ECFA0',
        'cognifica-accent': '#6C4DB0',
      },
      fontFamily: {
        body: ['Work Sans', 'sans-serif'],
        heading: ['IBM Plex Sans Condensed', 'sans-serif'],
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
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
```

Replace placeholders with actual IDs from Google Ads account 393-266-9621 and GA4.

### 6. Appointment form — conversion tracking

```tsx
// src/components/AppointmentForm.tsx
'use client'

export function AppointmentForm() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(data)),
      headers: { 'Content-Type': 'application/json' },
    })

    // Fire Google Ads conversion — NO patient PII in the payload
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-XXXXXXXXXX/COGNIFICA_CONVERSION_LABEL',
        value: 50.0,
        currency: 'USD',
        // NEVER add: patient name, email, phone, or condition
      })
    }

    form.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Your Name" required />
      <input name="phone" type="tel" placeholder="Phone Number" required />
      <input name="email" type="email" placeholder="Email Address" required />
      <select name="location">
        <option value="west-harrison">West Harrison, NY</option>
        <option value="aquebogue">Aquebogue, NY</option>
        <option value="stamford">Stamford, CT</option>
      </select>
      <textarea name="concern" placeholder="Brief description of your concern" />
      <button type="submit">Book an Appointment</button>
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

  // Forward to appt@cognifica.health via transactional email service
  // MUST use a service with a signed BAA (Resend, AWS SES, or similar)
  // DO NOT log any PII from the form body

  console.log('Cognifica appointment request at', new Date().toISOString())

  // Email send logic here (use environment variable for API key)
  // await sendEmail({ to: process.env.CONTACT_EMAIL, subject: 'New Appointment Request', ... })

  return NextResponse.json({ success: true })
}
```

### 8. next.config.ts

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
      // Add WordPress URL redirects here as needed
      // Old /consults/ page might have different slug — map it
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

Pattern to follow for every landing page:

```typescript
// src/app/tms-therapy/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TMS Therapy — FDA-Cleared Depression Treatment | Cognifica Health',
  description: 'FDA-cleared TMS therapy for depression in West Harrison, Aquebogue, and Stamford. Non-invasive, drug-free treatment. Insurance accepted. Schedule your evaluation today.',
  alternates: {
    canonical: 'https://cognifica.health/tms-therapy/',
  },
  openGraph: {
    title: 'TMS Therapy for Depression | Cognifica Health',
    description: 'FDA-cleared, non-invasive brain stimulation. NeuroStar technology. 3 NY/CT locations.',
    url: 'https://cognifica.health/tms-therapy/',
    siteName: 'Cognifica Health',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TMS Therapy for Depression | Cognifica Health',
  },
}
```

### JSON-LD Schema (homepage)

```typescript
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  name: 'Cognifica Health',
  url: 'https://cognifica.health',
  telephone: '+19149483008',
  email: 'appt@cognifica.health',
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: '244 Westchester Avenue, Suite 209',
      addressLocality: 'West Harrison',
      addressRegion: 'NY',
      postalCode: '10604',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: '508 Main Street, Office 2',
      addressLocality: 'Aquebogue',
      addressRegion: 'NY',
      postalCode: '11931',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: '1100 Bedford St, First Floor',
      addressLocality: 'Stamford',
      addressRegion: 'CT',
      postalCode: '06905',
    },
  ],
  medicalSpecialty: 'Neuropsychology',
}
```

---

## HIPAA Compliance — Non-Negotiable

Cognifica Health handles patient mental health and neuropsychological evaluation requests. These are among the most sensitive categories of health information.

**Logging:**
- Never log patient names, email addresses, phone numbers, diagnoses, or descriptions of mental health concerns
- Log only: timestamp, form submitted (event name only, no content)
- Use a logging service that supports HIPAA (or just write to Vercel's server logs without PII)

**Vercel Analytics:**
- Do NOT enable Vercel Analytics — it may capture query parameters that contain health information
- Do NOT enable Vercel Speed Insights — same risk
- Use GA4 only, with IP anonymization enabled: `gtag('config', 'G-XXXX', { anonymize_ip: true })`

**Forms:**
- Use only the first-party API route `/api/contact`
- Send to `appt@cognifica.health` via an email service with a signed HIPAA Business Associate Agreement (BAA)
  - Resend (resend.com) — offers BAA on Business plan
  - AWS SES — offers BAA as part of AWS BAA
  - Do NOT use: Mailchimp, Formspree, Typeform, or any service without a signed BAA
- After sending, do not retain the form data anywhere (no database storage unless a HIPAA-compliant database with encryption at rest is set up)

**Conversion tracking:**
- Track only the conversion event, never form content
- No patient PII in any gtag() call
- No Google Ads audience pixels on mental health or diagnostic condition pages

**Remarketing:**
- Do NOT enable Google Ads remarketing on any Cognifica Health page
- Google's Healthcare policy prohibits using health condition visits for retargeting

**Environment Variables:**
```
CONTACT_EMAIL=appt@cognifica.health
EMAIL_API_KEY=re_xxxxxxxxxxxx  ← Resend API key
GA4_MEASUREMENT_ID=G-XXXXXXXXXX
GOOGLE_ADS_CONVERSION_ID=AW-XXXXXXXXXX
GOOGLE_ADS_COGNIFICA_LABEL=CONVERSION_LABEL_HERE
```

---

## DNS Cutover — Step by Step

Cognifica Health is currently on GoDaddy (domain and hosting).

1. **Build and validate** the Next.js site on Vercel preview URL (`cognifica-health.vercel.app`)
2. **QA all pages and forms** — every landing page, every form submit, phone tap-to-call
3. **Validate conversion events** fire on form submission (use Google Tag Assistant in Chrome)
4. **Add cognifica.health in Vercel:**
   - Vercel Dashboard → Project → Settings → Domains → Add `cognifica.health` and `www.cognifica.health`
5. **Update GoDaddy DNS:**
   - Go to GoDaddy → DNS Management for cognifica.health
   - Change A record: remove GoDaddy hosting IP → add `76.76.21.21` (Vercel)
   - Add/update CNAME for `www` → `cname.vercel-dns.com`
   - Note: 2-step auth on GoDaddy requires Dr. Abrahams' phone — coordinate timing
6. **Propagation:** 5-15 minutes with 300 TTL
7. **Verify SSL** — Vercel auto-provisions
8. **Test all landing pages live** on the actual domain
9. **Submit sitemap** to Google Search Console
10. **Verify GA4 and Google Ads tags** are firing in production

---

## Vercel Environment Setup

```bash
# Install Vercel CLI
npm i -g vercel

# From project root
vercel

# Environment variables
vercel env add CONTACT_EMAIL production
vercel env add EMAIL_API_KEY production
vercel env add GA4_MEASUREMENT_ID production
vercel env add GOOGLE_ADS_CONVERSION_ID production
vercel env add GOOGLE_ADS_COGNIFICA_LABEL production
```

### Vercel Project Settings

- Framework: Next.js
- Build: `next build`
- Node.js: 20.x
- Region: US East (iad1) — closest to NY/CT patient base

---

## Post-Launch Checklist

- [ ] cognifica.health loads the Next.js build
- [ ] All 4 Google Ads landing pages return 200 on the live domain
- [ ] Appointment forms on all landing pages submit successfully
- [ ] Conversion events showing in Google Ads account 393-266-9621
- [ ] Phone click (914 948 3008) conversion fires
- [ ] Google Search Console verified, sitemap submitted
- [ ] No crawl errors
- [ ] No PII in any server log output
- [ ] PageSpeed Insights mobile ≥ 90 on TMS and memory pages (highest traffic)
- [ ] SSL active
- [ ] GoDaddy hosting cancellable after 30-day monitoring period
- [ ] Notify George (georgestoff@rocketcreative.net) before unpausing Cognifica Google Ads campaigns
