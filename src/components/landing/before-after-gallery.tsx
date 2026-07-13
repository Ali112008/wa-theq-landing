"use client";

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
  // ضاعف الصور عشان البنر يفضل يتحرك بدون فراغ
  const allImages = [...images, ...images];

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

      {/* بنر متحرك بـ CSS animation */}
      <div className="relative overflow-hidden py-2">
        {/* تدرج على الجوانب */}
        <div
          className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #151515, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #151515, transparent)" }}
        />
        <div className="flex gap-3 sm:gap-4 animate-scroll-banner w-max">
          {allImages.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden relative"
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
                sizes="(max-width: 768px) 176px, 208px"
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
