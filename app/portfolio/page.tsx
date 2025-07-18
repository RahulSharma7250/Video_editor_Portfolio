"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, X, ExternalLink, Eye, Award, Calendar } from "lucide-react"

const categories = ["All", "Music", "Commercial", "Creative"]

const projects = [
  {
    id: 1,
    title: "NICK L - MINDSET - FT EAVIL",
    category: "Music",
    thumbnail: "https://img.youtube.com/vi/fTk173-q7A8/hqdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=fTk173-q7A8",
    awards: [],
    client: "NICK L",
  },
  {
    id: 2,
    title: "BHIM KANYA",
    category: "Commercial",
    thumbnail: "https://img.youtube.com/vi/vZtPLjHztAU/hqdefault.jpg",
    youtubeUrl: "https://youtu.be/vZtPLjHztAU",
    awards: [],
    client: "Ms Prachuu",
  },
  {
    id: 3,
    title: "GANGSTER",
    category: "Creative",
    thumbnail: "https://img.youtube.com/vi/t2bQppaznmM/maxresdefault.jpg",
    youtubeUrl: "https://youtu.be/t2bQppaznmM",
    awards: [],
    client: "Y-Kar",
  },
  {
    id: 4,
    title: "KHAMBIR",
    category: "Music",
    thumbnail: "https://img.youtube.com/vi/g_o9Iw7IKiw/maxresdefault.jpg",
    youtubeUrl: "https://youtu.be/g_o9Iw7IKiw",
    awards: [],
    client: "ASHSTAR",
  },
  {
    id: 5,
    title: "END TAK",
    category: "Creative",
    thumbnail: "https://img.youtube.com/vi/Ng7GI2DuXQs/maxresdefault.jpg",
    youtubeUrl: "https://youtu.be/Ng7GI2DuXQs",
    awards: [],
    client: "Y-Kar",
  },
  {
    id: 6,
    title: "PRIME LOCATION",
    category: "Music",
    thumbnail: "https://img.youtube.com/vi/IOWhJYV937c/maxresdefault.jpg",
    youtubeUrl: "https://youtu.be/IOWhJYV937c",
    awards: [],
    client: "AANDHI_DHUN",
  },
  {
    id: 7,
    title: "KOLAMBAS",
    category: "Music",
    thumbnail: "https://img.youtube.com/vi/GO6xuDCa4ig/maxresdefault.jpg",
    youtubeUrl: "https://youtu.be/GO6xuDCa4ig",
    awards: [],
    client: "NP SPOTLIGHT ENTERTAINMENT",
  },
  {
    id: 8,
    title: "Late Night Trip",
    category: "Creative",
    thumbnail: "https://img.youtube.com/vi/oyCgtToYdIc/hqdefault.jpg",
    youtubeUrl: "https://youtu.be/oyCgtToYdIc",
    awards: [],
    client: "ROHMIX",
  },
  {
    id: 9,
    title: "Punyacha Mulga",
    category: "Commercial",
    thumbnail: "https://img.youtube.com/vi/QGVks2y9JWw/hqdefault.jpg",
    youtubeUrl: "https://youtu.be/QGVks2y9JWw",
    awards: [],
    client: "ROHMIX",
  },
  {
    id: 10,
    title: "KYA TRIP",
    category: "Creative",
    thumbnail: "https://img.youtube.com/vi/ZGsopcNNcAs/maxresdefault.jpg",
    youtubeUrl: "https://youtu.be/ZGsopcNNcAs",
    awards: ["Best Experimental Film"],
    client: "YOUNG BIRD",
  },
  {
    id: 11,
    title: "WAGHIN",
    category: "Commercial",
    thumbnail: "https://img.youtube.com/vi/NEA0TSHLUNM/hqdefault.jpg",
    youtubeUrl: "https://youtu.be/NEA0TSHLUNM",
    awards: [],
    client: "Ms Prachuu",
  },
]

