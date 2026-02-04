export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Route to Recall",
    description:
      "Crafting extraordinary travel experiences across Thailand, Singapore, Malaysia, Maldives, Bali, Sri Lanka, Nepal, Dubai & Cambodia.",
    url: "https://routetorecall.com",
    logo: "https://routetorecall.com/logo-black.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9876543210",
      contactType: "customer service",
      email: "hello@routetorecall.com",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Hindi"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "India",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.instagram.com/routetorecall",
      "https://www.facebook.com/routetorecall",
      "https://twitter.com/routetorecall",
    ],
    priceRange: "$$",
    openingHours: "Mo-Sa 09:00-18:00",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function WebsiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Route to Recall",
    url: "https://routetorecall.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://routetorecall.com/destinations?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

interface TourPackageJsonLdProps {
  name: string
  description: string
  destination: string
  price: number
  currency?: string
  duration: string
  image?: string
  url: string
}

export function TourPackageJsonLd({
  name,
  description,
  destination,
  price,
  currency = "INR",
  duration,
  image,
  url,
}: TourPackageJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name,
    description,
    touristType: "Leisure travelers",
    itinerary: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: destination,
        },
      ],
    },
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: currency,
      availability: "https://schema.org/InStock",
      url,
    },
    duration,
    image: image || "https://routetorecall.com/og-image.jpg",
    provider: {
      "@type": "TravelAgency",
      name: "Route to Recall",
      url: "https://routetorecall.com",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

interface BreadcrumbJsonLdProps {
  items: { name: string; url: string }[]
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

interface FAQJsonLdProps {
  faqs: { question: string; answer: string }[]
}

export function FAQJsonLd({ faqs }: FAQJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
