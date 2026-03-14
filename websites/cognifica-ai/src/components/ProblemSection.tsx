import { AlertTriangle, TrendingDown, Smartphone } from 'lucide-react'

const stats = [
  {
    num: '77%',
    title: 'Burnout is widespread',
    body: 'Of employees report experiencing workplace burnout at least once, often silently and without support.',
    icon: AlertTriangle,
  },
  {
    num: '$4,700',
    title: 'Per employee annual cost',
    body: 'The average cost of untreated depression to employers through absenteeism, presenteeism, and turnover.',
    icon: TrendingDown,
  },
  {
    num: '62%',
    title: 'Prefer digital first screening',
    body: 'Employees are more willing to disclose mental health concerns through a digital tool than directly to HR.',
    icon: Smartphone,
  },
]

export function ProblemSection() {
  return (
    <section className="bg-cream py-20 lg:py-32" id="problem" aria-labelledby="problem-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-16 lg:mb-24">
          <p className="text-xs tracking-widest uppercase text-ink/40 mb-4">
            The Challenge
          </p>
          <h2
            id="problem-title"
            className="font-serif text-3xl lg:text-5xl font-bold text-ink leading-tight max-w-2xl"
          >
            Mental health is your most under addressed workforce risk.
          </h2>
        </div>

        {/* Editorial grid layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left: Large stat highlight */}
          <div className="lg:col-span-5">
            <div className="bg-sage/10 aspect-square flex flex-col items-center justify-center p-8 lg:p-12">
              <span className="text-[100px] lg:text-[140px] font-serif font-bold text-sage leading-none">
                77%
              </span>
              <div className="w-16 h-px bg-sage/30 my-6" />
              <p className="text-sm text-ink/60 font-light text-center max-w-xs">
                Of employees report experiencing workplace burnout at least once
              </p>
            </div>
          </div>

          {/* Right: Stats list */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-base text-ink/60 font-light leading-relaxed mb-12 max-w-lg">
              Most employers know mental illness is prevalent in their workforce. Few have a systematic way to identify it early and connect employees to care before a crisis occurs.
            </p>

            <div className="space-y-8">
              {stats.slice(1).map((s) => {
                const Icon = s.icon
                return (
                  <div key={s.num} className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-sage/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-sage/60" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-4 mb-2">
                        <span className="font-serif text-4xl font-bold text-ink">{s.num}</span>
                        <span className="text-sm text-ink/40 font-light">{s.title}</span>
                      </div>
                      <p className="text-sm text-ink/50 font-light leading-relaxed">
                        {s.body}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
