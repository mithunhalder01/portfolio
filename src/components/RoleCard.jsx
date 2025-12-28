import React from "react";
import { SiReact, SiTailwindcss, SiNodedotjs } from "react-icons/si";

export default function RoleCard() {
  return (
    <div className="max-w-7xl mx-auto mt-8">
      <div className="glass border border-cyan-400/10 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <p className="text-xs uppercase tracking-widest text-cyan-300 font-medium">Role</p>
          <h3 className="mt-2 text-2xl md:text-3xl font-bold">Web Developer</h3>
          <p className="mt-2 text-white/60 max-w-xl">
            I build responsive, performant and accessible web applications using
            modern tools and best practices — React, Tailwind, Node.js and more.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-2 items-center">
            <div className="glass p-2 rounded-md">
              <SiReact className="text-cyan-400" size={20} />
            </div>
            <div className="glass p-2 rounded-md">
              <SiTailwindcss className="text-sky-400" size={20} />
            </div>
            <div className="glass p-2 rounded-md">
              <SiNodedotjs className="text-green-400" size={20} />
            </div>
          </div>

          <button className="px-5 py-2 rounded-lg bg-cyan-400 text-black font-medium hover:opacity-90 transition">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}
