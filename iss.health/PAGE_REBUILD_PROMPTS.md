# ISS Health — Page Rebuild Prompts

Use these prompts with any AI website builder, page builder, or developer to recreate each page from iss.health with the same layout, effects, and content structure.

---

## Global Design System (Apply to ALL pages)

```
BRAND SYSTEM:
- Primary Accent: #F72E57 (hot pink/coral) — used for top utility bar
- Primary CTA: #05668D (deep teal) — buttons, links, stat numbers
- Body text: #333333, Headings dark: #111111, Headings on color: #FFFFFF
- Section backgrounds alternate: #FFFFFF and #F4F4F4
- Fonts: Gotham Bold (H1 hero), IBM Plex Sans Condensed (H2/H3), IBM Plex Sans (body), Open Sans (nav)

HEADER (persistent across all pages):
- Top utility bar: hot pink (#F72E57) background, white text
  - Right side: email icon + "info@nybrainspine.com" | LinkedIn icon | Instagram icon
- Main header: white background, sticky on scroll
  - Left: Logo image (spine icon + "THE INSTITUTE FOR SPINE SURGERY" wordmark)
  - Right: Navigation — About Us (dropdown) | Lumbar Center (dropdown) | Cervical Center (dropdown) | Innovations | In The News | Appointments

FOOTER (persistent across all pages):
- Simple: "© 2025 The Institute For Spine Surgery" centered, dark text on white
- Back-to-top arrow button, bottom right
```

---

## HOMEPAGE (/)

```
Rebuild the homepage for The Institute for Spine Surgery (iss.health) with this exact layout:

SECTION 1 — HERO (full-width)
- Background: header.jpg (3D spine render on bright cyan/teal background)
- Layout: 2-column (50/50)
  - Left column:
    - Small caps subtitle (H4): "LEADERS IN THE TREATMENT OF DISORDERS OF THE SPINE" — teal text
    - Large headline (H1): "THE INSTITUTE FOR SPINE SURGERY" — white, Gotham Bold, uppercase, 53px
    - Body text (white): "Our world-renowned doctors are dedicated to the highest quality treatment and outcomes for all patients."
    - CTA button: "Learn More" — deep teal (#05668D) background, white text, rounded pill shape
  - Right column: empty (spine image comes from background)

SECTION 2 — STATS BAR (light gray #F4F4F4 background)
- Full-width heading: "Our Proven Success" (H2, centered, dark)
- Subtext: "With a 95% patient satisfaction rate, our treatments are among the most effective in the region."
- 4-column grid with animated number counters:
  - 85 / "85% of Patients Return to Normal Activity Within 3 Months"
  - 4000 / "Over 4000 Successful Surgeries Performed"
  - 90 / "90% Reduction in Postoperative Complications"
  - 98 / "98% of Patients Recommend Our Services"
- Counter numbers: large, deep teal (#05668D), IBM Plex Sans Condensed
- Stats should animate/count up when scrolled into view

SECTION 3 — COMMITMENT TO EXCELLENCE (white background)
- Full-width heading: "Our Commitment to Excellence" (H2, centered)
- Layout: 2-column
  - Left: paragraph text about cutting-edge research and innovative treatment methods
  - Right: 2 images side by side (stethescope.jpg, xray.jpg) with rounded corners

SECTION 4 — SERVICES GRID (white background)
- Full-width heading: "Our Cutting-Edge Approach" (H2, centered)
- 2x2 grid of service cards, each containing:
  - Full-width image at top
  - Service title (H3) below
  - Short description paragraph
  - "Learn More" teal button
- Cards:
  1. minimally-invasive-spine-surgery.jpg / "Minimally Invasive Spine Surgery"
  2. spinal_fusion.jpg / "Spinal Fusion"
  3. physical_therapy.jpg / "Physical Therapy and Rehabilitation"
  4. pain_management.jpg / "Pain Management"

SECTION 5 — SERVICES ACCORDION (white background)
- Expandable accordion with service names:
  - Physical Therapy | Minimally Invasive Surgery | Spine Surgery | Spinal Fusion | Disc Replacement | Acupuncture
- Blue/teal header bars, white text, + icon to expand

SECTION 6 — BOTTOM CTA (dark overlay on team meeting background photo)
- Layout: centered white card overlaid on dark background image
  - Heading: "Discover Advanced Spine Care Solutions"
  - Text: "Take the first step towards a pain-free life..."
  - CTA button: "Schedule Your Consultation" — teal background, white text

EFFECTS:
- Number counters animate on scroll (count from 0 to final value)
- Sticky header that shrinks on scroll
- Smooth scroll to sections
- Hover effects on service cards and buttons
```

---

## PROVIDERS PAGE (/providers/)

```
Rebuild the Providers page for iss.health:

SECTION 1 — PAGE HEADER
- Background: neurosurgeon.png or solid teal
- H1: "Our Providers" — white, centered

SECTION 2 — DOCTOR PROFILE (white background)
- Layout: 2-column
  - Left: Dr.JohnAbrahams.jpg headshot (large, possibly with soft shadow)
  - Right: Doctor bio
    - Name/Title heading
    - Credentials and background text
    - Specialties listed
    - Education and training
- Professional, clean medical layout

EFFECTS:
- Image may have subtle parallax or fade-in on scroll
```

---

## CERVICAL CENTER (/cervical-center/)

