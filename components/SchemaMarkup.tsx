import { business } from "@/lib/config";

interface Props {
  pageType?: "home" | "repair" | "springs" | "openers" | "installation" | "contact";
  faqs?: { q: string; a: string }[];
}

export default function SchemaMarkup({ pageType = "home", faqs }: Props) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://${business.website}`,
    name: business.name,
    url: `https://${business.website}`,
    telephone: business.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Roslyn",
      addressRegion: "NY",
      postalCode: "11576",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.7982,
      longitude: -73.6479,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: business.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      reviewCount: "47",
    },
    priceRange: "$$",
  };

  const serviceMap: Record<string, object> = {
    repair: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Garage Door Repair",
      provider: { "@type": "LocalBusiness", name: business.name },
      areaServed: "Roslyn, NY",
      description: "Same-day garage door repair including broken springs, off-track doors, cable failure, and more.",
    },
    springs: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Garage Door Spring Replacement",
      provider: { "@type": "LocalBusiness", name: business.name },
      areaServed: "Roslyn, NY",
      description: "Torsion and extension spring replacement for all garage door types in Roslyn NY.",
    },
    openers: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Garage Door Opener Repair & Installation",
      provider: { "@type": "LocalBusiness", name: business.name },
      areaServed: "Roslyn, NY",
      description: "LiftMaster, Genie, Chamberlain opener repair and installation with MyQ and battery backup.",
    },
    installation: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "New Garage Door Installation",
      provider: { "@type": "LocalBusiness", name: business.name },
      areaServed: "Roslyn, NY",
      description: "New garage door installation including carriage house, insulated steel, custom and estate doors.",
    },
  };

  const faqSchema = faqs && faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      {serviceMap[pageType] && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceMap[pageType]) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
