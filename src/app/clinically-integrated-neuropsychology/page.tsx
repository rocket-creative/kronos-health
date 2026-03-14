import type { Metadata } from "next";
import { 
  ContactSection, 
  Breadcrumbs,
  ServiceSchema,
  BreadcrumbSchema 
} from "@/components";
import {
  Stethoscope,
  ArrowRight,
  Users,
  Heart,
  MessageSquare,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Clinically Integrated Neuropsychology",
  description:
    "Streamlined referral path for mental health evaluation and care. Connect with licensed neuropsychologists through the Kronos Health Network. CPT codes 96127, 96116, 96130-96133.",
  alternates: {
    canonical: "https://kronoshealth.co/clinically-integrated-neuropsychology",
  },
  openGraph: {
    title: "Clinically Integrated Neuropsychology | Kronos Health",
    description: "Streamlined referral path for mental health evaluation and care with licensed neuropsychologists.",
    url: "https://kronoshealth.co/clinically-integrated-neuropsychology",
    siteName: "Kronos Health",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinically Integrated Neuropsychology",
    description: "Streamlined referral path for mental health evaluation and care.",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "https://kronoshealth.co" },
  { name: "Clinically Integrated Neuropsychology", url: "https://kronoshealth.co/clinically-integrated-neuropsychology" },
];

const howItWorks = [
  { title: "In Office Screening", icon: Stethoscope },
  { title: "Streamlined Referral", icon: ArrowRight },
  { title: "Enhanced Outcomes", icon: Heart },
  { title: "Provider Collaboration", icon: MessageSquare },
];

const cptCodes = [
  { code: "96127", description: "Brief emotional/behavioral assessment" },
  { code: "96116", description: "Neurobehavioral status exam" },
  { code: "96130", description: "Psychological testing evaluation" },
  { code: "96131", description: "Psychological testing, additional hour" },
  { code: "96132", description: "Neuropsychological testing evaluation" },
  { code: "96133", description: "Neuropsychological testing, additional hour" },
];

export default function NeuropsychologyPage() {
  return (
    <>
      {/* Schema Markup */}
      <ServiceSchema
        name="Clinically Integrated Neuropsychology"
        description="Streamlined referral path for mental health evaluation and care with licensed neuropsychologists. Includes in-office screening, referral management, and billing integration."
        url="https://kronoshealth.co/clinically-integrated-neuropsychology"
        serviceType="Neuropsychological Services"
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Breadcrumb Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Neuropsychology" }]} />
      </div>

      {/* Editorial Split Hero */}
      <section 
        className="min-h-[60vh] sm:min-h-[70vh] grid lg:grid-cols-2"
        aria-labelledby="neuro-hero-heading"
      >
        {/* Left: Placeholder */}
        <div 
          className="bg-kronos-gray-800 min-h-[40vh] lg:min-h-full flex items-center justify-center order-2 lg:order-1"
          aria-hidden="true"
        >
          <span className="text-xs uppercase tracking-widest text-white/20">Image</span>
        </div>

        {/* Right: Content */}
        <div className="relative bg-kronos-bg flex flex-col justify-center px-6 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-0 order-1 lg:order-2">
          <p className="text-xs tracking-widest uppercase text-white/40 mb-4 sm:mb-6">
            Integrated Care
          </p>
          
          <h1 
            id="neuro-hero-heading"
            className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white leading-none tracking-tight mb-4 sm:mb-6"
          >
            Neuro<br />
            <span className="text-white/30">psychology</span>
          </h1>

          <p className="font-body text-sm sm:text-base text-white/50 font-light leading-relaxed max-w-md mb-6 sm:mb-8">
            A streamlined path to refer patients for mental health evaluation and care, without disrupting their current care plan.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8">
            {howItWorks.slice(0, 2).map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-center gap-2 sm:gap-3 hover:bg-white/5 p-2 -m-2 transition-colors">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-kronos-cyan/10 flex items-center justify-center">
                    <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-kronos-cyan/60" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-white/40">{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works - Editorial */}
      <section 
        className="py-12 sm:py-16 lg:py-24 bg-kronos-gray-800"
        aria-labelledby="process-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8 sm:mb-12 lg:mb-20">
            <p className="text-xs tracking-widest uppercase text-white/50 mb-4">
              The Process
            </p>
            <h2 
              id="process-heading"
              className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white"
            >
              How It Works
            </h2>
          </header>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {howItWorks.map((item, i) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="hover:bg-white/5 p-3 -m-3 transition-colors">
                  <span 
                    className="text-[40px] sm:text-[50px] lg:text-[60px] font-heading text-white/[0.05] leading-none block"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="-mt-4 sm:-mt-6 relative z-10">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-kronos-cyan/10 flex items-center justify-center mb-2 sm:mb-3 lg:mb-4">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-kronos-cyan/60" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-xs sm:text-sm lg:text-base text-white">
                      {item.title}
                    </h3>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CPT Codes - Editorial Grid */}
      <section 
        className="py-12 sm:py-16 lg:py-24 bg-kronos-bg"
        aria-labelledby="cpt-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8 sm:mb-12 lg:mb-20">
            <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
              Billing Integration
            </p>
            <h2 
              id="cpt-heading"
              className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white"
            >
              CPT Codes
            </h2>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
            {cptCodes.map((item) => (
              <article key={item.code} className="bg-kronos-card p-3 sm:p-4 lg:p-5 flex items-start gap-2 sm:gap-3 lg:gap-4 hover:bg-kronos-card/80 transition-colors">
                <code className="font-mono text-xs sm:text-sm lg:text-base text-kronos-cyan bg-kronos-cyan/10 px-2 sm:px-3 py-1 flex-shrink-0">
                  {item.code}
                </code>
                <p className="font-body text-[10px] sm:text-xs lg:text-sm text-white/60 font-light">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters - Editorial */}
      <section 
        className="py-12 sm:py-16 lg:py-24 bg-kronos-card"
        aria-labelledby="why-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
            <div>
              <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
                Why It Matters
              </p>
              <h2 
                id="why-heading"
                className="font-heading text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white mb-4 sm:mb-6"
              >
                Addressing the Gap
              </h2>
              <p className="font-body text-xs sm:text-sm text-white/50 font-light leading-relaxed mb-3 sm:mb-4">
                High risk patients are often underdiagnosed when it comes to cognitive impairment, anxiety, depression, and other behavioral conditions.
              </p>
              <p className="font-body text-xs sm:text-sm text-white/50 font-light leading-relaxed">
                Our program empowers you to take action within your workflow, ensuring that no warning signs are overlooked.
              </p>
            </div>

            <div className="bg-kronos-bg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-kronos-cyan/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-kronos-cyan/60" strokeWidth={1} aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[30px] sm:text-[40px] lg:text-[50px] font-heading text-kronos-cyan leading-none">16M+</span>
                  <p className="text-[10px] sm:text-xs text-white/40">Americans with undiagnosed cognitive dysfunction</p>
                </div>
              </div>
              <div className="w-full h-px bg-white/10 mb-4 sm:mb-6" aria-hidden="true" />
              <p className="font-body text-[10px] sm:text-xs text-white/40 font-light">
                Let Kronos Health help you expand your continuum of care with clinically integrated neuropsychology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection source="neuropsychology" />
    </>
  );
}
