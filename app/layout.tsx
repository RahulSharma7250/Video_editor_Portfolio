import type React from "react"
import type { Metadata } from "next"
import { Oswald, Playfair_Display } from "next/font/google"
import "./globals.css"
import { CustomCursor } from "@/components/custom-cursor"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"
// import { Preloader } from "@/components/preloader"
import { Footer } from "@/components/footer"

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "CINEMATIC VISUALS | Professional Videographer",
  description:
    "Award-winning videographer specializing in cinematic storytelling, wedding films, music videos, and commercial content.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${playfair.variable} bg-black text-white overflow-x-hidden`}>
        {/* <Preloader /> */}
        <CustomCursor />
        <Navigation />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
