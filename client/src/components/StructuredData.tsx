interface StructuredDataProps {
  cityName?: string;
}

export function StructuredData({ cityName }: StructuredDataProps) {
  const baseData = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "name": "Loodgieter Services",
    "description": cityName 
      ? `Professionele loodgietersservice in ${cityName} en omgeving. Riool ontstoppen, WC ontstoppen, gootsteen ontstoppen. 24/7 beschikbaar.`
      : "Professionele loodgietersservice in Nederland. Riool ontstoppen, WC ontstoppen, gootsteen ontstoppen. 24/7 beschikbaar.",
    "url": "https://loodgieter-services.nl",
    "telephone": "+31000000000",
    "email": "info@loodgieter-services.nl",
    "areaServed": cityName ? [cityName] : ["Amsterdam", "Rotterdam", "Leiden", "Zoetermeer"],
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Loodgietersdiensten",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Riool Ontstoppen"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "WC Ontstoppen"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gootsteen Ontstoppen"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Rioolservice"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "200"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(baseData) }}
    />
  );
}
