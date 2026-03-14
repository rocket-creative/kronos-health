import type { Metadata } from 'next'
import Link from 'next/link'
import { buildBreadcrumbSchema } from '@/lib/metadata'
import { AppointmentForm } from '@/components/AppointmentForm'
import { TrustBar } from '@/components/TrustBar'

export const metadata: Metadata = {
  title: 'Concussion Treatment Westchester, Long Island, CT | TBI Recovery',
  description:
    'Concussion and TBI treatment in Westchester NY, Long Island, and Stamford CT. Structured 12 week recovery programs with neuropsychological evaluation. Board certified specialists.',
  alternates: { canonical: 'https://cognifica.health/concussion-tbi' },
  openGraph: {
    title: 'Concussion Treatment Westchester, Long Island, CT | TBI Recovery',
    description:
      'Concussion and TBI treatment in Westchester NY, Long Island, and Stamford CT. Structured recovery programs with board certified specialists.',
    url: 'https://cognifica.health/concussion-tbi',
    siteName: 'Cognifica Health',
    type: 'website',
    images: [{ url: 'https://cognifica.health/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Concussion Treatment Westchester, Long Island, CT',
    description:
      'Structured 12 week recovery programs for concussion and TBI. Westchester, Long Island, Stamford CT.',
    images: ['https://cognifica.health/og-image.jpg'],
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://cognifica.health' },
  { name: 'Concussion & TBI', url: 'https://cognifica.health/concussion-tbi' },
])

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a concussion recovery program?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our 12 week concussion recovery program is a structured, clinically validated approach to traumatic brain injury rehabilitation. It includes neuropsychological evaluation, cognitive remediation, symptom management, and gradual return to activity with formal clearance.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does concussion recovery take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most patients complete our structured program in 12 weeks. The program includes evaluation and baseline (weeks 1 to 2), active rehabilitation (weeks 3 to 6), functional integration (weeks 7 to 10), and re evaluation with return to activity clearance (weeks 11 to 12).',
      },
    },
    {
      '@type': 'Question',
      name: 'Is concussion treatment covered by insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we accept Workers Compensation, Tricare, No Fault insurance, Medicare, and most commercial health plans. Our team handles insurance verification and prior authorization.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the symptoms of a concussion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common concussion symptoms include headaches, memory problems, difficulty concentrating, sensitivity to light or noise, dizziness, fatigue, sleep disturbances, mood changes, slowed thinking, and anxiety. Symptoms can appear immediately or days after the injury.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is post concussion syndrome?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Post concussion syndrome occurs when concussion symptoms persist beyond the typical recovery period, usually longer than 3 months. Early intervention with structured rehabilitation produces significantly better outcomes than waiting for symptoms to resolve on their own.',
      },
    },
  ],
}

const SYMPTOMS = [
  'Headaches or head pressure',
  'Memory problems and forgetfulness',
  'Difficulty concentrating',
  'Sensitivity to light or noise',
  'Dizziness or balance problems',
  'Fatigue and sleep disturbances',
  'Mood changes, irritability, or depression',
  'Slowed thinking or mental fogginess',
  'Word-finding difficulties',
  'Anxiety following the injury',
]

const PROGRAM_WEEKS = [
  {
    phase: 'Weeks 1 to 2',
    title: 'Evaluation & baseline',
    desc: 'Comprehensive neuropsychological evaluation establishes your cognitive baseline. We assess memory, attention, processing speed, and mood. Neuroimaging review and symptom inventory.',
  },
  {
    phase: 'Weeks 3 to 6',
    title: 'Active rehabilitation',
    desc: 'Structured cognitive remediation exercises targeting your specific deficits. Symptom management strategies, sleep hygiene guidance, and graded physical activity protocols.',
  },
  {
    phase: 'Weeks 7 to 10',
    title: 'Functional integration',
    desc: 'Gradual return to demanding cognitive tasks — work, school, or sport — with monitoring. Vestibular and visual therapy referrals as needed.',
  },
  {
    phase: 'Weeks 11 to 12',
    title: 'Re-evaluation & return to activity',
    desc: 'Formal re-evaluation compared to your baseline. Written return-to-activity clearance or personalized recommendations for continued care.',
  },
]

