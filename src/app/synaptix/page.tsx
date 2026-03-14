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
  AlertTriangle,
  Clock,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Synaptix — Concussion Assessment & Recovery Platform",
  description:
    "Structured, billable, recurring concussion management software for orthopedic, neurosurgery, and sports medicine practices. 12-week program with $260K annual revenue potential. NPE-CX battery, cognitive remediation, digital monitoring.",
  alternates: {
    canonical: "https://kronoshealth.co/synaptix",
  },
  openGraph: {
    title: "Synaptix — Concussion Assessment & Recovery Platform | Kronos Health",
    description: "Structured, billable, recurring concussion management software. 12-week program with $260K annual revenue potential.",
    url: "https://kronoshealth.co/synaptix",
    siteName: "Kronos Health",
    type: "website",
    images: [
      {
        url: "https://kronoshealth.co/synaptix-og.jpg",
        width: 1200,
        height: 630,
        alt: "Synaptix Concussion Management Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Synaptix — Concussion Assessment & Recovery Platform",
    description: "Structured, billable concussion management software with $260K annual revenue potential.",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "https://kronoshealth.co" },
  { name: "Synaptix", url: "https://kronoshealth.co/synaptix" },
];

const revenueStats = [
  { value: "$260K", label: "Annual Revenue Potential" },
  { value: "$1.5K–$5K", label: "Per Patient Per Year" },
  { value: "12 Week", label: "Treatment Cycle" },
  { value: "3", label: "Billable Visit Types" },
];

const testingBattery = [
  { abbr: "PCSS", name: "Post-Concussion Symptom Scale", desc: "22 symptom self-report scale. Threshold >27 triggers CRT enrollment. Tracked at every NPE session.", freq: "Monthly / Every visit" },
  { abbr: "HIT-6", name: "Headache Impact Test", desc: "Measures headache impact on daily functioning. Score >59 indicates severe impact and triggers cognitive remediation.", freq: "Monthly" },
  { abbr: "PHQ-9", name: "Patient Health Questionnaire", desc: "Depression severity screening. Score >10 triggers CognificaChat referral (2×/week × 12 weeks).", freq: "Monthly" },
  { abbr: "GAD-7", name: "Generalized Anxiety Disorder Scale", desc: "Anxiety severity measure. Score >10 co-triggers mental health referral with PHQ-9.", freq: "Monthly" },
  { abbr: "PCL-5", name: "PTSD Checklist DSM-5", desc: "Trauma symptom assessment for assault or MVA related concussions. Score >21 triggers referral protocol.", freq: "Monthly" },
  { abbr: "PSQI", name: "Pittsburgh Sleep Quality Index", desc: "Sleep quality assessment essential in concussion management where sleep disturbance impedes recovery.", freq: "Monthly" },
];

const visitTypes = [
  {
    id: "ie",
    title: "Initial Evaluation (IE)",
    subtitle: "First visit · Occurs one time",
    description: "The initial evaluation establishes the complete clinical baseline. The patient completes a comprehensive concussion history while the physician performs a neurological and vestibular exam. Neuropsychological testing is administered at this visit.",
    components: [
      { name: "History (HX)", type: "required", note: "Completed by patient" },
      { name: "Exam (EX)", type: "required", note: "Physician completes; defaults pre-populated" },
      { name: "NPE-CX", type: "testing", note: "Neuropsychological assessment battery" },
      { name: "Diagnosis (DX)", type: "required", note: "ICD-10 selection with secondary codes" },
      { name: "Plan of Care (POC)", type: "required", note: "Trigger-based functional recommendations" },
    ],
    codes: [
      { service: "E&M Evaluation", code: "99214–99215" },
      { service: "NPE Testing First Hour", code: "96136" },
      { service: "NPE Testing Add'l Hour", code: "96137" },
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
    codes: [
      { service: "NPE Interpretation First 30 min", code: "96132" },
      { service: "NPE Interpretation Add'l 30 min", code: "96133" },
      { service: "Alt: Neurobehavioral Exam 1st hr", code: "96116" },
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
    codes: [
      { service: "E&M Evaluation", code: "99214–99215" },
      { service: "NPE Test/Interpret First Hour", code: "96136 + 96132" },
      { service: "NPE Add'l Hours", code: "96137 + 96133" },
    ],
  },
];

const planOfCareTriggers = [
  {
    trigger: "Headache > 4",
    severity: "danger",
    actions: ["Limit work to part-time or no work for 2 weeks", "Limit driving to short distances or no driving for 2 weeks", "No heavy lifting/exercise for 2 weeks", "Screen time < 30 min/day"],
  },
  {
    trigger: "Dizziness > 4",
    severity: "danger",
    actions: ["No work for 2 weeks", "No driving for 2 weeks", "No heavy lifting/exercise for 2 weeks", "Start Vestibular PT 2×/week"],
  },
  {
    trigger: "Brain Fog > 4",
    severity: "warning",
    actions: ["No work for 2 weeks", "No driving for 2 weeks", "Screen time < 60 min/day"],
  },
  {
    trigger: "PCSS > 27 or HIT-6 > 59",
    severity: "warning",
    actions: ["Enroll in Computerized Cognitive Remediation", "2×/week × 12 weeks (96158 + 96159)"],
  },
  {
    trigger: "PHQ-9 > 10 or GAD-7 > 10 or PCL-5 > 21",
    severity: "info",
    actions: ["Referral to Mental Health Specialist", "Consider CognificaChat 2×/week × 12 weeks"],
  },
  {
    trigger: "Headache < 3, Dizziness < 2, Brain Fog < 1",
    severity: "success",
    actions: ["Patient cleared for work, driving, and exercise"],
  },
];

const ongoingBilling = [
  { service: "Weekly Digital Check-ins (5-10 min)", code: "99421" },
  { service: "Weekly Digital Check-ins (11-20 min)", code: "99422" },
  { service: "Weekly Digital Check-ins (>20 min)", code: "99423" },
  { service: "CRT First 30 minutes", code: "96158" },
  { service: "CRT Add'l 15 minutes", code: "96159" },
  { service: "Monthly NPE Testing", code: "96136" },
  { service: "Monthly NPE Interpretation", code: "96132" },
];

const practiceTypes = [
  { name: "Orthopedic Surgery", icon: Activity },
  { name: "Neurosurgery", icon: Brain },
  { name: "Sports Medicine", icon: Users },
];

const practiceValues = [
  "Capture post injury revenue already entering your practice",
  "Zero added staff required",
  "No referrals lost",
  "Stronger compliance and documentation",
  "Recurring engagement every 12 weeks",
  "Built by clinicians for clinicians",
  "30 day trial from existing patients",
  "Monthly license by volume",
];

export default function SynaptixPage() {
  return (
    <>
      {/* Schema Markup */}
      <ServiceSchema
        name="Synaptix Concussion Management Platform"
        description="Comprehensive concussion assessment and recovery software with neuropsychological testing, cognitive remediation therapy, and digital monitoring for medical practices."
        url="https://kronoshealth.co/synaptix"
        serviceType="Healthcare Software"
      />
      <SoftwareApplicationSchema
        name="Synaptix"
        description="Concussion management software with NPE-CX battery, cognitive remediation, and digital symptom tracking."
        url="https://kronoshealth.co/synaptix"
        applicationCategory="HealthApplication"
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Breadcrumb Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Synaptix" }]} />
      </div>

      {/* Full-Width Hero with Neural Network Animation */}
      <section 
        className="relative min-h-[80vh] sm:min-h-screen bg-kronos-bg overflow-hidden"
        aria-labelledby="synaptix-hero-heading"
      >
        {/* Full-width animated background - Concentric rings from Synaptix logo */}
        <HeroBackground type="rings" color="15, 189, 213" />

        {/* Glass effect content panel */}
        <div className="relative z-10 min-h-[80vh] sm:min-h-screen flex items-center">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-0">
            <div className="backdrop-blur-md bg-black/40 border border-white/10 p-8 sm:p-10 lg:p-14 max-w-xl">
              <p className="text-xs tracking-widest uppercase text-white/50 mb-4 sm:mb-6">
                Concussion Management Software
              </p>
              
              {/* Synaptix Logo */}
              <div className="mb-6 sm:mb-8">
                <Image
                  src="/synaptix-logo-white.svg"
                  alt="Synaptix Cognitive Software"
                  width={320}
                  height={90}
                  className="w-[180px] sm:w-[240px] lg:w-[280px] h-auto"
                  priority
                />
              </div>
              
              <h1 
                id="synaptix-hero-heading"
                className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white leading-tight mb-4"
              >
                Concussion Assessment & Recovery Platform
              </h1>

              <p className="font-body text-sm sm:text-base text-white/70 font-light leading-relaxed mb-4">
                Streamlining concussion care with precision and intelligence. A comprehensive management system combining clinical history, neurological examination protocols, and advanced neuropsychological testing.
              </p>

              <p className="font-body text-xs text-synaptix-cyan font-light leading-relaxed mb-6 sm:mb-8">
                Built for sports medicine, orthopedics, neurology, and concussion programs. Structured, billable, recurring.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#demo"
                  className="inline-flex items-center justify-center gap-4 bg-synaptix-cyan text-kronos-bg py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-light hover:gap-6 transition-all w-full sm:w-fit focus:outline-none focus:ring-2 focus:ring-synaptix-cyan focus:ring-offset-2 focus:ring-offset-black/40"
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

      {/* Revenue Stats */}
      <section 
        className="py-10 sm:py-12 lg:py-16 bg-synaptix-blue/20 border-y border-synaptix-cyan/20" 
        id="revenue"
        aria-labelledby="revenue-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="revenue-heading" className="sr-only">Revenue Potential</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {revenueStats.map((stat) => (
              <div key={stat.value} className="text-center hover:bg-white/5 p-4 -m-4 transition-colors">
                <div className="font-heading text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-synaptix-cyan mb-1">
                  {stat.value}
                </div>
                <p className="font-body text-[10px] sm:text-xs text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[10px] sm:text-xs text-white/40 mt-4 sm:mt-6">
            With one new patient added each week
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
              Synaptix structures concussion management into three defined visit types — each with its own form requirements, testing components, and automatically assembled clinical report.
            </p>
          </header>

          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {visitTypes.map((visit, idx) => (
              <article 
                key={visit.id} 
                className="bg-kronos-gray-700 p-6 sm:p-8 lg:p-10 border-l-4 border-synaptix-cyan hover:bg-kronos-gray-600 transition-colors"
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
                    <p className="font-mono text-xs sm:text-sm text-synaptix-cyan mt-2 sm:mt-3">{visit.subtitle}</p>
                  </div>
                </div>

                <p className="font-body text-sm sm:text-base text-white/60 font-light mb-6 sm:mb-8 leading-relaxed max-w-3xl">
                  {visit.description}
                </p>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                  {/* Components */}
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/40 mb-6">Components</p>
                    <ul className="space-y-5" role="list">
                      {visit.components.map((comp) => (
                        <li key={comp.name} className="border-l-2 border-white/10 pl-4">
                          <div className="flex items-center gap-3 mb-1">
                            <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 ${
                              comp.type === 'required' ? 'bg-synaptix-cyan/20 text-synaptix-cyan' :
                              comp.type === 'testing' ? 'bg-synaptix-blue/40 text-synaptix-cyan' :
                              'bg-white/10 text-white/50'
                            }`}>
                              {comp.type}
                            </span>
                            <span className="text-white font-bold text-sm">{comp.name}</span>
                          </div>
                          <p className="text-white/50 text-xs leading-relaxed">{comp.note}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CPT Codes */}
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/40 mb-6">CPT Codes</p>
                    <ul className="space-y-0" role="list">
                      {visit.codes.map((code, i) => (
                        <li 
                          key={code.code} 
                          className={`flex items-center justify-between py-3 ${i !== visit.codes.length - 1 ? 'border-b border-white/5' : ''}`}
                        >
                          <span className="text-white/60 text-sm">{code.service}</span>
                          <code className="font-mono text-sm text-synaptix-cyan">{code.code}</code>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Plan of Care Triggers */}
      <section 
        className="py-12 sm:py-16 lg:py-24 bg-kronos-bg"
        aria-labelledby="triggers-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-10 sm:mb-12 lg:mb-16">
            <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
              Algorithm Driven
            </p>
            <h2 
              id="triggers-heading"
              className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white mb-4"
            >
              Plan of Care Triggers
            </h2>
            <p className="font-body text-xs sm:text-sm text-white/50 font-light max-w-2xl">
              Each symptom score combination triggers pre-defined functional recommendations — work restrictions, driving limitations, screen time guidelines, vestibular PT referrals, cognitive remediation therapy — assembled automatically into the Plan of Care.
            </p>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {planOfCareTriggers.map((item) => (
              <article 
                key={item.trigger} 
                className={`p-4 sm:p-6 border-l-4 transition-colors ${
                  item.severity === 'danger' ? 'bg-kronos-card border-white/40 hover:bg-kronos-card/80' :
                  item.severity === 'warning' ? 'bg-kronos-card border-white/30 hover:bg-kronos-card/80' :
                  item.severity === 'info' ? 'bg-kronos-card border-white/20 hover:bg-kronos-card/80' :
                  'bg-synaptix-cyan/10 border-synaptix-cyan hover:bg-synaptix-cyan/20'
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  {item.severity === 'success' ? (
                    <CheckCircle className="w-4 h-4 text-synaptix-cyan" aria-hidden="true" />
                  ) : (
                    <AlertTriangle className={`w-4 h-4 ${
                      item.severity === 'danger' ? 'text-white/60' :
                      item.severity === 'warning' ? 'text-white/50' :
                      'text-white/40'
                    }`} aria-hidden="true" />
                  )}
                  <h3 className="font-heading text-xs sm:text-sm text-white">{item.trigger}</h3>
                </div>
                <ul className="space-y-1" role="list">
                  {item.actions.map((action) => (
                    <li key={action} className="text-[10px] sm:text-xs text-white/60 font-light">
                      • {action}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Battery */}
      <section 
        className="py-12 sm:py-16 lg:py-24 bg-kronos-card"
        aria-labelledby="battery-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-10 sm:mb-12 lg:mb-16">
            <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
              Neuropsychological Battery (NPE-CX)
            </p>
            <h2 
              id="battery-heading"
              className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white mb-4"
            >
              Six Validated Instruments
            </h2>
            <p className="font-body text-xs sm:text-sm text-white/50 font-light max-w-2xl">
              The NPE-CX battery combines validated instruments for concussion related cognitive and psychological assessment — administered digitally, scored automatically, and compared against normative clinical thresholds.
            </p>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {testingBattery.map((test) => (
              <article 
                key={test.abbr} 
                className="bg-kronos-bg border border-white/5 p-4 sm:p-6 hover:border-synaptix-cyan/20 transition-colors focus-within:ring-2 focus-within:ring-synaptix-cyan"
              >
                <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl text-synaptix-cyan mb-2">
                  {test.abbr}
                </h3>
                <p className="font-body font-bold text-white text-xs sm:text-sm mb-2">
                  {test.name}
                </p>
                <p className="font-body text-[10px] sm:text-xs text-white/50 font-light mb-4">
                  {test.desc}
                </p>
                <span className="font-mono text-[9px] sm:text-[10px] text-synaptix-cyan bg-synaptix-blue/30 px-2 py-1">
                  {test.freq}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Billing */}
      <section 
        className="py-12 sm:py-16 lg:py-24 bg-kronos-gray-800"
        aria-labelledby="billing-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <p className="text-xs tracking-widest uppercase text-white/50 mb-4">
                Between Visits
              </p>
              <h2 
                id="billing-heading"
                className="font-heading text-xl sm:text-2xl lg:text-3xl text-white mb-4"
              >
                Ongoing Billable Services
              </h2>
              <p className="font-body text-xs sm:text-sm text-white/60 font-light mb-6 sm:mb-8">
                Three integrated recovery programs keep patients engaged and recovering between clinic visits — all fully billable.
              </p>

              <ul className="space-y-2 sm:space-y-3" role="list">
                {ongoingBilling.map((item) => (
                  <li key={item.code} className="flex items-center justify-between bg-kronos-gray-700 p-2 sm:p-3 hover:bg-kronos-gray-600 transition-colors">
                    <span className="text-xs sm:text-sm text-white">{item.service}</span>
                    <code className="font-mono text-[10px] sm:text-xs text-synaptix-cyan bg-synaptix-blue/30 px-2 py-1">{item.code}</code>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {/* CRT Card */}
              <article className="bg-synaptix-blue/20 p-4 sm:p-6 border-l-2 border-synaptix-cyan hover:bg-synaptix-blue/30 transition-colors">
                <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-synaptix-cyan/60 mb-4" strokeWidth={1} aria-hidden="true" />
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
              <article className="bg-kronos-gray-700 p-4 sm:p-6 border-l-2 border-synaptix-cyan">
                <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-synaptix-cyan/60 mb-4" strokeWidth={1} aria-hidden="true" />
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
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-synaptix-blue/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-synaptix-cyan/60" strokeWidth={1.5} aria-hidden="true" />
                      </div>
                      <span className="font-heading text-xs sm:text-sm lg:text-base text-white">{practice.name}</span>
                    </li>
                  );
                })}
              </ul>

              <p className="font-body text-[10px] sm:text-xs text-white/40 font-light mt-4 sm:mt-6">
                Streamlines workflow, reduces documentation burden, and standardizes concussion protocols.
              </p>
            </div>

            {/* Why Synaptix */}
            <div>
              <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
                Practice Impact
              </p>
              <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl text-white mb-6 sm:mb-8">
                Why Synaptix
              </h3>

              <ul className="space-y-2 sm:space-y-3 lg:space-y-4" role="list">
                {practiceValues.map((value) => (
                  <li key={value} className="flex items-start gap-3 sm:gap-4">
                    <CheckCircle className="w-4 h-4 text-synaptix-cyan flex-shrink-0 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
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
            <article className="bg-kronos-bg p-4 sm:p-6 border-t-2 border-synaptix-cyan hover:bg-kronos-bg/80 transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-synaptix-cyan" aria-hidden="true" />
                <span className="font-mono text-[10px] sm:text-xs text-synaptix-cyan">Initial Visit</span>
              </div>
              <dl className="space-y-2 text-[10px] sm:text-xs">
                <div className="flex justify-between">
                  <dt className="text-white/60">History & Physical</dt>
                  <dd className="font-mono text-white">99215</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-white/60">NPE-CX</dt>
                  <dd className="font-mono text-white">96136 + 96137</dd>
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
                  <dd className="font-mono text-white">96132 + 96133</dd>
                </div>
              </dl>
              <p className="text-[10px] sm:text-xs text-white/40 mt-4">
                Scores past thresholds. Diagnosis confirmed. Enrolled in Digital Evaluations, CRT 2×/week, Monthly NPE.
              </p>
            </article>

            <article className="bg-kronos-bg p-4 sm:p-6 border-t-2 border-synaptix-cyan hover:bg-kronos-bg/80 transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="w-4 h-4 text-synaptix-cyan" aria-hidden="true" />
                <span className="font-mono text-[10px] sm:text-xs text-synaptix-cyan">Re-Evaluation (12 wks)</span>
              </div>
              <dl className="space-y-2 text-[10px] sm:text-xs">
                <div className="flex justify-between">
                  <dt className="text-white/60">History & Physical</dt>
                  <dd className="font-mono text-white">99215</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-white/60">NPE-CX Test/Interpret</dt>
                  <dd className="font-mono text-white">96136 + 96137</dd>
                </div>
              </dl>
              <p className="text-[10px] sm:text-xs text-white/40 mt-4">
                Continue program cycle until symptoms subside.
              </p>
            </article>
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
        className="py-12 sm:py-16 lg:py-24 bg-synaptix-cyan" 
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
                Standardize Your Concussion Program
              </h2>
              <p className="font-body text-xs sm:text-sm lg:text-base text-kronos-bg/70 font-light mb-4">
                Synaptix deploys into existing practices without EHR integration or extensive IT setup. Start in days, not months.
              </p>
              <ul className="space-y-2 mb-6 sm:mb-8" role="list">
                <li className="flex items-center gap-2 text-xs sm:text-sm text-kronos-bg/80">
                  <CheckCircle className="w-4 h-4" aria-hidden="true" />
                  Low startup costs
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm text-kronos-bg/80">
                  <CheckCircle className="w-4 h-4" aria-hidden="true" />
                  30 day trial from existing patients
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm text-kronos-bg/80">
                  <CheckCircle className="w-4 h-4" aria-hidden="true" />
                  Short training, operational in a day
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="tel:+19147056830"
                  className="inline-flex items-center justify-center gap-3 bg-kronos-bg text-white py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-light hover:gap-5 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-synaptix-cyan"
                  aria-label="Call us at (914) 705 6830"
                >
                  (914) 705 6830
                  <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="bg-kronos-bg/10 p-4 sm:p-6">
              <DemoRequestForm productLabel="Synaptix" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
