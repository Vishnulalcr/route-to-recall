import { NextRequest, NextResponse } from "next/server"
import { getEmailSubject, getEmailHtml } from "@/lib/email-templates"

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, destination, travelers, dates, message, website } = body

    if (website) {
      return NextResponse.json({ success: true, message: "Thank you for your enquiry!" })
    }

    if (!name || !email || !phone || !destination) {
      return NextResponse.json(
        { success: false, error: "Name, email, phone and destination are required" },
        { status: 400 }
      )
    }
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, error: "Invalid email format" }, { status: 400 })
    }

    const apiKey = process.env.BREVO_API_KEY
    const senderEmail = process.env.SENDER_EMAIL || "enquiries@routetorecall.com"
    const contactEmail = process.env.CONTACT_EMAIL || "enquiries@routetorecall.com"

    if (!apiKey) {
      console.error("[v0] BREVO_API_KEY is not set")
      return NextResponse.json({ success: false, error: "Email service not configured" }, { status: 500 })
    }

    const emailData = { name, email, phone, destination, travelers, dates, message }
    const htmlContent = getEmailHtml("quote-request", emailData)
    const emailSubject = getEmailSubject("quote-request", emailData)

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: "Route to Recall", email: senderEmail },
        to: [{ email: contactEmail, name: "Route to Recall Enquiries" }],
        replyTo: { email, name },
        subject: emailSubject,
        htmlContent,
      }),
    })

    const responseText = await res.text()

    if (!res.ok) {
      console.error("[v0] Brevo enquiry error", res.status, responseText)
      return NextResponse.json(
        { success: false, error: "Failed to send. Please try again or email enquiries@routetorecall.com" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, message: "Thank you for your enquiry! We will get back to you within 24 hours." })
  } catch (error: any) {
    console.error("[v0] enquiry route error:", error?.message)
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
