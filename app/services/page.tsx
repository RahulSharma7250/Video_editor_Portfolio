"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Music, Edit, Palette, Camera, Film, Zap, Clock, Star, CheckCircle } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Music,
    title: "Music Videos",
    description:
      "Creative music video production that brings your sound to life with stunning visuals and compelling storytelling that resonates with your audience.",
    features: [
      "Concept development",
      "Multi-camera setup",
      "Creative direction",
      "Post-production",
      "Color grading",
      "Motion graphics",
    ],
    price: "Depends on your requirement",
    duration: "2-3 weeks",
    includes: [
      "Pre-production planning",
      "Full day shoot",
      "Professional editing",
      "Color correction",
      "Final delivery in multiple formats",
    ],
  },
  {
    icon: Edit,
    title: "Post-Production",
    description:
      "Professional video editing, color grading, and audio mixing services that elevate your raw footage into polished cinematic masterpieces.",
    features: [
      "Color correction",
      "Audio enhancement",
      "Motion graphics",
      "Final delivery",
      "Multiple formats",
      "Revision rounds",
    ],
    price: "Depends on your requirement",
    duration: "1-2 weeks",
    includes: [
      "Professional editing",
      "Color grading",
      "Audio mixing",
      "Graphics integration",
      "Multiple export formats",
    ],
  },
  {
    icon: Palette,
    title: "Creative Direction",
    description:
      "Complete creative consultation and direction for your video projects, from initial concept development to final execution and delivery.",
    features: [
      "Concept development",
      "Storyboarding",
      "Creative consultation",
      "Project management",
      "Team coordination",
      "Quality assurance",
    ],
    price: "Depends on your requirement",
    duration: "Project dependent",
    includes: ["Creative strategy", "Visual treatment", "Production planning", "Team management", "Quality control"],
  },
]

