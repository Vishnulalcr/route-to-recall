import type { Metadata } from "next"
import TermsContent from "@/components/terms-content"

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Read the terms of use for Route to Recall travel services. Understand your rights and responsibilities when using our website and booking travel packages.",
  openGraph: {
    title: "Terms of Use | Route to Recall",
    description: "Read the terms of use for Route to Recall travel services.",
  },
  alternates: {
    canonical: "https://routetorecall.com/terms",
  },
}

export default function TermsPage() {
  return <TermsContent />
}
