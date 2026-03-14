'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type ConsentPreferences = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

const CONSENT_KEY = 'cookie-consent'

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (!stored) {
      setShowBanner(true)
    }
  }, [])

  const saveConsent = (prefs: ConsentPreferences) => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(prefs))
    setShowBanner(false)
    setShowPreferences(false)
  }

  const acceptAll = () => {
    saveConsent({ necessary: true, analytics: true, marketing: true })
  }

  const acceptNecessary = () => {
    saveConsent({ necessary: true, analytics: false, marketing: false })
  }

  const savePreferences = () => {
    saveConsent(preferences)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-ink border-t border-cream/10">
      <div className="max-w-4xl mx-auto">
        {!showPreferences ? (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <p className="font-body text-sm text-cream/60 leading-relaxed">
                We use cookies to improve your experience and analyze site traffic. By clicking
                "Accept All," you consent to our use of cookies.{' '}
                <Link href="/privacy" className="text-sage hover:text-sage-dk underline transition-colors">
                  Privacy Policy
                </Link>
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setShowPreferences(true)}
                className="text-sm text-cream/40 hover:text-cream underline transition-colors"
              >
                Manage Preferences
              </button>
              <button
                onClick={acceptNecessary}
                className="px-4 py-2 text-sm border border-cream/20 text-cream/70 hover:bg-cream/5 transition-colors"
              >
                Necessary Only
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 text-sm bg-sage text-cream hover:bg-sage-dk transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-lg font-bold text-cream">Cookie Preferences</h3>
              <button
                onClick={() => setShowPreferences(false)}
                className="text-sm text-cream/40 hover:text-cream"
                aria-label="Close preferences"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4 mb-6">
              <label className="flex items-start gap-3 cursor-not-allowed">
                <input
                  type="checkbox"
                  checked={preferences.necessary}
                  disabled
                  className="mt-1 accent-sage"
                />
                <div>
                  <span className="font-body font-bold text-sm text-cream">Necessary Cookies</span>
                  <span className="ml-2 text-xs text-cream/40">(Always active)</span>
                  <p className="text-xs text-cream/50 mt-1">
                    Required for the website to function. Cannot be disabled.
                  </p>
                </div>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences({ ...preferences, analytics: e.target.checked })
                  }
                  className="mt-1 accent-sage"
                />
                <div>
                  <span className="font-body font-bold text-sm text-cream">Analytics Cookies</span>
                  <p className="text-xs text-cream/50 mt-1">
                    Help us understand how visitors use our website to improve it.
                  </p>
                </div>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) =>
                    setPreferences({ ...preferences, marketing: e.target.checked })
                  }
                  className="mt-1 accent-sage"
                />
                <div>
                  <span className="font-body font-bold text-sm text-cream">Marketing Cookies</span>
                  <p className="text-xs text-cream/50 mt-1">
                    Used to deliver relevant ads and track campaign performance.
                  </p>
                </div>
              </label>
            </div>
            <div className="flex justify-end gap-3">
              <button
                onClick={acceptNecessary}
                className="px-4 py-2 text-sm border border-cream/20 text-cream/70 hover:bg-cream/5 transition-colors"
              >
                Reject All
              </button>
              <button
                onClick={savePreferences}
                className="px-4 py-2 text-sm bg-sage text-cream hover:bg-sage-dk transition-colors"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
