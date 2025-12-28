import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function ProjectCard({
  title,
  tags = [],
  image = null, // allow null so Unsplash fallback can be used
  images = null, // optional array of image URLs
  initialImageIndex = 0,
  link = "#",
  repo = "#",
  unsplashQuery = null, // allow null so we can derive from title/tags
}) {
  // derive a sensible query: explicit unsplashQuery > first tag > title > default
  const query =
    unsplashQuery ||
    (tags && tags.length ? tags[0] : null) ||
    (title ? title.split(" ")[0] : null) ||
    "technology";

  // image index state (only used when images array is provided)
  const [currentIndex, setCurrentIndex] = useState(initialImageIndex || 0);

  // choose image source:
  // priority: images array (with currentIndex) > single image prop > Unsplash fallback
  const imageSrc =
    images && images.length
      ? images[currentIndex % images.length]
      : image || `https://source.unsplash.com/800x600/?${encodeURIComponent(query)}`;

  // local src state + effect: use this so we can fallback on error and update when prop changes
  const [currentSrc, setCurrentSrc] = useState(imageSrc);
  const [errored, setErrored] = useState(false);

  React.useEffect(() => {
    setCurrentSrc(imageSrc);
    setErrored(false);
  }, [imageSrc]);

  // helpers to cycle images
  const showControls = images && images.length > 1;
  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  };
  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((i) => (i + 1) % images.length);
  };

  return (
    <motion.div whileHover={{ y: -6 }} className="group">
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={currentSrc}
          alt={`${title} project`}
          loading="lazy"
          onError={() => {
            if (!errored) {
              setErrored(true);
              setCurrentSrc(`https://source.unsplash.com/800x600/?${encodeURIComponent(query)}`);
            }
          }}
          className="w-full h-40 sm:h-44 md:h-44 lg:h-52 object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* dark overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-opacity duration-300" />

        {/* icons (visible on mobile; hidden on md+ until hover) */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 md:w-9 md:h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
              aria-label="View repo"
            >
              <FiGithub className="text-white" />
            </a>
          )}

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 md:w-9 md:h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
              aria-label="Open project"
            >
              <FiExternalLink className="text-white" />
            </a>
          )}
        </div>

        {/* prev / next controls for images (show when multiple images provided) */}
        {showControls && (
          <>
            <button
              onClick={prevImage}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 md:w-8 md:h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
            >
              <FiChevronLeft className="text-white" />
            </button>

            <button
              onClick={nextImage}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 md:w-8 md:h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
            >
              <FiChevronRight className="text-white" />
            </button>
          </>
        )}
      </div>

      <div className="mt-3">
        <h4 className="font-semibold text-white text-sm md:text-base">{title}</h4>
        <div className="mt-2 flex flex-wrap gap-2 text-xs">
          {tags.map((t) => (
            <span key={t} className="glass px-2 py-1 text-[11px] md:text-xs rounded-full">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
