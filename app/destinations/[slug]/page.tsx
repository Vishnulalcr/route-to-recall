import { notFound } from "next/navigation"
import { getDestinationBySlug } from "@/lib/destinations-data"
import DestinationHero from "@/components/destination/destination-hero"
import DestinationOverview from "@/components/destination/destination-overview"
import DestinationHighlights from "@/components/destination/destination-highlights"
import DestinationPackages from "@/components/destination/destination-packages"
import DestinationCta from "@/components/destination/destination-cta"
import BentoNavigation from "@/components/bento-navigation"
import BentoFooter from "@/components/bento-footer"
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

  return {
    title: `${destination.name} | Route to Recall`,
    description: destination.description,
  }
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = await params
  const destination = getDestinationBySlug(slug)

  if (!destination) {
    notFound()
  }

  return (
    <>
      <BentoNavigation />
      <main
        key={slug}
        className="bg-white text-[#1C1C1C] min-h-screen"
        role="main"
        aria-label={`${destination.name} destination details`}
      >
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
  ]
}
