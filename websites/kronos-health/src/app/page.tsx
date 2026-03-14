"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ContactSection, TrustSignal, HeroBackground } from "@/components";
import { RadialPulse, Waveform, ConcentricRings } from "@/components/animations/heroes";
import { useHeroAnimation, useStaggeredCards, useSectionReveal } from "@/components/animations";

export default function HomePage() {
  const heroRef = useHeroAnimation();
  const servicesRef = useStaggeredCards();
  const statsRef = useSectionReveal();

  return (
    <>
      {/* Full-Width Hero with Animation */}
      <section 
        ref={heroRef}
        className="relative min-h-screen bg-kronos-bg overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Full-width animated background - Neural network */}
        <HeroBackground type="neural" color="0, 255, 209" />

        {/* Glass effect content panel */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
            <div 
              className="backdrop-blur-md bg-black/40 border border-white/10 p-8 sm:p-10 lg:p-14 max-w-xl"
            >
              {/* Logo */}
              <div data-hero-title className="mb-8 sm:mb-10">
                <Image
                  src="/kronos-logo.png"
                  alt="Kronos Health"
                  width={400}
                  height={100}
                  className="w-[200px] sm:w-[260px] lg:w-[320px] h-auto"
                  priority
                />
              </div>

              {/* Tagline */}
              <h1 
                data-hero-subtitle
                id="hero-heading"
                className="font-heading text-xl sm:text-2xl lg:text-3xl text-white tracking-wider mb-2"
              >
                Smarter Healthcare
              </h1>
              <p data-hero-subtitle className="font-body text-base sm:text-lg text-white/60 font-light mb-6 sm:mb-8">
                Stronger Revenue
              </p>

              {/* Description */}
              <p data-hero-description className="font-body text-sm sm:text-base text-white/70 font-light leading-relaxed mb-8 sm:mb-10">
                We bring clarity to healthcare, from billing optimization to brain wellness solutions. Founded by Dr. John M. Abrahams, board-certified neurosurgeon with 20+ years of clinical experience.
              </p>

              {/* Square CTA button */}
              <Link
                data-hero-cta
                href="/contact"
                className="inline-flex items-center gap-4 bg-kronos-cyan text-kronos-bg py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs sm:text-sm font-light hover:gap-6 transition-all w-fit focus:outline-none focus:ring-2 focus:ring-kronos-cyan focus:ring-offset-2 focus:ring-offset-black/40"
                aria-label="Contact us to learn more about our healthcare solutions"
              >
                Discover
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>

              {/* Social links */}
              <nav 
                data-hero-social
                className="flex gap-6 sm:gap-8 mt-10 sm:mt-12 text-white/50 text-xs tracking-widest uppercase"
                aria-label="Social media links"
              >
                <a 
                  href="https://facebook.com/kronoshealth" 
                  className="hover:text-kronos-cyan cursor-pointer transition-colors focus:outline-none focus:text-kronos-cyan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                >
                  FB
                </a>
                <a 
                  href="https://twitter.com/kronoshealth" 
                  className="hover:text-kronos-cyan cursor-pointer transition-colors focus:outline-none focus:text-kronos-cyan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Twitter"
                >
                  TW
                </a>
                <a 
                  href="https://linkedin.com/company/kronos-health" 
                  className="hover:text-kronos-cyan cursor-pointer transition-colors focus:outline-none focus:text-kronos-cyan"
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

      {/* Editorial Services Grid */}
      <section 
        ref={servicesRef}
        className="py-16 sm:py-20 lg:py-32 bg-kronos-gray-800"
        aria-labelledby="services-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <header data-section-header className="mb-12 sm:mb-16 lg:mb-24">
            <p className="text-xs tracking-widest uppercase text-white/50 mb-4">
              What We Do
            </p>
            <h2 
              id="services-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white"
            >
              Our Services
            </h2>
          </header>

          {/* Three main services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Revenue Cycle */}
            <article data-stagger-card className="group">
              <Link 
                href="/revenue-cycle"
                className="block focus:outline-none focus:ring-2 focus:ring-kronos-cyan focus:ring-offset-2 focus:ring-offset-kronos-gray-800"
                aria-labelledby="revenue-cycle-title"
              >
                <div 
                  className="bg-kronos-bg aspect-[4/3] relative mb-4 sm:mb-6 overflow-hidden group-hover:bg-kronos-bg/80 transition-colors"
                  aria-hidden="true"
                >
                  <RadialPulse color="0, 255, 209" />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 
                      id="revenue-cycle-title"
                      className="font-heading text-lg sm:text-xl lg:text-2xl text-white mb-2"
                    >
                      Revenue Cycle
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-white/60 font-light">
                      Payment dispute resolution under the No Surprises Act. Expert arbitration and IDR management for out-of-network billing.
                    </p>
                  </div>
                  <ArrowRight 
                    className="w-4 h-4 text-white/40 group-hover:translate-x-2 group-hover:text-kronos-cyan transition-all flex-shrink-0 ml-4" 
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </article>

            {/* CognificaAI */}
            <article data-stagger-card className="group">
              <Link 
                href="/cognificaai"
                className="block focus:outline-none focus:ring-2 focus:ring-kronos-lavender focus:ring-offset-2 focus:ring-offset-kronos-gray-800"
                aria-labelledby="cognificaai-title"
              >
                <div 
                  className="bg-kronos-bg aspect-[4/3] relative mb-4 sm:mb-6 overflow-hidden group-hover:bg-kronos-bg/80 transition-colors"
                  aria-hidden="true"
                >
                  <Waveform color="212, 184, 232" />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 
                      id="cognificaai-title"
                      className="font-heading text-lg sm:text-xl lg:text-2xl text-white mb-2"
                    >
                      CognificaAI
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-white/60 font-light">
                      Intelligent mental health screening and risk stratification for employers. Validated clinical assessments with smart care pathways.
                    </p>
                  </div>
                  <ArrowRight 
                    className="w-4 h-4 text-white/40 group-hover:translate-x-2 group-hover:text-kronos-lavender transition-all flex-shrink-0 ml-4" 
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </article>

            {/* Synaptix */}
            <article data-stagger-card className="group sm:col-span-2 lg:col-span-1">
              <Link 
                href="/synaptix"
                className="block focus:outline-none focus:ring-2 focus:ring-synaptix-cyan focus:ring-offset-2 focus:ring-offset-kronos-gray-800"
                aria-labelledby="synaptix-title"
              >
                <div 
                  className="bg-kronos-bg aspect-[4/3] relative mb-4 sm:mb-6 overflow-hidden group-hover:bg-kronos-bg/80 transition-colors"
                  aria-hidden="true"
                >
                  <ConcentricRings color="15, 189, 213" />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 
                      id="synaptix-title"
                      className="font-heading text-lg sm:text-xl lg:text-2xl text-white mb-2"
                    >
                      Synaptix
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-white/60 font-light">
                      Advanced concussion assessment and recovery platform. Structured, billable, recurring with $260K annual revenue potential.
                    </p>
                  </div>
                  <ArrowRight 
                    className="w-4 h-4 text-white/40 group-hover:translate-x-2 group-hover:text-synaptix-cyan transition-all flex-shrink-0 ml-4" 
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Editorial Stats Section */}
      <section 
        ref={statsRef}
        className="py-16 sm:py-20 lg:py-32 bg-kronos-bg"
        aria-labelledby="stats-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="stats-heading" className="sr-only">Our Impact</h2>
          <div data-section-content className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
            {/* Stat 1 */}
            <div className="text-center sm:text-left">
              <div className="text-5xl sm:text-6xl lg:text-8xl font-heading text-white leading-none mb-4">
                20+
              </div>
              <div className="w-12 h-px bg-kronos-cyan mb-4 mx-auto sm:mx-0" aria-hidden="true" />
              <p className="font-body text-xs sm:text-sm text-white/40 font-light uppercase tracking-wider">
                Years Combined
                <br />
                Experience
              </p>
            </div>

            {/* Stat 2 */}
            <div className="text-center sm:text-left">
              <div className="text-5xl sm:text-6xl lg:text-8xl font-heading text-white leading-none mb-4">
                $1M+
              </div>
              <div className="w-12 h-px bg-kronos-cyan mb-4 mx-auto sm:mx-0" aria-hidden="true" />
              <p className="font-body text-xs sm:text-sm text-white/40 font-light uppercase tracking-wider">
                Recovered for
                <br />
                Providers
              </p>
            </div>

            {/* Stat 3 */}
            <div className="text-center sm:text-left">
              <div className="text-5xl sm:text-6xl lg:text-8xl font-heading text-white leading-none mb-4">
                100%
              </div>
              <div className="w-12 h-px bg-kronos-cyan mb-4 mx-auto sm:mx-0" aria-hidden="true" />
              <p className="font-body text-xs sm:text-sm text-white/40 font-light uppercase tracking-wider">
                Provider
                <br />
                Focused
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* E-E-A-T Trust Signal */}
      <section className="py-8 bg-kronos-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustSignal 
            author="Dr. John M. Abrahams, M.D."
            credentials="Board-Certified Neurosurgeon, Past President BSSNY"
            lastUpdated="2026-03-01"
          />
        </div>
      </section>

      <ContactSection source="homepage" />
    </>
  );
}
