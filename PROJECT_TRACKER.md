# Dr. Abrahams — Project Tracker

**Client:** Dr. John M. Abrahams, MD
**Agency:** Rocket Creative — georgestoff@rocketcreative.net
**Last Updated:** March 13, 2026

---

## Status Dashboard

| Phase | Task | Status |
|-------|------|--------|
| Google Ads | Remove old account 720-866-3917 | [ ] Not started |
| Google Ads | New account 393-266-9621 setup complete | [ ] Not started |
| Google Ads | Conversion tracking live on all 3 domains | [ ] Not started |
| Google Ads | ISS campaign unpaused and running | [ ] Not started |
| Google Ads | Cognifica campaign unpaused and running | [ ] Not started |
| Google Ads | Kronos campaign unpaused and running | [ ] Not started |
| Brand | DR_ABRAHAMS_BRAND_MASTER.md created | [x] Done |
| Websites | iss.health Vercel migration complete | [ ] Not started |
| Websites | cognifica.health Vercel migration complete | [ ] Not started |
| Websites | kronoshealth.co Vercel migration complete | [ ] Not started |
| Websites | ISS landing pages built (/cervical-spine/, /lumbar-spine/, /meet-dr-abrahams/) | [ ] Not started |
| Websites | Cognifica landing pages built (/tms-therapy/, /memory-brain-fog/, /concussion-tbi/, /neuropsychological-testing/) | [ ] Not started |
| Websites | Kronos site restructured (Revenue Cycle, CognificaAI, Synaptix nav) | [ ] Not started |

---

## 1. Google Ads — Remove Old Account (720-866-3917)

**Priority: Complete BEFORE spending any more money in the old account.**

The old account has a documented history of policy violations (Compromised Site, Misrepresentation, Spam) and zero conversions on active spend. The new account 393-266-9621 replaces it entirely.

### Step-by-step decommission checklist:

- [ ] **Log in to old account** at ads.google.com — account 720-866-3917
- [ ] **Pause ALL active campaigns** — currently only "New York Brain & Spine Surgery" Smart campaign is active ($18/day spending with zero conversions). Click the green dot next to every campaign name → set to Paused.
- [ ] **Verify zero active spend** — go to Campaigns tab, confirm all campaigns show Paused status and budget pacing stops
- [ ] **Remove payment methods** — go to Tools → Billing → Payment Methods → remove all cards on file. This prevents accidental charges. Do NOT close the account, just remove billing.
- [ ] **Unlink Google Business Profile** (optional) — Tools → Linked accounts → Google Business Profile → unlink. The GBP will then be re-linked to the new account.
- [ ] **Unlink GA4 properties** (optional) — Tools → Linked accounts → Google Analytics → unlink. Re-link to new account.
- [ ] **DO NOT delete or close the account** — Keep it accessible for historical data. You may need reference data from it.
- [ ] **Note the decommission date** in this file: _____________
- [ ] **Confirm with Dr. Abrahams** that billing has stopped

> Reference docs in `/google-ads-archive/`:
> - `dj abrahams_ Google Ads Account Audit Report — 720-866-3917 (2).md` — full audit of what's wrong
> - `ISS Health - Google Ads Migration Plan.md` — original migration rationale

---

## 2. Google Ads — New Account Setup (393-266-9621)

**Account ID:** 393-266-9621
**Login:** media@nybrainspine.com
**Total budget:** $75/day ($2,250/month)

### Pre-launch requirements (complete in order):

**Account-level setup:**
- [ ] Verify account 393-266-9621 is accessible at ads.google.com
- [ ] Apply for Google healthcare advertiser certification (Tools → Policies → Certification)
  - Required before medical ads can run without restrictions
  - Takes 1-10 business days
  - Docs needed: practice name, NPI number, state license
- [ ] Configure Google Ads conversion actions (Tools → Conversions):
  - ISS — Form Submission (value: $50)
  - ISS — Phone Call (value: $50)
  - Cognifica — Form Submission (value: $50)
  - Cognifica — Phone Call (value: $50)
  - Kronos — Revenue Cycle Lead (value: $100)
  - Kronos — CognificaAI Demo (value: $100)
  - Kronos — Synaptix Demo (value: $100)
