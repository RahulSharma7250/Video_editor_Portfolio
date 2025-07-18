"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah & Michael",
    role: "Wedding Couple",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Our wedding film exceeded every expectation. The way they captured our emotions and the cinematic quality is absolutely breathtaking. We watch it every anniversary and it brings us right back to that magical day.",
    project: "Wedding Film",
  },
  {
    id: 2,
    name: "Alex Rodriguez",
    role: "Music Artist",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "The music video they created for my latest single is pure art. The creative vision, attention to detail, and professional execution made my song come alive visually. Incredible work!",
    project: "Music Video",
  },
  {
    id: 3,
    name: "Jennifer Chen",
    role: "Brand Manager",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Working with them on our brand campaign was seamless. They understood our vision immediately and delivered a promotional video that perfectly captured our brand essence. The results speak for themselves.",
    project: "Brand Campaign",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Event Organizer",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "The event coverage was phenomenal. They managed to capture all the key moments while being completely unobtrusive. The final edit was delivered quickly and exceeded our expectations.",
    project: "Event Coverage",
  },
  {
    id: 5,
    name: "Maria Gonzalez",
    role: "Bride",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "From the initial consultation to the final delivery, everything was perfect. The team was professional, creative, and made us feel so comfortable. Our wedding film is a treasure we'll cherish forever.",
    project: "Wedding Film",
  },
]

export default function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-oswald font-bold tracking-wider mb-8">TESTIMONIALS</h1>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-xl text-gray-300 font-playfair max-w-3xl mx-auto">
              Don't just take my word for it. Here's what my clients have to say about their experience working with me
              and the cinematic stories we've created together.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Testimonial Slider */}
      <section className="px-6 md:px-12 lg:px-16 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white/5 border border-white/10 p-12 md:p-16"
              >
                <div className="grid md:grid-cols-3 gap-12 items-center">
                  {/* Client Image & Info */}
                  <div className="text-center md:text-left">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-24 h-24 rounded-full mx-auto md:mx-0 mb-6 grayscale-hover"
                    />

                    <h3 className="text-2xl font-oswald font-bold mb-2 tracking-wider">
                      {testimonials[currentIndex].name}
                    </h3>

                    <p className="text-gray-400 font-playfair mb-4">{testimonials[currentIndex].role}</p>

                    <div className="flex justify-center md:justify-start gap-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-white text-white" />
                      ))}
                    </div>

                    <span className="text-sm text-gray-500 font-oswald tracking-wider">
                      {testimonials[currentIndex].project}
                    </span>
                  </div>

                  {/* Testimonial Text */}
                  <div className="md:col-span-2">
                    <Quote className="w-12 h-12 text-white/20 mb-6" />

                    <blockquote className="text-xl md:text-2xl font-playfair italic text-gray-300 leading-relaxed">
                      {testimonials[currentIndex].text}
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="p-3 border border-white/30 rounded-full hover:border-white/60 hover:glow transition-all duration-300"
                data-cursor-hover
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="p-3 border border-white/30 rounded-full hover:border-white/60 hover:glow transition-all duration-300"
                data-cursor-hover
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-white" : "bg-white/30"
                  }`}
                  data-cursor-hover
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 px-6 md:px-12 lg:px-16 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-center mb-16 tracking-wider">
              MORE CLIENT LOVE
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-black border border-white/20 p-6 hover:border-white/40 hover:glow transition-all duration-300"
                  data-cursor-hover
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 grayscale"
                    />
                    <div>
                      <h4 className="font-oswald font-bold text-sm tracking-wider">{testimonial.name}</h4>
                      <p className="text-gray-400 text-xs font-playfair">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-white text-white" />
                    ))}
                  </div>

                  <p className="text-gray-300 font-playfair text-sm leading-relaxed mb-4">
                    "{testimonial.text.substring(0, 120)}..."
                  </p>

                  <span className="text-xs text-gray-500 font-oswald tracking-wider">{testimonial.project}</span>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-center mb-16 tracking-wider">
              VIDEO TESTIMONIALS
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <ScrollReveal key={item} delay={item * 0.2}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-video bg-gray-900 overflow-hidden group cursor-pointer"
                  data-cursor-hover
                >
                  <img
                    src={`/placeholder.svg?height=400&width=600`}
                    alt={`Video Testimonial ${item}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                    >
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1" />
                    </motion.div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="font-oswald font-bold text-lg tracking-wider mb-1">Client Testimonial {item}</h4>
                    <p className="text-gray-300 text-sm font-playfair">Hear directly from our satisfied clients</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
