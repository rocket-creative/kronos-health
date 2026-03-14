import type { Metadata } from 'next'
import Link from 'next/link'
import { buildBreadcrumbSchema } from '@/lib/metadata'
import { AppointmentForm } from '@/components/AppointmentForm'

export const metadata: Metadata = {
  title: 'Brain Health & Wellness Program | Cognifica Health',
  description:
    'A personalized brain health program combining cognitive evaluations, computer based remediation, neurofeedback, EEG, and daily tracking. No commitment required.',
  alternates: { canonical: 'https://cognifica.health/brain-health-and-wellness' },
  openGraph: {
    title: 'Brain Health & Wellness Program | Cognifica Health',
    description:
      'Personalized brain health program with cognitive remediation, neurofeedback, and proprietary wellness software. Three NY and CT locations.',
    url: 'https://cognifica.health/brain-health-and-wellness',
    siteName: 'Cognifica Health',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brain Health & Wellness Program | Cognifica Health',
    description:
      'Personalized brain wellness program with cognitive remediation, EEG, and neurofeedback.',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://cognifica.health' },
  {
    name: 'Brain Health & Wellness',
    url: 'https://cognifica.health/brain-health-and-wellness',
  },
])

const PROGRAM_COMPONENTS = [
  {
    label: 'Cognitive & emotional evaluations',
    detail:
      'Comprehensive assessments conducted every 4 months to track your cognitive performance and emotional health over time. Evaluations measure memory, attention, processing speed, mood, and executive function.',
  },
  {
    label: 'Initial EEG',
    detail:
      'A baseline electroencephalogram (EEG) maps your brain activity patterns and identifies areas that may benefit from targeted intervention or neurofeedback training.',
  },
  {
    label: 'Computer-based cognitive remediation',
    detail:
      'Structured exercises completed 2 to 3 times per week using validated software that targets specific cognitive domains including working memory, attention, and processing speed.',
  },
  {
    label: 'Daily tracking software',
    detail:
      'Proprietary wellness software allows you and your care team to monitor daily mood, sleep, cognitive symptoms, and lifestyle factors in real time — giving your clinician objective data between appointments.',
  },
  {
    label: 'Personalized lifestyle plans',
    detail:
      'Your plan integrates clinically validated recommendations for nutrition, sleep, exercise, stress management, and cognitive engagement — customized to your baseline evaluation results.',
  },
  {
    label: 'Quarterly neurofeedback assessments',
    detail:
      'Every three months, your brain activity is reassessed and your neurofeedback protocol is adjusted based on your progress. This ensures the program evolves as your brain health improves.',
  },
]

const KEY_FEATURES = [
  {
    title: 'No commitment required',
    desc: "You aren't locked into a multi-year program. The Brain Health & Wellness program is designed to be flexible — patients engage at the level that works for their schedule and goals.",
  },
  {
    title: 'Proprietary wellness software',
    desc: 'Our custom daily tracking platform gives you and your clinical team continuous visibility into your cognitive and emotional health between formal evaluations.',
  },
  {
    title: 'Multidisciplinary oversight',
    desc: 'Your program is supervised by Dr. Abrahams and Dr. Mogan, who review your data and adjust your treatment plan at each evaluation cycle.',
  },
]

export default function BrainHealthPage() {
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
              <li className="text-white">Brain health & wellness</li>
            </ol>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">
            Brain health & wellness program
          </h1>
          <p className="mt-4 text-white/75 max-w-xl text-lg">
            A personalized program designed to optimize your cognitive health,
            improve brain function, and support lasting wellness.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
            <Link
              href="/consults"
              className="inline-flex items-center gap-2 bg-cognifica-cta text-white px-7 py-3 font-bold uppercase tracking-wider text-sm hover:bg-blue-400 transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              Start the program →
            </Link>
            <a
              href="tel:9149483008"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-bold py-3"
            >
              Questions? Call (914) 948 3008
            </a>
          </div>
        </div>
      </section>

      {/* Program overview */}
      <section className="bg-white py-16" aria-labelledby="program-heading">
        <div className="max-w-5xl mx-auto px-4">
          <h2
            id="program-heading"
            className="font-heading text-3xl font-bold text-cognifica-indigo mb-3"
          >
            What the program includes
          </h2>
          <p className="text-gray-600 mb-10 max-w-xl">
            Each component works together to give you a comprehensive, measurable picture of
            your brain health and a clear roadmap for improvement.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {PROGRAM_COMPONENTS.map((comp, i) => (
              <div
                key={comp.label}
                className="border border-stone-200 p-6 flex gap-4"
              >
                <span
                  className="flex-shrink-0 w-8 h-8 bg-cognifica-indigo text-white flex items-center justify-center text-sm font-bold"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-cognifica-indigo mb-2">{comp.label}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{comp.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key features */}
      <section className="bg-stone-50 py-16" aria-labelledby="features-heading">
        <div className="max-w-5xl mx-auto px-4">
          <h2
            id="features-heading"
            className="font-heading text-3xl font-bold text-cognifica-indigo mb-10"
          >
            What makes this program different
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {KEY_FEATURES.map((f) => (
              <div key={f.title} className="bg-white p-7 border border-stone-200">
                <div className="w-6 h-1 bg-cognifica-submit mb-4" aria-hidden="true" />
                <h3 className="font-heading text-xl font-bold text-cognifica-indigo mb-3">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment form */}
      <section className="bg-white py-16" aria-labelledby="appt-heading">
        <div className="max-w-2xl mx-auto px-4">
          <h2
            id="appt-heading"
            className="font-heading text-3xl font-bold text-cognifica-indigo mb-3"
          >
            Enroll in the program
          </h2>
          <p className="text-gray-600 mb-8">
            Fill out the form below and our team will contact you within one business day to
            discuss next steps.
          </p>
          <AppointmentForm />
        </div>
      </section>
    </>
  )
}
