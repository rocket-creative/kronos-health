# SKILL: Security
Triggers: security, validation, XSS, CSRF, injection, authentication, headers, secrets

## Input Validation (Always Zod)

```typescript
import { z } from 'zod'

const Schema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  phone: z.string().regex(/^\(\d{3}\) \d{3} \d{4}$/).optional(),
})

// Validate before using
const result = Schema.safeParse(data)
if (!result.success) return { error: result.error.flatten() }
// Now safe: result.data
```

**Rule: Whitelist, don't blacklist**

## Forbidden Patterns

NEVER do these:
```typescript
eval(userInput)                    // Remote code execution
new Function(userInput)            // Remote code execution
exec(`cmd ${userInput}`)           // Command injection
`SELECT * WHERE id = ${userId}`    // SQL injection
element.innerHTML = userContent    // XSS
dangerouslySetInnerHTML={{ __html: userContent }}  // XSS
```

Safe alternatives:
```typescript
// SQL: Parameterized queries
db.query('SELECT * WHERE id = $1', [userId])

// HTML: textContent or sanitize
element.textContent = userContent
DOMPurify.sanitize(content)

// React: Just use JSX (auto-escapes)
<div>{userContent}</div>
```

## Environment Variables

```bash
# .env.local (never commit)
DATABASE_URL=postgresql://...
API_SECRET_KEY=sk_live_...
```

Server-only (no prefix): `process.env.DATABASE_URL`
Client-safe (NEXT_PUBLIC_): `process.env.NEXT_PUBLIC_API_URL`

NEVER expose secrets in:
- Client bundle
- API responses
- next.config.js env object

## Security Headers (next.config.js)

```typescript
const securityHeaders = [
  { key: 'Content-Security-Policy', value: "default-src 'self'..." },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
]

module.exports = {
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
}
```

## Authentication

Session config:
```typescript
{
  httpOnly: true,      // No JS access
  secure: true,        // HTTPS only
  sameSite: 'lax',     // CSRF protection
  maxAge: 60 * 60 * 24 * 7,  // 7 days
}
```

Password requirements:
- Min 12 characters
- Uppercase + lowercase + number

Rate limiting on auth endpoints (5 req/min)

## CSRF Protection

Server Actions have built-in protection. For custom APIs:
```typescript
const origin = req.headers.get('origin')
if (!allowedOrigins.includes(origin)) {
  return Response.json({ error: 'Forbidden' }, { status: 403 })
}
```

## File Uploads

```typescript
// Validate type (don't trust extension)
const allowedTypes = ['image/jpeg', 'image/png', 'image/webp']
if (!allowedTypes.includes(file.type)) reject()

// Validate size
if (file.size > 5 * 1024 * 1024) reject()  // 5MB

// Safe filename
const safeFilename = `${crypto.randomUUID()}.${ext}`
```

## Checklist

### Code
- [ ] All input validated with Zod
- [ ] No eval/Function with user input
- [ ] No SQL concatenation
- [ ] No innerHTML with user content
- [ ] Secrets only in env vars
- [ ] No secrets in client bundle

### Headers
- [ ] CSP configured
- [ ] X-Frame-Options: DENY
- [ ] HSTS enabled

### Auth
- [ ] Sessions httpOnly, secure, sameSite
- [ ] Rate limiting on login
- [ ] Strong password requirements
