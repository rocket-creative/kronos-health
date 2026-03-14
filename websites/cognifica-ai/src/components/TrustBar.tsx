const stats = [
  { num: '1 in 5', label: 'Adults affected annually' },
  { num: '$1T', label: 'Lost productivity globally' },
  { num: '46%', label: 'Receive any treatment' },
  { num: '4×', label: 'ROI for employers' },
]

export function TrustBar() {
  return (
    <section
      className="bg-cream py-12 lg:py-16 border-y border-sand/50"
      aria-label="Industry statistics"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div key={stat.num} className="text-center">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-sage-dk mb-2">
                {stat.num}
              </div>
              <div className="w-8 h-px bg-sage/30 mx-auto mb-2" />
              <p className="text-xs text-ink/40 font-light">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
