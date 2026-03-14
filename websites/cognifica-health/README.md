# Cognifica Health — Website

Patient-facing website for Cognifica Health, a clinical neuropsychology and cognitive health practice with three locations in New York and Connecticut.

**Live domain:** https://cognifica.health
**Stack:** Next.js 15 App Router, TypeScript, Tailwind CSS, Resend, Vercel

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 3.4 |
| Email | Resend (requires signed BAA — see HIPAA notes) |
| Hosting | Vercel |
| Domain | cognifica.health |
| Analytics | Google Analytics 4 + Google Ads |

---

## Brand Colors

| Name | Hex | Usage |
|---|---|---|
| cognifica-indigo | `#333B94` | Header, hero backgrounds, primary headings, footer |
| cognifica-cta | `#5E89FB` | All CTA buttons (Book Now, Learn More) |
| cognifica-submit | `#4ECFA0` | Form submit buttons, phone number highlights, trust accents |
| cognifica-accent | `#6C4DB0` | Category labels, secondary accent moments |
| Text heading | `#111111` | All H1–H6 headings |
| Text body | `#333333` | Body copy |

---

## Brand Fonts

| Variable | Font | Usage |
|---|---|---|
| `--font-work-sans` | Work Sans | Body text (default) |
| `--font-ibm-plex-condensed` | IBM Plex Sans Condensed | H2 section headings, service titles |
| `--font-open-sans` | Open Sans | Navigation links |

Fonts are loaded via `next/font/google` in `src/app/layout.tsx` and applied as CSS variables. Tailwind utility classes: `font-body`, `font-heading`, `font-nav`.

---

## Image Assets

Images are served from the live WordPress site. Do NOT download — use `next/image` with the remote pattern `https://cognifica.health` (already configured in `next.config.ts`).

| Asset | URL |
|---|---|
| Logo (PNG) | https://cognifica.health/wp-content/uploads/2025/05/Cognifica_logo.png |
| Stethoscope (JPG) | https://cognifica.health/wp-content/uploads/2025/03/stethescope.jpg |
| Front office 1 (WEBP) | https://cognifica.health/wp-content/uploads/2025/03/front2.webp |
| Front office 2 (JPG) | https://cognifica.health/wp-content/uploads/2025/03/front.jpg |

Usage example:
```tsx
import Image from 'next/image'

<Image
  src="https://cognifica.health/wp-content/uploads/2025/05/Cognifica_logo.png"
  alt="Cognifica Health logo"
  width={200}
  height={60}
/>
```

---

## Page Routes

| Route | Type | Description |
|---|---|---|
| `/` | Existing | Homepage — hero, conditions, services, why choose us, locations, FAQ, form |
| `/team` | Existing | Team bios — Dr. Abrahams, Dr. Mogan, Juliet Mott |
| `/conditions-we-treat` | Existing | Full condition list by category |
| `/brain-health-and-wellness` | Existing | Brain wellness program details |
| `/consults` | Existing | Primary conversion page — appointment form + locations |
| `/news` | Existing | Articles and research (10 article cards) |
| `/tms-therapy` | **Google Ads LP** | TMS for depression — full landing page |
| `/memory-brain-fog` | **Google Ads LP** | Memory loss + post-COVID brain fog |
| `/concussion-tbi` | **Google Ads LP** | Concussion + TBI 12-week recovery program |
| `/neuropsychological-testing` | **Google Ads LP** | Neuropsychological evaluations |

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in all values before deploying.

```bash
cp .env.example .env.local
```

| Variable | Required | Notes |
|---|---|---|
| `RESEND_API_KEY` | Yes (before launch) | Requires Business plan for HIPAA BAA |
| `CONTACT_EMAIL` | Yes | Default: appt@cognifica.health |
| `GA4_MEASUREMENT_ID` | Yes | Google Analytics 4 ID |
| `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID` | Yes | Format: AW-XXXXXXXXXX |
| `NEXT_PUBLIC_GOOGLE_ADS_COGNIFICA_LABEL` | Yes | Conversion label from Google Ads |
| `NEXT_PUBLIC_SITE_URL` | Yes | https://cognifica.health |
| `MAILCHIMP_API_KEY` | Optional | Check if newsletter is used on WP site |
| `MAILCHIMP_AUDIENCE_ID` | Optional | Audience/list ID from Mailchimp |

---

## HIPAA Compliance Notes

This website handles appointment request forms that may contain Protected Health Information (PHI). The following rules apply:

1. **No patient data in any database.** The contact API (`/api/contact`) forwards appointment requests via email only. Do not add a database layer without a BAA.

2. **Resend BAA required.** Before enabling the Resend email integration, upgrade to the Resend Business plan and execute a signed Business Associate Agreement (BAA). The email sending code is commented out in `src/app/api/contact/route.ts` until this is complete.

3. **No PHI in logs.** The API route logs only a timestamp (no patient name, email, phone, or symptoms).

4. **No PHI in localStorage or sessionStorage.** The form component does not persist any data client-side.

5. **No PHI in analytics payloads.** The Google Ads conversion event fires with value and currency only — no patient identifiers.

6. **Vercel is not a HIPAA-covered platform.** If PHI needs to be stored at rest (e.g., in a database), migrate to AWS or Google Cloud with a signed BAA and encrypted RDS. Vercel cannot sign a BAA.

---

## Google Ads Conversion Tracking

Google Ads conversion tracking is implemented in `src/components/AppointmentForm.tsx`.

Setup steps:
1. Get your Conversion ID and Label from Google Ads → Tools → Conversions
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-XXXXXXXXXX
   NEXT_PUBLIC_GOOGLE_ADS_COGNIFICA_LABEL=XXXXXXXXXXXXXXXXXXX
   ```
3. Update the gtag script IDs in `src/app/layout.tsx` (replace `AW-XXXXXXXXXX` and `G-XXXXXXXXXX`)
4. Verify the conversion fires in Google Tag Assistant after a test form submission

---

## Mailchimp Integration (TODO)

A Mailchimp newsletter integration is scaffolded via `.env.example` but not yet implemented. Before building:

- Confirm the WordPress site currently uses Mailchimp (check existing subscribers)
- Verify whether to migrate the list or start fresh
- Implement a `/api/subscribe` route using the Mailchimp API
- Add an opt-in field to the appointment form or a standalone newsletter section

---

## Local Development

```bash
# Install dependencies
npm install

# Copy and fill environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open http://localhost:3000

---

## Deployment (Vercel)

1. Push to GitHub repository
2. Import project in Vercel dashboard
3. Add all environment variables from `.env.local`
4. Set custom domain to `cognifica.health`
5. Vercel automatically deploys on push to main branch

**Domain setup:**
- Add `cognifica.health` as a custom domain in Vercel
- Update DNS at your registrar: `A` record pointing to Vercel's IP, or use Vercel nameservers

---

## Practice Information

**Entity:** Cognifica Health
**Phone:** (914) 948 3008
**Email:** appt@cognifica.health

**Locations:**
- 244 Westchester Avenue, Suite 209, West Harrison, NY 10604
- 508 Main Street, Office 2, Aquebogue, NY 11931
- 1100 Bedford St, First Floor, Stamford, CT 06905

**Insurance:** Medicare, Tricare, Workers Compensation, No-Fault, commercial plans

**Team:**
- Dr. John M. Abrahams, MD — Neurosurgeon, founder
- Dr. Susan Mogan, PMHNP — Psychiatric Mental Health Nurse Practitioner
- Juliet Mott — Director of Operations
