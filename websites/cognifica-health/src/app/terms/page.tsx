import type { Metadata } from 'next'
import Link from 'next/link'
import { buildBreadcrumbSchema } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Terms of Service | Cognifica Health',
  description:
    'Terms of Service for Cognifica Health website and services. Read our terms and conditions for using our healthcare services.',
  alternates: { canonical: 'https://cognifica.health/terms' },
  openGraph: {
    title: 'Terms of Service | Cognifica Health',
    description: 'Terms and conditions for using Cognifica Health website and services.',
    url: 'https://cognifica.health/terms',
    siteName: 'Cognifica Health',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Terms of Service | Cognifica Health',
    description: 'Terms and conditions for using Cognifica Health website and services.',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://cognifica.health' },
  { name: 'Terms of Service', url: 'https://cognifica.health/terms' },
])

export default function TermsPage() {
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
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-white/60 text-sm">Last updated: March 2026</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-stone max-w-none">
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-cognifica-indigo mb-4">
                Acceptance of Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing or using the Cognifica Health website (cognifica.health) or our
                healthcare services, you agree to be bound by these Terms of Service. If you do not
                agree to these terms, please do not use our website or services.
              </p>
            </div>

            <hr className="border-stone-200 my-8" />

            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-cognifica-indigo mb-4">
                Description of Services
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Cognifica Health provides neuropsychological evaluation, TMS therapy, concussion
                recovery programs, and brain health services at our locations in West Harrison NY,
                Aquebogue NY, and Stamford CT. Our website provides information about our services
                and allows you to request appointments.
              </p>
            </div>

            <hr className="border-stone-200 my-8" />

            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-cognifica-indigo mb-4">
                Medical Disclaimer
              </h2>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-4">
                <p className="text-amber-800 font-bold mb-2">Important Notice</p>
                <p className="text-amber-700 text-sm">
                  The information provided on this website is for general informational purposes
                  only and is not intended as a substitute for professional medical advice,
                  diagnosis, or treatment.
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Always seek the advice of your physician or other qualified health provider with any
                questions you may have regarding a medical condition. Never disregard professional
                medical advice or delay in seeking it because of something you have read on this
                website.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                If you think you may have a medical emergency, call your doctor, go to the emergency
                department, or call 911 immediately. Cognifica Health does not recommend or endorse
                any specific tests, physicians, products, procedures, opinions, or other information
                that may be mentioned on the website.
              </p>
            </div>

            <hr className="border-stone-200 my-8" />

            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-cognifica-indigo mb-4">
                Appointment Requests
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Submitting an appointment request through our website does not guarantee an
                appointment. Our staff will contact you to confirm availability and schedule your
                visit. Appointment confirmations are not final until you receive confirmation from
                our office.
              </p>
            </div>

            <hr className="border-stone-200 my-8" />

            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-cognifica-indigo mb-4">
                User Responsibilities
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">When using our website, you agree to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Not use the website for any unlawful purpose</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Not interfere with the proper functioning of the website</li>
                <li>Not transmit any viruses or malicious code</li>
              </ul>
            </div>

            <hr className="border-stone-200 my-8" />

            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-cognifica-indigo mb-4">
                Intellectual Property
              </h2>
              <p className="text-gray-600 leading-relaxed">
                All content on this website, including text, graphics, logos, images, and software,
                is the property of Cognifica Health or its content suppliers and is protected by
                United States and international copyright laws. You may not reproduce, distribute,
                modify, or create derivative works from any content without our express written
                permission.
              </p>
            </div>

            <hr className="border-stone-200 my-8" />

            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-cognifica-indigo mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To the fullest extent permitted by law, Cognifica Health shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages arising out of or
                related to your use of the website. Our total liability for any claims arising from
                use of the website shall not exceed the amount you paid, if any, for accessing the
                website.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                This limitation does not apply to any liability that cannot be excluded or limited
                under applicable law, including liability for medical malpractice or gross
                negligence.
              </p>
            </div>

            <hr className="border-stone-200 my-8" />

            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-cognifica-indigo mb-4">
                Third Party Links
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our website may contain links to third party websites. These links are provided for
                your convenience only. We do not control and are not responsible for the content,
                privacy policies, or practices of any third party websites. Your use of third party
                websites is at your own risk.
              </p>
            </div>

            <hr className="border-stone-200 my-8" />

            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-cognifica-indigo mb-4">
                Governing Law
              </h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the
                laws of the State of New York, without regard to its conflict of law provisions. Any
                legal action or proceeding arising out of these terms shall be brought exclusively
                in the state or federal courts located in Westchester County, New York.
              </p>
            </div>

            <hr className="border-stone-200 my-8" />

            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-cognifica-indigo mb-4">
                Changes to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be
                effective immediately upon posting to the website. Your continued use of the website
                after any changes constitutes your acceptance of the new terms.
              </p>
            </div>

            <hr className="border-stone-200 my-8" />

            <div>
              <h2 className="font-heading text-2xl font-bold text-cognifica-indigo mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-stone-50 p-6 rounded">
                <p className="text-gray-700">
                  <strong>Cognifica Health</strong>
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
