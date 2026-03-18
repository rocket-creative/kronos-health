"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { ContactSection, TrustSignal, HeroBackground } from "@/components";
import { RadialPulse, Waveform, ConcentricRings, ShieldMatrix } from "@/components/animations/heroes";
import { useHeroAnimation, useStaggeredCards, useSectionReveal } from "@/components/animations";

const b2bServices = [
  {
    id: "medical-it",
    title: "Medical IT",
    description:
      "HIPAA governance, security audits, device hardening, and GRC documentation. We serve as your technical Security Officer — protecting your practice from fines up to $2.1M.",
    href: "/medical-it",
    external: false,
    accentColor: "text-[#7C3AED]",
    focusColor: "focus-visible:ring-[#7C3AED]",
    arrowColor: "group-hover:text-[#7C3AED]",
    animation: <ShieldMatrix color="124, 58, 237" />,
  },
  {
    id: "kronos-revenue",
    title: "Kronos Revenue",
    titleColor: "text-white",
    description:
      "Expert arbitration and out of network dispute resolution under the No Surprises Act. Complete case management from negotiation through final IDR arbitration — we recover what you are owed.",
    href: "https://kronos-rev.vercel.app?utm_source=kronoshealth&utm_medium=homepage",
    external: true,
    accentColor: "text-kronos-cyan",
    focusColor: "focus-visible:ring-kronos-rev-green",
    arrowColor: "group-hover:text-kronos-rev-green",
    animation: <RadialPulse color="0, 132, 61" />,
  },
  {
    id: "cognifica-ai",
    title: "Cognifica App",
    titleWordmark: true,
    description:
      "Anonymous, HIPAA-compliant mental health screening for employers. Six validated clinical assessments, smart risk stratification, and care pathways — deployed in under one week.",
    href: "https://cognificaai.vercel.app?utm_source=kronoshealth&utm_medium=homepage",
    external: true,
    accentColor: "text-[#E6A91A]",
    focusColor: "focus-visible:ring-[#E6A91A]",
    arrowColor: "group-hover:text-[#E6A91A]",
    animation: <Waveform color="230, 169, 26" />,
  },
  {
    id: "synaptix",
    title: "Synaptix",
    description:
      "A structured 12-week concussion management program built for orthopedic, neurosurgery, and sports medicine practices. Standardized, billable, and recurring — up to $260K annual revenue potential per practice.",
    href: "https://synaptix-rho.vercel.app?utm_source=kronoshealth&utm_medium=homepage",
    external: true,
    accentColor: "text-synaptix-cyan",
    focusColor: "focus-visible:ring-synaptix-cyan",
    arrowColor: "group-hover:text-synaptix-cyan",
    animation: <ConcentricRings color="15, 189, 213" />,
  },
];

const clinicalBrands = [
  {
    id: "iss-health",
    eyebrow: "Neurosurgical Practice",
    title: "ISS Health",
    subtitle: "Institute for Spine Surgery",
    description:
      "Led by Dr. Abrahams, ISS is a specialist neurosurgical practice built around a two-surgeon care model and minimally invasive techniques. Over 4,000 surgeries performed with 95% patient satisfaction and 85% return to full activity within three months.",
    href: "https://iss.health?utm_source=kronoshealth&utm_medium=homepage",
    cta: "Visit ISS Health",
  },
  {
    id: "cognifica-health",
    eyebrow: "Clinical Neuropsychology",
    title: "Cognifica Health",
    subtitle: "Brain Health & Cognitive Wellness",
    description:
      "The only regional practice combining neurosurgeons, neuropsychologists, physical therapists, and researchers under one roof. Services include FDA-cleared TMS therapy, full neuropsychological evaluations, EEG, cognitive training, and structured concussion programs. Three locations: West Harrison NY, Stamford CT, and Aquebogue NY.",
    href: "https://cognifica-health.vercel.app?utm_source=kronoshealth&utm_medium=homepage",
    cta: "Visit Cognifica Health",
  },
];

