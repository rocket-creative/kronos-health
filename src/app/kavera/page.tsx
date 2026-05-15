import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  DemoRequestForm, 
  Breadcrumbs, 
  TrustSignal,
  ServiceSchema,
  SoftwareApplicationSchema,
  BreadcrumbSchema,
  HeroBackground,
} from "@/components";
import {
  Users,
  FileText,
  Brain,
  Smartphone,
  Activity,
  ArrowRight,
  CheckCircle,
  Clock,
  Calendar,
  Shield,
  Zap,
  TrendingUp,
  ChevronDown,
  Heart,
  Moon,
  AlertCircle,
} from "lucide-react";
import { FAQSchema } from "@/components";

export const metadata: Metadata = {
  title: "Kavera — Concussion & Mental Health Platform",
  description:
    "Concussion and mental health platform powered by AI to streamline workflows and improve revenue. 12-week program with NPE-CX battery, validated mental health screeners, AI therapy sessions, and digital monitoring.",
  alternates: {
    canonical: "https://kronos.health/kavera",
  },
  openGraph: {
    title: "Kavera — Concussion & Mental Health Platform | Kronos Group",
    description: "Concussion and mental health platform powered by AI. 12-week program with NPE-CX battery, validated screeners, AI therapy sessions, and digital monitoring.",
    url: "https://kronos.health/kavera",
    siteName: "Kronos Group",
    type: "website",
    images: [
      {
        url: "https://kronos.health/kavera-og.jpg",
        width: 1200,
        height: 630,
        alt: "Kavera Concussion and Mental Health Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kavera — Concussion & Mental Health Platform",
    description: "Concussion and mental health platform powered by AI with NPE-CX battery, validated screeners, and digital monitoring.",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "https://kronos.health" },
  { name: "Kavera", url: "https://kronos.health/kavera" },
];

const programStats = [
  { value: "12 Week", label: "Treatment Cycle" },
  { value: "3", label: "Visit Types" },
  { value: "6", label: "NPE Instruments" },
  { value: "4", label: "Billable Engines" },
];


const visitTypes = [
  {
    id: "ie",
    title: "Initial Evaluation (IE)",
    subtitle: "First visit · Occurs one time",
    description: "The initial evaluation establishes the complete clinical baseline. The patient completes a comprehensive concussion history while the physician performs a neurological and vestibular exam. Neuropsychological testing is administered at this visit.",
    components: [
      { name: "History (HX)", type: "required", note: "Completed by patient" },
      { name: "Exam (EX)", type: "required", note: "Physician completes; defaults prefilled" },
      { name: "NPE-CX", type: "testing", note: "Neuropsychological assessment battery" },
      { name: "Diagnosis (DX)", type: "required", note: "ICD-10 selection with secondary codes" },
      { name: "Plan of Care (POC)", type: "required", note: "Trigger-based functional recommendations" },
    ],
  },
  {
    id: "fb",
    title: "Feedback Visit (FB)",
    subtitle: "Second visit · ~2 weeks post-IE",
    description: "The feedback visit is where the physician reviews all initial evaluation results with the patient and establishes the treatment plan. NPE results administered at the IE are formally reviewed and interpreted at this visit.",
    components: [
      { name: "History (HX)", type: "required", note: "Carried from IE visit" },
      { name: "Exam (EX)", type: "required", note: "Carried from IE; re-examined if indicated" },
      { name: "NPE Results", type: "testing", note: "Interpreted at FB; administered at IE" },
      { name: "Digital Evaluations", type: "optional", note: "Included if available" },
      { name: "Diagnosis + POC", type: "required", note: "Updated treatment plan" },
    ],
  },
  {
    id: "re",
    title: "Re-Evaluation (RE)",
    subtitle: "Recurring · Every 12 weeks",
    description: "The re-evaluation is the program's longitudinal checkpoint. It includes an updated patient history, all NPE assessments since the last Feedback Visit, a full CRT session summary with trends, and cumulative digital evaluation data.",
    components: [
      { name: "History (HX)", type: "required", note: "Original" },
      { name: "History Update (HU)", type: "required", note: "Patient completes at RE visit" },
      { name: "Exam (EX)", type: "optional", note: "Re-administered at physician discretion" },
      { name: "All NPEs since FB", type: "testing", note: "Scores + trends" },
      { name: "DE + CRT Summary", type: "testing", note: "Sessions, scores, trends" },
      { name: "Diagnosis + POC", type: "required", note: "Updated plan of care" },
    ],
  },
];


const ongoingServices = [
  { service: "Weekly Digital Check-ins", description: "Symptom tracking via SMS/email" },
  { service: "Cognitive Remediation Therapy", description: "Brain training exercises 2×/week" },
  { service: "Monthly NPE Testing", description: "Full battery re-administration" },
  { service: "AI Therapy Sessions", description: "Validated mental health support with provider oversight" },
];

const practiceTypes = [
  { name: "Orthopedic Surgery", icon: Activity },
  { name: "Neurosurgery", icon: Brain },
  { name: "Sports Medicine", icon: Users },
  { name: "Mental Health Programs", icon: Heart },
];

const practiceValues = [
  "Covers both concussion and mental health workflows",
  "Capture post injury revenue already entering your practice",
  "Zero added staff required",
  "No referrals lost",
  "Stronger compliance and documentation",
  "Recurring engagement every 12 weeks",
  "Built by clinicians for clinicians",
  "Deploys in 30 days",
  "Monthly license by volume",
];

const npeBattery = [
  { abbr: "PCSS", name: "Post-Concussion Symptom Scale", desc: "22 symptom self-report validating concussion symptom burden", icon: Brain },
  { abbr: "HIT-6", name: "Headache Impact Test", desc: "Measures headache impact on daily functioning", icon: AlertCircle },
  { abbr: "PHQ-9", name: "Patient Health Questionnaire", desc: "Depression severity screening and monitoring", icon: Heart },
  { abbr: "GAD-7", name: "Generalized Anxiety Disorder Scale", desc: "Anxiety severity measure for cognitive complaints", icon: Activity },
  { abbr: "PCL-5", name: "PTSD Checklist (DSM-5)", desc: "Trauma symptom assessment for injury-related cases", icon: Shield },
  { abbr: "PSQI", name: "Pittsburgh Sleep Quality Index", desc: "Sleep quality assessment critical for recovery", icon: Moon },
];

const platformBenefits = [
  { title: "Reduced Documentation Time", desc: "Intelligent defaults prefill normal findings, letting physicians document only deviations", icon: Zap },
  { title: "Automated Plan of Care", desc: "Clinical findings automatically generate customized treatment recommendations", icon: FileText },
  { title: "Longitudinal Tracking", desc: "All assessment data stored and trended across visits without manual entry", icon: TrendingUp },
  { title: "Standardized Protocols", desc: "Evidence-based workflows ensure consistent care across all providers", icon: CheckCircle },
];

const faqItems = [
  {
    question: "What practices is Kavera designed for?",
    answer: "Kavera is built for orthopedic surgery, neurosurgery, sports medicine, dedicated concussion programs, and mental health practices. Any practice managing post-concussion or behavioral health patients can benefit from the standardized protocol and longitudinal tracking.",
  },
  {
    question: "How quickly can we deploy Kavera?",
    answer: "Most practices are operational within 30 days. Kavera requires no EHR integration, no complex IT setup, and minimal training. Your team can start with existing patients immediately.",
  },
  {
    question: "Does Kavera require EHR integration?",
    answer: "No. Kavera operates as a standalone platform, eliminating the delays and costs associated with EHR integration. Reports can be exported and added to your existing medical records.",
  },
  {
    question: "What clinical instruments are included?",
    answer: "The NPE-CX battery includes six validated, peer-reviewed instruments: PCSS, HIT-6, PHQ-9, GAD-7, PCL-5, and PSQI. All are administered digitally and scored automatically. Mental health screeners (PHQ-9, GAD-7, PCL-5, PSQI) serve dual duty for both concussion and behavioral health workflows.",
  },
  {
    question: "How does Kavera handle mental health workflows?",
    answer: "Kavera includes validated screening via PHQ-9, GAD-7, PCL-5, and PSQI, plus AI therapy sessions with suicide-risk alerts that are cleared by a provider before any action is taken. The platform is designed to extend concussion care into mental health management without adding administrative burden.",
  },
  {
    question: "Is training required for staff?",
    answer: "Minimal training is needed. The platform guides users through each visit type with structured forms and intelligent defaults. Most clinical teams are comfortable within a single session.",
  },
  {
    question: "Is Kavera HIPAA compliant?",
    answer: "Yes. Kavera is built on HIPAA-compliant infrastructure with encrypted data storage, secure access controls, and audit logging. Patient data is never shared without authorization.",
  },
  {
    question: "What support is available?",
    answer: "All Kavera licenses include dedicated onboarding, clinical support, and ongoing technical assistance. Our team includes clinicians who understand concussion and mental health management workflows.",
  },
];

export default function KaveraPage() {
  return (
    <>
      {/* Schema Markup */}
      <ServiceSchema
        name="Kavera Concussion and Mental Health Platform"
        description="Comprehensive concussion and mental health platform powered by AI with neuropsychological testing, validated mental health screeners, AI therapy sessions, and digital monitoring for medical practices."
        url="https://kronos.health/kavera"
        serviceType="Healthcare Software"
      />
      <SoftwareApplicationSchema
        name="Kavera"
        description="Concussion and mental health platform powered by AI with NPE-CX battery, validated screeners, and digital symptom tracking."
        url="https://kronos.health/kavera"
        applicationCategory="HealthApplication"
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Breadcrumb Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Kavera" }]} />
      </div>

      {/* Full-Width Hero */}
      <section 
        className="relative min-h-[80dvh] sm:min-h-dvh bg-kronos-bg overflow-hidden pt-safe-top"
        aria-labelledby="kavera-hero-heading"
      >
        <HeroBackground type="rings" color="15, 189, 213" />

        <div className="relative z-10 min-h-[80dvh] sm:min-h-dvh flex items-center">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-0">
            <div className="backdrop-blur-md bg-black/40 border border-white/10 p-8 sm:p-10 lg:p-14 max-w-xl">
              <p className="text-xs tracking-widest uppercase text-white/50 mb-4 sm:mb-6">
                Concussion & Mental Health Platform
              </p>
              
              {/* Kavera Logo */}
              <div className="mb-6 sm:mb-8">
                <Image
                  src="/kavera-logo-white.svg"
                  alt="Kavera"
                  width={320}
                  height={90}
                  className="w-[180px] sm:w-[240px] lg:w-[280px] h-auto"
                  priority
                />
              </div>
              
              <h1 
                id="kavera-hero-heading"
                className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white leading-tight mb-4"
              >
                Concussion & Mental Health Platform
              </h1>

              <p className="font-body text-sm sm:text-base text-white/70 font-light leading-relaxed mb-4">
                Powered by AI to streamline workflows and improve revenue. A comprehensive management system combining clinical history, neurological examination protocols, advanced neuropsychological testing, and validated mental health screening.
              </p>

              <p className="font-body text-xs text-kavera-cyan font-light leading-relaxed mb-6 sm:mb-8">
                Built for sports medicine, orthopedics, neurology, concussion programs, and mental health practices. Structured, standardized, recurring.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#demo"
                  className="inline-flex items-center justify-center gap-4 bg-kavera-cyan text-kronos-bg py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-light hover:gap-6 transition-all w-full sm:w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-kavera-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
                >
                  Request Demo
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="#visits"
                  className="inline-flex items-center justify-center gap-2 text-white/60 py-3 sm:py-4 uppercase tracking-widest text-xs hover:text-white transition-colors focus:outline-none focus:text-white"
                >
                  See Visit Protocol
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Stats */}
      <section 
        className="py-10 sm:py-12 lg:py-16 bg-kavera-blue/20 border-y border-kavera-cyan/20" 
        id="program"
        aria-labelledby="program-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="program-heading" className="sr-only">Program Overview</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {programStats.map((stat) => (
              <div key={stat.value} className="text-center hover:bg-white/5 p-4 -m-4 transition-colors">
                <div className="font-heading text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-kavera-cyan mb-1">
                  {stat.value}
                </div>
                <p className="font-body text-[10px] sm:text-xs text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[10px] sm:text-xs text-white/40 mt-4 sm:mt-6">
            Comprehensive concussion and mental health management protocol
          </p>
        </div>
      </section>

      {/* Visit Types */}
      <section 
        className="py-12 sm:py-16 lg:py-24 bg-kronos-gray-800" 
        id="visits"
        aria-labelledby="visits-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-10 sm:mb-12 lg:mb-16">
            <p className="text-xs tracking-widest uppercase text-white/50 mb-4">
              Visit Protocol
            </p>
            <h2 
              id="visits-heading"
              className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white mb-4"
            >
              Three Visit Types. One Standardized System.
            </h2>
            <p className="font-body text-xs sm:text-sm text-white/60 font-light max-w-2xl">
              Kavera structures concussion and mental health management into three defined visit types — each with its own form requirements, testing components, and automatically assembled clinical report.
            </p>
          </header>

          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {visitTypes.map((visit, idx) => (
              <article 
                key={visit.id} 
                className="bg-kronos-gray-700 p-6 sm:p-8 lg:p-10 border-l-4 border-kavera-cyan hover:bg-kronos-gray-600 transition-colors"
                aria-labelledby={`visit-${visit.id}-title`}
              >
                <div className="flex items-start justify-between mb-6 sm:mb-8">
                  <div>
                    <span 
                      className="text-[50px] sm:text-[70px] lg:text-[90px] font-heading text-white/10 leading-none block -mb-6 sm:-mb-8"
                      aria-hidden="true"
                    >
                      0{idx + 1}
                    </span>
                    <h3 
                      id={`visit-${visit.id}-title`}
                      className="font-heading text-xl sm:text-2xl lg:text-3xl text-white relative z-10"
                    >
                      {visit.title}
                    </h3>
                    <p className="font-mono text-xs sm:text-sm text-kavera-cyan mt-2 sm:mt-3">{visit.subtitle}</p>
                  </div>
                </div>

                <p className="font-body text-sm sm:text-base text-white/60 font-light mb-6 sm:mb-8 leading-relaxed max-w-3xl">
                  {visit.description}
                </p>

              </article>
            ))}
          </div>
        </div>
      </section>


      {/* Ongoing Services */}
      <section 
        className="py-12 sm:py-16 lg:py-24 bg-kronos-gray-800"
        aria-labelledby="services-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <p className="text-xs tracking-widest uppercase text-white/50 mb-4">
                Between Visits
              </p>
              <h2 
                id="services-heading"
                className="font-heading text-xl sm:text-2xl lg:text-3xl text-white mb-4"
              >
                Ongoing Recovery Services
              </h2>
              <p className="font-body text-xs sm:text-sm text-white/60 font-light mb-6 sm:mb-8">
                Four integrated recovery programs keep patients engaged and recovering between clinic visits.
              </p>

              <ul className="space-y-2 sm:space-y-3" role="list">
                {ongoingServices.map((item) => (
                  <li key={item.service} className="flex items-center justify-between bg-kronos-gray-700 p-2 sm:p-3 hover:bg-kronos-gray-600 transition-colors">
                    <span className="text-xs sm:text-sm text-white">{item.service}</span>
                    <span className="text-[10px] sm:text-xs text-kavera-cyan/70">{item.description}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {/* CRT Card */}
              <article className="bg-kavera-blue/20 p-4 sm:p-6 border-l-2 border-kavera-cyan hover:bg-kavera-blue/30 transition-colors">
                <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-kavera-cyan/60 mb-4" strokeWidth={1} aria-hidden="true" />
                <h3 className="font-heading text-sm sm:text-base lg:text-lg text-white mb-2">
                  Computerized Cognitive Remediation Therapy
                </h3>
                <p className="font-body text-[10px] sm:text-xs text-white/60 font-light mb-4">
                  Brain training exercises based on Montreal Cognitive Assessment framework. Strengthens working memory, processing speed, attention, and executive function.
                </p>
                <dl className="grid grid-cols-2 gap-2 text-[10px] sm:text-xs">
                  <div className="flex justify-between">
                    <dt className="text-white/50">Frequency</dt>
                    <dd className="text-white font-bold">2×/week</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-white/50">Duration</dt>
                    <dd className="text-white font-bold">12 weeks</dd>
                  </div>
                </dl>
              </article>

              {/* Digital Check-ins Card */}
              <article className="bg-kronos-gray-700 p-4 sm:p-6 border-l-2 border-kavera-cyan">
                <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-kavera-cyan/60 mb-4" strokeWidth={1} aria-hidden="true" />
                <h3 className="font-heading text-sm sm:text-base lg:text-lg text-white mb-2">
                  Weekly Digital Check-Ins
                </h3>
                <p className="font-body text-[10px] sm:text-xs text-white/60 font-light mb-4">
                  Patients receive secure weekly check-in via SMS or email. Weekly data streams into dashboard for monitoring without requiring office visits.
                </p>
                <dl className="grid grid-cols-2 gap-2 text-[10px] sm:text-xs">
                  <div className="flex justify-between">
                    <dt className="text-white/50">Instruments</dt>
                    <dd className="text-white font-bold">PCSS, PHQ-9, GAD-7</dd>
                  </div>
                </dl>
              </article>

              {/* AI Therapy Card */}
              <article className="bg-kavera-blue/20 p-4 sm:p-6 border-l-2 border-kavera-cyan hover:bg-kavera-blue/30 transition-colors">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-kavera-cyan/60 mb-4" strokeWidth={1} aria-hidden="true" />
                <h3 className="font-heading text-sm sm:text-base lg:text-lg text-white mb-2">
                  AI Therapy Sessions
                </h3>
                <p className="font-body text-[10px] sm:text-xs text-white/60 font-light mb-4">
                  Validated mental health support with suicide-risk alerts cleared by a provider before any action is taken. Extends concussion care into behavioral health management.
                </p>
                <dl className="grid grid-cols-2 gap-2 text-[10px] sm:text-xs">
                  <div className="flex justify-between">
                    <dt className="text-white/50">Oversight</dt>
                    <dd className="text-white font-bold">Provider-cleared</dd>
                  </div>
                </dl>
              </article>

              {/* Monthly NPE Card */}
              <article className="bg-kronos-card p-4 sm:p-6 border-l-2 border-white/30 hover:bg-kronos-card/80 transition-colors">
                <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-white/50 mb-4" strokeWidth={1} aria-hidden="true" />
                <h3 className="font-heading text-sm sm:text-base lg:text-lg text-white mb-2">
                  Monthly Neuropsychological Assessments
                </h3>
                <p className="font-body text-[10px] sm:text-xs text-white/60 font-light mb-4">
                  Full NPE-CX battery re-administered monthly throughout treatment cycle. Each session generates score snapshot aggregated in RE report.
                </p>
                <dl className="grid grid-cols-2 gap-2 text-[10px] sm:text-xs">
                  <div className="flex justify-between">
                    <dt className="text-white/50">Battery</dt>
                    <dd className="text-white font-bold">6 instruments</dd>
                  </div>
                </dl>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Target Practices + Values */}
      <section 
        className="py-12 sm:py-16 lg:py-24 bg-kronos-bg"
        aria-labelledby="practices-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Target Practices */}
            <div>
              <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
                Built For
              </p>
              <h2 
                id="practices-heading"
                className="font-heading text-xl sm:text-2xl lg:text-3xl text-white mb-6 sm:mb-8"
              >
                Clinical Programs
              </h2>

              <ul className="space-y-3 sm:space-y-4" role="list">
                {practiceTypes.map((practice) => {
                  const Icon = practice.icon;
                  return (
                    <li key={practice.name} className="flex items-center gap-4 bg-kronos-card p-3 sm:p-4 hover:bg-kronos-card/80 transition-colors">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-kavera-blue/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-kavera-cyan/60" strokeWidth={1.5} aria-hidden="true" />
                      </div>
                      <span className="font-heading text-xs sm:text-sm lg:text-base text-white">{practice.name}</span>
                    </li>
                  );
                })}
              </ul>

              <p className="font-body text-[10px] sm:text-xs text-white/40 font-light mt-4 sm:mt-6">
                Streamlines workflow, reduces documentation burden, and standardizes concussion and mental health protocols.
              </p>
            </div>

            {/* Why Kavera */}
            <div>
              <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
                Practice Impact
              </p>
              <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl text-white mb-6 sm:mb-8">
                Why Kavera
              </h3>

              <ul className="space-y-2 sm:space-y-3 lg:space-y-4" role="list">
                {practiceValues.map((value) => (
                  <li key={value} className="flex items-start gap-3 sm:gap-4">
                    <CheckCircle className="w-4 h-4 text-kavera-cyan flex-shrink-0 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
                    <span className="font-body text-[10px] sm:text-xs lg:text-sm text-white/70">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Example */}
      <section 
        className="py-12 sm:py-16 lg:py-24 bg-kronos-card"
        aria-labelledby="example-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8 sm:mb-12">
            <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
              Clinical Example
            </p>
            <h2 
              id="example-heading"
              className="font-heading text-xl sm:text-2xl lg:text-3xl text-white mb-4"
            >
              Patient Journey
            </h2>
            <p className="font-body text-xs sm:text-sm text-white/50 font-light">
              A 35 year old involved in a motor vehicle accident sustaining a concussion presents for complete evaluation. She has severe headache and dizziness with some irritability.
            </p>
          </header>

          <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
            <article className="bg-kronos-bg p-4 sm:p-6 border-t-2 border-kavera-cyan hover:bg-kronos-bg/80 transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-kavera-cyan" aria-hidden="true" />
                <span className="font-mono text-[10px] sm:text-xs text-kavera-cyan">Initial Visit</span>
              </div>
              <dl className="space-y-2 text-[10px] sm:text-xs">
                <div className="flex justify-between">
                  <dt className="text-white/60">History & Physical</dt>
                  <dd className="text-white">Complete evaluation</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-white/60">NPE-CX Battery</dt>
                  <dd className="text-white">6 instruments</dd>
                </div>
              </dl>
              <p className="text-[10px] sm:text-xs text-white/40 mt-4">
                Patient told to rest, no work, reduce screen time for 2 weeks.
              </p>
            </article>

            <article className="bg-kronos-bg p-4 sm:p-6 border-t-2 border-kronos-gray-500 hover:bg-kronos-bg/80 transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-4 h-4 text-kronos-gray-400" aria-hidden="true" />
                <span className="font-mono text-[10px] sm:text-xs text-kronos-gray-400">Feedback Visit</span>
              </div>
              <dl className="space-y-2 text-[10px] sm:text-xs">
                <div className="flex justify-between">
                  <dt className="text-white/60">NPE Interpretation</dt>
                  <dd className="text-white">Results review</dd>
                </div>
              </dl>
              <p className="text-[10px] sm:text-xs text-white/40 mt-4">
                Scores past thresholds. Diagnosis confirmed. Enrolled in Digital Evaluations, CRT 2×/week, Monthly NPE, AI Therapy.
              </p>
            </article>

            <article className="bg-kronos-bg p-4 sm:p-6 border-t-2 border-kavera-cyan hover:bg-kronos-bg/80 transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="w-4 h-4 text-kavera-cyan" aria-hidden="true" />
                <span className="font-mono text-[10px] sm:text-xs text-kavera-cyan">Re-Evaluation (12 wks)</span>
              </div>
              <dl className="space-y-2 text-[10px] sm:text-xs">
                <div className="flex justify-between">
                  <dt className="text-white/60">History Update</dt>
                  <dd className="text-white">Progress check</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-white/60">NPE-CX Retest</dt>
                  <dd className="text-white">Trend analysis</dd>
                </div>
              </dl>
              <p className="text-[10px] sm:text-xs text-white/40 mt-4">
                Continue program cycle until symptoms subside.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* NPE-CX Battery Section */}
      <section 
        className="py-12 sm:py-16 lg:py-24 bg-kronos-gray-800"
        id="battery"
        aria-labelledby="battery-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-10 sm:mb-12 lg:mb-16">
            <p className="text-xs tracking-widest uppercase text-white/50 mb-4 italic">
              Neuropsychological Battery
            </p>
            <h2 
              id="battery-heading"
              className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white mb-4"
            >
              <em className="not-italic">Six Validated Instruments.</em>{" "}
              <em className="text-kavera-cyan">Complete Cognitive Picture.</em>
            </h2>
            <p className="font-body text-xs sm:text-sm text-white/60 font-light max-w-2xl italic">
              The NPE-CX battery combines gold-standard instruments for concussion-related cognitive and psychological assessment — administered digitally, scored automatically, and compared against validated clinical benchmarks. PHQ-9, GAD-7, PCL-5, and PSQI also serve the mental health workflow.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {npeBattery.map((item) => {
              const Icon = item.icon;
              return (
                <article 
                  key={item.abbr} 
                  className="bg-kronos-bg p-4 sm:p-6 border border-white/5 hover:border-kavera-cyan/30 transition-colors group"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 bg-kavera-blue/20 flex items-center justify-center flex-shrink-0 group-hover:bg-kavera-blue/30 transition-colors">
                      <Icon className="w-4 h-4 text-kavera-cyan/60" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <div>
                      <span className="font-heading text-lg sm:text-xl text-kavera-cyan">{item.abbr}</span>
                    </div>
                  </div>
                  <h3 className="font-body text-xs sm:text-sm text-white font-normal mb-2 italic">{item.name}</h3>
                  <p className="font-body text-[10px] sm:text-xs text-white/50 font-light italic">{item.desc}</p>
                </article>
              );
            })}
          </div>

          <p className="text-center text-[10px] sm:text-xs text-white/40 mt-6 sm:mt-8 italic">
            All instruments are peer-reviewed and validated for both clinical and population-level screening contexts.
          </p>
        </div>
      </section>

      {/* Platform Benefits Section */}
      <section 
        className="py-12 sm:py-16 lg:py-24 bg-kronos-bg"
        aria-labelledby="benefits-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-10 sm:mb-12 lg:mb-16 text-center">
            <p className="text-xs tracking-widest uppercase text-white/50 mb-4 italic">
              Platform Advantages
            </p>
            <h2 
              id="benefits-heading"
              className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white mb-4"
            >
              <em className="not-italic">Designed for</em>{" "}
              <em className="text-kavera-cyan">Clinical Efficiency</em>
            </h2>
            <p className="font-body text-xs sm:text-sm text-white/60 font-light max-w-2xl mx-auto italic">
              Kavera streamlines every aspect of concussion and mental health management, from initial assessment through longitudinal outcomes tracking.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {platformBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article 
                  key={benefit.title} 
                  className="bg-kronos-card p-5 sm:p-6 lg:p-8 border-l-2 border-kavera-cyan/50 hover:border-kavera-cyan transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-kavera-blue/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-kavera-cyan/70" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm sm:text-base lg:text-lg text-white mb-2 italic">{benefit.title}</h3>
                      <p className="font-body text-[10px] sm:text-xs lg:text-sm text-white/60 font-light italic">{benefit.desc}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section 
        className="py-10 sm:py-12 lg:py-16 bg-kavera-blue/10 border-y border-kavera-cyan/10"
        aria-labelledby="trust-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="trust-heading" className="sr-only">Trust and Compliance</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <Shield className="w-8 h-8 text-kavera-cyan/60 mx-auto mb-3" strokeWidth={1} aria-hidden="true" />
              <p className="font-heading text-xs sm:text-sm text-white italic">HIPAA Compliant</p>
              <p className="font-body text-[9px] sm:text-[10px] text-white/40 mt-1 italic">Secure infrastructure</p>
            </div>
            <div className="text-center">
              <FileText className="w-8 h-8 text-kavera-cyan/60 mx-auto mb-3" strokeWidth={1} aria-hidden="true" />
              <p className="font-heading text-xs sm:text-sm text-white italic">Peer-Reviewed</p>
              <p className="font-body text-[9px] sm:text-[10px] text-white/40 mt-1 italic">Validated instruments</p>
            </div>
            <div className="text-center">
              <Brain className="w-8 h-8 text-kavera-cyan/60 mx-auto mb-3" strokeWidth={1} aria-hidden="true" />
              <p className="font-heading text-xs sm:text-sm text-white italic">Clinician-Built</p>
              <p className="font-body text-[9px] sm:text-[10px] text-white/40 mt-1 italic">By neurosurgeons</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-8 h-8 text-kavera-cyan/60 mx-auto mb-3" strokeWidth={1} aria-hidden="true" />
              <p className="font-heading text-xs sm:text-sm text-white italic">Evidence-Based</p>
              <p className="font-body text-[9px] sm:text-[10px] text-white/40 mt-1 italic">Clinical protocols</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSchema questions={faqItems} />
      <section 
        className="py-12 sm:py-16 lg:py-24 bg-kronos-bg"
        id="faq"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-10 sm:mb-12 text-center">
            <p className="text-xs tracking-widest uppercase text-white/50 mb-4 italic">
              Common Questions
            </p>
            <h2 
              id="faq-heading"
              className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white"
            >
              Frequently Asked Questions
            </h2>
          </header>

          <div className="space-y-3 sm:space-y-4">
            {faqItems.map((item, idx) => (
              <details 
                key={idx} 
                className="group bg-kronos-card border border-white/5 hover:border-kavera-cyan/20 transition-colors"
              >
                <summary className="flex items-center justify-between p-4 sm:p-5 cursor-pointer list-none">
                  <h3 className="font-body text-xs sm:text-sm text-white font-normal pr-4 italic">{item.question}</h3>
                  <ChevronDown className="w-4 h-4 text-kavera-cyan/60 flex-shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                  <p className="font-body text-[10px] sm:text-xs text-white/60 font-light leading-relaxed italic">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* E-E-A-T Trust Signal */}
      <section className="py-6 sm:py-8 bg-kronos-bg border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustSignal 
            author="Dr. John M. Abrahams, M.D."
            credentials="Board-Certified Neurosurgeon"
            reviewedBy="Clinical Advisory Board"
            lastUpdated="2026-03-01"
          />
        </div>
      </section>

      {/* CTA */}
      <section 
        className="py-12 sm:py-16 lg:py-24 bg-kavera-cyan" 
        id="demo"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h2 
                id="cta-heading"
                className="font-heading text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-kronos-bg mb-4"
              >
                Streamline Concussion & Mental Health Care
              </h2>
              <p className="font-body text-xs sm:text-sm lg:text-base text-kronos-bg/70 font-light mb-4">
                Kavera deploys into existing practices without EHR integration or extensive IT setup. Start in 30 days, not months.
              </p>
              <ul className="space-y-2 mb-6 sm:mb-8" role="list">
                <li className="flex items-center gap-2 text-xs sm:text-sm text-kronos-bg/80">
                  <CheckCircle className="w-4 h-4" aria-hidden="true" />
                  Covers both concussion and mental health workflows
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm text-kronos-bg/80">
                  <CheckCircle className="w-4 h-4" aria-hidden="true" />
                  Visit caverahealth.com for the full product experience
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm text-kronos-bg/80">
                  <CheckCircle className="w-4 h-4" aria-hidden="true" />
                  Short training, operational in a day
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="tel:+19147056830"
                  className="inline-flex items-center justify-center gap-3 bg-kronos-bg text-white py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-light hover:gap-5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-kavera-cyan"
                  aria-label="Call us at (914) 705 6830"
                >
                  (914) 705 6830
                  <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </Link>
                <a
                  href="https://caverahealth.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 border border-kronos-bg/30 text-kronos-bg py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-light hover:gap-5 hover:border-kronos-bg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-kavera-cyan"
                >
                  Visit caverahealth.com
                  <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="bg-kronos-bg/10 p-4 sm:p-6">
              <DemoRequestForm productLabel="Kavera" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
