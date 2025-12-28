import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Startup Founder",
    text:
      "Mithun delivered a clean, fast and beautiful product. The UI and performance both were top-notch.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
  {
    name: "Ananya Roy",
    role: "Product Manager",
    text:
      "Animations, UX and performance were exactly what we wanted. Very professional work.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
  {
    name: "Amit Verma",
    role: "Agency Owner",
    text:
      "Clean code, fast delivery and great communication. Highly recommended.",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    name: "Amit Verma",
    role: "Agency Owner",
    text:
      "Clean code, fast delivery and great communication. Highly recommended.",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    name: "Amit Verma",
    role: "Agency Owner",
    text:
      "Clean code, fast delivery and great communication. Highly recommended.",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((p) => (p + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative mt-32 overflow-hidden px-4">
      {/* heading */}
      <div className="text-center mb-12">
        <p className="text-cyan-400 text-sm tracking-widest uppercase">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-white mt-2">
          What Clients Say
        </h2>
      </div>

      {/* slider wrapper */}
      <div className="relative flex justify-center items-center h-[340px] md:h-[380px]">
        {testimonials.map((t, i) => {
          const offset = i - active;

          return (
            <motion.div
              key={i}
              className="absolute w-full max-w-[360px] glass rounded-3xl p-7 md:p-8"
              animate={{
                x:
                  typeof window !== "undefined" && window.innerWidth < 768
                    ? 0
                    : offset * 380,
                scale:
                  typeof window !== "undefined" && window.innerWidth < 768
                    ? 1
                    : offset === 0
                    ? 1
                    : 0.9,
                opacity:
                  typeof window !== "undefined" && window.innerWidth < 768
                    ? active === i
                      ? 1
                      : 0
                    : offset === 0
                    ? 1
                    : 0.6,
                filter:
                  typeof window !== "undefined" && window.innerWidth < 768
                    ? "blur(0px)"
                    : offset === 0
                    ? "blur(0px)"
                    : "blur(4px)",
                zIndex: offset === 0 ? 10 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 22,
              }}
            >
              {/* quote */}
              <div className="text-white/60 text-4xl mb-2">“</div>

              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
                {t.text}
              </p>

              {/* user */}
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold text-sm md:text-base">
                    {t.name}
                  </h4>
                  <p className="text-xs md:text-sm text-white/60">
                    {t.role}
                  </p>
                </div>
              </div>

              {/* stars */}
              <div className="flex gap-1 text-cyan-400 mt-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FiStar key={i} />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* dots */}
      <div className="mt-8 flex justify-center gap-3">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-2.5 h-2.5 rounded-full transition ${
              active === i
                ? "bg-cyan-400 scale-110"
                : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
