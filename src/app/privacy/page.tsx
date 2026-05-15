import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Kronos Group privacy policy. How we collect, use, and protect your information when using our healthcare technology services.",
  alternates: {
    canonical: "https://kronos.health/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Kronos Group",
    description: "How we collect, use, and protect your information.",
    url: "https://kronos.health/privacy",
    siteName: "Kronos Group",
    type: "website",
    images: [
      {
        url: "https://kronos.health/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Kronos Group",
    description: "How we collect, use, and protect your information.",
    images: ["https://kronos.health/opengraph-image"],
  },
};

const breadcrumbItems = [
  { name: "Home", url: "https://kronos.health" },
  { name: "Privacy Policy", url: "https://kronos.health/privacy" },
];

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      <section className="py-16 lg:py-24 bg-kronos-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs tracking-widest uppercase text-kronos-cyan mb-4">Legal</p>
          <h1 className="font-heading text-4xl sm:text-5xl text-white mb-4">Privacy Policy</h1>
          <p className="text-white/40 text-sm">Last updated: March 2026</p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-kronos-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="font-heading text-2xl text-white mb-4">Overview</h2>
              <p className="font-body text-sm text-white/60 font-light leading-relaxed">
                Kronos Group ("we," "us," or "our") provides B2B healthcare technology services
                including revenue cycle management, CogAI mental health platform,
                and Kavera concussion platform. This Privacy Policy describes how we
                collect, use, and protect information when you visit our website or use our
                services.
              </p>
            </div>

            <div className="w-full h-px bg-white/10" />

            <div>
              <h2 className="font-heading text-2xl text-white mb-4">Information We Collect</h2>

              <h3 className="font-body font-bold text-white mt-6 mb-3">Business Contact Information</h3>
              <ul className="list-disc pl-6 text-white/60 text-sm space-y-2 font-light">
                <li>Name and job title</li>
                <li>Business email address</li>
                <li>Phone number</li>
                <li>Company name and address</li>
              </ul>

              <h3 className="font-body font-bold text-white mt-6 mb-3">Website Usage Information</h3>
              <ul className="list-disc pl-6 text-white/60 text-sm space-y-2 font-light">
                <li>IP address and browser type</li>
                <li>Pages visited and time spent on site</li>
                <li>Referring website information</li>
                <li>Device and operating system information</li>
              </ul>

              <h3 className="font-body font-bold text-white mt-6 mb-3">Service Related Data</h3>
              <p className="font-body text-sm text-white/60 font-light leading-relaxed">
                For our B2B services, we may process data on behalf of our business clients. This
                data is governed by our service agreements and, where applicable, Business Associate
                Agreements under HIPAA.
              </p>
            </div>

            <div className="w-full h-px bg-white/10" />

            <div>
              <h2 className="font-heading text-2xl text-white mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-white/60 text-sm space-y-2 font-light">
                <li>Respond to inquiries and provide requested information</li>
                <li>Deliver and improve our services</li>
                <li>Process transactions and send related communications</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Analyze website usage to improve user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div className="w-full h-px bg-white/10" />

            <div>
              <h2 className="font-heading text-2xl text-white mb-4">HIPAA Compliance</h2>
              <p className="font-body text-sm text-white/60 font-light leading-relaxed">
                Kronos Group operates HIPAA compliant infrastructure for our healthcare technology
                products. When processing Protected Health Information (PHI) on behalf of covered
                entities, we enter into Business Associate Agreements and maintain appropriate
                administrative, technical, and physical safeguards.
              </p>
              <p className="font-body text-sm text-white/60 font-light leading-relaxed mt-4">
                For CogAI, individual employee assessment data is never shared with employers.
                Employers only receive anonymized, aggregate workforce trend data.
              </p>
            </div>

            <div className="w-full h-px bg-white/10" />

            <div>
              <h2 className="font-heading text-2xl text-white mb-4">Information Sharing</h2>
              <p className="font-body text-sm text-white/60 font-light leading-relaxed mb-4">
                We do not sell your personal information. We may share information with:
              </p>
              <ul className="list-disc pl-6 text-white/60 text-sm space-y-2 font-light">
                <li>Service providers who assist in our operations (under confidentiality agreements)</li>
                <li>Professional advisors (lawyers, accountants)</li>
                <li>Government authorities when required by law</li>
                <li>Business partners with your consent</li>
              </ul>
            </div>

            <div className="w-full h-px bg-white/10" />

            <div>
              <h2 className="font-heading text-2xl text-white mb-4">Data Security</h2>
              <p className="font-body text-sm text-white/60 font-light leading-relaxed">
                We implement industry standard security measures to protect your information,
                including encryption, access controls, and regular security assessments. Our
                infrastructure is hosted on SOC 2 Type II certified platforms.
              </p>
            </div>

            <div className="w-full h-px bg-white/10" />

            <div>
              <h2 className="font-heading text-2xl text-white mb-4">Your Rights</h2>
              <p className="font-body text-sm text-white/60 font-light leading-relaxed mb-4">
                You may request:
              </p>
              <ul className="list-disc pl-6 text-white/60 text-sm space-y-2 font-light">
                <li>Access to the personal information we hold about you</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your information (subject to legal retention requirements)</li>
                <li>Opt out from marketing communications</li>
              </ul>
            </div>

            <div className="w-full h-px bg-white/10" />

            <div>
              <h2 className="font-heading text-2xl text-white mb-4">Cookies</h2>
              <p className="font-body text-sm text-white/60 font-light leading-relaxed">
                Our website uses cookies to improve functionality and analyze usage. You can control
                cookie preferences through your browser settings. We use essential cookies for site
                operation and analytics cookies (with consent) to understand how visitors use our
                site.
              </p>
            </div>

            <div className="w-full h-px bg-white/10" />

            <div>
              <h2 className="font-heading text-2xl text-white mb-4">Contact Us</h2>
              <p className="font-body text-sm text-white/60 font-light leading-relaxed mb-4">
                For questions about this Privacy Policy or to exercise your rights:
              </p>
              <div className="bg-kronos-bg p-6 border border-white/10">
                <p className="font-body text-sm text-white/70">
                  <strong className="text-white">Kronos Group</strong>
                  <br />
                  Attn: Privacy
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

            <div className="w-full h-px bg-white/10" />

            <div>
              <h2 className="font-heading text-2xl text-white mb-4">Changes to This Policy</h2>
              <p className="font-body text-sm text-white/60 font-light leading-relaxed">
                We may update this Privacy Policy from time to time. Changes will be posted on this
                page with an updated revision date.
              </p>
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
