"use client";

import { useState, useEffect, useCallback } from "react";

interface GallerySliderProps {
  title: string;
  lang: "ar" | "en";
}

// 10 gallery images, ordered new-1 → new-10
const IMAGES = [
  "/images/gallery/new-1.webp",
  "/images/gallery/new-2.webp",
  "/images/gallery/new-3.webp",
  "/images/gallery/new-4.webp",
  "/images/gallery/new-5.webp",
  "/images/gallery/new-6.webp",
  "/images/gallery/new-7.webp",
  "/images/gallery/new-8.webp",
  "/images/gallery/new-9.webp",
  "/images/gallery/new-10.webp",
];

const TOTAL = IMAGES.length;
const AUTOPLAY_MS = 3500;
const TRANSITION_MS = 500;

export function GallerySlider({ title, lang }: GallerySliderProps) {
  const isRtl = lang === "ar";
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [noTransition, setNoTransition] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(1);

  // Responsive cards per view
  useEffect(() => {
    const update = () => setCardsPerView(window.innerWidth >= 768 ? 3 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Next: increment. Disable during silent jumps to avoid race conditions.
  const next = useCallback(() => {
    if (noTransition) return;
    setCurrent((c) => c + 1);
  }, [noTransition]);

  // Prev: decrement. At current=0, silently jump to TOTAL (visual same as 0),
  // then the effect will transition to TOTAL-1. This avoids showing empty space.
  const prev = useCallback(() => {
    if (noTransition) return;
    setCurrent((c) => {
      if (c === 0) {
        setNoTransition(true);
        return TOTAL;
      }
      return c - 1;
    });
  }, [noTransition]);

  // Autoplay (only when not paused and not in the middle of a silent jump)
  useEffect(() => {
    if (paused || noTransition) return;
    const t = setInterval(() => setCurrent((c) => c + 1), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused, noTransition]);

  // Forward wrap: when current reaches TOTAL (we're now in the duplicate set),
  // wait for the transition to finish, then silently jump back to 0.
  // Position TOTAL is visually identical to position 0 (both show IMAGES[0..]).
  useEffect(() => {
    if (noTransition) return;
    if (current >= TOTAL) {
      const t = setTimeout(() => {
        setNoTransition(true);
        setCurrent(0);
      }, TRANSITION_MS + 50);
      return () => clearTimeout(t);
    }
  }, [current, noTransition]);

  // Handle silent jumps:
  // - After backward silent jump (0 → TOTAL): transition to TOTAL-1
  // - After forward silent wrap (TOTAL → 0): just re-enable transitions
  useEffect(() => {
    if (!noTransition) return;

    if (current === TOTAL) {
      // Backward silent jump completed: now transition smoothly to TOTAL-1
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setNoTransition(false);
          setCurrent(TOTAL - 1);
        });
      });
      return () => cancelAnimationFrame(raf);
    }

    if (current === 0) {
      // Forward silent wrap completed: just re-enable transitions
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setNoTransition(false);
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [noTransition, current]);

  // Duplicate images so we can scroll seamlessly into the next "set"
  const allImages = [...IMAGES, ...IMAGES];

  // For dots: map current slide to 0..TOTAL-1
  const displaySlide = ((current % TOTAL) + TOTAL) % TOTAL;
  const slideWidth = 100 / cardsPerView;

  const goTo = (i: number) => {
    if (noTransition) return;
    setCurrent(i);
  };

  return (
    <section
      className="py-6 sm:py-8 overflow-hidden"
      style={{ backgroundColor: "#050505" }}
      dir="ltr"
      aria-label={title}
    >
      {/* Title */}
      <div className="max-w-5xl mx-auto px-4 mb-5">
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-12 sm:w-20" style={{ backgroundColor: "#D8B676" }} />
          <h2 className="text-2xl sm:text-3xl font-black" style={{ color: "#D8B676" }}>
            {title}
          </h2>
          <span className="h-px w-12 sm:w-20" style={{ backgroundColor: "#D8B676" }} />
        </div>
      </div>

      {/* Slider container */}
      <div
        className="relative max-w-5xl mx-auto"
        style={{ padding: "0 56px" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Viewport */}
        <div className="relative overflow-hidden">
          <div
            className="flex"
            style={{
              transform: `translateX(-${current * slideWidth}%)`,
              transition: noTransition ? "none" : `transform ${TRANSITION_MS}ms ease-out`,
            }}
          >
            {allImages.map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0"
                style={{ width: `${slideWidth}%`, padding: "0 6px" }}
              >
                <div
                  className="relative rounded-xl overflow-hidden"
                  style={{
                    border: "1px solid rgba(216, 182, 118, 0.3)",
                    backgroundColor: "#0a0a0a",
                    aspectRatio: "4 / 5",
                  }}
                >
                  <img
                    src={src}
                    alt={`${title} ${(i % TOTAL) + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prev arrow */}
        <button
          onClick={prev}
          aria-label={isRtl ? "التالي" : "Previous"}
          className="absolute top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110"
          style={{
            left: "8px",
            backgroundColor: "#D8B676",
            color: "#000",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
          }}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next arrow */}
        <button
          onClick={next}
          aria-label={isRtl ? "السابق" : "Next"}
          className="absolute top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110"
          style={{
            right: "8px",
            backgroundColor: "#D8B676",
            color: "#000",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
          }}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-4 flex-wrap max-w-sm mx-auto px-4">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className="transition-all rounded-full"
            style={{
              width: i === displaySlide ? "24px" : "8px",
              height: "8px",
              backgroundColor: i === displaySlide ? "#D8B676" : "rgba(255, 255, 255, 0.3)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
