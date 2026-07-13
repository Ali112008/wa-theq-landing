"use client";

import { useState, useEffect, useCallback, useRef } from "react";
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

// عدد الصور الأصلية
const TOTAL_ORIGINAL = images.length;

export function BeforeAfterGallery() {
  // currentSlide بيمشي على الصور المضاعفة (16 صورة) عشان اللف سلس
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [noTransition, setNoTransition] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      // لو وصلنا لأول شريحة في النسخة المكررة (8)،
      // م نزيدش - الـ useEffect هيعمل reset
      if (prev >= TOTAL_ORIGINAL && prev < TOTAL_ORIGINAL * 2 - 1) {
        return prev;
      }
      // لو وصلنا لآخر نسخة مكررة (15)، نعمل reset
      if (prev >= TOTAL_ORIGINAL * 2 - 1) {
        return prev;
      }
      return prev + 1;
    });
  }, []);

  // لما currentSlide يوصل لـ TOTAL_ORIGINAL (8) - أول شريحة في النسخة المكررة
  // نستنى شوية وبعدين نرجع لـ 0 بدون transition
  useEffect(() => {
    if (currentSlide >= TOTAL_ORIGINAL) {
      timeoutRef.current = setTimeout(() => {
        setNoTransition(true);
        setCurrentSlide(0);
      }, 500); // نفس مدة الـ transition
    }
    // لما currentSlide = 15 (آخر نسخة مكررة من prevSlide)، نعمل reset
    if (currentSlide >= TOTAL_ORIGINAL * 2 - 1) {
      timeoutRef.current = setTimeout(() => {
        setNoTransition(true);
        setCurrentSlide(TOTAL_ORIGINAL - 1); // نروح لـ 7 (آخر صورة أصلية)
      }, 500);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentSlide]);

  // بعد ما نعمل silent jump، نشغل الـ transition تاني
  useEffect(() => {
    if (noTransition) {
      // نستنى frame واحد وبعدين نشغل الـ transition
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setNoTransition(false);
        });
      });
    }
  }, [noTransition, currentSlide]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev === 0) {
        // لو في البداية، نروح لآخر صورة في النسخة المكررة (index 15)
        // بدون transition (silent jump)
        setNoTransition(true);
        return TOTAL_ORIGINAL * 2 - 1; // index 15 = آخر نسخة مكررة (نفس صورة 7)
      }
      return prev - 1;
    });
  }, []);

  // Autoplay كل 4 ثواني
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  // الصور المضاعفة (8 + 8 = 16)
  const allImages = [...images, ...images];

  // الشريحة الحالية (0-7) للعرض
  // لو currentSlide = 8 (النسخة المكررة)، نعرض 7 (آخر صورة أصلية)
  const displaySlide = currentSlide >= TOTAL_ORIGINAL ? TOTAL_ORIGINAL - 1 : currentSlide;

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

        {/* Slider */}
        <div
          className="relative"
          dir="ltr"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slides */}
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="flex"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: noTransition ? "none" : "transform 500ms ease-out",
              }}
            >
              {allImages.map((img, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-full flex justify-center"
                >
                  <div
                    className="relative rounded-2xl overflow-hidden"
                    style={{
                      backgroundColor: "#2c2c2c",
                      boxShadow: "0 0 0 1px rgba(212, 175, 55, 0.2)",
                      width: "min(85vw, 450px)",
                      aspectRatio: "1 / 1",
                    }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 85vw, 450px"
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

          {/* سهم يمين */}
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

          {/* سهم شمال */}
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

          {/* مؤشرات الشرائح (dots) - 8 نقاط بس */}
          <div className="flex justify-center gap-1.5 mt-4 flex-wrap max-w-md mx-auto">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className="transition-all rounded-full"
                style={{
                  width: i === displaySlide ? "24px" : "8px",
                  height: "8px",
                  backgroundColor: i === displaySlide ? "#D4AF37" : "rgba(255, 255, 255, 0.3)",
                }}
                aria-label={`الشريحة ${i + 1}`}
              />
            ))}
          </div>

          {/* عداد الشرائح - 1/8 لـ 8/8 */}
          <div className="text-center mt-3">
            <span className="text-white/60 text-sm">
              {displaySlide + 1} / {TOTAL_ORIGINAL}
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
