# SKILL: Accessibility (WCAG 2.1 AA)
Triggers: accessibility, a11y, WCAG, screen reader, keyboard, focus, aria

## Text Alternatives

All images need alt text:
```tsx
// Informative
<img alt="Sales increased 40% Q1 to Q4" />

// Decorative
<img alt="" />

// Icon button
<button aria-label="Close menu">
  <CloseIcon aria-hidden="true" />
</button>
```

## Color Contrast

- Normal text: 4.5:1 minimum
- Large text (18px+ bold or 24px+): 3:1
- UI components: 3:1

Check: webaim.org/resources/contrastchecker

## Keyboard Navigation

- [ ] All functionality works keyboard only
- [ ] No keyboard traps
- [ ] Focus order follows visual order

```tsx
// Custom interactive needs tabindex
<div 
  role="button" 
  tabindex="0"
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
>
```

NEVER use positive tabindex (tabindex="5")

## Focus States

```tsx
<button className="
  focus:ring-2 
  focus:ring-offset-2 
  focus:ring-blue-500
">
```

## Skip Link

First focusable element:
```tsx
<a 
  href="#main" 
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-white focus:p-4 focus:z-50"
>
  Skip to main content
</a>

<main id="main">
```

## Semantic HTML

```tsx
<header>   // Site header
<nav>      // Navigation
<main>     // Main content (one per page)
<article>  // Self-contained
<section>  // Thematic group
<aside>    // Sidebar
<footer>   // Footer

// Headings: don't skip levels
<h1> → <h2> → <h3>
```

## Forms

Every input needs a label:
```tsx
<label htmlFor="email">Email</label>
<input id="email" type="email" />

// Or aria-label
<input aria-label="Search" placeholder="Search..." />
```

Error messages:
```tsx
<input 
  aria-invalid={hasError}
  aria-describedby={hasError ? "email-error" : undefined}
/>
{hasError && <p id="email-error">Please enter valid email</p>}
```

## ARIA

Rule: No ARIA is better than bad ARIA.

If HTML element exists, use it:
```tsx
<button>Click</button>  // NOT <div role="button">
```

Common patterns:
```tsx
aria-expanded="true/false"  // Dropdowns
aria-selected="true/false"  // Tabs
aria-hidden="true"          // Decorative
aria-label="Description"    // No visible label
aria-describedby="id"       // Extra description
```

## Screen Reader Only

```tsx
<span className="sr-only">Context for screen readers</span>
```

## Testing

1. Tab through page (logical order?)
2. Screen reader test (VoiceOver, NVDA)
3. Zoom to 200% (still usable?)
4. axe DevTools browser extension
5. Lighthouse accessibility audit

## Checklist

- [ ] All images have alt text
- [ ] Color contrast passes
- [ ] Keyboard accessible
- [ ] Focus states visible
- [ ] Skip link present
- [ ] Page titles unique
- [ ] Form labels present
- [ ] Error messages clear
- [ ] Language declared (`<html lang="en">`)
- [ ] No keyboard traps
- [ ] Valid HTML
