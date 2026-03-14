import type { Metadata } from 'next'
import Link from 'next/link'
import { buildBreadcrumbSchema } from '@/lib/metadata'
import { AppointmentForm } from '@/components/AppointmentForm'
import { TrustBar } from '@/components/TrustBar'

export const metadata: Metadata = {
  title: 'TMS Therapy Westchester, Long Island, CT | Depression Treatment',
  description:
    'TMS therapy in Westchester NY, Long Island, and Stamford CT. FDA cleared depression treatment. No medication. Insurance accepted including Medicare. Board certified specialists.',
  alternates: { canonical: 'https://cognifica.health/tms-therapy' },
  openGraph: {
    title: 'TMS Therapy Westchester, Long Island, CT | Depression Treatment',
    description:
      'TMS therapy in Westchester NY, Long Island, and Stamford CT. FDA cleared depression treatment. Insurance accepted.',
    url: 'https://cognifica.health/tms-therapy',
    siteName: 'Cognifica Health',
    type: 'website',
    images: [{ url: 'https://cognifica.health/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TMS Therapy Westchester, Long Island, CT',
    description:
      'FDA cleared TMS therapy for depression. No medication. Westchester, Long Island, Stamford CT locations.',
    images: ['https://cognifica.health/og-image.jpg'],
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://cognifica.health' },
  { name: 'TMS Therapy', url: 'https://cognifica.health/tms-therapy' },
])

const procedureSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Transcranial Magnetic Stimulation (TMS) Therapy',
  description:
    'TMS is an FDA-cleared, non-invasive brain stimulation therapy using magnetic pulses to treat depression and other psychiatric conditions.',
  procedureType: 'TherapeuticProcedure',
  status: 'EventScheduled',
  indication: {
    '@type': 'MedicalIndication',
    name: 'Major Depressive Disorder',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is TMS therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TMS (Transcranial Magnetic Stimulation) is an FDA cleared, non invasive treatment that uses targeted magnetic pulses to stimulate areas of the brain involved in mood regulation. It is used to treat depression, particularly when antidepressant medications have not been effective.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a TMS session take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TMS sessions typically run 20 to 40 minutes. Most patients complete 5 sessions per week for 4 to 6 weeks. You remain awake and alert throughout and can drive yourself home after each session.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is TMS therapy covered by insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, TMS therapy is covered by Medicare and most commercial insurance plans when prescribed for treatment resistant depression. Our team handles prior authorization with your insurance carrier.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is a good candidate for TMS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TMS is appropriate for adults with Major Depressive Disorder who have not responded adequately to antidepressant medications, cannot tolerate medication side effects, or are seeking a non medication treatment option.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the side effects of TMS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TMS has minimal side effects compared to medications. Some patients experience mild scalp discomfort or headache during or after treatment, which typically diminishes over the course of treatment. Unlike ECT, TMS does not cause memory loss or require anesthesia.',
      },
    },
  ],
}

const STEPS = [
  {
    step: '1',
    title: 'Consultation',
    desc: 'A comprehensive evaluation by Dr. Abrahams or Dr. Mogan to confirm you are a candidate for TMS and review your treatment history.',
  },
  {
    step: '2',
    title: 'Insurance verification',
    desc: 'Our team handles prior authorization with your insurance carrier. TMS is covered by Medicare and most commercial plans when other treatments have not been effective.',
  },
  {
    step: '3',
    title: 'Treatment sessions begin',
    desc: 'Sessions typically run 20 to 40 minutes. Most patients complete 5 sessions per week for 4 to 6 weeks. You remain awake and alert throughout.',
  },
  {
    step: '4',
    title: 'Ongoing monitoring',
    desc: 'Your clinical team monitors your response at each visit and adjusts the protocol as needed. Most patients notice improvements within 2 to 4 weeks.',
  },
  {
    step: '5',
    title: 'Maintenance planning',
    desc: 'After your initial course, we develop a personalized maintenance plan to protect your gains and prevent relapse.',
  },
]

const WHO_IS_IT_FOR = [
  'Adults diagnosed with Major Depressive Disorder',
  'Patients who have not responded adequately to antidepressant medications',
  'Patients who cannot tolerate medication side effects',
  'Patients seeking a non-medication treatment option',
  'Patients with depression alongside anxiety or PTSD',
]

