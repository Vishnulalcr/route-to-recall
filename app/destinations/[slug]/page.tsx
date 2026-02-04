import { notFound } from "next/navigation"
import { getDestinationBySlug } from "@/lib/destinations-data"
import DestinationHero from "@/components/destination/destination-hero"
import DestinationOverview from "@/components/destination/destination-overview"
import DestinationHighlights from "@/components/destination/destination-highlights"
import DestinationPackages from "@/components/destination/destination-packages"
import DestinationCta from "@/components/destination/destination-cta"
import BentoNavigation from "@/components/bento-navigation"
import BentoFooter from "@/components/bento-footer"
import { BreadcrumbJsonLd, TouristDestinationJsonLd, TourPackageJsonLd } from "@/components/json-ld"
import type { Metadata } from "next"

interface DestinationPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: DestinationPageProps): Promise<Metadata> {
  const destination = getDestinationBySlug(params.slug)

  if (!destination) {
    return {
      title: "Destination Not Found",
    }
  }

  const keywords = [
    `${destination.name} tour packages`,
    `${destination.name} travel`,
    `visit ${destination.name}`,
    `${destination.name} holiday packages`,
    `${destination.name} vacation`,
    `best ${destination.name} tours`,
    `${destination.name} trip from India`,
    ...destination.tags.map(tag => `${destination.name} ${tag.toLowerCase()}`),
  ]

  return {
    title: `${destination.name} Tour Packages - Best Deals & Itineraries`,
    description: `Explore ${destination.name} with Route to Recall. ${destination.description}. Customized tour packages starting from ${destination.packages[0]?.price || 'affordable prices'}. Best time to visit: ${destination.bestTimeToVisit}. Book your ${destination.name} adventure today!`,
    keywords,
    openGraph: {
      title: `${destination.name} Tour Packages | Route to Recall`,
      description: `Discover ${destination.name} with customized tour packages. ${destination.description}`,
      url: `https://routetorecall.com/destinations/${destination.slug}`,
      type: "website",
      images: [
        {
          url: destination.heroImage || destination.image,
          width: 1200,
          height: 630,
          alt: `${destination.name} - Route to Recall Tour Packages`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${destination.name} Tour Packages | Route to Recall`,
      description: `Discover ${destination.name} with customized tour packages. ${destination.description}`,
      images: [destination.heroImage || destination.image],
    },
    alternates: {
      canonical: `https://routetorecall.com/destinations/${destination.slug}`,
    },
  }
}

export default function DestinationPage({ params }: DestinationPageProps) {
  const destination = getDestinationBySlug(params.slug)

  if (!destination) {
    notFound()
  }

  const breadcrumbItems = [
    { name: "Home", url: "https://routetorecall.com" },
    { name: "Destinations", url: "https://routetorecall.com/destinations" },
    { name: destination.name, url: `https://routetorecall.com/destinations/${destination.slug}` },
  ]

  const attractions = destination.highlights.map((highlight) => ({
    name: highlight.title,
    description: highlight.description,
  }))

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <TouristDestinationJsonLd
        name={destination.name}
        description={destination.longDescription || destination.description}
        image={destination.heroImage || destination.image}
        url={`https://routetorecall.com/destinations/${destination.slug}`}
        latitude={destination.mapCoordinates?.lat}
        longitude={destination.mapCoordinates?.lng}
        touristTypes={destination.tags}
        attractions={attractions}
      />
      {destination.packages[0] && (
        <TourPackageJsonLd
          name={`${destination.name} ${destination.packages[0].title}`}
          description={destination.packages[0].description}
          destination={destination.name}
          price={parseInt(destination.packages[0].price.replace(/[^0-9]/g, "")) || 0}
          currency="INR"
          duration={destination.packages[0].duration}
          image={destination.packages[0].image}
          url={`https://routetorecall.com/destinations/${destination.slug}`}
        />
      )}
      <BentoNavigation />
      <main key={params.slug} className="bg-white text-[#1C1C1C] min-h-screen">
        <DestinationHero destination={destination} />
        <DestinationOverview destination={destination} />
        <DestinationHighlights destination={destination} />
        <DestinationPackages destination={destination} />
        <DestinationCta destination={destination} />
      </main>
      <BentoFooter />
    </>
  )
}

export async function generateStaticParams() {
  return [
    { slug: "thailand" },
    { slug: "singapore" },
    { slug: "malaysia" },
    { slug: "maldives" },
    { slug: "bali" },
    { slug: "sri-lanka" },
    { slug: "nepal" },
    { slug: "dubai" },
    { slug: "vietnam" },
    { slug: "cambodia" },
  ]
}
