import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-cognifica-indigo text-white">
      <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <Image
            src="/images/cognifica-logo.png"
            alt="Cognifica Health"
            width={140}
            height={36}
            className="h-8 w-auto mb-3 brightness-0 invert"
          />
          <p className="text-white/70 text-sm leading-relaxed">
            Comprehensive care for cognitive health and brain wellness.
          </p>
          <a
            href="tel:9149483008"
            className="mt-4 block text-cognifica-submit font-bold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            (914) 948 3008
          </a>
        </div>
        <div>
          <p className="font-bold uppercase tracking-wider text-sm mb-3">Locations</p>
          <address className="not-italic text-white/70 text-sm leading-loose">
            <p>West Harrison, NY</p>
            <p>Aquebogue, NY</p>
            <p>Stamford, CT</p>
          </address>
        </div>
        <div>
          <p className="font-bold uppercase tracking-wider text-sm mb-3">Quick links</p>
          <ul className="flex flex-col gap-2 text-sm text-white/70 list-none">
            <li>
              <Link href="/consults" className="hover:text-white transition-colors">
                Book an appointment
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-white transition-colors">
                Our team
              </Link>
            </li>
            <li>
              <Link href="/conditions-we-treat" className="hover:text-white transition-colors">
                Conditions we treat
              </Link>
            </li>
            <li>
              <Link href="/tms-therapy" className="hover:text-white transition-colors">
                TMS therapy
              </Link>
            </li>
            <li>
              <Link href="/neuropsychological-testing" className="hover:text-white transition-colors">
                Neuropsychological testing
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-xs">
          <p>© 2026 Cognifica Health. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
              Terms of Service
            </Link>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4 pb-4 text-center text-white/40 text-xs">
          Insurance accepted: Medicare · Tricare · Workers Compensation · No Fault
        </div>
      </div>
    </footer>
  )
}
