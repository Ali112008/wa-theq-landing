"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { WhatsAppButton } from "./whatsapp-button";

const images = [
  { src: "/images/before-after-1.webp", alt: "نتيجة زراعة الشعر - حالة 1" },
  { src: "/images/before-after-2.webp", alt: "نتيجة زراعة الشعر - حالة 2" },
  { src: "/images/before-after-3.webp", alt: "نتيجة زراعة الشعر - حالة 3" },
  { src: "/images/before-after-6.webp", alt: "نتيجة زراعة الشعر - حالة 4" },
  { src: "/images/before-after-7.webp", alt: "نتيجة زراعة الشعر - حالة 5" },
  { src: "/images/before-after-8.webp", alt: "نتيجة زراعة الشعر - حالة 6" },
  { src: "/images/before-after-11.webp", alt: "نتيجة زراعة الشعر - حالة 7" },
  { src: "/images/before-after-12.webp", alt: "نتيجة زراعة الشعر - حالة 8" },
];

// عدد الصور اللي بتبان في كل شريحة
const IMAGES_PER_SLIDE = 4;

export function BeforeAfterGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // حساب عدد الشرائح
  const totalSlides = Math.ceil(images.length / IMAGES_PER_SLIDE);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Autoplay كل 3 ثواني
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  // الصور اللي بتبان في الشريحة الحالية
  const startIdx = currentSlide * IMAGES_PER_SLIDE;
  const visibleImages = [];
  for (let i = 0; i < IMAGES_PER_SLIDE; i++) {
    visibleImages.push(images[(startIdx + i) % images.length]);
  }

  return (
    <section
      className="py-8 sm:py-12 overflow-hidden"
      style={{ backgroundColor: "#151515" }}
      aria-label="نتائج زراعة الشعر قبل وبعد"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-black text-center mb-6">
          <span className="text-white">صور </span>
          <span className="text-gold">قبل وبعد</span>
        </h2>
      </div>

      {/* Slider container */}
      <div
        className="relative max-w-5xl mx-auto px-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slides */}
        <div className="relative overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(${currentSlide * 100}%)` }}
          >
            {/* كل شريحة فيها 4 صور */}
            {Array.from({ length: totalSlides }).map((_, slideIdx) => {
              const slideStart = slideIdx * IMAGES_PER_SLIDE;
              const slideImages = [];
              for (let i = 0; i < IMAGES_PER_SLIDE; i++) {
                slideImages.push(images[(slideStart + i) % images.length]);
              }
              return (
                <div
                  key={slideIdx}
                  className="flex-shrink-0 w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
                >
                  {slideImages.map((img, i) => (
                    <div
                      key={`${slideIdx}-${i}`}
                      className="relative aspect-square rounded-2xl overflow-hidden"
                      style={{
                        backgroundColor: "#2c2c2c",
                        boxShadow: "0 0 0 1px rgba(212, 175, 55, 0.2)",
                      }}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={220}
                        height={220}
                        className="w-full h-full object-cover"
                        sizes="(max-width: 768px) 45vw, 200px"
                      />
                      <div className="absolute top-2 left-2 bg-black/80 text-white px-2 py-0.5 rounded text-[10px] font-bold">
                        قبل
                      </div>
                      <div
                        className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold"
                        style={{ backgroundColor: "#D4AF37", color: "#000000" }}
                      >
                        بعد
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {/* سهم يمين */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-0 sm:translate-x-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{
            backgroundColor: "#D4AF37",
            color: "#000000",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
          }}
          aria-label="التالي"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* سهم شمال */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-0 sm:-translate-x-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{
            backgroundColor: "#D4AF37",
            color: "#000000",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
          }}
          aria-label="السابق"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* مؤشرات الشرائح (dots) */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className="transition-all rounded-full"
              style={{
                width: i === currentSlide ? "24px" : "8px",
                height: "8px",
                backgroundColor: i === currentSlide ? "#D4AF37" : "rgba(255, 255, 255, 0.3)",
              }}
              aria-label={`الشريحة ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* زر واتساب تحت المعرض */}
      <div className="text-center mt-6 px-4">
        <WhatsAppButton size="md" message="consultation">
          أريد نتيجة مثل هؤلاء
        </WhatsAppButton>
      </div>
    </section>
  );
}
