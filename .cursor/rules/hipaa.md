# SKILL: HIPAA Compliance
Triggers: HIPAA, healthcare, PHI, patient data, medical, health information, BAA

**READ THIS ENTIRE FILE before any healthcare project. Non-negotiable.**

## When HIPAA Applies

Any app storing/processing/transmitting Protected Health Information (PHI):
- Patient names, addresses, dates (birth, admission, death)
- Phone, email, SSN, medical record numbers
- Photos, biometric data
- Anything that could identify a patient

## Infrastructure Requirements

### Hosting (MUST Have Signed BAA)

ALLOWED:
- AWS (with BAA)
- Google Cloud (with BAA)
- Azure (with BAA)

NOT ALLOWED:
- Vercel (no BAA)
- Netlify (no BAA)
- Standard shared hosting

### Database
- Encryption at rest (AES-256)
- Encryption in transit (TLS 1.2+)
- SSL connection required

### Authentication
REQUIRED:
- MFA mandatory
- 15 minute session timeout
- 12+ char passwords with complexity
- Account lockout after failed attempts
- Audit logging all auth events

Providers: Auth0 Healthcare, AWS Cognito, Okta Healthcare

```typescript
const sessionConfig = {
  maxAge: 15 * 60 * 1000,  // 15 minutes
  rolling: true,
  secure: true,
  httpOnly: true,
  sameSite: 'strict'
}
```

## Data Handling

### Encryption
At rest: AES-256 for all PHI
In transit: TLS 1.2 minimum

### Logging

DO log:
- All PHI access (who, when, what record ID)
- Auth attempts
- System changes

NEVER log:
- Actual PHI content
- Passwords or tokens
- Full patient records

```typescript
// CORRECT
logger.info('PHI_ACCESS', {
  userId: user.id,
  action: 'VIEW_RECORD',
  recordId: record.id,
  timestamp: new Date().toISOString()
})

// WRONG - never log actual data
logger.info('Patient data:', patientRecord)
```

### Data Minimization
- Only collect necessary PHI
- Only display necessary PHI
- Only store as long as required
- Role-based access (users see only what they need)

## Code Patterns

### Every PHI Endpoint Needs:
1. Authentication check
2. Authorization check (role/permission)
3. Audit logging BEFORE returning data
4. Input validation
5. Rate limiting

```typescript
export async function GET(req: Request) {
  const session = await getSession()
  if (!session) return unauthorized()
  
  if (!hasPermission(session.user, 'view:patients')) {
    auditLog('UNAUTHORIZED_ACCESS_ATTEMPT', session.user.id)
    return forbidden()
  }
  
  auditLog('PHI_ACCESS', { userId: session.user.id, action: 'LIST_PATIENTS' })
  
  return Response.json(await getPatients())
}
```

### Never Store in Browser
```typescript
// ALL FORBIDDEN
localStorage.setItem('patient', data)
sessionStorage.setItem('record', data)
document.cookie = `phi=${data}`
window.location = `/patient?ssn=123`
```

## Access Control (RBAC)

```typescript
const roles = {
  admin: ['manage:users', 'view:audit'],
  provider: ['view:patients', 'edit:patients'],
  staff: ['view:patients', 'view:appointments'],
  patient: ['view:own_records']
}
```

## Required Documentation

For audits:
1. Risk Assessment
2. Access Logs (6 year retention)
3. Signed BAA with all vendors
4. Incident Response Plan
5. Staff Training Records

## Breach Response

1. Contain immediately
2. Document what happened
3. Notify HHS within 60 days (if 500+ affected)
4. Notify affected individuals
5. Fix vulnerability
6. Update procedures

## Pre-Launch Checklist

### Infrastructure
- [ ] Hosting has signed BAA
- [ ] Database encryption enabled
- [ ] TLS 1.2+ everywhere
- [ ] Backup encryption

### Authentication
- [ ] MFA required
- [ ] 15 min timeout
- [ ] Account lockout
- [ ] Password complexity

### Code
- [ ] No PHI in logs
- [ ] No PHI in localStorage
- [ ] No PHI in URLs
- [ ] All endpoints have auth + audit
- [ ] RBAC implemented

### Documentation
- [ ] BAA signed with all vendors
- [ ] Risk assessment done
- [ ] Incident response plan ready
