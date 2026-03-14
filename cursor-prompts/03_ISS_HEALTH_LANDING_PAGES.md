# Cursor Prompt: ISS Health Landing Pages (iss.health)

## OBJECTIVE

Build 3 dedicated Google Ads landing pages on iss.health — one per ad group in the "ISS - Search - Spine Conditions" campaign. These pages replace the current strategy of sending all traffic to the homepage.

---

## PLATFORM & BRAND

- **Platform:** WordPress + Divi Builder
- **Hosting:** GoDaddy
- **Domain:** iss.health
- **Entity:** Institute for Spine Surgery
- **Phone:** 914-948-3008
- **Email:** info@iss.health (or general inquiry form)
- **Locations:**
  - **West Harrison, NY** — 244 Westchester Avenue, Suite 209, West Harrison, NY 10604
  - **Stamford, CT** — 1100 Bedford St, First Floor, Stamford, CT 06905

### Brand Identity
Refer to `ISS_Health_Master_Brand_Sheet.xlsx` for exact colors and typography. The site uses a professional medical aesthetic — clean, white/light background, trust-forward design. Key visual elements:
- Professional medical imagery
- Trust signals: "4,000+ Surgeries Performed", "Board-Certified Neurosurgeon", "Two-Surgeon Care Model"
- Provider-centric: Dr. John M. Abrahams is the face of the practice

### BANNED DOMAINS — DO NOT REFERENCE ANYWHERE
- cervical-center.com (hacked/compromised)
- lumbar-center.com (spam violations)
- nybrainspine.com (compromised)
- cognitive-centers.com (banned)

---

## EXISTING SITE STRUCTURE

```
iss.health/                                    ← Homepage
iss.health/providers/                          ← Provider bios
iss.health/locations/                          ← Office locations
iss.health/appointments/                       ← Booking page
iss.health/cervical-center/                    ← Cervical overview (old structure)
  ├── /cervical-degeneration/
  ├── /cervical-disc-herniation/
  ├── /cervical-myelopathy/
  ├── /cervical-radiculopathy/
  ├── /cervical-stenosis/
  ├── /non-surgical-options/
  └── /surgical-options/
iss.health/the-lumbar-center/                  ← Lumbar overview (old structure)
  ├── /non-surgical-options/
  └── /surgical-options/
iss.health/common-diagnosis/                   ← Condition-specific pages
  ├── /foot-drop/
  ├── /low-back-pain/
  ├── /lumbar-degeneration/
  ├── /lumbar-disc-herniation/
  ├── /lumbar-fracture/
  ├── /lumbar-radiculopathy/
  ├── /lumbar-spondylolisthesis/
  ├── /lumbar-stenosis/
  ├── /neurogenic-claudication/
  └── /spinal-cord-tumor/
iss.health/innovations/                        ← Treatment innovations
iss.health/in-the-news/                        ← Press/media
```

### Important Note
The existing `/cervical-center/` and `/the-lumbar-center/` pages and their sub-pages contain valuable SEO content. Do NOT delete them. The new landing pages will be PURPOSE-BUILT for Google Ads and should be optimized for conversion, while the old pages continue serving organic SEO traffic. Set up canonical tags if needed to avoid duplicate content issues.

---

## LANDING PAGE TEMPLATE (Use for ALL 3 pages)

### Required Sections (top to bottom):

1. **Hero Section**
   - H1 headline matching the ad group theme
   - 1-2 sentence subhead emphasizing expertise and outcomes
   - CTA button: "Schedule a Consultation" → links to form or /appointments/
   - Phone number: 914-948-3008 (tap-to-call)
   - Trust badge row: "Board-Certified Neurosurgeon" | "4,000+ Surgeries" | "Two-Surgeon Care Model"

2. **Trust Strip**
   - "4,000+ Surgeries Performed" | "Board-Certified" | "Minimally Invasive Options" | "Insurance Accepted" | "Same-Week Appointments"

3. **Conditions Treated Section**
   - Cards or list of specific conditions relevant to this landing page
   - Brief descriptions in patient-friendly language
   - Link to detailed condition pages (existing `/cervical-center/*` or `/common-diagnosis/*` pages)

4. **Treatment Options Section**
   - Non-surgical and surgical options presented
   - Minimally invasive techniques highlighted
   - Personalized treatment plan emphasis

5. **Why ISS / Dr. Abrahams Section**
   - Two-surgeon care model explanation
   - Dr. Abrahams bio snippet with photo
   - "Hundreds of 5-Star Reviews" (if review widget available)
   - Board certifications and credentials
   - Link to /providers/ for full bio

6. **Locations & Insurance Section**
   - West Harrison, NY address + map
   - Stamford, CT address + map
   - "Accepting Most Major Insurance Plans"
   - "Same-Week Appointments Available"

