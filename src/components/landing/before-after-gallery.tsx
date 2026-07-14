"use client";

import Image from "next/image";

const images = [
  { src: "/images/before-after-11.webp", alt: "نتيجة زراعة الشعر - حالة 1" },
  { src: "/images/before-after-2.webp", alt: "نتيجة زراعة الشعر - حالة 2" },
  { src: "/images/before-after-3.webp", alt: "نتيجة زراعة الشعر - حالة 3" },
  { src: "/images/before-after-6.webp", alt: "نتيجة زراعة الشعر - حالة 4" },
  { src: "/images/before-after-7.webp", alt: "نتيجة زراعة الشعر - حالة 5" },
  { src: "/images/before-after-8.webp", alt: "نتيجة زراعة الشعر - حالة 6" },
  { src: "/images/before-after-12.webp", alt: "نتيجة زراعة الشعر - حالة 7" },
  { src: "/images/before-after-1.webp", alt: "نتيجة زراعة الشعر - حالة 8" },
];

// ضاعف الصور عشان البنر يفضل يتحرك بدون فراغ
const allImages = [...images, ...images];

export function BeforeAfterGallery() {
  return (
    <section
      className="py-8 sm:py-12 overflow-hidden"
      style={{ backgroundColor: "#000000" }}
      aria-label="نتائج زراعة الشعر قبل وبعد"
    >
      {/* عنوان القسم */}
      <div className="text-center mb-6 px-4">
        <h2 className="text-xl sm:text-2xl font-black inline-flex items-center gap-3">
          <span className="h-px w-8 sm:w-12" style={{ backgroundColor: "#BF9B30" }} />
          <span style={{ color: "#BF9B30" }}>نتائج عملائنا</span>
          <span className="h-px w-8 sm:w-12" style={{ backgroundColor: "#BF9B30" }} />
        </h2>
      </div>

      {/* بنر متحرك - marquee يتحرك يمين وشمال */}
      <div className="relative overflow-hidden py-2">
        {/* تدرج على الجوانب */}
        <div
          className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #000000, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #000000, transparent)" }}
        />
        <div className="flex gap-3 sm:gap-4 animate-scroll-banner w-max">
          {allImages.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden relative"
              style={{
                backgroundColor: "#1a1a1a",
                boxShadow: "0 0 0 1px rgba(212, 175, 55, 0.2)",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={180}
                height={180}
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 144px, 176px"
              />
              <div className="absolute top-1.5 left-1.5 bg-black/80 text-white px-2 py-0.5 rounded text-[9px] font-bold">
                قبل
              </div>
              <div
                className="absolute top-1.5 right-1.5 px-2 py-0.5 rounded text-[9px] font-bold"
                style={{ backgroundColor: "#BF9B30", color: "#000000" }}
              >
                بعد
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
