import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Generates a live website screenshot URL using Microlink API (free, no API key needed)
function getScreenshotUrl(websiteUrl) {
  if (!websiteUrl || websiteUrl === "#") return null;
  return `https://api.microlink.io/?url=${encodeURIComponent(websiteUrl)}&screenshot=true&meta=false&embed=screenshot.url`;
}

export default function ProjectCard({
  title,
  tags = [],
  image = null,
  images = null,
  initialImageIndex = 0,
  link = "#",
  repo = "#",
  unsplashQuery = null,
}) {
  // Derive fallback Unsplash query
  const query =
    unsplashQuery ||
    (tags && tags.length ? tags[0] : null) ||
    (title ? title.split(" ")[0] : null) ||
    "technology";

  // Image index state (only used when images array is provided)
  const [currentIndex, setCurrentIndex] = useState(initialImageIndex || 0);
  const [screenshotUrl, setScreenshotUrl] = useState(null);
  const [screenshotLoaded, setScreenshotLoaded] = useState(false);
  const [screenshotErrored, setScreenshotErrored] = useState(false);
  const [isLoadingScreenshot, setIsLoadingScreenshot] = useState(false);

  // Auto-fetch screenshot from link if no image is provided
  useEffect(() => {
    // Only fetch screenshot if no manual image is provided
    if (!image && !(images && images.length) && link && link !== "#") {
      setIsLoadingScreenshot(true);
      setScreenshotErrored(false);
      setScreenshotLoaded(false);
      const url = getScreenshotUrl(link);
      setScreenshotUrl(url);
    }
  }, [link, image, images]);

  // Choose image source priority:
  // 1. images array (with currentIndex)
  // 2. single image prop
  // 3. auto screenshot from link (via Microlink)
  // 4. Unsplash fallback
  const manualImageSrc =
    images && images.length
      ? images[currentIndex % images.length]
      : image || null;

  const finalFallback = `https://source.unsplash.com/800x600/?${encodeURIComponent(query)}`;

  // What to actually render as <img> src
  const [displaySrc, setDisplaySrc] = useState(manualImageSrc || finalFallback);
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    if (manualImageSrc) {
      setDisplaySrc(manualImageSrc);
      setErrored(false);
    } else if (screenshotUrl && !screenshotErrored) {
      setDisplaySrc(screenshotUrl);
      setErrored(false);
    } else {
      setDisplaySrc(finalFallback);
      setErrored(false);
    }
  }, [manualImageSrc, screenshotUrl, screenshotErrored]);

  const showControls = images && images.length > 1;
  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  };
  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((i) => (i + 1) % images.length);
  };

  const handleImgError = () => {
    if (!errored) {
      setErrored(true);
      if (!manualImageSrc && screenshotUrl && displaySrc === screenshotUrl) {
        // Screenshot failed, try Unsplash
        setScreenshotErrored(true);
        setDisplaySrc(finalFallback);
      } else {
        setDisplaySrc(finalFallback);
      }
    }
  };

  const handleImgLoad = () => {
    setIsLoadingScreenshot(false);
    setScreenshotLoaded(true);
  };

  // Show loading skeleton while screenshot is being fetched
  const showSkeleton = isLoadingScreenshot && !screenshotLoaded && !manualImageSrc && !errored;

  return (
    <motion.div whileHover={{ y: -6 }} className="group">
      <div className="relative overflow-hidden rounded-2xl">
        {/* Loading skeleton shown while screenshot loads */}
        {showSkeleton && (
          <div className="absolute inset-0 z-10 bg-white/5 animate-pulse flex items-center justify-center rounded-2xl">
            <div className="flex flex-col items-center gap-2 text-white/40">
              {/* Globe icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 animate-spin-slow"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.2}
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
              </svg>
              <span className="text-[10px] tracking-wide">Loading preview…</span>
            </div>
          </div>
        )}

        <img
          src={displaySrc}
          alt={`${title} project preview`}
          loading="lazy"
          onError={handleImgError}
          onLoad={handleImgLoad}
          className={`w-full h-40 sm:h-44 md:h-44 lg:h-52 object-cover transition-transform duration-300 group-hover:scale-105 ${
            showSkeleton ? "opacity-0" : "opacity-100"
          } transition-opacity duration-500`}
        />

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-opacity duration-300" />

        {/* Icons: visible on mobile, hidden on md+ until hover */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
          {repo && repo !== "#" && (
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
          {link && link !== "#" && (
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

        {/* Prev/Next controls for image gallery */}
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
