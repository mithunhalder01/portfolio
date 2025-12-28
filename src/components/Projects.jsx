import React from 'react'
import { projects } from '../data/data'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="py-6 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="section-max mx-auto">
        <h3 className="text-xs sm:text-sm uppercase tracking-widest text-cyan-300 font-medium mb-4 sm:mb-6">
          Projects
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 lg:gap-6">
          {projects.map((p) => (
            <motion.div 
              key={p.id} 
              whileHover={{ y: -6 }} 
              className="block"
            >
              <div className="h-full flex flex-col bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl hover:bg-white/20 transition duration-300">
                <ProjectCard
                  title={p.title}
                  tags={p.tags}
                  image={p.image}
                  link={p.link}
                  repo={p.repo}
                  className="w-full"
                />
                <div className="mt-2 text-xs sm:text-sm md:text-base text-white/80">
                  {p.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
