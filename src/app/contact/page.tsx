import type { Metadata } from "next";
import { 
  ContactSection, 
  Breadcrumbs,
  BreadcrumbSchema,
  LocalBusinessSchema,
  HeroBackground,
} from "@/components";
import { Phone, MapPin, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Kronos Group — Revenue Cycle, Cognifica App, Synaptix Inquiries",
  description:
    "Contact Kronos Group for revenue cycle management, Cognifica App demos, Synaptix demos, or general inquiries. Located in West Harrison, NY. Reach out today.",
  alternates: {
    canonical: "https://kronoshealth.co/contact",
  },
  openGraph: {
    title: "Contact Kronos Group — Revenue Cycle, Cognifica App, Synaptix Inquiries",
    description: "Contact Kronos Group for revenue cycle management, Cognifica App demos, Synaptix demos, or general inquiries. Located in West Harrison, NY.",
    url: "https://kronoshealth.co/contact",
    siteName: "Kronos Group",
    type: "website",
    images: [
      {
        url: "https://kronoshealth.co/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Contact Kronos Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Kronos Group — Revenue Cycle, Cognifica App, Synaptix Inquiries",
    description: "Contact Kronos Group for revenue cycle management, Cognifica App demos, Synaptix demos, or general inquiries.",
    images: ["https://kronoshealth.co/opengraph-image"],
  },
};

const breadcrumbItems = [
  { name: "Home", url: "https://kronoshealth.co" },
  { name: "Contact", url: "https://kronoshealth.co/contact" },
];

export default function ContactPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Breadcrumb Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Contact" }]} />
      </div>

      {/* Full-Width Hero with Envelope Animation */}
      <section 
        className="relative min-h-[70dvh] sm:min-h-[80dvh] bg-kronos-bg overflow-hidden pt-safe-top"
        aria-labelledby="contact-hero-heading"
      >
        {/* Full-width animated background */}
        <HeroBackground type="envelope" color="0, 255, 209" />

        {/* Glass effect content panel */}
        <div className="relative z-10 min-h-[70dvh] sm:min-h-[80dvh] flex items-center">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-0">
            <div className="backdrop-blur-md bg-black/40 border border-white/10 p-8 sm:p-10 lg:p-14 max-w-xl">
              <p className="text-xs tracking-widest uppercase text-white/50 mb-4 sm:mb-6">
                Get In Touch
              </p>
              
              <h1 
                id="contact-hero-heading"
                className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-none tracking-tight mb-6 sm:mb-8"
              >
                Contact<br />
                <span className="text-white/40">Us</span>
              </h1>

              <p className="font-body text-sm sm:text-base text-white/70 font-light leading-relaxed mb-8 sm:mb-10">
                Ready to optimize your practice? Have questions about our services? Reach out today.
              </p>

              {/* Contact Info */}
              <address className="space-y-4 sm:space-y-5 not-italic">
                <a 
                  href="tel:+19147056830" 
                  className="flex items-center gap-4 text-white/70 hover:text-kronos-cyan transition-colors group focus:outline-none focus:text-kronos-cyan"
                  aria-label="Call us at (914) 705 6830"
                >
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center group-hover:bg-kronos-cyan/20 group-focus:bg-kronos-cyan/20 transition-colors">
                    <Phone className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <span className="font-body text-sm">(914) 705 6830</span>
                </a>
                
                <a 
                  href="mailto:info@kronoshealth.co" 
                  className="flex items-center gap-4 text-white/70 hover:text-kronos-cyan transition-colors group focus:outline-none focus:text-kronos-cyan"
                  aria-label="Email us at info@kronoshealth.co"
                >
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center group-hover:bg-kronos-cyan/20 group-focus:bg-kronos-cyan/20 transition-colors">
                    <Mail className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <span className="font-body text-sm">info@kronoshealth.co</span>
                </a>
                
                <div className="flex items-center gap-4 text-white/70">
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <span className="font-body text-sm">
                    244 Westchester Ave, Ste 209<br />
                    West Harrison, NY 10604
                  </span>
                </div>
              </address>
            </div>
          </div>
        </div>
      </section>

      <ContactSection source="contact_page" />
    </>
  );
}
