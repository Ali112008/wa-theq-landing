"use client";

import { useState, useEffect, useCallback, useRef } from "react";
// Using regular img tag for static export compatibility

const images = [
  { src: "/images/gallery/case-2.webp", alt: "نتيجة زراعة الشعر - حالة 2" },
  { src: "/images/gallery/case-1.webp", alt: "نتيجة زراعة الشعر - حالة 1" },
  { src: "/images/gallery/case-3.webp", alt: "نتيجة زراعة الشعر - حالة 3" },
  { src: "/images/gallery/case-4.webp", alt: "نتيجة زراعة الشعر - حالة 4" },
  { src: "/images/gallery/case-5.webp", alt: "نتيجة زراعة الشعر - حالة 5" },
  { src: "/images/gallery/case-6.webp", alt: "نتيجة زراعة الشعر - حالة 6" },
  { src: "/images/gallery/case-7.webp", alt: "نتيجة زراعة الشعر - حالة 7" },
  { src: "/images/gallery/case-8.webp", alt: "نتيجة زراعة الشعر - حالة 8" },
  { src: "/images/gallery/case-9.webp", alt: "نتيجة زراعة الشعر - حالة 9" },
  { src: "/images/gallery/case-10.webp", alt: "نتيجة زراعة الشعر - حالة 10" },
];

const TOTAL = images.length;

export function BeforeAfterGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [noTransition, setNoTransition] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(1);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const updateCards = () => {
      setCardsPerView(window.innerWidth >= 768 ? 3 : 1);
    };
    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev >= TOTAL) return prev;
      return prev + 1;
    });
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev === 0) {
        setNoTransition(true);
        return TOTAL;
      }
      return prev - 1;
    });
  }, []);

  useEffect(() => {
    if (noTransition) return;
    if (currentSlide >= TOTAL) {
      timeoutRef.current = setTimeout(() => {
        setNoTransition(true);
        setCurrentSlide(0);
      }, 500);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentSlide, noTransition]);

  useEffect(() => {
    if (noTransition && currentSlide === TOTAL) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setNoTransition(false);
          setCurrentSlide(TOTAL - 1);
        });
      });
    }
    if (noTransition && currentSlide === 0) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setNoTransition(false);
        });
      });
    }
  }, [noTransition, currentSlide]);

  useEffect(() => {
    if (isPaused || noTransition) return;
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused, noTransition]);

  const displaySlide = currentSlide >= TOTAL ? TOTAL - 1 : currentSlide;
  const allImages = [...images, ...images];

  return (
    <section
      className="py-5 sm:py-6 overflow-hidden"
      style={{ backgroundColor: "#050505" }}
      aria-label="نتائج زراعة الشعر قبل وبعد"
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Title with decorative lines */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="h-px w-12 sm:w-20" style={{ backgroundColor: "#D8B676" }} />
          <h2 className="text-2xl sm:text-3xl font-black" style={{ color: "#D8B676" }}>
            نتائج عملائنا
          </h2>
          <span className="h-px w-12 sm:w-20" style={{ backgroundColor: "#D8B676" }} />
        </div>
      </div>

      {/* Slider */}
      <div
        className="relative max-w-5xl mx-auto px-12 sm:px-16"
        dir="ltr"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slides container */}
        <div className="relative overflow-hidden">
          <div
            className="flex"
            style={{
              transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)`,
              transition: noTransition ? "none" : "transform 500ms ease-out",
            }}
          >
            {allImages.map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-1.5"
                style={{ width: `${100 / cardsPerView}%` }}
              >
                {/* Card */}
                <div
                  className="relative rounded-xl overflow-hidden"
                  style={{
                    border: "1px solid rgba(216, 182, 118, 0.3)",
                    backgroundColor: "#0a0a0a",
                    aspectRatio: "4 / 5",
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Left arrow - outside container */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 -left-1 sm:-left-2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110"
          style={{
            backgroundColor: "#D8B676",
            color: "#000",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
          }}
          aria-label="السابق"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right arrow - outside container */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 -right-1 sm:-right-2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110"
          style={{
            backgroundColor: "#D8B676",
            color: "#000",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
          }}
          aria-label="التالي"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots pagination */}
        <div className="flex justify-center gap-1.5 mt-3 flex-wrap max-w-sm mx-auto">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className="transition-all rounded-full"
              style={{
                width: i === displaySlide ? "24px" : "8px",
                height: "8px",
                backgroundColor: i === displaySlide ? "#D8B676" : "rgba(255, 255, 255, 0.3)",
              }}
              aria-label={`الشريحة ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
