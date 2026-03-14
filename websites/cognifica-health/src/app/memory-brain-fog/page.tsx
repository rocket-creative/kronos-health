import type { Metadata } from 'next'
import Link from 'next/link'
import { buildBreadcrumbSchema } from '@/lib/metadata'
import { AppointmentForm } from '@/components/AppointmentForm'
import { TrustBar } from '@/components/TrustBar'

export const metadata: Metadata = {
  title: 'Brain Fog Treatment Westchester, Long Island, CT | Memory Loss',
  description:
    'Brain fog and memory loss treatment in Westchester NY, Long Island, and Stamford CT. Expert evaluation for cognitive decline and post COVID symptoms. Insurance accepted.',
  alternates: { canonical: 'https://cognifica.health/memory-brain-fog' },
  openGraph: {
    title: 'Brain Fog Treatment Westchester, Long Island, CT | Memory Loss',
    description:
      'Brain fog and memory loss treatment in Westchester NY, Long Island, and Stamford CT. Board certified cognitive health specialists.',
    url: 'https://cognifica.health/memory-brain-fog',
    siteName: 'Cognifica Health',
    type: 'website',
    images: [{ url: 'https://cognifica.health/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brain Fog Treatment Westchester, Long Island, CT',
    description:
      'Expert treatment for memory loss, brain fog, and post COVID cognitive decline. Westchester, Long Island, Stamford CT.',
    images: ['https://cognifica.health/og-image.jpg'],
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://cognifica.health' },
  { name: 'Memory Loss & Brain Fog', url: 'https://cognifica.health/memory-brain-fog' },
])

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What causes brain fog?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Brain fog can be caused by many factors including illness, stress, sleep disruption, hormonal changes, medication side effects, nutritional deficiencies, or underlying neurological conditions. A comprehensive evaluation identifies the specific cause and guides treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is post COVID brain fog?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Post COVID brain fog refers to cognitive symptoms following COVID 19 infection, including impaired concentration, word finding difficulties, and mental fatigue. Also known as long COVID neurological symptoms, these can persist for months after the initial infection.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is memory loss diagnosed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Memory loss is diagnosed through a comprehensive neuropsychological evaluation that tests memory, attention, processing speed, language, and executive function. Results are compared to age matched norms to identify patterns and determine the cause.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is brain fog treatment covered by insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, cognitive evaluations and treatment are covered by Medicare, Tricare, Workers Compensation, No Fault insurance, and most commercial health plans. Our team handles insurance verification.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can brain fog be cured?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many causes of brain fog are reversible with proper treatment. Our evaluation identifies what is causing your symptoms and what is treatable. Treatment may include cognitive remediation, lifestyle modifications, medication management, or our Brain Health and Wellness program.',
      },
    },
  ],
}

const CONDITIONS_COVERED = [
  {
    title: 'Memory loss',
    desc: 'Difficulty recalling recent events, names, appointments, or conversations. Our neuropsychological evaluation identifies the cause and guides treatment.',
  },
  {
    title: 'Brain fog',
    desc: 'Persistent mental cloudiness, fatigue, and difficulty thinking clearly — whether caused by illness, stress, sleep disruption, or an underlying neurological condition.',
  },
  {
    title: 'Post-COVID brain fog',
    desc: "Cognitive symptoms following COVID-19 infection, including impaired concentration, word-finding difficulties, and mental fatigue. Also known as 'long COVID' neurological symptoms.",
  },
  {
    title: 'Cognitive decline',
    desc: 'Progressive changes in memory, attention, or executive function. Early evaluation is critical for establishing a baseline and identifying reversible causes.',
  },
  {
    title: 'Concentration & attention problems',
    desc: 'Difficulty staying focused, completing tasks, or managing mental workload — in adults with or without a prior ADHD diagnosis.',
  },
  {
    title: 'Subjective cognitive complaints',
    desc: "Feeling like your memory or thinking isn't what it used to be, even when standard tests appear normal. We take these concerns seriously and investigate thoroughly.",
  },
]

const WHAT_TO_EXPECT = [
  {
    title: 'Comprehensive intake',
    desc: 'A detailed review of your symptoms, medical history, medications, and prior test results with our clinical team.',
  },
  {
    title: 'Neuropsychological evaluation',
    desc: 'Standardized testing of memory, attention, processing speed, language, and executive function. Results are compared to age-matched norms.',
  },
  {
    title: 'Diagnosis & explanation',
    desc: "A clear explanation of what your results mean, what's causing your symptoms, and what is reversible versus what requires monitoring.",
  },
  {
    title: 'Personalized treatment plan',
    desc: 'A tailored plan that may include cognitive remediation, lifestyle modifications, medication management, or referral to our Brain Health & Wellness program.',
  },
  {
    title: 'Ongoing monitoring',
    desc: 'Regular evaluations to track your progress and adjust the treatment plan as your condition evolves.',
  },
]

