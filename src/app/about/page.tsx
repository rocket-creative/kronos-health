import type { Metadata } from "next";
import Image from "next/image";
import { 
  ContactSection, 
  Breadcrumbs, 
  TrustSignal,
  BreadcrumbSchema,
  HeroBackground,
} from "@/components";

export const metadata: Metadata = {
  title: "About Kronos Health — Meet Our Healthcare Technology Team",
  description:
    "Meet the Kronos Health team. Over 100 years of combined experience in healthcare, revenue cycle management, and digital health solutions. Founded by Dr. John M. Abrahams.",
  alternates: {
    canonical: "https://kronoshealth.co/about",
  },
  openGraph: {
    title: "About Kronos Health — Meet Our Healthcare Technology Team",
    description: "Over 100 years of combined experience in healthcare, revenue cycle management, and digital health solutions. Founded by Dr. John M. Abrahams.",
    url: "https://kronoshealth.co/about",
    siteName: "Kronos Health",
    type: "website",
    images: [
      {
        url: "https://kronoshealth.co/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Kronos Health Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Kronos Health — Meet Our Healthcare Technology Team",
    description: "Over 100 years of combined experience in healthcare, revenue cycle management, and digital health solutions.",
    images: ["https://kronoshealth.co/opengraph-image"],
  },
};

const breadcrumbItems = [
  { name: "Home", url: "https://kronoshealth.co" },
  { name: "About", url: "https://kronoshealth.co/about" },
];

const teamMembers = [
  {
    name: "Dr. John M. Abrahams",
    title: "Founder & CEO",
    bio: "Board-certified neurosurgeon with over 20 years of clinical experience. Past President of the Brain and Spine Surgeons of New York.",
    image: "/team/dr-john-abrahams.png",
  },
  {
    name: "Susan Morgan",
    title: "Chief Operating Officer",
    bio: "Healthcare operations executive with extensive experience in practice management and strategic growth initiatives.",
    image: "/team/susan-morgan.png",
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
    name: "Nicole Cedeno",
    title: "Revenue Cycle Specialist",
    bio: "Revenue Cycle Professional with over 5 years of experience spanning clinical, administrative, and surgical settings.",
    image: "/team/nicole-cedeno.png",
  },
  {
    name: "Jennifer Scanlon",
    title: "Assistant, Operations",
    bio: "A dedicated professional who thrives on direct interactions with patients, ensuring they feel welcomed and supported.",
    image: "/team/jennifer-scanlon.png",
  },
  {
    name: "Soily Rivera",
    title: "Revenue Cycle Specialist",
    bio: "With over 22 years of experience in healthcare, driven by a passion for patient advocacy and clinical innovation.",
    image: "/team/soily-rivera.png",
  },
  {
    name: "John Cvitkovic",
    title: "Director, Digital Health",
    bio: "Licensed Surgical PA, Physical Therapist, and Certified Pedorthist with over 28 years of experience treating patients.",
    image: "/team/john-cvitkovic.png",
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Breadcrumb Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "About" }]} />
      </div>

      {/* Full-Width Hero with Molecular Animation */}
      <section 
        className="relative min-h-[70vh] sm:min-h-[80vh] bg-kronos-bg overflow-hidden"
        aria-labelledby="about-hero-heading"
      >
        {/* Full-width animated background - DNA Helix */}
        <HeroBackground type="dna" color="0, 255, 209" />

        {/* Glass effect content panel */}
        <div className="relative z-10 min-h-[70vh] sm:min-h-[80vh] flex items-center">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-0">
            <div className="backdrop-blur-md bg-black/40 border border-white/10 p-8 sm:p-10 lg:p-14 max-w-xl">
              <p className="text-xs tracking-widest uppercase text-white/50 mb-4 sm:mb-6">
                Who We Are
              </p>
              
              <h1 
                id="about-hero-heading"
                className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-none tracking-tight mb-6 sm:mb-8"
              >
                About<br />
                <span className="text-white/40">Kronos</span>
              </h1>

              <p className="font-body text-sm sm:text-base text-white/70 font-light leading-relaxed mb-4 sm:mb-6">
                Kronos Health is a forward thinking healthcare solutions provider committed to improving clinical operations, patient outcomes, and provider reimbursement.
              </p>
              
              <p className="font-body text-xs sm:text-sm text-white/50 font-light leading-relaxed">
                Backed by a team with deep experience across medical billing, neuropsychology, digital health, and clinical operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid - Editorial Style */}
      <section 
        className="py-12 sm:py-16 lg:py-24 bg-kronos-bg"
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

          {/* Asymmetric Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
            {/* First two - large */}
            {teamMembers.slice(0, 2).map((member, i) => (
              <article 
                key={member.name} 
                className={`${i === 0 ? 'lg:col-span-7' : 'lg:col-span-5'} p-4 -m-4 hover:bg-white/5 transition-colors`}
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

            {/* Rest - smaller */}
            {teamMembers.slice(2).map((member) => (
              <article key={member.name} className="lg:col-span-4 p-4 -m-4 hover:bg-white/5 transition-colors">
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

      {/* E-E-A-T Trust Signal */}
      <section className="py-6 sm:py-8 bg-kronos-gray-800 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustSignal 
            author="Dr. John M. Abrahams, M.D."
            credentials="Board-Certified Neurosurgeon, Founder & CEO"
            lastUpdated="2026-03-01"
          />
        </div>
      </section>

      <ContactSection source="about" />
    </>
  );
}
