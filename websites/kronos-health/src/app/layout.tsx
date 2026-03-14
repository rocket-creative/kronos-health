import type { Metadata, Viewport } from "next";
import { Bebas_Neue, IBM_Plex_Sans, Open_Sans } from "next/font/google";
import { Nav, Footer, OrganizationSchema, WebSiteSchema, SkipLink, CookieConsent } from "@/components";
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
  maximumScale: 5,
  themeColor: "#0A0A0A",
};

export const metadata: Metadata = {
  title: {
    default: "Kronos Health — Smarter Healthcare. Stronger Revenue.",
    template: "%s | Kronos Health",
  },
  description:
    "Healthcare technology solutions: Revenue cycle management, CognificaAI workplace mental health platform, and Synaptix concussion management software. Founded by Dr. John M. Abrahams, board-certified neurosurgeon.",
  metadataBase: new URL("https://kronoshealth.co"),
  alternates: {
    canonical: "https://kronoshealth.co",
  },
  authors: [
    { name: "Dr. John M. Abrahams", url: "https://kronoshealth.co/about" },
  ],
  creator: "Kronos Health",
  publisher: "Kronos Health",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Kronos Health — Smarter Healthcare. Stronger Revenue.",
    description:
      "Healthcare technology solutions: Revenue cycle management, CognificaAI workplace mental health platform, and Synaptix concussion management software.",
    url: "https://kronoshealth.co",
    siteName: "Kronos Health",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://kronoshealth.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kronos Health - Healthcare Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kronos Health — Smarter Healthcare. Stronger Revenue.",
    description:
      "Healthcare technology solutions: Revenue cycle management, CognificaAI, and Synaptix concussion software.",
    images: ["https://kronoshealth.co/twitter-image.jpg"],
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
        <main id="main-content" className="pt-16 lg:pt-20" role="main">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
