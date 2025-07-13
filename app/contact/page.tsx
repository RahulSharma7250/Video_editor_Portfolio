"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Mail, Phone, MapPin, Instagram, Youtube, Facebook, Send, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  })

  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: result.message,
        })
        // Reset form on success
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          message: "",
        })
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Failed to send message. Please try again.",
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-oswald font-bold tracking-wider mb-8">CONTACT</h1>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-xl text-gray-300 font-playfair max-w-3xl mx-auto">
              Ready to create something extraordinary? Let's discuss your vision and bring your story to life through
              cinematic artistry.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <ScrollReveal direction="left">
            <div className="bg-white/5 border border-white/10 p-8">
              <h2 className="text-3xl font-oswald font-bold mb-8 tracking-wider">LET'S WORK TOGETHER</h2>

              {/* Status Message */}
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 p-4 rounded flex items-center gap-3 ${
                    submitStatus.type === "success"
                      ? "bg-green-500/20 border border-green-500/30 text-green-300"
                      : "bg-red-500/20 border border-red-500/30 text-red-300"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <span className="text-sm">{submitStatus.message}</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent border-b-2 border-white/30 py-3 px-0 text-white focus:outline-none focus:border-white transition-all duration-300"
                    placeholder=" "
                    required
                    disabled={isSubmitting}
                  />
                  <motion.label
                    className={`absolute left-0 pointer-events-none transition-all duration-300 font-oswald tracking-wider ${
                      focusedField === "name" || formData.name ? "-top-4 text-sm text-white" : "top-3"
                    }`}
                  >
                    YOUR NAME
                  </motion.label>
                  {focusedField === "name" && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-white origin-left"
                    />
                  )}
                </div>

                {/* Email Field */}
                <div className="relative">
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent border-b-2 border-white/30 py-3 px-0 text-white focus:outline-none focus:border-white transition-all duration-300"
                    placeholder=" "
                    required
                    disabled={isSubmitting}
                  />
                  <motion.label
                    className={`absolute left-0 pointer-events-none transition-all duration-300 font-oswald tracking-wider ${
                      focusedField === "email" || formData.email ? "-top-4 text-sm text-white" : "top-3"
                    }`}
                  >
                    EMAIL ADDRESS
                  </motion.label>
                  {focusedField === "email" && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-white origin-left"
                    />
                  )}
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <motion.input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent border-b-2 border-white/30 py-3 px-0 text-white focus:outline-none focus:border-white transition-all duration-300"
                    placeholder=" "
                    disabled={isSubmitting}
                  />
                  <motion.label
                    className={`absolute left-0 pointer-events-none transition-all duration-300 font-oswald tracking-wider ${
                      focusedField === "phone" || formData.phone ? "-top-4 text-sm text-white" : "top-3"
                    }`}
                  >
                    PHONE NUMBER
                  </motion.label>
                  {focusedField === "phone" && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-white origin-left"
                    />
                  )}
                </div>

                {/* Project Type */}
                <div className="relative">
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("projectType")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full bg-transparent border-b-2 border-white/30 py-3 px-0 text-white focus:outline-none focus:border-white transition-all duration-300 appearance-none cursor-pointer ${
                      !formData.projectType ? "text-gray-400" : "text-white"
                    }`}
                    required
                    disabled={isSubmitting}
                  >
                    <option value="" disabled hidden className="bg-black text-gray-400">
                      Select Project Type
                    </option>
                    {/* <option value="wedding" className="bg-black text-white">
                      Wedding Film
                    </option> */}
                    <option value="music" className="bg-black text-white">
                      Music Video
                    </option>
                    <option value="commercial" className="bg-black text-white">
                      Commercial/Ads
                    </option>
                    <option value="reels" className="bg-black text-white">
                      Music Production
                    </option>
                    <option value="other" className="bg-black text-white">
                      Other
                    </option>
                  </select>
                  {/* <motion.label
                    className={`absolute left-0 pointer-events-none transition-all duration-300 font-oswald tracking-wider ${
                      focusedField === "projectType" || formData.projectType
                        ? "-top-6 text-sm text-white"
                        : "top-3 text-gray-400"
                    }`}
                  >
                    TYPE OF WORK
                  </motion.label> */}
                  {focusedField === "projectType" && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-white origin-left"
                    />
                  )}
                </div>

                {/* Message Field */}
                <div className="relative">
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-white/30 py-3 px-0 text-white focus:outline-none focus:border-white transition-all duration-300 resize-none"
                    placeholder=" "
                    required
                    disabled={isSubmitting}
                  />
                  <motion.label
                    className={`absolute left-0 pointer-events-none transition-all duration-300 font-oswald tracking-wider ${
                      focusedField === "message" || formData.message
                        ? "-top-4 text-sm text-white"
                        : "top-3 text-gray-400"
                    }`}
                  >
                    PROJECT DETAILS
                  </motion.label>
                  {/* {focusedField === "message" && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-white origin-left"
                    />
                  )} */}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  className={`w-full py-4 font-oswald tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitting ? "bg-gray-600 text-gray-300 cursor-not-allowed" : "bg-white text-black hover:glow"
                  }`}
                  disabled={isSubmitting}
                  data-cursor-hover
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-gray-300 border-t-transparent rounded-full animate-spin" />
                      SENDING...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      SEND MESSAGE
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </ScrollReveal>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Information */}
            <ScrollReveal direction="right">
              <div className="bg-white/5 border border-white/10 p-8">
                <h3 className="text-2xl font-oswald font-bold mb-8 tracking-wider">GET IN TOUCH</h3>

                <div className="space-y-6">
                  <motion.div whileHover={{ x: 10 }} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-oswald tracking-wider text-sm text-gray-400">EMAIL</p>
                      <p className="font-playfair">connecttogcproduction@gmail.com</p>
                    </div>
                  </motion.div>

                  <motion.div whileHover={{ x: 10 }} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-oswald tracking-wider text-sm text-gray-400">PHONE</p>
                      <p className="font-playfair">+917875528906</p>
                    </div>
                  </motion.div>

                  <motion.div whileHover={{ x: 10 }} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-oswald tracking-wider text-sm text-gray-400">LOCATION</p>
                      <p className="font-playfair">Pune</p>
                    </div>
                  </motion.div>
                </div>

                {/* Social Media */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <h4 className="font-oswald tracking-wider text-sm text-gray-400 mb-4">FOLLOW MY WORK</h4>
                  <div className="flex gap-4">
                    {[
                      { icon: Instagram, href: "#" },
                      { icon: Youtube, href: "#" },
                      { icon: Facebook, href: "#" },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                        data-cursor-hover
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Map */}
            <ScrollReveal direction="right" delay={0.3}>
              <div className="bg-white/5 border border-white/10 p-8">
                <h3 className="text-2xl font-oswald font-bold mb-6 tracking-wider">LOCATION</h3>
                <div className="aspect-video bg-gray-900 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192113701158!3d34.02016130653294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1635959934842!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-20 px-6 md:px-12 lg:px-16 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-center mb-16 tracking-wider">
              FREQUENTLY ASKED
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {[
              {
                question: "What is your typical turnaround time?",
                answer:
                  "Wedding films typically take 6-8 weeks, music videos 2-3 weeks, and commercial projects 1-2 weeks depending on complexity.",
              },
              {
                question: "Do you travel for destination projects?",
                answer:
                  "Yes! I love destination projects. Travel costs are included in the quote, and I'm available worldwide for the right project.",
              },
              {
                question: "What equipment do you use?",
                answer:
                  "I use professional cinema cameras, stabilizers, drones, and lighting equipment to ensure the highest quality cinematic results.",
              },
              {
                question: "Can you work with our budget?",
                answer:
                  "I offer various packages to accommodate different budgets. Let's discuss your vision and find a solution that works for you.",
              },
            ].map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  initial={false}
                  className="border border-white/20 p-6 hover:border-white/40 transition-all duration-300"
                >
                  <h4 className="font-oswald font-bold text-lg mb-3 tracking-wider">{faq.question}</h4>
                  <p className="text-gray-300 font-playfair leading-relaxed">{faq.answer}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