const WHO_WE_TREAT = [
  'Sports-related concussions (athletes of all ages)',
  'Motor vehicle accident TBI',
  'Work-related head injuries and Workers Compensation cases',
  'Military service members and veterans (Tricare accepted)',
  'Slip and fall injuries',
  'Patients with persistent post-concussion syndrome',
  'Patients referred by neurosurgeons, neurologists, or primary care physicians',
]

export default function ConcussionTBIPage() {
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
              Workers Comp · Tricare · No-Fault accepted
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Concussion & TBI recovery programs
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              A structured, clinically validated 12 week recovery program for mild to severe
              traumatic brain injury. Supervised by a neurosurgeon and psychiatric nurse
              practitioner. Built around your specific injury and recovery goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Link
                href="/consults"
                className="inline-flex items-center gap-2 bg-cognifica-cta text-white px-7 py-3 font-bold uppercase tracking-wider text-sm hover:bg-blue-400 transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                Start your recovery →
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

      {/* Symptoms */}
      <section className="bg-white py-16" aria-labelledby="symptoms-heading">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2
              id="symptoms-heading"
              className="font-heading text-3xl font-bold text-cognifica-indigo mb-4"
            >
              Recognizing concussion & TBI symptoms
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              Symptoms of brain injury can appear immediately after the incident or days
              later. Many patients do not connect their symptoms to a prior head injury.
              If you recognize any of the following, a neuropsychological evaluation is the
              right first step.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Untreated or undertreated concussion can lead to persistent post-concussion
              syndrome, increased risk of future injury, and lasting cognitive changes.
              Early intervention produces significantly better outcomes.
            </p>
          </div>
          <div>
            <ul className="grid grid-cols-2 gap-3 list-none">
              {SYMPTOMS.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-gray-700">
                  <span
                    className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cognifica-submit mt-2"
                    aria-hidden="true"
                  />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 12-week program */}
      <section className="bg-stone-50 py-16" aria-labelledby="program-heading">
        <div className="max-w-5xl mx-auto px-4">
          <h2
            id="program-heading"
            className="font-heading text-3xl font-bold text-cognifica-indigo mb-3"
          >
            The 12-week recovery program
          </h2>
          <p className="text-gray-600 mb-10 max-w-xl">
            Our structured program is grounded in clinical research on concussion recovery.
            Each phase builds on the last, with formal re-evaluation at program completion.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {PROGRAM_WEEKS.map((phase) => (
              <div key={phase.phase} className="bg-white border border-stone-200 p-7">
                <p className="text-xs font-bold text-cognifica-accent uppercase tracking-wider mb-1">
                  {phase.phase}
                </p>
                <h3 className="font-heading text-xl font-bold text-cognifica-indigo mb-3">
                  {phase.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we treat */}
      <section className="bg-cognifica-indigo text-white py-14" aria-labelledby="who-we-treat">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2
              id="who-we-treat"
              className="font-heading text-3xl font-bold mb-4"
            >
              Who we treat
            </h2>
            <p className="text-white/75 text-sm leading-relaxed mb-6">
              Cognifica Health treats patients across the full spectrum of traumatic brain
              injury, from first-time sports concussions to complex multi-injury presentations.
              We have deep expertise in medico-legal cases and accept Workers Compensation,
              No-Fault, and Tricare insurance.
            </p>
            <ul className="space-y-3 list-none">
              {WHO_WE_TREAT.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                  <span
                    className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cognifica-submit mt-2"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/10 p-7">
            <p className="font-bold text-cognifica-submit uppercase tracking-wider text-xs mb-4">
              Supervised by experts
            </p>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Dr. John M. Abrahams, MD is a board-certified neurosurgeon with decades of
              experience treating TBI. He founded the Westchester Neuroscience Research
              Foundation and has authored more than 30 peer-reviewed publications on
              neurological care.
            </p>
            <p className="text-white/80 text-sm leading-relaxed mb-5">
              All patients have access to comprehensive neuropsychological evaluation, written
              reports for legal and insurance purposes, and return-to-activity clearance letters.
            </p>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-cognifica-submit font-bold text-sm hover:underline"
            >
              Meet the team →
            </Link>
          </div>
        </div>
      </section>

      {/* Appointment form */}
      <section className="bg-stone-50 py-16" aria-labelledby="tbi-appt">
        <div className="max-w-2xl mx-auto px-4">
          <h2
            id="tbi-appt"
            className="font-heading text-3xl font-bold text-cognifica-indigo mb-3"
          >
            Start your recovery program
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
            TBI recovery starts with the right evaluation.
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
