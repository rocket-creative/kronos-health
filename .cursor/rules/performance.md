# SKILL: Performance
Triggers: performance, speed, Core Web Vitals, LCP, CLS, optimization, lazy load

## Core Web Vitals Targets

| Metric | Target | Measures |
|--------|--------|----------|
| LCP | < 2.5s | Loading |
| FID/INP | < 100ms | Interactivity |
| CLS | < 0.1 | Visual stability |

## Images

### Format
WebP (25-35% smaller than JPEG) or AVIF (50% smaller)
Next.js Image handles automatically.

### Loading
```tsx
// Above fold: priority
<Image src="/hero.jpg" priority />

// Below fold: lazy (default)
<Image src="/product.jpg" />
```

### Prevent CLS
Always set dimensions:
```tsx
<Image width={800} height={600} />

// Or aspect ratio container
<div className="relative aspect-video">
  <Image fill className="object-cover" />
</div>
```

### Responsive
```tsx
<Image
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

## Fonts

```tsx
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',  // Show fallback while loading
  preload: true,
})
```

## JavaScript

### Code Splitting
Next.js splits by route automatically.

Dynamic imports for heavy components:
```tsx
const HeavyChart = dynamic(() => import('@/components/Chart'), {
  loading: () => <Skeleton />,
  ssr: false,
})
```

### Avoid Large Bundles
```typescript
// BAD
import _ from 'lodash'

// GOOD
import debounce from 'lodash/debounce'

// BETTER: Native
function debounce(fn, ms) {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn(...args), ms)
  }
}
```

### Defer Third Party
```tsx
<Script src="https://analytics.com/script.js" strategy="lazyOnload" />
```

## Data Fetching

### Server Components (Default)
```tsx
async function Page() {
  const data = await getData()  // Runs on server
  return <Content data={data} />
}
```

### Streaming
```tsx
<Suspense fallback={<Skeleton />}>
  <SlowComponent />
</Suspense>
```

### Caching
```tsx
const data = await fetch(url, { 
  next: { revalidate: 3600 }  // 1 hour
})
```

## Algorithm Efficiency

### Avoid O(n²)
```typescript
// BAD
for (const a of arrayA) {
  for (const b of arrayB) {
    if (a.id === b.id) { }
  }
}

// GOOD: O(n) with Map
const bMap = new Map(arrayB.map(b => [b.id, b]))
for (const a of arrayA) {
  const b = bMap.get(a.id)
}
```

### Early Returns
```typescript
function find(array, target) {
  for (const item of array) {
    if (item === target) return item  // Exit immediately
  }
  return null
}
```

## Checklist

### Images
- [ ] WebP/AVIF format
- [ ] Lazy load below fold
- [ ] Priority on hero
- [ ] Dimensions set (no CLS)

### Fonts
- [ ] Preloaded
- [ ] display: swap
- [ ] Subsetted

### JavaScript
- [ ] Dynamic imports for heavy components
- [ ] No massive dependencies
- [ ] Third party deferred

### Targets
- [ ] LCP < 2.5s
- [ ] FID/INP < 100ms
- [ ] CLS < 0.1
