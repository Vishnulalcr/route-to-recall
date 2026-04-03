import { NextRequest, NextResponse } from "next/server"
import {
  type FormType,
  type EmailData,
  getEmailSubject,
  getEmailHtml,
} from "@/lib/email-templates"

const rateLimitStore = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT = 5
const RATE_LIMIT_WINDOW = 60 * 60 * 1000

function getRateLimitInfo(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now()
  const record = rateLimitStore.get(ip)
  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return { allowed: true, remaining: RATE_LIMIT - 1 }
  }
  if (record.count >= RATE_LIMIT) {
    return { allowed: false, remaining: 0 }
  }
  record.count++
  return { allowed: true, remaining: RATE_LIMIT - record.count }
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function sanitizeInput(input: string): string {
  if (typeof input !== "string") return ""
  return input.trim().slice(0, 5000).replace(/[<>]/g, "")
}

async function sendBrevoEmail(params: {
  toEmail: string
  toName: string
  replyToEmail: string
  replyToName: string
  subject: string
  htmlContent: string
}) {
  const apiKey = process.env.BREVO_API_KEY
  if (!apiKey) throw new Error("BREVO_API_KEY is not configured")

  const senderEmail = process.env.SENDER_EMAIL || "enquiries@routetorecall.com"

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      sender: { name: "Route to Recall", email: senderEmail },
      to: [{ email: params.toEmail, name: params.toName }],
      replyTo: { email: params.replyToEmail, name: params.replyToName },
      subject: params.subject,
      htmlContent: params.htmlContent,
    }),
  })

  if (!res.ok) {
    const errBody = await res.text()
    throw new Error(`Brevo API error ${res.status}: ${errBody}`)
  }
  return res.json()
}

export async function POST(request: NextRequest) {
  try {
    const forwardedFor = request.headers.get("x-forwarded-for")
    const ip = forwardedFor?.split(",")[0] || "unknown"

    const { allowed, remaining } = getRateLimitInfo(ip)
    if (!allowed) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again later." },
        { status: 429, headers: { "X-RateLimit-Remaining": "0", "Retry-After": "3600" } }
      )
    }

    const body = await request.json()
    const { formType, ...formData } = body as { formType: FormType } & EmailData

    if ((formData as any).website) {
      return NextResponse.json({ success: true, message: "Thank you for your submission!" }, { status: 200 })
    }

    if (!["quick-contact", "contact", "quote-request"].includes(formType)) {
      return NextResponse.json({ success: false, error: "Invalid form type" }, { status: 400 })
    }

    const sanitizedData: EmailData = {} as EmailData

    if (!formData.name || typeof formData.name !== "string") {
      return NextResponse.json({ success: false, error: "Name is required" }, { status: 400 })
    }
    ;(sanitizedData as any).name = sanitizeInput(formData.name)

    if (!formData.email || !emailRegex.test(formData.email)) {
      return NextResponse.json({ success: false, error: "Valid email is required" }, { status: 400 })
    }
    ;(sanitizedData as any).email = sanitizeInput(formData.email)

    if (!formData.phone || typeof formData.phone !== "string") {
      return NextResponse.json({ success: false, error: "Phone number is required" }, { status: 400 })
    }
    ;(sanitizedData as any).phone = sanitizeInput(formData.phone)

    if (formType === "quick-contact") {
      if (!formData.destination) {
        return NextResponse.json({ success: false, error: "Destination is required" }, { status: 400 })
      }
      ;(sanitizedData as any).destination = sanitizeInput(formData.destination)
    } else if (formType === "contact") {
      if (!formData.subject) {
        return NextResponse.json({ success: false, error: "Subject is required" }, { status: 400 })
      }
      if (!formData.message) {
        return NextResponse.json({ success: false, error: "Message is required" }, { status: 400 })
      }
      ;(sanitizedData as any).subject = sanitizeInput(formData.subject)
      ;(sanitizedData as any).message = sanitizeInput(formData.message)
    } else if (formType === "quote-request") {
      if (!formData.destination) {
        return NextResponse.json({ success: false, error: "Destination is required" }, { status: 400 })
      }
      ;(sanitizedData as any).destination = sanitizeInput(formData.destination)
      ;(sanitizedData as any).travelers = sanitizeInput(formData.travelers || "Not specified")
      ;(sanitizedData as any).dates = sanitizeInput(formData.dates || "Flexible")
      ;(sanitizedData as any).message = sanitizeInput(formData.message || "")
    }

    const subject = getEmailSubject(formType, sanitizedData)
    const html = getEmailHtml(formType, sanitizedData)
    const contactEmail = process.env.CONTACT_EMAIL || "enquiries@routetorecall.com"

    try {
      await sendBrevoEmail({
        toEmail: contactEmail,
        toName: "Route to Recall Enquiries",
        replyToEmail: (sanitizedData as any).email,
        replyToName: (sanitizedData as any).name,
        subject,
        htmlContent: html,
      })
    } catch (emailError: any) {
      console.error("[v0] Brevo send error:", emailError?.message)
      return NextResponse.json(
        { success: false, error: "Failed to send email. Please try again later." },
        { status: 500 }
      )
    }

    const successMessages: Record<FormType, string> = {
      "quick-contact": "Thank you for your inquiry! We'll get back to you within 24 hours.",
      contact: "Thank you for your message! Our team will respond shortly.",
      "quote-request": "Thank you for your quote request! We'll prepare a customized itinerary for you.",
    }

    return NextResponse.json(
      { success: true, message: successMessages[formType] },
      { status: 200, headers: { "X-RateLimit-Remaining": remaining.toString() } }
    )
  } catch (error: any) {
    console.error("[v0] Email API unexpected error:", error?.message)
    return NextResponse.json({ success: false, error: "An unexpected error occurred." }, { status: 500 })
  }
}
