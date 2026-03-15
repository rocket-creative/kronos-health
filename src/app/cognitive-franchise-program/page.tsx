import type { Metadata } from "next";
import { 
  ContactSection, 
  Breadcrumbs,
  TrustSignal,
  ServiceSchema,
  BreadcrumbSchema,
  FAQSchema,
} from "@/components";
import Link from "next/link";
import {
  Brain,
  TrendingUp,
  CheckCircle,
  Activity,
  FileText,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cognitive Franchise Program",
  description:
    "A scalable cognitive health program for treating concussions, chronic pain, and cognitive decline. Join the Kronos Health franchise network. 16M+ undiagnosed Americans.",
  alternates: {
    canonical: "https://kronoshealth.co/cognitive-franchise-program",
  },
  openGraph: {
    title: "Cognitive Franchise Program | Kronos Health",
    description: "A scalable cognitive health program for treating concussions, chronic pain, and cognitive decline.",
    url: "https://kronoshealth.co/cognitive-franchise-program",
    siteName: "Kronos Health",
    type: "website",
    images: [
      {
        url: "https://kronoshealth.co/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Cognitive Franchise Program",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cognitive Franchise Program",
    description: "A scalable cognitive health program for treating concussions, chronic pain, and cognitive decline.",
    images: ["https://kronoshealth.co/opengraph-image"],
  },
};

const breadcrumbItems = [
  { name: "Home", url: "https://kronoshealth.co" },
  { name: "Cognitive Franchise Program", url: "https://kronoshealth.co/cognitive-franchise-program" },
];

const faqItems = [
  {
    question: "What is the Cognitive Franchise Program?",
    answer: "A scalable cognitive health program designed to bring cognitive care to your clinic. It addresses concussions, chronic pain, and cognitive decline through standardized assessments, therapy protocols, and ongoing monitoring.",
  },
  {
    question: "How much does it cost to join?",
    answer: "Clinics join via a yearly franchise fee that scales up to baseline by year three. Startup costs are minimal, and the program requires only one dedicated provider to launch.",
  },
  {
    question: "What does the initial evaluation include?",
    answer: "The testing protocol includes medical history, physical exam, cognitive assessment, interactive assessment, multimodal assessment, sleep study, EEG, MRI, and psychotherapy evaluation.",
  },
  {
    question: "What therapy options are available?",
    answer: "We emphasize nonpharmacological interventions including Cognitive Behavioral Therapy, ongoing reassessment, progress monitoring, and adaptive treatment. Neuropsychological Standard Assessments guide therapy decisions.",
  },
];

const riskFactors = [
  "Concussion",
  "Medications",
  "Cancer",
  "Obesity",
  "Cardiovascular",
  "Diabetes",
  "Anxiety",
  "Substance Use",
  "Poor Sleep",
  "Inactivity",
];

const focusAreas = [
  { name: "Concussion", icon: Brain },
  { name: "Chronic Pain", icon: Activity },
  { name: "Cognitive Decline", icon: TrendingUp },
];

const stats = [
  { value: "16M+", label: "Undiagnosed over 50" },
  { value: "1.7M", label: "Annual TBIs" },
  { value: "300K", label: "MVA related TBIs" },
];

const initialEvaluation = [
  "Medical History",
  "Physical Exam",
  "Cognitive Assessment",
  "Interactive Assessment",
  "Multimodal Assessment",
  "Sleep Study",
  "EEG",
  "MRI",
  "Psychotherapy Eval",
];

export default function FranchisePage() {
  return (
    <>
      {/* Schema Markup */}
      <ServiceSchema
        name="Cognitive Franchise Program"
        description="A scalable, low-cost cognitive health program for treating concussions, chronic pain, and cognitive decline. Includes medical history, cognitive assessment, and therapy protocols."
        url="https://kronoshealth.co/cognitive-franchise-program"
        serviceType="Healthcare Franchise"
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Breadcrumb Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Franchise Program" }]} />
      </div>

      {/* Editorial Split Hero */}
      <section 
        className="min-h-[60vh] sm:min-h-[70vh] grid lg:grid-cols-2"
        aria-labelledby="franchise-hero-heading"
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
            Franchise Program
          </p>
          
          <h1 
            id="franchise-hero-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-none tracking-tight mb-4 sm:mb-6"
          >
            Cognitive<br />
            <span className="text-white/30">Franchise</span>
          </h1>

          <p className="font-body text-sm sm:text-base text-white/50 font-light leading-relaxed max-w-md mb-6 sm:mb-8">
            A scalable, low cost program designed to bring cognitive care to your clinic, addressing one of the most urgent aspects of modern healthcare.
          </p>

          {/* Focus areas */}
          <div className="flex flex-wrap gap-2 sm:gap-3" role="list" aria-label="Focus areas">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div key={area.name} className="flex items-center gap-2 bg-kronos-cyan/10 px-2 sm:px-3 py-1 sm:py-2" role="listitem">
                  <Icon className="w-3 h-3 text-kronos-cyan/60" strokeWidth={1.5} aria-hidden="true" />
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-kronos-cyan">{area.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats - Editorial */}
      <section 
        className="py-10 sm:py-12 lg:py-16 bg-kronos-cyan/10 border-y border-kronos-cyan/20"
        aria-labelledby="stats-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="stats-heading" className="sr-only">Key Statistics</h2>
          <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-8">
            {stats.map((stat) => (
              <div key={stat.value} className="text-center hover:bg-white/5 p-4 -m-4 transition-colors">
                <div className="font-heading text-xl sm:text-2xl lg:text-4xl xl:text-5xl text-kronos-cyan mb-1">
                  {stat.value}
                </div>
                <p className="font-body text-[9px] sm:text-[10px] lg:text-xs text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Factors - Editorial */}
      <section 
        className="py-12 sm:py-16 lg:py-24 bg-kronos-gray-800"
        aria-labelledby="challenge-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
            <div>
              <p className="text-xs tracking-widest uppercase text-white/50 mb-4">
                The Challenge
              </p>
              <h2 
                id="challenge-heading"
                className="font-heading text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white mb-4 sm:mb-6"
              >
                Why Cognitive Health Matters
              </h2>
              <p className="font-body text-xs sm:text-sm text-white/60 font-light leading-relaxed mb-4 sm:mb-6">
                As of 2023, an estimated 16 million Americans over age 50 are living with undiagnosed cognitive dysfunction, including 7.4 million over age 65.
              </p>
            </div>

            <div className="bg-kronos-cyan/10 p-4 sm:p-6">
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-kronos-cyan mb-3 sm:mb-4">Risk Factors</p>
              <ul className="grid grid-cols-2 gap-1 sm:gap-2" role="list">
                {riskFactors.map((factor) => (
                  <li key={factor} className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-kronos-cyan/60 flex-shrink-0" strokeWidth={1.5} aria-hidden="true" />
                    <span className="font-body text-[10px] sm:text-xs text-white/60">{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Model - Editorial */}
      <section 
        className="py-12 sm:py-16 lg:py-24 bg-kronos-bg"
        aria-labelledby="model-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8 sm:mb-12 lg:mb-20">
            <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
              The Model
            </p>
            <h2 
              id="model-heading"
              className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white"
            >
              Franchise Program
            </h2>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            <article className="bg-kronos-card p-4 sm:p-6 border-l-2 border-kronos-cyan/30 hover:bg-kronos-card/80 hover:border-kronos-cyan/50 transition-colors">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-kronos-cyan/60 mb-3 sm:mb-4" strokeWidth={1} aria-hidden="true" />
              <h3 className="font-heading text-sm sm:text-base lg:text-lg text-white mb-2">Yearly Fee</h3>
              <p className="font-body text-[10px] sm:text-xs text-white/50 font-light">
                Clinics join via a yearly franchise fee, scaling up to baseline by year three.
              </p>
            </article>
            <article className="bg-kronos-card p-4 sm:p-6 border-l-2 border-kronos-cyan/30 hover:bg-kronos-card/80 hover:border-kronos-cyan/50 transition-colors">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-kronos-cyan/60 mb-3 sm:mb-4" strokeWidth={1} aria-hidden="true" />
              <h3 className="font-heading text-sm sm:text-base lg:text-lg text-white mb-2">One Provider</h3>
              <p className="font-body text-[10px] sm:text-xs text-white/50 font-light">
                Launch requires only one dedicated provider to oversee development and patient care.
              </p>
            </article>
            <article className="bg-kronos-card p-4 sm:p-6 border-l-2 border-kronos-cyan/30 hover:bg-kronos-card/80 hover:border-kronos-cyan/50 transition-colors">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-kronos-cyan/60 mb-3 sm:mb-4" strokeWidth={1} aria-hidden="true" />
              <h3 className="font-heading text-sm sm:text-base lg:text-lg text-white mb-2">Minimal Startup</h3>
              <p className="font-body text-[10px] sm:text-xs text-white/50 font-light">
                Minimal startup costs, ideal for fast integration into existing practices.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Evaluation - Editorial */}
      <section 
        className="py-12 sm:py-16 lg:py-24 bg-kronos-card"
        aria-labelledby="evaluation-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">
            <div>
              <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
                Initial Evaluation
              </p>
              <h2 
                id="evaluation-heading"
                className="font-heading text-xl sm:text-2xl lg:text-3xl text-white mb-4 sm:mb-6 lg:mb-8"
              >
                Testing Protocol
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3" role="list">
                {initialEvaluation.map((item, i) => (
                  <li key={item} className="flex items-center gap-2 sm:gap-3 bg-kronos-bg p-2 sm:p-3 hover:bg-kronos-bg/80 transition-colors">
                    <span className="font-heading text-[10px] sm:text-xs text-kronos-cyan">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-body text-[10px] sm:text-xs text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
                Therapy
              </p>
              <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl text-white mb-4 sm:mb-6 lg:mb-8">
                Reassessment
              </h3>
              <ul className="space-y-2 sm:space-y-3" role="list">
                {["Cognitive Behavioral Therapy", "Ongoing Reassessment", "Progress Monitoring", "Adaptive Treatment"].map((item) => (
                  <li key={item} className="flex items-center gap-2 sm:gap-3 bg-kronos-bg p-2 sm:p-3 hover:bg-kronos-bg/80 transition-colors">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-kronos-cyan flex-shrink-0" strokeWidth={1.5} aria-hidden="true" />
                    <span className="font-body text-[10px] sm:text-xs text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 sm:mt-6 lg:mt-8 bg-kronos-cyan/10 border border-kronos-cyan/20 p-3 sm:p-4 lg:p-6">
                <p className="font-body text-[10px] sm:text-xs text-white/50 font-light">
                  The goal is to deliver Neuropsychological Standard Assessments to guide therapy. For chronic pain, we emphasize nonpharmacological interventions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-8 sm:py-10 bg-kronos-bg border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs tracking-widest uppercase text-white/40 mb-3">Explore More</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/revenue-cycle" className="text-kronos-cyan hover:underline text-sm">
              Revenue Cycle
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/digital-health-tools" className="text-kronos-cyan hover:underline text-sm">
              Digital Health Tools
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/clinically-integrated-neuropsychology" className="text-kronos-cyan hover:underline text-sm">
              Neuropsychology
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSchema questions={faqItems} />
      <section 
        className="py-12 sm:py-16 lg:py-24 bg-kronos-gray-800"
        id="faq"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="faq-heading" className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white mb-8 sm:mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {faqItems.map((item, idx) => (
              <details 
                key={idx} 
                className="group bg-kronos-card border border-white/5 hover:border-kronos-cyan/20 transition-colors"
              >
                <summary className="flex items-center justify-between p-4 sm:p-5 cursor-pointer list-none">
                  <h3 className="font-body text-xs sm:text-sm text-white font-normal pr-4"><span className="bg-yellow-100 dark:bg-yellow-900/40">{item.question}</span></h3>
                  <span className="text-kronos-cyan flex-shrink-0" aria-hidden="true">+</span>
                </summary>
                <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                  <p className="font-body text-[10px] sm:text-xs text-white/60 font-light leading-relaxed"><span className="bg-yellow-100 dark:bg-yellow-900/40">{item.answer}</span></p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6 sm:py-8 bg-kronos-card border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustSignal 
            author="Dr. John M. Abrahams, M.D."
            credentials="Board-Certified Neurosurgeon"
            lastUpdated="2026-03-01"
          />
        </div>
      </section>

      <ContactSection source="franchise" />
    </>
  );
}
