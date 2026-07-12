"use client";

import { useState, useCallback, useEffect } from "react";
import { WhatsAppButton } from "./whatsapp-button";
import { StarIcon } from "./icons";

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
  const [lightbox, setLightbox] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const nextImage = useCallback(
    () => setLightbox((prev) => (prev === null ? null : (prev + 1) % images.length)),
    []
  );
  const prevImage = useCallback(
    () =>
      setLightbox((prev) =>
        prev === null ? null : (prev - 1 + images.length) % images.length
      ),
    []
  );

  useEffect(() => {
    if (lightbox === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") nextImage();
      if (e.key === "ArrowRight") prevImage();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightbox, closeLightbox, nextImage, prevImage]);

  return (
    <section
      className="py-12 sm:py-16 bg-white"
      aria-label="معرض نتائج زراعة الشعر قبل وبعد"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* عنوان القسم */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0a0e1a] mb-3">
            شاهد <span className="text-amber-500">نتائج عملياتنا</span>
          </h2>
          <div className="flex items-center justify-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <StarIcon key={i} className="w-6 h-6 text-amber-400" />
            ))}
          </div>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            نتائج حقيقية لعملائنا الذين خضعوا لزراعة الشعر بتقنية DHI في
            واثق كلينك
          </p>
        </div>

        {/* شبكة الصور - 8 صور */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              aria-label={`عرض الصورة ${i + 1} بحجم أكبر`}
            >
              <img
                src={img.src}
                alt={img.alt}
                width={400}
                height={400}
                loading={i < 4 ? "eager" : "lazy"}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* تسميات قبل وبعد - قبل على اليسار، بعد على اليمين */}
              <div className="absolute top-2 left-2 bg-red-500/90 text-white px-2 py-0.5 rounded-full text-[10px] font-bold backdrop-blur-sm">
                قبل
              </div>
              <div className="absolute top-2 right-2 bg-green-500/90 text-white px-2 py-0.5 rounded-full text-[10px] font-bold backdrop-blur-sm">
                بعد
              </div>
              {/* overlay للتكبير */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-2">
                  <svg
                    className="w-5 h-5 text-[#0a0e1a]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* زر واتساب بعد المعرض */}
        <div className="text-center mt-8 sm:mt-10">
          <WhatsAppButton size="lg" message="consultation">
            أريد نتيجة مثل هؤلاء - تقييم مجاني
          </WhatsAppButton>
        </div>
      </div>

      {/* Lightbox - عارض الصور المكبرة */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="عارض الصور"
        >
          {/* زر الإغلاق - واضح بخلفية ملونة */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 left-4 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full p-3 transition-colors shadow-lg shadow-red-500/30"
            aria-label="إغلاق"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* زر التالي */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors backdrop-blur-md border border-white/20"
            aria-label="السابق"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* زر السابق */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors backdrop-blur-md border border-white/20"
            aria-label="التالي"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* الصورة */}
          <div
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            />
            <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              قبل
            </div>
            <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              بعد
            </div>
            <div
              className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-1.5 rounded-full text-sm font-semibold"
              dir="ltr"
            >
              {lightbox + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
