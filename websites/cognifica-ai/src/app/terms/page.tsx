import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Service | CognificaAI',
  description:
    'CognificaAI terms of service. Terms and conditions for using the CognificaAI website and requesting demos.',
  path: '/terms',
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
      name: 'Terms of Service',
    },
  ],
}

export default function TermsPage() {
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
            T
          </span>
        </div>

        {/* Right: Content */}
        <div className="relative bg-sage-dk flex flex-col justify-center px-6 sm:px-8 lg:px-16 py-12 lg:py-0">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cream/40 hover:text-cream transition-colors mb-8"
          >
            <ArrowLeft className="w-3 h-3" aria-hidden="true" />
            Back
          </Link>
          
          <div className="mb-4">
            <span className="text-[40px] sm:text-[60px] lg:text-[80px] font-serif font-bold text-cream leading-none tracking-tight block">
              TER
            </span>
            <span className="text-[20px] sm:text-[30px] lg:text-[40px] font-serif font-bold text-cream/30 leading-none tracking-tight block -mt-1">
              MS
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
              <p className="text-xs tracking-widest uppercase text-ink/40 mb-4">Agreement</p>
              <p className="font-body text-sm text-ink/60 font-light leading-relaxed">
                By accessing or using the CognificaAI website (cognificaai.com), you agree to be
                bound by these Terms of Service. If you do not agree to these terms, please do not
                use our website.
              </p>
            </div>

            <div className="w-full h-px bg-ink/10" />

            <div>
              <p className="text-xs tracking-widest uppercase text-ink/40 mb-4">Description of Service</p>
              <p className="font-body text-sm text-ink/60 font-light leading-relaxed">
                CognificaAI is a B2B workplace mental health screening platform operated by Kronos
                Health. This website provides information about the CognificaAI platform and allows
                employers to request product demonstrations.
              </p>
              <p className="font-body text-sm text-ink/60 font-light leading-relaxed mt-4">
                Use of the CognificaAI product platform by employers and their employees is governed
                by separate service agreements and terms of use.
              </p>
            </div>

            <div className="w-full h-px bg-ink/10" />

            <div>
              <p className="text-xs tracking-widest uppercase text-ink/40 mb-4">Disclaimer</p>
              <div className="bg-white p-4 border-l-2 border-sage mb-4">
                <p className="font-body text-sm text-ink/70 font-light">
                  The information provided on this website is for general informational purposes
                  only and is intended for business audiences. It does not constitute medical
                  advice, diagnosis, or treatment.
                </p>
              </div>
              <p className="font-body text-sm text-ink/60 font-light leading-relaxed">
                CognificaAI provides mental health screening tools to employers. Individual
                employees should consult qualified mental health professionals for personal health
                concerns. In case of emergency, contact 911 or the 988 Suicide and Crisis Lifeline.
              </p>
            </div>

            <div className="w-full h-px bg-ink/10" />

            <div>
              <p className="text-xs tracking-widest uppercase text-ink/40 mb-4">User Responsibilities</p>
              <p className="font-body text-sm text-ink/60 font-light leading-relaxed mb-4">
                When using this website, you agree to:
              </p>
              <div className="space-y-2">
                {[
                  'Provide accurate business contact information',
                  'Use the website only for lawful purposes',
                  'Not attempt to gain unauthorized access to our systems',
                  'Not interfere with the proper functioning of the website',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-white p-3">
                    <div className="w-1 h-4 bg-sage/30" />
                    <span className="font-body text-xs text-ink/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full h-px bg-ink/10" />

            <div>
              <p className="text-xs tracking-widest uppercase text-ink/40 mb-4">Intellectual Property</p>
              <p className="font-body text-sm text-ink/60 font-light leading-relaxed">
                All content on this website, including text, graphics, logos, the CognificaAI name
                and trademark, images, and software, is the property of Kronos Health or its
                licensors and is protected by intellectual property laws. You may not reproduce,
                distribute, or create derivative works without our express written permission.
              </p>
            </div>

            <div className="w-full h-px bg-ink/10" />

            <div>
              <p className="text-xs tracking-widest uppercase text-ink/40 mb-4">Limitation of Liability</p>
              <p className="font-body text-sm text-ink/60 font-light leading-relaxed">
                To the fullest extent permitted by law, Kronos Health shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages arising out of or
                related to your use of this website. Our total liability shall not exceed the amount
                you paid, if any, for accessing the website.
              </p>
            </div>

            <div className="w-full h-px bg-ink/10" />

            <div>
              <p className="text-xs tracking-widest uppercase text-ink/40 mb-4">Governing Law</p>
              <p className="font-body text-sm text-ink/60 font-light leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the
                laws of the State of New York. Any legal action shall be brought exclusively in the
                state or federal courts located in Westchester County, New York.
              </p>
            </div>

            <div className="w-full h-px bg-ink/10" />

            <div>
              <p className="text-xs tracking-widest uppercase text-ink/40 mb-4">Changes to Terms</p>
              <p className="font-body text-sm text-ink/60 font-light leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be
                effective immediately upon posting. Your continued use of the website constitutes
                acceptance of the new terms.
              </p>
            </div>

            <div className="w-full h-px bg-ink/10" />

            <div>
              <p className="text-xs tracking-widest uppercase text-ink/40 mb-4">Contact</p>
              <div className="bg-white p-6">
                <p className="font-body text-sm text-ink/70 font-light">
                  Kronos Health<br />
                  244 Westchester Avenue, Suite 209<br />
                  West Harrison, NY 10604<br /><br />
                  <a href="mailto:info@kronoshealth.co" className="text-sage hover:text-sage-dk transition-colors">
                    info@kronoshealth.co
                  </a><br />
                  <a href="tel:9147056830" className="text-sage hover:text-sage-dk transition-colors">
                    (914) 705 6830
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
