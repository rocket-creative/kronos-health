import { Search, Shield, Zap, Building2, BarChart3, AlertCircle } from 'lucide-react'

const cards = [
  {
    icon: Search,
    title: 'Early Detection',
    body: 'Proactively surface mental health risk before it becomes a performance issue or workplace crisis.',
    stat: '35%',
    statNote: 'Increase in condition identification',
  },
  {
    icon: Shield,
    title: 'HIPAA Compliant',
    body: 'Individual employee data is never shared with HR. Employers see only anonymized, aggregate dashboards.',
    stat: '100%',
    statNote: 'Privacy protected results',
  },
  {
    icon: Zap,
    title: 'Zero IT Lift',
    body: 'Deploy across your entire workforce in days, not months. No EHR integration, no SSO setup required.',
    stat: '<1wk',
    statNote: 'Average time to launch',
  },
  {
    icon: Building2,
    title: 'Direct Care Pathways',
    body: 'Unlike passive wellness apps, CognificaAI generates real referrals to licensed clinicians.',
    stat: null,
    statNote: null,
  },
  {
    icon: BarChart3,
    title: 'Measurable ROI',
    body: 'Track program engagement, risk reduction trends, and care utilization with quarterly outcomes reporting.',
    stat: null,
    statNote: null,
  },
  {
    icon: AlertCircle,
    title: '24/7 Crisis Safety Net',
    body: 'When an employee is in crisis, CognificaAI acts with immediate crisis resource connection.',
    stat: null,
    statNote: null,
  },
]

export function EmployerValue() {
  return (
    <section className="bg-white py-20 lg:py-32" id="employers" aria-labelledby="employers-title">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <p className="text-xs tracking-widest uppercase text-ink/40 mb-4">
            For Employers
          </p>
          <h2
            id="employers-title"
            className="font-serif text-3xl lg:text-5xl font-bold text-ink leading-tight"
          >
            A measurable return on
          </h2>
          <p className="font-serif text-xl lg:text-2xl text-sage mt-2">
            employee wellbeing.
          </p>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon
            const isLarge = i < 3
            return (
              <article
                key={card.title}
                className={`bg-cream/50 p-4 sm:p-6 border-t-2 border-sage/20 ${isLarge ? '' : ''}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sage/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-sage/60" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  {card.stat && (
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-sage">
                      {card.stat}
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-base sm:text-lg text-ink mb-2">{card.title}</h3>
                <p className="text-xs sm:text-sm text-ink/50 font-light leading-relaxed">{card.body}</p>
                {card.statNote && (
                  <p className="text-[10px] sm:text-xs text-sage/60 mt-3">{card.statNote}</p>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
