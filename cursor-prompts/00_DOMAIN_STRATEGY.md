# Domain & Landing Page Strategy — Dr. Abrahams Portfolio

## EXECUTIVE SUMMARY

After researching current Google Ads best practices (2025-2026), the optimal approach for Dr. Abrahams' multi-entity business is:

**Keep the current multi-domain structure. Build dedicated landing pages on each domain. Do NOT consolidate to a single domain.**

---

## CURRENT DOMAIN MAP

| Domain | Entity | Audience | Type |
|---|---|---|---|
| **kronoshealth.co** | Kronos Health (parent) | B2B — Practices, employers, healthcare admins | WordPress + Divi |
| **cognifica.health** | Cognifica Health (clinical practice) | B2C — Patients seeking neuropsych/TMS/concussion care | WordPress + Divi |
| **iss.health** | Institute for Spine Surgery | B2C — Patients seeking spine surgery | WordPress + Divi |

### Products Living Under Kronos (B2B):
- **CognificaAI** → kronoshealth.co/cognificaai/
- **Synaptix** → kronoshealth.co/synaptix/
- **Revenue Cycle** → kronoshealth.co/revenue-cycle/

---

## WHY MULTI-DOMAIN IS CORRECT HERE

### 1. B2B vs B2C Separation
Kronos Health serves healthcare professionals and employers. Cognifica Health and ISS serve patients. Mixing B2B and B2C audiences on one domain confuses messaging, hurts conversion rates, and weakens quality score because ad copy and landing pages can't align to both audiences simultaneously.

### 2. Google Ads Quality Score Is Per-Keyword, Not Per-Account
Research confirms there is NO penalty for running multiple domains from a single Google Ads account. Quality Score is calculated at the keyword level based on: expected CTR, ad relevance, and landing page experience. Running separate domains doesn't hurt; sending users to irrelevant pages does.

### 3. Landing Page Experience Is the Biggest Factor
Google's 2025 prediction model now scores landing page navigation quality with increased weight. Sending a patient searching "TMS therapy near me" to cognifica.health/tms-therapy is dramatically better than sending them to kronoshealth.co (a B2B site). The domain itself reinforces trust and relevance.

### 4. Healthcare Trust Signals Require Audience-Specific Design
Patients need: insurance accepted, phone numbers, office locations, provider bios, condition information. Employers/practices need: ROI data, demo forms, HIPAA compliance, product specs. These cannot coexist effectively on a single domain without confusing both audiences.

---

## THE LANDING PAGE PROBLEM (CURRENT STATE)

Right now, ALL Google Ads campaigns point to root domain homepages:
- ISS ads → iss.health/ (homepage)
- Cognifica ads → cognifica.health/ (homepage)
- Kronos ads → kronoshealth.co/ (homepage)

**This is the single biggest performance issue.** Research shows:
- Dedicated landing pages produce **750% higher conversion rates** than homepage traffic
- Ads with matched landing pages see **36% lower CPCs**
- Google explicitly penalizes landing page experience when the page doesn't match the ad's promise

---

## RECOMMENDED URL STRUCTURE

### ISS.health — Spine Surgery (Patient-Facing)

**Current:** All ads → iss.health/ (homepage)

**Target:**
```
iss.health/                                    ← Homepage (brand/overview)
iss.health/cervical-spine/                     ← Ad Group 1 landing page
iss.health/lumbar-spine/                       ← Ad Group 2 landing page
iss.health/meet-dr-abrahams/                   ← Ad Group 3 landing page
iss.health/appointments/                       ← Existing appointment page
iss.health/cervical-center/                    ← REDIRECT to /cervical-spine/ (old URL)
iss.health/the-lumbar-center/                  ← REDIRECT to /lumbar-spine/ (old URL)
```

**Existing pages to keep/update:**
- `/cervical-center/` and all sub-pages → Consolidate into `/cervical-spine/` (single landing page with anchor sections for each condition)
- `/the-lumbar-center/` and sub-pages → Consolidate into `/lumbar-spine/`
- `/common-diagnosis/*` pages → Link from the landing pages as supporting content
- `/providers/`, `/locations/`, `/in-the-news/`, `/innovations/` → Keep as supporting pages

### cognifica.health — Clinical Practice (Patient-Facing)

**Current:** All ads → cognifica.health/ (homepage)

**Target:**
```
cognifica.health/                              ← Homepage (practice overview)
cognifica.health/tms-therapy/                  ← Ad Group 1 landing page
cognifica.health/memory-brain-fog/             ← Ad Group 2 landing page
cognifica.health/concussion-tbi/               ← Ad Group 3 landing page
cognifica.health/neuropsychological-testing/   ← Ad Group 4 landing page
cognifica.health/conditions-we-treat/          ← Existing conditions page
cognifica.health/team/                         ← Existing team page
cognifica.health/consults/                     ← Existing consult/booking page
```

**Existing pages to keep:**
- `/conditions-we-treat/` → Keep as comprehensive overview, link from all landing pages
- `/team/` → Keep, link from all landing pages
- `/brain-health-and-wellness/` → Keep as blog/education content
- `/consults/` → Keep as booking page, all CTAs point here
- `/news/` → Keep

### kronoshealth.co — Kronos Health (B2B)

**Current:** All ads → kronoshealth.co/ (homepage)

