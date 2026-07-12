"use client";

import { useState, useRef } from "react";
import { WhatsAppButton } from "./whatsapp-button";
import { PlayIcon } from "./icons";

export function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    // Small delay to ensure the video element is rendered
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          // If autoplay fails (e.g., on mobile without user gesture),
          // the user can click the native play button
        });
      }
    }, 100);
  };

  return (
    <section
      className="py-12 sm:py-16 bg-gradient-to-b from-[#0a0e1a] to-[#131a2e]"
      aria-label="فيديو تجربة عميل"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <span className="inline-block bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-1 rounded-full text-xs sm:text-sm font-bold mb-3">
            تجارب عملائنا
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3">
            شاهد <span className="text-amber-400">تجربة العميل</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            استمع لتجربة حقيقية من أحد عملائنا بعد زراعة الشعر
          </p>
        </div>

        {/* مشغل الفيديو */}
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-black">
          {!playing ? (
            <>
              {/* صورة Poste مع زر التشغيل */}
              <img
                src="/images/video-poster.webp"
                alt="فيديو تجربة عميل - واثق كلينك"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* تدرج داكن */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

              {/* زر التشغيل */}
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center group"
                aria-label="تشغيل الفيديو"
              >
                <span className="bg-[#25D366] group-hover:bg-[#1ebe5d] rounded-full p-5 sm:p-7 shadow-2xl transition-all duration-300 group-hover:scale-110">
                  <PlayIcon className="w-10 h-10 sm:w-14 sm:h-14 text-white mr-[-3px]" />
                </span>
              </button>

              {/* شارة */}
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold">
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

        {/* اقتباس العميل */}
        <div className="mt-6 text-center">
          <p className="text-white text-lg sm:text-xl font-bold mb-2">
            &ldquo;استعدت ثقتي بنفسي بعد سنوات من الصلع&rdquo;
          </p>
          <p className="text-amber-400 text-sm sm:text-base">
            - أحد عملاء واثق كلينك
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <WhatsAppButton size="lg" message="consultation">
            أريد تجربة مماثلة - تقييم مجاني
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
