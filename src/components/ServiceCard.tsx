import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  accentColor: "cyan" | "lavender";
}

const accentColors = {
  cyan: "bg-kronos-cyan/20 border-kronos-cyan/30 text-kronos-cyan",
  lavender: "bg-kronos-lavender/20 border-kronos-lavender/30 text-kronos-lavender",
};

const hoverColors = {
  cyan: "group-hover:border-kronos-cyan",
  lavender: "group-hover:border-kronos-lavender",
};

export default function ServiceCard({
  title,
  description,
  href,
  icon: Icon,
  accentColor,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={`group block bg-kronos-card border border-white/10 rounded-xl p-6 lg:p-8 transition-all hover:border-white/20 ${hoverColors[accentColor]}`}
    >
      <div
        className={`w-14 h-14 rounded-lg ${accentColors[accentColor]} border flex items-center justify-center mb-6`}
      >
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="font-heading text-xl lg:text-2xl text-white mb-3">
        {title}
      </h3>
      <p className="font-body text-white/60 text-sm lg:text-base leading-relaxed mb-4">
        {description}
      </p>
      <span className="inline-flex items-center gap-2 text-kronos-cyan font-body text-sm font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
        Learn More
        <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  );
}
