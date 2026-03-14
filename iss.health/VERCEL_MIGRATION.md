# ISS Health — Vercel Migration Plan

**Domain:** iss.health
**Entity:** Institute for Spine Surgery
**Migration Priority:** 3rd (largest site, most SEO at stake — migrate last)
**Current Stack:** WordPress + Divi Builder on GoDaddy
**Target Stack:** Next.js 15 App Router + Tailwind CSS on Vercel
**Current DNS:** Cloudflare (nameservers on Cloudflare per domain report)

> HIPAA Note: ISS Health handles patient inquiries and appointment requests. See Section 6 before building anything.

---

## Pre-Migration Checklist

Complete these before writing a single line of Next.js code:

- [ ] Full URL crawl — export every live page URL (use Screaming Frog, Sitebulb, or `wget --spider`)
- [ ] Screenshot archive of all current pages (save to `iss.health/screenshots/`)
- [ ] Record current GA4 baseline metrics (organic traffic, top landing pages, avg session duration)
- [ ] Export WordPress content (Settings → Export → All Content) — backup XML
- [ ] Audit all images — download originals from GoDaddy Media Library to `iss.health/images/`
- [ ] List every inbound link from Google Search Console (download from Search Console → Links)
- [ ] Note all current page speeds (PageSpeed Insights for top 5 pages)
- [ ] Confirm current Google Ads landing page URLs are still live during migration
- [ ] Lower DNS TTL to 300 seconds (5 min) on Cloudflare — do this 48 hours before cutover

---

## Page Inventory

All existing pages — every one needs a route in the new Next.js site:

```
/                                      → app/page.tsx
/providers/                            → app/providers/page.tsx
/locations/                            → app/locations/page.tsx
/appointments/                         → app/appointments/page.tsx
/innovations/                          → app/innovations/page.tsx
/in-the-news/                          → app/in-the-news/page.tsx

/cervical-center/                      → app/cervical-center/page.tsx
/cervical-center/cervical-degeneration/→ app/(nested routes)
/cervical-center/cervical-disc-herniation/
/cervical-center/cervical-myelopathy/
/cervical-center/cervical-radiculopathy/
/cervical-center/cervical-stenosis/
/cervical-center/non-surgical-options/
/cervical-center/surgical-options/

/the-lumbar-center/                    → app/the-lumbar-center/page.tsx
/the-lumbar-center/non-surgical-options/
/the-lumbar-center/surgical-options/

/common-diagnosis/foot-drop/           → app/common-diagnosis/(nested)
/common-diagnosis/low-back-pain/
/common-diagnosis/lumbar-degeneration/
/common-diagnosis/lumbar-disc-herniation/
/common-diagnosis/lumbar-fracture/
/common-diagnosis/lumbar-radiculopathy/
/common-diagnosis/lumbar-spondylolisthesis/
/common-diagnosis/lumbar-stenosis/
/common-diagnosis/neurogenic-claudication/
/common-diagnosis/spinal-cord-tumor/
```

New Google Ads landing pages (build these first):

```
/cervical-spine/                       → app/cervical-spine/page.tsx
/lumbar-spine/                         → app/lumbar-spine/page.tsx
/meet-dr-abrahams/                     → app/meet-dr-abrahams/page.tsx
```

> Source content for all existing pages lives in `iss.health/page-content/*.md`
> Source prompts for new landing pages live in `cursor-prompts/03_ISS_HEALTH_LANDING_PAGES.md`

---

## Next.js Project Scaffold

### 1. Create the project

```bash
npx create-next-app@latest iss-health --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd iss-health
```

### 2. Install dependencies

```bash
npm install @next/font lucide-react clsx
npm install -D @types/node
```

### 3. Directory structure

