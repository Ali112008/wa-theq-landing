import { HeroSection } from "@/components/landing/hero-section";
import { BeforeAfterGallery } from "@/components/landing/before-after-gallery";
import { OfferSection } from "@/components/landing/offer-section";
import { SnapchatFollow } from "@/components/landing/snapchat-follow";
import { FloatingWhatsApp } from "@/components/landing/floating-whatsapp";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden" style={{ backgroundColor: "#050505" }}>
      {/* 1. Hero - Logo + Headline + Trust Badge + CTA */}
      <HeroSection />

      {/* 2. Before/After Results - 9 images slider */}
      <BeforeAfterGallery />

      {/* 3. Offer + Includes + CTA */}
      <OfferSection />

      {/* 4. Snapchat CTA */}
      <SnapchatFollow />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </main>
  );
}
