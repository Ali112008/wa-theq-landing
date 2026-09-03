import { HeroSection, BeforeAfterGallery, OfferSection, SnapchatFollow, FloatingWhatsApp } from "@/components/landing/page-content";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden" style={{ backgroundColor: "#050505" }}>
      <HeroSection lang="ar" />
      <BeforeAfterGallery lang="ar" />
      <OfferSection lang="ar" />
      <SnapchatFollow lang="ar" />
      <FloatingWhatsApp lang="ar" />
    </main>
  );
}
