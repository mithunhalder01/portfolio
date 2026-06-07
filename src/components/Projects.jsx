import React, { useState } from 'react'
import { projects } from '../data/data'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  // Agar showAll false hai toh sirf pehle 4 projects dikhayenge
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="py-6 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="section-max mx-auto">
        <h3 className="text-xs sm:text-sm uppercase tracking-widest text-cyan-300 font-medium mb-4 sm:mb-6">
          Projects
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 lg:gap-6">
          {displayedProjects.map((p) => (
            // ✅ Sirf plain div — animation ProjectCard.jsx ke andar handle ho raha hai
            <div key={p.id} className="block">
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
            </div>
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