7. **Consultation Form**
   - Fields: Name, Phone, Email, Location Preference (West Harrison / Stamford), Condition/Area of Concern (dropdown: Cervical/Neck, Lumbar/Back, Other), Brief Description
   - Submit → triggers Google Ads conversion event
   - Below form: "Prefer to call? 914-948-3008"

8. **Patient Reviews Section** (if available)
   - 3-4 selected patient testimonials
   - Star ratings
   - Or link to review platform

---

## PAGE 1: Cervical Spine / Neck Surgery (`/cervical-spine/`)

**Google Ads Ad Group:** Cervical Spine / Neck Surgery
**Target Keywords:** cervical spine surgery, cervical disc herniation treatment, ACDF surgery, cervical stenosis surgery, pinched nerve neck treatment, neck surgery near me

### Page Title
"Cervical Spine & Neck Surgery Specialists | Institute for Spine Surgery"

### Meta Description
"Expert cervical spine surgery in West Harrison, NY and Stamford, CT. ACDF, disc herniation, stenosis, and radiculopathy treatment. Board-certified neurosurgeons. 4,000+ surgeries performed."

### Hero
- **H1:** "Cervical Spine & Neck Surgery Specialists"
- **Subhead:** "Advanced, minimally invasive treatment for cervical disc herniation, stenosis, myelopathy, and radiculopathy. Two-surgeon care model. 4,000+ surgeries performed."
- **CTA:** "Schedule Your Cervical Spine Consultation"

### Conditions Treated (cards or accordion)
Each condition gets a brief description + link to detailed page:

1. **Cervical Disc Herniation** — Disc material pressing on spinal nerves causing neck/arm pain, numbness, or weakness → Link: /cervical-center/cervical-disc-herniation/
2. **Cervical Stenosis** — Narrowing of the spinal canal compressing the spinal cord or nerves → Link: /cervical-center/cervical-stenosis/
3. **Cervical Radiculopathy** — Pinched nerve in the neck causing pain radiating into the shoulder or arm → Link: /cervical-center/cervical-radiculopathy/
4. **Cervical Myelopathy** — Spinal cord compression in the neck causing coordination problems, gait difficulty → Link: /cervical-center/cervical-myelopathy/
5. **Cervical Degeneration** — Age-related wear causing pain, stiffness, and nerve compression → Link: /cervical-center/cervical-degeneration/

### Treatment Options

**Non-Surgical:**
- Physical therapy and rehabilitation
- Pain management (injections, medications)
- Cervical traction and bracing
- Activity modification and ergonomic guidance

**Surgical (when conservative treatment fails):**
- **ACDF (Anterior Cervical Discectomy and Fusion)** — Most common cervical surgery, removes disc and fuses vertebrae
- **Cervical Disc Replacement** — Preserves motion, alternative to fusion
- **Posterior Cervical Foraminotomy** — Minimally invasive nerve decompression
- **Cervical Laminectomy** — Relieves spinal cord compression

### Why Choose ISS for Cervical Surgery
- Two-surgeon care model — two specialists involved in every case
- 4,000+ surgeries performed
- Board-certified neurosurgeon (Dr. John M. Abrahams)
- Minimally invasive techniques prioritized
- Personalized treatment plans — not every patient needs surgery

---

## PAGE 2: Lumbar Spine / Back Surgery (`/lumbar-spine/`)

**Google Ads Ad Group:** Lumbar Spine / Back Surgery
**Target Keywords:** lumbar spine surgery, lumbar stenosis surgery, microdiscectomy, disc herniation surgery, spinal fusion surgery, back surgery near me

### Page Title
"Lumbar Spine & Back Surgery Specialists | Institute for Spine Surgery"

### Meta Description
"Expert lumbar spine surgery including microdiscectomy, spinal fusion, and stenosis treatment. Minimally invasive options. Board-certified neurosurgeons in West Harrison, NY and Stamford, CT."

### Hero
- **H1:** "Lumbar Spine & Back Surgery Specialists"
- **Subhead:** "Advanced surgical and non-surgical treatment for herniated discs, spinal stenosis, spondylolisthesis, and chronic lower back pain. Minimally invasive techniques. 4,000+ surgeries."
- **CTA:** "Schedule Your Lumbar Spine Consultation"

### Conditions Treated
1. **Lumbar Disc Herniation** — Disc pressing on nerve roots causing sciatica, leg pain → /common-diagnosis/lumbar-disc-herniation/
2. **Lumbar Stenosis** — Spinal canal narrowing causing leg pain with walking → /common-diagnosis/lumbar-stenosis/
3. **Lumbar Radiculopathy** — Pinched nerve causing shooting leg pain → /common-diagnosis/lumbar-radiculopathy/
4. **Spondylolisthesis** — Vertebra slipping forward causing instability and pain → /common-diagnosis/lumbar-spondylolisthesis/
5. **Lumbar Degeneration** — Age-related disc and joint deterioration → /common-diagnosis/lumbar-degeneration/
6. **Low Back Pain** — Comprehensive evaluation for chronic or acute pain → /common-diagnosis/low-back-pain/
7. **Lumbar Fracture** — Vertebral compression fractures → /common-diagnosis/lumbar-fracture/
8. **Neurogenic Claudication** — Leg pain/weakness from spinal narrowing → /common-diagnosis/neurogenic-claudication/
9. **Foot Drop** — Weakness lifting the foot, often from nerve compression → /common-diagnosis/foot-drop/

