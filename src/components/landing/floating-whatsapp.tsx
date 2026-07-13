"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./whatsapp-button";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/966532424669?text=السلام%20عليكم،%20حابب%20أستفسر%20عن%20عرض%20زراعة%20الشعر"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا عبر واتساب"
      className={`fixed bottom-4 left-4 z-40 flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black font-bold px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
      </span>
      <WhatsAppIcon className="w-5 h-5" />
      <span className="text-sm">تواصل معنا</span>
    </a>
  );
}
