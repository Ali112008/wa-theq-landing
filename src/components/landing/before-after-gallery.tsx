"use client";

import { useState, useEffect, useRef } from "react";
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
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let direction = 1;
    let paused = false;

    const interval = setInterval(() => {
      if (paused || !container) return;

      const maxScroll = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScroll - 1) {
        direction = -1;
      } else if (container.scrollLeft <= 1) {
        direction = 1;
      }

      container.scrollLeft += direction * 1;
    }, 30); // every 30ms

    const pause = () => { paused = true; };
    const resume = () => { paused = false; };

    container.addEventListener("mouseenter", pause);
    container.addEventListener("mouseleave", resume);
    container.addEventListener("touchstart", pause);
    container.addEventListener("touchend", resume);

    return () => {
      clearInterval(interval);
      container.removeEventListener("mouseenter", pause);
      container.removeEventListener("mouseleave", resume);
      container.removeEventListener("touchstart", pause);
      container.removeEventListener("touchend", resume);
    };
  }, []);

  return (
    <section
      className="py-8 sm:py-12 bg-black"
      aria-label="نتائج زراعة الشعر قبل وبعد"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* عنوان مختصر */}
        <h2 className="text-2xl sm:text-3xl font-black text-center mb-6">
          <span className="text-white">صور </span>
          <span className="text-amber-400">قبل وبعد</span>
        </h2>

        {/* بنر متحرك - صور تت move يمين وشمال */}
        <div
          ref={scrollRef}
          className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden bg-gray-900 ring-1 ring-amber-500/20 relative"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={200}
                height={200}
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 160px, 200px"
              />
              {/* تسميات قبل/بعد */}
              <div className="absolute top-2 left-2 bg-black/80 text-white px-2 py-0.5 rounded text-[10px] font-bold">
                قبل
              </div>
              <div className="absolute top-2 right-2 bg-amber-400 text-black px-2 py-0.5 rounded text-[10px] font-bold">
                بعد
              </div>
            </div>
          ))}
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
