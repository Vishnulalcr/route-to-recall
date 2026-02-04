"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"
import BentoNavigation from "@/components/bento-navigation"
import BentoFooter from "@/components/bento-footer"

export default function ShippingContent() {
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
              <h1 className="text-4xl md:text-6xl font-black text-[#1C1C1C]">Shipping and Delivery Policy</h1>
            </div>
            <p className="text-[#666666] text-lg">Route to Recall Private Limited - Last Updated: 05-04-2025</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-8 text-[#666666] leading-relaxed text-lg">
              <p>
                Route to Recall Private Limited does not ship physical products. All travel related documents are
                delivered digitally. This policy explains how confirmations, tickets, and travel documents are delivered
                to clients who book domestic or international travel with us.
              </p>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#1C1C1C]">1. Delivery Method</h2>
                <p className="mb-4">All travel documents are delivered electronically through:</p>
                <ul className="list-disc ml-6 space-y-2 mb-4">
                  <li>Email</li>
                  <li>WhatsApp (when required)</li>
                  <li>SMS notification (if applicable)</li>
                </ul>
                <p className="mb-4">Documents delivered include:</p>
                <ul className="list-disc ml-6 space-y-2 mb-4">
                  <li>Booking confirmations</li>
                  <li>Flight tickets</li>
                  <li>Hotel vouchers</li>
                  <li>Activity vouchers</li>
                  <li>Final travel itinerary</li>
                  <li>Payment receipts and invoices</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#1C1C1C]">2. Delivery Time</h2>
                <p className="mb-4">Delivery times depend on the type of service:</p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-[#1C1C1C] mb-2">Domestic and International Packages</h3>
                    <p>
                      Travel documents are delivered once the booking is confirmed and payments are received as per the
                      payment schedule.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1C1C1C] mb-2">Flight Tickets</h3>
                    <p>Delivered after full payment of the flight fare and successful ticket issuance.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1C1C1C] mb-2">Hotel and Activity Vouchers</h3>
                    <p>
                      Delivered after supplier confirmation, which may take a few hours to a few days depending on
                      destination and availability.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1C1C1C] mb-2">Visa Documents</h3>
                    <p>Shared after processing and approval, based on embassy timelines.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#1C1C1C]">3. Physical Documents (If Required)</h2>
                <p className="mb-4">
                  In rare situations, if a client requires printed documents or hard copies, they can be shipped through
                  registered domestic or international couriers.
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Any courier timelines will follow the service norms of the respective courier company.</li>
                  <li>
                    Route to Recall is not responsible for courier delays but ensures timely dispatch of documents from
                    our end.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#1C1C1C]">4. Delivery Responsibility</h2>
                <p className="mb-4">Document delivery is considered complete when:</p>
                <ul className="list-disc ml-6 space-y-2 mb-4">
                  <li>The email with attachments is successfully sent</li>
                  <li>The WhatsApp message with documents is delivered</li>
                  <li>Courier tracking details are handed over (if applicable)</li>
                </ul>
              </div>

              <aside className="bg-[#F7F9FC] p-8 rounded-lg border border-[#E0E0E0] mt-8">
                <h2 className="text-2xl font-bold mb-4 text-[#1C1C1C]">Need Help?</h2>
                <p className="mb-4">Contact our support team:</p>
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
                  <p>
                    <strong className="text-[#1C1C1C]">Website:</strong>{" "}
                    <a
                      href="https://www.routetorecall.com"
                      className="text-[#A259FF] hover:text-[#39FF14] transition-colors font-semibold"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.routetorecall.com
                    </a>
                  </p>
                </div>
              </aside>
            </div>
          </motion.article>
        </div>
      </section>

      <BentoFooter />
    </main>
  )
}
