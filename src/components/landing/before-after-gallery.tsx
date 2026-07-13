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

export function BeforeAfterGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 8 حالات = 8 شرائح (كل شريحة فيها صورة واحدة كبيرة)
  const totalSlides = images.length;

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

  return (
    <section
      className="py-8 sm:py-12 overflow-hidden"
      style={{ backgroundColor: "#151515" }}
      aria-label="نتائج زراعة الشعر قبل وبعد"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-black text-center mb-6">
          <span className="text-white">صور </span>
          <span className="text-gold">قبل وبعد</span>
        </h2>

        {/* Slider - الصورة بتبدأ من أول الـ container لآخره */}
        <div
          className="relative"
          dir="ltr"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slides - بدون padding */}
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((img, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-full"
                >
                  <div
                    className="relative w-full rounded-2xl overflow-hidden"
                    style={{
                      backgroundColor: "#2c2c2c",
                      boxShadow: "0 0 0 1px rgba(212, 175, 55, 0.2)",
                      aspectRatio: "1 / 1",
                      maxHeight: "70vh",
                    }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                    {/* تسميات قبل/بعد */}
                    <div className="absolute top-3 left-3 bg-black/80 text-white px-3 py-1 rounded-md text-xs font-bold">
                      قبل
                    </div>
                    <div
                      className="absolute top-3 right-3 px-3 py-1 rounded-md text-xs font-bold"
                      style={{ backgroundColor: "#D4AF37", color: "#000000" }}
                    >
                      بعد
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* سهم يمين - داخل الصورة */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110"
            style={{
              backgroundColor: "rgba(212, 175, 55, 0.9)",
              color: "#000000",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
            }}
            aria-label="التالي"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* سهم شمال - داخل الصورة */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110"
            style={{
              backgroundColor: "rgba(212, 175, 55, 0.9)",
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
          <div className="flex justify-center gap-1.5 mt-4 flex-wrap max-w-md mx-auto">
            {images.map((_, i) => (
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

          {/* عداد الشرائح */}
          <div className="text-center mt-3">
            <span className="text-white/60 text-sm">
              {currentSlide + 1} / {totalSlides}
            </span>
          </div>
        </div>

        {/* زر واتساب تحت المعرض */}
        <div className="text-center mt-6">
          <WhatsAppButton size="md" message="consultation">
            أريد نتيجة مثل هؤلاء
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
