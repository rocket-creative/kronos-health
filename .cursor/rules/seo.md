# SKILL: SEO
Triggers: SEO, metadata, schema, sitemap, robots, canonical, search, ranking

## Every Page Requires

```typescript
export const metadata: Metadata = {
  title: 'Primary Keyword | Brand',           // 50-60 chars
  description: 'Compelling description...',    // 150-160 chars
  alternates: { 
    canonical: 'https://domain.com/page'      // ABSOLUTE URL always
  },
  openGraph: {
    title: 'Title for Social',
    description: 'Description for social shares',
    url: 'https://domain.com/page',
    siteName: 'Brand Name',
    images: [{ url: 'https://domain.com/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Title for Twitter',
    description: 'Description for Twitter',
  },
}
```

## JSON-LD Schema (Required)

### Homepage: Organization + WebSite
```tsx
<script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Company Name",
  "url": "https://domain.com",
  "logo": "https://domain.com/logo.png"
})}
</script>
```

### Service Pages: Service Schema
```tsx
{
  "@type": "Service",
  "name": "Service Name",
  "provider": { "@type": "Organization", "name": "Company" }
}
```

### All Non-Homepage: BreadcrumbList
```tsx
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://domain.com" },
    { "@type": "ListItem", "position": 2, "name": "This Page" }
  ]
}
```

## Banned Meta Tags
Never use (ignored by search engines):
- `<meta name="keywords">` (ignored since 2009)
- `<meta name="revisit-after">`
- `<meta name="rating">`
- `<meta name="generator">`

## Technical Checklist

### URLs
- Lowercase only
- Hyphens not underscores (URLs only exception to hyphen rule)
- No trailing slashes (or consistent pattern)
- Max 3-4 folder levels

### Files Required
sitemap.xml - Submit to Search Console
robots.txt - Allow/disallow paths

### Performance (Core Web Vitals)
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1

## Content Structure

### Headings
- ONE H1 per page
- H2s for major sections
- Never skip levels (no H1 → H3)

### Images
- Descriptive filenames: knockout-mouse.jpg not IMG_1234.jpg
- Alt text describes image, can include keyword naturally
- Lazy load below fold

### Internal Linking
- Every page links to/from 2+ other pages
- Descriptive anchor text (not "click here")

## Pre-Launch Checklist
- [ ] Unique title per page (50-60 chars)
- [ ] Unique description per page (150-160 chars)
- [ ] Canonical URL (absolute) on every page
- [ ] OG and Twitter tags
- [ ] JSON-LD schema appropriate to page type
- [ ] BreadcrumbList on non-homepage
- [ ] sitemap.xml submitted
- [ ] robots.txt configured
- [ ] 404 page exists
- [ ] Google Search Console verified
