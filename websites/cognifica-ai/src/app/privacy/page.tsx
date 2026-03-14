import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy | CognificaAI',
  description:
    'CognificaAI privacy policy. How we collect, store, and protect your information when you request a demo.',
  path: '/privacy',
})

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://cognificaai.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Privacy Policy',
    },
  ],
}

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Editorial Split Hero */}
      <section className="min-h-[40vh] grid lg:grid-cols-2">
        {/* Left: Placeholder */}
        <div className="relative bg-sage min-h-[30vh] lg:min-h-full flex items-center justify-center overflow-hidden">
          <div className="absolute top-[20%] left-[15%] w-16 h-16 border border-cream/10 rounded-full" />
          <div className="absolute bottom-[25%] right-[20%] w-24 h-24 border border-cream/10 rounded-full" />
          <span className="text-[100px] sm:text-[150px] lg:text-[200px] font-serif font-bold text-cream/[0.05] select-none">
            P
          </span>
        </div>

        {/* Right: Content */}
        <div className="relative bg-sage-dk flex flex-col justify-center px-6 sm:px-8 lg:px-16 py-12 lg:py-0">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cream/40 hover:text-cream transition-colors mb-8"
          >
            <ArrowLeft className="w-3 h-3" />
            Back
          </Link>
          
          <div className="mb-4">
            <span className="text-[40px] sm:text-[60px] lg:text-[80px] font-serif font-bold text-cream leading-none tracking-tight block">
              PRI
            </span>
            <span className="text-[20px] sm:text-[30px] lg:text-[40px] font-serif font-bold text-cream/30 leading-none tracking-tight block -mt-1">
              VACY
            </span>
          </div>

          <p className="text-xs text-cream/40">Last updated: March 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="space-y-12">

            <div>
              <p className="text-xs tracking-widest uppercase text-ink/40 mb-4">Overview</p>
              <p className="font-body text-sm text-ink/60 font-light leading-relaxed">
                CognificaAI is a B2B employer mental health screening platform operated by Kronos Health.
                This privacy policy describes how we handle information collected through the CognificaAI
                marketing website, specifically the demo request form.
              </p>
              <p className="font-body text-sm text-ink/60 font-light leading-relaxed mt-4">
                This policy covers the marketing site only. The CognificaAI product itself operates under 
                separate HIPAA Business Associate Agreements with each employer client.
              </p>
            </div>

            <div className="w-full h-px bg-ink/10" />

            <div>
              <p className="text-xs tracking-widest uppercase text-ink/40 mb-4">What We Collect</p>
              <p className="font-body text-sm text-ink/60 font-light leading-relaxed mb-4">
                When you submit a demo request on this website, we collect:
              </p>
              <div className="space-y-2">
                {['Name', 'Work email address', 'Phone number (optional)', 'Organization name'].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-white p-3">
                    <div className="w-1 h-4 bg-sage/30" />
                    <span className="font-body text-xs text-ink/70">{item}</span>
                  </div>
                ))}
              </div>
              <p className="font-body text-sm text-ink/60 font-light leading-relaxed mt-4">
                We do not collect any Protected Health Information (PHI), employee health data, or sensitive 
                personal information through this website.
              </p>
            </div>

            <div className="w-full h-px bg-ink/10" />

            <div>
              <p className="text-xs tracking-widest uppercase text-ink/40 mb-4">How We Use Your Information</p>
              <p className="font-body text-sm text-ink/60 font-light leading-relaxed">
                Information submitted via the demo request form is used exclusively to respond to your demo 
                request, send follow up communications, and understand demand. We do not sell, rent, or share 
                your contact information with third parties for marketing purposes.
              </p>
            </div>

            <div className="w-full h-px bg-ink/10" />

            <div>
              <p className="text-xs tracking-widest uppercase text-ink/40 mb-4">Data Storage</p>
              <p className="font-body text-sm text-ink/60 font-light leading-relaxed">
                Demo request data is stored in Supabase, a cloud database provider with SOC 2 Type II
                certification. Data is encrypted at rest and in transit. Access is restricted to Kronos
                Health staff via Row Level Security policies.
              </p>
            </div>

            <div className="w-full h-px bg-ink/10" />

            <div>
              <p className="text-xs tracking-widest uppercase text-ink/40 mb-4">HIPAA Note</p>
              <p className="font-body text-sm text-ink/60 font-light leading-relaxed">
                The CognificaAI product platform is operated under HIPAA compliant infrastructure. Employers 
                who contract with CognificaAI enter into a Business Associate Agreement (BAA). Individual 
                employee assessment data is never shared with employers; employers only receive anonymized, 
                aggregate workforce trend data.
              </p>
            </div>

            <div className="w-full h-px bg-ink/10" />

            <div>
              <p className="text-xs tracking-widest uppercase text-ink/40 mb-4">Your Rights</p>
              <p className="font-body text-sm text-ink/60 font-light leading-relaxed mb-4">
                You may request at any time: access to the data we hold about you, correction of inaccurate 
                information, deletion of your demo request data, or opt out from any follow up communications.
              </p>
              <p className="font-body text-sm text-ink/60 font-light leading-relaxed">
                Contact us at{' '}
                <a href="mailto:info@kronoshealth.co" className="text-sage hover:text-sage-dk transition-colors">
                  info@kronoshealth.co
                </a>
              </p>
            </div>

            <div className="w-full h-px bg-ink/10" />

            <div>
              <p className="text-xs tracking-widest uppercase text-ink/40 mb-4">Contact</p>
              <div className="bg-white p-6">
                <p className="font-body text-sm text-ink/70 font-light">
                  Kronos Health<br />
                  Attn: Privacy<br />
                  <a href="mailto:info@kronoshealth.co" className="text-sage hover:text-sage-dk transition-colors">
                    info@kronoshealth.co
                  </a><br />
                  <a href="tel:9147056830" className="text-sage hover:text-sage-dk transition-colors">
                    914 705 6830
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
