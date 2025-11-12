import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { getAllDestinations } from "@/lib/destinations-data"
import type { Metadata } from "next"
import BentoNavigation from "@/components/bento-navigation"
import BentoFooter from "@/components/bento-footer"

export const metadata: Metadata = {
  title: "Destinations | Route to Recall",
  description: "Explore our handpicked destinations for your next unforgettable journey.",
}

export default function DestinationsPage() {
  const destinations = getAllDestinations()

  return (
    <main className="bg-white text-[#1C1C1C] min-h-screen">
      <BentoNavigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2070&auto=format&fit=crop"
            alt="World destinations"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-lg">Destinations</h1>
            <p className="text-xl text-white/90 mb-8 drop-shadow-md max-w-2xl">
              Explore our handpicked destinations for your next unforgettable journey.
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Link key={destination.id} href={`/destinations/${destination.slug}`} className="group">
                <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white h-full">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/90 via-[#1C1C1C]/60 to-transparent" />

                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <div className="mb-2">
                        <span
                          className="inline-block px-3 py-1 text-xs font-medium rounded-full text-white"
                          style={{ backgroundColor: destination.color }}
                        >
                          {destination.location}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{destination.name}</h3>
                      <p className="text-white/90 mb-6">{destination.description}</p>

                      <div className="flex items-center text-white group">
                        <span className="mr-2 group-hover:text-[#39FF14] transition-colors">Explore destination</span>
                        <ArrowRight className="h-4 w-4 text-[#39FF14]" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BentoFooter />
    </main>
  )
}
