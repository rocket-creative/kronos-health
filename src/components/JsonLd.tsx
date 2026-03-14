interface OrganizationSchemaProps {
  type?: "Organization" | "LocalBusiness" | "MedicalBusiness";
}

export function OrganizationSchema({ type = "Organization" }: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    name: "Kronos Health",
    url: "https://kronoshealth.co",
    logo: "https://kronoshealth.co/kronos-logo.png",
    description:
      "B2B healthcare services including revenue cycle management, out-of-network billing, CognificaAI workplace mental health platform, and Synaptix concussion software.",
    telephone: "+1-914-705-6830",
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
      "Healthcare Billing",
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
    name: "Kronos Health",
    url: "https://kronoshealth.co",
    description: "Healthcare technology and revenue cycle management solutions",
    publisher: {
      "@type": "Organization",
      name: "Kronos Health",
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
    name,
    description,
    url,
    serviceType,
    areaServed,
    provider: {
      "@type": "Organization",
      name: "Kronos Health",
      url: "https://kronoshealth.co",
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
      name: "Kronos Health",
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
      name: "Kronos Health",
      url: "https://kronoshealth.co",
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
      name: "Kronos Health",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      seller: {
        "@type": "Organization",
        name: "Kronos Health",
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
