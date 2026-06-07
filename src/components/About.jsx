
import React from "react";
import GlassCard from "./GlassCard";
// root folder se about.png use karein
const about = "/about.png";
import { motion } from "framer-motion";



export default function About({ profile }) {
  const bio =
    profile?.about ||
    "I’m a web developer specializing in building beautiful, accessible and performant UI. I focus on delivering pixel-perfect designs and seamless front-end experiences using modern tools and best practices.";

  return (
    <section id="about" className="relative py-12 md:py-24 overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl ml-[1rem] mr-[1rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center px-4">

        {/* LEFT: PROFILE CARD */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative"
        >
          <div className="glass rounded-[2rem] p-4 flex justify-center items-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={about}
              alt="Profile"
              className="w-72 h-[400px] object-cover rounded-2xl shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </motion.div>

        {/* RIGHT: CONTENT */}
        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}>
          <p className="text-xs uppercase tracking-widest text-cyan-300 font-medium">About us</p>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold leading-tight">
            I AM AVAILABLE FOR <span className="text-white/80">Web</span> <span className="text-cyan-300">Development</span> PROJECTS
          </h2>

          <p className="mt-4 text-white/60 max-w-xl">{bio}</p>

          <div className="mt-6 flex flex-wrap gap-4">
            <GlassCard className="px-5 py-4">
              <p className="text-2xl font-bold text-cyan-300">280+</p>
              <p className="text-sm text-white/60">Google Reviews</p>
            </GlassCard>

            <GlassCard className="px-5 py-4">
              <p className="text-2xl font-bold text-cyan-300">2+</p>
              <p className="text-sm text-white/60">Years Experience</p>
            </GlassCard>

            <GlassCard className="px-5 py-4">
              <p className="text-2xl font-bold text-cyan-300">49+</p>
              <p className="text-sm text-white/60">Award Winning</p>
            </GlassCard>
          </div>

          <div className="mt-6">
            <motion.a
              href="https://wa.me/916399519654?text=Hi%20Mithun,%20I%20want%20to%20discuss%20a%20web%20development%20project."
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 rounded-full bg-cyan-400 text-black font-medium hover:opacity-90 transition"
            >
              Get in touch →
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
