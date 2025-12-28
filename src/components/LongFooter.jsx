import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiArrowUpRight,
  FiInstagram,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative mt-32 px-4">
      {/* glass card */}
      <div className="mx-auto max-w-7xl rounded-3xl glass p-10 md:p-14">
        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Mithun<span className="text-cyan-400">.</span>
            </h3>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Full Stack Developer focused on building fast, scalable and
              aesthetic web experiences with modern technologies.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/70">
              {["About", "Skills", "Projects", "Experience", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-cyan-400 transition"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services / Skills */}
          <div>
            <h4 className="text-white font-semibold mb-4">What I Do</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>Full Stack Development</li>
              <li>Frontend UI / UX</li>
              <li>Backend & APIs</li>
              <li>Performance Optimization</li>
              <li>Automation & Tools</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Let’s Connect</h4>

            <a
              href="mailto:mithunhalder01@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-cyan-400 transition"
            >
              <FiMail /> mithunhaldar7500@gmail.com
            </a>

            {/* Social */}
            <div className="mt-6 flex gap-4">
              <Social
                href="https://github.com/mithunhalder01"
                icon={<FiGithub />}
              />
              <Social
                href="https://www.linkedin.com/in/mithun-halder-946704362/"
                icon={<FiLinkedin />}
              />
              <Social
                href="https://www.instagram.com/the_mithunhalder/"
                icon={<FiInstagram />}
              />
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2 text-sm font-medium text-black hover:bg-cyan-400 transition"
            >
              Hire Me <FiArrowUpRight />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white/60">
          <p>© {new Date().getFullYear()} Mithun Halder. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Persnol Portfolio</p>
        </div>
      </div>
    </footer>
  );
}

/* social icon component */
function Social({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
    >
      {icon}
    </a>
  );
}
