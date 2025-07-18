"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Award, Camera, Film, Users, Play, Zap, Eye, Heart } from "lucide-react"

const timeline = [

  { year: "2020", event: "Started freelance videography, providing commercial video services to local businesses and artists." },
  { year: "2021", event: "Directed and edited short films and music videos, building a signature cinematic style." },
  { year: "2022", event: "Recognized for standout cinematography in local creative circles; handled projects for mid-size Indian brands." },
  { year: "2023", event: "International recognition and award for Best Cinematography" },
  { year: "2024", event: "Established full-service creative studio with cutting-edge equipment" },
]

const stats = [
  { icon: Camera, number: "400+", label: "Projects Completed" },
  { icon: Users, number: "350+", label: "Happy Clients" },
  // { icon: Award, number: "15+", label: "Awards Won" },
  { icon: Film, number: "5+", label: "Years Experience" },
]

const values = [
  {
    icon: Eye,
    title: "Vision",
    description:
      "Every project begins with a clear vision that guides the creative process from concept to completion.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Genuine passion for storytelling drives every frame, ensuring authentic and compelling narratives.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Constantly pushing creative boundaries with cutting-edge techniques and fresh perspectives.",
  },
]

const equipment = [
,
  "Sony FX Series Cameras",
  "Professional Drone Fleet",
  "High-End Audio Equipment",
  "Color Grading Suites",
  "Motion Graphics Workstations",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <ScrollReveal direction="left">
              <div className="relative">
                <img
                  src="/gc3.jpg?height=600&width=500"
                  alt="Videographer Portrait"
                  className="w-full h-[600px] object-cover grayscale-hover"
                />
                <div className="absolute inset-0 film-grain" />
                {/* <div className="absolute bottom-6 left-6 right-6 bg-black/80 p-4 rounded">
                  <p className="text-white font-playfair italic">
                    "Creating visual stories that resonate with the soul"
                  </p>
                </div> */}
              </div>
            </ScrollReveal>

            {/* Right: Content */}
            <div className="space-y-8">
              <ScrollReveal direction="right">
                <h1 className="text-5xl md:text-7xl font-oswald font-bold tracking-wider mb-6">ABOUT ME</h1>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <p className="text-xl text-gray-300 font-playfair leading-relaxed">
                  I'm a passionate visual storyteller dedicated to capturing life's most compelling moments through
                  cinematic artistry. With over 5 years of experience in the industry, I specialize in creating
                  emotionally resonant narratives that connect with audiences on a deeper level.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.4}>
                <p className="text-lg text-gray-400 leading-relaxed">
                  My journey began with a simple camera and an insatiable curiosity for storytelling. Today, I work with
                  artists, brands, and creative visionaries to transform concepts into powerful visual experiences that
                  transcend ordinary documentation.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.6}>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Every project is an opportunity to push creative boundaries, explore new techniques, and craft
                  something truly extraordinary. I believe in the power of collaboration and the magic that happens when
                  technical expertise meets artistic vision.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.8}>
                <div className="flex flex-wrap gap-4">
                  {[
                    "Cinematography",
                    "Color Grading",
                    "Motion Graphics",
                    "Sound Design",
                    "Creative Direction",
                    "Post-Production",
                  ].map((skill, index) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 border border-white/30 text-sm font-oswald tracking-wider hover:border-white/60 transition-all duration-300"
                      data-cursor-hover
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 md:px-12 lg:px-16 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-center mb-16 tracking-wider">CORE VALUES</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
                  data-cursor-hover
                >
                  <value.icon className="w-12 h-12 mx-auto mb-6 text-white" />
                  <h3 className="text-2xl font-oswald font-bold mb-4 tracking-wider">{value.title}</h3>
                  <p className="text-gray-400 font-playfair leading-relaxed">{value.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-center mb-16 tracking-wider">
              BY THE NUMBERS
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
                  data-cursor-hover
                >
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-white" />
                  <div className="text-4xl font-oswald font-bold mb-2 glow-text">{stat.number}</div>
                  <div className="text-gray-400 font-playfair">{stat.label}</div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 md:px-12 lg:px-16 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-center mb-16 tracking-wider">MY JOURNEY</h2>
          </ScrollReveal>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/30" />

            {timeline.map((item, index) => (
              <ScrollReveal key={item.year} delay={index * 0.1}>
                <motion.div whileHover={{ x: 10 }} className="relative flex items-start mb-12">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-white rounded-full border-4 border-black mt-2" />

                  {/* Content */}
                  <div className="ml-20">
                    <div className="text-2xl font-oswald font-bold text-white mb-2">{item.year}</div>
                    <div className="text-lg text-gray-300 font-playfair leading-relaxed">{item.event}</div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-center mb-8 tracking-wider">
              PROFESSIONAL EQUIPMENT
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-xl text-gray-300 font-playfair text-center mb-16 max-w-3xl mx-auto">
              State-of-the-art equipment ensures every project meets the highest standards of cinematic quality and
              technical excellence.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((item, index) => (
              <ScrollReveal key={item} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center"
                  data-cursor-hover
                >
                  <Camera className="w-8 h-8 mx-auto mb-4 text-white/60" />
                  <p className="font-oswald tracking-wider text-sm">{item}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6 md:px-12 lg:px-16 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-12 tracking-wider">MY PHILOSOPHY</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <blockquote className="text-2xl md:text-3xl font-playfair italic text-gray-300 leading-relaxed mb-8">
              "Every frame tells a story, every cut reveals emotion, and every project is an opportunity to create
              something that will be treasured forever."
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
              I believe in the power of authentic storytelling. My approach combines technical excellence with emotional
              intelligence, ensuring that every project not only looks stunning but also feels genuine and meaningful.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.9}>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              The magic happens in the details – from the perfect lighting setup to the precise timing of a cut. It's
              this attention to detail that transforms good footage into extraordinary cinema.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Behind the Scenes */}
      {/* <section className="py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-center mb-16 tracking-wider">
              BEHIND THE SCENES
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "On Set Direction",
                description: "Guiding talent and crew to capture authentic moments and genuine emotions.",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Post-Production Magic",
                description: "Where raw footage transforms into polished cinematic experiences through expert editing.",
                image: "/placeholder.svg?height=400&width=600",
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.3}>
                <motion.div whileHover={{ scale: 1.02 }} className="relative group cursor-pointer" data-cursor-hover>
                  <div className="aspect-video bg-gray-900 overflow-hidden mb-6">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale-hover"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Play className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-oswald font-bold mb-4 tracking-wider group-hover:glow-text transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 font-playfair leading-relaxed">{item.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  )
}
