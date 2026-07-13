/**
 * واثق كلينك - صفحة هبوط زراعة الشعر في تركيا
 *
 * مختصرة جداً - 5 أقسام فقط:
 * 1. الهيرو - صورة قبل/بعد + اسم الشركة + زر واتساب
 * 2. 8 صور نتائج قبل وبعد (بنر متحرك)
 * 3. فيديو
 * 4. عرض لفترة محدودة (5980 ريال)
 * 5. متابعة مالك الشركة بسناب شات
 *
 * الألوان: أسود وذهبي
 */

import { HeroSection } from "@/components/landing/hero-section";
import { BeforeAfterGallery } from "@/components/landing/before-after-gallery";
import { VideoSection } from "@/components/landing/video-section";
import { OfferSection } from "@/components/landing/offer-section";
import { SnapchatFollow } from "@/components/landing/snapchat-follow";
import { FloatingWhatsApp } from "@/components/landing/floating-whatsapp";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      {/* 1. الهيرو - صورة قبل/بعد + زر واتساب */}
      <HeroSection />

      {/* 2. 8 صور نتائج قبل وبعد (بنر متحرك) */}
      <BeforeAfterGallery />

      {/* 3. فيديو */}
      <VideoSection />

      {/* 4. عرض لفترة محدودة - 5980 ريال */}
      <OfferSection />

      {/* 5. متابعة مالك الشركة بسناب شات */}
      <SnapchatFollow />

      {/* زر واتساب عائم */}
      <FloatingWhatsApp />
    </main>
  );
}
