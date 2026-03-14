import { Heart, Brain, Moon, Pill, Wine, Shield } from 'lucide-react'

const assessments = [
  {
    abbr: 'PHQ-9',
    name: 'Patient Health Questionnaire',
    desc: 'The most widely used tool for screening and measuring depression severity. Nine items mapped to DSM-5 criteria.',
    tag: 'Depression',
    icon: Heart,
  },
  {
    abbr: 'GAD-7',
    name: 'Generalized Anxiety Disorder Scale',
    desc: 'Seven item instrument for identifying anxiety disorder and assessing symptom severity.',
    tag: 'Anxiety',
    icon: Brain,
  },
  {
    abbr: 'PSQI',
    name: 'Pittsburgh Sleep Quality Index',
    desc: 'Assesses sleep quality and disturbances over a one month interval in clinical and occupational settings.',
    tag: 'Sleep Quality',
    icon: Moon,
  },
  {
    abbr: 'DAST-10',
    name: 'Drug Abuse Screening Test',
    desc: 'Ten item screening instrument for identifying problems related to drug misuse across all settings.',
    tag: 'Substance Use',
    icon: Pill,
  },
  {
    abbr: 'AUDIT',
    name: 'Alcohol Use Disorders Test',
    desc: 'WHO gold standard tool for screening hazardous alcohol consumption before dependence develops.',
    tag: 'Alcohol Use',
    icon: Wine,
  },
  {
    abbr: 'PCL-5',
    name: 'PTSD Checklist DSM-5',
    desc: 'Twenty item self report measure assessing PTSD symptoms mapped to DSM-5 diagnostic criteria.',
    tag: 'Trauma',
    icon: Shield,
  },
]

export function AssessmentsSection() {
  return (
    <section
      className="py-20 lg:py-32 bg-sage-dk"
      id="assessments"
      aria-labelledby="assessments-title"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-16 lg:mb-24">
          <p className="text-xs tracking-widest uppercase text-sage-lt/40 mb-4">
            Clinical Instruments
          </p>
          <h2
            id="assessments-title"
            className="font-serif text-3xl lg:text-5xl font-bold text-cream leading-tight"
          >
            Six validated tools
          </h2>
          <p className="font-serif text-xl lg:text-2xl text-sage-lt mt-2">
            One comprehensive picture.
          </p>
        </div>

        {/* Editorial asymmetric grid */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* First row: 2 large cards */}
          {assessments.slice(0, 2).map((a) => {
            const Icon = a.icon
            return (
              <article
                key={a.abbr}
                className="lg:col-span-6 group"
              >
                <div className="bg-cream/[0.04] border border-cream/[0.06] p-8 lg:p-10 h-full hover:bg-cream/[0.08] transition-colors">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-sage/20 flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-sage-lt/60" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  
                  {/* Abbreviation */}
                  <div className="font-serif text-4xl lg:text-5xl font-bold text-sage-lt mb-3">
                    {a.abbr}
                  </div>
                  
                  {/* Name */}
                  <div className="text-sm font-bold text-cream mb-3">
                    {a.name}
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-cream/50 font-light leading-relaxed mb-4">
                    {a.desc}
                  </p>
                  
                  {/* Tag */}
                  <span className="text-[10px] uppercase tracking-widest text-sage-lt/60">
                    {a.tag}
                  </span>
                </div>
              </article>
            )
          })}

          {/* Remaining cards: smaller */}
          {assessments.slice(2).map((a) => {
            const Icon = a.icon
            return (
              <article
                key={a.abbr}
                className="lg:col-span-3 group"
              >
                <div className="bg-cream/[0.04] border border-cream/[0.06] p-6 h-full hover:bg-cream/[0.08] transition-colors">
                  {/* Icon */}
                  <div className="w-10 h-10 bg-sage/20 flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4 text-sage-lt/60" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  
                  {/* Abbreviation */}
                  <div className="font-serif text-2xl font-bold text-sage-lt mb-2">
                    {a.abbr}
                  </div>
                  
                  {/* Name */}
                  <div className="text-xs font-bold text-cream mb-2">
                    {a.name}
                  </div>
                  
                  {/* Tag */}
                  <span className="text-[10px] uppercase tracking-widest text-sage-lt/60">
                    {a.tag}
                  </span>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
