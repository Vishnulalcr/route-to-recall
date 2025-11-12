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

export default function DestinationPage({ params }: DestinationPageProps) {
  const destination = getDestinationBySlug(params.slug)

  if (!destination) {
    notFound()
  }

  return (
    <>
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
    { slug: "malaysia" },
    { slug: "vietnam" },
    { slug: "dubai" },
    { slug: "bali" },
    { slug: "maldives" },
  ]
}
