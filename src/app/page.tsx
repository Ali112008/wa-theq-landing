/**
 * واثق كلينك - صفحة هبوط زراعة الشعر في تركيا
 *
 * مختصرة جداً - 5 أقسام:
 * 1. Hero - اللوجو يسار + صورة قبل/بعد + زر واتساب أخضر
 * 2. بنر متحرك للنتائج (marquee يمين وشمال)
 * 3. فيديو
 * 4. عرض لفترة محدودة (5980 ريال) + زر واتساب أخضر
 * 5. بنر سناب شات مباشر
 */

import { HeroSection } from "@/components/landing/hero-section";
import { BeforeAfterGallery } from "@/components/landing/before-after-gallery";
import { VideoSection } from "@/components/landing/video-section";
import { OfferSection } from "@/components/landing/offer-section";
import { SnapchatFollow } from "@/components/landing/snapchat-follow";
import { FloatingWhatsApp } from "@/components/landing/floating-whatsapp";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden" style={{ backgroundColor: "#000000" }}>
      {/* 1. الهيرو - اللوجو يسار + صورة قبل/بعد + زر واتساب أخضر */}
      <HeroSection />

      {/* 2. بنر متحرك للنتائج (marquee يمين وشمال) */}
      <BeforeAfterGallery />

      {/* 3. فيديو */}
      <VideoSection />

      {/* 4. عرض لفترة محدودة - 5980 ريال + زر واتساب أخضر */}
      <OfferSection />

      {/* 5. بنر سناب شات مباشر */}
      <SnapchatFollow />

      {/* بنر واتساب عائم على اليسار - أخضر */}
      <FloatingWhatsApp />
    </main>
  );
}