const addOnServices = [
  {
    icon: Camera,
    title: "Drone Cinematography",
    description: "Aerial footage that adds cinematic scope and visual impact to your projects.",
    price: "Depends on your requirement",
  },
  {
    icon: Film,
    title: "Equipment Rental",
    description: "Professional camera and lighting equipment available for independent projects.",
    price: "Depends on your requirement",
  },
  {
    icon: Zap,
    title: "Rush Delivery",
    description: "Expedited post-production services for time-sensitive projects.",
    price: "Depends on your requirement",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "We discuss your vision, objectives, target audience, and creative requirements in detail.",
    duration: "1-2 hours",
  },
  {
    step: "02",
    title: "Concept Development",
    description: "Creating detailed concepts, treatments, and storyboards that align with your goals.",
    duration: "3-5 days",
  },
  {
    step: "03",
    title: "Pre-Production",
    description: "Location scouting, casting, equipment preparation, and scheduling coordination.",
    duration: "1-2 weeks",
  },
  {
    step: "04",
    title: "Production",
    description: "Professional filming with state-of-the-art equipment and experienced crew.",
    duration: "1-3 days",
  },
  {
    step: "05",
    title: "Post-Production",
    description: "Expert editing, color grading, sound design, and motion graphics integration.",
    duration: "2-4 weeks",
  },
  {
    step: "06",
    title: "Final Delivery",
    description: "Quality review, client feedback integration, and delivery in all required formats.",
    duration: "2-3 days",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-oswald font-bold tracking-wider mb-8">SERVICES</h1>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-xl text-gray-300 font-playfair max-w-3xl mx-auto mb-8">
              Comprehensive video production services designed to bring your creative vision to life with cinematic
              excellence and professional expertise.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="flex flex-wrap justify-center gap-4">
              {["Music Videos", "Commercial Films", "Creative Direction", "Post-Production"].map((tag) => (
                <span key={tag} className="px-4 py-2 border border-white/30 text-sm font-oswald tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Services */}
      <section className="px-6 md:px-12 lg:px-16 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white/5 border border-white/10 p-8 hover:border-white/30 transition-all duration-300 group h-full flex flex-col"
                  data-cursor-hover
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-white/10 flex items-center justify-center mb-6 group-hover:glow transition-all duration-300"
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-oswald font-bold mb-4 tracking-wider group-hover:glow-text transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 font-playfair mb-6 leading-relaxed flex-grow">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-3 text-white/60" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Pricing & Duration */}
                  <div className="border-t border-white/10 pt-6 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-oswald font-bold text-white">{service.price}</span>
                      <span className="text-sm text-gray-400 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.duration}
                      </span>
                    </div>
                  </div>

                  {/* Includes */}
                  <div className="mb-6">
                    <h4 className="text-sm font-oswald tracking-wider text-gray-400 mb-3">INCLUDES:</h4>
                    <ul className="space-y-1">
                      {service.includes.map((item, idx) => (
                        <li key={idx} className="text-xs text-gray-500 flex items-center">
                          <Star className="w-3 h-3 mr-2 text-white/40" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 border border-white/30 font-oswald tracking-wider hover:bg-white hover:text-black transition-all duration-300 mt-auto"
                    data-cursor-hover
                  >
                    GET QUOTE
                  </motion.button>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 px-6 md:px-12 lg:px-16 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-center mb-16 tracking-wider">
              ADD-ON SERVICES
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {addOnServices.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
                  data-cursor-hover
                >
                  <service.icon className="w-12 h-12 mx-auto mb-6 text-white" />
                  <h3 className="text-xl font-oswald font-bold mb-4 tracking-wider">{service.title}</h3>
                  <p className="text-gray-400 font-playfair mb-4 leading-relaxed">{service.description}</p>
                  <div className="text-lg font-oswald font-bold text-white">{service.price}</div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Process */}
      <section className="py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-center mb-8 tracking-wider">
              DETAILED PROCESS
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-xl text-gray-300 font-playfair text-center mb-16 max-w-3xl mx-auto">
              A transparent, step-by-step approach that ensures every project is delivered on time, on budget, and
              exceeds expectations.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                  data-cursor-hover
                >
                  <div className="text-4xl font-oswald font-bold text-white/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-oswald font-bold mb-3 tracking-wider">{item.title}</h3>
                  <p className="text-gray-400 font-playfair leading-relaxed mb-4">{item.description}</p>
                  <div className="text-sm text-gray-500 flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {item.duration}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-20 px-6 md:px-12 lg:px-16 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-8 tracking-wider">TRANSPARENT PRICING</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-xl text-gray-300 mb-12 font-playfair">
              Every project is unique, and pricing reflects the specific requirements, complexity, and scope of work
              involved.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-8 border border-white/20">
                <h3 className="text-2xl font-oswald font-bold mb-4 tracking-wider">WHAT'S INCLUDED</h3>
                <ul className="space-y-3 text-left">
                  {[
                    "Initial consultation and concept development",
                    "Professional equipment and crew",
                    "Full post-production services",
                    "Multiple revision rounds",
                    "Final delivery in all required formats",
                    "Project management and communication",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 mr-3 text-white" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 border border-white/20">
                <h3 className="text-2xl font-oswald font-bold mb-4 tracking-wider">PRICING FACTORS</h3>
                <ul className="space-y-3 text-left">
                  {[
                    "Project complexity and scope",
                    "Production duration and location",
                    "Equipment and crew requirements",
                    "Post-production complexity",
                    "Timeline and delivery requirements",
                    "Usage rights and distribution",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <Star className="w-5 h-5 mr-3 text-white/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-8 tracking-wider">
              READY TO START YOUR PROJECT?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-xl text-gray-300 mb-12 font-playfair">
              Let's discuss your vision and create something extraordinary together. Every great project starts with a
              conversation.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-12 py-4 bg-white text-black font-oswald tracking-wider hover:glow transition-all duration-300"
                data-cursor-hover
              >
                GET FREE CONSULTATION
              </Link>
              <Link
                href="/portfolio"
                className="px-12 py-4 border-2 border-white text-white font-oswald tracking-wider hover:bg-white hover:text-black transition-all duration-300"
                data-cursor-hover
              >
                VIEW OUR WORK
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
