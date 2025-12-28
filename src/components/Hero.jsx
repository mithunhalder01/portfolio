import profile from "../assets/profile.png";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";


import SocialIcons from "./SocialIcons";


export default function Hero() {
  const skills = [
    { Icon: SiReact, color: "text-cyan-400", radius: 140, duration: 18 },
    { Icon: SiNodedotjs, color: "text-green-400", radius: 190, duration: 26 },
    { Icon: SiTailwindcss, color: "text-sky-400", radius: 240, duration: 34 },
    { Icon: SiJavascript, color: "text-yellow-400", radius: 280, duration: 42 },
    { Icon: SiHtml5, color: "text-orange-500", radius: 320, duration: 50 }, // added
    { Icon: SiCss3, color: "text-blue-500", radius: 360, duration: 58 },    // added
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="-mt-16 z-10 order-2 md:order-1 text-center md:text-left">
          <p className="text-sm tracking-widest text-white/50 mb-3">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I’m{" "}
            <span className="text-cyan-400">Mithun Halder</span>
          </h1>

          <p className="mt-2 text-white/60">
            Full Stack Developer — Noida, India
          </p>

          <p className="mt-6 max-w-lg text-white/60">
            I build fast, scalable and beautiful web applications using modern
            technologies. Clean UI, smooth animations and performance-first
            mindset.
          </p>

          {/* buttons */}
          <div className="flex items-center justify-center md:justify-start gap-4 mt-8">

            <a href="#contact" className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-medium hover:opacity-90 transition">
              Hire Me
            </a>
            <a href="#projects" className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">
              View Projects
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <SocialIcons
        className="flex justify-center md:justify-start gap-3 mt-6 mb-6"
        links={{
            instagram: "https://www.instagram.com/the_mithunhalder/",
            linkedin: "https://www.linkedin.com/in/mithun-halder-946704362/",
            github: "https://github.com/mithunhalder01",
            facebook: "https://www.facebook.com/profile.php?id=61554961905528",
        }}
        />
        </div>

        {/* RIGHT IMAGE + HALF CIRCLE ORBITS */}
       <div className="relative flex justify-center items-center h-[420px] md:h-[520px] order-1 md:order-2">

          {/* HALF CIRCLE ARCS (RIGHT FLOW) */}
          {[160, 220, 280].map((size, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-white/10"
              style={{
                width: size * 2,
                height: size * 2,
                clipPath: "inset(0 50% 0 0)", // RIGHT HALF
                transform: "rotate(90deg)",
              }}
            />
          ))}

          {/* SKILL ORBITS */}
          {skills.map(({ Icon, color, radius, duration }, i) => (
            <motion.div
              key={i}
              className="absolute"
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration,
                ease: "linear",
              }}
              style={{
                width: radius * 2,
                height: radius * 2,
                transform: "rotate(-25deg)",
              }}
            >
              <div
                className="absolute top-1/2 right-0"
                style={{ transform: "translate(50%, -50%)" }}
              >
                <div className="glass p-2 rounded-xl shadow-lg">
                  <Icon size={22} className={color} />
                </div>
              </div>
            </motion.div>
          ))}

          {/* PROFILE CARD */}
          <div className="relative z-20 glass rounded-3xl p-3">
            <img src={profile} 
              alt="Mithun"
              className="w-64 h-80 object-cover rounded-2xl"
              />
          </div>
        </div>
      </div>

    </section>
  );
}
