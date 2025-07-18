"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronDown, Play, Award, Users, Camera, Film, Volume2, VolumeX } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useState } from "react"

const stats = [
  { icon: Camera, number: "400+", label: "Projects Completed" },
  { icon: Users, number: "350+", label: "Happy Clients" },
  // { icon: Award, number: "15+", label: "Awards Won" },
  { icon: Film, number: "5+", label: "Years Experience" },
]

const expertise = [
  {
    title: "Music Videos",
    description: "Creating visual narratives that amplify your sound and connect with audiences.",
    thumbnail: "https://img.youtube.com/vi/fTk173-q7A8/hqdefault.jpg",
  },
  {
    title: "Commercial Films",
    description: "Brand storytelling that drives engagement and builds lasting connections.",
    thumbnail: "https://img.youtube.com/vi/NEA0TSHLUNM/hqdefault.jpg",
  },
  {
    title: "Creative Direction",
    description: "From concept to completion, bringing artistic visions to life.",
    thumbnail: "https://img.youtube.com/vi/t2bQppaznmM/maxresdefault.jpg",
  },
]

export default function HomePage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

const showcaseVideo = {
    title: "CINEMATIC SHOWREEL 2024",
    description:
      "A comprehensive showcase of my latest work featuring music videos, commercial films, and creative projects that demonstrate the full spectrum of cinematic storytelling.",
    videoUrl: "videos/gc_edit.mp4",
    duration: "3:45",
    category: "Showreel",
}

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-90"
            poster="/placeholder.svg?height=1080&width=1920"
          >
            <source src="/videos/gc_edit.mp4" type="video/mp4" />
            {/* Fallback videos */}
            <source
              src="videos/gc_edit.mp4"
              type="video/mp4"
            />
            <source
              src="videos/gc_edit.mp4"
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 md:px-12 lg:px-16">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-6xl md:text-8xl font-oswald font-bold tracking-wider mb-6 glow-text"
          >
            CINEMATIC
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl font-playfair mb-8 typing max-w-2xl mx-auto"
          >
            VISUAL STORYTELLER & FILMMAKER
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-lg text-gray-300 mb-12 max-w-xl mx-auto"
          >
            Crafting cinematic experiences that capture emotions, tell stories, and create lasting memories through the
            art of visual storytelling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center px-8 py-4 bg-white text-black font-oswald tracking-wider hover:glow transition-all duration-300"
              data-cursor-hover
            >
              <Play className="w-5 h-5 mr-2" />
              VIEW PORTFOLIO
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-oswald tracking-wider hover:bg-white hover:text-black transition-all duration-300"
              data-cursor-hover
            >
              GET IN TOUCH
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="text-white/60"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Preview Section */}
      <section className="section-clean container-spacing">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 grid-spacing-clean items-center">
            {/* Left: Image */}
            <ScrollReveal direction="left">
              <div className="relative">
                <img
                  src="/gc4.jpg?height=600&width=500"
                  alt="Behind the Camera"
                  className="w-full h-[600px] object-cover image-hover"
                />
                <div className="absolute inset-0 film-grain" />
                <div className="absolute bottom-6 left-6 right-6 bg-black/80 p-4 rounded">
                  <p className="text-white font-playfair italic text-sm">
                    "Every frame is an opportunity to tell a story"
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Content */}
            <div className="space-y-4">
              <ScrollReveal direction="right">
                <h2 className="text-4xl md:text-6xl font-oswald font-bold tracking-wider content-spacing-small">
                  CRAFTING VISUAL STORIES
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <p className="text-xl text-gray-300 font-playfair leading-relaxed element-spacing">
                  With over 5 years of experience, I specialize in creating compelling visual narratives that resonate
                  with audiences and leave lasting impressions.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.4}>
                <p className="text-lg text-gray-400 leading-relaxed element-spacing-large">
                  Every project combines technical expertise with artistic vision, transforming ideas into powerful
                  cinematic experiences that connect with viewers on an emotional level.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.8}>
                <div className="flex flex-col sm:flex-row gap-4 element-spacing-large">
                  <Link
                    href="/about"
                    className="inline-flex items-center px-8 py-4 bg-white text-black font-oswald tracking-wider hover:glow transition-all duration-300"
                    data-cursor-hover
                  >
                    LEARN MORE ABOUT ME
                  </Link>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-oswald tracking-wider hover:bg-white hover:text-black transition-all duration-300"
                    data-cursor-hover
                  >
                    VIEW MY WORK
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={1.0}>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-oswald font-bold mb-1 glow-text">{stat.number}</div>
                      <div className="text-gray-400 font-playfair text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

