interface OrganizationSchemaProps {
  type?: "Organization" | "LocalBusiness" | "MedicalBusiness";
}

export function OrganizationSchema({ type = "Organization" }: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    "@id": "https://kronos.health/#organization",
    name: "Kronos Group",
    url: "https://kronos.health",
    logo: "https://kronos.health/kronos-logo.png",
    description:
      "B2B healthcare services including revenue cycle management, CogAI mental health platform, and Kavera concussion platform.",
    telephone: "+19147056830",
    email: "info@kronoshealth.co",
    address: {
      "@type": "PostalAddress",
      streetAddress: "244 Westchester Avenue, Suite 209",
      addressLocality: "West Harrison",
      addressRegion: "NY",
      postalCode: "10604",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.0334,
      longitude: -73.7262,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 41.0334,
        longitude: -73.7262,
      },
      geoRadius: "80467",
    },
    sameAs: [
      "https://www.linkedin.com/company/kronos-health",
    ],
    founder: {
      "@type": "Person",
      name: "Dr. John M. Abrahams",
      jobTitle: "Founder & CEO",
      description: "Board-certified neurosurgeon with 20+ years experience. Past President of Brain & Spine Surgeons of New York.",
    },
    foundingDate: "2020",
    knowsAbout: [
      "Revenue Cycle Management",
      "Healthcare Services",
      "Mental Health Screening",
      "Concussion Management",
      "Neuropsychological Assessment",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://kronos.health/#website",
    name: "Kronos Group",
    url: "https://kronos.health",
    description: "Healthcare technology and revenue cycle management solutions",
    publisher: {
      "@type": "Organization",
      "@id": "https://kronos.health/#organization",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed?: string;
}

export function ServiceSchema({ name, description, url, serviceType, areaServed = "United States" }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    description,
    url,
    serviceType,
    areaServed,
    provider: {
      "@id": "https://kronos.health/#organization",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface SoftwareApplicationSchemaProps {
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
  operatingSystem?: string;
}

export function SoftwareApplicationSchema({ 
  name, 
  description, 
  url, 
  applicationCategory,
  operatingSystem = "Web-based"
}: SoftwareApplicationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url,
    applicationCategory,
    operatingSystem,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
    },
    provider: {
      "@type": "Organization",
      name: "Kronos Group",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface MedicalBusinessSchemaProps {
  name: string;
  description: string;
  url: string;
  medicalSpecialty?: string[];
}

export function MedicalBusinessSchema({ 
  name, 
  description, 
  url,
  medicalSpecialty = []
}: MedicalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name,
    description,
    url,
    medicalSpecialty: medicalSpecialty.map(specialty => ({
      "@type": "MedicalSpecialty",
      name: specialty,
    })),
    provider: {
      "@type": "Organization",
      name: "Kronos Group",
      url: "https://kronos.health",
    },
    areaServed: "United States",
    availableService: {
      "@type": "MedicalProcedure",
      name,
      description,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://kronos.health/contact#localbusiness",
    name: "Kronos Group",
    url: "https://kronos.health",
    telephone: "+19147056830",
    email: "info@kronoshealth.co",
    address: {
      "@type": "PostalAddress",
      streetAddress: "244 Westchester Avenue, Suite 209",
      addressLocality: "West Harrison",
      addressRegion: "NY",
      postalCode: "10604",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.0334,
      longitude: -73.7262,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    parentOrganization: {
      "@id": "https://kronos.health/#organization",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: { name: string; url: string }[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQSchemaProps {
  questions: { question: string; answer: string }[];
}

export function FAQSchema({ questions }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ProductSchemaProps {
  name: string;
  description: string;
  url: string;
}

export function ProductSchema({ name, description, url }: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url,
    brand: {
      "@type": "Organization",
      name: "Kronos Group",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      seller: {
        "@type": "Organization",
        name: "Kronos Group",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
