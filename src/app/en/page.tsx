import type { Metadata } from "next";
import { HeroSection, BeforeAfterGallery, OfferSection, SnapchatFollow, FloatingWhatsApp } from "@/components/landing/page-content";

export const metadata: Metadata = {
  title: "Watheq Clinic | Hair Transplant in Turkey Including Flights & Hotel - 5,980 SAR",
  description: "Hair transplant in Turkey with DHI technique - painless. Saudi Arabia's #1 medical tourism company.",
};

export default function EnPage() {
  return (
    <main className="min-h-screen overflow-x-hidden" style={{ backgroundColor: "#050505" }}>
      <HeroSection lang="en" />
      <BeforeAfterGallery lang="en" />
      <OfferSection lang="en" />
      <SnapchatFollow lang="en" />
      <FloatingWhatsApp lang="en" />
    </main>
  );
}
