/**
 * واثق كلينك - صفحة هبوط زراعة الشعر في تركيا
 * Landing Page for Watheq Clinic - Hair Transplant in Turkey
 *
 * المتطلبات:
 * - صفحة واحدة مختصرة بدون تشتيت
 * - زر واتساب واضح في الأعلى + عائم
 * - صورة قبل وبعد في الأعلى
 * - 8 صور نتائج قبل وبعد
 * - فيديو
 * - عرض لفترة محدودة (5980 ريال شامل الطيران والفندق)
 * - زر تقييم حالة مجاناً (واتساب)
 * - تفاصيل العرض
 * - متابعة مالك الشركة على سناب شات
 * - أداء فائق السرعة
 */

import type { Metadata } from "next";
import { Suspense } from "react";
import { HeroSection } from "@/components/landing/hero-section";
import { TrustBadges } from "@/components/landing/trust-badges";
import { BeforeAfterGallery } from "@/components/landing/before-after-gallery";
import { VideoSection } from "@/components/landing/video-section";
import { OfferSection } from "@/components/landing/offer-section";
import { SnapchatFollow } from "@/components/landing/snapchat-follow";
import { FinalCTA } from "@/components/landing/final-cta";
import { FloatingWhatsApp } from "@/components/landing/floating-whatsapp";

export const metadata: Metadata = {
  title: "واثق كلينك | زراعة الشعر في تركيا شامل الطيران والفندق بـ 5980 ريال",
  description:
    "زراعة الشعر في تركيا بتقنية DHI بدون ألم - شركة سعودية الأولى للسياحة العلاجية. العرض يشمل الطيران والفندق والبلازما مجاناً. احجز استشارتك المجانية الآن!",
};

// Configuration - easy to update
export const CONTACT = {
  whatsapp: "966532424669",
  whatsappLink:
    "https://wa.me/966532424669?text=" +
    encodeURIComponent(
      "السلام عليكم، حابب أستفسر عن عرض زراعة الشعر في تركيا شامل الطيران والفندق بـ 5980 ريال"
    ),
  snapchat: "https://snapchat.com/t/cjtiTF1s",
  phone: "+966532424669",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section - صورة قبل وبعد + زر واتساب واضح */}
      <HeroSection />

      {/* شارات الثقة - شركة سعودية + نتائج مضمونة */}
      <TrustBadges />

      {/* معرض صور قبل وبعد - 8 صور */}
      <BeforeAfterGallery />

      {/* قسم الفيديو */}
      <VideoSection />

      {/* قسم العرض المحدود - 5980 ريال */}
      <OfferSection />

      {/* متابعة مالك الشركة على سناب شات */}
      <SnapchatFollow />

      {/* CTA نهائي */}
      <FinalCTA />

      {/* زر واتساب عائم - ثابت في كل الصفحة */}
      <FloatingWhatsApp />
    </main>
  );
}
