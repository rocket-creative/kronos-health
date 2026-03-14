import type { Metadata } from 'next'
import Link from 'next/link'
import { buildBreadcrumbSchema } from '@/lib/metadata'
import { AppointmentForm } from '@/components/AppointmentForm'

export const metadata: Metadata = {
  title: 'Book a Consultation | Cognifica Health',
  description:
    'Request a cognitive health consultation at Cognifica Health. Three locations in West Harrison NY, Aquebogue NY, and Stamford CT. Insurance accepted. Same-week availability.',
  alternates: { canonical: 'https://cognifica.health/consults' },
  openGraph: {
    title: 'Book a Consultation | Cognifica Health',
    description:
      'Book your cognitive health consultation at Cognifica Health. Three NY and CT locations, insurance accepted.',
    url: 'https://cognifica.health/consults',
    siteName: 'Cognifica Health',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Consultation | Cognifica Health',
    description: 'Request a cognitive health appointment at Cognifica Health.',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://cognifica.health' },
  { name: 'Book a Consultation', url: 'https://cognifica.health/consults' },
])

const LOCATIONS = [
  {
    name: 'West Harrison, NY',
    address: '244 Westchester Avenue, Suite 209',
    city: 'West Harrison, NY 10604',
  },
  {
    name: 'Aquebogue, NY',
    address: '508 Main Street, Office 2',
    city: 'Aquebogue, NY 11931',
  },
  {
    name: 'Stamford, CT',
    address: '1100 Bedford St, First Floor',
    city: 'Stamford, CT 06905',
  },
]

export default function ConsultsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Header */}
      <section className="bg-cognifica-indigo text-white py-14">
        <div className="max-w-5xl mx-auto px-4">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex gap-2 text-xs text-white/60 list-none">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white">Book a consultation</li>
            </ol>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">
            Book a cognitive health consultation
          </h1>
          <p className="mt-4 text-white/75 max-w-xl text-lg">
            Take the first step. Our team will review your request and contact you within one
            business day.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="tel:9149483008"
              className="inline-flex items-center gap-2 bg-cognifica-submit text-white px-6 py-3 font-bold text-sm hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              Call (914) 948 3008
            </a>
            <span className="text-white/50 text-sm">or use the form below</span>
          </div>
        </div>
      </section>

      {/* Form + locations */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-5 gap-12">
          {/* Form */}
          <div className="md:col-span-3">
            <h2 className="font-heading text-2xl font-bold text-cognifica-indigo mb-6">
              Request an appointment
            </h2>
            <AppointmentForm />
          </div>

          {/* Locations sidebar */}
          <aside className="md:col-span-2">
            <h2 className="font-heading text-xl font-bold text-cognifica-indigo mb-5">
              Our locations
            </h2>
            <div className="space-y-5">
              {LOCATIONS.map((loc) => (
                <address
                  key={loc.name}
                  className="not-italic bg-stone-50 border border-stone-200 p-5"
                >
                  <p className="font-bold text-cognifica-indigo text-sm mb-1">{loc.name}</p>
                  <p className="text-xs text-gray-600">{loc.address}</p>
                  <p className="text-xs text-gray-600 mb-3">{loc.city}</p>
                  <a
                    href="tel:9149483008"
                    className="text-xs font-bold text-cognifica-cta hover:underline"
                  >
                    (914) 948 3008
                  </a>
                </address>
              ))}
            </div>

            <div className="mt-8 bg-cognifica-indigo/5 border border-cognifica-indigo/20 p-5">
              <p className="font-bold text-cognifica-indigo text-sm mb-2">Insurance accepted</p>
              <ul className="text-xs text-gray-600 space-y-1 list-none">
                <li>Medicare</li>
                <li>Tricare</li>
                <li>Workers Compensation</li>
                <li>No-Fault insurance</li>
                <li>Most commercial plans</li>
              </ul>
            </div>

            <div className="mt-5">
              <p className="text-xs text-gray-500">
                Virtual evaluations available for qualifying services. Our team will advise
                you during intake.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