const founderCredentials = [
  { value: "4,000+", label: "Surgeries\nPerformed" },
  { value: "16", label: "Awarded\nPatents" },
  { value: "30+", label: "Peer-Reviewed\nPublications" },
  { value: "2002", label: "In Practice\nSince" },
];

export default function HomePage() {
  const heroRef = useHeroAnimation();
  const servicesRef = useStaggeredCards();
  const statsRef = useSectionReveal();

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-dvh bg-kronos-bg overflow-hidden pt-safe-top"
        aria-labelledby="hero-heading"
      >
        <HeroBackground type="neural" color="130, 115, 140" />

        <div className="relative z-10 min-h-dvh flex items-center">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
            <div className="backdrop-blur-md bg-black/40 border border-white/10 p-8 sm:p-10 lg:p-14 max-w-xl">
              <div data-hero-title className="mb-8 sm:mb-10">
                <Image
                  src="/kronos-group-logo.svg"
                  alt="Kronos Group"
                  width={400}
                  height={166}
                  className="w-[200px] sm:w-[260px] lg:w-[320px] h-auto"
                  priority
                />
              </div>

              <h1
                data-hero-subtitle
                id="hero-heading"
                className="font-heading text-xl sm:text-2xl lg:text-3xl text-white tracking-wider mb-2"
              >
                Healthcare IT. Revenue. Innovation.
              </h1>
              <p data-hero-subtitle className="font-body text-base sm:text-lg text-white/60 font-light mb-6 sm:mb-8">
                The medical IT and technology platform protecting and growing healthcare practices.
              </p>

              <p data-hero-description className="font-body text-sm sm:text-base text-white/70 font-light leading-relaxed mb-8 sm:mb-10">
                Founded by Dr. John M. Abrahams — board-certified neurosurgeon, inventor, and entrepreneur — Kronos Group leads with Medical IT and HIPAA compliance services, backed by a portfolio of purpose-built healthcare technology across revenue cycle management, employer mental health, and concussion recovery.
              </p>

              <Link
                data-hero-cta
                href="#services"
                className="inline-flex items-center gap-4 bg-kronos-cyan text-kronos-bg py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs sm:text-sm font-light hover:gap-6 transition-all w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>

              <nav
                data-hero-social
                className="flex gap-6 sm:gap-8 mt-10 sm:mt-12 text-white/50 text-xs tracking-widest uppercase"
                aria-label="Social media links"
              >
                <a
                  href="https://facebook.com/kronoshealth"
                  className="hover:text-kronos-cyan transition-colors focus:outline-none focus:text-kronos-cyan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                >
                  FB
                </a>
                <a
                  href="https://twitter.com/kronoshealth"
                  className="hover:text-kronos-cyan transition-colors focus:outline-none focus:text-kronos-cyan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Twitter"
                >
                  TW
                </a>
                <a
                  href="https://linkedin.com/company/kronos-health"
                  className="hover:text-kronos-cyan transition-colors focus:outline-none focus:text-kronos-cyan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on LinkedIn"
                >
                  LI
                </a>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Abrahams Bio */}
      <section
        className="py-16 sm:py-20 lg:py-32 bg-kronos-bg border-t border-white/5"
        aria-labelledby="founder-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20">

            {/* Left — bio text (7 cols) */}
            <div className="lg:col-span-7">
              <p className="text-xs tracking-widest uppercase text-white/40 mb-4 sm:mb-6">
                The Founder
              </p>
              <h2
                id="founder-heading"
                className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-none mb-6 sm:mb-8"
              >
                Dr. John M.<br />
                <span className="text-white/40">Abrahams, M.D.</span>
              </h2>

              <div className="space-y-4 font-body text-sm sm:text-base text-white/60 font-light leading-relaxed">
                <p>
                  Dr. John M. Abrahams is a board-certified neurosurgeon who has been in clinical practice since 2002, performing over 150 procedures per year with a focus on anterior cervical and posterior lumbar fusions, and minimally invasive spine surgery.
                </p>
                <p>
                  He serves as President of New York Brain and Spine Surgery (NYBASS) and held the role of President of Brain and Spine Surgeons of New York from 2015 to 2023. He is Co-Director of the Spine Section at Northern Westchester Hospital and Founder of the Brain and Spine Research Institute.
                </p>
                <p>
                  Named one of the <span className="text-white/80">"Top 10 Spine and Orthopedic Surgeon Tech Entrepreneurs to Know"</span> by Becker&apos;s Spine Review, Dr. Abrahams has channeled his clinical career into building a network of companies that improve outcomes, reduce administrative burden, and advance brain health technology.
                </p>
              </div>

              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/5">
                <p className="text-xs tracking-widest uppercase text-white/40 mb-3">
                  Companies Founded
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {[
                    { label: "ISS Health", href: "https://iss.health" },
                    { label: "Cognifica Health", href: "https://cognifica-health.vercel.app" },
                    { label: "Cognifica App", href: "https://cognificaai.vercel.app" },
                    { label: "Synaptix", href: "https://synaptix-rho.vercel.app" },
                    { label: "Kronos Revenue", href: "https://kronos-rev.vercel.app" },
                  ].map((co) => (
                    <a
                      key={co.label}
                      href={co.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 border border-white/10 px-3 py-1.5 text-[10px] sm:text-xs uppercase tracking-widest text-white/50 hover:text-white hover:border-white/30 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan"
                    >
                      {co.label}
                      <ExternalLink className="w-2.5 h-2.5" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — credential blocks (5 cols) */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {founderCredentials.map((cred) => (
                  <div
                    key={cred.value}
                    className="bg-kronos-card border border-white/5 p-4 sm:p-6 lg:p-8 flex flex-col"
                  >
                    <span className="font-heading text-3xl sm:text-4xl lg:text-5xl text-kronos-cyan leading-none mb-3">
                      {cred.value}
                    </span>
                    <div className="w-8 h-px bg-kronos-cyan/30 mb-3" aria-hidden="true" />
                    <p className="font-body text-[10px] sm:text-xs text-white/40 font-light uppercase tracking-widest whitespace-pre-line leading-relaxed">
                      {cred.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-3 sm:mt-4 bg-kronos-card border border-white/5 p-4 sm:p-6">
                <p className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest mb-2">
                  Hospital Appointments
                </p>
                <ul className="space-y-1.5 font-body text-xs sm:text-sm text-white/60 font-light">
                  <li>Northern Westchester Hospital, Mt. Kisco NY</li>
                  <li>Westchester Medical Center, Valhalla NY</li>
                  <li>White Plains Hospital, White Plains NY</li>
                  <li>New York Presbyterian Hudson Valley</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* B2B Services Grid */}
      <section
        id="services"
        ref={servicesRef}
        className="py-16 sm:py-20 lg:py-32 bg-kronos-gray-800"
        aria-labelledby="services-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header data-section-header className="mb-12 sm:mb-16 lg:mb-24">
            <p className="text-xs tracking-widest uppercase text-white/50 mb-4">
              Our Services
            </p>
            <h2
              id="services-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white"
            >
              Medical IT &amp; Technology
            </h2>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {b2bServices.map((service) => {
              const cardContent = (
                <>
                  <div
                    className="bg-kronos-bg aspect-[4/3] relative mb-4 sm:mb-6 overflow-hidden group-hover:bg-kronos-bg/80 transition-colors"
                    aria-hidden="true"
                  >
                    {service.animation}
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className={`font-heading text-lg sm:text-xl lg:text-2xl mb-2 ${'titleColor' in service && service.titleColor ? service.titleColor : 'text-white'}`}>
                        {service.titleWordmark ? (
                          <>
                            Cognifica<span className="text-[#E6A91A]"> App</span>
                          </>
                        ) : (
                          service.title
                        )}
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 text-white/40 ${service.arrowColor} group-hover:translate-x-2 transition-all flex-shrink-0 ml-4 mt-1`}
                      aria-hidden="true"
                    />
                  </div>
                </>
              );
              return (
                <article key={service.id} data-stagger-card className="group">
                  {service.external ? (
                    <a
                      href={service.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-kronos-gray-800 ${service.focusColor}`}
                      aria-label={`Visit ${service.title}`}
                    >
                      {cardContent}
                    </a>
                  ) : (
                    <Link
                      href={service.href}
                      className={`block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-kronos-gray-800 ${service.focusColor}`}
                      aria-label={`Learn about ${service.title}`}
                    >
                      {cardContent}
                    </Link>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clinical Brands */}
      <section
        className="py-16 sm:py-20 lg:py-32 bg-kronos-bg"
        aria-labelledby="clinical-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-12 sm:mb-16 lg:mb-24">
            <p className="text-xs tracking-widest uppercase text-white/50 mb-4">
              Clinical Practices
            </p>
            <h2
              id="clinical-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white"
            >
              Patient Care Brands
            </h2>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {clinicalBrands.map((brand) => (
              <article key={brand.id}>
                <div className="bg-kronos-card border-l-2 border-kronos-cyan/30 hover:border-kronos-cyan/60 hover:bg-kronos-gray-800 transition-colors p-6 sm:p-8 lg:p-10 h-full flex flex-col">
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-kronos-cyan/60 mb-3">
                    {brand.eyebrow}
                  </p>
                  <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl text-white mb-1">
                    {brand.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-white/40 font-light uppercase tracking-widest mb-4 sm:mb-6">
                    {brand.subtitle}
                  </p>
                  <p className="font-body text-xs sm:text-sm text-white/60 font-light leading-relaxed flex-1 mb-6 sm:mb-8">
                    {brand.description}
                  </p>
                  <a
                    href={brand.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-kronos-cyan text-xs uppercase tracking-widest hover:gap-5 transition-all w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan"
                  >
                    {brand.cta}
                    <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        ref={statsRef}
        className="py-16 sm:py-20 lg:py-32 bg-kronos-gray-800"
        aria-labelledby="stats-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="stats-heading" className="sr-only">Our Impact</h2>
          <div data-section-content className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
            <div className="text-center sm:text-left">
              <div className="text-5xl sm:text-6xl lg:text-8xl font-heading text-white leading-none mb-4">
                20+
              </div>
              <div className="w-12 h-px bg-kronos-cyan mb-4 mx-auto sm:mx-0" aria-hidden="true" />
              <p className="font-body text-xs sm:text-sm text-white/40 font-light uppercase tracking-wider">
                Years Combined<br />Experience
              </p>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-5xl sm:text-6xl lg:text-8xl font-heading text-white leading-none mb-4">
                $1M+
              </div>
              <div className="w-12 h-px bg-kronos-cyan mb-4 mx-auto sm:mx-0" aria-hidden="true" />
              <p className="font-body text-xs sm:text-sm text-white/40 font-light uppercase tracking-wider">
                Recovered for<br />Providers
              </p>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-5xl sm:text-6xl lg:text-8xl font-heading text-white leading-none mb-4">
                100%
              </div>
              <div className="w-12 h-px bg-kronos-cyan mb-4 mx-auto sm:mx-0" aria-hidden="true" />
              <p className="font-body text-xs sm:text-sm text-white/40 font-light uppercase tracking-wider">
                Provider<br />Focused
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signal */}
      <section className="py-8 bg-kronos-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustSignal
            author="Dr. John M. Abrahams, M.D."
            credentials="Board-Certified Neurosurgeon, President NYBASS, Past President BSSNY"
            lastUpdated="2026-03-01"
          />
        </div>
      </section>

      <ContactSection source="homepage" />
    </>
  );
}