{/* Full Screen Video Showcase Section */}
<section className="section-clean container-spacing bg-white/5">
    <div className="max-w-7xl mx-auto">
        <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-oswald font-bold text-center content-spacing-small tracking-wider">
                WATCH MY SHOWREEL
            </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
            <p className="text-xl text-gray-300 font-playfair text-center content-spacing max-w-3xl mx-auto">
                Experience the full spectrum of my cinematic work in this comprehensive showreel featuring music videos,
                commercial films, and creative projects.
            </p>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
            <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative bg-gray-900 overflow-hidden group cursor-pointer max-w-6xl mx-auto element-spacing-large"
                style={{ aspectRatio: "21/9" }}
                onClick={() => setIsPlaying(true)}
                data-cursor-hover
            >
                {/* Looping video background */}
                <video
                    src={showcaseVideo.videoUrl}
                    loop
                    muted
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                />

                {/* Play Button Overlay - Only shows on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                    >
                        <Play className="w-12 h-12 text-white ml-1" />
                    </motion.div>
                </div>

                {/* Film Grain Effect */}
                <div className="absolute inset-0 film-grain pointer-events-none" />
            </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.9}>
            <div className="text-center">
                <Link
                    href="/portfolio"
                    className="inline-block px-8 py-4 border-2 border-white text-white font-oswald tracking-wider hover:bg-white hover:text-black transition-all duration-300"
                    data-cursor-hover
                >
                    VIEW FULL PORTFOLIO
                </Link>
            </div>
        </ScrollReveal>
    </div>

    {/* Full Screen Video Player Modal */}
    {isPlaying && (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            onClick={() => setIsPlaying(false)}
        >
            <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="relative w-full h-full"
                onClick={(e) => e.stopPropagation()}
            >
                <video
                    src={showcaseVideo.videoUrl}
                    controls
                    autoPlay
                    loop
                    muted={isMuted}
                    className="w-full h-full object-cover"
                />

                {/* Video Controls */}
                <div className="absolute top-6 right-6 flex gap-3">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        onClick={() => setIsMuted(!isMuted)}
                        className="p-4 bg-black/80 rounded-full hover:bg-white hover:text-black transition-colors"
                        data-cursor-hover
                    >
                        {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        onClick={() => setIsPlaying(false)}
                        className="p-4 bg-black/80 rounded-full hover:bg-white hover:text-black transition-colors text-white text-xl font-bold"
                        data-cursor-hover
                    >
                        ✕
                    </motion.button>
                </div>

                {/* Video Info */}
                <div className="absolute bottom-6 left-6 right-6 bg-black/80 p-6 rounded">
                    <h3 className="text-2xl md:text-3xl font-oswald font-bold tracking-wider text-white mb-3">
                        {showcaseVideo.title}
                    </h3>
                    <p className="text-gray-300 font-playfair text-lg">{showcaseVideo.description}</p>
                </div>
            </motion.div>
        </motion.div>
    )}
</section>

      {/* Expertise Section */}
      <section className="section-clean container-spacing">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-oswald font-bold text-center content-spacing-small tracking-wider">
              MY EXPERTISE
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-xl text-gray-300 font-playfair text-center content-spacing max-w-3xl mx-auto">
              Specializing in creating compelling visual narratives across multiple mediums, each project is crafted
              with meticulous attention to detail and artistic vision.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 grid-spacing-clean">
            {expertise.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.2}>
                <motion.div whileHover={{ y: -10 }} className="group" data-cursor-hover>
                  <div className="aspect-[4/3] bg-gray-900 overflow-hidden element-spacing">
                    <img
                      src={item.thumbnail || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover image-hover group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  <h3 className="text-2xl font-oswald font-bold element-spacing tracking-wider group-hover:glow-text transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 font-playfair leading-relaxed">{item.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-clean container-spacing bg-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-oswald font-bold text-center content-spacing tracking-wider">
              MY PROCESS
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-spacing-clean">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Understanding your vision, goals, and creative requirements through detailed consultation.",
              },
              {
                step: "02",
                title: "Concept",
                description:
                  "Developing creative concepts, storyboards, and visual treatments that align with your vision.",
              },
              {
                step: "03",
                title: "Production",
                description: "Professional filming with cutting-edge equipment and cinematic techniques.",
              },
              {
                step: "04",
                title: "Post-Production",
                description: "Expert editing, color grading, and sound design to create the final masterpiece.",
              },
            ].map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center p-6 border border-white/10 hover:border-white/30 transition-all duration-300"
                  data-cursor-hover
                >
                  <div className="text-6xl font-oswald font-bold text-white/20 element-spacing">{item.step}</div>
                  <h3 className="text-xl font-oswald font-bold element-spacing tracking-wider">{item.title}</h3>
                  <p className="text-gray-400 font-playfair leading-relaxed">{item.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-clean container-spacing">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-oswald font-bold content-spacing-small tracking-wider">
              READY TO CREATE SOMETHING EXTRAORDINARY?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-xl text-gray-300 content-spacing font-playfair">
              Let's bring your vision to life with cinematic storytelling that captivates and inspires your audience.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-12 py-4 bg-white text-black font-oswald tracking-wider hover:glow transition-all duration-300"
                data-cursor-hover
              >
                START YOUR PROJECT
              </Link>
              <Link
                href="/services"
                className="inline-block px-12 py-4 border-2 border-white text-white font-oswald tracking-wider hover:bg-white hover:text-black transition-all duration-300"
                data-cursor-hover
              >
                VIEW SERVICES
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
