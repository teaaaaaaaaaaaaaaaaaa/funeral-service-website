export function buildSchema(contact, location) {
  const restaurant = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": "https://www.restoran-sedef.rs/#restaurant",
    "name": "Restoran Sedef",
    "alternateName": "Sedef - Mesto sećanja i mira",
    "description": "Restoran specijalizovan za organizaciju parastosa i pomen trpeza, smešten pored groblja Orlovača u Beogradu. Kapacitet 80 mesta, sopstvena kuhinja, posni i mrsni meni.",
    "servesCuisine": "Serbian",
    "priceRange": "$$",
    "currenciesAccepted": "RSD",
    "paymentAccepted": "Cash",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": location?.address || "Groblje Orlovača 28",
      "addressLocality": "Beograd",
      "addressRegion": "Rakovica",
      "postalCode": "11090",
      "addressCountry": "RS"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.76,
      "longitude": 20.45
    },
    "telephone": contact?.phone || "",
    "email": contact?.email || "",
    "url": "https://www.restoran-sedef.rs",
    "image": [
      "https://www.restoran-sedef.rs/images/exterior-01.jpg",
      "https://www.restoran-sedef.rs/images/exterior-02.jpg"
    ],
    "logo": "https://www.restoran-sedef.rs/images/logo.png",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "07:00",
        "closes": "20:00"
      }
    ],
    "hasMap": location?.mapDirectionsUrl || "",
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Parking", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Direktan ulaz", "value": true }
    ],
    "areaServed": {
      "@type": "City",
      "name": "Beograd"
    },
    "hasMenu": {
      "@type": "Menu",
      "name": "Meni za parastose",
      "description": "Posni i mrsni meni za pomen trpeze",
      "hasMenuSection": [
        {
          "@type": "MenuSection",
          "name": "Mrsni meni",
          "description": "Kompletna mrsna trpeza za parastose"
        },
        {
          "@type": "MenuSection",
          "name": "Posni meni",
          "description": "Kompletna posna trpeza za parastose"
        }
      ]
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Koliki je kapacitet restorana?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Restoran Sedef ima kapacitet od 80 mesta. Za grupe veće od 80 osoba, molimo Vas da nas kontaktirate telefonom kako bismo pronašli odgovarajuće rešenje."
        }
      },
      {
        "@type": "Question",
        "name": "Da li je potrebna rezervacija?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Da, preporučujemo rezervaciju unapred. Možete nas pozvati na telefon svakog dana od 07 do 23 sata."
        }
      },
      {
        "@type": "Question",
        "name": "Koje je radno vreme restorana?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Restoran je otvoren svakog dana od 07 do 20 sati. Rezervacije i dogovori su mogući telefonom od 07 do 23 sata."
        }
      },
      {
        "@type": "Question",
        "name": "Da li postoji parking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Da, restoran raspolaže parking mestima. Ulaz i parking su dostupni direktno pored restorana."
        }
      },
      {
        "@type": "Question",
        "name": "Da li organizujete i druge događaje osim parastosa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pored parastosa, restoran je otvoren i za svakodnevne goste – kafa, piće i obroci. Za druge privatne svečanosti molimo Vas da nas kontaktirate telefonom."
        }
      }
    ]
  }

  return [restaurant, faqSchema]
}
