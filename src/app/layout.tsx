import type { Metadata, Viewport } from "next";
import { Bebas_Neue, IBM_Plex_Sans, Open_Sans } from "next/font/google";
import { Nav, Footer, OrganizationSchema, WebSiteSchema, SkipLink, CookieConsent, StickyCTA } from "@/components";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["300", "400", "700"],
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const openSans = Open_Sans({
  weight: ["400", "700"],
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#82738C",
};

export const metadata: Metadata = {
  title: {
    default: "Kronos Group — Smarter Healthcare. Stronger Revenue.",
    template: "%s | Kronos Group",
  },
  description:
    "Healthcare technology solutions: revenue cycle management, Cognifica App mental health platform, Synaptix concussion software. Founded by Dr. John M. Abrahams. Contact us today.",
  metadataBase: new URL("https://www.kronosgroup.health"),
  alternates: {
    canonical: "https://www.kronosgroup.health",
  },
  authors: [
    { name: "Dr. John M. Abrahams", url: "https://www.kronosgroup.health/about" },
  ],
  creator: "Kronos Group",
  publisher: "Kronos Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Kronos Group — Smarter Healthcare. Stronger Revenue.",
    description:
      "Healthcare technology solutions: Revenue cycle management, Cognifica App workplace mental health platform, and Synaptix concussion management software.",
    url: "https://www.kronosgroup.health",
    siteName: "Kronos Group",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.kronosgroup.health/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Kronos Group - Healthcare Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kronos Group — Smarter Healthcare. Stronger Revenue.",
    description:
      "Healthcare technology solutions: Revenue cycle management, Cognifica App, and Synaptix concussion software.",
    images: ["https://www.kronosgroup.health/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <OrganizationSchema type="MedicalBusiness" />
        <WebSiteSchema />
      </head>
      <body
        className={`${bebasNeue.variable} ${ibmPlexSans.variable} ${openSans.variable} antialiased bg-kronos-bg text-white`}
      >
        <SkipLink />
        <Nav />
        <main id="main-content" className="pt-16 lg:pt-20 pb-20 lg:pb-0" role="main">
          {children}
        </main>
        <Footer />
        <StickyCTA />
        <CookieConsent />
      </body>
    </html>
  );
}
