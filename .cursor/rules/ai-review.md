# SKILL: AI Code Review
Triggers: code review, debugging, loops, recursion, hallucination

## Why This Exists
AI makes systematic errors. Unlike random human bugs, AI bugs cluster in predictable patterns. Learn them.

## Context Window Management

At ~70% context or ~20 messages:
1. STOP and warn
2. Summarize completed work
3. List remaining tasks
4. Commit current progress
5. Start fresh session

Why: As context fills, older instructions get dropped. AI forgets, repeats mistakes, contradicts itself.

## Before Accepting ANY AI Code

### 1. Actually Run It
Don't trust "I've applied the changes."
```bash
npm run dev
npm run build
npm run test
```

### 2. Check for Infinite Loops
```typescript
// DANGER: Does condition ever become false?
while (condition) { }

// DANGER: Recursion without base case
function recurse(n) {
  return recurse(n - 1)  // Never stops
}

// DANGER: useEffect infinite loop
useEffect(() => {
  setData(transform(data))  // data changes → runs again
}, [data])
```

### 3. Check for Hallucinated APIs
AI invents methods that don't exist.
```typescript
// AI might generate:
array.findLast()      // ES2023 - check target
response.getBodyAsText()  // Made up

// VERIFY:
// - Method exists on that object
// - Your version supports it
```

### 4. Check Error Handling
AI generates happy path only.
```typescript
// BAD (AI default)
const data = await fetch(url).then(r => r.json())

// GOOD
try {
  const response = await fetch(url)
  if (!response.ok) throw new Error(`HTTP ${response.status}`)
  const data = await response.json()
} catch (error) {
  // Handle gracefully
}
```

### 5. Check Imports
AI forgets imports after edits.
```bash
npm run build  # Catches missing imports
```

### 6. Check Completeness
AI cuts off mid-function. Look for:
- Unclosed braces
- Functions without returns
- TODO comments not completed

## GSAP + CSS Conflicts

Common: GSAP fails because CSS has opacity: 0, visibility: hidden, or display: none.

### Rules
1. GSAP controls visibility, not CSS
```tsx
// CORRECT
gsap.set('.element', { opacity: 0 })
gsap.to('.element', { opacity: 1 })

// WRONG - CSS fights GSAP
// .element { opacity: 0; }
```

2. Remove from animated elements:
- `invisible` (visibility: hidden)
- `hidden` (display: none)
- `opacity-0`

3. Debug:
```typescript
const el = document.querySelector('.element')
console.log(getComputedStyle(el).opacity)
console.log(getComputedStyle(el).visibility)
console.log(getComputedStyle(el).display)
```

## AI Red Flags

| Red Flag | Action |
|----------|--------|
| "I've applied the changes" | Actually run it |
| Complex solution to simple problem | Find simpler way |
| Uses latest APIs | Check version support |
| No error handling | Add try/catch |
| Missing early returns | Add exit conditions |
| Nested loops | Can it be O(n)? |

## Common Mistakes by Category

### React
- useEffect wrong dependencies (infinite loop)
- Missing key props
- Stale closures in handlers

### TypeScript
- Using `any` to silence errors
- Wrong type assertions
- Missing null checks

### Next.js
- Client component where server works
- Missing 'use client'
- Wrong data fetching pattern

## Verification Workflow

```
AI generates code
    ↓
Read it (don't just accept)
    ↓
Check red flags above
    ↓
npm run build
    ↓
npm run dev + test
    ↓
Only then commit
```

## Checklist
- [ ] Actually ran the code
- [ ] No infinite loops
- [ ] Exit conditions exist
- [ ] Error handling present
- [ ] No hallucinated APIs
- [ ] All imports present
- [ ] Code is complete
- [ ] No GSAP/CSS conflicts
- [ ] Build passes
