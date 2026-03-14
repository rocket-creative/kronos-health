# Kronos Health Animation Plan
## GSAP Implementation Guide

This document outlines the animation strategy for the Kronos Health website using GSAP (GreenSock Animation Platform) with ScrollTrigger.

---

## Dependencies to Install

```bash
npm install gsap @gsap/react
```

---

## Animation Philosophy

Following the editorial/magazine aesthetic:
- **Subtle, purposeful motion** — animations enhance content, never distract
- **Staggered reveals** — content appears in sequence, guiding the eye
- **Smooth easing** — use `power2.out` or `power3.out` for natural movement
- **Performance first** — use `will-change`, `transform`, and `opacity` only

---

## 1. Page Load Animations

### Hero Section (All Pages)

```tsx
// components/animations/HeroAnimation.tsx
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function useHeroAnimation() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Set initial states
      gsap.set("[data-hero-eyebrow]", { opacity: 0, y: 20 });
      gsap.set("[data-hero-title]", { opacity: 0, y: 40 });
      gsap.set("[data-hero-subtitle]", { opacity: 0, y: 30 });
      gsap.set("[data-hero-description]", { opacity: 0, y: 20 });
      gsap.set("[data-hero-cta]", { opacity: 0, y: 20 });
      gsap.set("[data-hero-image]", { opacity: 0, scale: 1.05 });

      // Animate in sequence
      tl.to("[data-hero-image]", { opacity: 1, scale: 1, duration: 1.2 })
        .to("[data-hero-eyebrow]", { opacity: 1, y: 0, duration: 0.6 }, "-=0.8")
        .to("[data-hero-title]", { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
        .to("[data-hero-subtitle]", { opacity: 1, y: 0, duration: 0.6 }, "-=0.5")
        .to("[data-hero-description]", { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .to("[data-hero-cta]", { opacity: 1, y: 0, duration: 0.5 }, "-=0.3");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return containerRef;
}
```

### Usage in Pages

```tsx
// Example: app/page.tsx
"use client";

import { useHeroAnimation } from "@/components/animations/HeroAnimation";

export default function HomePage() {
  const heroRef = useHeroAnimation();

  return (
    <section ref={heroRef}>
      <div data-hero-image>...</div>
      <p data-hero-eyebrow>...</p>
      <h1 data-hero-title>...</h1>
      <p data-hero-description>...</p>
      <a data-hero-cta>...</a>
    </section>
  );
}
```

---

## 2. Scroll Animations

### ScrollTrigger Setup

```tsx
// components/animations/ScrollAnimations.tsx
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function useScrollFadeIn() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    const elements = ref.current?.querySelectorAll("[data-scroll-fade]");
    
    elements?.forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return ref;
}
```

### Section Reveals

```tsx
// Staggered card reveals
export function useStaggeredCards() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    const cards = ref.current?.querySelectorAll("[data-stagger-card]");
    
    if (cards?.length) {
      gsap.fromTo(cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 75%",
          },
        }
      );
    }
  }, []);

  return ref;
}
```

### Stats Counter Animation

```tsx
// Animate numbers counting up
export function useCounterAnimation() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    const counters = ref.current?.querySelectorAll("[data-counter]");
    
    counters?.forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-counter-target") || "0");
      const suffix = counter.getAttribute("data-counter-suffix") || "";
      const prefix = counter.getAttribute("data-counter-prefix") || "";
      
      gsap.fromTo(counter,
        { innerText: 0 },
        {
          innerText: target,
          duration: 2,
          ease: "power2.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: counter,
            start: "top 80%",
          },
          onUpdate: function() {
            counter.textContent = prefix + Math.round(this.targets()[0].innerText) + suffix;
          },
        }
      );
    });
  }, []);

  return ref;
}
```

### Parallax Effects

```tsx
// Subtle parallax on images
export function useParallax() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    const images = ref.current?.querySelectorAll("[data-parallax]");
    
    images?.forEach((img) => {
      const speed = parseFloat(img.getAttribute("data-parallax-speed") || "0.3");
      
      gsap.to(img, {
        yPercent: -20 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, []);

  return ref;
}
```

---

## 3. Hover Animations

### Button Hover

```tsx
// components/animations/ButtonAnimation.tsx
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function AnimatedButton({ children, href, className }: Props) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    const button = buttonRef.current;
    const arrow = arrowRef.current;
    
    if (!button || !arrow) return;

    const enterTl = gsap.timeline({ paused: true });
    enterTl.to(arrow, { x: 8, duration: 0.3, ease: "power2.out" });

    button.addEventListener("mouseenter", () => enterTl.play());
    button.addEventListener("mouseleave", () => enterTl.reverse());

    return () => {
      button.removeEventListener("mouseenter", () => enterTl.play());
      button.removeEventListener("mouseleave", () => enterTl.reverse());
    };
  }, []);

  return (
    <a ref={buttonRef} href={href} className={className}>
      {children}
      <ArrowRight ref={arrowRef} />
    </a>
  );
}
```

### Card Hover

