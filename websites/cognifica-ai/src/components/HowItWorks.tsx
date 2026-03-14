import { ClipboardCheck, Calculator, UserCheck, Phone, LayoutDashboard } from 'lucide-react'

const steps = [
  {
    num: '01',
    title: 'Complete Assessments',
    desc: 'Employees access CognificaAI through a secure link. They complete validated clinical instruments in under 10 minutes. No app download required.',
    icon: ClipboardCheck,
  },
  {
    num: '02',
    title: 'Risk Score Calculated',
    desc: 'Our algorithm synthesizes all assessment scores into a single composite Risk Score, stratified into Low, Moderate, Elevated, and High categories.',
    icon: Calculator,
  },
  {
    num: '03',
    title: 'Personalized Recommendations',
    desc: 'Based on their risk profile, employees receive tailored guidance and direct referrals to licensed mental health professionals when needed.',
    icon: UserCheck,
  },
  {
    num: '04',
    title: 'Crisis Support 24/7',
    desc: 'High risk employees are immediately connected to crisis resources, including 24/7 crisis line integration and automated clinical notifications.',
    icon: Phone,
  },
  {
    num: '05',
    title: 'Employer Dashboard',
    desc: 'HR teams access an anonymized, HIPAA compliant dashboard showing workforce mental health trends without individual employee data.',
    icon: LayoutDashboard,
  },
]

export function HowItWorks() {
  return (
    <section className="bg-white py-20 lg:py-32" id="how" aria-labelledby="how-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-16 lg:mb-24">
          <p className="text-xs tracking-widest uppercase text-ink/40 mb-4">
            How It Works
          </p>
          <h2
            id="how-title"
            className="font-serif text-3xl lg:text-5xl font-bold text-ink leading-tight"
          >
            A complete care pathway
          </h2>
          <p className="font-serif text-xl lg:text-2xl text-sage mt-2">
            from screening to support.
          </p>
        </div>

        {/* Editorial steps grid */}
        <div className="grid lg:grid-cols-12 gap-y-12 lg:gap-16">
          {steps.map((step, i) => {
            const Icon = step.icon
            const isLarge = i === 0
            
            return (
              <div 
                key={step.num} 
                className={isLarge ? 'lg:col-span-7' : 'lg:col-span-6'}
              >
                <div className={`${isLarge ? 'lg:pr-12' : ''}`}>
                  {/* Oversized number */}
                  <div className="flex items-start gap-6 mb-6">
                    <span className={`font-serif font-bold text-ink/10 leading-none ${isLarge ? 'text-[120px] lg:text-[180px]' : 'text-[80px] lg:text-[100px]'}`}>
                      {step.num}
                    </span>
                  </div>
                  
                  {/* Icon + content */}
                  <div className="flex items-start gap-4 -mt-8 lg:-mt-12 relative z-10">
                    <div className={`bg-sage/10 flex items-center justify-center flex-shrink-0 ${isLarge ? 'w-14 h-14' : 'w-10 h-10'}`}>
                      <Icon className={`text-sage/60 ${isLarge ? 'w-6 h-6' : 'w-4 h-4'}`} strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className={`font-serif font-bold text-ink mb-2 ${isLarge ? 'text-xl lg:text-2xl' : 'text-lg'}`}>
                        {step.title}
                      </h3>
                      <p className={`text-ink/50 font-light leading-relaxed ${isLarge ? 'text-base' : 'text-sm'}`}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
