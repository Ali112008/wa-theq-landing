import { HeroSection } from "@/components/landing/hero-section";
import { BeforeAfterGallery } from "@/components/landing/before-after-gallery";
import { VideoSection } from "@/components/landing/video-section";
import { OfferSection } from "@/components/landing/offer-section";
import { SnapchatFollow } from "@/components/landing/snapchat-follow";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden" style={{ backgroundColor: "#050505" }}>
      {/* 1. Hero - Logo + Headline + Trust Badge + CTA */}
      <HeroSection />

      {/* 2. Before/After Results - 8 images grid */}
      <BeforeAfterGallery />

      {/* 3. Video Testimonial */}
      <VideoSection />

      {/* 4. Offer + Includes + CTA */}
      <OfferSection />

      {/* 5. Snapchat CTA */}
      <SnapchatFollow />
    </main>
  );
}
