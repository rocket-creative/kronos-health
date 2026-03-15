"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { useMobileMenuAnimation } from "./animations";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/revenue-cycle", label: "Revenue Cycle" },
  { href: "https://kronosrevenue.co?utm_source=kronoshealth&utm_medium=nav", label: "Kronos Revenue", external: true },
  { href: "https://cognificaai.vercel.app?utm_source=kronoshealth&utm_medium=nav", label: "Cognifica AI", external: true, wordmark: true },
  { href: "https://synaptix-rho.vercel.app?utm_source=kronoshealth&utm_medium=nav", label: "Synaptix", external: true },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  useMobileMenuAnimation(mobileMenuOpen, menuRef);

  return (
    <header className="fixed top-0 w-full z-50 bg-kronos-bg/90 backdrop-blur-md">
      <nav 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-kronos-cyan focus:ring-offset-2 focus:ring-offset-kronos-bg"
            aria-label="Kronos Health - Home"
          >
            <Image
              src="/kronos-logo.png"
              alt=""
              width={200}
              height={50}
              className="w-[120px] sm:w-[150px] lg:w-[180px] max-w-[200px] h-auto"
              priority
            />
          </Link>

          {/* Center nav links - desktop */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10" role="list">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-xs text-white/50 hover:text-white uppercase tracking-widest transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-kronos-bg"
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
            ))}
          </div>

          {/* Right side - CTA + hamburger */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 text-kronos-cyan text-xs uppercase tracking-widest hover:gap-3 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-kronos-bg"
            >
              Contact
              <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </Link>

            {/* Hamburger - always visible on mobile */}
            <button
              className="lg:hidden text-white/60 hover:text-white p-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-kronos-bg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X size={20} aria-hidden="true" />
              ) : (
                <Menu size={20} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div 
          ref={menuRef}
          id="mobile-menu"
          className="lg:hidden bg-kronos-bg/95 backdrop-blur-md border-t border-white/5"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="px-4 sm:px-6 py-6 sm:py-8 space-y-4 sm:space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block font-body text-sm text-white/60 hover:text-white uppercase tracking-widest transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-kronos-bg py-2"
                onClick={() => setMobileMenuOpen(false)}
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
            ))}
            <div className="pt-4 sm:pt-6 border-t border-white/10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-kronos-cyan text-kronos-bg py-3 px-6 uppercase tracking-widest text-xs font-light hover:gap-5 hover:bg-kronos-cyan/90 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-kronos-bg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
                <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
