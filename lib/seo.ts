import type { Metadata } from "next"

const BASE_URL = "https://routetorecall.com"
const SITE_NAME = "Route to Recall"

interface PageSEOProps {
  title: string
  description: string
  path: string
  keywords?: string[]
  image?: string
  type?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
}

/**
 * Generate comprehensive metadata for a page
 */
export function generatePageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = "/og-image.jpg",
  type = "website",
  publishedTime,
  modifiedTime,
}: PageSEOProps): Metadata {
  const url = `${BASE_URL}${path}`
  const fullImageUrl = image.startsWith("http") ? image : `${BASE_URL}${image}`

  return {
    title,
    description,
    keywords,
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      type,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - ${SITE_NAME}`,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [fullImageUrl],
    },
    alternates: {
      canonical: url,
    },
  }
}

/**
 * Generate breadcrumb items for JSON-LD
 */
export function generateBreadcrumbItems(
  items: { label: string; path: string }[]
): { name: string; url: string }[] {
  return items.map((item) => ({
    name: item.label,
    url: `${BASE_URL}${item.path}`,
  }))
}

/**
 * Generate destination keywords
 */
export function generateDestinationKeywords(destinationName: string, tags: string[]): string[] {
  const baseKeywords = [
    `${destinationName} tour packages`,
    `${destinationName} travel`,
    `visit ${destinationName}`,
    `${destinationName} holiday packages`,
    `${destinationName} vacation`,
    `best ${destinationName} tours`,
    `${destinationName} trip from India`,
    `${destinationName} honeymoon packages`,
    `${destinationName} family tour`,
  ]

  const tagKeywords = tags.map((tag) => `${destinationName} ${tag.toLowerCase()}`)

  return [...baseKeywords, ...tagKeywords]
}

/**
 * Clean and truncate text for meta description (max 160 chars)
 */
export function generateMetaDescription(text: string, maxLength = 155): string {
  const cleaned = text.replace(/\s+/g, " ").trim()
  if (cleaned.length <= maxLength) return cleaned
  return `${cleaned.substring(0, maxLength - 3)}...`
}

/**
 * Generate organization schema
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": `${BASE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: "Route to Recall Private Limited",
    description:
      "Crafting extraordinary travel experiences across Thailand, Singapore, Malaysia, Maldives, Bali, Sri Lanka, Nepal, Dubai & Cambodia.",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/logo-black.png`,
      width: 512,
      height: 512,
    },
    image: `${BASE_URL}/og-image.jpg`,
    telephone: "+91-6363331334",
    email: "enquiries@routetorecall.com",
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
  }
}

/**
 * Generate website schema
 */
export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: SITE_NAME,
    url: BASE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/destinations?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }
}
