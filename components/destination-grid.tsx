"use client"
import Link from "next/link"
import DestinationCard from "./destination-card"
import { getAllDestinations } from "@/lib/destinations-data"

export default function DestinationGrid() {
  const destinations = getAllDestinations()

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/destinations"
            className="inline-block px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            View All Destinations
          </Link>
        </div>
      </div>
    </section>
  )
}
