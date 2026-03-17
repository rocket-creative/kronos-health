import Link from "next/link";
import { ArrowRight } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/revenue-cycle", label: "Revenue Cycle" },
  { href: "/digital-health-tools", label: "Digital Health Tools" },
  { href: "/clinically-integrated-neuropsychology", label: "Neuropsychology" },
  { href: "/cognitive-franchise-program", label: "Franchise Program" },
  { href: "https://cognificaapp.vercel.app?utm_source=kronoshealth&utm_medium=footer", label: "Cognifica App", external: true, wordmark: true },
  { href: "https://synaptix-rho.vercel.app?utm_source=kronoshealth&utm_medium=footer", label: "Synaptix", external: true },
];

export default function Footer() {
  return (
    <footer className="bg-kronos-bg border-t border-white/5" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-20">
        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 mb-10 sm:mb-12 lg:mb-16">
          {/* Logo and tagline */}
          <div className="sm:col-span-2 lg:col-span-5">
            <Link 
              href="/" 
              className="inline-block mb-4 sm:mb-6 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-kronos-cyan focus:ring-offset-2 focus:ring-offset-kronos-bg"
              aria-label="Kronos Group - Home"
            >
              <img
                src="/kronos-group-logo.svg"
                alt="Kronos Group"
                width={140}
                height={35}
                className="h-7 sm:h-8 w-auto"
              />
            </Link>
            <p className="font-body text-xs sm:text-sm text-white/40 font-light leading-relaxed max-w-xs">
              Healthcare solutions. Brain health. Better tools. Powered by medicine, guided by clarity.
            </p>
          </div>

          {/* Links */}
          <nav className="lg:col-span-3" aria-label="Footer navigation">
            <p className="text-[10px] sm:text-xs tracking-widest uppercase text-white/50 mb-3 sm:mb-4">
              Navigate
            </p>
            <ul className="space-y-2 sm:space-y-3" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-[10px] sm:text-xs text-white/50 hover:text-white uppercase tracking-widest transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-kronos-bg"
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {link.wordmark ? (
                      <>
                        <span>Cognifica</span>
                        <span className="text-kronos-lavender">AI</span>
                      </>
                    ) : (
                      link.label
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-4">
            <p className="text-[10px] sm:text-xs tracking-widest uppercase text-white/50 mb-3 sm:mb-4">
              Contact
            </p>
            <address className="not-italic space-y-1 sm:space-y-2 font-body text-[10px] sm:text-xs text-white/50 font-light">
              <p>244 Westchester Ave, Ste 209</p>
              <p>West Harrison, NY 10604</p>
              <p className="pt-2 sm:pt-3">
                <a 
                  href="tel:+19147056830" 
                  className="hover:text-kronos-cyan transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-kronos-bg"
                  aria-label="Call us at (914) 705 6830"
                >
                  (914) 705 6830
                </a>
              </p>
              <p>
                <a 
                  href="mailto:info@kronoshealth.co" 
                  className="hover:text-kronos-cyan transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-kronos-bg"
                  aria-label="Email us at info@kronoshealth.co"
                >
                  info@kronoshealth.co
                </a>
              </p>
            </address>

            {/* Social as text links */}
            <nav 
              className="flex gap-4 sm:gap-6 mt-4 sm:mt-6 text-[10px] sm:text-xs tracking-widest uppercase text-white/50"
              aria-label="Social media links"
            >
              <a 
                href="https://linkedin.com/company/kronos-health" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-kronos-cyan transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-kronos-bg"
                aria-label="Follow us on LinkedIn"
              >
                LI
              </a>
              <a 
                href="https://instagram.com/kronoshealth" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-kronos-cyan transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-kronos-bg"
                aria-label="Follow us on Instagram"
              >
                IG
              </a>
            </nav>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="border-t border-white/5 pt-6 sm:pt-8 lg:pt-12 mb-6 sm:mb-8 lg:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="font-heading text-lg sm:text-xl lg:text-2xl text-white/80">
              Ready to get started?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-kronos-cyan text-kronos-bg py-3 px-6 uppercase tracking-widest text-xs font-light hover:gap-5 transition-all w-fit focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-kronos-bg"
            >
              Contact Us
              <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/50 text-[10px] sm:text-xs">
            © 2026 Kronos Group. All rights reserved.
          </p>
          <nav className="flex items-center gap-4 sm:gap-6" aria-label="Legal links">
            <Link
              href="/privacy"
              className="font-body text-white/50 text-[10px] sm:text-xs hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-kronos-bg"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-body text-white/50 text-[10px] sm:text-xs hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-kronos-bg"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
