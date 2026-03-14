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
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-stone-200 shadow-lg">
      <div className="max-w-5xl mx-auto">
        {!showPreferences ? (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm text-gray-700 leading-relaxed">
                We use cookies to improve your experience and analyze site traffic. By clicking
                "Accept All," you consent to our use of cookies.{' '}
                <Link href="/privacy" className="text-cognifica-cta hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setShowPreferences(true)}
                className="text-sm text-gray-600 hover:text-gray-900 underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-cognifica-indigo"
              >
                Manage Preferences
              </button>
              <button
                onClick={acceptNecessary}
                className="px-4 py-2 text-sm border border-stone-300 text-gray-700 hover:bg-stone-50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cognifica-indigo"
              >
                Necessary Only
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 text-sm bg-cognifica-indigo text-white hover:bg-cognifica-indigo/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-cognifica-indigo">Cookie Preferences</h3>
              <button
                onClick={() => setShowPreferences(false)}
                className="text-sm text-gray-500 hover:text-gray-700"
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
                  className="mt-1 accent-cognifica-indigo"
                />
                <div>
                  <span className="font-bold text-sm text-gray-700">Necessary Cookies</span>
                  <span className="ml-2 text-xs text-gray-400">(Always active)</span>
                  <p className="text-xs text-gray-500 mt-1">
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
                  className="mt-1 accent-cognifica-indigo"
                />
                <div>
                  <span className="font-bold text-sm text-gray-700">Analytics Cookies</span>
                  <p className="text-xs text-gray-500 mt-1">
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
                  className="mt-1 accent-cognifica-indigo"
                />
                <div>
                  <span className="font-bold text-sm text-gray-700">Marketing Cookies</span>
                  <p className="text-xs text-gray-500 mt-1">
                    Used to deliver relevant ads and track campaign performance.
                  </p>
                </div>
              </label>
            </div>
            <div className="flex justify-end gap-3">
              <button
                onClick={acceptNecessary}
                className="px-4 py-2 text-sm border border-stone-300 text-gray-700 hover:bg-stone-50 transition-colors"
              >
                Reject All
              </button>
              <button
                onClick={savePreferences}
                className="px-4 py-2 text-sm bg-cognifica-indigo text-white hover:bg-cognifica-indigo/90 transition-colors"
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
