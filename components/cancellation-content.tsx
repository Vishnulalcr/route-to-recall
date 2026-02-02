"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, XCircle } from "lucide-react"
import BentoNavigation from "@/components/bento-navigation"
import BentoFooter from "@/components/bento-footer"
import { Button } from "@/components/ui/button"

export default function CancellationContent() {
  return (
    <main className="bg-white text-[#1C1C1C] min-h-screen">
      <BentoNavigation />

      <section className="pt-32 pb-20 px-4 md:px-8 lg:px-16 bg-[#F7F9FC]">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-[#1C1C1C] hover:text-[#666666] transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-[#F3ECFF] flex items-center justify-center">
                <XCircle className="h-8 w-8 text-[#1C1C1C]" />
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-[#1C1C1C]">Cancellation & Refunds</h1>
            </div>
            <p className="text-[#1C1C1C] text-lg mb-8">Last Updated: January 2025</p>
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
            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">Cancellation Policy</h2>
              <p className="text-[#1C1C1C] leading-relaxed">
                We understand that plans can change. Our cancellation policy is designed to be fair while protecting our
                commitments to travel partners.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">Cancellation Charges</h2>
              <p className="text-[#1C1C1C] leading-relaxed mb-4">
                Cancellation charges are calculated based on the number of days before the scheduled departure date:
              </p>

              <div className="bg-[#F7F9FC] rounded-2xl p-6 space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-[#1C1C1C]">More than 45 days</span>
                  <span className="text-[#1C1C1C] font-bold">10% of total booking</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-[#1C1C1C]">30-45 days</span>
                  <span className="text-[#1C1C1C] font-bold">25% of total booking</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-[#1C1C1C]">15-29 days</span>
                  <span className="text-[#1C1C1C] font-bold">50% of total booking</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-[#1C1C1C]">7-14 days</span>
                  <span className="text-[#1C1C1C] font-bold">75% of total booking</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-[#1C1C1C]">Less than 7 days</span>
                  <span className="text-[#1C1C1C] font-bold">100% of total booking (No refund)</span>
                </div>
              </div>

              <p className="text-[#1C1C1C] leading-relaxed mt-4 text-sm">
                * Deposit amounts are non-refundable in all cases.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">Refund Process</h2>
              <ul className="list-disc pl-6 space-y-2 text-[#1C1C1C]">
                <li>All cancellation requests must be submitted in writing via email.</li>
                <li>
                  Once your cancellation request is approved, we will process refunds within 10-15 business days from
                  the approval date.
                </li>
                <li>Refunds will be issued to the original payment method.</li>
                <li>
                  Bank or payment-gateway processing may add an additional 5-7 business days for funds to appear in your
                  account.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">Modification Policy</h2>
              <ul className="list-disc pl-6 space-y-2 text-[#1C1C1C]">
                <li>Date changes are subject to availability and may incur additional costs.</li>
                <li>Modification requests must be made at least 21 days before departure.</li>
                <li>Supplier fees may apply and may be non-refundable.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">Force Majeure</h2>
              <p className="text-[#1C1C1C] leading-relaxed">
                In cases of unforeseen events beyond our control—natural disasters, political unrest, pandemics—we will
                work with you to reschedule your trip or provide a travel credit. Standard cancellation charges may be
                waived at our discretion.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">Travel Insurance</h2>
              <p className="text-[#1C1C1C] leading-relaxed">
                We strongly recommend purchasing comprehensive travel insurance to cover unexpected medical emergencies,
                family emergencies, or other events outside our control.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">No-Show Policy</h2>
              <p className="text-[#1C1C1C] leading-relaxed">
                If you fail to show up for departure without prior cancellation notice, the entire booking amount will
                be forfeited with no refund available.
              </p>
            </div>

            <aside className="bg-[#F3ECFF] rounded-2xl p-8 mt-8">
              <h2 className="text-2xl font-bold mb-4 text-[#1C1C1C]">Need to Cancel or Modify?</h2>
              <p className="text-[#1C1C1C] mb-6">
                We're here to help. Contact our team to discuss your options and we'll work with you to find the best
                solution.
              </p>
              <Button asChild className="rounded-full bg-[#39FF14] hover:bg-[#A259FF] text-[#1C1C1C] hover:text-white">
                <Link href="/contact">Contact Support</Link>
              </Button>
            </aside>
          </motion.article>
        </div>
      </section>

      <BentoFooter />
    </main>
  )
}
