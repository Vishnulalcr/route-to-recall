import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, subject, and message are required" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Log the contact message
    console.log("New Contact Message Received:", {
      name,
      email,
      phone: phone || "Not provided",
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // Here you would typically:
    // 1. Send an email notification to the business
    // 2. Store the message in a database
    // 3. Send a confirmation email to the customer

    return NextResponse.json(
      { 
        success: true, 
        message: "Thank you for your message! We will get back to you within 24 hours." 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing contact message:", error)
    return NextResponse.json(
      { error: "Failed to process your message. Please try again." },
      { status: 500 }
    )
  }
}
