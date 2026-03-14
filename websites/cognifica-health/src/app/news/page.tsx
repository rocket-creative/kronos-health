import type { Metadata } from 'next'
import Link from 'next/link'
import { buildBreadcrumbSchema } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'News & Research | Cognifica Health',
  description:
    'Latest articles, research, and clinical updates from the team at Cognifica Health on cognitive health, TMS therapy, TBI, neuropsychology, and brain wellness.',
  alternates: { canonical: 'https://cognifica.health/news' },
  openGraph: {
    title: 'News & Research | Cognifica Health',
    description:
      'Clinical articles and research updates from the Cognifica Health team on cognitive health and brain wellness.',
    url: 'https://cognifica.health/news',
    siteName: 'Cognifica Health',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'News & Research | Cognifica Health',
    description: 'News and research from Cognifica Health on cognitive health topics.',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://cognifica.health' },
  { name: 'News & Research', url: 'https://cognifica.health/news' },
])

const ARTICLES = [
  {
    title: 'Understanding Post-COVID Brain Fog: Causes, Symptoms, and Treatment Options',
    date: 'February 2025',
    category: 'Cognitive Health',
    excerpt:
      'Long COVID neurological symptoms affect millions of Americans. We explore the mechanisms behind post-COVID brain fog and how neuropsychological evaluation guides recovery.',
  },
  {
    title: 'TMS Therapy: What the Latest Research Tells Us About Treating Depression',
    date: 'January 2025',
    category: 'TMS Therapy',
    excerpt:
      'Transcranial Magnetic Stimulation continues to demonstrate strong efficacy for treatment-resistant depression. A summary of recent clinical trial findings.',
  },
  {
    title: 'Concussion Recovery: Why the First 72 Hours Matter Most',
    date: 'December 2024',
    category: 'TBI & Concussion',
    excerpt:
      'Early intervention after a concussion significantly improves outcomes. Learn what the evidence says about the critical post-injury window and how to act on it.',
  },
  {
    title: 'Neuropsychological Testing: What to Expect and Why It Matters',
    date: 'November 2024',
    category: 'Testing & Evaluation',
    excerpt:
      'A comprehensive neuropsychological evaluation does more than measure memory. We explain what the testing process covers and how results shape your treatment plan.',
  },
  {
    title: 'The Brain-Body Connection: How Cardiovascular Health Impacts Cognition',
    date: 'October 2024',
    category: 'Brain Wellness',
    excerpt:
      "Heart health and brain health are deeply intertwined. New research highlights the cognitive risks of cardiovascular disease and what can be done to protect the brain.",
  },
  {
    title: 'Sleep and Cognitive Health: What Every Patient Should Know',
    date: 'September 2024',
    category: 'Brain Wellness',
    excerpt:
      "Sleep isn't just rest — it's the brain's primary maintenance window. We look at how sleep quality affects memory consolidation, emotional regulation, and lasting cognitive health.",
  },
  {
    title: 'PTSD and the Brain: Neurological Mechanisms and Modern Treatment',
    date: 'August 2024',
    category: 'Mental Health',
    excerpt:
      'Post traumatic stress disorder involves measurable changes in brain structure and function. Understanding the neuroscience of PTSD opens new pathways for clinically validated treatment.',
  },
  {
    title: 'Workers Compensation and Neuropsychological Evaluations: A Guide for Patients',
    date: 'July 2024',
    category: 'Testing & Evaluation',
    excerpt:
      'Neuropsychological evaluations play a key role in workers compensation cases involving brain injury or cognitive impairment. We explain the process and what to expect.',
  },
  {
    title: 'The Role of Neurofeedback in Cognitive Rehabilitation',
    date: 'June 2024',
    category: 'Brain Wellness',
    excerpt:
      'Neurofeedback is emerging as a valuable tool in cognitive rehabilitation for patients with TBI, ADHD, anxiety, and learning difficulties. Here is how it works.',
  },
  {
    title: 'Dr. Abrahams on the Future of Minimally Invasive Spine Surgery',
    date: 'May 2024',
    category: 'Research',
    excerpt:
      'Cognifica Health founder Dr. John Abrahams shares his perspective on emerging technologies in spinal surgery and their implications for neurological recovery and patient outcomes.',
  },
]

export default function NewsPage() {
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
              <li className="text-white">News & research</li>
            </ol>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">News & research</h1>
          <p className="mt-4 text-white/75 max-w-xl text-lg">
            Clinical insights, research summaries, and brain health education from the
            Cognifica Health team.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {ARTICLES.map((article) => (
              <article
                key={article.title}
                className="border border-stone-200 p-6 hover:border-cognifica-indigo transition-colors"
              >
                <p className="text-xs font-bold text-cognifica-accent uppercase tracking-wider mb-2">
                  {article.category}
                </p>
                <h2 className="font-heading text-xl font-bold text-cognifica-indigo mb-2 leading-snug">
                  {article.title}
                </h2>
                <p className="text-xs text-gray-400 mb-3">{article.date}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{article.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="bg-stone-50 py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl font-bold text-cognifica-indigo mb-3">
            Have a cognitive health question?
          </h2>
          <p className="text-gray-600 mb-6">
            Our team is available to answer your questions and help you find the right care.
          </p>
          <Link
            href="/consults"
            className="inline-flex items-center gap-2 bg-cognifica-cta text-white px-7 py-3 font-bold uppercase tracking-wider text-sm hover:bg-blue-400 transition-colors focus-visible:ring-2 focus-visible:ring-cognifica-indigo focus-visible:outline-none"
          >
            Book a consultation →
          </Link>
        </div>
      </section>
    </>
  )
}
