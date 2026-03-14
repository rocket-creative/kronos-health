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
  FAQSchema,
  HeroBackground,
} from "@/components";
import {
  Brain,
  Shield,
  Zap,
  Building2,
  BarChart3,
  AlertCircle,
  ArrowRight,
  Heart,
  Moon,
  Pill,
  Wine,
  ClipboardCheck,
  CheckCircle,
  Users,
  Lock,
  Phone,
  MessageSquare,
  TrendingUp,
  Eye,
  EyeOff,
} from "lucide-react";

export const metadata: Metadata = {
  title: "CognificaAI — Workplace Mental Health Platform",
  description:
    "Intelligent mental health screening and risk stratification for employers. Evidence-based assessments (PHQ-9, GAD-7, PSQI, DAST, AUDIT, PCL-5), proprietary risk scoring, and smart care pathways. HIPAA compliant.",
  alternates: {
    canonical: "https://kronoshealth.co/cognificaai",
  },
  openGraph: {
    title: "CognificaAI — Workplace Mental Health Platform | Kronos Health",
    description: "Intelligent mental health screening and risk stratification for employers. Validated clinical assessments with smart care pathways.",
    url: "https://kronoshealth.co/cognificaai",
    siteName: "Kronos Health",
    type: "website",
    images: [
      {
        url: "https://kronoshealth.co/cognificaai-og.jpg",
        width: 1200,
        height: 630,
        alt: "CognificaAI Workplace Mental Health Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CognificaAI — Workplace Mental Health Platform",
    description: "Intelligent mental health screening and risk stratification for employers.",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "https://kronoshealth.co" },
  { name: "CognificaAI", url: "https://kronoshealth.co/cognificaai" },
];

const trustStats = [
  { value: "$79.4B", label: "Lost income in NY over 5 years" },
  { value: "$12,700", label: "Per affected worker" },
  { value: "1 in 6", label: "Employees with moderate-severe anxiety" },
  { value: "3-6%", label: "EAP utilization rate" },
];

const assessments = [
  { abbr: "PHQ-9", name: "Patient Health Questionnaire", tag: "Depression", icon: Heart, desc: "Validated depression screening mapped to DSM-5 criteria." },
  { abbr: "GAD-7", name: "Generalized Anxiety Disorder Scale", tag: "Anxiety", icon: Brain, desc: "Seven-item instrument for identifying anxiety and severity." },
  { abbr: "PSQI", name: "Pittsburgh Sleep Quality Index", tag: "Sleep", icon: Moon, desc: "Assesses sleep quality and disturbances over one month." },
  { abbr: "DAST-10", name: "Drug Abuse Screening Test", tag: "Substance", icon: Pill, desc: "Brief screening for drug misuse problems." },
  { abbr: "AUDIT", name: "Alcohol Use Disorders Test", tag: "Alcohol", icon: Wine, desc: "WHO validated screening for hazardous alcohol consumption." },
  { abbr: "PCL-5", name: "PTSD Checklist DSM-5", tag: "Trauma", icon: Shield, desc: "20-item measure assessing PTSD symptoms." },
];

const riskTiers = [
  { level: "Low Risk", color: "bg-kronos-lavender/30", action: "Self-guided digital support", desc: "All scores within normal range. Wellness tips and psychoeducation." },
  { level: "Moderate Risk", color: "bg-kronos-lavender/60", action: "Referral to mental health professionals", desc: "One or more scores at subclinical elevation. Targeted self-help resources." },
  { level: "High Risk", color: "bg-kronos-lavender", action: "Crisis support and urgent referral", desc: "Severe scores or crisis indicators. Immediate connection to 24/7 support." },
];

const employerValues = [
  { icon: TrendingUp, title: "Reduce Risk with Clinical Governance", desc: "Defined safety and escalation protocols. Imminent risk handled by platform, not HR." },
  { icon: Users, title: "Increase Engagement", desc: "Mobile-first, designed for frontline workers. Short check-ins instead of long surveys. Higher participation than EAPs." },
  { icon: BarChart3, title: "Gain Meaningful Insights", desc: "Aggregate, de-identified trends. Stress, burnout, sleep, and wellbeing indicators." },
  { icon: Shield, title: "HIPAA Compliant", desc: "Individual employee data never shared with HR. Built on HIPAA-compliant infrastructure." },
  { icon: Zap, title: "Zero IT Lift", desc: "Deploy in days, not months. No EHR integration, no SSO, no app installation." },
  { icon: AlertCircle, title: "24/7 Crisis Safety Net", desc: "Immediate crisis resource connection and clinical escalation when needed." },
];

const employeeExperience = [
  { icon: Lock, title: "Truly Confidential", desc: "Your employer cannot see your identity or responses. Messages, scores, and conversations remain private." },
  { icon: ClipboardCheck, title: "Validated Clinical Assessments", desc: "Clinically validated tools for anxiety, depression, sleep, substance use, and trauma symptoms." },
  { icon: MessageSquare, title: "Immediate, Practical Help", desc: "Short stress-reduction exercises, cognitive tools, optional chat-based guidance." },
  { icon: Users, title: "Optional Human Support", desc: "Matched to licensed mental health professionals. No insurance paperwork. Always optional." },
];

const howItWorks = [
  { step: "01", title: "Validated Clinical Screening", desc: "Employees complete clinically validated assessments including PHQ-9, GAD-7, PSQI, DAST, AUDIT, and PCL-5. Peer reviewed tools providing objective, measurable data." },
  { step: "02", title: "Proprietary Risk Scoring", desc: "CognificaAI integrates results into a dynamic mental health risk score. Stratifies into risk tiers, identifies emerging concerns early, flags high-risk responses." },
  { step: "03", title: "Smart Referral Pathways", desc: "Based on risk stratification: low risk gets digital support, moderate risk gets professional referral, high risk gets crisis support and urgent referral." },
  { step: "04", title: "Employer Dashboard", desc: "Anonymized, HIPAA-compliant dashboard showing workforce trends, engagement rates, risk distribution — without individual employee data." },
];

const escalationProtocol = [
  { title: "Automated In-App Escalation", desc: "When responses cross risk threshold, Clinical Team is alerted immediately to designated crisis counselor — not the employer." },
  { title: "Live Chat 24/7", desc: "Embedded licensed crisis counselor available around the clock. Many in distress will text but not call." },
  { title: "Warm Handoff to 988", desc: "Platform counselor connects with user, then bridges to 988 or emergency services, staying on the line during handoff." },
  { title: "Scheduled Safety Check-Ins", desc: "After high-risk response, automatic check-ins within 24-48 hours with escalation if user doesn't respond." },
];

const faqItems = [
  { question: "Can employers see individual employee data?", answer: "No. Employers receive only anonymized, aggregated insights. No names, messages, scores, or identifiers are accessible." },
  { question: "What if we don't want to see employee results?", answer: "Employers can opt to not see any data and simply let employees use it for self-assessment with direct referral to mental health professionals." },
  { question: "What happens if an employee reports self-harm?", answer: "The platform follows clinically governed escalation protocol managed by the vendor — not the employer. Imminent risk triggers immediate crisis support." },
  { question: "Does this create a duty to act for HR?", answer: "No. The vendor assumes responsibility for clinical risk triage and response." },
  { question: "Is this a replacement for our EAP?", answer: "No. It is an employee-first access layer that complements existing benefits and improves engagement." },
];

export default function CognificaAIPage() {
  return (
    <>
      {/* Schema Markup */}
      <ServiceSchema
        name="CognificaAI Employee Mental Health Hub"
        description="Intelligent mental health screening and risk stratification platform for employers with evidence-based assessments, proprietary risk scoring, and smart care pathways."
        url="https://kronoshealth.co/cognificaai"
        serviceType="Mental Health Software"
      />
      <SoftwareApplicationSchema
        name="CognificaAI"
        description="Workplace mental health platform with PHQ-9, GAD-7, PSQI, DAST, AUDIT, and PCL-5 assessments."
        url="https://kronoshealth.co/cognificaai"
        applicationCategory="HealthApplication"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema questions={faqItems} />

      {/* Breadcrumb Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "CognificaAI" }]} />
      </div>

      {/* Full-Width Hero with Waveform Animation */}
      <section 
        className="relative min-h-[80vh] sm:min-h-screen bg-kronos-bg overflow-hidden"
        aria-labelledby="cognifica-hero-heading"
      >
        {/* Full-width animated background */}
        <HeroBackground type="waveform" color="167, 139, 250" />

        {/* Glass effect content panel */}
        <div className="relative z-10 min-h-[80vh] sm:min-h-screen flex items-center">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-0">
            <div className="backdrop-blur-md bg-black/40 border border-white/10 p-8 sm:p-10 lg:p-14 max-w-xl">
              <p className="text-xs tracking-widest uppercase text-white/50 mb-4 sm:mb-6">
                Employee Mental Health Hub
              </p>
              
              {/* CognificaAI Logo */}
              <div className="mb-6 sm:mb-8">
                <Image
                  src="/cognificaai-logo.png"
                  alt="CognificaAI Mental Health Platform"
                  width={320}
                  height={90}
                  className="w-[180px] sm:w-[240px] lg:w-[280px] h-auto"
                  priority
                />
              </div>
              
              <h1 
                id="cognifica-hero-heading"
                className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white leading-tight mb-4"
              >
                Intelligent Mental Health Screening & Risk Stratification
              </h1>

              <p className="font-body text-sm sm:text-base text-white/70 font-light leading-relaxed mb-4">
                Smarter mental health support for the modern workforce. Proactively assess, stratify, and support employee mental wellness using validated clinical tools and intelligent risk modeling.
              </p>

              <p className="font-body text-xs text-kronos-lavender font-light leading-relaxed mb-6 sm:mb-8">
                Employees get meaningful support. Employers get anonymized insights — never individual data.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#demo"
                  className="inline-flex items-center justify-center gap-4 bg-kronos-lavender text-kronos-bg py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-light hover:gap-6 transition-all w-full sm:w-fit focus:outline-none focus:ring-2 focus:ring-kronos-lavender focus:ring-offset-2 focus:ring-offset-black/40"
                >
                  Request Demo
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="#how"
                  className="inline-flex items-center justify-center gap-2 text-white/60 py-3 sm:py-4 uppercase tracking-widest text-xs hover:text-white transition-colors focus:outline-none focus:text-white"
                >
                  How It Works
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem - Stats */}
      <section 
        className="py-10 sm:py-12 lg:py-16 bg-kronos-card border-y border-white/5"
        aria-labelledby="challenge-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="challenge-heading" className="text-xs tracking-widest uppercase text-white/40 mb-6 sm:mb-8 text-center">
            The Challenge
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {trustStats.map((stat) => (
              <div key={stat.value} className="text-center hover:bg-white/5 p-4 -m-4 transition-colors">
                <div className="font-heading text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-kronos-lavender mb-1">
                  {stat.value}
                </div>
                <p className="font-body text-[10px] sm:text-xs text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[10px] sm:text-xs text-white/50 mt-6 sm:mt-8 max-w-2xl mx-auto">
            The average employer has no idea that 1 in 6 of their employees is experiencing moderate-to-severe anxiety right now. They find out when the person quits — or doesn't.
          </p>
        </div>
      </section>

      {/* Two Column Value Props */}
      <section className="py-16 lg:py-24 bg-kronos-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* For Employers */}
            <div>
              <p className="text-xs tracking-widest uppercase text-white/50 mb-4">
                For Employers
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl text-white mb-8">
                Why Employers Choose This Program
              </h2>

              <div className="space-y-4">
                {employerValues.map((value) => {
                  const Icon = value.icon;
                  return (
                    <div key={value.title} className="flex gap-4 p-3 -m-3 hover:bg-white/5 transition-colors">
                      <div className="w-10 h-10 bg-kronos-lavender/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-kronos-lavender/60" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-heading text-sm text-white mb-1">{value.title}</h3>
                        <p className="font-body text-xs text-white/60 font-light">{value.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* For Employees */}
            <div>
              <p className="text-xs tracking-widest uppercase text-white/50 mb-4">
                For Employees
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl text-white mb-8">
                What Employees Experience
              </h2>

              <div className="space-y-4">
                {employeeExperience.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-4 p-3 -m-3 hover:bg-white/5 transition-colors">
                      <div className="w-10 h-10 bg-kronos-lavender/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-kronos-lavender/60" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-heading text-sm text-white mb-1">{item.title}</h3>
                        <p className="font-body text-xs text-white/60 font-light">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Editorial */}
      <section className="py-16 lg:py-24 bg-kronos-bg" id="how">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:mb-16">
            <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
              The Process
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              How CognificaAI Works
            </h2>
            <p className="font-body text-sm text-white/50 font-light max-w-2xl">
              Move from reactive crisis management to proactive prevention with intelligent risk stratification.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {howItWorks.map((item, i) => (
              <div key={item.step} className="bg-kronos-card p-6 border-l-2 border-kronos-lavender hover:bg-kronos-card/80 hover:border-kronos-lavender/80 transition-colors">
                <span className="text-[60px] font-heading text-white/[0.05] leading-none block -mb-8">
                  {item.step}
                </span>
                <h3 className="font-heading text-lg text-white mb-2 relative z-10">
                  {item.title}
                </h3>
                <p className="font-body text-xs text-white/50 font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessments - Editorial Grid */}
      <section className="py-16 lg:py-24 bg-kronos-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:mb-16">
            <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
              Clinical Instruments
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              Six Validated Tools
            </h2>
            <p className="font-body text-sm text-white/50 font-light max-w-2xl">
              Every assessment is a peer reviewed clinical instrument validated for both clinical and population level screening contexts.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {assessments.map((a) => {
              const Icon = a.icon;
              return (
                <div key={a.abbr} className="bg-kronos-bg border border-white/5 p-4 sm:p-6 hover:border-kronos-lavender/20 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-kronos-lavender/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-kronos-lavender/60" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-kronos-lavender/60">
                      {a.tag}
                    </span>
                  </div>
                  <div className="font-heading text-2xl text-kronos-lavender mb-2">
                    {a.abbr}
                  </div>
                  <h3 className="font-body font-bold text-white text-sm mb-2">
                    {a.name}
                  </h3>
                  <p className="font-body text-xs text-white/40 font-light">
                    {a.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Risk Stratification - Editorial */}
      <section className="py-16 lg:py-24 bg-kronos-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:mb-16">
            <p className="text-xs tracking-widest uppercase text-white/50 mb-4">
              Smart Referral Pathways
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              From Data to Action — Automatically
            </h2>
            <p className="font-body text-sm text-white/60 font-light max-w-2xl">
              Our structured triage model ensures employees receive the right level of care at the right time.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {riskTiers.map((tier) => (
              <div key={tier.level} className="bg-kronos-gray-700 p-6">
                <div className={`w-4 h-4 ${tier.color} mb-4`} />
                <h3 className="font-heading text-lg text-white mb-2">{tier.level}</h3>
                <p className="font-body text-xs text-white/60 font-light mb-4">{tier.desc}</p>
                <span className="text-xs text-kronos-lavender font-bold">{tier.action}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crisis Escalation Protocol */}
      <section className="py-16 lg:py-24 bg-kronos-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:mb-16">
            <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
              Mental Health Escalation
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              Real Crisis Protocol, Not Just a Hotline
            </h2>
            <p className="font-body text-sm text-white/50 font-light max-w-2xl">
              A hotline number is not sufficient. We define escalation steps: what triggers an alert, who is notified, what actions are taken, and within what timeframe.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {escalationProtocol.map((item, i) => (
              <div key={item.title} className="bg-kronos-card p-6 border-l-2 border-kronos-lavender/50 hover:bg-kronos-card/80 hover:border-kronos-lavender transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <Phone className="w-4 h-4 text-kronos-lavender/60" />
                  <span className="font-mono text-xs text-kronos-lavender/60">0{i + 1}</span>
                </div>
                <h3 className="font-heading text-base text-white mb-2">{item.title}</h3>
                <p className="font-body text-xs text-white/50 font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-kronos-card border border-white/10">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-5 h-5 text-kronos-lavender flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-heading text-sm text-white mb-2">If an employee indicates immediate risk of harm:</h4>
                <p className="font-body text-xs text-white/50 font-light">
                  The platform may temporarily pause anonymity only to connect urgent clinical or crisis support. Employers can choose not to be notified and refer directly to mental health professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Confidentiality */}
      <section className="py-16 lg:py-24 bg-kronos-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
                Privacy First
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white mb-6">
                Confidentiality is the Gating Requirement
              </h2>
              <p className="font-body text-sm text-white/50 font-light mb-6">
                If employees perceive this as a tool that gives HR or management visibility into their mental health, adoption will fail. True confidentiality must be demonstrable, not just claimed.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <EyeOff className="w-5 h-5 text-kronos-lavender" />
                  <span className="font-body text-sm text-white/70">Employer cannot see individual identities or responses</span>
                </div>
                <div className="flex items-center gap-4">
                  <Lock className="w-5 h-5 text-kronos-lavender" />
                  <span className="font-body text-sm text-white/70">Messages, scores, and conversations remain private</span>
                </div>
                <div className="flex items-center gap-4">
                  <Shield className="w-5 h-5 text-kronos-lavender" />
                  <span className="font-body text-sm text-white/70">HIPAA-compliant infrastructure from the ground up</span>
                </div>
                <div className="flex items-center gap-4">
                  <Eye className="w-5 h-5 text-kronos-lavender" />
                  <span className="font-body text-sm text-white/70">Employers see only aggregate, de-identified data</span>
                </div>
              </div>
            </div>

            <div className="bg-kronos-bg p-6 sm:p-8">
              <p className="text-xs tracking-widest uppercase text-white/40 mb-6">
                What Employers Receive
              </p>
              <div className="space-y-3">
                {["Depression trends", "Anxiety trends", "Sleep patterns", "Alcohol use risk", "Substance use risk", "PTSD indicators", "Workplace satisfaction"].map((item) => (
                  <div key={item} className="flex items-center justify-between py-2 border-b border-white/5">
                    <span className="text-sm text-white/70">{item}</span>
                    <span className="text-xs text-kronos-lavender">Aggregate only</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/50 mt-4">
                No individual-level or actionable surveillance data is provided.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section 
        className="py-12 sm:py-16 lg:py-24 bg-kronos-gray-800"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8 sm:mb-12 lg:mb-16">
            <p className="text-xs tracking-widest uppercase text-white/50 mb-4">
              Employer Liability & Safety
            </p>
            <h2 
              id="faq-heading"
              className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white"
            >
              Frequently Asked Questions
            </h2>
          </header>

          <div className="space-y-3 sm:space-y-4" role="list">
            {faqItems.map((item) => (
              <article key={item.question} className="bg-kronos-gray-700 p-4 sm:p-6">
                <h3 className="font-heading text-sm sm:text-base text-white mb-2">{item.question}</h3>
                <p className="font-body text-xs sm:text-sm text-white/60 font-light">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* E-E-A-T Trust Signal */}
      <section className="py-6 sm:py-8 bg-kronos-gray-800 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustSignal 
            author="Dr. John M. Abrahams, M.D."
            credentials="Board-Certified Neurosurgeon"
            reviewedBy="Clinical Advisory Board"
            lastUpdated="2026-03-01"
          />
        </div>
      </section>

      {/* Value Proposition Summary */}
      <section className="py-16 lg:py-24 bg-kronos-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white mb-6">
            The Value Proposition
          </h2>
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
<div className="p-6 bg-kronos-card hover:bg-kronos-card/80 transition-colors">
                              <Building2 className="w-8 h-8 text-kronos-lavender/60 mx-auto mb-4" />
              <h3 className="font-heading text-lg text-white mb-2">For Employers</h3>
              <p className="font-body text-sm text-white/50 font-light">
                Support employee mental health, reduce burnout risk, and gain insight — without surveillance or liability.
              </p>
            </div>
            <div className="p-6 bg-kronos-card">
              <Users className="w-8 h-8 text-kronos-lavender/60 mx-auto mb-4" />
              <h3 className="font-heading text-lg text-white mb-2">For Employees</h3>
              <p className="font-body text-sm text-white/50 font-light">
                A private, judgment-free space to check in, build skills, and access real support on your terms.
              </p>
            </div>
          </div>
          <p className="font-body text-sm text-kronos-lavender mt-8">
            Mental health support employees will actually use. Insight employers can responsibly trust.
          </p>
        </div>
      </section>

      {/* CTA - Editorial */}
      <section className="py-16 lg:py-24 bg-kronos-lavender" id="demo">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-kronos-bg mb-4">
                Mental Health Shouldn't Be Invisible
              </h2>
              <p className="font-body text-sm sm:text-base text-kronos-bg/70 font-light mb-4">
                CognificaAI makes it measurable — and manageable. Join forward-thinking employers using CognificaAI to proactively support their workforce.
              </p>
              <ul className="space-y-2 mb-6 sm:mb-8">
                <li className="flex items-center gap-2 text-sm text-kronos-bg/80">
                  <CheckCircle className="w-4 h-4" />
                  Evidence-based assessments
                </li>
                <li className="flex items-center gap-2 text-sm text-kronos-bg/80">
                  <CheckCircle className="w-4 h-4" />
                  Data-driven risk modeling
                </li>
                <li className="flex items-center gap-2 text-sm text-kronos-bg/80">
                  <CheckCircle className="w-4 h-4" />
                  Scalable across large organizations
                </li>
                <li className="flex items-center gap-2 text-sm text-kronos-bg/80">
                  <CheckCircle className="w-4 h-4" />
                  Actionable analytics for leadership
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="tel:+19147056830"
                  className="inline-flex items-center justify-center gap-3 bg-kronos-bg text-white py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-light hover:gap-5 transition-all"
                >
                  (914) 705 6830
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
            <div className="bg-kronos-bg/10 p-4 sm:p-6">
              <DemoRequestForm productLabel="CognificaAI" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
