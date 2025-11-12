"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, XCircle, FileText } from "lucide-react"
import BentoNavigation from "@/components/bento-navigation"
import BentoFooter from "@/components/bento-footer"
import { Button } from "@/components/ui/button"

export default function CancellationPage() {
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
                <XCircle className="h-8 w-8 text-[#A259FF]" />
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-[#1C1C1C]">Cancellation & Refunds</h1>
            </div>
            <p className="text-[#666666] text-lg mb-8">Last updated: January 2025</p>

            {/* PDF Download Button */}
            <div className="mb-12 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F3ECFF] flex items-center justify-center">
                    <FileText className="h-6 w-6 text-[#A259FF]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1C1C1C]">Download Full Cancellation Policy</h3>
                    <p className="text-sm text-[#666666]">Complete document in PDF format</p>
                  </div>
                </div>
                <Button
                  asChild
                  className="rounded-full bg-[#39FF14] hover:bg-[#A259FF] text-[#1C1C1C] hover:text-white transition-all"
                >
                  <a href="/documents/cancellation-refunds.pdf" download>
                    Download PDF
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">Cancellation Policy</h2>
              <p className="text-[#666666] leading-relaxed">
                We understand that plans can change. Our cancellation policy is designed to be fair while protecting our
                business and the commitments we make to our travel partners.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">Cancellation Charges</h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                Cancellation charges are calculated based on the number of days before the scheduled departure date:
              </p>

              <div className="bg-[#F7F9FC] rounded-2xl p-6 space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-[#1C1C1C]">More than 45 days</span>
                  <span className="text-[#39FF14] font-bold">10% of total booking</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-[#1C1C1C]">30-45 days</span>
                  <span className="text-[#00C2FF] font-bold">25% of total booking</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-[#1C1C1C]">15-29 days</span>
                  <span className="text-[#A259FF] font-bold">50% of total booking</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-[#1C1C1C]">7-14 days</span>
                  <span className="text-orange-500 font-bold">75% of total booking</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-[#1C1C1C]">Less than 7 days</span>
                  <span className="text-red-500 font-bold">100% of total booking (No refund)</span>
                </div>
              </div>

              <p className="text-[#666666] leading-relaxed mt-4 text-sm">
                * Deposit amounts are non-refundable in all cases
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">Refund Process</h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                Refunds are processed according to the following timeline:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#666666]">
                <li>Cancellation requests must be submitted in writing via email</li>
                <li>Refunds are processed within 10-15 business days from the date of cancellation approval</li>
                <li>Refunds are issued to the original payment method</li>
                <li>Bank processing times may add 5-7 business days to the refund timeline</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">Modification Policy</h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                We understand that you may need to modify your travel plans instead of canceling:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#666666]">
                <li>Date changes are subject to availability and may incur additional costs</li>
                <li>Modification fees start at 10% of the booking value</li>
                <li>Changes must be requested at least 21 days before departure</li>
                <li>Some supplier fees may be non-refundable when making modifications</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">Force Majeure</h2>
              <p className="text-[#666666] leading-relaxed">
                In cases of unforeseen circumstances beyond our control (natural disasters, political unrest, pandemics,
                etc.), we will work with you to reschedule your trip or provide a credit towards future travel. Standard
                cancellation charges may be waived at our discretion.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">Travel Insurance</h2>
              <p className="text-[#666666] leading-relaxed">
                We strongly recommend purchasing comprehensive travel insurance to protect your investment. Many
                cancellation scenarios may be covered by travel insurance policies, including medical emergencies,
                family emergencies, and other unforeseen events.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">No-Show Policy</h2>
              <p className="text-[#666666] leading-relaxed">
                If you fail to show up for your departure without prior cancellation notice, the entire booking amount
                will be forfeited with no refund available.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">Supplier Cancellations</h2>
              <p className="text-[#666666] leading-relaxed">
                If a trip is canceled by Route to Recall due to insufficient bookings or other operational reasons, you
                will receive a full refund or the option to transfer to an alternative trip at no additional cost.
              </p>
            </div>

            <div className="bg-[#F3ECFF] rounded-2xl p-8 mt-8">
              <h3 className="text-2xl font-bold mb-4 text-[#1C1C1C]">Need to Cancel or Modify?</h3>
              <p className="text-[#666666] mb-6">
                We're here to help. Contact our team to discuss your options and we'll work with you to find the best
                solution.
              </p>
              <Button asChild className="rounded-full bg-[#39FF14] hover:bg-[#A259FF] text-[#1C1C1C] hover:text-white">
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <BentoFooter />
    </main>
  )
}
