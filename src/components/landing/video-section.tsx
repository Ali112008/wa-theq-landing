"use client";

import { useState } from "react";

const YOUTUBE_VIDEO_ID = "U6iNQXHi4qQ";
const YOUTUBE_EMBED_URL = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&autoplay=1&playsinline=1`;

export function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      className="py-16 sm:py-20"
      style={{ backgroundColor: "#050505" }}
      aria-label="فيديو تجربة عميل"
    >
      <div className="max-w-3xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-black text-center mb-8" style={{ color: "#D8B676" }}>
          شاهد تجربة العميل
        </h2>

        {/* Video Container */}
        <div
          className="relative aspect-video rounded-2xl overflow-hidden"
          style={{
            border: "1px solid rgba(216, 182, 118, 0.3)",
            backgroundColor: "#0a0a0a",
          }}
        >
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
                <span
                  className="rounded-full p-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: "#D8B676" }}
                >
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
