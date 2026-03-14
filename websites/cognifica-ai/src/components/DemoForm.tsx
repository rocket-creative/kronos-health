'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

interface FieldErrors {
  name?: string
  email?: string
  organization?: string
}

export function DemoForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})

  function validateForm(data: Record<string, FormDataEntryValue>): FieldErrors {
    const errors: FieldErrors = {}
    const name = data.name as string
    const email = data.email as string
    const organization = data.organization as string

    if (!name?.trim()) {
      errors.name = 'Name is required'
    }
    if (!email?.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email address'
    }
    if (!organization?.trim()) {
      errors.organization = 'Organization is required'
    }

    return errors
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const data = Object.fromEntries(new FormData(e.currentTarget))
    const errors = validateForm(data)
    setFieldErrors(errors)

    if (Object.keys(errors).length > 0) {
      setLoading(false)
      return
    }

    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      if (typeof window !== 'undefined') {
        const win = window as unknown as { gtag?: (...args: unknown[]) => void }
        if (typeof win.gtag === 'function') {
          win.gtag('event', 'conversion', {
            send_to: `AW-XXXXXXXXXX/${process.env.NEXT_PUBLIC_GOOGLE_ADS_COGNIFICAAI_LABEL}`,
            value: 100.0,
            currency: 'USD',
          })
        }
      }
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Email us directly at info@kronoshealth.co')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div
        className="max-w-lg mx-auto p-6 sm:p-8 text-center bg-sage/10 border border-sage/20"
        role="status"
        aria-live="polite"
      >
        <p className="font-serif text-xl sm:text-2xl mb-2 text-cream">Demo request received.</p>
        <p className="text-sm text-cream/60 font-light">
          Our team will reach out within one business day.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-lg mx-auto relative z-10"
      noValidate
      aria-label="Demo request form"
    >
      <div>
        <label
          htmlFor="demo-name"
          className="block text-xs uppercase tracking-widest text-cream/60 mb-2"
        >
          Name <span aria-hidden="true">*</span>
        </label>
        <input
          id="demo-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Jane Smith"
          aria-invalid={fieldErrors.name ? 'true' : undefined}
          aria-describedby={fieldErrors.name ? 'demo-name-error' : undefined}
          className={`w-full px-4 py-3 bg-white/5 border text-cream placeholder:text-cream/30 text-sm focus:outline-none focus:border-sage/50 focus:ring-2 focus:ring-sage/30 transition-colors ${
            fieldErrors.name ? 'border-red-500' : 'border-white/10'
          }`}
        />
        {fieldErrors.name && (
          <p id="demo-name-error" role="alert" className="text-red-400 text-xs mt-1">
            {fieldErrors.name}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="demo-email"
          className="block text-xs uppercase tracking-widest text-cream/60 mb-2"
        >
          Work email <span aria-hidden="true">*</span>
        </label>
        <input
          id="demo-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="jane@company.com"
          aria-invalid={fieldErrors.email ? 'true' : undefined}
          aria-describedby={fieldErrors.email ? 'demo-email-error' : undefined}
          className={`w-full px-4 py-3 bg-white/5 border text-cream placeholder:text-cream/30 text-sm focus:outline-none focus:border-sage/50 focus:ring-2 focus:ring-sage/30 transition-colors ${
            fieldErrors.email ? 'border-red-500' : 'border-white/10'
          }`}
        />
        {fieldErrors.email && (
          <p id="demo-email-error" role="alert" className="text-red-400 text-xs mt-1">
            {fieldErrors.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="demo-phone"
          className="block text-xs uppercase tracking-widest text-cream/60 mb-2"
        >
          Phone
        </label>
        <input
          id="demo-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="(914) 555 0100"
          className="w-full px-4 py-3 bg-white/5 border border-white/10 text-cream placeholder:text-cream/30 text-sm focus:outline-none focus:border-sage/50 focus:ring-2 focus:ring-sage/30 transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="demo-org"
          className="block text-xs uppercase tracking-widest text-cream/60 mb-2"
        >
          Organization <span aria-hidden="true">*</span>
        </label>
        <input
          id="demo-org"
          name="organization"
          type="text"
          required
          autoComplete="organization"
          placeholder="Acme Corporation"
          aria-invalid={fieldErrors.organization ? 'true' : undefined}
          aria-describedby={fieldErrors.organization ? 'demo-org-error' : undefined}
          className={`w-full px-4 py-3 bg-white/5 border text-cream placeholder:text-cream/30 text-sm focus:outline-none focus:border-sage/50 focus:ring-2 focus:ring-sage/30 transition-colors ${
            fieldErrors.organization ? 'border-red-500' : 'border-white/10'
          }`}
        />
        {fieldErrors.organization && (
          <p id="demo-org-error" role="alert" className="text-red-400 text-xs mt-1">
            {fieldErrors.organization}
          </p>
        )}
      </div>

      {error && (
        <p role="alert" className="text-red-400 text-xs">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-3 bg-clay text-cream py-4 px-8 uppercase tracking-widest text-xs font-light hover:bg-rust hover:gap-5 transition-all disabled:opacity-50 mt-2 focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 focus:ring-offset-charcoal"
      >
        {loading ? 'Sending...' : 'Request Demo'}
        {!loading && <ArrowRight className="w-4 h-4" aria-hidden="true" />}
      </button>
    </form>
  )
}
