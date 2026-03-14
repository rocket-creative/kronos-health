import type { Metadata } from 'next'
import Link from 'next/link'
import { buildBreadcrumbSchema } from '@/lib/metadata'
import { AppointmentForm } from '@/components/AppointmentForm'
import { TrustBar } from '@/components/TrustBar'

export const metadata: Metadata = {
  title: 'Neuropsychological Testing Westchester, Long Island, CT | Cognifica',
  description:
    'Comprehensive neuropsychological evaluations in Westchester NY, Long Island, and Stamford CT. Memory, attention, and cognitive testing. Insurance accepted. Board certified specialists.',
  alternates: { canonical: 'https://cognifica.health/neuropsychological-testing' },
  openGraph: {
    title: 'Neuropsychological Testing Westchester, Long Island, CT | Cognifica',
    description:
      'Comprehensive neuropsychological evaluations in Westchester NY, Long Island, and Stamford CT. Board certified specialists.',
    url: 'https://cognifica.health/neuropsychological-testing',
    siteName: 'Cognifica Health',
    type: 'website',
    images: [{ url: 'https://cognifica.health/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neuropsychological Testing Westchester, Long Island, CT',
    description:
      'Comprehensive neuropsychological evaluations for memory, attention, and cognitive function. Westchester, Long Island, Stamford CT.',
    images: ['https://cognifica.health/og-image.jpg'],
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://cognifica.health' },
  {
    name: 'Neuropsychological Testing',
    url: 'https://cognifica.health/neuropsychological-testing',
  },
])

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a neuropsychological evaluation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A neuropsychological evaluation is a comprehensive assessment of cognitive function including memory, attention, processing speed, executive function, language, and visuospatial abilities. It uses standardized tests to compare your performance to age matched norms and identify patterns that point toward specific diagnoses.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a neuropsychological evaluation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A full neuropsychological evaluation typically takes 3 to 6 hours, including a clinical interview (60 to 90 minutes) and standardized testing (2 to 4 hours). Breaks are provided throughout the testing session.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is neuropsychological testing covered by insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, neuropsychological testing is covered by Medicare, Tricare, Workers Compensation, No Fault insurance, and most commercial health plans. Our team handles insurance verification and prior authorization.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who should get a neuropsychological evaluation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Neuropsychological evaluations are appropriate for anyone experiencing memory concerns, cognitive decline, brain injury recovery, post COVID cognitive symptoms, or mental health conditions affecting thinking. They are also used for legal and insurance documentation in disability, Workers Compensation, and personal injury cases.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens after the evaluation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'After testing, you will receive a feedback session to review your results in plain language, followed by a comprehensive written report within 2 to 3 weeks. The report includes your scores, diagnosis, and specific treatment and accommodation recommendations.',
      },
    },
  ],
}

const WHO_NEEDS_TESTING = [
  {
    title: 'Memory concerns & cognitive decline',
    desc: 'Anyone experiencing memory loss, confusion, or significant changes in thinking that may indicate early dementia, MCI, or other cognitive conditions.',
  },
  {
    title: 'After brain injury',
    desc: 'Patients recovering from TBI, stroke, or brain tumor who need a baseline assessment and ongoing cognitive monitoring.',
  },
  {
    title: 'Post-COVID cognitive symptoms',
    desc: 'Patients experiencing persistent cognitive symptoms following COVID-19 infection who need objective measurement and a treatment roadmap.',
  },
  {
    title: 'Mental health conditions',
    desc: 'Patients with depression, anxiety, PTSD, or ADHD where cognitive testing helps differentiate diagnoses and guide treatment decisions.',
  },
  {
    title: 'Legal & insurance documentation',
    desc: 'Neuropsychological reports are admissible in Workers Compensation, No-Fault, disability, and personal injury cases as objective evidence of cognitive impairment.',
  },
  {
    title: 'Academic & vocational planning',
    desc: 'Students and professionals seeking documentation of cognitive strengths and weaknesses for academic accommodations or vocational rehabilitation.',
  },
]

const DOMAINS_TESTED = [
  { domain: 'Memory', detail: 'Immediate and delayed recall, verbal and visual memory, recognition' },
  { domain: 'Attention', detail: 'Sustained, selective, and divided attention; working memory' },
  { domain: 'Processing speed', detail: 'Speed of mental operations and reaction time' },
  { domain: 'Executive function', detail: 'Planning, problem-solving, mental flexibility, inhibition' },
  { domain: 'Language', detail: 'Naming, fluency, comprehension, reading, and writing' },
  { domain: 'Visuospatial', detail: 'Visual perception, construction, and spatial reasoning' },
  { domain: 'Mood & behavior', detail: 'Depression, anxiety, PTSD, and behavioral regulation' },
  { domain: 'Intelligence', detail: 'General cognitive ability and academic achievement' },
]

