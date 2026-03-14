import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { AppointmentForm } from '@/components/AppointmentForm'
import { TrustBar } from '@/components/TrustBar'
import { LocationsSection } from '@/components/LocationsSection'
import { GoogleReviews } from '@/components/GoogleReviews'

export const metadata: Metadata = {
  title: 'Neuropsychology Westchester, Long Island, CT | Cognifica Health',
  description:
    'Expert neuropsychological testing, TMS therapy, and concussion treatment in Westchester NY, Long Island, and Stamford CT. Board certified specialists. Insurance accepted.',
  alternates: { canonical: 'https://cognifica.health' },
  openGraph: {
    title: 'Neuropsychology Westchester, Long Island, CT | Cognifica Health',
    description:
      'Expert neuropsychological testing, TMS therapy, and concussion treatment in Westchester NY, Long Island, and Stamford CT. Board certified specialists.',
    url: 'https://cognifica.health',
    siteName: 'Cognifica Health',
    type: 'website',
    images: [{ url: 'https://cognifica.health/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neuropsychology Westchester, Long Island, CT | Cognifica Health',
    description:
      'Expert neuropsychological testing, TMS therapy, and concussion treatment in Westchester NY, Long Island, and Stamford CT.',
    images: ['https://cognifica.health/og-image.jpg'],
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  name: 'Cognifica Health',
  url: 'https://cognifica.health',
  logo: 'https://cognifica.health/logo.png',
  telephone: '+1-914-948-3008',
  email: 'appt@cognifica.health',
  medicalSpecialty: ['Neuropsychology', 'Neurology', 'Psychiatry'],
  areaServed: [
    {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: 41.0334, longitude: -73.7262 },
      geoRadius: '80467',
    },
    {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: 40.9445, longitude: -72.6279 },
      geoRadius: '80467',
    },
    {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: 41.0534, longitude: -73.5387 },
      geoRadius: '80467',
    },
  ],
  location: [
    {
      '@type': 'MedicalClinic',
      name: 'Cognifica Health — Westchester',
      telephone: '+1-914-948-3008',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '244 Westchester Avenue, Suite 209',
        addressLocality: 'West Harrison',
        addressRegion: 'NY',
        postalCode: '10604',
        addressCountry: 'US',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 41.0334, longitude: -73.7262 },
    },
    {
      '@type': 'MedicalClinic',
      name: 'Cognifica Health — Long Island',
      telephone: '+1-914-948-3008',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '508 Main Street, Office 2',
        addressLocality: 'Aquebogue',
        addressRegion: 'NY',
        postalCode: '11931',
        addressCountry: 'US',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 40.9445, longitude: -72.6279 },
    },
    {
      '@type': 'MedicalClinic',
      name: 'Cognifica Health — Connecticut',
      telephone: '+1-914-948-3008',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1100 Bedford St, First Floor',
        addressLocality: 'Stamford',
        addressRegion: 'CT',
        postalCode: '06905',
        addressCountry: 'US',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 41.0534, longitude: -73.5387 },
    },
  ],
}

const physicianSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Dr. John M. Abrahams',
  image: 'https://cognifica.health/team/dr-abrahams.jpg',
  jobTitle: 'Medical Director',
  medicalSpecialty: ['Neuropsychology', 'Neurosurgery'],
  description: 'Board certified neurosurgeon with over 20 years of clinical experience. Past President of the Brain and Spine Surgeons of New York.',
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Medical School',
  },
  memberOf: [
    { '@type': 'Organization', name: 'Brain and Spine Surgeons of New York' },
    { '@type': 'Organization', name: 'American Association of Neurological Surgeons' },
  ],
  worksFor: {
    '@type': 'MedicalOrganization',
    name: 'Cognifica Health',
    url: 'https://cognifica.health',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What insurance does Cognifica Health accept?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We accept Medicare, Tricare, Workers Compensation, No-Fault insurance, and most major commercial insurance plans. Contact our office to verify your specific coverage before your appointment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer virtual appointments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Virtual evaluations are available for qualifying services. Our team will advise you on whether your specific concern can be addressed via telehealth during the intake process.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a neuropsychological evaluation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A comprehensive evaluation typically takes 3 to 6 hours. This includes clinical interview, standardized testing, and review of prior records. A detailed written report is provided after the evaluation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is TMS therapy and is it covered by insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TMS (Transcranial Magnetic Stimulation) is an FDA-cleared, non-invasive treatment for depression that uses magnetic pulses to stimulate specific areas of the brain. It is covered by Medicare and many commercial insurance plans when other treatments have not been effective.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where are your locations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cognifica Health has three convenient locations: West Harrison NY (Westchester County), Aquebogue NY (Eastern Long Island), and Stamford CT (Fairfield County). We serve patients within a 50 mile radius of each location.',
      },
    },
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Cognifica Health',
  url: 'https://cognifica.health',
}