```
Rebuild the Cervical Center landing page:

SECTION 1 — PAGE HEADER
- H1: "The Cervical Center" — dark, centered
- H2: "About The Cervical Center"
- Overview paragraph about the multidisciplinary team approach

SECTION 2 — FAQ ACCORDION
- Large accordion component with medical FAQ questions:
  - "I have neck pain. Do I need an MRI?"
  - "Should I Try Physical Therapy?"
  - "Should I Try an Epidural Injection?"
  - "Can Acupuncture Help Me?"
  - "Who Needs Surgery After Non-Surgical Care?"
  - "Do I need to wear a collar after cervical spine surgery?"
  - "Are you taking bone from my hip if I have a cervical fusion?"
  - "Do I need to stay in bed after cervical surgery?"
  - "Will I keep having more surgery after my first one?"
  - "Is Cervical Disk Replacement better than Cervical Fusion?"
- Each expands to show detailed medical content
- Blue/teal header bars matching brand

SECTION 3 — RESEARCH HIGHLIGHT
- Content about the 10-year cervical disc replacement vs fusion study
- Published in Journal of Neurosurgery - Spine (April 2023)

EFFECTS:
- Smooth accordion open/close animation
- Only one accordion item open at a time
```

---

## CONDITION PAGES (Template — applies to all /common-diagnosis/ and /cervical-center/ subpages)

```
Rebuild condition pages using this template:

These pages follow a consistent medical information layout:

SECTION 1 — PAGE HEADER
- H1: Condition name (e.g., "Cervical Stenosis", "Lumbar Disc Herniation")
- Clean, authoritative medical heading

SECTION 2 — MAIN CONTENT (single column, max-width ~800px centered)
- Definition/Overview: "What is [Condition]?" with clear medical explanation
- Causes section with bullet points or paragraphs
- Symptoms section
- Diagnosis section (imaging, physical exam)
- Treatment Options:
  - Conservative/Non-surgical treatments
  - Surgical interventions when applicable
- Recovery/Prognosis information

STYLE NOTES:
- Long-form medical content, professional tone
- Body text: IBM Plex Sans, 21px, #333
- Section headings: IBM Plex Sans Condensed, H2/H3
- May include relevant medical images
- Clean whitespace, easy readability for patients

There are approximately 15 condition pages using this template — see page-content/ folder for full text.
```

---

## INNOVATIONS PAGE (/innovations/)

```
Rebuild the Innovations page:

SECTION 1 — HERO
- Background: innovations.jpg
- H1: "Innovation" — white, centered on image

SECTION 2 — COMPANY SHOWCASE (white/light background)
- Grid or cards showing Dr. Abrahams' technology companies:
  - Endomedix (Endomedix2.png logo) — with description
  - Capseus (Capseus.png logo) — with description
  - Oncallx (Oncallx.png logo) — with description
  - Neurobotix (Neurobotix.png logo) — with description
- Each company card has: logo image + name + description paragraph
- stepcount.jpg used as supplementary image

EFFECTS:
- Cards may have hover lift/shadow effect
- Logos displayed at consistent size
```

---

## LOCATIONS PAGE (/locations/)

```
Rebuild the Locations page:

SECTION 1 — MAP
- Background: mapbackground.jpg
- Embedded Google Map or map graphic
- Office location pin

SECTION 2 — CONTACT INFO
- Main Office:
  - New York Brain & Spine Surgery, P.C.
  - 244 Westchester Avenue, Suite 209
  - West Harrison, NY 10604
  - Phone: 914-948-3008
  - Fax: 914-992-7401
```

---

## APPOINTMENTS PAGE (/appointments/)

```
Rebuild the Appointments page:

SECTION 1 — HEADER
- Background: appointments.jpg
- H1: "Make An Appointment"

SECTION 2 — CONTACT FORM (white background)
- H2: "Please complete the form to connect with us"
- Note: "You can also start a consultation request by clicking the contact button or calling 914-948-3008"
- Form fields:
  - Email Address (text input)
  - Phone Number (text input)
  - Diagnosis (text input or dropdown)
  - CAPTCHA math problem (e.g., "8 + 4 = ")
  - Submit button (teal)

SECTION 3 — LOCATION INFO
- Same office address block as locations page
```

---

## IN THE NEWS PAGE (/in-the-news/)

```
Rebuild the News page:

SECTION 1 — HEADER
- H1: "In The News"

SECTION 2 — NEWS ITEMS
- grand-opening.jpeg featured
- News article cards or list
- Clean blog/news layout with dates and excerpts
```

---

## TREATMENT OPTION PAGES (Template — surgical-options/ and non-surgical-options/)

```
These pages follow a treatment-focused template:

SECTION 1 — PAGE HEADER
- H1: "[Lumbar/Cervical] [Surgical/Non-Surgical] Options"

SECTION 2 — TREATMENT CONTENT
- Organized by treatment type, each with:
  - Treatment name (H2/H3)
  - Description of the procedure/approach
  - When it's recommended
  - Expected outcomes
  - Recovery information

STYLE: Same body text and heading styles as condition pages.
Long-form medical content. See page-content/ folder for full text.
```

---

## NOTES FOR DEVELOPER

1. **Original platform:** WordPress + Divi Builder v4.27.6
2. **Key Divi effects to replicate:**
   - Animated number counters (scroll-triggered)
   - Accordion expand/collapse
   - Sticky/shrinking header
   - Background parallax on some sections
   - Button hover state transitions
   - Smooth scroll navigation
3. **All page content is in:** `iss.health/page-content/` (27 markdown files)
4. **All images are in:** `iss.health/images/` (unzip ISS_Health_ALL_Assets.zip from browser downloads)
5. **Brand reference:** `ISS_Health_Master_Brand_Sheet.xlsx` — 5 tabs covering colors, type, pages, images, architecture