### Treatment Options

**Non-Surgical:**
- Physical therapy and core strengthening
- Epidural steroid injections
- Pain management protocols
- Activity modification

**Surgical:**
- **Microdiscectomy** — Minimally invasive removal of herniated disc material
- **Lumbar Spinal Fusion** — Stabilizes unstable segments
- **Lumbar Laminectomy** — Decompresses spinal canal
- **Minimally Invasive Spine Surgery (MISS)** — Smaller incisions, faster recovery
- **Spinal Cord Tumor Surgery** — Specialized tumor removal → /common-diagnosis/spinal-cord-tumor/

---

## PAGE 3: Meet Dr. Abrahams / Spine Specialist (`/meet-dr-abrahams/`)

**Google Ads Ad Group:** General Spine Surgeon / Neurosurgeon
**Target Keywords:** spine surgeon near me, neurosurgeon near me, spine specialist Westchester NY, best spine surgeon NY

### Page Title
"Dr. John M. Abrahams, MD — Neurosurgeon | Institute for Spine Surgery"

### Meta Description
"Dr. John M. Abrahams, board-certified neurosurgeon at the Institute for Spine Surgery. 4,000+ surgeries performed. Two-surgeon care model. West Harrison, NY and Stamford, CT."

### Hero
- **H1:** "Dr. John M. Abrahams, M.D."
- **Subhead:** "Board-certified neurosurgeon specializing in minimally invasive cervical and lumbar spine surgery. Founder, Institute for Spine Surgery."
- **CTA:** "Schedule Your Consultation with Dr. Abrahams"
- Photo of Dr. Abrahams (professional headshot)

### About Dr. Abrahams
- Board-certified neurosurgeon
- Founder of the Institute for Spine Surgery
- 4,000+ surgeries performed
- Pioneer of the two-surgeon care model
- Expertise in both cervical and lumbar spine conditions
- Specializes in minimally invasive techniques
- Also founder of Kronos Health and Cognifica Health

### The Two-Surgeon Care Model
- Every case involves two specialists collaborating
- Two sets of eyes on every diagnosis
- Two surgeons in every operating room when indicated
- Enhanced safety and outcomes
- This model differentiates ISS from virtually every other spine practice

### What We Treat
Summary cards linking to the cervical and lumbar landing pages:
- **Cervical Spine Conditions** → /cervical-spine/
- **Lumbar Spine Conditions** → /lumbar-spine/

### Patient Reviews
- Embed Google reviews or display selected testimonials
- Mention "Hundreds of Verified 5-Star Reviews"
- If patient review data is available (Dr_Abrahams_5_Star_Reviews___Dr._Abrahams.csv in project folder), pull representative quotes

### Locations
Both offices with full addresses, maps, and tap-to-call phone

---

## TECHNICAL REQUIREMENTS

### All Pages Must Have:
- Mobile-responsive (critical — most patients search for doctors on mobile)
- Fast load time (< 3 seconds)
- Phone number 914-948-3008 as tap-to-call `<a href="tel:9149483008">`
- Consultation form with Google Ads conversion tracking
- Schema.org Physician markup for Dr. Abrahams page
- Schema.org MedicalClinic markup
- Schema.org MedicalProcedure markup per condition
- Proper heading hierarchy
- Alt text on all images
- Internal links to existing condition pages, /providers/, /appointments/

### Google Ads Conversion Tracking
- Form submission = primary conversion
- Phone click = secondary conversion
- HIPAA compliance: Do NOT pass patient PII through conversion pixels

### URL Redirects
- Do NOT redirect old `/cervical-center/` or `/the-lumbar-center/` URLs — keep them for SEO
- New landing pages are ADDITIONS, not replacements
- Add canonical tags if content overlap concerns arise

### Ad Extension URL Updates (after pages are live)
Update all ISS sitelink Final URLs:
- "Meet Dr. Abrahams" → iss.health/meet-dr-abrahams/
- "Our Services" → iss.health/cervical-spine/ or /lumbar-spine/
- "Schedule Consultation" → iss.health/appointments/

---

## FILE REFERENCES

- `iss.health/` folder — Current site content, brand sheet, screenshots
- `ISS_Health_Master_Brand_Sheet.xlsx` — Brand colors and typography
- `iss.health/page-content/` — All existing page content as markdown files
- `GAds_Chunk_1_ISS_Campaign.md` — Full Google Ads campaign specs
- `Dr_Abrahams_5_Star_Reviews___Dr._Abrahams.csv` — Patient review data
- `Dr_Abrahams_Key_Themes_for_Ads.csv` — Key messaging themes
