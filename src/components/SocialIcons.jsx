import React from "react";
import { FaInstagram, FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";

export default function SocialIcons({
  className = "flex gap-3 mt-4",
  size = 16,
  links = {
    instagram: "#",
    linkedin: "#",
    github: "#",
    facebook: "#",
  },
}) {
  return (
    <div className={className}>
      <a
        href={links.instagram}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-pink-400"
      >
        <FaInstagram size={size} />
      </a>

      <a
        href={links.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-blue-400"
      >
        <FaLinkedinIn size={size} />
      </a>

      <a
        href={links.github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white"
      >
        <FaGithub size={size} />
      </a>

      <a
        href={links.facebook}
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
        className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-blue-600"
      >
        <FaFacebookF size={size} />
      </a>
    </div>
  );
}
