import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

// Snap Pixel ID from client's live site
const SNAP_PIXEL_ID = "a3758dd4-a7e6-43fe-903c-68787a2064e8";

export const metadata: Metadata = {
  title: "واثق كلينك | زراعة الشعر في تركيا شامل الطيران والفندق بـ 5980 ريال",
  description:
    "زراعة الشعر في تركيا بتقنية DHI بدون ألم - شركة سعودية الأولى للسياحة العلاجية. العرض يشمل: الطيران ذهاب وعودة الرياض-إسطنبول + إقامة فندقية ليلتين + بلازما مجاناً + شامبو ورغوة مجاناً. احجز استشارتك المجانية الآن!",
  authors: [{ name: "واثق كلينك" }],
  creator: "واثق كلينك",
  publisher: "واثق كلينك",
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
    title: "واثق كلينك | زراعة الشعر في تركيا شامل الطيران والفندق بـ 5980 ريال",
    description:
      "زراعة الشعر بتقنية DHI بدون ألم - العرض يشمل الطيران والفندق والبلازما مجاناً. شركة سعودية الأولى للسياحة العلاجية في تركيا.",
    url: "https://wa-theq.com/landing-page",
    siteName: "واثق كلينك",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "https://wa-theq.com/landing-page/images/og-image.webp",
        width: 280,
        height: 100,
        alt: "واثق كلينك - الشركة السعودية الأولى للسياحة العلاجية بتركيا",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "واثق كلينك | زراعة الشعر في تركيا",
    description: "زراعة الشعر بتقنية DHI شامل الطيران والفندق بـ 5980 ريال",
    images: ["https://wa-theq.com/landing-page/images/og-image.webp"],
  },
};

// Schema.org structured data for SEO
const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "واثق كلينك - Watheq Clinic",
  description:
    "الشركة السعودية الأولى للسياحة العلاجية في تركيا، متخصصة في زراعة الشعر بتقنية DHI",
  url: "https://wa-theq.com",
  logo: "https://wa-theq.com/wp-content/uploads/2025/05/Untitled-1.png",
  image:
    "https://wa-theq.com/wp-content/uploads/2025/05/male-adulte-faisant-une-extraction-d-unite-folliculaire-68236705365ab.webp",
  telephone: "+966504358697",
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
  },
  sameAs: ["https://snapchat.com/t/JIsiC5jo"],
};

// Snap Pixel init script (matches client's live site)
const snapPixelScript = `(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function(){a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};a.queue=[];var s='script';r=t.createElement(s);r.async=!0;r.src=n;var u=t.getElementsByTagName(s)[0];u.parentNode.insertBefore(r,u);})(window,document,'https://sc-static.net/scevent.min.js');snaptr('init','${SNAP_PIXEL_ID}',{});snaptr('track','PAGE_VIEW');`;

// WhatsApp click tracking - fires PURCHASE event when WhatsApp links are clicked
// Uses document.links + href check to avoid querySelectorAll attribute selector issues in SSR
const whatsappTrackingScript = `(function(){function fireWAPurchase(){try{if(typeof snaptr==='function'){snaptr('track','PURCHASE',{'price':1,'currency':'SAR'});}}catch(e){}}function isWaLink(href){return href&&(href.indexOf('wa.me')>-1||href.indexOf('whatsapp')>-1||href.indexOf('api.whatsapp')>-1);}function bind(){var links=document.links;for(var i=0;i<links.length;i++){var h=links[i].getAttribute('href')||'';if(!isWaLink(h))continue;if(links[i].getAttribute('data-snap-wa-bound'))continue;links[i].setAttribute('data-snap-wa-bound','1');links[i].addEventListener('click',fireWAPurchase);}}if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',bind);}else{bind();}setTimeout(bind,1500);setTimeout(bind,4000);})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        {/* Snap Pixel - PAGE_VIEW tracking */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{ __html: snapPixelScript }}
        />
        {/* WhatsApp click tracking - PURCHASE event */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{ __html: whatsappTrackingScript }}
        />
        {/* Schema.org structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#0a0e1a" />
        {/* Format detection - prevent auto-linking of phone numbers */}
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${cairo.variable} font-cairo antialiased`}>
        {children}
      </body>
    </html>
  );
}
