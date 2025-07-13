"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, Youtube, Facebook, Mail, Phone, MapPin, Camera } from "lucide-react"

const footerLinks = {
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Music Videos", href: "/services" },
    { name: "Post-Production", href: "/services" },
    { name: "Creative Direction", href: "/services" },
    { name: "Commercial Films", href: "/services" },
  ],
  social: [
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
    
  ],
}

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 mb-6">
              <Camera className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-playfair font-bold tracking-wider">GC PRODUCTION</h3>
            </motion.div>

            <p className="text-gray-400 font-playfair leading-relaxed mb-6">
              Crafting cinematic experiences that capture emotions, tell stories, and create lasting memories through
              the art of visual storytelling.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">connecttogcproduction@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">+917875528906</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">Pune</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-oswald font-bold tracking-wider mb-6">NAVIGATION</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 font-playfair"
                    data-cursor-hover
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-oswald font-bold tracking-wider mb-6">SERVICES</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 font-playfair"
                    data-cursor-hover
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="text-lg font-oswald font-bold tracking-wider mb-6">CONNECT</h4>

            {/* Social Media */}
            <div className="flex gap-4 mb-8">
              {footerLinks.social.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                  data-cursor-hover
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div>
              <p className="text-gray-400 font-playfair text-sm mb-4">Stay updated with my latest work</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/10 border border-white/20 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-white text-black hover:glow transition-all duration-300"
                  data-cursor-hover
                >
                  <Mail className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm font-playfair">© 2024 Cinematic Visuals. All rights reserved.</div>

            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                data-cursor-hover
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                data-cursor-hover
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </footer>
  )
}
