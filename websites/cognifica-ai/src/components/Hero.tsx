import { ArrowRight, Brain } from 'lucide-react'

export function Hero() {
  return (
    <section
      className="min-h-screen grid lg:grid-cols-2"
      aria-label="Hero"
    >
      {/* Left: Placeholder with geometric accent */}
      <div className="relative bg-sage min-h-[50vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Geometric shapes */}
        <div className="absolute top-[20%] left-[15%] w-24 h-24 border border-cream/10 rounded-full" />
        <div className="absolute bottom-[25%] right-[10%] w-40 h-40 border border-sage-lt/20 rounded-full" />
        <div className="absolute top-[50%] left-[40%] w-16 h-16 bg-cream/5" />
        <div className="absolute bottom-[15%] left-[20%] w-32 h-px bg-cream/10" />
        
        {/* Large brain icon as visual anchor */}
        <Brain className="w-32 h-32 lg:w-48 lg:h-48 text-cream/[0.08]" strokeWidth={1} aria-hidden="true" />
      </div>

      {/* Right: Content panel */}
      <div className="relative bg-sage-dk flex flex-col justify-center px-8 lg:px-16 py-20 lg:py-0">
        {/* Eyebrow */}
        <p className="text-[10px] uppercase tracking-[0.2em] text-sage-lt/60 mb-8">
          Workplace Mental Health Platform
        </p>

        {/* Oversized split typography */}
        <div className="mb-8">
          <div className="flex items-baseline">
            <span className="text-[80px] lg:text-[140px] font-serif font-bold text-cream leading-none tracking-tight">
              CO
            </span>
            <span className="text-[80px] lg:text-[140px] font-serif font-bold text-cream/30 leading-none tracking-tight">
              G
            </span>
          </div>
          <span className="text-[40px] lg:text-[70px] font-serif font-bold text-cream/30 leading-none tracking-tight block -mt-2 lg:-mt-4">
            NIFICA
          </span>
        </div>

        {/* Tagline */}
        <h1 className="font-serif text-xl lg:text-2xl text-cream tracking-wide mb-2">
          Mental wellness, measured
        </h1>
        <p className="font-sans text-base text-cream/40 font-light mb-8">
          and managed at scale.
        </p>

        {/* Description */}
        <p className="font-sans text-sm text-cream/50 font-light leading-relaxed max-w-md mb-10">
          Clinically rigorous screening and risk stratification for employers. From automated assessments to direct pathways for professional care.
        </p>

        {/* Square CTA button */}
        <a
          href="#contact"
          className="inline-flex items-center gap-4 bg-clay text-cream py-4 px-8 uppercase tracking-widest text-xs font-light hover:gap-6 hover:bg-rust transition-all w-fit"
        >
          Request Demo
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </a>

        {/* Secondary link */}
        <a
          href="#how"
          className="inline-flex items-center gap-2 text-cream/40 text-xs uppercase tracking-widest mt-6 hover:text-cream/70 transition-colors"
        >
          See How It Works
        </a>
      </div>
    </section>
  )
}
