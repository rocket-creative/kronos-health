import type { Metadata } from 'next'
import { Playfair_Display, Mulish } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { CookieConsent } from '@/components/CookieConsent'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

const mulish = Mulish({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mulish',
})

export const metadata: Metadata = {
  title: {
    default: 'CognificaAI — Workplace Mental Health Platform',
    template: '%s | CognificaAI',
  },
  description:
    'Intelligent mental health screening and risk stratification for employers. Validated clinical assessments, proprietary risk scoring, and smart care pathways.',
  metadataBase: new URL('https://cognificaai.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${mulish.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-XXXXXXXXXX');
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-white focus:p-4 focus:z-50 focus:rounded focus:text-ink focus:font-bold"
        >
          Skip to main content
        </a>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
