import type { Metadata } from 'next'
import { buildBreadcrumbSchema } from '@/lib/metadata'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Team | Cognifica Health',
  description:
    'Meet the multidisciplinary team at Cognifica Health — neurosurgeon Dr. John Abrahams, PMHNP Dr. Susan Mogan, and Director of Operations Juliet Mott.',
  alternates: { canonical: 'https://cognifica.health/team' },
  openGraph: {
    title: 'Our Team | Cognifica Health',
    description:
      'Meet the multidisciplinary team at Cognifica Health — neurosurgeon, psychiatric nurse practitioner, and experienced care coordinators.',
    url: 'https://cognifica.health/team',
    siteName: 'Cognifica Health',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Team | Cognifica Health',
    description: 'Meet the Cognifica Health team of cognitive health specialists.',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://cognifica.health' },
  { name: 'Our Team', url: 'https://cognifica.health/team' },
])

const TEAM = [
  {
    name: 'Dr. John M. Abrahams, MD',
    role: 'Neurosurgeon, Founder',
    bio: [
      'Dr. John M. Abrahams is a board-certified neurosurgeon and the founder of Cognifica Health. He serves as President of the New York Brain and Spine Surgery (NYBASS) group and Co-Director of the Spine Section at Northern Westchester Hospital.',
      'In 2009, Dr. Abrahams founded the Westchester Neuroscience Research Foundation, a nonprofit dedicated to advancing research in neurological disease and brain health. He has authored more than 30 peer-reviewed publications and holds multiple patents in neurotechnology.',
      'Dr. Abrahams is the founder and driving force behind three biomedical companies — EndoMedix, Osteomedix, and DTX Medical — each focused on developing minimally invasive technologies for neurological and spinal conditions.',
      'His clinical expertise spans complex spinal surgery, traumatic brain injury, cognitive rehabilitation, and brain health optimization. He brings this rare combination of surgical precision and longitudinal patient care to every aspect of the Cognifica Health program.',
    ],
  },
  {
    name: 'Dr. Susan Mogan, PMHNP',
    role: 'Psychiatric Mental Health Nurse Practitioner',
    bio: [
      'Dr. Susan Mogan is a board-certified Psychiatric Mental Health Nurse Practitioner (PMHNP) with a Doctor of Nursing Practice (DNP). She holds additional board certifications in adult medicine, hospice and palliative care, and pain management.',
      'Dr. Mogan brings more than 30 years of clinical experience to Cognifica Health, specializing in psychiatric evaluation, medication management, and integrated mental health care for patients with neurological and cognitive conditions.',
      'Her educational background includes a BA in Economics from Stony Brook University, a BS in Nursing from Pace University, and an MS in Nursing from Western Connecticut State University, followed by her doctoral studies.',
      'Dr. Mogan works closely with Dr. Abrahams to deliver comprehensive, coordinated care for patients dealing with depression, anxiety, PTSD, and mood disorders alongside cognitive and neurological challenges.',
    ],
  },
  {
    name: 'Juliet Mott',
    role: 'Director of Operations',
    bio: [
      'Juliet Mott has worked alongside Dr. Abrahams since 2004, building a deep expertise in neurological practice administration, patient coordination, and program development.',
      'In her role as Director of Operations and Program Coordinator, Juliet oversees the day-to-day clinical operations of all three Cognifica Health locations. She ensures every patient receives a seamless, responsive experience from first contact through ongoing care.',
      'Juliet is the connective tissue of the Cognifica Health team — the person patients and referring physicians work with directly to navigate scheduling, insurance verification, and care coordination across the practice.',
    ],
  },
]

export default function TeamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Page header */}
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
              <li className="text-white">Our team</li>
            </ol>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">Our team</h1>
          <p className="mt-4 text-white/75 max-w-xl text-lg">
            A multidisciplinary group of specialists working together to deliver
            comprehensive cognitive health care.
          </p>
        </div>
      </section>

      {/* Team bios */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 space-y-16">
          {TEAM.map((member, i) => (
            <article
              key={member.name}
              className={`grid md:grid-cols-5 gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Avatar placeholder */}
              <div className="md:col-span-1 flex-shrink-0">
                <div
                  className="w-24 h-24 md:w-full md:aspect-square bg-cognifica-indigo/10 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="text-cognifica-indigo font-heading text-3xl font-bold">
                    {member.name.split(' ').find((w) => w.match(/^[A-Z]/))?.charAt(0)}
                    {member.name.split(' ').filter((w) => w.match(/^[A-Z]/)).pop()?.charAt(0)}
                  </span>
                </div>
              </div>
              <div className="md:col-span-4">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-cognifica-indigo mb-1">
                  {member.name}
                </h2>
                <p className="text-cognifica-accent font-bold text-sm uppercase tracking-wider mb-5">
                  {member.role}
                </p>
                <div className="space-y-4">
                  {member.bio.map((para, j) => (
                    <p key={j} className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-50 py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl font-bold text-cognifica-indigo mb-3">
            Ready to meet the team in person?
          </h2>
          <p className="text-gray-600 mb-6">
            Book a consultation at any of our three NY and CT locations.
          </p>
          <Link
            href="/consults"
            className="inline-flex items-center gap-2 bg-cognifica-cta text-white px-7 py-3 font-bold uppercase tracking-wider text-sm hover:bg-blue-400 transition-colors focus-visible:ring-2 focus-visible:ring-cognifica-indigo focus-visible:outline-none"
          >
            Book an appointment →
          </Link>
        </div>
      </section>
    </>
  )
}
