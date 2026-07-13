/**
 * واثق كلينك - صفحة هبوط زراعة الشعر في تركيا
 * Landing Page for Watheq Clinic - Hair Transplant in Turkey
 *
 * ترتيب الأقسام:
 * 1. Hero - الهيرو (صورة قبل/بعد + زر واتساب)
 * 2. Pain Points - هل تعاني من؟ + موك أب هاتف
 * 3. Before/After Gallery - 8 صور نتائج قبل وبعد
 * 4. Video Section - الفيديو والاقتباس
 * 5. Why Choose Us - لماذا تختار واثق؟
 * 6. Offer Section - العرض المحدود (5980 ريال)
 * 7. How It Works - كيف تبدأ رحلتك
 * 8. FAQ - الأسئلة الشائعة
 * 9. Snapchat Follow - تابع المالك
 * 10. Final CTA - جاهز تستعيد ثقتك؟
 */

import { HeroSection } from "@/components/landing/hero-section";
import { PainPointsSection } from "@/components/landing/pain-points-section";
import { BeforeAfterGallery } from "@/components/landing/before-after-gallery";
import { VideoSection } from "@/components/landing/video-section";
import { WhyChooseUs } from "@/components/landing/why-choose-us";
import { OfferSection } from "@/components/landing/offer-section";
import { HowItWorks } from "@/components/landing/how-it-works";
import { FAQSection } from "@/components/landing/faq-section";
import { SnapchatFollow } from "@/components/landing/snapchat-follow";
import { FinalCTA } from "@/components/landing/final-cta";
import { FloatingWhatsApp } from "@/components/landing/floating-whatsapp";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* 1. الهيرو - صورة قبل/بعد + زر واتساب */}
      <HeroSection />

      {/* 2. هل تعاني من؟ + موك أب هاتف */}
      <PainPointsSection />

      {/* 3. معرض صور قبل وبعد - 8 صور */}
      <BeforeAfterGallery />

      {/* 4. فيديو + اقتباس */}
      <VideoSection />

      {/* 5. لماذا تختار واثق؟ */}
      <WhyChooseUs />

      {/* 6. عرض لفترة محدودة - 5980 ريال شامل */}
      <OfferSection />

      {/* 7. كيف تبدأ رحلتك */}
      <HowItWorks />

      {/* 8. الأسئلة الشائعة */}
      <FAQSection />

      {/* 9. تابع المالك على سناب شات */}
      <SnapchatFollow />

      {/* 10. جاهز تستعيد ثقتك؟ - CTA نهائي */}
      <FinalCTA />

      {/* زر واتساب عائم - ثابت في كل الصفحة */}
      <FloatingWhatsApp />
    </main>
  );
}