const CONDITIONS = [
  {
    title: 'Concussion & TBI',
    desc: 'Structured recovery programs for mild to severe traumatic brain injuries.',
    href: '/concussion-tbi',
  },
  {
    title: 'Cognitive dysfunction',
    desc: 'Memory loss, brain fog, post-COVID cognitive impairment, and concentration issues.',
    href: '/memory-brain-fog',
  },
  {
    title: 'Chronic pain',
    desc: 'Neurologically informed treatment for persistent pain conditions.',
    href: '/conditions-we-treat',
  },
  {
    title: 'Anxiety',
    desc: 'Comprehensive evaluation and treatment plans for anxiety disorders.',
    href: '/conditions-we-treat',
  },
  {
    title: 'Depression',
    desc: 'Including TMS therapy — an FDA-cleared, non-medication option.',
    href: '/tms-therapy',
  },
  {
    title: 'PTSD',
    desc: 'Trauma informed neuropsychological care for post traumatic stress.',
    href: '/conditions-we-treat',
  },
]

const SERVICES = [
  {
    title: 'Neuropsychological evaluations',
    desc: 'Comprehensive 3-6 hour assessments of memory, attention, language, and executive function. Used for diagnosis, treatment planning, and legal or insurance documentation.',
    href: '/neuropsychological-testing',
    cta: 'Learn about testing',
  },
  {
    title: 'Brain health & wellness program',
    desc: 'A personalized program combining cognitive remediation, neurofeedback, lifestyle planning, and quarterly assessments. No commitment required.',
    href: '/brain-health-and-wellness',
    cta: 'Explore the program',
  },
  {
    title: 'TMS therapy',
    desc: 'Transcranial Magnetic Stimulation is an FDA-cleared, non-invasive treatment for depression. No medication. No downtime. Covered by most insurance plans.',
    href: '/tms-therapy',
    cta: 'Learn about TMS',
  },
]

