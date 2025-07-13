"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { useState } from "react"

const navItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "PORTFOLIO", href: "/portfolio" },
  { name: "SERVICES", href: "/services" },
  // { name: "TESTIMONIALS", href: "/testimonials" },
  { name: "CONTACT", href: "/contact" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-playfair font-bold tracking-wider">
            GC PRODUCTION
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-oswald tracking-wider transition-all duration-300 hover:glow-text ${
                  pathname === item.href ? "text-white glow-text" : "text-gray-400"
                }`}
                data-cursor-hover
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white" data-cursor-hover>
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 bg-white transition-all ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block h-0.5 bg-white transition-all ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div initial={false} animate={{ height: isOpen ? "auto" : 0 }} className="md:hidden overflow-hidden">
          <div className="py-3 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block text-sm font-oswald tracking-wider transition-all duration-300 hover:glow-text ${
                  pathname === item.href ? "text-white glow-text" : "text-gray-400"
                }`}
                data-cursor-hover
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
