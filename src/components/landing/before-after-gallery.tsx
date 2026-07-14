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

export function BeforeAfterGallery() {
  return (
    <section
      className="py-16 sm:py-20"
      style={{ backgroundColor: "#050505" }}
      aria-label="نتائج زراعة الشعر قبل وبعد"
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-black text-center mb-10" style={{ color: "#D8B676" }}>
          نتائج عملائنا
        </h2>

        {/* Grid - 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden aspect-square"
              style={{
                border: "1px solid rgba(216, 182, 118, 0.3)",
                backgroundColor: "#0a0a0a",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 45vw, 200px"
              />
              <div className="absolute bottom-2 left-2 bg-black/80 text-white px-2 py-0.5 rounded text-[10px] font-bold">
                قبل
              </div>
              <div
                className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold"
                style={{ backgroundColor: "#D8B676", color: "#000" }}
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