```tsx
// Lift effect on cards
export function AnimatedCard({ children, className }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const card = cardRef.current;
    if (!card) return;

    const enterTl = gsap.timeline({ paused: true });
    enterTl.to(card, {
      y: -8,
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      duration: 0.3,
      ease: "power2.out",
    });

    card.addEventListener("mouseenter", () => enterTl.play());
    card.addEventListener("mouseleave", () => enterTl.reverse());
  }, []);

  return <div ref={cardRef} className={className}>{children}</div>;
}
```

### Image Hover (Zoom)

```tsx
// Subtle zoom on image hover
export function AnimatedImage({ src, alt, className }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    const enterTl = gsap.timeline({ paused: true });
    enterTl.to(image, {
      scale: 1.05,
      duration: 0.6,
      ease: "power2.out",
    });

    container.addEventListener("mouseenter", () => enterTl.play());
    container.addEventListener("mouseleave", () => enterTl.reverse());
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden">
      <img ref={imageRef} src={src} alt={alt} className={className} />
    </div>
  );
}
```

---

## 4. Navigation Animations

### Mobile Menu

```tsx
// Slide-in mobile menu
export function useMobileMenuAnimation(isOpen: boolean) {
  const menuRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const menu = menuRef.current;
    if (!menu) return;

    if (isOpen) {
      gsap.fromTo(menu,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
      
      const links = menu.querySelectorAll("a");
      gsap.fromTo(links,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, ease: "power2.out", delay: 0.1 }
      );
    }
  }, [isOpen]);

  return menuRef;
}
```

---

## 5. Page Transitions

### Smooth Page Transitions (with Next.js App Router)

```tsx
// components/PageTransition.tsx
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useRef, useEffect } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Fade in on route change
    gsap.fromTo(containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "power2.out" }
    );
  }, [pathname]);

  return <div ref={containerRef}>{children}</div>;
}
```

---

## 6. Specific Component Animations

### Stats Section

```tsx
// Homepage stats with counting animation
const statsAnimation = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.2,
  },
  trigger: {
    start: "top 80%",
  },
};
```

### Service Cards Grid

```tsx
// Staggered reveal for service cards
const cardGridAnimation = {
  initial: { opacity: 0, y: 60, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.6,
    stagger: 0.15,
    ease: "power2.out",
  },
};
```

### Testimonial/FAQ Accordion

```tsx
// Expand/collapse animation
export function useAccordionAnimation(isOpen: boolean, contentRef: RefObject<HTMLDivElement>) {
  useGSAP(() => {
    const content = contentRef.current;
    if (!content) return;

    if (isOpen) {
      gsap.fromTo(content,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    } else {
      gsap.to(content,
        { height: 0, opacity: 0, duration: 0.3, ease: "power2.in" }
      );
    }
  }, [isOpen]);
}
```

---

## 7. Implementation Checklist

### Phase 1: Setup
- [ ] Install GSAP and @gsap/react
- [ ] Create `components/animations/` folder
- [ ] Set up base animation hooks

### Phase 2: Page Load
- [ ] Hero section animations (all pages)
- [ ] Logo reveal
- [ ] Navigation fade-in

### Phase 3: Scroll Animations
- [ ] Section fade-in reveals
- [ ] Stats counter animations
- [ ] Card stagger reveals
- [ ] Parallax on hero images

### Phase 4: Hover Effects
- [ ] Button arrow animations
- [ ] Card lift effects
- [ ] Image zoom effects
- [ ] Link underline animations

### Phase 5: Polish
- [ ] Page transitions
- [ ] Mobile menu animations
- [ ] Loading states
- [ ] Reduced motion support

---

## 8. Accessibility: Reduced Motion

Always respect user preferences:

```tsx
// hooks/useReducedMotion.ts
import { useEffect, useState } from "react";

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return prefersReducedMotion;
}

// Usage in animation hooks
export function useHeroAnimation() {
  const prefersReducedMotion = useReducedMotion();

  useGSAP(() => {
    if (prefersReducedMotion) {
      // Skip animations, just show content
      gsap.set("[data-hero-title]", { opacity: 1, y: 0 });
      return;
    }
    // Normal animation code...
  }, [prefersReducedMotion]);
}
```

---

## 9. Performance Guidelines

1. **Use `will-change` sparingly** — only on elements about to animate
2. **Animate `transform` and `opacity` only** — avoid layout-triggering properties
3. **Use `gsap.set()` for initial states** — not CSS (prevents FOUC)
4. **Kill animations on unmount** — use `ctx.revert()` in cleanup
5. **Lazy load ScrollTrigger** — only import when needed
6. **Test on low-end devices** — ensure 60fps on mobile

---

## 10. File Structure

```
src/
├── components/
│   └── animations/
│       ├── index.ts           # Export all hooks
│       ├── HeroAnimation.tsx  # Page load animations
│       ├── ScrollAnimations.tsx # ScrollTrigger hooks
│       ├── HoverAnimations.tsx  # Hover effect components
│       ├── ButtonAnimation.tsx  # Animated button
│       ├── CardAnimation.tsx    # Animated card
│       └── PageTransition.tsx   # Route transitions
├── hooks/
│   └── useReducedMotion.ts    # Accessibility hook
```

---

## Next Steps

1. Install dependencies: `npm install gsap @gsap/react`
2. Create the animation components folder
3. Implement hero animations first (highest impact)
4. Add scroll animations section by section
5. Polish with hover effects
6. Test accessibility with reduced motion
