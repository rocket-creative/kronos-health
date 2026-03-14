import type { Metadata } from 'next'
import Link from 'next/link'
import { buildBreadcrumbSchema } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Privacy Policy | Cognifica Health',
  description:
    'Cognifica Health privacy policy. How we collect, use, and protect your personal and health information. HIPAA compliant healthcare provider.',
  alternates: { canonical: 'https://cognifica.health/privacy' },
  openGraph: {
    title: 'Privacy Policy | Cognifica Health',
    description: 'How we collect, use, and protect your personal and health information.',
    url: 'https://cognifica.health/privacy',
    siteName: 'Cognifica Health',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | Cognifica Health',
    description: 'How we collect, use, and protect your personal and health information.',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://cognifica.health' },
  { name: 'Privacy Policy', url: 'https://cognifica.health/privacy' },
])

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <section className="bg-cognifica-indigo text-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-cognifica-submit text-xs font-bold uppercase tracking-widest mb-4">
            Legal
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-white/60 text-sm">Last updated: March 2026</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-stone max-w-none">
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-cognifica-indigo mb-4">
                Overview
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Cognifica Health ("we," "us," or "our") is committed to protecting your privacy and
                the security of your personal and health information. This Privacy Policy describes
                how we collect, use, disclose, and safeguard your information when you visit our
                website, use our services, or receive care at our facilities.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                As a healthcare provider, we are subject to the Health Insurance Portability and
                Accountability Act (HIPAA) and maintain strict policies to protect your Protected
                Health Information (PHI).
              </p>
            </div>

            <hr className="border-stone-200 my-8" />

            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-cognifica-indigo mb-4">
                Information We Collect
              </h2>

              <h3 className="font-bold text-lg text-cognifica-indigo mt-6 mb-3">
                Personal Information
              </h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Name, date of birth, and contact information</li>
                <li>Insurance information and billing details</li>
                <li>Emergency contact information</li>
                <li>Appointment requests and scheduling preferences</li>
              </ul>

              <h3 className="font-bold text-lg text-cognifica-indigo mt-6 mb-3">
                Protected Health Information (PHI)
              </h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Medical history and current health conditions</li>
                <li>Neuropsychological evaluation results</li>
                <li>Treatment plans and clinical notes</li>
                <li>Diagnostic test results</li>
                <li>Prescription and medication information</li>
              </ul>

              <h3 className="font-bold text-lg text-cognifica-indigo mt-6 mb-3">
                Website Information
              </h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>IP address and browser type</li>
                <li>Pages visited and time spent on site</li>
                <li>Referring website information</li>
                <li>Device and operating system information</li>
              </ul>
            </div>

            <hr className="border-stone-200 my-8" />

            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-cognifica-indigo mb-4">
                How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide medical care and treatment services</li>
                <li>Schedule and manage appointments</li>
                <li>Process insurance claims and billing</li>
                <li>Communicate with you about your care</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Improve our services and patient experience</li>
                <li>Send appointment reminders and health information (with your consent)</li>
              </ul>
            </div>

            <hr className="border-stone-200 my-8" />

            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-cognifica-indigo mb-4">
                HIPAA Notice of Privacy Practices
              </h2>
              <p className="text-gray-600 leading-relaxed">
                As a HIPAA covered entity, we maintain a separate Notice of Privacy Practices that
                describes in detail how your medical information may be used and disclosed, and how
                you can access this information. This notice is provided to all patients at the time
                of their first visit.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Your PHI will only be used or disclosed for treatment, payment, and healthcare
                operations, or as otherwise permitted or required by law. We will not sell your PHI
                or use it for marketing purposes without your written authorization.
              </p>
            </div>

            <hr className="border-stone-200 my-8" />

            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-cognifica-indigo mb-4">
                Information Sharing
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell your personal information. We may share information with:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Other healthcare providers involved in your care (with your consent)</li>
                <li>Insurance companies for claims processing</li>
                <li>Business associates who help us operate (under HIPAA agreements)</li>
                <li>Government agencies as required by law</li>
                <li>Legal authorities when legally compelled</li>
              </ul>
            </div>

            <hr className="border-stone-200 my-8" />

            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-cognifica-indigo mb-4">
                Data Security
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We implement administrative, technical, and physical safeguards to protect your
                information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                <li>Encrypted electronic health records</li>
                <li>Secure patient portals with authentication</li>
                <li>Staff training on privacy and security</li>
                <li>Physical security at all office locations</li>
                <li>Regular security assessments and audits</li>
              </ul>
            </div>

            <hr className="border-stone-200 my-8" />

            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-cognifica-indigo mb-4">
                Your Rights
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">Under HIPAA, you have the right to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access and obtain copies of your medical records</li>
                <li>Request corrections to your health information</li>
                <li>Request restrictions on certain uses of your PHI</li>
                <li>Request confidential communications</li>
                <li>Receive an accounting of disclosures</li>
                <li>File a complaint if you believe your rights have been violated</li>
              </ul>
            </div>

            <hr className="border-stone-200 my-8" />

            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-cognifica-indigo mb-4">
                Cookies and Tracking
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our website uses cookies and similar technologies to improve your browsing
                experience and analyze site traffic. You can control cookie preferences through your
                browser settings. We use:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                <li>Essential cookies for site functionality</li>
                <li>Analytics cookies to understand site usage (with consent)</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                We do not use tracking technologies to collect PHI through our website.
              </p>
            </div>

            <hr className="border-stone-200 my-8" />

            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-cognifica-indigo mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For questions about this Privacy Policy or to exercise your rights, contact us:
              </p>
              <div className="bg-stone-50 p-6 rounded">
                <p className="text-gray-700">
                  <strong>Cognifica Health</strong>
                  <br />
                  Attn: Privacy Officer
                  <br />
                  244 Westchester Avenue, Suite 209
                  <br />
                  West Harrison, NY 10604
                  <br />
                  <br />
                  Phone:{' '}
                  <a href="tel:9149483008" className="text-cognifica-cta hover:underline">
                    (914) 948 3008
                  </a>
                  <br />
                  Email:{' '}
                  <a href="mailto:appt@cognifica.health" className="text-cognifica-cta hover:underline">
                    appt@cognifica.health
                  </a>
                </p>
              </div>
            </div>

            <hr className="border-stone-200 my-8" />

            <div>
              <h2 className="font-heading text-2xl font-bold text-cognifica-indigo mb-4">
                Changes to This Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. Changes will be posted on this
                page with an updated revision date. We encourage you to review this policy
                periodically.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-stone-200">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-cognifica-cta font-bold text-sm uppercase tracking-wider hover:underline"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
