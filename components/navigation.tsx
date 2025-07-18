"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

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
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: 0, 
        opacity: 1,
        backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.8)'
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-3">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-2xl font-playfair font-bold tracking-wider hover:glow-text transition-all duration-300"
            data-cursor-hover
          >
            GC PRODUCTION
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-oswald tracking-wider transition-all duration-300 ${
                  pathname === item.href ? "text-white" : "text-gray-400 hover:text-white"
                }`}
                data-cursor-hover
              >
                {item.name}
                {pathname === item.href && (
                  <motion.span 
                    layoutId="nav-underline"
                    className="absolute left-0 -bottom-1 w-full h-0.5 bg-white"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
            data-cursor-hover
          >
            <div className="w-6 h-6 flex flex-col justify-between">
              <motion.span 
                animate={isOpen ? "open" : "closed"}
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 7 }
                }}
                className="block h-0.5 w-full bg-white origin-center"
              />
              <motion.span 
                animate={isOpen ? "open" : "closed"}
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                className="block h-0.5 w-full bg-white"
              />
              <motion.span 
                animate={isOpen ? "open" : "closed"}
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -7 }
                }}
                className="block h-0.5 w-full bg-white origin-center"
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-3 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-sm font-oswald tracking-wider transition-all duration-300 ${
                      pathname === item.href ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                    data-cursor-hover
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}