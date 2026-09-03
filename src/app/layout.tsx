import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "واثق كلينك | زراعة الشعر في تركيا شامل الطيران والفندق بـ 5980 ريال",
  description: "زراعة الشعر في تركيا بتقنية DHI بدون ألم",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function(){a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};a.queue=[];var s='script';r=t.createElement(s);r.async=!0;r.src=n;var u=t.getElementsByTagName(s)[0];u.parentNode.insertBefore(r,u);})(window,document,'https://sc-static.net/scevent.min.js');snaptr('init','cc37a417-5323-4860-bdeb-24a547c30289');snaptr('track','PAGE_VIEW');`,
          }}
        />
      </head>
      <body className={`${cairo.variable} font-cairo antialiased`}>{children}</body>
    </html>
  );
}