const FAQS = [
  {
    q: 'What insurance does Cognifica Health accept?',
    a: 'We accept Medicare, Tricare, Workers Compensation, No-Fault insurance, and most major commercial insurance plans. Contact our office to verify your specific coverage before your appointment.',
  },
  {
    q: 'Do you offer virtual appointments?',
    a: 'Yes. Virtual evaluations are available for qualifying services. Our team will advise you on whether your specific concern can be addressed via telehealth during the intake process.',
  },
  {
    q: 'How long does a neuropsychological evaluation take?',
    a: 'A comprehensive evaluation typically takes 3 to 6 hours. This includes clinical interview, standardized testing, and review of prior records. A detailed written report is provided after the evaluation.',
  },
  {
    q: 'What is TMS therapy and is it covered by insurance?',
    a: 'TMS (Transcranial Magnetic Stimulation) is an FDA-cleared, non-invasive treatment for depression that uses magnetic pulses to stimulate specific areas of the brain. It is covered by Medicare and many commercial insurance plans when other treatments have not been effective.',
  },
  {
    q: 'How do I schedule an appointment?',
    a: 'You can request an appointment using the form on this page or by calling our office at (914) 948 3008. Our team will contact you within one business day to confirm your appointment details.',
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([orgSchema, websiteSchema, physicianSchema, faqSchema]) }}
      />

      {/* Hero */}
      <section className="bg-cognifica-indigo text-white py-20 md:py-28 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-cognifica-submit text-xs font-bold uppercase tracking-widest mb-4">
                Cognitive health specialists
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Care for every stage of cognitive health
              </h1>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
                Our multidisciplinary team of neurologists, psychiatric specialists, and care
                coordinators delivers comprehensive evaluation and treatment for brain health,
                memory, mood, and recovery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Link
                  href="/consults"
                  className="inline-flex items-center gap-2 bg-cognifica-cta text-white px-7 py-3 font-bold uppercase tracking-wider text-sm hover:bg-blue-400 transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                >
                  Book an appointment →
                </Link>
                <a
                  href="tel:9149483008"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-bold py-3 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded"
                >
                  (914) 948 3008
                </a>
              </div>
            </div>
            <div className="relative hidden md:block">
              <Image
                src="/images/stethescope.jpg"
                alt="Medical stethoscope — Cognifica Health"
                width={560}
                height={480}
                className="w-full h-[420px] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Conditions overview */}
      <section className="bg-white py-16" aria-labelledby="conditions-heading">
        <div className="max-w-5xl mx-auto px-4">
          <h2
            id="conditions-heading"
            className="font-heading text-3xl font-bold text-cognifica-indigo mb-3"
          >
            Conditions we treat
          </h2>
          <p className="text-gray-600 mb-10 max-w-xl">
            Cognifica Health specializes in the full spectrum of cognitive, neurological, and
            psychiatric conditions.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {CONDITIONS.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="group block border border-stone-200 p-6 hover:border-cognifica-indigo transition-colors focus-visible:ring-2 focus-visible:ring-cognifica-indigo focus-visible:outline-none"
              >
                <h3 className="font-heading text-lg font-bold text-cognifica-indigo mb-2 group-hover:underline">
                  {c.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/conditions-we-treat"
              className="inline-flex items-center gap-2 text-cognifica-cta font-bold text-sm uppercase tracking-wider hover:underline focus-visible:ring-2 focus-visible:ring-cognifica-indigo focus-visible:outline-none"
            >
              View all conditions →
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-stone-50 py-16" aria-labelledby="services-heading">
        <div className="max-w-5xl mx-auto px-4">
          <h2
            id="services-heading"
            className="font-heading text-3xl font-bold text-cognifica-indigo mb-3"
          >
            Our services
          </h2>
          <p className="text-gray-600 mb-10 max-w-xl">
            From comprehensive testing to innovative therapies, our programs are built around
            your individual brain health needs.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-white border border-stone-200 p-7 flex flex-col">
                <h3 className="font-heading text-xl font-bold text-cognifica-indigo mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-5">{s.desc}</p>
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-1 text-cognifica-cta font-bold text-sm uppercase tracking-wider hover:underline focus-visible:ring-2 focus-visible:ring-cognifica-indigo focus-visible:outline-none"
                >
                  {s.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-cognifica-indigo text-white py-16" aria-labelledby="why-heading">
        <div className="max-w-5xl mx-auto px-4">
          <h2 id="why-heading" className="font-heading text-3xl font-bold mb-10">
            Why choose Cognifica Health
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-8 h-1 bg-cognifica-submit mb-4" aria-hidden="true" />
              <h3 className="font-heading text-xl font-bold mb-3">
                Experienced specialists & multidisciplinary team
              </h3>
              <p className="text-white/75 text-sm leading-relaxed">
                Our team includes a board-certified neurosurgeon, psychiatric mental health nurse
                practitioner, and experienced clinical coordinators. Each patient benefits from
                perspectives across multiple disciplines.
              </p>
            </div>
            <div>
              <div className="w-8 h-1 bg-cognifica-submit mb-4" aria-hidden="true" />
              <h3 className="font-heading text-xl font-bold mb-3">
                Personalized treatment plans
              </h3>
              <p className="text-white/75 text-sm leading-relaxed">
                No two patients are the same. Every care plan at Cognifica is built on a
                thorough evaluation, individual history, and goals — not a template. We revise
                and adapt your plan as your needs evolve.
              </p>
            </div>
            <div>
              <div className="w-8 h-1 bg-cognifica-submit mb-4" aria-hidden="true" />
              <h3 className="font-heading text-xl font-bold mb-3">
                Innovative, personalized care
              </h3>
              <p className="text-white/75 text-sm leading-relaxed">
                We use proprietary wellness software, computer-based cognitive remediation, EEG,
                neurofeedback, and regular assessments to track your progress and guide
                clinical decisions with objective data.
              </p>
            </div>
          </div>
        </div>
      </section>

      <LocationsSection />

      {/* FAQ */}
      <section className="bg-white py-16" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4">
          <h2
            id="faq-heading"
            className="font-heading text-3xl font-bold text-cognifica-indigo mb-10"
          >
            Frequently asked questions
          </h2>
          <dl className="divide-y divide-stone-200">
            {FAQS.map((faq) => (
              <div key={faq.q} className="py-6">
                <dt className="font-bold text-cognifica-indigo mb-2">{faq.q}</dt>
                <dd className="text-gray-600 text-sm leading-relaxed">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <GoogleReviews />

      {/* Appointment form */}
      <section className="bg-stone-50 py-16" aria-labelledby="appt-heading">
        <div className="max-w-2xl mx-auto px-4">
          <h2
            id="appt-heading"
            className="font-heading text-3xl font-bold text-cognifica-indigo mb-3"
          >
            Request an appointment
          </h2>
          <p className="text-gray-600 mb-8">
            Fill out the form below and our team will contact you within one business day.
          </p>
          <AppointmentForm />
        </div>
      </section>
    </>
  )
}