const WHAT_HAPPENS = [
  {
    title: 'Pre-evaluation intake',
    desc: 'Before your evaluation, our clinical coordinator reviews your medical history, prior test results, medications, and specific concerns.',
  },
  {
    title: 'Clinical interview (60 to 90 minutes)',
    desc: 'A detailed conversation about your symptoms, daily functioning, medical history, and life history with our clinician.',
  },
  {
    title: 'Standardized testing (2 to 4 hours)',
    desc: 'A battery of validated neuropsychological tests administered by a trained examiner. Tests may be paper-and-pencil or computer-based. Breaks are provided.',
  },
  {
    title: 'Scoring & interpretation',
    desc: 'Your results are scored and compared to age-, education-, and gender-matched normative data. The clinician identifies patterns that point toward specific diagnoses.',
  },
  {
    title: 'Feedback session',
    desc: 'A meeting to review your results in plain language, explain what the findings mean, and answer all your questions.',
  },
  {
    title: 'Written report',
    desc: 'A comprehensive written report is provided within 2 to 3 weeks. The report includes your scores, diagnosis, and specific treatment and accommodation recommendations.',
  },
]

export default function NeuropsychologicalTestingPage() {
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
              Comprehensive evaluation · Written reports · Insurance accepted
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Neuropsychological testing & evaluations
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              A comprehensive neuropsychological evaluation is the gold standard for
              understanding how your brain is functioning. It provides an objective,
              detailed picture of memory, thinking, and behavior — and forms the foundation
              of every effective treatment plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Link
                href="/consults"
                className="inline-flex items-center gap-2 bg-cognifica-cta text-white px-7 py-3 font-bold uppercase tracking-wider text-sm hover:bg-blue-400 transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                Schedule an evaluation →
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

      {/* Who needs it */}
      <section className="bg-white py-16" aria-labelledby="who-needs-heading">
        <div className="max-w-5xl mx-auto px-4">
          <h2
            id="who-needs-heading"
            className="font-heading text-3xl font-bold text-cognifica-indigo mb-3"
          >
            Who should get a neuropsychological evaluation?
          </h2>
          <p className="text-gray-600 mb-10 max-w-xl">
            An evaluation is appropriate whenever a clear, objective understanding of
            cognitive function is needed for diagnosis, treatment, or documentation.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {WHO_NEEDS_TESTING.map((item) => (
              <div key={item.title} className="border border-stone-200 p-6">
                <h3 className="font-bold text-cognifica-indigo text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains tested */}
      <section className="bg-stone-50 py-16" aria-labelledby="domains-heading">
        <div className="max-w-5xl mx-auto px-4">
          <h2
            id="domains-heading"
            className="font-heading text-3xl font-bold text-cognifica-indigo mb-3"
          >
            What the evaluation measures
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl">
            A full evaluation takes 3 to 6 hours and covers all major cognitive domains.
            It is the only way to build a complete picture of brain function across
            multiple systems simultaneously.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {DOMAINS_TESTED.map((d) => (
              <div key={d.domain} className="bg-white border border-stone-200 p-5">
                <p className="font-bold text-cognifica-indigo text-sm mb-1">{d.domain}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{d.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What happens step by step */}
      <section className="bg-white py-16" aria-labelledby="process-heading">
        <div className="max-w-5xl mx-auto px-4">
          <h2
            id="process-heading"
            className="font-heading text-3xl font-bold text-cognifica-indigo mb-10"
          >
            What happens during an evaluation
          </h2>
          <div className="space-y-6">
            {WHAT_HAPPENS.map((step, i) => (
              <div key={step.title} className="flex gap-6 items-start border-b border-stone-100 pb-6">
                <span
                  className="flex-shrink-0 w-10 h-10 bg-cognifica-indigo text-white flex items-center justify-center font-heading font-bold text-lg"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-cognifica-indigo mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal/insurance highlight */}
      <section className="bg-cognifica-indigo text-white py-14">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold mb-4">
              Evaluations for legal & insurance purposes
            </h2>
            <p className="text-white/75 text-sm leading-relaxed mb-4">
              Neuropsychological evaluations from Cognifica Health are used in Workers
              Compensation cases, No-Fault insurance claims, disability determinations,
              and personal injury litigation.
            </p>
            <p className="text-white/75 text-sm leading-relaxed">
              Our reports are written to meet legal and insurance documentation standards.
              Dr. Abrahams has extensive experience as an expert witness in neurological
              injury cases.
            </p>
          </div>
          <div className="bg-white/10 p-7">
            <p className="font-bold text-cognifica-submit uppercase tracking-wider text-xs mb-4">
              Insurance accepted
            </p>
            <ul className="text-white/75 text-sm space-y-2 list-none mb-5">
              <li>Medicare</li>
              <li>Tricare</li>
              <li>Workers Compensation</li>
              <li>No-Fault insurance</li>
              <li>Most commercial plans</li>
            </ul>
            <p className="text-white/60 text-xs mb-5">
              Virtual evaluations available for qualifying services.
            </p>
            <a
              href="tel:9149483008"
              className="inline-flex items-center gap-2 bg-cognifica-submit text-white px-6 py-3 font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Call to verify your coverage
            </a>
          </div>
        </div>
      </section>

      {/* Appointment form */}
      <section className="bg-stone-50 py-16" aria-labelledby="neuro-appt">
        <div className="max-w-2xl mx-auto px-4">
          <h2
            id="neuro-appt"
            className="font-heading text-3xl font-bold text-cognifica-indigo mb-3"
          >
            Schedule a neuropsychological evaluation
          </h2>
          <p className="text-gray-600 mb-8">
            Fill out the form below and our team will contact you within one business day to
            confirm your appointment and provide preparation instructions.
          </p>
          <AppointmentForm />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-cognifica-indigo text-white py-10">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-heading text-xl font-bold">
            Answers start with an evaluation.
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
