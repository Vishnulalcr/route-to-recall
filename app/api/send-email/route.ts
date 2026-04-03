import { NextRequest, NextResponse } from "next/server"
import { type FormType, type EmailData, getEmailSubject, getEmailHtml } from "@/lib/email-templates"

const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitStore.get(ip)
  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + 60 * 60 * 1000 })
    return false
  }
  if (record.count >= 5) return true
  record.count++
  return false
}

function sanitize(input: string): string {
  if (typeof input !== "string") return ""
  return input.trim().slice(0, 5000).replace(/[<>]/g, "")
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown"
    if (isRateLimited(ip)) {
      return NextResponse.json({ success: false, error: "Too many requests. Please try again later." }, { status: 429 })
    }

    const body = await request.json()
    const { formType, ...formData } = body as { formType: FormType } & Record<string, string>

    // Honeypot
    if (formData.website) {
      return NextResponse.json({ success: true, message: "Thank you for your submission!" })
    }

    if (!["quick-contact", "contact", "quote-request"].includes(formType)) {
      return NextResponse.json({ success: false, error: "Invalid form type" }, { status: 400 })
    }

    // Validate required fields
    if (!formData.name || typeof formData.name !== "string") {
      return NextResponse.json({ success: false, error: "Name is required" }, { status: 400 })
    }
    if (!formData.email || !emailRegex.test(formData.email)) {
      return NextResponse.json({ success: false, error: "Valid email is required" }, { status: 400 })
    }

    // Sanitize all fields
    const sanitized: Record<string, string> = {}
    for (const key of Object.keys(formData)) {
      sanitized[key] = sanitize(formData[key] ?? "")
    }

    const emailData = sanitized as unknown as EmailData
    const subject = getEmailSubject(formType, emailData)
    const htmlContent = getEmailHtml(formType, emailData)

    const apiKey = process.env.BREVO_API_KEY
    const senderEmail = process.env.SENDER_EMAIL || "enquiries@routetorecall.com"
    const contactEmail = process.env.CONTACT_EMAIL || "enquiries@routetorecall.com"

    if (!apiKey) {
      console.error("[v0] BREVO_API_KEY is not set")
      return NextResponse.json({ success: false, error: "Email service not configured" }, { status: 500 })
    }

    const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: "Route to Recall", email: senderEmail },
        to: [{ email: contactEmail, name: "Route to Recall Enquiries" }],
        replyTo: { email: sanitized.email, name: sanitized.name },
        subject,
        htmlContent,
      }),
    })

    const responseText = await brevoRes.text()

    if (!brevoRes.ok) {
      console.error("[v0] Brevo error", brevoRes.status, responseText)
      return NextResponse.json(
        { success: false, error: "Failed to send. Please try again or email us at enquiries@routetorecall.com" },
        { status: 500 }
      )
    }

    const messages: Record<FormType, string> = {
      "quick-contact": "Thank you! We will get back to you within 24 hours.",
      contact: "Thank you for your message! Our team will respond shortly.",
      "quote-request": "Thank you! We will prepare a customised itinerary for you.",
    }

    return NextResponse.json({ success: true, message: messages[formType] })
  } catch (error: any) {
    console.error("[v0] send-email error:", error?.message)
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again or email enquiries@routetorecall.com" },
      { status: 500 }
    )
  }
}
