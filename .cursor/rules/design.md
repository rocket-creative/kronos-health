# SKILL: Design System
Triggers: design, style, component, UI, layout, button, card, typography, color

## Philosophy
Restraint is sophistication. Every element earns its place. Subtraction over addition.

Every page = magazine layout: defined width content floating over muted background. Clear edges. Not edge-to-edge.

## Typography

### Weights (3 Only)
| Weight | Class | Usage |
|--------|-------|-------|
| 300 | font-light | Body, captions |
| 400 | font-normal | Labels, nav |
| 700 | font-bold | Headings, buttons |

FORBIDDEN: font-medium (500), font-semibold (600), font-extrabold (800), font-black (900)

### Rules
- Large confident headings, broken across lines for drama
- Clear hierarchy: H1 → H2 → H3 (one H1 per page)
- Body: ONE size, line-height 1.6-1.7
- Max line length: 65-75 characters
- tracking-tight on large headlines
- tracking-wide on small caps/labels

## Color Architecture

### Four Roles
| Role | Usage |
|------|-------|
| HERO | Full-bleed backgrounds (25-35% of page) |
| TEXT | Headlines, body ONLY (darkest color) |
| NEUTRAL | Breathing room, alternating sections |
| ACCENT | Small moments, hovers (5% max) |

### Section Pattern
HERO bg → Neutral bg → HERO bg → Neutral → Footer

### Rules
- One color dominates (hero gets 25-35%)
- Text color for reading only
- Neutrals create rhythm
- Accents are scalpels (5% max)
- One background per section
- 60-30-10 rule: 60% neutral, 30% secondary, 10% accent

### Forbidden
- All brand colors used equally
- Hero color only as small accents
- Multiple bold colors fighting
- Colored shadows (neutral only)
- Gradients mixing brand colors

## Layout

### Magazine Presentation
```tsx
<div className="min-h-screen bg-stone-100">
  <div className="max-w-5xl mx-auto bg-white min-h-screen shadow-sm">
    {/* Content */}
  </div>
</div>
```

### Editorial Principles
- Asymmetric compositions (not always centered)
- Text overlapping images
- Images at different scales (not equal grids)
- Large typography with line breaks
- Uneven grids (5/7, 4/6 splits)
- Color blocking (full sections solid color)
- Photography does the work

### Spacing
Vertical:
- Section gaps: 80-160px desktop, 40-80px mobile
- Element gaps: 24-48px related content
- Micro: 8-16px (buttons, forms)

Horizontal margins:
- Desktop: 80-160px (5-10% viewport)
- Tablet: 40-80px
- Mobile: 20-40px (never < 20px)

## Components

### Buttons
Square with arrow. No rounded corners (or minimal).
```tsx
<button className="inline-flex items-center gap-4 bg-black text-white px-6 py-3 text-sm uppercase tracking-wider font-normal group">
  <span>Shop now</span>
  <span className="transition-transform group-hover:translate-x-1">→</span>
</button>
```

### Cards (Product)
- No shadows, no borders
- Image IS the card
- Name in small caps below
- Price in lighter weight

### Style Elements
- Thin 1px outlines when white on white
- Decorative symbols: *, +, → (intentional placement)
- Vertical | pipes between inline items
- Horizontal 1px rules for sections

## Responsive (Mobile First)

### Breakpoints
```
sm: 393px   (iPhone 14 Pro)
md: 810px   (iPad)
lg: 1024px  (iPad Pro)
xl: 1440px  (13" laptop)
2xl: 1920px (15" laptop)
```

### Correct
```tsx
<div className="text-sm md:text-base lg:text-lg xl:text-xl">
```

### Wrong
```tsx
<div className="text-2xl md:text-sm">  // Never scale DOWN
```

## Anti-Patterns
- Multiple font weights visible
- Purple/blue gradients
- Generic stock photos
- Inter font everywhere
- Too many colors competing
- Icons everywhere
- Everything centered
- Equal 50/50 splits
- No overlapping elements

## Industry Defaults
| Industry | Approach |
|----------|----------|
| Biotech/Healthcare | Blues, whites, scientific credibility |
| Luxury/Hospitality | Black/white, gold, 60%+ whitespace |
| Financial | Navy, dark green, trust signals |
| Legal | Navy, burgundy, traditional serif |

## When in Doubt
1. Remove decoration
2. Increase whitespace
3. Simplify color
4. Enlarge typography
5. Let photography breathe
