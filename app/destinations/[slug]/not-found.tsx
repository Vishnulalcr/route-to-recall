import Link from "next/link"
import BentoNavigation from "@/components/bento-navigation"
import BentoFooter from "@/components/bento-footer"

export default function NotFound() {
  return (
    <>
      <BentoNavigation />
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-medium mb-6">Destination Not Found</h2>
        <p className="text-gray-600 mb-8 text-center max-w-md">
          We couldn't find the destination you're looking for. It might have been removed or doesn't exist.
        </p>
        <Link
          href="/destinations"
          className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
        >
          Browse All Destinations
        </Link>
      </div>
      <BentoFooter />
    </>
  )
}
