export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": "https://routetorecall.com/#organization",
    name: "Route to Recall",
    alternateName: "Route to Recall Private Limited",
    description:
      "Crafting extraordinary travel experiences across Thailand, Singapore, Malaysia, Maldives, Bali, Sri Lanka, Nepal, Dubai & Cambodia. Curated journeys that turn into unforgettable stories.",
    url: "https://routetorecall.com",
    logo: {
      "@type": "ImageObject",
      url: "https://routetorecall.com/logo-black.png",
      width: 512,
      height: 512,
    },
    image: "https://routetorecall.com/og-image.jpg",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-6363331334",
        contactType: "customer service",
        email: "enquiries@routetorecall.com",
        areaServed: "Worldwide",
        availableLanguage: ["English", "Hindi", "Malayalam"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-6363331334",
        contactType: "sales",
        email: "enquiries@routetorecall.com",
        areaServed: ["IN", "US", "GB", "AE", "SG"],
        availableLanguage: ["English", "Hindi"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "#50, Green Valley Orchid, Udayamperoor",
      addressLocality: "Ernakulam",
      addressRegion: "Kerala",
      postalCode: "682307",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "9.9312",
      longitude: "76.2673",
    },
    sameAs: [
      "https://www.instagram.com/routetorecall",
      "https://www.facebook.com/routetorecall",
      "https://twitter.com/routetorecall",
      "https://www.linkedin.com/company/routetorecall",
    ],
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    founder: [
      {
        "@type": "Person",
        name: "Vinayak Lal",
        jobTitle: "Founder & CEO",
      },
      {
        "@type": "Person",
        name: "Ajisha Rajan",
        jobTitle: "Co-Founder",
      },
    ],
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "9.9312",
        longitude: "76.2673",
      },
      geoRadius: "50000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Travel Packages",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "International Tour Packages",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Thailand Tour Packages" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Singapore Tour Packages" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Malaysia Tour Packages" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Maldives Tour Packages" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bali Tour Packages" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dubai Tour Packages" } },
          ],
        },
      ],
    },
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

interface TouristDestinationJsonLdProps {
  name: string
  description: string
  image: string
  url: string
  latitude?: number
  longitude?: number
  touristTypes?: string[]
  attractions?: { name: string; description: string }[]
}

export function TouristDestinationJsonLd({
  name,
  description,
  image,
  url,
  latitude,
  longitude,
  touristTypes = ["Family", "Couples", "Adventure seekers"],
  attractions = [],
}: TouristDestinationJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name,
    description,
    image,
    url,
    ...(latitude && longitude && {
      geo: {
        "@type": "GeoCoordinates",
        latitude,
        longitude,
      },
    }),
    touristType: touristTypes,
    ...(attractions.length > 0 && {
      includesAttraction: attractions.map((attraction) => ({
        "@type": "TouristAttraction",
        name: attraction.name,
        description: attraction.description,
      })),
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

interface LocalBusinessJsonLdProps {
  pagePath?: string
}

export function LocalBusinessJsonLd({ pagePath = "" }: LocalBusinessJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://routetorecall.com/#localbusiness",
    name: "Route to Recall",
    image: "https://routetorecall.com/logo-black.png",
    url: `https://routetorecall.com${pagePath}`,
    telephone: "+91-6363331334",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "#50, Green Valley Orchid, Udayamperoor",
      addressLocality: "Ernakulam",
      addressRegion: "Kerala",
      postalCode: "682307",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 9.9312,
      longitude: 76.2673,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

interface ReviewAggregateJsonLdProps {
  ratingValue: number
  reviewCount: number
  reviews?: {
    author: string
    datePublished: string
    reviewBody: string
    ratingValue: number
  }[]
}

export function ReviewAggregateJsonLd({
  ratingValue = 4.8,
  reviewCount = 150,
  reviews = [],
}: ReviewAggregateJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Route to Recall",
    url: "https://routetorecall.com",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    ...(reviews.length > 0 && {
      review: reviews.map((review) => ({
        "@type": "Review",
        author: {
          "@type": "Person",
          name: review.author,
        },
        datePublished: review.datePublished,
        reviewBody: review.reviewBody,
        reviewRating: {
          "@type": "Rating",
          ratingValue: review.ratingValue,
          bestRating: 5,
          worstRating: 1,
        },
      })),
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
