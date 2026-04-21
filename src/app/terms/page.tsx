import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Kronos Group website and B2B healthcare technology services. Read our terms and conditions.",
  alternates: {
    canonical: "https://www.kronosgroup.health/terms",
  },
  openGraph: {
    title: "Terms of Service | Kronos Group",
    description: "Terms and conditions for using Kronos Group website and services.",
    url: "https://www.kronosgroup.health/terms",
    siteName: "Kronos Group",
    type: "website",
    images: [
      {
        url: "https://www.kronosgroup.health/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Terms of Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Kronos Group",
    description: "Terms and conditions for using Kronos Group website and services.",
    images: ["https://www.kronosgroup.health/opengraph-image"],
  },
};

const breadcrumbItems = [
  { name: "Home", url: "https://www.kronosgroup.health" },
  { name: "Terms of Service", url: "https://www.kronosgroup.health/terms" },
];

export default function TermsPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      <section className="py-16 lg:py-24 bg-kronos-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs tracking-widest uppercase text-kronos-cyan mb-4">Legal</p>
          <h1 className="font-heading text-4xl sm:text-5xl text-white mb-4">Terms of Service</h1>
          <p className="text-white/40 text-sm">Last updated: March 2026</p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-kronos-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="font-heading text-2xl text-white mb-4">Acceptance of Terms</h2>
              <p className="font-body text-sm text-white/60 font-light leading-relaxed">
                By accessing or using the Kronos Group website (kronoshealth.co) or our services,
                you agree to be bound by these Terms of Service. If you do not agree to these terms,
                please do not use our website or services.
              </p>
            </div>

            <div className="w-full h-px bg-white/10" />

            <div>
              <h2 className="font-heading text-2xl text-white mb-4">Description of Services</h2>
              <p className="font-body text-sm text-white/60 font-light leading-relaxed">
                Kronos Group provides B2B healthcare technology services including:
              </p>
              <ul className="list-disc pl-6 text-white/60 text-sm space-y-2 font-light mt-4">
                <li>Revenue cycle management and payment dispute resolution</li>
                <li>Cognifica App workplace mental health screening platform</li>
                <li>Synaptix concussion management software</li>
                <li>Healthcare consulting services</li>
              </ul>
              <p className="font-body text-sm text-white/60 font-light leading-relaxed mt-4">
                Specific service terms are governed by separate service agreements between Kronos
                Health and business clients.
              </p>
            </div>

            <div className="w-full h-px bg-white/10" />

            <div>
              <h2 className="font-heading text-2xl text-white mb-4">Disclaimer</h2>
              <div className="bg-kronos-bg p-4 border-l-2 border-kronos-cyan mb-4">
                <p className="text-white/70 text-sm font-light">
                  The information provided on this website is for general informational purposes
                  only and is intended for business audiences. It does not constitute medical
                  advice, diagnosis, or treatment.
                </p>
              </div>
              <p className="font-body text-sm text-white/60 font-light leading-relaxed">
                Kronos Group provides technology and services to healthcare organizations. We do
                not provide direct patient care through this website. Healthcare providers using our
                platforms remain responsible for clinical decisions and patient care.
              </p>
            </div>

            <div className="w-full h-px bg-white/10" />

            <div>
              <h2 className="font-heading text-2xl text-white mb-4">User Responsibilities</h2>
              <p className="font-body text-sm text-white/60 font-light leading-relaxed mb-4">
                When using our website, you agree to:
              </p>
              <ul className="list-disc pl-6 text-white/60 text-sm space-y-2 font-light">
                <li>Provide accurate and complete information</li>
                <li>Use the website only for lawful purposes</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Not interfere with the proper functioning of the website</li>
                <li>Not transmit any viruses or malicious code</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </div>

            <div className="w-full h-px bg-white/10" />

            <div>
              <h2 className="font-heading text-2xl text-white mb-4">Intellectual Property</h2>
              <p className="font-body text-sm text-white/60 font-light leading-relaxed">
                All content on this website, including text, graphics, logos, images, software, and
                the Cognifica App and Synaptix trademarks, is the property of Kronos Group or its
                licensors and is protected by United States and international intellectual property
                laws. You may not reproduce, distribute, modify, or create derivative works without
                our express written permission.
              </p>
            </div>

            <div className="w-full h-px bg-white/10" />

            <div>
              <h2 className="font-heading text-2xl text-white mb-4">Confidentiality</h2>
              <p className="font-body text-sm text-white/60 font-light leading-relaxed">
                Any non-public information shared during business discussions or service
                engagements is considered confidential. Both parties agree to protect confidential
                information and not disclose it to third parties without consent, except as required
                by law.
              </p>
            </div>

            <div className="w-full h-px bg-white/10" />

            <div>
              <h2 className="font-heading text-2xl text-white mb-4">Limitation of Liability</h2>
              <p className="font-body text-sm text-white/60 font-light leading-relaxed">
                To the fullest extent permitted by law, Kronos Group shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages arising out of or
                related to your use of the website. Our total liability for any claims arising from
                use of the website shall not exceed the amount you paid, if any, for accessing the
                website.
              </p>
              <p className="font-body text-sm text-white/60 font-light leading-relaxed mt-4">
                Liability for services provided under separate service agreements is governed by
                those agreements.
              </p>
            </div>

            <div className="w-full h-px bg-white/10" />

            <div>
              <h2 className="font-heading text-2xl text-white mb-4">Indemnification</h2>
              <p className="font-body text-sm text-white/60 font-light leading-relaxed">
                You agree to indemnify and hold harmless Kronos Group and its officers, directors,
                employees, and agents from any claims, damages, losses, or expenses arising out of
                your use of the website or violation of these terms.
              </p>
            </div>

            <div className="w-full h-px bg-white/10" />

            <div>
              <h2 className="font-heading text-2xl text-white mb-4">Third Party Links</h2>
              <p className="font-body text-sm text-white/60 font-light leading-relaxed">
                Our website may contain links to third party websites. These links are provided for
                your convenience only. We do not control and are not responsible for the content or
                practices of any third party websites.
              </p>
            </div>

            <div className="w-full h-px bg-white/10" />

            <div>
              <h2 className="font-heading text-2xl text-white mb-4">Governing Law</h2>
              <p className="font-body text-sm text-white/60 font-light leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the
                laws of the State of New York, without regard to its conflict of law provisions. Any
                legal action or proceeding arising out of these terms shall be brought exclusively
                in the state or federal courts located in Westchester County, New York.
              </p>
            </div>

            <div className="w-full h-px bg-white/10" />

            <div>
              <h2 className="font-heading text-2xl text-white mb-4">Changes to Terms</h2>
              <p className="font-body text-sm text-white/60 font-light leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be
                effective immediately upon posting to the website. Your continued use of the website
                after any changes constitutes your acceptance of the new terms.
              </p>
            </div>

            <div className="w-full h-px bg-white/10" />

            <div>
              <h2 className="font-heading text-2xl text-white mb-4">Contact Us</h2>
              <p className="font-body text-sm text-white/60 font-light leading-relaxed mb-4">
                If you have questions about these Terms of Service:
              </p>
              <div className="bg-kronos-bg p-6 border border-white/10">
                <p className="font-body text-sm text-white/70">
                  <strong className="text-white">Kronos Group</strong>
                  <br />
                  244 Westchester Avenue, Suite 209
                  <br />
                  West Harrison, NY 10604
                  <br />
                  <br />
                  Phone:{" "}
                  <a href="tel:+19147056830" className="text-kronos-cyan hover:underline">
                    (914) 705 6830
                  </a>
                  <br />
                  Email:{" "}
                  <a href="mailto:info@kronoshealth.co" className="text-kronos-cyan hover:underline">
                    info@kronoshealth.co
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-kronos-cyan text-sm uppercase tracking-widest hover:underline"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
