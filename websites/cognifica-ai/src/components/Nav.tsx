'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'How It Works', href: '#how' },
  { label: 'Assessments', href: '#assessments' },
  { label: 'For Employers', href: '#employers' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 w-full z-[100] h-16 lg:h-20 px-6 lg:px-12"
      style={{ background: 'rgba(46,84,73,.95)', backdropFilter: 'blur(12px)' }}
      aria-label="Main navigation"
    >
      <div className="h-full flex items-center justify-between">
        {/* Logo - minimal */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold text-cream tracking-tight">
            C
          </span>
          <span className="hidden sm:inline font-serif text-lg font-bold text-cream/50 tracking-tight">
            OGNIFICA
          </span>
        </Link>

        {/* Center nav links - desktop */}
        <ul className="hidden lg:flex items-center gap-10 list-none" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs text-cream/50 uppercase tracking-widest hover:text-cream transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 text-clay text-xs uppercase tracking-widest hover:gap-3 transition-all"
          >
            Request Demo
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-cream/60 hover:text-cream p-2 transition-colors"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {open && (
        <div
          className="lg:hidden absolute top-16 left-0 w-full py-8 px-6"
          style={{ background: 'rgba(46,84,73,.98)', backdropFilter: 'blur(12px)' }}
          role="menu"
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-cream/60 uppercase tracking-widest hover:text-cream transition-colors"
                onClick={() => setOpen(false)}
                role="menuitem"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-6 border-t border-cream/10">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-clay text-cream py-3 px-6 uppercase tracking-widest text-xs font-light"
                onClick={() => setOpen(false)}
              >
                Request Demo
                <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
