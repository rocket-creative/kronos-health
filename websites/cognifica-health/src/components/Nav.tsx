'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/team', label: 'Team' },
  { href: '/conditions-we-treat', label: 'Conditions we treat' },
  { href: '/brain-health-and-wellness', label: 'Brain health' },
  { href: '/news', label: 'News' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-cognifica-indigo">
      <nav
        className="max-w-5xl mx-auto px-4 h-16 md:h-32 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center md:pt-4" aria-label="Cognifica Health home">
          <Image
            src="/images/cognifica-logo.png"
            alt="Cognifica Health"
            width={200}
            height={99}
            className="h-8 w-auto md:w-[200px] md:h-[99px]"
            priority
          />
        </Link>
        <ul className="hidden md:flex gap-8 list-none" role="list">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-white/80 hover:text-white font-nav text-sm uppercase tracking-wider transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/consults"
          className="hidden md:inline-flex items-center gap-2 bg-cognifica-cta text-white px-5 py-2 text-sm font-bold uppercase tracking-wider hover:bg-blue-500 transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
        >
          Book now →
        </Link>
        <button
          className="md:hidden text-white p-2 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-cognifica-indigo border-t border-white/10">
          <ul
            className="max-w-5xl mx-auto px-4 py-4 flex flex-col gap-4 list-none"
            role="list"
          >
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block text-white/80 hover:text-white font-nav text-sm uppercase tracking-wider"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/consults"
                className="inline-flex items-center gap-2 bg-cognifica-cta text-white px-5 py-2 text-sm font-bold uppercase tracking-wider"
                onClick={() => setOpen(false)}
              >
                Book now →
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