export default function TMSPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-cognifica-indigo text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4">
          <div className="max-w-2xl">
            <p className="text-cognifica-submit text-xs font-bold uppercase tracking-widest mb-4">
              FDA-cleared · Non-invasive · Insurance accepted
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              TMS therapy for depression
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Transcranial Magnetic Stimulation is an FDA-cleared treatment that uses
              targeted magnetic pulses to stimulate areas of the brain involved in mood
              regulation. No medication. No anesthesia. No downtime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Link
                href="/consults"
                className="inline-flex items-center gap-2 bg-cognifica-cta text-white px-7 py-3 font-bold uppercase tracking-wider text-sm hover:bg-blue-400 transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                Book a TMS consultation →
              </Link>
              <a
                href="tel:9149483008"
                className="inline-flex items-center gap-2 text-cognifica-submit font-bold text-sm py-3 hover:underline focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                Call (914) 948 3008
              </a>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* What is TMS */}
      <section className="bg-white py-16" aria-labelledby="what-is-tms">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              id="what-is-tms"
              className="font-heading text-3xl font-bold text-cognifica-indigo mb-4"
            >
              What is TMS therapy?
            </h2>
            <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <p>
                TMS (Transcranial Magnetic Stimulation) uses brief magnetic pulses — similar
                in strength to those used in an MRI machine — to stimulate specific regions of
                the prefrontal cortex associated with depression and mood regulation.
              </p>
              <p>
                Unlike electroconvulsive therapy (ECT), TMS does not require anesthesia or
                sedation. Patients remain fully awake and alert, experience no memory loss, and
                can drive themselves home after each session.
              </p>
              <p>
                TMS received FDA clearance for treatment-resistant depression in 2008. It has
                since been studied in thousands of clinical trials and is now covered by Medicare
                and most major commercial insurance plans.
              </p>
            </div>
          </div>
          <div className="bg-stone-50 border border-stone-200 p-8">
            <h3 className="font-heading text-xl font-bold text-cognifica-indigo mb-5">
              Key facts about TMS
            </h3>
            <ul className="space-y-3 list-none">
              {[
                'FDA-cleared since 2008',
                'Non-invasive — no surgery, no anesthesia',
                'No systemic medication side effects',
                '20-40 minute sessions',
                '5 sessions per week for 4-6 weeks',
                'Patients drive themselves to and from treatment',
                'Covered by Medicare and most commercial insurance',
                'Response rates of 50-60% in clinical studies',
              ].map((fact) => (
                <li key={fact} className="flex items-start gap-3 text-sm text-gray-700">
                  <span
                    className="flex-shrink-0 w-5 h-5 bg-cognifica-submit rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="bg-stone-50 py-16" aria-labelledby="who-tms">
        <div className="max-w-5xl mx-auto px-4">
          <h2
            id="who-tms"
            className="font-heading text-3xl font-bold text-cognifica-indigo mb-8"
          >
            Who is TMS therapy for?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {WHO_IS_IT_FOR.map((item) => (
              <div
                key={item}
                className="bg-white border border-stone-200 p-5 flex items-center gap-4"
              >
                <span
                  className="flex-shrink-0 w-2 h-8 bg-cognifica-indigo"
                  aria-hidden="true"
                />
                <p className="text-sm text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect — 5 steps */}
      <section className="bg-white py-16" aria-labelledby="tms-steps">
        <div className="max-w-5xl mx-auto px-4">
          <h2
            id="tms-steps"
            className="font-heading text-3xl font-bold text-cognifica-indigo mb-10"
          >
            What to expect
          </h2>
          <div className="space-y-6">
            {STEPS.map((s) => (
              <div key={s.step} className="flex gap-6 items-start border-b border-stone-100 pb-6">
                <span
                  className="flex-shrink-0 w-10 h-10 bg-cognifica-indigo text-white flex items-center justify-center font-heading font-bold text-lg"
                  aria-hidden="true"
                >
                  {s.step}
                </span>
                <div>
                  <h3 className="font-bold text-cognifica-indigo mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our approach — team */}
      <section className="bg-cognifica-indigo text-white py-14" aria-labelledby="tms-team">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2
              id="tms-team"
              className="font-heading text-3xl font-bold mb-4"
            >
              Our approach to TMS
            </h2>
            <p className="text-white/75 text-sm leading-relaxed mb-4">
              TMS at Cognifica Health is supervised by Dr. John Abrahams, MD, and Dr. Susan
              Mogan, PMHNP. Every patient receives a thorough psychiatric and neurological
              evaluation before starting treatment to confirm candidacy and establish a
              personalized protocol.
            </p>
            <p className="text-white/75 text-sm leading-relaxed">
              We monitor your progress at every session and adjust the treatment parameters
              based on your response. Most patients complete treatment without interruption
              and return to all normal daily activities immediately after each session.
            </p>
          </div>
          <div className="bg-white/10 p-7">
            <p className="font-bold text-cognifica-submit uppercase tracking-wider text-xs mb-4">
              Insurance & locations
            </p>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              TMS therapy is covered by Medicare and most commercial insurance plans when
              prescribed for treatment-resistant depression. Our team handles prior
              authorization on your behalf.
            </p>
            <ul className="text-white/70 text-sm space-y-2 list-none mb-5">
              <li>West Harrison, NY — (914) 948 3008</li>
              <li>Aquebogue, NY — (914) 948 3008</li>
              <li>Stamford, CT — (914) 948 3008</li>
            </ul>
            <a
              href="tel:9149483008"
              className="inline-flex items-center gap-2 bg-cognifica-submit text-white px-6 py-3 font-bold text-sm hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              Call to verify coverage
            </a>
          </div>
        </div>
      </section>

      {/* Appointment form */}
      <section className="bg-stone-50 py-16" aria-labelledby="tms-appt">
        <div className="max-w-2xl mx-auto px-4">
          <h2
            id="tms-appt"
            className="font-heading text-3xl font-bold text-cognifica-indigo mb-3"
          >
            Book a TMS consultation
          </h2>
          <p className="text-gray-600 mb-8">
            Fill out the form below and our team will contact you within one business day to
            discuss your treatment options and verify your insurance.
          </p>
          <AppointmentForm />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-cognifica-indigo text-white py-10">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-heading text-xl font-bold">
            Questions about TMS therapy?
          </p>
          <a
            href="tel:9149483008"
            className="inline-flex items-center gap-2 bg-cognifica-submit text-white px-7 py-3 font-bold uppercase tracking-wider text-sm hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
          >
            Call (914) 948 3008
          </a>
        </div>
      </section>
    </>
  )
}