const featuredProjects = projects.slice(0, 3)

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  type Project = typeof projects[number]
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  const handleProjectClick = (project: Project) => {
    if (project.youtubeUrl) {
      window.open(project.youtubeUrl, "_blank")
    } else {
      setSelectedProject(project)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Header */}
      <section className="py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold tracking-wider mb-8"
          >
            PORTFOLIO
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            A curated collection of cinematic stories, each crafted with passion and precision to capture the essence
            of every moment and create lasting impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="flex items-center gap-2 px-4 py-2 border border-white/30">
              <Eye className="w-4 h-4" />
              <span className="text-sm tracking-wider">10M+ VIEWS</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 border border-white/30">
              <Play className="w-4 h-4" />
              <span className="text-sm tracking-wider">400+ PROJECTS</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 md:px-12 lg:px-16 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-wider"
          >
            FEATURED WORK
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative aspect-video bg-gray-900 overflow-hidden mb-6">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:grayscale transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {project.youtubeUrl ? (
                      <ExternalLink className="w-16 h-16 text-white" />
                    ) : (
                      <Play className="w-16 h-16 text-white" />
                    )}
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 text-xs tracking-wider">
                    FEATURED
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/80 text-xs tracking-wider">
                    {project.category}
                  </div>
                  {project.youtubeUrl && (
                    <div className="absolute bottom-4 right-4 px-2 py-1 bg-red-600 text-xs tracking-wider">
                      YOUTUBE
                    </div>
                  )}
                </div>

                <h3 className="text-2xl font-bold mb-2 tracking-wider group-hover:text-white transition-all duration-300">
                  {project.title}
                </h3>

                {project.awards.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.awards.map((award, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 text-xs tracking-wider">
                        {award}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="px-6 md:px-12 lg:px-16 mb-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 tracking-wider transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-white text-black"
                    : "border border-white/30 text-white hover:border-white/60"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* All Projects Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="px-6 md:px-12 lg:px-16 pb-20"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="relative aspect-video bg-gray-900 overflow-hidden mb-4">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:grayscale transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      {project.youtubeUrl ? (
                        <ExternalLink className="w-12 h-12 text-white" />
                      ) : (
                        <Play className="w-12 h-12 text-white" />
                      )}
                    </div>
                    <div className="absolute top-2 right-2 px-2 py-1 bg-black/80 text-xs tracking-wider">
                      {project.category}
                    </div>
                    {project.youtubeUrl && (
                      <div className="absolute top-2 left-2 px-2 py-1 bg-red-600 text-xs tracking-wider">
                        YT
                      </div>
                    )}
                  </div>

                  <h3 className="text-lg font-bold mb-1 tracking-wider group-hover:text-white transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-xs">{project.client}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-black border border-white/20 max-w-5xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/80 rounded-full hover:bg-white hover:text-black transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* <div className="aspect-video bg-gray-900">
                  <img
                    src={selectedProject.thumbnail}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div> */}

                <div className="p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      {/* <div className="flex items-center gap-4 mb-4">
                        <h2 className="text-3xl font-bold tracking-wider">{selectedProject.title}</h2>
                        <span className="px-3 py-1 bg-white/10 text-sm tracking-wider">
                          {selectedProject.category}
                        </span>
                      </div> */}

                      {selectedProject.awards.length > 0 && (
                        <div className="mb-6">
                          <h4 className="text-sm tracking-wider text-gray-400 mb-3">
                            AWARDS & RECOGNITION
                          </h4>
                          {/* <div className="flex flex-wrap gap-2">
                            {selectedProject.awards.map((award, idx) => (
                              <span key={idx} className="px-3 py-1 bg-white/10 text-sm tracking-wider">
                                <Award className="w-4 h-4 inline mr-2" />
                                {award}
                              </span>
                            ))}
                          </div> */}
                        </div>
                      )}

                      <div className="flex gap-4">
                        <button
                          className="px-6 py-3 bg-white text-black tracking-wider hover:bg-white/90 transition-all duration-300"
                        >
                          WATCH FULL VIDEO
                        </button>
                        <button
                          className="px-6 py-3 border border-white/30 tracking-wider hover:bg-white hover:text-black transition-all duration-300"
                        >
                          DOWNLOAD PROJECT
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}