"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-kronos-cyan focus:text-kronos-bg focus:px-4 focus:py-2 focus:text-sm focus:font-bold"
    >
      Skip to main content
    </a>
  );
}

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`py-4 ${className}`}
    >
      <ol className="flex items-center gap-2 text-xs text-white/40">
        <li>
          <Link 
            href="/" 
            className="hover:text-white transition-colors flex items-center gap-1"
            aria-label="Home"
          >
            <Home className="w-3 h-3" aria-hidden="true" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.name} className="flex items-center gap-2">
            <ChevronRight className="w-3 h-3" aria-hidden="true" />
            {item.href && index < items.length - 1 ? (
              <Link 
                href={item.href} 
                className="hover:text-white transition-colors uppercase tracking-widest"
              >
                {item.name}
              </Link>
            ) : (
              <span 
                className="text-white/60 uppercase tracking-widest" 
                aria-current="page"
              >
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  level?: 1 | 2 | 3;
  className?: string;
  dark?: boolean;
}

export function SectionHeading({ 
  eyebrow, 
  title, 
  description, 
  level = 2,
  className = "",
  dark = false
}: SectionHeadingProps) {
  const headingClasses = `font-heading text-3xl sm:text-4xl lg:text-5xl ${dark ? 'text-white' : 'text-kronos-text-dark'}`;
  
  return (
    <header className={`mb-12 lg:mb-16 ${className}`}>
      {eyebrow && (
        <p className={`text-xs tracking-widest uppercase mb-4 ${dark ? 'text-white/40' : 'text-kronos-gray-500'}`}>
          {eyebrow}
        </p>
      )}
      {level === 1 && <h1 className={headingClasses}>{title}</h1>}
      {level === 2 && <h2 className={headingClasses}>{title}</h2>}
      {level === 3 && <h3 className={headingClasses}>{title}</h3>}
      {description && (
        <p className={`font-body text-sm font-light max-w-2xl mt-4 ${dark ? 'text-white/50' : 'text-kronos-gray-600'}`}>
          {description}
        </p>
      )}
    </header>
  );
}

interface TrustSignalProps {
  author?: string;
  credentials?: string;
  lastUpdated?: string;
  reviewedBy?: string;
  className?: string;
}

export function TrustSignal({ 
  author, 
  credentials, 
  lastUpdated, 
  reviewedBy,
  className = ""
}: TrustSignalProps) {
  return (
    <aside 
      className={`bg-kronos-card/50 border border-white/5 p-4 text-xs ${className}`}
      aria-label="Content trust signals"
    >
      <div className="flex flex-wrap gap-4 text-white/40">
        {author && (
          <div>
            <span className="text-white/60">Author:</span>{" "}
            <span className="text-white/80">{author}</span>
            {credentials && <span className="text-kronos-cyan">, {credentials}</span>}
          </div>
        )}
        {reviewedBy && (
          <div>
            <span className="text-white/60">Reviewed by:</span>{" "}
            <span className="text-white/80">{reviewedBy}</span>
          </div>
        )}
        {lastUpdated && (
          <div>
            <span className="text-white/60">Last updated:</span>{" "}
            <time dateTime={lastUpdated} className="text-white/80">
              {new Date(lastUpdated).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </time>
          </div>
        )}
      </div>
    </aside>
  );
}