```
iss-health/
├── src/
│   ├── app/
│   │   ├── layout.tsx                 ← Root layout (nav, footer, GA4, Google Ads tag)
│   │   ├── page.tsx                   ← Homepage
│   │   ├── providers/page.tsx
│   │   ├── locations/page.tsx
│   │   ├── appointments/page.tsx
│   │   ├── cervical-spine/page.tsx    ← Google Ads LP 1
│   │   ├── lumbar-spine/page.tsx      ← Google Ads LP 2
│   │   ├── meet-dr-abrahams/page.tsx  ← Google Ads LP 3
│   │   ├── cervical-center/
│   │   │   ├── page.tsx
│   │   │   └── [condition]/page.tsx   ← dynamic route for sub-pages
│   │   ├── the-lumbar-center/
│   │   │   └── page.tsx
│   │   ├── common-diagnosis/
│   │   │   └── [condition]/page.tsx
│   │   ├── innovations/page.tsx
│   │   ├── in-the-news/page.tsx
│   │   └── sitemap.ts                 ← Auto-generated sitemap
│   ├── components/
│   │   ├── Nav.tsx
│   │   ├── Footer.tsx
│   │   ├── ConsultationForm.tsx       ← Shared form component
│   │   ├── TrustBar.tsx
│   │   ├── LocationCard.tsx
│   │   └── ReviewsSection.tsx
│   └── lib/
│       └── metadata.ts                ← Shared metadata helpers
├── public/
│   └── images/                        ← Optimized WebP images
├── next.config.ts
└── tailwind.config.ts
```

### 4. Root layout — Google Ads and GA4 tags

Add to `src/app/layout.tsx`:

```tsx
import Script from 'next/script'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
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

Replace `AW-XXXXXXXXXX` with actual Google Ads Conversion ID from account 393-266-9621.
Replace `G-XXXXXXXXXX` with actual GA4 Measurement ID for iss.health.

### 5. Consultation form — conversion tracking

```tsx
// src/components/ConsultationForm.tsx
'use client'

