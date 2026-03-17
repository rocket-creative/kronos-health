"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function StickyCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-kronos-bg/95 backdrop-blur-md border-t border-white/10 px-4 py-3 pb-safe-bottom"
      role="banner"
      aria-label="Contact options"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <Link
          href="/contact"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-kronos-cyan text-kronos-bg py-3 px-4 uppercase tracking-widest text-xs font-light hover:bg-kronos-cyan/90 transition-colors focus:outline-none focus:ring-2 focus:ring-kronos-cyan focus:ring-offset-2 focus:ring-offset-kronos-bg"
        >
          Contact Us
          <ArrowRight className="w-3 h-3" aria-hidden="true" />
        </Link>
        <a
          href="tel:+19147056830"
          className="flex items-center justify-center gap-2 text-kronos-cyan py-3 px-4 uppercase tracking-widest text-xs font-light hover:text-kronos-cyan/80 transition-colors focus:outline-none focus:ring-2 focus:ring-kronos-cyan focus:ring-offset-2 focus:ring-offset-kronos-bg"
          aria-label="Call (914) 705 6830"
        >
          <Phone className="w-4 h-4" aria-hidden="true" />
          <span className="hidden sm:inline">(914) 705 6830</span>
        </a>
      </div>
    </div>
  );
}
