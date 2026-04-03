import { NextResponse } from "next/server"

export async function GET() {
  const apiKey = process.env.BREVO_API_KEY
  const senderEmail = process.env.SENDER_EMAIL
  const contactEmail = process.env.CONTACT_EMAIL

  console.log("[v0] BREVO_API_KEY present:", !!apiKey)
  console.log("[v0] BREVO_API_KEY starts with:", apiKey?.substring(0, 10))
  console.log("[v0] SENDER_EMAIL:", senderEmail)
  console.log("[v0] CONTACT_EMAIL:", contactEmail)

  if (!apiKey) {
    return NextResponse.json({ error: "BREVO_API_KEY not set" }, { status: 500 })
  }

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      sender: { name: "Route to Recall", email: senderEmail || "enquiries@routetorecall.com" },
      to: [{ email: contactEmail || "enquiries@routetorecall.com", name: "Test" }],
      subject: "Test Email from RTR Website",
      htmlContent: "<p>This is a test email from the Route to Recall website.</p>",
    }),
  })

  const body = await res.text()
  console.log("[v0] Brevo response status:", res.status)
  console.log("[v0] Brevo response body:", body)

  return NextResponse.json({
    status: res.status,
    ok: res.ok,
    keyPrefix: apiKey.substring(0, 10),
    body: body,
  })
}