- [ ] Link Google Business Profile (Tools → Linked accounts → Google Business Profile)
- [ ] Link GA4 properties for all 3 domains (Tools → Linked accounts → Google Analytics)
- [ ] Install Google Ads conversion tags on all 3 websites (see `/cursor-prompts/05_CONVERSION_TRACKING_SETUP.md`)

**Landing pages (must exist before campaigns launch):**
- [ ] iss.health/cervical-spine/ is live
- [ ] iss.health/lumbar-spine/ is live
- [ ] iss.health/meet-dr-abrahams/ is live
- [ ] cognifica.health/tms-therapy/ is live
- [ ] cognifica.health/memory-brain-fog/ is live
- [ ] cognifica.health/concussion-tbi/ is live
- [ ] cognifica.health/neuropsychological-testing/ is live
- [ ] kronoshealth.co/revenue-cycle/ is live
- [ ] kronoshealth.co/cognificaai/ is live
- [ ] kronoshealth.co/synaptix/ is live

**Campaign build (all campaigns currently PAUSED — do not unpause until landing pages and tracking are verified):**
- [ ] ISS campaign built: "ISS - Search - Spine Conditions" — $25/day
  - Reference: `/google-ads-archive/GAds_1A_ISS_Setup_AdGroup1.md` through `GAds_1C`
- [ ] Cognifica campaign built: "Cognifica - Search - TMS & Mental Health" — $30/day
  - Reference: `/google-ads-archive/GAds_2A_Cognifica_Setup_AdGroup1.md` through `GAds_2C`
- [ ] Kronos campaign built: "Kronos - Search - RCM & Billing" — $20/day
  - Reference: `/google-ads-archive/GAds_3A_Kronos_Setup_AdGroup1.md` through `GAds_3B`
- [ ] Kronos Ad Group 3 split into CognificaAI (3A) and Synaptix (3B)
  - Reference: `/cursor-prompts/04_KRONOS_GADS_CAMPAIGN_FIXES.md`

**Conversion tracking verification (run on each domain before unpausing):**
- [ ] iss.health: Tag Assistant confirms conversion tag fires
- [ ] iss.health: Test form submission shows in Google Ads conversions within 24 hours
- [ ] iss.health: Phone click (914-948-3008) triggers conversion event
- [ ] cognifica.health: Tag Assistant confirms conversion tag fires
- [ ] cognifica.health: Test form submission tracked
- [ ] cognifica.health: Phone click (914-948-3008) tracked
- [ ] kronoshealth.co: Tag Assistant confirms conversion tag fires
- [ ] kronoshealth.co: Demo form submissions tracked
- [ ] kronoshealth.co: Phone click (914-705-6830) tracked

**Launch sequence (one at a time, 48 hours apart):**
- [ ] Unpause ISS campaign — monitor 48 hours
- [ ] Unpause Cognifica campaign — monitor 48 hours
- [ ] Unpause Kronos campaign — monitor 48 hours

> Reference docs in `/google-ads-archive/` and `/cursor-prompts/`:
> - All `GAds_Chunk_0–4_*.md` files — full step-by-step execution in browser
> - `Google_Ads_Carry_Forward_Data_NYBS (1).md` — full asset library (headlines, keywords, extensions)
> - `/cursor-prompts/05_CONVERSION_TRACKING_SETUP.md` — exact tag installation code

---

## 3. Brand Master Document

Single source of truth for writing ads, social media, and any copy across all three companies.

**File:** `DR_ABRAHAMS_BRAND_MASTER.md` (root of this folder)

Read this file before writing any ad copy, social post, email, or web content.

---

## 4. Website Migration to Vercel

All three WordPress sites are currently hosted on GoDaddy. Migration to Vercel (Next.js App Router) will improve performance, SEO, and maintainability.

See individual migration docs in each brand folder:
- `iss.health/VERCEL_MIGRATION.md`
- `cognifica.health/VERCEL_MIGRATION.md`
- `kronoshealth.co/VERCEL_MIGRATION.md`

**Migration order (recommended):**
1. kronoshealth.co first — B2B, least HIPAA-sensitive, smallest site
2. cognifica.health second — patient-facing but smaller scope
3. iss.health last — largest site, most SEO at stake, most page content

