import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Startup Founder",
    text: "Mithun delivered a clean, fast and beautiful product. The UI and performance both were top-notch.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&q=80",
  },
  {
    name: "Ananya Roy",
    role: "Product Manager",
    text: "Animations, UX and performance were exactly what we wanted. Very professional work.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&q=80",
  },
  {
    name: "Amit Verma",
    role: "Agency Owner",
    text: "Clean code, fast delivery and great communication. Highly recommended for any web project.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",
  },
  {
    name: "Priya Nair",
    role: "E-Commerce Brand",
    text: "He understood our brand vision and turned it into a stunning website. Exceeded expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=120&q=80",
  },
  {
    name: "Siddharth Joshi",
    role: "Tech Lead",
    text: "Super responsive, great attention to detail. The final product was pixel-perfect.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&q=80",
  },
];

const AUTOPLAY_DELAY = 4500;
const len = testimonials.length;
const wrap = (i) => ((i % len) + len) % len;

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const dragStartX = useRef(null);

  const prev = () => setActive((p) => wrap(p - 1));
  const next = () => setActive((p) => wrap(p + 1));

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, AUTOPLAY_DELAY);
    return () => clearInterval(t);
  }, [paused, active]);

  const onDragStart = (e) => {
    dragStartX.current = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    setPaused(true);
  };
  const onDragEnd = (e) => {
    const endX = e.type === "touchend" ? e.changedTouches[0].clientX : e.clientX;
    const diff = dragStartX.current - endX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    setPaused(false);
  };

  // Always show 3 cards: left, center, right
  const slots = [wrap(active - 1), active, wrap(active + 1)];

  return (
    <section
      className="relative mt-28 pb-8 overflow-hidden px-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-cyan-400 text-xs tracking-[0.25em] uppercase font-medium">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-white mt-2">
          What Clients Say
        </h2>
      </div>

      {/* Cards row */}
      <div
        className="relative flex items-center justify-center gap-3 md:gap-5"
        onMouseDown={onDragStart}
        onMouseUp={onDragEnd}
        onTouchStart={onDragStart}
        onTouchEnd={onDragEnd}
      >
        {/* Prev */}
        <button
          onClick={prev}
          className="shrink-0 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition hover:scale-110"
        >
          <FiChevronLeft size={18} />
        </button>

        {/* 3 cards always visible */}
        <div className="flex gap-3 md:gap-5 w-full max-w-5xl">
          {slots.map((idx, pos) => {
            const t = testimonials[idx];
            const isCenter = pos === 1;

            return (
              <motion.div
                key={idx}
                layout
                animate={{
                  scale: isCenter ? 1 : 0.93,
                  opacity: isCenter ? 1 : 0.5,
                  y: isCenter ? 0 : 14,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
                onClick={() => !isCenter && setActive(idx)}
                className={`flex-1 min-w-0 rounded-3xl p-5 md:p-8 cursor-pointer select-none transition-colors duration-300
                  ${isCenter
                    ? "bg-white/10 backdrop-blur-md border border-cyan-400/25 shadow-[0_0_40px_rgba(34,211,238,0.07)]"
                    : "bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/8"
                  }`}
              >
                {/* Quote mark */}
                <div className="text-cyan-400/25 text-6xl leading-none font-serif -mt-2 mb-1">
                  "
                </div>

                {/* Review text */}
                <p className={`text-sm leading-relaxed mb-5 ${
                  isCenter ? "text-white/85 md:text-base" : "text-white/45 line-clamp-4"
                }`}>
                  {t.text}
                </p>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FiStar
                      key={i}
                      size={13}
                      className={i < t.rating
                        ? isCenter ? "text-cyan-400 fill-cyan-400" : "text-cyan-400/40 fill-cyan-400/40"
                        : "text-white/10"
                      }
                    />
                  ))}
                </div>

                <div className="w-8 h-px bg-white/15 mb-4" />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    draggable={false}
                    className={`w-10 h-10 rounded-full object-cover ring-2 ${
                      isCenter ? "ring-cyan-400/50" : "ring-white/10"
                    }`}
                  />
                  <div>
                    <h4 className={`font-semibold text-sm ${isCenter ? "text-white" : "text-white/50"}`}>
                      {t.name}
                    </h4>
                    <p className={`text-xs mt-0.5 tracking-wide ${
                      isCenter ? "text-cyan-400/80" : "text-white/30"
                    }`}>
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Next */}
        <button
          onClick={next}
          className="shrink-0 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition hover:scale-110"
        >
          <FiChevronRight size={18} />
        </button>
      </div>

      {/* Progress bar */}
      <div className="mt-8 max-w-xs mx-auto h-px bg-white/10 rounded-full overflow-hidden">
        <motion.div
          key={active}
          className="h-full bg-cyan-400/60 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: AUTOPLAY_DELAY / 1000, ease: "linear" }}
        />
      </div>

      {/* Dots */}
      <div className="mt-5 flex justify-center gap-2.5">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`rounded-full transition-all duration-300 ${
              active === i ? "w-6 h-2 bg-cyan-400" : "w-2 h-2 bg-white/25 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
