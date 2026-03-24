export function buildSchema(business, faqItems) {
  const funeralHome = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.pogrebno-antic.rs/#business",
    "name": "Pogrebno preduzeće Antić",
    "description": "Kompletne pogrebne usluge u Beogradu 24h/7. Organizacija sahrane i kremacije, prevoz pokojnika, pogrebna oprema, administracija.",
    "url": "https://www.pogrebno-antic.rs",
    "telephone": business?.phone || "+381601234567",
    "email": business?.email || "info@pogrebno-antic.rs",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Beograd",
      "addressCountry": "RS"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "areaServed": {
      "@type": "City",
      "name": "Beograd"
    },
    "priceRange": "$$",
    "currenciesAccepted": "RSD"
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": (faqItems || []).map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }

  return [funeralHome, faqSchema]
}
