import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { getEmailSubject, getEmailHtml } from "@/lib/email-templates"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, destination, travelers, dates, message, website } = body

    if (website) {
      return NextResponse.json({ success: true, message: "Thank you for your enquiry!" }, { status: 200 })
    }

    if (!name || !email || !phone || !destination) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, phone, and destination are required" },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: "Email service is not configured" }, { status: 500 })
    }

    const emailSubject = getEmailSubject("quote-request", {
      name, email, phone, destination, travelers, dates, message,
    })
    const html = getEmailHtml("quote-request", {
      name, email, phone, destination, travelers, dates, message,
    })

    const contactEmail = process.env.CONTACT_EMAIL || "delivered@resend.dev"

    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: "Route to Recall <onboarding@resend.dev>",
      to: [contactEmail],
      reply_to: `${name} <${email}>`,
      subject: emailSubject,
      html,
    })

    if (error) {
      console.error("[v0] Resend enquiry error:", error)
      return NextResponse.json({ error: "Failed to send enquiry. Please try again." }, { status: 500 })
    }

    return NextResponse.json(
      { success: true, message: "Thank you for your enquiry! We will get back to you within 24 hours." },
      { status: 200 }
    )
  } catch (error: any) {
    console.error("[v0] Error processing enquiry:", error?.message)
    return NextResponse.json({ error: "Failed to process enquiry. Please try again." }, { status: 500 })
  }
}
