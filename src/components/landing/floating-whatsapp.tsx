"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./whatsapp-button";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past the hero (roughly 100vh)
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* زر واتساب عائم - ثابت في الأسفل */}
      <a
        href="https://wa.me/966532424669?text=السلام%20عليكم،%20حابب%20أستفسر%20عن%20عرض%20زراعة%20الشعر%20في%20تركيا%20شامل%20الطيران%20والفندق%20بـ%205980%20ريال"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا عبر واتساب"
        className={`fixed bottom-4 left-4 z-40 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-5 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        {/* نبضNotification */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
        <WhatsAppIcon className="w-6 h-6" />
        <span className="hidden sm:inline">تواصل معنا الآن</span>
        <span className="sm:hidden">واتساب</span>
      </a>
    </>
  );
}
