# ISS Health — Design System & Asset Inventory
## Site Migration Reference Document

**Source:** https://iss.health
**Theme:** Divi v.4.27.6 (WordPress / Divi Builder)
**Extracted:** March 10, 2026

---

## Brand Colors

| Role | Color | Hex | RGB |
|------|-------|-----|-----|
| **Top Bar / Accent** | Hot Pink/Coral | `#F72E57` | rgb(247, 46, 87) |
| **CTA Buttons** | Deep Teal | `#05668D` | rgb(5, 102, 141) |
| **Hero Background** | Bright Cyan/Teal | *via background image* | — |
| **Body Text** | Dark Gray | `#333333` | rgb(51, 51, 51) |
| **Headings (dark)** | Near Black | `#111111` | rgb(17, 17, 17) |
| **Headings (hero)** | White | `#FFFFFF` | rgb(255, 255, 255) |
| **Section Alt BG** | Light Gray | `#F4F4F4` | rgb(244, 244, 244) |
| **Section BG** | White | `#FFFFFF` | rgb(255, 255, 255) |
| **Stats Numbers** | Deep Teal | `#05668D` | rgb(5, 102, 141) |

---

## Typography

| Element | Font Family | Size | Weight | Color | Notes |
|---------|-------------|------|--------|-------|-------|
| **H1** | Gotham Bold | 53px | 500 | White (#FFF) | Uppercase transform |
| **H2** | IBM Plex Sans Condensed | 50px | 500 | #111111 | Section titles |
| **H3** | IBM Plex Sans Condensed | 18px | 500 | #111111 | Card/service titles |
| **Body** | IBM Plex Sans | 21px | 500 | #333333 | Line-height: 36.75px |
| **Navigation** | Open Sans | — | — | — | Header menu items |
| **Stats Numbers** | IBM Plex Sans Condensed | Large | Bold | Teal | Counter/number style |

### Font Stack Summary
- **Primary Display:** Gotham Bold (headings, hero)
- **Secondary:** IBM Plex Sans Condensed (subheadings, section titles)
- **Body:** IBM Plex Sans (paragraph text)
- **UI/Nav:** Open Sans (navigation, smaller UI elements)
- **Icons:** Font Awesome 6 Brands, ETmodules (Divi icons)

---

## Button Styles

| Style | Background | Text Color | Border Radius | Padding |
|-------|-----------|------------|---------------|---------|
| **Primary CTA** | #05668D (Deep Teal) | #FFFFFF (White) | Rounded pill | Standard Divi |
| **Hover State** | — | — | — | Likely darker teal |

---

## Layout Patterns

### Header
- Fixed/sticky top navigation
- Pink/coral top utility bar with email + social icons (LinkedIn, Instagram)
- White main header with logo left, nav right
- Dropdown menus for Lumbar Center and Cervical Center

### Navigation Structure
- About Us (dropdown)
  - Providers
  - Locations
- Lumbar Center (dropdown)
  - Common diagnoses (foot drop, low back pain, lumbar degeneration, etc.)
  - Non-surgical options
  - Surgical options
- Cervical Center (dropdown)
  - Common diagnoses (cervical degeneration, herniation, myelopathy, etc.)
  - Non-surgical options
  - Surgical options
- Innovations
- In The News
- Appointments

### Homepage Sections (top to bottom)
1. **Hero:** Full-width cyan/teal background with 3D spine render, headline, subtext, CTA
2. **Stats Bar:** 4-column grid with animated counters (85%, 4000, 90%, 98%)
3. **Commitment to Excellence:** Text left + 2 images right
4. **Services Grid:** 2x2 grid with image cards (Minimally Invasive, Spinal Fusion, Physical Therapy, Pain Management)
5. **Accordion/FAQ:** Expandable sections for services
6. **CTA Section:** Dark overlay background image with centered white card CTA
7. **Footer:** Simple copyright line

### Section Backgrounds
- Alternating white (#FFFFFF) and light gray (#F4F4F4)
- Hero uses full-bleed background image
- Footer CTA uses dark overlay on team photo

---

## Complete Image Inventory (23 files)

### Logo & Branding
| Filename | Dimensions | Description |
|----------|-----------|-------------|
| instituteforspinesurgery.com_.png | 1848x608 | **Primary logo** (spine icon + text) |
| cropped-instituteforspinesurgery.com_.png | — | Cropped/favicon version |
| Endomedix2.png | — | Endomedix company logo |
| Capseus.png | — | Capseus company logo |
| Oncallx.png | — | Oncallx company logo |
| Neurobotix.png | — | Neurobotix company logo |
| endomedix.png | — | Endomedix alternate logo |

### Photography & Graphics
| Filename | Page | Description |
|----------|------|-------------|
| header.jpg | Homepage | Hero background — 3D spine render on cyan |
| xray.jpg | Homepage | X-ray/medical imaging |
| stethescope.jpg | Homepage | Stethoscope medical image |
| care.jpg | Homepage | Patient care photo |
| minimally-invasive-spine-surgery.jpg | Homepage | Service card — surgery image |
| spinal_fusion.jpg | Homepage | Service card — spinal fusion |
| physical_therapy.jpg | Homepage | Service card — PT/rehabilitation |
| pain_management.jpg | Homepage | Service card — woman with back pain |
| mapbackground.jpg | Locations | Map background for locations |
| Dr.JohnAbrahams.jpg | Providers | Dr. John Abrahams headshot |
| innovations.jpg | Innovations | Innovation page header |
| neurosurgeon.png | Inner pages | Neurosurgeon image |
| stepcount.jpg | Inner pages | Step count / recovery tracking |
| Untitled-design-5.png | Inner pages | Design asset |
| grand-opening.jpeg | News | Grand opening event photo |
| appointments.jpg | Appointments | Appointment page header |

---

## Technical Notes for Migration

- **Current Platform:** WordPress + Divi Theme v.4.27.6
- **Builder:** Divi Builder (shortcode-based)
- **Contact Email:** info@nybrainspine.com
- **Social:** LinkedIn + Instagram
- **Copyright:** 2025 The Institute For Spine Surgery
- **Images hosted at:** iss.health/wp-content/uploads/
- **Font loading:** Google Fonts (IBM Plex Sans, IBM Plex Sans Condensed, Open Sans) + custom (Gotham Bold)

### Key Pages to Migrate
1. Homepage
2. Providers
3. Locations
4. Lumbar Center (+ 9 diagnosis subpages + surgical/non-surgical)
5. Cervical Center (+ 5 diagnosis subpages + surgical/non-surgical)
6. Innovations
7. In The News
8. Appointments

---

## Downloads

Three zip files were downloaded to your browser:
1. **ISS_Health_Images.zip** (1.7MB) — Homepage images
2. **ISS_Health_Inner_Pages_Images.zip** (8.5MB) — Inner page images + logos
3. **ISS_Health_ALL_Assets.zip** (10.3MB) — Complete set of all 23 images
