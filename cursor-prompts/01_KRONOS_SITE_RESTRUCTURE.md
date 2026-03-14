# Cursor Prompt: Kronos Health Site Restructure (kronoshealth.co)

## OBJECTIVE

Restructure the kronoshealth.co WordPress + Divi site navigation and add three new product/service pages. This is the highest-priority task because Google Ads campaigns depend on these pages existing before launch.

---

## CURRENT STATE

- **Platform:** WordPress + Divi Builder v4.27.6
- **Hosting:** GoDaddy
- **Theme:** DARK — near-black backgrounds (#1A1A1A) with bright cyan (#00FFFF) accents
- **Domain:** kronoshealth.co
- **Current Nav:** Home | About | Services (dropdown: Payment Dispute Resolution, Clinically Integrated Neuropsychology, Cognitive Franchise Program, Digital Health Tools) | Contact

### Current Pages
1. Homepage (/) — Hero + 4 service cards + contact form
2. About (/about/) — Company overview + 7 team profiles
3. Payment Dispute Resolution (/arbitration/) — IDR service page
4. Clinically Integrated Neuropsychology — Referral network page
5. Cognitive Franchise Program — Franchise offering page
6. Digital Health Tools — Tappy, AISA, Digital Evaluation Module
7. Contact (/contact/) — Contact form page

---

## TARGET STATE — Navigation Changes

**Remove:** The entire "Services" dropdown from the main nav.

**New top-level nav items (in this order):**
```
Home | About | Revenue Cycle | CognificaAI | Synaptix | Contact
```

### Slug mapping:
- Revenue Cycle → `/revenue-cycle/` (rename/redirect from `/arbitration/`)
- CognificaAI → `/cognificaai/`
- Synaptix → `/synaptix/`

### What happens to old pages:
- **Payment Dispute Resolution (/arbitration/)** → Renamed to "Revenue Cycle" — content stays mostly the same, rebrand nav label and page title. Set up a 301 redirect from `/arbitration/` to `/revenue-cycle/`.
- **Clinically Integrated Neuropsychology** → Keep as internal page accessible from Revenue Cycle or About, remove from main nav.
- **Cognitive Franchise Program** → Keep as internal page, remove from main nav.
- **Digital Health Tools** → Consolidate mentions into Synaptix and CognificaAI pages, remove from main nav.

---

## BRAND GUIDE (Apply to ALL new pages)

### Colors
| Token | Hex | Usage |
|---|---|---|
| Background | #1A1A1A | Primary background |
| Card BG | #2B2B2B | Card/section backgrounds |
| CTA/Accent | #00FFFF | Buttons, submit, nav hover, links |
| Teal | #009B8D | Service card accent |
| Mint Green | #B8F5B0 | Service card accent |
| Lavender | #D4B8E8 | Service card accent |
| White | #FFFFFF | Headings and body text |

### Typography
- **Headings:** Bebas Neue (uppercase)
- **Body:** IBM Plex Sans
- **Nav:** Open Sans
- All text is light on dark (#FFFFFF on #1A1A1A)

### Design Patterns (from existing site)
- Full-width dark sections with contained content (max-width ~1200px)
- Cards with #2B2B2B backgrounds and subtle border or shadow
- Cyan (#00FFFF) used for ALL interactive elements: buttons, links, hover states
- Service cards have left-side colored accent bars
- CTAs are solid cyan buttons with dark text, or ghost buttons with cyan border
- Contact forms: dark card background, cyan submit button

---

## PAGE 1: Revenue Cycle (`/revenue-cycle/`)

This is a rebrand of the existing Payment Dispute Resolution page. Update the following:

### Page Title
"Revenue Cycle Management & Payment Dispute Resolution"

### Meta Description
"Expert revenue cycle management, out-of-network billing, and IDR dispute resolution for healthcare providers. Kronos Health maximizes your reimbursements."

### Hero Section
- **Headline:** "REVENUE CYCLE MANAGEMENT"
- **Subhead:** "Expert arbitration and out-of-network dispute resolution under the No Surprises Act."
- **CTA:** "Schedule a Consultation" → links to contact form or embedded form

### Content Sections

**Section 1: What We Do**
Four service cards in a 2x2 grid:
1. **Complete Case Management** — End-to-end IDR process handling from initiation to resolution
2. **Compelling Submissions** — Preparing payment offers with clinical insight and regulatory expertise
3. **Deadline & Compliance Tracking** — Managing all federal requirements and time-sensitive filings
4. **Post-Arbitration Follow-Up** — Ensuring favorable outcomes are collected and documented

**Section 2: How It Works (4-step process)**
Horizontal step cards or vertical timeline:
1. Submit Negotiation
2. Initiate IDR
3. Build the Case
4. Arbitration

**Section 3: Why Kronos Health**
Three value proposition cards:
- **We Work for Providers** — Not insurers. Your interests come first.
- **We Know the Law** — Deep expertise in the No Surprises Act and IDR regulations.
- **We Maximize Reimbursement** — Transparent pricing with a clear fee breakdown.

**Section 4: Meet the Revenue Cycle Team**
Team cards with photo placeholders:
- Heisha Rivera — Director of Revenue Cycle (20+ years, No Surprises Act expert)
- Camila Nicasio — Revenue Cycle Specialist
- Nicole Cedeno — Revenue Cycle Specialist (5+ years)
- Soily Rivera — Revenue Cycle Specialist (22+ years)

**Section 5: CTA Bar**
- "Stop Leaving Money on the Table."
- "Contact us for a free revenue review."
- CTA button → contact form
- Phone: 914-705-6830

### Google Ads Landing Page Requirements
This page MUST have:
- A clearly visible phone number (914-705-6830) above the fold
- A contact/consultation form (Name, Phone, Email, Practice Name, Message)
- Form submissions go to: info@kronoshealth.co
- Fast load time (optimize images, defer JS where possible)
- Mobile responsive (B2B users often search on mobile during breaks)

---

## PAGE 2: CognificaAI (`/cognificaai/`)

**IMPORTANT:** A complete HTML mockup exists at `cognifica_ai_page.html` in the project folder. Use this as the DESIGN REFERENCE for layout, section structure, and content. However, you must RESTYLE it to match the Kronos Health dark theme (#1A1A1A bg, #00FFFF accents, Bebas Neue headings).

### Page Title
"CognificaAI — Workplace Mental Health Platform"

### Meta Description
"Intelligent mental health screening and risk stratification for employers. Evidence-based assessments, proprietary risk scoring, and smart care pathways. Request a demo."

### Hero Section
- **Eyebrow tag:** "WORKPLACE MENTAL HEALTH PLATFORM"
- **Headline:** "INTELLIGENT MENTAL HEALTH SCREENING & RISK STRATIFICATION FOR EMPLOYERS"
- **Subheadline:** "CognificaAI gives employers a clinically rigorous way to proactively support employee mental health — from automated screening and risk stratification to direct pathways for professional care."
- **CTA Primary:** "Request a Demo →"
- **CTA Secondary:** "See How It Works"
- **Visual:** Assessment dashboard card mockup (see cognifica_ai_page.html hero-right section for the card stack design — adapt to dark theme)

### Trust Bar
Stats row below hero:
- "1 in 5" — U.S. adults affected by mental illness annually
- "$1T" — Lost productivity globally per year
- "46%" — Of those with mental illness receive any treatment
- "4x" — ROI for employers who invest in mental health programs

### Section: The Challenge
- **Headline:** "Mental health is your most under-addressed workforce risk."
- Three stat blocks:
  - 77% — Burnout is widespread
  - $4,700 — Per-employee annual cost of untreated depression
  - 62% — Prefer digital-first screening

### Section: How It Works (5 Steps)
Interactive step list with visual panel:
1. **Employee Completes Standardized Assessments** — Secure link, web or mobile, under 10 minutes. PHQ-9, GAD-7, PSQI, DAST-10, AUDIT, PCL-5. No app download required.
2. **Proprietary Risk Score Calculated Instantly** — Composite risk score stratified into Low, Moderate, Elevated, High categories.
3. **Personalized Recommendations Delivered** — Tailored guidance from psychoeducation to direct referrals.
4. **Crisis Support Available 24/7** — Immediate connection to crisis resources for high-risk screens.
5. **Employer Dashboard Tracks Aggregate Wellness** — Anonymized, HIPAA-compliant workforce trends dashboard.

### Section: Clinical Instruments (6-card grid)
| Assessment | Full Name | Measures |
|---|---|---|
| PHQ-9 | Patient Health Questionnaire | Depression |
| GAD-7 | Generalized Anxiety Disorder Scale | Anxiety |
| PSQI | Pittsburgh Sleep Quality Index | Sleep Quality |
| DAST-10 | Drug Abuse Screening Test | Substance Use |
| AUDIT | Alcohol Use Disorders ID Test (WHO) | Alcohol Use |
| PCL-5 | PTSD Checklist — DSM-5 | Trauma / PTSD |

### Section: Risk Stratification
Four risk tiers with action cards:
1. **Low Risk** (green) — Self-guided digital support, wellness tips
2. **Moderate Risk** (amber) — Targeted self-help, EAP referral
3. **Elevated Risk** (orange) — Automated referral to licensed professional with direct booking
4. **High Risk / Crisis** (red) — Immediate 24/7 crisis support, clinical escalation protocol

### Section: For Employers (6 value cards)
1. Early Detection — 35% increase in condition identification
2. HIPAA Compliant & Confidential — 100% privacy-protected
3. Zero IT Lift — Deploy in < 1 week
4. Direct Care Pathways — Real referrals, not resource lists
5. Measurable ROI — Quarterly outcomes reporting
6. 24/7 Crisis Safety Net — Active crisis response, not just hotlines

### Section: Demo CTA
- **Headline:** "Ready to make mental health a measurable priority?"
- **Form fields:** Name, Phone, Email, Organization
- **Form submissions to:** info@kronoshealth.co
- **CTA button:** "Request a Demo"

### Google Ads Landing Page Requirements
This page is the landing destination for Kronos Ad Group 3 (Healthcare Software). It MUST have:
- Clear B2B positioning (employer-focused, not patient-facing)
- Demo request form above the fold or easily scrollable
- Contact: info@kronoshealth.co / 914-705-6830
- Mobile responsive
- Fast load time

---

## PAGE 3: Synaptix (`/synaptix/`)

**IMPORTANT:** A complete HTML mockup exists at `synaptix_page.html` in the project folder. Use this as the DESIGN REFERENCE for layout, section structure, and content. However, you must RESTYLE it to match the Kronos Health dark theme (#1A1A1A bg, #00FFFF accents, Bebas Neue headings).

### Page Title
"Synaptix — Concussion Assessment & Recovery Platform"

### Meta Description
"Structured, billable, recurring concussion management software for orthopedic and neurosurgery practices. 12-week program, $260K annual revenue potential. Request a demo."

### Hero Section
- **Eyebrow tag:** "CONCUSSION MANAGEMENT SOFTWARE"
- **Headline:** "STRUCTURED. BILLABLE. RECURRING."
- **Subheadline:** "Synaptix is a comprehensive concussion management system combining clinical history, neurological examination, and neuropsychological testing — built to generate recurring, billable revenue for your practice."
- **CTA Primary:** "Request a Demo →"
- **CTA Secondary:** "See the Revenue Model"
- **Visual:** Clinical data visualization or assessment dashboard mock (reference synaptix_page.html)

### Revenue Model Section (KEY SELLING POINT — make prominent)
Four stat cards:
- **$260K** — Annual Revenue Potential (one new patient per week)
- **$1,500–$5,000** — Per Patient Each Year
- **12 Weeks** — Structured Recovery Cycle
- **3 Billable Visits** — Per Cycle Minimum

### Section: How It Works (Clinical Workflow)
Step-by-step timeline:

**1. Initial Visit**
- History & physical + concussion-focused clinical exam
- Neuropsychological Testing (NPE-CX): PHQ-9, GAD-7, PSQI, HIT-6, PCSS, PCL-5
- Enroll patient in Digital Evaluations
- Coding: E&M (99214-99215) + NPE Testing (96136 + 96137)

**2. Feedback Visit (2 weeks later)**
- Review NPE testing results, develop treatment plan
- Coding: NPE Interpretation (96132 + 96133)
- If symptoms indicate → Enroll in Computerized Cognitive Remediation (1-2x/week, 12 weeks)
- Enable weekly digital check-ins
- Monthly NPE-CX assessments

**3. Weekly Digital Check-Ins**
- Automated SMS/email symptom surveys
- Coding: 99421, 99422, 99423 (or 96146)

**4. Computerized Remediation Therapy**
- Brain exercises based on Montreal Cognitive Assessment
- 1-2x per week
- Coding: 96158 (30 min) + 96159 (add'l 15 min)

**5. Re-Evaluation (every 12 weeks)**
- Full reassessment: history, exam, NPE-CX
- Continue cycle until symptoms subside
- Same coding as feedback visit + testing

### Section: Why Synaptix for Your Practice
Value proposition cards:
- **Capture Post-Injury Revenue** — Cases already entering your practice
- **Zero Added Staff** — MD/DO/NP + computer workstation is all you need
- **No Referrals Lost** — Keep concussion patients in-house
- **Stronger Compliance** — Automated documentation and coding guidance
- **Recurring Engagement** — 12-week cycles with ongoing monitoring
- **Built by Clinicians** — Designed by neurosurgeons and neuropsychologists

### Section: Target Practices
Three audience cards:
- Orthopedic Surgery Practices
- Neurosurgery Practices
- Sports Medicine Clinics

### Section: Licensing Model
- 30-day trial from existing patients
- Monthly license by volume
- Short training required
- Low startup costs: provider + workstation

### Section: Plan of Care Thresholds (clinical reference)
Display as a reference table or accordion:
- Headache > 4 → Limit work, limit driving, no heavy lifting, screen time < 30 min/day
- Dizziness > 4 → No work, no driving, no heavy lifting, screen time < 30 min/day, start vestibular PT
- Brain Fog > 4 → No work, no driving, no heavy lifting, screen time < 60 min/day

### Section: Demo CTA
- **Headline:** "See What Synaptix Can Do for Your Practice."
- **Form fields:** Name, Phone, Email, Organization
- **Form submissions to:** info@kronoshealth.co
- **CTA button:** "Request a Demo"

### Google Ads Landing Page Requirements
This page is the landing destination for Kronos Ad Group 3 (Healthcare Software). It MUST have:
- Clear B2B positioning (practice-focused, not patient-facing)
- Revenue model prominently displayed
- Demo request form
- Contact: info@kronoshealth.co / 914-705-6830
- Mobile responsive
- Fast load time

---

## HOMEPAGE UPDATES

After the three new pages are live, update the homepage:

### Service Cards Section
Replace the existing 4 service cards with 3 new ones:
1. **Revenue Cycle** — Expert billing, IDR, and dispute resolution → links to /revenue-cycle/
2. **CognificaAI** — Workplace mental health platform → links to /cognificaai/
3. **Synaptix** — Concussion management software → links to /synaptix/

Keep the existing card design pattern (colored accent bars, dark card background, cyan CTA links).

### Hero
Update hero copy if it references the old service structure. Keep the tagline: "Smarter Healthcare. Stronger Revenue."

---

## TECHNICAL REQUIREMENTS

### SEO
- Each new page needs unique title tag and meta description (provided above)
- Add Open Graph tags for social sharing
- Ensure proper heading hierarchy (one H1 per page, structured H2/H3)
- Add schema.org Organization markup on homepage
- Add schema.org Product markup on CognificaAI and Synaptix pages

### Performance
- All images optimized (WebP where supported, lazy loading)
- Minimize Divi builder bloat (disable unused modules)
- Target < 3s load time on mobile

### Redirects
- 301 redirect: `/arbitration/` → `/revenue-cycle/`
- 301 redirect any old service page URLs that may be bookmarked

### Forms
- All demo/contact forms submit to: info@kronoshealth.co
- Form fields: Name, Phone, Email, Organization/Practice Name, Message (optional)
- Add Google Ads conversion tracking to form submission thank-you page/event

### Conversion Tracking
- Install Google Ads conversion tag on all three domains
- Track form submissions as conversions
- Track phone clicks as conversions
- Verify GA4 is connected and tracking pageviews

### Mobile
- All pages must be fully responsive
- Forms must be easily fillable on mobile
- Phone numbers must be tap-to-call links

---

## FILE REFERENCES

These files are in the project folder for content and design reference:
- `cognifica_ai_page.html` — Full CognificaAI page mockup (sage/cream palette — needs dark theme adaptation)
- `synaptix_page.html` — Full Synaptix page mockup (navy/teal palette — needs dark theme adaptation)
- `Kronos Health Site Update 030326.docx` — Dr. Abrahams' original restructure instructions
- `Cognifica AI MHH.docx` — Full CognificaAI product spec
- `Synaptix Concussion Billing Guide.docx` — Clinical billing workflows and CPT codes
- `Cognifica_Master/COGNIFICA_MASTER.md` — Complete Cognifica reference
- `Kronos_Health_Master/KRONOS_HEALTH_MASTER.md` — Complete Kronos Health reference

---

## PRIORITY ORDER

1. Create the 3 new pages (Revenue Cycle, CognificaAI, Synaptix)
2. Update navigation (remove Services dropdown, add new items)
3. Set up 301 redirects
4. Update homepage service cards
5. Verify conversion tracking on all forms
6. Test mobile responsiveness
7. Run PageSpeed Insights and fix any critical issues
