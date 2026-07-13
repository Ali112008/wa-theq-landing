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
      <div className="relative">
        <div className="flex gap-3 sm:gap-4 animate-scroll-banner w-max">
          {allImages.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden bg-gray-900 ring-1 ring-gold-dark/20 relative"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={200}
                height={200}
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 160px, 200px"
              />
              <div className="absolute top-2 left-2 bg-black/80 text-white px-2 py-0.5 rounded text-[10px] font-bold">
                قبل
              </div>
              <div className="absolute top-2 right-2 bg-gold text-black px-2 py-0.5 rounded text-[10px] font-bold">
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
