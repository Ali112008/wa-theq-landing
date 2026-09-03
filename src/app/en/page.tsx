import type { Metadata } from "next";
import { HeroSection, BeforeAfterGallery, OfferSection, SnapchatFollow, FloatingWhatsApp } from "@/components/landing/page-content";

export const metadata: Metadata = {
  title: "Watheq Clinic | Hair Transplant in Turkey Including Flights & Hotel - 5,980 SAR",
  description:
    "Hair transplant in Turkey with DHI technique - painless. Saudi Arabia's #1 medical tourism company. Package includes: Round-trip flights Riyadh-Istanbul + 2 nights hotel + free PRP + free shampoo & foam. Book your free consultation now!",
  authors: [{ name: "Watheq Clinic" }],
  creator: "Watheq Clinic",
  publisher: "Watheq Clinic",
  keywords: [
    "hair transplant Turkey",
    "DHI hair transplant",
    "medical tourism Turkey",
    "Watheq Clinic",
    "painless hair transplant",
    "hair transplant including flights",
    "Saudi hair transplant",
    "free hair transplant consultation",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  themeColor: "#0a0e1a",
  formatDetection: { telephone: false },
  openGraph: {
    title: "Watheq Clinic | Hair Transplant in Turkey Including Flights & Hotel - 5,980 SAR",
    description:
      "Painless DHI hair transplant - package includes flights, hotel, and free PRP. Saudi Arabia's #1 medical tourism company in Turkey.",
    url: "https://wa-theq.com/landing-page/en",
    siteName: "Watheq Clinic",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://wa-theq.com/landing-page/images/og-image.webp",
        width: 280,
        height: 100,
        alt: "Watheq Clinic - Saudi Arabia's #1 Medical Tourism Company in Turkey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Watheq Clinic | Hair Transplant in Turkey",
    description: "DHI hair transplant including flights & hotel - 5,980 SAR",
    images: ["https://wa-theq.com/landing-page/images/og-image.webp"],
  },
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