export function ConsultationForm() {
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
        send_to: 'AW-XXXXXXXXXX/CONVERSION_LABEL_HERE',
        value: 50.0,
        currency: 'USD',
      })
    }

    form.reset()
    // Show success state
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Your Name" required />
      <input name="phone" type="tel" placeholder="Phone Number" required />
      <input name="email" type="email" placeholder="Email Address" required />
      <select name="location">
        <option value="west-harrison">West Harrison, NY</option>
        <option value="stamford">Stamford, CT</option>
      </select>
      <select name="concern">
        <option value="cervical">Cervical / Neck</option>
        <option value="lumbar">Lumbar / Lower Back</option>
        <option value="other">Other</option>
      </select>
      <textarea name="message" placeholder="Brief description of your concern" />
      <button type="submit">Schedule a Consultation</button>
    </form>
  )
}
```

### 6. Contact API route

```tsx
// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()

  // Send to info@iss.health via email service (Resend, Nodemailer, etc.)
  // DO NOT log body.name, body.email, or body.phone — HIPAA caution
  // Log only: timestamp, form submitted successfully (no PII)

  console.log('ISS contact form submitted at', new Date().toISOString())

  return NextResponse.json({ success: true })
}
```

### 7. next.config.ts — redirects and security headers

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
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  async redirects() {
    return [
      // Add any old WordPress URL redirects here
      // Example: old /cervical-center/ slug changes
      {
        source: '/cervical-center/cervical-disc-herniation',
        destination: '/cervical-center/cervical-disc-herniation/',
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

## Metadata (SEO)

Each page needs unique metadata. Pattern:

```typescript
// src/app/cervical-spine/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cervical Spine & Neck Surgery Specialists | ISS Health',
  description: 'Expert cervical spine surgery in West Harrison, NY and Stamford, CT. ACDF, disc herniation, stenosis, and radiculopathy treatment. Board-certified. 4,000+ surgeries performed.',
  alternates: {
    canonical: 'https://iss.health/cervical-spine/',
  },
  openGraph: {
    title: 'Cervical Spine & Neck Surgery Specialists | ISS Health',
    description: 'Expert cervical spine surgery. Two-surgeon care model. 4,000+ surgeries.',
    url: 'https://iss.health/cervical-spine/',
    siteName: 'Institute for Spine Surgery',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cervical Spine & Neck Surgery Specialists | ISS Health',
    description: 'Expert cervical spine surgery in NY and CT.',
  },
}
```

### JSON-LD Schema (homepage)

```typescript
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  name: 'Institute for Spine Surgery',
  url: 'https://iss.health',
  telephone: '+19149483008',
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: '244 Westchester Avenue, Suite 209',
      addressLocality: 'West Harrison',
      addressRegion: 'NY',
      postalCode: '10604',
      addressCountry: 'US',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: '1100 Bedford St, First Floor',
      addressLocality: 'Stamford',
      addressRegion: 'CT',
      postalCode: '06905',
      addressCountry: 'US',
    },
  ],
  medicalSpecialty: 'Neurosurgery',
}
```

---

## HIPAA Compliance — Non-Negotiable

ISS Health handles patient appointment requests. These rules apply to the entire Next.js codebase:

**Logging:**
- Never log patient names, email addresses, phone numbers, or medical conditions
- Log only: timestamp, form submitted (boolean), page URL
- Use structured logging — no string concatenation that could include form data

**Vercel Analytics:**
- Do NOT enable Vercel Analytics on ISS Health (it may capture query parameters that could contain health information)
- Use GA4 only, with IP anonymization enabled

**Environment Variables:**
- Store all API keys and email service credentials in Vercel environment variables
- Never hardcode credentials

**Forms:**
- Do NOT use third-party form services (Typeform, Formspree) — they store patient inquiry data on their servers without a BAA
- Use a first-party API route (`/api/contact`) that forwards to info@iss.health via a transactional email service with a signed BAA (Resend or AWS SES are appropriate)

**Conversion tracking pixels:**
- Track only the event (form submitted), never the content of the form
- See example in ConsultationForm.tsx above

**Google Ads remarketing:**
- Do NOT enable Google Ads remarketing lists on ISS Health pages
- Healthcare advertisers cannot use patient visit data for retargeting

---

## DNS Cutover — Step by Step

Current DNS is on Cloudflare. ISS Health is hosted on GoDaddy.

1. **Build and validate the Next.js site on Vercel** (use a preview deployment URL like `iss-health.vercel.app`)
2. **Run full QA on the preview URL:**
   - Every page loads correctly
   - Consultation form submits and triggers conversion event
   - Phone tap-to-call works on mobile
   - Redirects work for any changed URLs
   - PageSpeed Insights scores ≥ 90 on mobile
3. **Add iss.health domain in Vercel:**
   - Vercel Dashboard → Project → Settings → Domains → Add `iss.health` and `www.iss.health`
   - Vercel will provide DNS records to add
4. **Update Cloudflare DNS records:**
   - Remove existing A record pointing to GoDaddy
   - Add Vercel's A record: `76.76.21.21`
   - Add CNAME for www: `cname.vercel-dns.com`
   - TTL should already be at 300 from pre-migration step
5. **Propagation:** Changes go live within 5-15 minutes at 300 TTL
6. **Verify live site** — visit iss.health, confirm it loads the new Next.js build
7. **Verify SSL certificate** — Vercel auto-provisions Let's Encrypt TLS
8. **Update Google Search Console** — verify ownership on new site, submit updated sitemap
9. **Update Google Ads** — confirm all landing page URLs still resolve correctly
10. **Monitor GA4 for 48 hours** — ensure traffic data is flowing normally

---

## Vercel Project Setup

```bash
# Install Vercel CLI
npm i -g vercel

# From project root
vercel

# Set environment variables
vercel env add CONTACT_EMAIL production
vercel env add EMAIL_API_KEY production
vercel env add GA4_MEASUREMENT_ID production
vercel env add GOOGLE_ADS_CONVERSION_ID production
```

### Recommended Vercel Settings

- Framework Preset: Next.js (auto-detected)
- Build Command: `next build` (default)
- Output Directory: `.next` (default)
- Node.js Version: 20.x
- Region: US East (iad1) — closest to West Harrison, NY and Stamford, CT patients

---

## Post-Launch Checklist

- [ ] All URLs in Google Ads (iss.health/cervical-spine/, /lumbar-spine/, /meet-dr-abrahams/) return 200
- [ ] Consultation form on each landing page submits successfully
- [ ] Conversion events showing in Google Ads within 24 hours
- [ ] Google Search Console shows no crawl errors
- [ ] Sitemap submitted to Google Search Console
- [ ] PageSpeed Insights mobile score ≥ 90 on all landing pages
- [ ] No PII appearing in any log outputs
- [ ] SSL certificate active (green padlock)
- [ ] GoDaddy hosting can be cancelled after 30-day monitoring period
