import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, projectType, message } = body

    // Validate required fields
    if (!name || !email || !message || !projectType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Create email transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER || "your-email@gmail.com", // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD || "your-app-password", // Your Gmail App Password
      },
    })

    // Create email content
    const emailContent = `
      <h2>New Contact Form Submission - Cinematic Visuals</h2>
      
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Project Type:</strong> ${projectType}</p>
      
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, "<br>")}</p>
      
      <hr>
      <p><em>Sent from Cinematic Visuals Website</em></p>
      <p><em>Time: ${new Date().toLocaleString()}</em></p>
    `

    // Email options
    const mailOptions = {
      from: process.env.GMAIL_USER || "your-email@gmail.com",
      to: "rahulsharma18535@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: emailContent,
      replyTo: email,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Send auto-reply to the user
    const autoReplyOptions = {
      from: process.env.GMAIL_USER || "your-email@gmail.com",
      to: email,
      subject: "Thank you for contacting Cinematic Visuals",
      html: `
        <h2>Thank you for your inquiry!</h2>
        
        <p>Dear ${name},</p>
        
        <p>Thank you for reaching out to Cinematic Visuals. We have received your message regarding your <strong>${projectType}</strong> project and will get back to you within 24 hours.</p>
        
        <p>Here's a copy of your message:</p>
        <blockquote style="border-left: 4px solid #ccc; padding-left: 16px; margin: 16px 0;">
          ${message.replace(/\n/g, "<br>")}
        </blockquote>
        
        <p>We're excited to learn more about your project and discuss how we can bring your vision to life.</p>
        
        <p>Best regards,<br>
        Cinematic Visuals Team</p>
        
        <hr>
        <p><em>This is an automated response. Please do not reply to this email.</em></p>
      `,
    }

    await transporter.sendMail(autoReplyOptions)

    return NextResponse.json({
      success: true,
      message: "Message sent successfully! We will get back to you within 24 hours.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      {
        error: "Failed to send message. Please try again later.",
      },
      { status: 500 },
    )
  }
}