**Pre-migration checklist (applies to all three):**
- [ ] Full site crawl and export of all URLs (use Screaming Frog or similar)
- [ ] Screenshot archive of all current pages
- [ ] GA4 data noted (baseline for comparison post-launch)
- [ ] DNS TTL lowered to 300 (5 min) 48 hours before cutover
- [ ] Staging site validated in Vercel before DNS switch
- [ ] All 301 redirects mapped and configured in next.config.js
- [ ] Google Search Console ownership verified on new site
- [ ] Google Ads landing page URLs confirmed live in new stack before campaigns run

---

## 5. Credentials & Contacts Index

### Google Ads

| Account | ID | Login | Status |
|---------|----|----|--------|
| New (active) | 393-266-9621 | media@nybrainspine.com | Building |
| Old (decommission) | 720-866-3917 | (same or via Dr. Abrahams) | Pause + remove billing |

### Websites & Hosting

| Domain | Live URL | Hosting | Registrar | Notes |
|--------|----------|---------|----------|-------|
| iss.health | https://iss.health/ | GoDaddy | GoDaddy | 2-step auth via Dr. Abrahams' phone |
| cognifica.health | https://cognifica.health/ | GoDaddy | GoDaddy | 2-step auth via Dr. Abrahams' phone |
| kronoshealth.co | https://kronoshealth.co/ | GoDaddy | GoDaddy | 2-step auth via Dr. Abrahams' phone |
| gettappy.com | Possibly Josh Winter's server | GoDaddy | Unclear — confirm with Chelsea |
| cervical-center.com | Hacked — Cloudflare DNS | Namecheap | NOT in GoDaddy — unknown account |
| lumbar-center.com | Policy violations | Namecheap | NOT in GoDaddy — unknown account |

### Practice Phone Numbers

| Entity | Phone | Used For |
|--------|-------|---------|
| ISS Health + Cognifica Health | 914-948-3008 | All patient-facing calls |
| Kronos Health (B2B) | 914-705-6830 | Provider/employer inquiries |
| Secondary (inactive) | (203) 909-6944 | Paused in old Google Ads account |

### Email

| Entity | Email |
|--------|-------|
| ISS Health | info@iss.health |
| Cognifica Health | appt@cognifica.health |
| Kronos Health | info@kronoshealth.co |
| Google Ads login | media@nybrainspine.com |
| Agency | georgestoff@rocketcreative.net |
| Chelsea Carl (Compliance) | ccarl@nybrainspine.com |

### Social Media

| Platform | Handle | Login |
|----------|--------|-------|
| Instagram — ISS | @instituteforspinesurgery | instituteforspinesurgery / Instituteforspinesurgery2025 |
| Instagram — Cognifica | @cognifica.health | cognifica.health / Centerforcognitivehealth2025 |
| Gmail (both IG accounts) | instituteforspinesurgery@gmail.com | Instituteforspinesurgery2025 |
| LinkedIn | Set up Dr. Abrahams as admin | Needs to be done by Dr. Abrahams |
| LinkedIn — Cognifica | linkedin.com/company/cognificahealth | 42 followers |

### Key Team Contacts

| Name | Title | Contact |
|------|-------|---------|
| Dr. John M. Abrahams, MD | Founder / Client | — |
| Juliet Mott | Director of Operations | — |
| Chelsea Carl | Director of Governance, Risk & Compliance | ccarl@nybrainspine.com |
| Heisha Rivera | Director of Revenue Cycle | — |
| John Cvitkovic, PA, PT | Director, Digital Health | — |
| Dr. Susan Mogan, PMHNP | Clinical Provider (Cognifica) | — |
| Jonathan Braden | Previous Web Developer | Set up WordPress admin access |

---

## 6. Notes & Decisions Log

| Date | Note |
|------|------|
| Feb 25, 2026 | Google Ads audit completed. Old account confirmed broken. New account 393-266-9621 created. |
| Mar 10, 2026 | Dr. Abrahams requested Kronos site restructure: add CognificaAI + Synaptix, revise nav. |
| Mar 10, 2026 | All three company master docs (COGNIFICA_MASTER.md, KRONOS_HEALTH_MASTER.md) compiled. |
| Mar 13, 2026 | Google Ads docs archived to /google-ads-archive/. PROJECT_TRACKER.md created. DR_ABRAHAMS_BRAND_MASTER.md created. Vercel migration docs created. |
| | |
| | |
