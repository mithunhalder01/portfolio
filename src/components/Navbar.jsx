import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

export default function Navbar() {
  const links = ["About", "Skills", "Projects", "Experience", "Contact"];
  const [open, setOpen] = useState(false);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-4 left-0 w-full z-50 px-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-sm font-semibold">
              MH
            </div>
            <span className="text-sm font-medium text-white">
              Mithun
            </span>
          </div>

          {/* DESKTOP LINKS */}
          <nav className="hidden md:flex gap-10 text-sm text-white/70">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="relative group hover:text-white transition"
              >
                {link}
                <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-cyan-400 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* RIGHT SOCIALS */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-5 mr-2 text-white/70">
              <a href="https://github.com/mithunhalder01" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">
                <FiGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/mithun-halder-946704362/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">
                <FiLinkedin size={18} />
              </a>
              <a href="https://www.instagram.com/mithun_webdev/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">
                <FiInstagram size={18} />
              </a>
            </div>

            <div className="hidden sm:block w-px h-6 bg-white/10 mx-2" />

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Open Menu"
              className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
            >
              <FiMenu className="text-white text-lg" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />

            {/* MOBILE MENU */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.35 }}
              role="dialog"
              aria-modal="true"
              className="fixed top-6 left-4 right-4 z-50 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-white font-medium">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close Menu"
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20"
                >
                  <FiX className="text-white text-lg" />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {links.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 transition text-white"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
