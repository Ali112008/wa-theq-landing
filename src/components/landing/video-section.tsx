"use client";

import { useState, useRef } from "react";
import { WhatsAppButton } from "./whatsapp-button";
import { PlayIcon, StarIcon } from "./icons";

export function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    }, 100);
  };

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
          {/* الفيديو - يسار */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-amber-500/20 bg-black">
            {!playing ? (
              <>
                <img
                  src="/images/video-poster.webp"
                  alt="فيديو تجربة عميل - واثق كلينك"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center group"
                  aria-label="تشغيل الفيديو"
                >
                  <span className="bg-[#25D366] group-hover:bg-[#1ebe5d] rounded-full p-5 sm:p-6 shadow-2xl transition-all duration-300 group-hover:scale-110">
                    <PlayIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white mr-[-3px]" />
                  </span>
                </button>

                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-semibold">
                  ▶ تجربة عميل حقيقية
                </div>
              </>
            ) : (
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                controls
                autoPlay
                playsInline
                preload="auto"
              >
                <source
                  src="https://wa-theq.com/wp-content/uploads/2025/10/10148.webm"
                  type="video/webm"
                />
                المتصفح لا يدعم تشغيل الفيديو.
              </video>
            )}
          </div>

          {/* الاقتباس - يمين */}
          <div className="text-white">
            {/* علامة اقتباس كبيرة */}
            <div className="text-amber-400 text-6xl leading-none font-black mb-2">
              &ldquo;
            </div>

            <p className="text-lg sm:text-xl md:text-2xl font-bold mb-4 leading-relaxed">
              استعدت ثقتي بنفسي بعد سنوات من الصلع، النتائج كانت مذهلة وواضحة
              من أول جلسة. أنا سعيد جداً بنتائجي بعد عملية زراعة الشعر من
              واثق كلينك.
            </p>

            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-black">
                ع
              </div>
              <div>
                <p className="text-amber-400 font-bold">عميل سعيد</p>
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
