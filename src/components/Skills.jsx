import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiFirebase } from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact, level: 90 },
  { name: "JavaScript", icon: FaJs, level: 85 },
  { name: "Node.js", icon: FaNodeJs, level: 75 },
  { name: "HTML5", icon: FaHtml5, level: 95 },
  { name: "CSS3", icon: FaCss3Alt, level: 90 },
  { name: "Tailwind", icon: SiTailwindcss, level: 90 },
  { name: "Firebase", icon: SiFirebase, level: 70 },
  { name: "Git", icon: FaGitAlt, level: 80 },
];

export default function Skills() {
  return (
    <section id="skills" className="mt-40 max-w-6xl mx-auto px-4">
      {/* heading */}
      <div className="text-center mb-14">
        <p className="text-cyan-400 uppercase tracking-widest text-sm">
          Skills
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-white mt-2">
          Technologies I Work With
        </h2>
        <p className="text-white/60 max-w-xl mx-auto mt-4">
          Tools & technologies I use to build fast, scalable and modern web
          applications.
        </p>
      </div>

      {/* grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="glass rounded-2xl p-6 group relative overflow-hidden"
            >
              {/* glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-cyan-400/20 to-transparent" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <Icon className="text-4xl text-cyan-400 mb-4" />
                <h4 className="text-white font-medium">
                  {skill.name}
                </h4>

                {/* progress bar */}
                <div className="w-full mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8 }}
                    className="h-full bg-cyan-400 rounded-full"
                  />
                </div>

                <span className="text-xs text-white/50 mt-2">
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
