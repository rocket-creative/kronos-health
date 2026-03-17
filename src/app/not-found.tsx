import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-kronos-bg py-16">
      <div className="max-w-xl mx-auto px-4 text-center">
        <p className="text-kronos-cyan text-xs font-bold uppercase tracking-widest mb-4">
          Error 404
        </p>
        <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-4">
          Page not found
        </h1>
        <p className="text-white/70 mb-8">
          The page you are looking for does not exist or has been moved. Let us help you find what
          you need.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-kronos-cyan text-kronos-bg px-6 py-3 font-bold uppercase tracking-wider text-sm hover:bg-kronos-cyan/90 transition-colors"
          >
            Go to Homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border border-kronos-cyan text-kronos-cyan px-6 py-3 font-bold uppercase tracking-wider text-sm hover:bg-kronos-cyan/10 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-sm text-white/60 mb-4">Looking for something specific?</p>
          <ul className="flex flex-wrap justify-center gap-4 text-sm">
            <li>
              <Link href="/about" className="text-kronos-cyan hover:underline">
                About Kronos Group
              </Link>
            </li>
            <li>
              <Link href="/revenue-cycle" className="text-kronos-cyan hover:underline">
                Revenue Cycle
              </Link>
            </li>
            <li>
              <Link href="/digital-health-tools" className="text-kronos-cyan hover:underline">
                Digital Health Tools
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-kronos-cyan hover:underline">
                Our Team
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-8 text-sm text-white/60">
          Need help? Email us at{" "}
          <a href="mailto:info@kronoshealth.co" className="text-kronos-cyan hover:underline">
            info@kronoshealth.co
          </a>
        </div>
      </div>
    </section>
  );
}
