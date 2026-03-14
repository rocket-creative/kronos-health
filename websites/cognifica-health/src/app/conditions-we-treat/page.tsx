import type { Metadata } from 'next'
import Link from 'next/link'
import { buildBreadcrumbSchema } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Conditions We Treat | Cognifica Health',
  description:
    'Cognifica Health treats neurological, cognitive, and psychiatric conditions including TBI, dementia, depression, PTSD, anxiety, stroke, epilepsy, and post-COVID brain fog.',
  alternates: { canonical: 'https://cognifica.health/conditions-we-treat' },
  openGraph: {
    title: 'Conditions We Treat | Cognifica Health',
    description:
      'Comprehensive care for neurological, cognitive, and psychiatric conditions at three NY and CT locations.',
    url: 'https://cognifica.health/conditions-we-treat',
    siteName: 'Cognifica Health',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conditions We Treat | Cognifica Health',
    description:
      'Neurological, cognitive, and psychiatric conditions treated at Cognifica Health.',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://cognifica.health' },
  { name: 'Conditions We Treat', url: 'https://cognifica.health/conditions-we-treat' },
])

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does Cognifica Health treat traumatic brain injury?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Cognifica Health offers structured 12-week recovery programs for mild to severe traumatic brain injury, including post-concussion syndrome and sports-related TBI.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you treat post-COVID brain fog?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our team specializes in evaluating and treating cognitive symptoms following COVID-19 infection, including memory problems, concentration difficulties, and mental fatigue.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you treat depression without medication?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TMS (Transcranial Magnetic Stimulation) therapy is an FDA-cleared, non-medication treatment for depression available at Cognifica Health. It is covered by Medicare and many insurance plans.',
      },
    },
  ],
}

const CONDITION_CATEGORIES = [
  {
    category: 'Neurological',
    conditions: [
      {
        name: 'Mild concussion',
        desc: 'Evaluation and recovery support for concussions, including return-to-activity planning.',
      },
      {
        name: 'Traumatic brain injury (TBI)',
        desc: 'Structured rehabilitation programs for mild, moderate, and severe TBI.',
      },
      {
        name: 'Stroke',
        desc: 'Cognitive and functional assessment following stroke to guide recovery.',
      },
      {
        name: 'Epilepsy & seizure disorders',
        desc: 'Neuropsychological evaluation of cognitive effects of epilepsy and seizure activity.',
      },
      {
        name: 'Brain tumor',
        desc: 'Pre- and post-surgical cognitive assessment for patients with brain tumors.',
      },
      {
        name: 'Hydrocephalus',
        desc: 'Cognitive evaluation and monitoring for patients with hydrocephalus.',
      },
      {
        name: 'Multiple sclerosis (MS)',
        desc: 'Neuropsychological assessment of cognitive symptoms associated with MS.',
      },
      {
        name: 'Metal poisoning',
        desc: 'Evaluation of cognitive and neurological effects of heavy metal toxicity.',
      },
    ],
  },
  {
    category: 'Cognitive & memory',
    conditions: [
      {
        name: 'Cognitive impairment',
        desc: 'Evaluation and treatment planning for mild to moderate cognitive decline.',
      },
      {
        name: 'Dementia & Alzheimer\'s disease',
        desc: 'Comprehensive neuropsychological testing to diagnose and stage dementia.',
      },
      {
        name: 'Post-COVID brain fog',
        desc: 'Cognitive rehabilitation and treatment for long COVID neurological symptoms.',
      },
    ],
  },
  {
    category: 'Mental health',
    conditions: [
      {
        name: 'Depression',
        desc: 'Evaluation and treatment including TMS therapy, an FDA-cleared non-medication option.',
      },
      {
        name: 'PTSD',
        desc: 'Trauma informed neuropsychological care and clinically validated treatment planning.',
      },
      {
        name: 'Anxiety disorders',
        desc: 'Comprehensive psychiatric and neuropsychological evaluation for anxiety.',
      },
      {
        name: 'Mental illness',
        desc: 'Board-certified psychiatric care for a range of mental health conditions.',
      },
    ],
  },
  {
    category: 'Other conditions',
    conditions: [
      {
        name: 'Cancer-related cognitive effects',
        desc: '"Chemo brain" and other cognitive changes associated with cancer treatment.',
      },
      {
        name: 'Cardiovascular cognitive effects',
        desc: 'Cognitive evaluation following cardiac events or vascular conditions.',
      },
    ],
  },
]

export default function ConditionsPage() {
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
              <li className="text-white">Conditions we treat</li>
            </ol>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">Conditions we treat</h1>
          <p className="mt-4 text-white/75 max-w-xl text-lg">
            Cognifica Health provides expert evaluation and treatment across the full spectrum
            of neurological, cognitive, and psychiatric conditions.
          </p>
        </div>
      </section>

      {/* Conditions grid by category */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 space-y-14">
          {CONDITION_CATEGORIES.map((cat) => (
            <div key={cat.category}>
              <h2 className="font-heading text-2xl font-bold text-cognifica-indigo mb-6 pb-3 border-b border-stone-200">
                {cat.category}
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cat.conditions.map((cond) => (
                  <div
                    key={cond.name}
                    className="bg-stone-50 border border-stone-200 p-5"
                  >
                    <h3 className="font-bold text-cognifica-indigo text-sm mb-1">
                      {cond.name}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{cond.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cognifica-indigo text-white py-14">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-heading text-2xl font-bold mb-2">
              Not sure if we treat your condition?
            </h2>
            <p className="text-white/75">
              Call us at{' '}
              <a href="tel:9149483008" className="text-cognifica-submit font-bold hover:underline">
                (914) 948 3008
              </a>{' '}
              and our team will help you determine the right next step.
            </p>
          </div>
          <Link
            href="/consults"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-cognifica-cta text-white px-7 py-3 font-bold uppercase tracking-wider text-sm hover:bg-blue-400 transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
          >
            Book a consultation →
          </Link>
        </div>
      </section>
    </>
  )
}
