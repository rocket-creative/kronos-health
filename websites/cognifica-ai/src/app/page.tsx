import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { TrustBar } from '@/components/TrustBar'
import { ProblemSection } from '@/components/ProblemSection'
import { HowItWorks } from '@/components/HowItWorks'
import { AssessmentsSection } from '@/components/AssessmentsSection'
import { RiskModel } from '@/components/RiskModel'
import { EmployerValue } from '@/components/EmployerValue'
import { DemoForm } from '@/components/DemoForm'

export const metadata: Metadata = {
  title: 'CognificaAI — Workplace Mental Health Platform',
  description:
    'Intelligent mental health screening and risk stratification for employers. Validated clinical assessments, risk stratification, and direct care pathways. Request a demo.',
  alternates: { canonical: 'https://cognificaai.com' },
  openGraph: {
    title: 'CognificaAI — Workplace Mental Health Platform',
    description:
      'Intelligent mental health screening and risk stratification for employers. Validated clinical assessments, risk stratification, and direct care pathways.',
    url: 'https://cognificaai.com',
    siteName: 'CognificaAI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CognificaAI — Workplace Mental Health Platform',
    description:
      'Intelligent mental health screening and risk stratification for employers. Validated clinical assessments, risk stratification, and direct care pathways.',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CognificaAI',
  url: 'https://cognificaai.com',
  description:
    'Workplace mental health screening and risk stratification platform for employers. A Kronos Health product.',
  parentOrganization: {
    '@type': 'Organization',
    name: 'Kronos Health',
    url: 'https://kronoshealth.co',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1 914 705 6830',
    email: 'info@kronoshealth.co',
    contactType: 'sales',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'CognificaAI',
  url: 'https://cognificaai.com',
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Nav />
      <main id="main">
        <Hero />
        <TrustBar />
        <ProblemSection />
        <HowItWorks />
        <AssessmentsSection />
        <RiskModel />
        <EmployerValue />

        {/* Demo / Contact section */}
        <section
          id="contact"
          className="relative overflow-hidden py-24 px-[5%]"
          style={{
            background: 'linear-gradient(135deg, #2E5449 0%, #1A3D35 100%)',
          }}
        >
          {/* Background radial blob */}
          <div
            className="pointer-events-none absolute -top-1/2 -left-[20%] w-[500px] h-[500px] rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(74,124,111,.3) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-bold leading-tight mb-5 text-[#F0EDE8]">
              Ready to make mental health
              <br />a measurable priority?
            </h2>
            <p className="text-[17px] text-[rgba(240,237,232,0.65)] leading-relaxed">
              Join forward-thinking employers using CognificaAI to proactively support their
              workforce — before crisis strikes.
            </p>
          </div>

          <DemoForm />

          <p className="relative z-10 text-center mt-8 text-[rgba(240,237,232,0.4)] text-sm">
            Questions? Call{' '}
            <a href="tel:9147056830" className="underline hover:text-[rgba(240,237,232,0.8)] transition-colors">
              914 705 6830
            </a>{' '}
            or email{' '}
            <a
              href="mailto:info@kronoshealth.co"
              className="underline hover:text-[rgba(240,237,232,0.8)] transition-colors"
            >
              info@kronoshealth.co
            </a>
          </p>
        </section>

        {/* Footer */}
        <footer className="bg-ink text-[rgba(240,237,232,0.5)] px-[5%] py-10 flex flex-wrap items-center justify-between gap-4">
          <div className="font-serif text-lg font-bold text-[rgba(240,237,232,0.9)]">
            CognificaAI
          </div>
          <div className="text-xs">© 2026 · All rights reserved · HIPAA Compliant</div>
          <div className="flex gap-7">
            <a
              href="/privacy"
              className="text-[rgba(240,237,232,0.4)] text-sm hover:text-[rgba(240,237,232,0.8)] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-[rgba(240,237,232,0.4)] text-sm hover:text-[rgba(240,237,232,0.8)] transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#contact"
              className="text-[rgba(240,237,232,0.4)] text-sm hover:text-[rgba(240,237,232,0.8)] transition-colors"
            >
              Contact
            </a>
          </div>
        </footer>
      </main>
    </>
  )
}
