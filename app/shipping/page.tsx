"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"
import BentoNavigation from "@/components/bento-navigation"
import BentoFooter from "@/components/bento-footer"

export default function ShippingPage() {
  return (
    <main className="bg-white text-[#1C1C1C] min-h-screen">
      <BentoNavigation />

      <section className="pt-32 pb-20 px-4 md:px-8 lg:px-16 bg-[#F7F9FC]">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-[#666666] hover:text-[#39FF14] transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-[#F3ECFF] flex items-center justify-center">
                <FileText className="h-8 w-8 text-[#00C2FF]" />
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-[#1C1C1C]">Shipping Policy</h1>
            </div>
            <p className="text-[#666666] text-lg">Route to Recall - Last Updated: 05-04-2025</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6 text-[#666666] leading-relaxed text-lg">
              <p>
                For <strong className="text-[#1C1C1C]">International buyers</strong>, orders are shipped and delivered
                through registered international courier companies and/or International speed post only.
              </p>

              <p>
                For <strong className="text-[#1C1C1C]">domestic buyers</strong>, orders are shipped through registered
                domestic courier companies and/or speed post only.
              </p>

              <p>
                Orders are shipped within <strong className="text-[#1C1C1C]">Not Applicable</strong> or as per the
                delivery date agreed at the time of order confirmation and delivering of the shipment subject to Courier
                Company / post office norms.
              </p>

              <p>
                <strong className="text-[#1C1C1C]">ROUTE TO RECALL PRIVATE LIMITED</strong> is not liable for any delay
                in delivery by the courier company / postal authorities and only guarantees to hand over the consignment
                to the courier company or postal authorities within{" "}
                <strong className="text-[#1C1C1C]">Not Applicable</strong> from the date of the order and payment or as
                per the delivery date agreed at the time of order confirmation.
              </p>

              <p>
                Delivery of all orders will be to the{" "}
                <strong className="text-[#1C1C1C]">address provided by the buyer</strong>.
              </p>

              <p>
                Delivery of our services will be confirmed on your <strong className="text-[#1C1C1C]">mail ID</strong>{" "}
                as specified during registration.
              </p>

              <div className="bg-[#F7F9FC] p-8 rounded-lg border border-[#E0E0E0] mt-8">
                <h3 className="text-2xl font-bold mb-4 text-[#1C1C1C]">Need Help?</h3>
                <p className="mb-4">For any issues in utilizing our services, you may contact our helpdesk:</p>
                <div className="space-y-2">
                  <p>
                    <strong className="text-[#1C1C1C]">Phone:</strong>{" "}
                    <a
                      href="tel:6363331334"
                      className="text-[#A259FF] hover:text-[#39FF14] transition-colors font-semibold"
                    >
                      6363331334
                    </a>
                  </p>
                  <p>
                    <strong className="text-[#1C1C1C]">Email:</strong>{" "}
                    <a
                      href="mailto:enquiries@routetorecall.com"
                      className="text-[#A259FF] hover:text-[#39FF14] transition-colors font-semibold"
                    >
                      enquiries@routetorecall.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <BentoFooter />
    </main>
  )
}
