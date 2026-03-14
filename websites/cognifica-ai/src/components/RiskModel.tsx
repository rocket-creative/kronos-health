import { Smartphone, ClipboardCheck, Calculator, Target, BarChart3, ArrowDown } from 'lucide-react'

const riskLevels = [
  { color: 'bg-green-500', title: 'Low Risk', action: 'Wellness Content' },
  { color: 'bg-amber-500', title: 'Moderate Risk', action: 'EAP Guidance' },
  { color: 'bg-orange-500', title: 'Elevated Risk', action: 'Pro Referral' },
  { color: 'bg-red-500', title: 'High Risk', action: 'Crisis Support' },
]

const funnelSteps = [
  { icon: Smartphone, title: 'Secure assessment link', body: 'Email or SMS, no login required' },
  { icon: ClipboardCheck, title: '6 instrument battery', body: 'PHQ-9, GAD-7, PSQI, DAST-10, AUDIT, PCL-5' },
  { icon: Calculator, title: 'Risk Score generated', body: 'Algorithm weighs all scores' },
  { icon: Target, title: 'Care pathway activated', body: 'Resources based on risk tier' },
  { icon: BarChart3, title: 'Dashboard updated', body: 'Aggregate data only' },
]

export function RiskModel() {
  return (
    <section className="bg-cream py-20 lg:py-32" id="risk" aria-labelledby="risk-title">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <p className="text-xs tracking-widest uppercase text-ink/40 mb-4">
            Risk Stratification
          </p>
          <h2
            id="risk-title"
            className="font-serif text-3xl lg:text-5xl font-bold text-ink leading-tight"
          >
            From data to action
          </h2>
          <p className="font-serif text-xl lg:text-2xl text-sage mt-2">
            automatically.
          </p>
        </div>

        {/* Editorial Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Risk Levels */}
          <div>
            <p className="text-xs tracking-widest uppercase text-ink/40 mb-6">
              Risk Tiers
            </p>
            <div className="space-y-3">
              {riskLevels.map((level) => (
                <div
                  key={level.title}
                  className="flex items-center gap-4 bg-white p-4"
                >
                  <div className={`w-2 h-10 ${level.color}`} />
                  <span className="font-serif text-base sm:text-lg text-ink flex-1">{level.title}</span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-ink/40">
                    {level.action}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Funnel */}
          <div>
            <p className="text-xs tracking-widest uppercase text-ink/40 mb-6">
              Employee Journey
            </p>
            <div className="bg-white p-6 sm:p-8">
              <div className="space-y-4">
                {funnelSteps.map((step, i) => {
                  const Icon = step.icon
                  return (
                    <div key={step.title}>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-sage/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-sage/60" strokeWidth={1.5} aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="font-serif text-sm sm:text-base text-ink mb-1">{step.title}</h3>
                          <p className="text-xs text-ink/50 font-light">{step.body}</p>
                        </div>
                      </div>
                      {i < funnelSteps.length - 1 && (
                        <div className="flex justify-center py-2">
                          <ArrowDown className="w-3 h-3 text-sand" strokeWidth={1} aria-hidden="true" />
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
