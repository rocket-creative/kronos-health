import { MapPin, Phone, Mail } from "lucide-react";
import ContactForm from "./ContactForm";

interface ContactSectionProps {
  source?: string;
}

export default function ContactSection({ source = "page" }: ContactSectionProps) {
  return (
    <section 
      className="py-12 sm:py-16 lg:py-24 bg-kronos-bg"
      aria-labelledby="contact-section-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 
            id="contact-section-heading"
            className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white mb-3 sm:mb-4"
          >
            Let&apos;s Discuss Your Objectives
          </h2>
          <p className="font-body text-xs sm:text-sm lg:text-base text-white/60 max-w-xl mx-auto">
            Get in touch to learn how Kronos Health can help your practice thrive.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          <div>
            <ContactForm source={source} />
          </div>

          <div className="bg-white/5 p-4 sm:p-6 lg:p-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4 p-3 -m-3 hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-kronos-cyan/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-kronos-cyan" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-body font-bold text-white text-sm sm:text-base mb-1">Address</h3>
                  <address className="font-body text-xs sm:text-sm text-white/60 not-italic">
                    244 Westchester Ave, Ste 209
                    <br />
                    West Harrison, NY 10604
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 -m-3 hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-kronos-cyan/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-kronos-cyan" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-body font-bold text-white text-sm sm:text-base mb-1">Phone</h3>
                  <a
                    href="tel:+19147056830"
                    className="font-body text-xs sm:text-sm text-white/60 hover:text-kronos-cyan transition-colors focus:outline-none focus:text-kronos-cyan"
                    aria-label="Call us at (914) 705 6830"
                  >
                    (914) 705 6830
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 -m-3 hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-kronos-cyan/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-kronos-cyan" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-body font-bold text-white text-sm sm:text-base mb-1">Email</h3>
                  <a
                    href="mailto:info@kronoshealth.co"
                    className="font-body text-xs sm:text-sm text-white/60 hover:text-kronos-cyan transition-colors focus:outline-none focus:text-kronos-cyan"
                    aria-label="Email us at info@kronoshealth.co"
                  >
                    info@kronoshealth.co
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
