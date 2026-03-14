import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-white py-16">
      <div className="max-w-xl mx-auto px-4 text-center">
        <p className="text-cognifica-submit text-xs font-bold uppercase tracking-widest mb-4">
          Error 404
        </p>
        <h1 className="font-heading text-5xl md:text-6xl font-bold text-cognifica-indigo mb-4">
          Page not found
        </h1>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved. Let us help you find what
          you need.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-cognifica-indigo text-white px-6 py-3 font-bold uppercase tracking-wider text-sm hover:bg-cognifica-indigo/90 transition-colors"
          >
            Go to Homepage
          </Link>
          <Link
            href="/consults"
            className="inline-flex items-center justify-center gap-2 border border-cognifica-indigo text-cognifica-indigo px-6 py-3 font-bold uppercase tracking-wider text-sm hover:bg-cognifica-indigo/5 transition-colors"
          >
            Book Appointment
          </Link>
        </div>

        <div className="border-t border-stone-200 pt-8">
          <p className="text-sm text-gray-500 mb-4">Looking for something specific?</p>
          <ul className="flex flex-wrap justify-center gap-4 text-sm">
            <li>
              <Link href="/neuropsychological-testing" className="text-cognifica-cta hover:underline">
                Neuropsychological Testing
              </Link>
            </li>
            <li>
              <Link href="/tms-therapy" className="text-cognifica-cta hover:underline">
                TMS Therapy
              </Link>
            </li>
            <li>
              <Link href="/concussion-tbi" className="text-cognifica-cta hover:underline">
                Concussion Care
              </Link>
            </li>
            <li>
              <Link href="/team" className="text-cognifica-cta hover:underline">
                Our Team
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          Need help? Call us at{' '}
          <a href="tel:9149483008" className="text-cognifica-cta hover:underline">
            (914) 948 3008
          </a>
        </div>
      </div>
    </section>
  )
}
