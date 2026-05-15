import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import {
  ContactSection,
  Breadcrumbs,
  TrustSignal,
  BreadcrumbSchema,
  HeroBackground,
} from "@/components";

export const metadata: Metadata = {
  title: "About Kronos Group — Meet Our Healthcare Technology Team",
  description:
    "Meet the Kronos Group team. Over 100 years of combined experience in healthcare, revenue cycle management, and digital health. Founded by Dr. John M. Abrahams.",
  alternates: {
    canonical: "https://kronos.health/about",
  },
  openGraph: {
    title: "About Kronos Group — Meet Our Healthcare Technology Team",
    description:
      "Over 100 years of combined experience in healthcare, revenue cycle management, and digital health. Founded by Dr. John M. Abrahams.",
    url: "https://kronos.health/about",
    siteName: "Kronos Group",
    type: "website",
    images: [
      {
        url: "https://kronos.health/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Kronos Group Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Kronos Group — Meet Our Healthcare Technology Team",
    description:
      "Over 100 years of combined experience in healthcare, revenue cycle management, and digital health.",
    images: ["https://kronos.health/opengraph-image"],
  },
};

const breadcrumbItems = [
  { name: "Home", url: "https://kronos.health" },
  { name: "About", url: "https://kronos.health/about" },
];

const founderCredentials = [
  { value: "4,000+", label: "Surgeries\nPerformed" },
  { value: "16", label: "Awarded\nPatents" },
  { value: "30+", label: "Peer-Reviewed\nPublications" },
  { value: "2002", label: "In Practice\nSince" },
];

const teamMembers = [
  {
    name: "Dr. John M. Abrahams",
    title: "Founder & CEO",
    bio: "Board-certified neurosurgeon with over 20 years of clinical experience. Past President of the Brain and Spine Surgeons of New York.",
    image: "/team/dr-john-abrahams.png",
  },
  {
    name: "Juliet Mott",
    title: "Director of Operations",
    bio: "With over 26 years of experience in neurosurgery, Juliet brings a unique blend of clinical insight and operational leadership to her role.",
    image: "/team/juliet-mott.png",
  },
  {
    name: "Heisha Rivera",
    title: "Director of Revenue Cycle",
    bio: "A dynamic healthcare professional with over 20 years of industry experience. Expert in managing staff and overseeing patient billing processes.",
    image: "/team/heisha-rivera.png",
  },
  {
    name: "Camila Nicasio",
    title: "Revenue Cycle Specialist",
    bio: "Revenue Cycle Specialist with a strong foundation in clinical science, specializing in EMR systems and clinical revenue.",
    image: "/team/camila-nicasio.png",
  },
  {
    name: "Soily Rivera",
    title: "Revenue Cycle Specialist",
    bio: "With over 22 years of experience in healthcare, driven by a passion for patient advocacy and clinical innovation.",
    image: "/team/soily-rivera.png",
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "About" }]} />
      </div>

      {/* Hero — matches homepage structure */}
      <section
        className="relative min-h-[70dvh] sm:min-h-[80dvh] bg-kronos-bg overflow-hidden pt-safe-top"
        aria-labelledby="about-hero-heading"
      >
        <HeroBackground type="neural" color="130, 115, 140" />

        <div className="relative z-10 min-h-[70dvh] sm:min-h-[80dvh] flex items-center">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-0">
            <div className="backdrop-blur-md bg-black/40 border border-white/10 p-8 sm:p-10 lg:p-14 max-w-xl">
              <div className="flex flex-col gap-6 sm:gap-8">
                <Image
                  src="/kronos-logo.png"
                  alt="Kronos Group"
                  width={400}
                  height={100}
                  className="w-[200px] sm:w-[260px] lg:w-[320px] h-auto"
                  priority
                />
                <div className="space-y-4 sm:space-y-6">
                  <h1
                    id="about-hero-heading"
                    className="font-heading text-xl sm:text-2xl lg:text-3xl text-white tracking-wider"
                  >
                    Healthcare. Revenue. Innovation.
                  </h1>
                  <p className="font-body text-base sm:text-lg text-white/60 font-light">
                    The parent platform behind six healthcare brands.
                  </p>
                  <p className="font-body text-sm sm:text-base text-white/70 font-light leading-relaxed">
                    Founded by Dr. John M. Abrahams — board-certified neurosurgeon,
                    inventor, and entrepreneur — Kronos Group brings clinical
                    expertise and technology together across revenue cycle
                    management, employer mental health, concussion recovery, and
                    direct patient care.
                  </p>
                  <Link
                    href="#founder"
                    className="inline-flex items-center gap-4 bg-kronos-cyan text-kronos-bg py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs sm:text-sm font-light hover:gap-6 transition-all w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
                  >
                    Meet Our Team
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Abrahams — matches homepage founder section */}
      <section
        id="founder"
        className="py-16 sm:py-20 lg:py-32 bg-kronos-bg border-t border-white/5"
        aria-labelledby="founder-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20">
            <div className="lg:col-span-7">
              <p className="text-xs tracking-widest uppercase text-white/40 mb-4 sm:mb-6">
                The Founder
              </p>
              <h2
                id="founder-heading"
                className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-none mb-6 sm:mb-8"
              >
                Dr. John M.
                <br />
                <span className="text-white/40">Abrahams, M.D.</span>
              </h2>

              <div className="space-y-4 font-body text-sm sm:text-base text-white/60 font-light leading-relaxed">
                <p>
                  Dr. John M. Abrahams is a board-certified neurosurgeon who has
                  been in clinical practice since 2002, performing over 150
                  procedures per year with a focus on anterior cervical and
                  posterior lumbar fusions, and minimally invasive spine surgery.
                </p>
                <p>
                  He serves as President of New York Brain and Spine Surgery
                  and held the role of President of Brain and Spine
                  Surgeons of New York from 2015 to 2023. He is Co-Director of
                  the Spine Section at Northern Westchester Hospital and Founder
                  of the Brain and Spine Research Institute.
                </p>
                <p>
                  Named one of the{" "}
                  <span className="text-white/80">
                    &quot;Top 10 Spine and Orthopedic Surgeon Tech Entrepreneurs
                    to Know&quot;
                  </span>{" "}
                  by Becker&apos;s Spine Review, Dr. Abrahams has channeled his
                  clinical career into building a network of companies that
                  improve outcomes, reduce administrative burden, and advance
                  brain health technology.
                </p>
              </div>

              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/5">
                <p className="text-xs tracking-widest uppercase text-white/40 mb-3">
                  Companies Founded
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {[
                    { label: "ISS Health", href: "https://iss.health" },
                    { label: "Cognifica Health", href: "https://www.cognifica.health" },
                    { label: "CogAI", href: "https://cogai.health" },
                    { label: "Kavera", href: "https://kaverasoft.com" },
                    { label: "Kronos Revenue", href: "https://www.kronosrevenue.health" },
                    { label: "Sydra", href: "https://sydrahealth.com" },
                  ].map((co) => (
                    <a
                      key={co.label}
                      href={co.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 border border-white/10 px-3 py-1.5 text-[10px] sm:text-xs uppercase tracking-widest text-white/50 hover:text-white hover:border-white/30 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan"
                    >
                      {co.label}
                      <ExternalLink
                        className="w-2.5 h-2.5"
                        aria-hidden="true"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {founderCredentials.map((cred) => (
                  <div
                    key={cred.value}
                    className="bg-kronos-card border border-white/5 p-4 sm:p-6 lg:p-8 flex flex-col"
                  >
                    <span className="font-heading text-3xl sm:text-4xl lg:text-5xl text-kronos-cyan leading-none mb-3">
                      {cred.value}
                    </span>
                    <div
                      className="w-8 h-px bg-kronos-cyan/30 mb-3"
                      aria-hidden="true"
                    />
                    <p className="font-body text-[10px] sm:text-xs text-white/40 font-light uppercase tracking-widest whitespace-pre-line leading-relaxed">
                      {cred.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-3 sm:mt-4 bg-kronos-card border border-white/5 p-4 sm:p-6">
                <p className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest mb-2">
                  Hospital Appointments
                </p>
                <ul className="space-y-1.5 font-body text-xs sm:text-sm text-white/60 font-light">
                  <li>Northern Westchester Hospital, Mt. Kisco NY</li>
                  <li>Westchester Medical Center, Valhalla NY</li>
                  <li>White Plains Hospital, White Plains NY</li>
                  <li>New York Presbyterian Hudson Valley</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid — all staff and bios preserved */}
      <section
        className="py-12 sm:py-16 lg:py-24 bg-kronos-gray-800"
        aria-labelledby="team-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8 sm:mb-12 lg:mb-20">
            <p className="text-xs tracking-widest uppercase text-white/50 mb-4">
              Leadership
            </p>
            <h2
              id="team-heading"
              className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white"
            >
              Our Team
            </h2>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
            {teamMembers.slice(0, 2).map((member, i) => (
              <article
                key={member.name}
                className={`${i === 0 ? "lg:col-span-7" : "lg:col-span-5"} p-4 -m-4 hover:bg-white/5 transition-colors`}
              >
                <div className="bg-kronos-card aspect-[4/3] relative overflow-hidden mb-3 sm:mb-4 group">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 58%"
                  />
                </div>
                <h3 className="font-heading text-base sm:text-lg lg:text-xl text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-white/50 mb-2 sm:mb-3">
                  {member.title}
                </p>
                <p className="font-body text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                  {member.bio}
                </p>
              </article>
            ))}

            {teamMembers.slice(2).map((member) => (
              <article
                key={member.name}
                className="lg:col-span-4 p-4 -m-4 hover:bg-white/5 transition-colors"
              >
                <div className="bg-kronos-card aspect-square relative overflow-hidden mb-3 sm:mb-4 group">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33%"
                  />
                </div>
                <h3 className="font-heading text-sm sm:text-base lg:text-lg text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-white/50 mb-2">
                  {member.title}
                </p>
                <p className="font-body text-[10px] sm:text-xs text-white/50 font-light leading-relaxed">
                  {member.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6 sm:py-8 bg-kronos-card border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustSignal
            author="Dr. John M. Abrahams, M.D."
            credentials="Board-Certified Neurosurgeon, President New York Brain and Spine Surgery, Past President BSSNY"
            lastUpdated="2026-03-01"
          />
        </div>
      </section>

      <ContactSection source="about" />
    </>
  );
}
