import React, { useState } from 'react'
import { projects } from '../data/data'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  // Agar showAll false hai toh sirf pehle 4 projects dikhayenge
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Polish Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10" />

      <div className="section-max mx-auto">
        <h3 className="text-xs sm:text-sm uppercase tracking-[0.3em] text-cyan-400 font-bold mb-8 sm:mb-12 text-center">
          Projects
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 lg:gap-6">
          {displayedProjects.map((p) => (
            <motion.div 
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              key={p.id} 
              className="group relative h-full flex flex-col bg-white/[0.03] backdrop-blur-xl border border-white/10 p-5 rounded-3xl hover:bg-white/[0.07] hover:border-cyan-500/50 hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.3)] transition-all duration-500"
            >
                <ProjectCard
                  title={p.title}
                  tags={p.tags}
                  image={p.image}
                  link={p.link}
                  repo={p.repo}
                  className="w-full"
                />
                <div className="mt-4 text-xs sm:text-sm md:text-base text-white/60 leading-relaxed line-clamp-3">
                  {p.desc}
                </div>
            </motion.div>
          ))}
        </div>

        {/* View All / Show Less Button */}
        {projects.length > 4 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-all duration-300 font-medium"
            >
              {showAll ? 'Show Less' : 'View All Projects'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
