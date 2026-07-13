/**
 * واثق كلينك - صفحة هبوط زراعة الشعر في تركيا
 * Landing Page for Watheq Clinic - Hair Transplant in Turkey
 *
 * ترتيب الأقسام:
 * 1. Hero - الهيرو الرئيسي
 * 2. Pain Points - هل تعاني من؟ + موك أب هاتف + واتساب
 * 3. Before/After Gallery - معرض صور قبل وبعد
 * 4. Video Section - الفيديو والاقتباس
 * 5. Why Choose Us - لماذا تختار واثق؟ (أيقونات)
 * 6. Offer Section - الباقة والعرض المحدود
 * 7. How It Works - كيف تبدأ رحلتك (خطوات)
 * 8. FAQ - الأسئلة الشائعة
 * 9. Final CTA - جاهز تستعد ثقتك؟
 */

import { HeroSection } from "@/components/landing/hero-section";
import { PainPointsSection } from "@/components/landing/pain-points-section";
import { BeforeAfterGallery } from "@/components/landing/before-after-gallery";
import { VideoSection } from "@/components/landing/video-section";
import { WhyChooseUs } from "@/components/landing/why-choose-us";
import { OfferSection } from "@/components/landing/offer-section";
import { HowItWorks } from "@/components/landing/how-it-works";
import { FAQSection } from "@/components/landing/faq-section";
import { FinalCTA } from "@/components/landing/final-cta";
import { FloatingWhatsApp } from "@/components/landing/floating-whatsapp";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* 1. Hero - الهيرو الرئيسي */}
      <HeroSection />

      {/* 2. Pain Points - هل تعاني من؟ + موك أب هاتف */}
      <PainPointsSection />

      {/* 3. Before/After Gallery - معرض صور قبل وبعد */}
      <BeforeAfterGallery />

      {/* 4. Video Section - الفيديو والاقتباس */}
      <VideoSection />

      {/* 5. Why Choose Us - لماذا تختار واثق؟ */}
      <WhyChooseUs />

      {/* 6. Offer Section - الباقة والعرض المحدود */}
      <OfferSection />

      {/* 7. How It Works - كيف تبدأ رحلتك */}
      <HowItWorks />

      {/* 8. FAQ - الأسئلة الشائعة */}
      <FAQSection />

      {/* 9. Final CTA - جاهز تستعد ثقتك؟ */}
      <FinalCTA />

      {/* زر واتساب عائم - ثابت في كل الصفحة */}
      <FloatingWhatsApp />
    </main>
  );
}
