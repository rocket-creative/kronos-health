import type { Metadata } from "next";
import { 
  ContactSection, 
  Breadcrumbs,
  ServiceSchema,
  BreadcrumbSchema 
} from "@/components";
import {
  MessageSquare,
  Activity,
  FileText,
  CheckCircle,
  Users,
  ClipboardList,
  Send,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Health Tools — Tappy, AISA, DEM",
  description:
    "Turnkey digital health tools for providers. Tappy SMS cognitive health assistant, AISA spine recovery guide, and Digital Evaluation Module for automated CPT billing.",
  alternates: {
    canonical: "https://kronoshealth.co/digital-health-tools",
  },
  openGraph: {
    title: "Digital Health Tools — Tappy, AISA, DEM | Kronos Health",
    description: "Turnkey digital health tools for providers. Tappy, AISA, and DEM for automated patient monitoring and billing.",
    url: "https://kronoshealth.co/digital-health-tools",
    siteName: "Kronos Health",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Health Tools — Tappy, AISA, DEM",
    description: "Turnkey digital health tools for providers with automated CPT billing.",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "https://kronoshealth.co" },
  { name: "Digital Health Tools", url: "https://kronoshealth.co/digital-health-tools" },
];

const specialties = [
  "Orthopedics",
  "Neurosurgery",
  "Neurology",
  "Trauma",
  "Cardiology",
  "Physiatry",
];

const turnkeyServices = [
  { title: "Enrollment", icon: Users },
  { title: "Data Review", icon: ClipboardList },
  { title: "Note Generation", icon: FileText },
  { title: "EMR Submission", icon: Send },
];

const solutions = [
  {
    name: "Tappy",
    subtitle: "Cognitive Health",
    description: "SMS-based tool that collects essential cognitive health data through patient mobile phones.",
    features: ["EMR integration", "Automated CPT billing", "Minimal effort engagement"],
    icon: MessageSquare,
  },
  {
    name: "AISA",
    subtitle: "Spine Outcomes",
    description: "Artificial Intelligent Spine Assistant guides patients through post operative recovery.",
    features: ["Adaptable for any specialty", "Better compliance", "Trackable outcomes"],
    icon: Activity,
  },
  {
    name: "DEM",
    subtitle: "Automated Billing",
    description: "Software that applies CPT codes for digital health to ensure proper reimbursement.",
    features: ["SMS based technology", "Automated documentation", "Proper reimbursement"],
    icon: FileText,
  },
];

export default function DigitalHealthPage() {
  return (
    <>
      {/* Schema Markup */}
      <ServiceSchema
        name="Digital Health Tools"
        description="Turnkey digital health tools including Tappy SMS cognitive health assistant, AISA spine recovery guide, and Digital Evaluation Module for automated CPT billing."
        url="https://kronoshealth.co/digital-health-tools"
        serviceType="Healthcare Software"
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Breadcrumb Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Digital Health Tools" }]} />
      </div>

      {/* Editorial Split Hero */}
      <section 
        className="min-h-[60vh] sm:min-h-[70vh] grid lg:grid-cols-2"
        aria-labelledby="digital-hero-heading"
      >
        {/* Left: Placeholder */}
        <div 
          className="bg-kronos-gray-800 min-h-[40vh] lg:min-h-full flex items-center justify-center"
          aria-hidden="true"
        >
          <span className="text-xs uppercase tracking-widest text-white/20">Image</span>
        </div>

        {/* Right: Content */}
        <div className="relative bg-kronos-bg flex flex-col justify-center px-6 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-0">
          <p className="text-xs tracking-widest uppercase text-white/40 mb-4 sm:mb-6">
            Digital Health
          </p>
          
          <h1 
            id="digital-hero-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-none tracking-tight mb-4 sm:mb-6"
          >
            Digital<br />
            <span className="text-white/30">Tools</span>
          </h1>

          <p className="font-body text-sm sm:text-base text-white/50 font-light leading-relaxed max-w-md mb-6 sm:mb-8">
            Streamlining patient monitoring and reimbursement with proven tools built on existing CMS CPT codes.
          </p>

          {/* Specialties */}
          <div className="flex flex-wrap gap-2" role="list" aria-label="Supported specialties">
            {specialties.map((s) => (
              <span 
                key={s} 
                className="text-[10px] sm:text-xs uppercase tracking-widest text-white/50 bg-white/5 px-2 sm:px-3 py-1 hover:bg-white/10 transition-colors"
                role="listitem"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Turnkey Services - Editorial */}
      <section 
        className="py-10 sm:py-12 lg:py-16 bg-kronos-card border-y border-white/5"
        aria-labelledby="turnkey-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="turnkey-heading" className="sr-only">Turnkey Services</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {turnkeyServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="text-center hover:bg-white/5 p-3 -m-3 transition-colors">
                  <span 
                    className="text-[35px] sm:text-[40px] lg:text-[50px] font-heading text-white/[0.05] block mb-2"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-kronos-cyan/10 flex items-center justify-center mx-auto mb-2 sm:mb-3 -mt-4 sm:-mt-6 relative z-10">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-kronos-cyan/60" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-xs sm:text-sm lg:text-base text-white">{service.title}</h3>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions - Editorial Grid */}
      <section 
        className="py-12 sm:py-16 lg:py-24 bg-kronos-gray-800"
        aria-labelledby="solutions-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8 sm:mb-12 lg:mb-20">
            <p className="text-xs tracking-widest uppercase text-white/50 mb-4">
              Our Solutions
            </p>
            <h2 
              id="solutions-heading"
              className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white"
            >
              Digital Tools
            </h2>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <article key={solution.name} className="bg-kronos-cyan/10 p-4 sm:p-6 border-l-2 border-kronos-cyan/30 hover:bg-kronos-cyan/15 hover:border-kronos-cyan/50 transition-colors">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-kronos-cyan/20 flex items-center justify-center mb-3 sm:mb-4 lg:mb-6">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-kronos-cyan/60" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl text-white mb-1">
                    {solution.name}
                  </h3>
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-kronos-cyan mb-3 sm:mb-4">
                    {solution.subtitle}
                  </p>
                  <p className="font-body text-xs sm:text-sm text-white/60 font-light leading-relaxed mb-3 sm:mb-4 lg:mb-6">
                    {solution.description}
                  </p>
                  <ul className="space-y-1 sm:space-y-2" role="list">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-kronos-cyan/60" strokeWidth={1.5} aria-hidden="true" />
                        <span className="font-body text-[10px] sm:text-xs text-white/50">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <ContactSection source="digital_health" />
    </>
  );
}
