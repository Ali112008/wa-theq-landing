import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wa-theq.com"),
  title: "واثق كلينك | زراعة الشعر في تركيا شامل الطيران والفندق بـ 5980 ريال",
  description:
    "زراعة الشعر في تركيا بتقنية DHI بدون ألم - شركة سعودية الأولى للسياحة العلاجية. العرض يشمل: الطيران ذهاب وعودة الرياض-إسطنبول + إقامة فندقية ليلتين + بلازما مجاناً + شامبو ورغوة مجاناً. احجز استشارتك المجانية الآن!",
  keywords: [
    "زراعة الشعر في تركيا",
    "زراعة الشعر بتقنية DHI",
    "السياحة العلاجية في تركيا",
    "واثق كلينك",
    "زراعة الشعر بدون ألم",
    "زراعة الشعر شامل الطيران",
    "زراعة الشعر السعود",
    "استشارة زراعة شعر مجانية",
  ],
  authors: [{ name: "واثق كلينك" }],
  creator: "واثق كلينك",
  publisher: "واثق كلينك",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://wa-theq.com/landing-page",
  },
  openGraph: {
    title: "واثق كلينك | زراعة الشعر في تركيا شامل الطيران والفندق بـ 5980 ريال",
    description:
      "زراعة الشعر بتقنية DHI بدون ألم - العرض يشمل الطيران والفندق والبلازما مجاناً. شركة سعودية الأولى للسياحة العلاجية في تركيا.",
    url: "https://wa-theq.com/landing-page",
    siteName: "واثق كلينك",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "/images/hero-before-after.webp",
        width: 1000,
        height: 1000,
        alt: "نتائج زراعة الشعر قبل وبعد - واثق كلينك",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "واثق كلينك | زراعة الشعر في تركيا",
    description: "زراعة الشعر بتقنية DHI شامل الطيران والفندق بـ 5980 ريال",
    images: ["/images/hero-before-after.webp"],
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  other: {
    "theme-color": "#0a0e1a",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "واثق كلينك - Watheq Clinic",
              description:
                "الشركة السعودية الأولى للسياحة العلاجية في تركيا، متخصصة في زراعة الشعر بتقنية DHI",
              url: "https://wa-theq.com",
              logo: "https://wa-theq.com/wp-content/uploads/2025/05/Untitled-1.png",
              image: "https://wa-theq.com/wp-content/uploads/2025/05/male-adulte-faisant-une-extraction-d-unite-folliculaire-68236705365ab.webp",
              telephone: "+966532424669",
              priceRange: "5980 SAR",
              address: {
                "@type": "PostalAddress",
                addressCountry: "TR",
                addressLocality: "Istanbul",
              },
              areaServed: ["SA", "TR"],
              medicalSpecialty: "HairTransplant",
              offer: {
                "@type": "Offer",
                name: "زراعة الشعر شامل الطيران والفندق",
                price: "5980",
                priceCurrency: "SAR",
                description:
                  "زراعة الشعر بتقنية DHI شامل: الطيران ذهاب وعودة، إقامة فندقية ليلتين، بلازما مجاناً، شامبو ورغوة مجاناً، بدون ألم",
                availability: "https://schema.org/LimitedAvailability",
                validThrough: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
              },
              sameAs: ["https://snapchat.com/t/cjtiTF1s"],
            }),
          }}
        />
      </head>
      <body
        className={`${cairo.variable} font-cairo antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