export default function MemoryBrainFogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
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
              Cognitive health specialists · Insurance accepted
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Memory loss & brain fog treatment
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              If your memory feels unreliable, your thinking feels cloudy, or you have not
              been the same since a COVID infection — you are not imagining it, and you do not
              have to accept it. Our specialists can find the cause and build a plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Link
                href="/consults"
                className="inline-flex items-center gap-2 bg-cognifica-cta text-white px-7 py-3 font-bold uppercase tracking-wider text-sm hover:bg-blue-400 transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                Book an evaluation →
              </Link>
              <a
                href="tel:9149483008"
                className="inline-flex items-center gap-2 text-cognifica-submit font-bold text-sm py-3 hover:underline"
              >
                Call (914) 948 3008
              </a>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Conditions covered */}
      <section className="bg-white py-16" aria-labelledby="conditions-heading">
        <div className="max-w-5xl mx-auto px-4">
          <h2
            id="conditions-heading"
            className="font-heading text-3xl font-bold text-cognifica-indigo mb-3"
          >
            Conditions we evaluate and treat
          </h2>
          <p className="text-gray-600 mb-10 max-w-xl">
            Cognitive symptoms have many possible causes. Our evaluation process is designed
            to identify exactly what is affecting your thinking and memory.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {CONDITIONS_COVERED.map((c) => (
              <div key={c.title} className="border border-stone-200 p-6">
                <h3 className="font-bold text-cognifica-indigo mb-2 text-sm">{c.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-stone-50 py-16" aria-labelledby="expect-heading">
        <div className="max-w-5xl mx-auto px-4">
          <h2
            id="expect-heading"
            className="font-heading text-3xl font-bold text-cognifica-indigo mb-10"
          >
            What to expect at Cognifica Health
          </h2>
          <div className="space-y-6">
            {WHAT_TO_EXPECT.map((step, i) => (
              <div key={step.title} className="flex gap-6 items-start">
                <span
                  className="flex-shrink-0 w-10 h-10 bg-cognifica-indigo text-white flex items-center justify-center font-heading font-bold text-lg"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div className="pt-1">
                  <h3 className="font-bold text-cognifica-indigo mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our team */}
      <section className="bg-cognifica-indigo text-white py-14">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold mb-4">
              Specialists, not generalists
            </h2>
            <p className="text-white/75 text-sm leading-relaxed mb-4">
              Your evaluation is conducted by a team led by Dr. John Abrahams, MD
              (neurosurgeon) and Dr. Susan Mogan, PMHNP (psychiatric mental health nurse
              practitioner). Both bring decades of neurological and psychiatric expertise
              to the evaluation and treatment process.
            </p>
            <p className="text-white/75 text-sm leading-relaxed">
              We do not offer one-size-fits-all solutions. Every patient leaves with a
              clear diagnosis, a written report, and a personalized plan.
            </p>
            <Link
              href="/team"
              className="mt-5 inline-flex items-center gap-2 text-cognifica-submit font-bold text-sm hover:underline focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              Meet the team →
            </Link>
          </div>
          <div className="bg-white/10 p-7">
            <p className="font-bold text-cognifica-submit uppercase tracking-wider text-xs mb-4">
              Insurance & locations
            </p>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              We accept Medicare, Tricare, Workers Compensation, No-Fault, and most commercial
              insurance plans.
            </p>
            <ul className="text-white/70 text-sm space-y-2 list-none mb-5">
              <li>West Harrison, NY</li>
              <li>Aquebogue, NY</li>
              <li>Stamford, CT</li>
              <li>Virtual evaluations available</li>
            </ul>
            <a
              href="tel:9149483008"
              className="inline-flex items-center gap-2 bg-cognifica-submit text-white px-6 py-3 font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Call (914) 948 3008
            </a>
          </div>
        </div>
      </section>

      {/* Appointment form */}
      <section className="bg-stone-50 py-16" aria-labelledby="memory-appt">
        <div className="max-w-2xl mx-auto px-4">
          <h2
            id="memory-appt"
            className="font-heading text-3xl font-bold text-cognifica-indigo mb-3"
          >
            Request a cognitive evaluation
          </h2>
          <p className="text-gray-600 mb-8">
            Fill out the form below and our team will contact you within one business day.
          </p>
          <AppointmentForm />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-cognifica-indigo text-white py-10">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-heading text-xl font-bold">
            Memory concerns deserve expert attention.
          </p>
          <a
            href="tel:9149483008"
            className="inline-flex items-center gap-2 bg-cognifica-submit text-white px-7 py-3 font-bold uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
          >
            Call (914) 948 3008
          </a>
        </div>
      </section>
    </>
  )
}