**Target:**
```
kronoshealth.co/                               ← Homepage (umbrella overview)
kronoshealth.co/revenue-cycle/                 ← Ad Group 1 landing page (rename from /arbitration/)
kronoshealth.co/oon-billing/                   ← Ad Group 2 landing page (IDR/OON focus)
kronoshealth.co/cognificaai/                   ← Ad Group 3 landing page (workplace MH platform)
kronoshealth.co/synaptix/                      ← Ad Group 3 landing page (concussion software)
kronoshealth.co/about/                         ← Existing about page
kronoshealth.co/contact/                       ← Existing contact page
```

**Note on CognificaAI/Synaptix domain question:** For now, keeping these as subdirectories under kronoshealth.co is the right call because:
1. Dr. Abrahams specifically requested they be added to the Kronos Health site nav
2. They share the B2B audience with Kronos
3. Building separate domains splits domain authority and adds complexity
4. If either product scales to justify dedicated marketing spend, standalone domains can be added later (cognificaai.com, synaptix.io, etc.) with the kronoshealth.co pages redirecting

---

## GOOGLE ADS CAMPAIGN UPDATES NEEDED

After landing pages are built, update the campaign Final URLs:

### ISS Campaign
| Ad Group | Current Final URL | New Final URL |
|---|---|---|
| Cervical Spine | iss.health/ | **iss.health/cervical-spine/** |
| Lumbar Spine | iss.health/ | **iss.health/lumbar-spine/** |
| General Spine Surgeon | iss.health/ | **iss.health/meet-dr-abrahams/** |

### Cognifica Campaign
| Ad Group | Current Final URL | New Final URL |
|---|---|---|
| TMS Therapy | cognifica.health/ | **cognifica.health/tms-therapy/** |
| Memory / Brain Fog | cognifica.health/ | **cognifica.health/memory-brain-fog/** |
| Concussion / TBI | cognifica.health/ | **cognifica.health/concussion-tbi/** |
| Neuropsychologist | cognifica.health/ | **cognifica.health/neuropsychological-testing/** |

### Kronos Campaign
| Ad Group | Current Final URL | New Final URL |
|---|---|---|
| Revenue Cycle | kronoshealth.co/ | **kronoshealth.co/revenue-cycle/** |
| OON Billing / IDR | kronoshealth.co/ | **kronoshealth.co/oon-billing/** |
| Healthcare Software | kronoshealth.co/ | **kronoshealth.co/cognificaai/** AND **kronoshealth.co/synaptix/** (split into 2 ad groups) |

### New Campaigns to Build (Phase 2)
| Campaign | Domain | Target | Keywords |
|---|---|---|---|
| CognificaAI - B2B | kronoshealth.co/cognificaai/ | HR leaders, benefits managers | employee mental health platform, workplace wellness screening, EAP alternative |
| Synaptix - B2B | kronoshealth.co/synaptix/ | Practice administrators | concussion management software, concussion billing, TBI practice management |

---

## SITELINK UPDATES

All sitelink Final URLs currently point to root domains. After landing pages exist, update every sitelink to point to the relevant page:

**ISS Sitelinks:**
- "Meet Dr. Abrahams" → iss.health/meet-dr-abrahams/
- "Our Services" → iss.health/cervical-spine/ (or a /services/ overview)
- "Patient Reviews" → iss.health/reviews/ (or iss.health/ with anchor)

**Cognifica Sitelinks:**
- "TMS Therapy" → cognifica.health/tms-therapy/
- "Conditions We Treat" → cognifica.health/conditions-we-treat/
- "Book an Appointment" → cognifica.health/consults/
- "Our Locations" → cognifica.health/locations/ (or section on homepage)

**Kronos Sitelinks:**
- "RCM Services" → kronoshealth.co/revenue-cycle/
- "IDR & OON Billing" → kronoshealth.co/oon-billing/
- "Request a Demo" → kronoshealth.co/cognificaai/ or /synaptix/ (product-specific)

---

## CONVERSION TRACKING CHECKLIST

Before any campaign goes live, verify these on ALL THREE domains:

- [ ] Google Ads conversion tag installed and firing on form submissions
- [ ] Google Ads conversion tag tracking phone number clicks
- [ ] GA4 property connected and tracking pageviews
- [ ] Form submission thank-you page/event set as conversion
- [ ] Phone call tracking enabled (914-948-3008 for ISS/Cognifica, 914-705-6830 for Kronos)
- [ ] Test conversions firing in Google Ads conversion diagnostics
- [ ] HIPAA-compliant tracking (no PII passed through conversion pixels for patient-facing sites)

---

## PRIORITY EXECUTION ORDER

1. **Build Kronos site landing pages** (CognificaAI, Synaptix, Revenue Cycle) — Blocks Google Ads launch
2. **Build Cognifica Health landing pages** (TMS, concussion, memory, neuropsych) — Blocks Google Ads launch
3. **Build ISS landing pages** (cervical, lumbar, dr-abrahams) — Blocks Google Ads launch
4. **Update Google Ads Final URLs** in all campaigns
5. **Update sitelink URLs** in all campaigns
6. **Verify conversion tracking** on all domains
7. **Split Kronos Ad Group 3** into separate CognificaAI and Synaptix ad groups
8. **Test all pages** on mobile (Google Ads mobile quality is critical)
9. **Run PageSpeed Insights** on all landing pages, fix critical issues
10. **Unpause campaigns** only after all above is verified
