import type { Metadata } from "next"
import AboutContent from "@/components/about-content"

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet the team behind Route to Recall. Learn our story - from suits to sandals, how Ajisha Rajan and Vinayak Lal turned their passion for travel into an experiential travel company.",
  openGraph: {
    title: "About Us | Route to Recall",
    description: "Meet the team behind Route to Recall and learn our story of creating unforgettable travel experiences.",
  },
  alternates: {
    canonical: "https://routetorecall.com/about",
  },
}

export default function AboutPage() {
  return <AboutContent />
}
