/**
 * واثق كلينك - صفحة هبوط زراعة الشعر في تركيا
 * Landing Page for Watheq Clinic - Hair Transplant in Turkey
 *
 * متطلبات العميل (مختصرة):
 * - صفحة واحدة مختصرة بدون تشتيت
 * - زر واتساب واضح
 * - أعلى الصفحة: صورة قبل وبعد
 * - واثق كلينك - الشركة السعودية الأولى للسياحة العلاجية بتركيا
 * - تحت: 8 صور نتائج قبل وبعد
 * - تحت: فيديو
 * - تحت: عرض لفترة محدودة (5980 ريال شامل الطيران والفندق)
 * - زر تقييم حالتك مجاناً (واتساب)
 * - العرض يشمل: الطيران، الإقامة، بلازما، شامبو، بدون ألم، تقنية DHI
 * - متابعة مالك الشركة بسناب شات
 */

import { HeroSection } from "@/components/landing/hero-section";
import { BeforeAfterGallery } from "@/components/landing/before-after-gallery";
import { VideoSection } from "@/components/landing/video-section";
import { OfferSection } from "@/components/landing/offer-section";
import { SnapchatFollow } from "@/components/landing/snapchat-follow";
import { FloatingWhatsApp } from "@/components/landing/floating-whatsapp";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* 1. الهيرو - صورة قبل وبعد + زر واتساب واضح */}
      <HeroSection />

      {/* 2. معرض صور قبل وبعد - 8 صور */}
      <BeforeAfterGallery />

      {/* 3. فيديو */}
      <VideoSection />

      {/* 4. عرض لفترة محدودة - 5980 ريال شامل */}
      <OfferSection />

      {/* 5. متابعة مالك الشركة على سناب شات */}
      <SnapchatFollow />

      {/* زر واتساب عائم - ثابت في كل الصفحة */}
      <FloatingWhatsApp />
    </main>
  );
}
