import type { Metadata } from "next";
import Link from "next/link";
import {
  DemoRequestForm,
  Breadcrumbs,
  TrustSignal,
  ServiceSchema,
  BreadcrumbSchema,
  FAQSchema,
  HeroBackground,
} from "@/components";
import {
  Search,
  Map,
  FileText,
  HardDrive,
  Database,
  Shield,
  Lock,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Medical IT & HIPAA Compliance Services | Kronos Group",
  description:
    "HIPAA compliance, security audits, device hardening, and GRC governance for medical practices. Kronos Group serves as your technical Security Officer — protecting your practice from fines up to $2.1M.",
  alternates: {
    canonical: "https://kronoshealth.co/medical-it",
  },
  openGraph: {
    title: "Medical IT & HIPAA Compliance Services | Kronos Group",
    description:
      "HIPAA compliance, security audits, device hardening, and GRC governance for medical practices.",
    url: "https://kronoshealth.co/medical-it",
    siteName: "Kronos Group",
    type: "website",
    images: [
      {
        url: "https://kronoshealth.co/medical-it/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Kronos Group Medical IT & Compliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical IT & HIPAA Compliance Services | Kronos Group",
    description:
      "HIPAA compliance, security audits, device hardening, and GRC governance for medical practices.",
    images: ["https://kronoshealth.co/medical-it/opengraph-image"],
  },
};

const breadcrumbItems = [
  { name: "Home", url: "https://kronoshealth.co" },
  { name: "Medical IT", url: "https://kronoshealth.co/medical-it" },
];

const deliverables = [
  {
    title: "Comprehensive Security Auditing",
    description:
      "An in-depth assessment of your current technology and workflows to detect hidden vulnerabilities and compliance gaps before federal auditors do.",
    icon: Search,
  },
  {
    title: "Customized Risk Mitigation",
    description:
      "After our audit, we provide a tailored roadmap of solutions to fully align your practice with HIPAA standards and industry best practices.",
    icon: Map,
  },
  {
    title: "Simplified GRC & HIPAA Governance",
    description:
      "We serve as your technical Security Officer, handling complex risk assessments and the necessary documentation to satisfy federal auditors.",
    icon: FileText,
  },
  {
    title: "Device & Network Hardening",
    description:
      "Professional encryption and security protocols implemented across all tablets, laptops, and workstations to prevent data theft and unauthorized access.",
    icon: HardDrive,
  },
  {
    title: "Localized Data Continuity",
    description:
      "We protect the administrative and practice-specific files outside the cloud, ensuring your entire business is recoverable — not just your EMR.",
    icon: Database,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Security Audit",
    description:
      "We conduct a full assessment of your devices, networks, workflows, and documentation to identify every vulnerability and compliance gap.",
    icon: Search,
  },
  {
    number: "02",
    title: "Risk Roadmap",
    description:
      "We deliver a prioritized action plan tailored to your practice size, specialty, and existing infrastructure.",
    icon: Map,
  },
  {
    number: "03",
    title: "Implement & Harden",
    description:
      "Our team executes the roadmap — encrypting devices, securing networks, and establishing access controls across your entire environment.",
    icon: Lock,
  },
  {
    number: "04",
    title: "Govern & Document",
    description:
      "We maintain your GRC documentation, conduct ongoing risk assessments, and keep your compliance posture current as regulations evolve.",
    icon: FileText,
  },
];

const penaltyTable = [
  {
    entity: "Gulf Coast Pain Consultants",
    penalty: "$1,190,000",
    reason: "Failure to terminate contractor access and lack of auditing",
    source: "https://www.hhs.gov/hipaa/for-professionals/compliance-enforcement/agreements/gulf-coast-pain-consultants/index.html",
  },
  {
    entity: "Comprehensive Neurology, PC",
    penalty: "$25,000",
    reason: "Failed to conduct an accurate Risk Analysis",
    source: "https://www.hhs.gov/hipaa/for-professionals/compliance-enforcement/agreements/comprehensive-neurology/index.html",
  },
  {
    entity: "Northeast Radiology, P.C.",
    penalty: "$350,000",
    reason: "Failure to identify vulnerabilities in local systems",
    source: "https://www.radiologybusiness.com/topics/policy/northeast-radiology-hipaa-penalty",
  },
  {
    entity: "Gums Dental Care",
    penalty: "$70,000",
    reason: "Failure to provide timely patient access to records",
    source: "https://www.ada.org/en/publications/ada-news/2024/hipaa-gums-dental",
  },
  {
    entity: "Top of the World Ranch",
    penalty: "$103,000",
    reason: "Failure to conduct an enterprise-wide risk analysis",
    source: "https://www.hipaajournal.com/top-of-the-world-ranch-hipaa-penalty-2026/",
  },
];

const faqItems = [
  {
    question: "Does my practice really need a dedicated IT security assessment?",
    answer:
      "Yes. HIPAA's Security Rule requires every covered entity to conduct an accurate and thorough risk analysis of potential vulnerabilities. Skipping this step is classified as Willful Neglect — the highest penalty tier — carrying fines up to $73,011 per violation with an annual cap of $2.1 million. Most practices focus on clinical workflows and overlook administrative IT security entirely.",
  },
  {
    question: "We already use an EMR. Are we HIPAA compliant?",
    answer:
      "An EMR system handling patient records is only one part of HIPAA compliance. The rule also covers every device, workstation, laptop, tablet, and network your team uses — including the files stored outside the cloud. Many enforcement actions, like Northeast Radiology's $350,000 fine, stem specifically from vulnerabilities in local systems that fall outside the EMR.",
  },
  {
    question: "What is GRC and why does a small practice need it?",
    answer:
      "GRC stands for Governance, Risk, and Compliance. It is the framework of documented policies, risk assessments, and procedures that federal auditors review during an investigation. Without current GRC documentation, you have no evidence of compliance even if your systems are secure. We handle the documentation and keep it updated so you are audit ready at all times.",
  },
  {
    question: "How long does the initial audit take?",
    answer:
      "A comprehensive security audit for a typical medical practice takes one to two weeks depending on the number of locations, devices, and staff. We work around your schedule and do not disrupt patient care. At the end, you receive a detailed findings report and a prioritized remediation roadmap.",
  },
  {
    question: "What happens after the audit and implementation?",
    answer:
      "Compliance is not a one-time event. We offer ongoing governance as your technical Security Officer — conducting annual risk reassessments, updating your documentation as regulations change, and providing incident response support if a breach or audit ever occurs.",
  },
];

export default function MedicalITPage() {
  return (
    <>
      {/* Schema */}
      <ServiceSchema
        name="Medical IT & HIPAA Compliance Services"
        description="HIPAA compliance, security auditing, device hardening, and GRC governance for medical practices. Kronos Group serves as your technical Security Officer."
        url="https://kronoshealth.co/medical-it"
        serviceType="Healthcare IT Consulting"
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Medical IT" }]} />
      </div>

      {/* Hero */}
      <section
        className="relative min-h-[80dvh] sm:min-h-dvh bg-kronos-bg overflow-hidden pt-safe-top"
        aria-labelledby="medical-it-hero-heading"
      >
        <HeroBackground type="grid" color="130, 115, 140" />

        <div className="relative z-10 min-h-[80dvh] sm:min-h-dvh flex items-center">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-0">
            <div className="backdrop-blur-md bg-black/40 border border-white/10 p-8 sm:p-10 lg:p-14 max-w-xl">
              <p className="text-xs tracking-widest uppercase text-white/50 mb-4 sm:mb-6">
                Shield of Compliance
              </p>

              <h1
                id="medical-it-hero-heading"
                className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white leading-none tracking-tight mb-4 sm:mb-6"
              >
                Medical IT<br />
                <span className="text-white/40">&amp; Compliance</span>
              </h1>

              <p className="font-body text-sm sm:text-base text-white/70 font-light leading-relaxed mb-6 sm:mb-8">
                We ensure your office technology is secure, reliable, and fully compliant with federal law. We handle the complex security and governance requirements that often get overlooked in a busy medical office.
              </p>

              <Link
                href="#audit"
                className="inline-flex items-center gap-4 bg-[#82738C] text-white py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-light hover:gap-6 transition-all w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-[#82738C] focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
              >
                Request a Security Audit
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>

              <p className="text-xs text-white/50 mt-3">
                Confidential. No disruption to patient care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section
        className="py-12 sm:py-16 lg:py-24 bg-kronos-gray-800"
        aria-labelledby="deliverables-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8 sm:mb-12 lg:mb-20">
            <p className="text-xs tracking-widest uppercase text-white/50 mb-4">
              What We Deliver
            </p>
            <h2
              id="deliverables-heading"
              className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white"
            >
              Five Core Protections
            </h2>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            {deliverables.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title}>
                  <div className="bg-[#82738C]/10 p-4 sm:p-6 lg:p-8 h-full border-l-2 border-[#82738C]/30 hover:bg-[#82738C]/15 hover:border-[#82738C]/50 transition-colors">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#82738C]/20 flex items-center justify-center mb-3 sm:mb-4 lg:mb-6">
                      <Icon
                        className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#82738C]/70"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="font-heading text-base sm:text-lg lg:text-xl text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}

            {/* Fifth item spans full width on sm+ */}
            <div className="hidden sm:block" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Cost of Non-Compliance */}
      <section
        className="py-12 sm:py-16 lg:py-24 bg-kronos-bg"
        aria-labelledby="compliance-cost-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8 sm:mb-12 lg:mb-16">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <AlertTriangle
                  className="w-5 h-5 sm:w-6 sm:h-6 text-red-400/70"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-white/50 mb-3">
                  The Stakes
                </p>
                <h2
                  id="compliance-cost-heading"
                  className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white"
                >
                  The Cost of Non-Compliance
                </h2>
              </div>
            </div>
          </header>

          {/* Fine stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14 lg:mb-20">
            <div className="bg-kronos-card border border-white/5 p-6 sm:p-8">
              <span className="font-heading text-3xl sm:text-4xl lg:text-5xl text-red-400 leading-none block mb-3">
                $73,011
              </span>
              <div className="w-8 h-px bg-red-400/30 mb-3" aria-hidden="true" />
              <p className="font-body text-xs text-white/40 font-light uppercase tracking-widest leading-relaxed">
                Per violation under<br />Willful Neglect
              </p>
            </div>
            <div className="bg-kronos-card border border-white/5 p-6 sm:p-8">
              <span className="font-heading text-3xl sm:text-4xl lg:text-5xl text-red-400 leading-none block mb-3">
                $2.1M
              </span>
              <div className="w-8 h-px bg-red-400/30 mb-3" aria-hidden="true" />
              <p className="font-body text-xs text-white/40 font-light uppercase tracking-widest leading-relaxed">
                Annual penalty<br />cap per violation type
              </p>
            </div>
            <div className="bg-kronos-card border border-white/5 p-6 sm:p-8">
              <span className="font-heading text-3xl sm:text-4xl lg:text-5xl text-red-400 leading-none block mb-3">
                Millions
              </span>
              <div className="w-8 h-px bg-red-400/30 mb-3" aria-hidden="true" />
              <p className="font-body text-xs text-white/40 font-light uppercase tracking-widest leading-relaxed">
                In breach recovery costs<br />and lost reputation
              </p>
            </div>
          </div>

          <p className="font-body text-sm sm:text-base text-white/60 font-light leading-relaxed mb-8 sm:mb-10 max-w-3xl">
            In the medical field, a technical oversight is a significant financial liability. These are real practices that faced enforcement actions — most for failures that a proper audit would have caught.
          </p>

          {/* Penalty table */}
          <div className="overflow-x-auto" role="region" aria-label="Recent HIPAA enforcement actions">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th
                    scope="col"
                    className="font-body text-[10px] sm:text-xs uppercase tracking-widest text-white/40 font-normal pb-3 pr-4"
                  >
                    Practice
                  </th>
                  <th
                    scope="col"
                    className="font-body text-[10px] sm:text-xs uppercase tracking-widest text-white/40 font-normal pb-3 pr-4"
                  >
                    Penalty
                  </th>
                  <th
                    scope="col"
                    className="font-body text-[10px] sm:text-xs uppercase tracking-widest text-white/40 font-normal pb-3 pr-4"
                  >
                    Primary Reason
                  </th>
                  <th
                    scope="col"
                    className="font-body text-[10px] sm:text-xs uppercase tracking-widest text-white/40 font-normal pb-3"
                  >
                    Source
                  </th>
                </tr>
              </thead>
              <tbody>
                {penaltyTable.map((row) => (
                  <tr
                    key={row.entity}
                    className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="font-body text-xs sm:text-sm text-white font-light py-4 pr-4">
                      {row.entity}
                    </td>
                    <td className="font-heading text-sm sm:text-base text-red-400 py-4 pr-4 whitespace-nowrap">
                      {row.penalty}
                    </td>
                    <td className="font-body text-xs sm:text-sm text-white/60 font-light py-4 pr-4">
                      {row.reason}
                    </td>
                    <td className="py-4">
                      <a
                        href={row.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#82738C] text-[10px] sm:text-xs uppercase tracking-widest hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#82738C]"
                        aria-label={`Official source for ${row.entity} penalty`}
                      >
                        Official
                        <ExternalLink className="w-3 h-3" aria-hidden="true" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        className="py-12 sm:py-16 lg:py-24 bg-kronos-gray-800"
        aria-labelledby="process-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8 sm:mb-12 lg:mb-20">
            <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
              The Process
            </p>
            <h2
              id="process-heading"
              className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white"
            >
              How It Works
            </h2>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.number}>
                  <span
                    className="text-[50px] sm:text-[60px] lg:text-[80px] font-heading text-white/[0.05] leading-none block mb-3 sm:mb-4"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                  <div className="flex items-start gap-3 sm:gap-4 -mt-6 sm:-mt-8 lg:-mt-10 relative z-10">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#82738C]/10 flex items-center justify-center flex-shrink-0">
                      <Icon
                        className="w-4 h-4 text-[#82738C]/70"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm sm:text-base lg:text-lg text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="font-body text-[10px] sm:text-xs text-white/50 font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="py-12 sm:py-16 lg:py-24 bg-kronos-bg"
        aria-labelledby="why-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16">

            {/* Left: Large stat block */}
            <div className="lg:col-span-5">
              <div className="bg-[#82738C]/10 aspect-square flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
                <Shield
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-[#82738C]/40 mb-3 sm:mb-4 lg:mb-6"
                  strokeWidth={1}
                  aria-hidden="true"
                />
                <span className="text-[40px] sm:text-[52px] lg:text-[70px] xl:text-[84px] font-heading text-[#82738C] leading-none text-center">
                  Zero
                </span>
                <div
                  className="w-10 h-px sm:w-12 bg-[#82738C]/30 my-3 sm:my-4 lg:my-6"
                  aria-hidden="true"
                />
                <p className="text-xs sm:text-sm text-white/60 font-light text-center leading-relaxed">
                  Known enforcement actions<br />against our clients
                </p>
              </div>
            </div>

            {/* Right: Benefits */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <p className="text-xs tracking-widest uppercase text-white/50 mb-4">
                Why Kronos IT
              </p>
              <h2
                id="why-heading"
                className="font-heading text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white mb-4 sm:mb-6 lg:mb-8"
              >
                We Act as Your Security Officer
              </h2>

              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#82738C]/10 flex items-center justify-center flex-shrink-0">
                    <Search
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#82738C]/70"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm sm:text-base lg:text-lg text-white mb-1">
                      We Find What Others Miss
                    </h3>
                    <p className="font-body text-[10px] sm:text-xs lg:text-sm text-white/60 font-light">
                      Most breaches trace back to local devices and administrative files, not the EMR. We audit the full environment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#82738C]/10 flex items-center justify-center flex-shrink-0">
                    <FileText
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#82738C]/70"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm sm:text-base lg:text-lg text-white mb-1">
                      We Handle the Documentation
                    </h3>
                    <p className="font-body text-[10px] sm:text-xs lg:text-sm text-white/60 font-light">
                      GRC documentation is what auditors actually review. We produce and maintain it so your practice is always audit ready.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#82738C]/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#82738C]/70"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm sm:text-base lg:text-lg text-white mb-1">
                      Built for Medical Practices
                    </h3>
                    <p className="font-body text-[10px] sm:text-xs lg:text-sm text-white/60 font-light">
                      General IT firms do not understand HIPAA enforcement patterns. We do — because we built and operate healthcare practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSchema questions={faqItems} />
      <section
        className="py-12 sm:py-16 lg:py-24 bg-kronos-gray-800"
        id="faq"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="faq-heading"
            className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white mb-8 sm:mb-12"
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {faqItems.map((item, idx) => (
              <details
                key={idx}
                className="group bg-kronos-card border border-white/5 hover:border-[#82738C]/20 transition-colors"
              >
                <summary className="flex items-center justify-between p-4 sm:p-5 cursor-pointer list-none">
                  <h3 className="font-body text-xs sm:text-sm text-white font-normal pr-4">
                    {item.question}
                  </h3>
                  <span className="text-[#82738C] flex-shrink-0" aria-hidden="true">+</span>
                </summary>
                <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                  <p className="font-body text-[10px] sm:text-xs text-white/60 font-light leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Kronos Technology Stack */}
      <section
        className="py-12 sm:py-16 lg:py-24 bg-kronos-bg"
        aria-labelledby="tech-stack-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8 sm:mb-12 lg:mb-16">
            <p className="text-xs tracking-widest uppercase text-white/50 mb-4">
              Integrated Solutions
            </p>
            <h2
              id="tech-stack-heading"
              className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white mb-4 sm:mb-6"
            >
              The Kronos Technology Stack
            </h2>
            <p className="font-body text-sm sm:text-base text-white/60 font-light leading-relaxed max-w-2xl">
              When we engage with a practice, we bring the full Kronos toolkit — purpose-built healthcare technology that works alongside your compliance framework.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <article>
              <div className="bg-kronos-card border-l-2 border-[#82738C]/30 hover:border-[#82738C]/60 hover:bg-kronos-gray-800 transition-colors p-6 sm:p-8 lg:p-10 h-full flex flex-col">
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#82738C]/60 mb-3">
                  Revenue Cycle
                </p>
                <h3 className="font-heading text-xl sm:text-2xl text-white mb-4">
                  Kronos Revenue
                </h3>
                <p className="font-body text-xs sm:text-sm text-white/60 font-light leading-relaxed flex-1 mb-6 sm:mb-8">
                  Expert IDR arbitration and out of network dispute resolution under the No Surprises Act. We recover what your practice is owed — from negotiation through final arbitration.
                </p>
                <a
                  href="https://kronos-rev.vercel.app?utm_source=medicalit&utm_medium=techstack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[#82738C] text-xs uppercase tracking-widest hover:gap-5 transition-all w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-[#82738C]"
                >
                  Visit Kronos Revenue
                  <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </a>
              </div>
            </article>

            <article>
              <div className="bg-kronos-card border-l-2 border-[#82738C]/30 hover:border-[#82738C]/60 hover:bg-kronos-gray-800 transition-colors p-6 sm:p-8 lg:p-10 h-full flex flex-col">
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#82738C]/60 mb-3">
                  Employer Mental Health
                </p>
                <h3 className="font-heading text-xl sm:text-2xl text-white mb-4">
                  Cognifica App
                </h3>
                <p className="font-body text-xs sm:text-sm text-white/60 font-light leading-relaxed flex-1 mb-6 sm:mb-8">
                  Anonymous, HIPAA-compliant mental health screening for employers. Six validated clinical assessments, risk stratification, and care pathways — deployed in under one week.
                </p>
                <a
                  href="https://cognificaai.vercel.app?utm_source=medicalit&utm_medium=techstack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[#82738C] text-xs uppercase tracking-widest hover:gap-5 transition-all w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-[#82738C]"
                >
                  Visit Cognifica App
                  <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </a>
              </div>
            </article>

            <article>
              <div className="bg-kronos-card border-l-2 border-[#82738C]/30 hover:border-[#82738C]/60 hover:bg-kronos-gray-800 transition-colors p-6 sm:p-8 lg:p-10 h-full flex flex-col">
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#82738C]/60 mb-3">
                  Concussion Management
                </p>
                <h3 className="font-heading text-xl sm:text-2xl text-white mb-4">
                  Synaptix
                </h3>
                <p className="font-body text-xs sm:text-sm text-white/60 font-light leading-relaxed flex-1 mb-6 sm:mb-8">
                  A structured 12-week concussion management program built for orthopedic, neurosurgery, and sports medicine practices. Standardized, billable, and recurring.
                </p>
                <a
                  href="https://synaptix-rho.vercel.app?utm_source=medicalit&utm_medium=techstack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[#82738C] text-xs uppercase tracking-widest hover:gap-5 transition-all w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-[#82738C]"
                >
                  Visit Synaptix
                  <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Trust Signal */}
      <section className="py-6 sm:py-8 bg-kronos-card border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustSignal
            author="Dr. John M. Abrahams, M.D."
            credentials="Board-Certified Neurosurgeon, Founder of Kronos Group"
            reviewedBy="Kronos IT Security Team"
            lastUpdated="2026-03-18"
          />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-8 sm:py-10 bg-kronos-bg border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs tracking-widest uppercase text-white/40 mb-3">
            Explore More
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/revenue-cycle"
              className="text-[#82738C] hover:underline text-sm font-light"
            >
              Revenue Cycle Management
            </Link>
            <span className="text-white/20">|</span>
            <Link
              href="/digital-health-tools"
              className="text-[#82738C] hover:underline text-sm font-light"
            >
              Digital Health Tools
            </Link>
            <span className="text-white/20">|</span>
            <Link
              href="/clinically-integrated-neuropsychology"
              className="text-[#82738C] hover:underline text-sm font-light"
            >
              Neuropsychology
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-12 sm:py-16 lg:py-24 bg-kronos-purple"
        id="audit"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
            <div>
              <h2
                id="cta-heading"
                className="font-heading text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white mb-4"
              >
                Schedule Your Security Audit
              </h2>
              <p className="font-body text-xs sm:text-sm lg:text-base text-white/80 font-light mb-4 sm:mb-6 lg:mb-8">
                Most practices have compliance gaps they do not know about. Our audit identifies every vulnerability and gives you a clear roadmap to full HIPAA compliance — before an auditor does it for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="tel:+19147056830"
                  className="inline-flex items-center justify-center gap-3 bg-kronos-bg text-white py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-light hover:gap-5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-kronos-purple"
                  aria-label="Call us at (914) 705 6830"
                >
                  (914) 705 6830
                  <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 border border-white text-white py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-light hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-kronos-purple"
                >
                  Request a Consultation
                </Link>
              </div>
            </div>
            <div className="bg-kronos-bg/20 p-4 sm:p-6">
              <DemoRequestForm productLabel="Medical IT" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

