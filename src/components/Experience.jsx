import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";

const experiences = [
  {
    role: "Full Stack Web Developer",
    company: "Freelance",
    duration: "2023 – Present",
    location: "Remote",
    points: [
      "Built modern, responsive web apps using React, Tailwind and Firebase.",
      "Created clean UI/UX with glassmorphism and smooth animations.",
      "Worked directly with clients to convert ideas into production-ready products.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Startup Company",
    duration: "2022 – 2023",
    location: "India",
    points: [
      "Developed reusable React components with clean architecture.",
      "Improved page performance and accessibility.",
      "Collaborated with designers and backend developers.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mt-40 max-w-6xl mx-auto px-4 sm:px-6">
      {/* heading */}
      <div className="text-center mb-16">
        <p className="text-cyan-400 uppercase tracking-widest text-sm">
          Experience
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-white mt-2">
          Work & Journey
        </h2>
      </div>

      <div className="relative">
        {/* vertical line left side for mobile and center for desktop */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute left-6 md:left-1/2 top-0 w-px bg-gradient-to-b from-cyan-400/0 via-cyan-400/60 to-cyan-400/0"
        />

        <div className="space-y-16">
          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`relative w-full md:w-1/2 ${
                  isLeft ? "md:pr-14 md:mr-auto" : "md:pl-14 md:ml-auto"
                }`}
              >
                {/* glow dot */}
                <motion.span
                  animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className={`absolute top-8 left-6 md:hidden w-6 h-6 rounded-full bg-cyan-400/50 blur-[2px]`}
                />
                <motion.span
                  animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className={`hidden md:block absolute top-7 ${
                    isLeft ? "-right-[14px]" : "-left-[14px]"
                  } w-7 h-7 rounded-full bg-cyan-400/90 blur-[2px]`}
                />

                {/* inner dot */}
                <span
                  className={`absolute top-8 left-6 md:hidden w-4 h-4 rounded-full bg-cyan-400`}
                />
                <span
                  className={`hidden md:block absolute top-8 ${
                    isLeft ? "-right-[10px]" : "-left-[10px]"
                  } w-5 h-5 rounded-full bg-cyan-400`}
                />

                {/* card */}
                <div className="glass rounded-2xl p-6 ml-auto w-[90%] sm:w-[70%] md:w-full">
                  <div className="flex items-center gap-3 mb-3">
                    <FiBriefcase className="text-cyan-400" />
                    <h3 className="text-lg font-semibold text-white">
                      {exp.role}
                    </h3>
                  </div>

                  <p className="text-white/70 text-sm">
                    {exp.company} • {exp.location}
                  </p>

                  <p className="text-cyan-400 text-xs mt-1">{exp.duration}</p>

                  <ul className="mt-4 space-y-2 text-white/70 text-sm list-disc list-inside">
                    {exp.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
