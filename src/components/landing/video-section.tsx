"use client";

import { useState } from "react";
import { WhatsAppButton } from "./whatsapp-button";

const YOUTUBE_VIDEO_ID = "U6iNQXHi4qQ";
const YOUTUBE_EMBED_URL = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&autoplay=1&playsinline=1`;

export function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      className="py-8 sm:py-12 border-t border-gold-dark/10"
      style={{ backgroundColor: "#1a1a1a" }}
      aria-label="فيديو تجربة عميل"
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* عنوان مختصر */}
        <h2 className="text-2xl sm:text-3xl font-black text-center mb-6">
          <span className="text-white">شاهد </span>
          <span className="text-gold">تجربة العميل</span>
        </h2>

        {/* الفيديو */}
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gold-dark/20 bg-black">
          {!playing ? (
            <>
              <img
                src="/images/testimonial-poster.webp"
                alt="فيديو تجربة عميل"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40" />
              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 flex items-center justify-center group"
                aria-label="تشغيل الفيديو"
              >
                <span className="bg-gold group-hover:bg-gold-light rounded-full p-4 shadow-2xl transition-transform group-hover:scale-110">
                  <svg className="w-7 h-7 text-black mr-[-2px]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
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
      </div>
    </section>
  );
}
