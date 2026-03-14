'use client'
import { useState, useRef } from 'react'

interface FieldErrors {
  name?: string
  phone?: string
  email?: string
}

const SYMPTOMS = [
  'Anxiety',
  'Adjustment difficulties',
  "Alzheimer's Disease",
  'Brain Fog',
  'Long Covid',
  'Menopause',
  "Movement Disorders (e.g., Parkinson's Disease)",
  'Seizures/Epilepsy',
  'Stroke',
  'Other',
]

export function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const formRef = useRef<HTMLFormElement>(null)

  function validateForm(form: HTMLFormElement): FieldErrors {
    const errors: FieldErrors = {}
    const name = form.querySelector<HTMLInputElement>('#name')
    const phone = form.querySelector<HTMLInputElement>('#phone')
    const email = form.querySelector<HTMLInputElement>('#email')

    if (!name?.value.trim()) {
      errors.name = 'Name is required'
    }
    if (!phone?.value.trim()) {
      errors.phone = 'Phone number is required'
    }
    if (!email?.value.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      errors.email = 'Please enter a valid email address'
    }

    return errors
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = e.currentTarget
    const errors = validateForm(form)
    setFieldErrors(errors)

    if (Object.keys(errors).length > 0) {
      setLoading(false)
      return
    }

    const data = Object.fromEntries(new FormData(form))
    const symptoms = Array.from(
      form.querySelectorAll<HTMLInputElement>('input[name="symptoms"]:checked'),
    ).map((el) => el.value)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, symptoms }),
      })

      if (!res.ok) throw new Error('Submit failed')

      if (typeof window !== 'undefined' && typeof (window as unknown as { gtag?: unknown }).gtag === 'function') {
        ;(window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'conversion', {
          send_to: `${process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID}/${process.env.NEXT_PUBLIC_GOOGLE_ADS_COGNIFICA_LABEL}`,
          value: 50.0,
          currency: 'USD',
        })
      }

      setSubmitted(true)
      form.reset()
    } catch {
      setError('Something went wrong. Please call us directly at (914) 948 3008.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-cognifica-submit/10 border border-cognifica-submit rounded p-8 text-center">
        <p className="text-xl font-bold text-cognifica-indigo mb-2">Request received</p>
        <p className="text-gray-600">
          Our team will contact you within one business day to schedule your appointment.
        </p>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-bold mb-1 text-gray-700">
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            aria-invalid={fieldErrors.name ? 'true' : undefined}
            aria-describedby={fieldErrors.name ? 'name-error' : undefined}
            className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cognifica-indigo ${
              fieldErrors.name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {fieldErrors.name && (
            <p id="name-error" role="alert" className="text-red-600 text-xs mt-1">
              {fieldErrors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-bold mb-1 text-gray-700">
            Phone <span aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            aria-invalid={fieldErrors.phone ? 'true' : undefined}
            aria-describedby={fieldErrors.phone ? 'phone-error' : undefined}
            className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cognifica-indigo ${
              fieldErrors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {fieldErrors.phone && (
            <p id="phone-error" role="alert" className="text-red-600 text-xs mt-1">
              {fieldErrors.phone}
            </p>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-bold mb-1 text-gray-700">
          Email <span aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          aria-invalid={fieldErrors.email ? 'true' : undefined}
          aria-describedby={fieldErrors.email ? 'email-error' : undefined}
          className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cognifica-indigo ${
            fieldErrors.email ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {fieldErrors.email && (
          <p id="email-error" role="alert" className="text-red-600 text-xs mt-1">
            {fieldErrors.email}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="primary_physician"
          className="block text-sm font-bold mb-1 text-gray-700"
        >
          Primary care physician
        </label>
        <input
          id="primary_physician"
          name="primary_physician"
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cognifica-indigo"
        />
      </div>
      <div>
        <label
          htmlFor="location_preference"
          className="block text-sm font-bold mb-1 text-gray-700"
        >
          Preferred location
        </label>
        <select
          id="location_preference"
          name="location_preference"
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cognifica-indigo"
        >
          <option value="">Select a location</option>
          <option value="west-harrison">West Harrison, NY</option>
          <option value="aquebogue">Aquebogue, NY</option>
          <option value="stamford">Stamford, CT</option>
        </select>
      </div>
      <fieldset>
        <legend className="block text-sm font-bold mb-2 text-gray-700">
          Symptoms (select all that apply)
        </legend>
        <div className="grid grid-cols-2 gap-2">
          {SYMPTOMS.map((symptom) => (
            <label
              key={symptom}
              className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer"
            >
              <input
                type="checkbox"
                name="symptoms"
                value={symptom}
                className="rounded border-gray-300 text-cognifica-indigo focus:ring-cognifica-indigo"
              />
              {symptom}
            </label>
          ))}
        </div>
      </fieldset>
      {error && (
        <p role="alert" className="text-red-600 text-sm">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-cognifica-submit text-white font-bold uppercase tracking-wider py-3 px-6 hover:opacity-90 transition-opacity disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-cognifica-indigo focus-visible:outline-none"
      >
        {loading ? 'Sending...' : 'Schedule my consultation →'}
      </button>
      <p className="text-xs text-gray-500 text-center">
        Or call directly:{' '}
        <a
          href="tel:9149483008"
          className="font-bold text-cognifica-indigo hover:underline"
        >
          (914) 948 3008
        </a>
      </p>
    </form>
  )
}
