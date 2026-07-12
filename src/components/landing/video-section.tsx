"use client";

import { useState } from "react";
import { WhatsAppButton } from "./whatsapp-button";
import { StarIcon } from "./icons";

// أفضل فيديو من قسم تجارب العملاء في الموقع الأصلي
const YOUTUBE_VIDEO_ID = "U6iNQXHi4qQ";
const YOUTUBE_EMBED_URL = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&autoplay=1&playsinline=1`;

// اقتباس العميل من الفيديو
const QUOTE = "استعدت ثقتي بنفسي بعد سنوات من الصلع، النتائج كانت مذهلة وواضحة من أول جلسة. أنا سعيد جداً بنتائجي بعد عملية زراعة الشعر من واثق كلينك.";
const AUTHOR = "أحمد - عميل واثق كلينك";

export function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      className="py-12 sm:py-16 bg-[#060818] relative overflow-hidden"
      aria-label="تجربة عميل"
    >
      {/* خلفية زخرفية */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3">
            شاهد <span className="text-amber-400">تجربة العميل</span>
          </h2>
          <div className="flex items-center justify-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <StarIcon key={i} className="w-5 h-5 text-amber-400" />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* الفيديو - يسار (YouTube embed) */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-amber-500/20 bg-black">
            {!playing ? (
              <>
                {/* صورة الـ poster من الفيديو الأصلي */}
                <img
                  src="/images/testimonial-poster.webp"
                  alt="فيديو تجربة عميل - واثق كلينك"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

                {/* زر تشغيل صغير بسيط - في المنتصف */}
                <button
                  onClick={() => setPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center group"
                  aria-label="تشغيل الفيديو"
                >
                  <span className="bg-white/90 group-hover:bg-white rounded-full p-3 sm:p-4 shadow-xl transition-all duration-300 group-hover:scale-110 backdrop-blur-sm">
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 text-[#0a0e1a] mr-[-2px]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </button>

                {/* شارة تجربة عميل */}
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse"></span>
                  تجربة عميل حقيقية
                </div>
              </>
            ) : (
              <iframe
                src={YOUTUBE_EMBED_URL}
                title="تجربة عميل - واثق كلينك"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            )}
          </div>

          {/* الاقتباس - يمين (مقتبس من الفيديو) */}
          <div className="text-white">
            {/* علامة اقتباس كبيرة */}
            <div className="text-amber-400 text-6xl leading-none font-black mb-2">
              &ldquo;
            </div>

            <p className="text-lg sm:text-xl md:text-2xl font-bold mb-4 leading-relaxed">
              {QUOTE}
            </p>

            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-black">
                أ
              </div>
              <div>
                <p className="text-amber-400 font-bold">{AUTHOR}</p>
                <p className="text-gray-400 text-sm">4500+ عملية ناجحة</p>
              </div>
            </div>

            <div className="mt-6">
              <WhatsAppButton size="md" message="consultation">
                أريد تجربة مماثلة
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
