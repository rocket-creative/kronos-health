import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-kronos-bg py-16">
      <div className="max-w-xl mx-auto px-4 text-center">
        <p className="text-kronos-accent text-xs font-bold uppercase tracking-widest mb-4">
          Error 404
        </p>
        <h1 className="font-heading text-5xl md:text-6xl font-bold text-kronos-primary mb-4">
          Page not found
        </h1>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved. Let us help you find what
          you need.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-kronos-primary text-white px-6 py-3 font-bold uppercase tracking-wider text-sm hover:bg-kronos-primary/90 transition-colors"
          >
            Go to Homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border border-kronos-primary text-kronos-primary px-6 py-3 font-bold uppercase tracking-wider text-sm hover:bg-kronos-primary/5 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        <div className="border-t border-stone-200 pt-8">
          <p className="text-sm text-gray-500 mb-4">Looking for something specific?</p>
          <ul className="flex flex-wrap justify-center gap-4 text-sm">
            <li>
              <Link href="/about" className="text-kronos-accent hover:underline">
                About Kronos Health
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-kronos-accent hover:underline">
                Our Products
              </Link>
            </li>
            <li>
              <Link href="/team" className="text-kronos-accent hover:underline">
                Our Team
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          Need help? Email us at{' '}
          <a href="mailto:info@kronoshealth.co" className="text-kronos-accent hover:underline">
            info@kronoshealth.co
          </a>
        </div>
      </div>
    </section>
  )
}
