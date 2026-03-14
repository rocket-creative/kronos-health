import type { Metadata } from 'next'
import { Work_Sans, IBM_Plex_Sans_Condensed, Open_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { CookieConsent } from '@/components/CookieConsent'

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
})

const ibmPlexCondensed = IBM_Plex_Sans_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
  variable: '--font-ibm-plex-condensed',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
})

export const metadata: Metadata = {
  title: {
    default: 'Cognifica Health — Cognitive Health & Brain Wellness',
    template: '%s | Cognifica Health',
  },
  description:
    'Comprehensive neuropsychological evaluations, TMS therapy, concussion care, and brain health treatment. Three NY and CT locations. Insurance accepted.',
  metadataBase: new URL('https://cognifica.health'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} ${ibmPlexCondensed.variable} ${openSans.variable}`}
    >
      <head>
        {/* Google Ads tag — replace AW-XXXXXXXXXX with actual conversion ID */}
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
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-white focus:p-4 focus:z-50 focus:ring-2 focus:ring-cognifica-indigo"
        >
          Skip to main content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
