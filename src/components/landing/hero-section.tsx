import Image from "next/image";
import { SnapIcon } from "./icons";

export function HeroSection() {
  return (
    <header
      className="relative min-h-[100svh] flex flex-col overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      {/* خلفية زخرفية ذهبية */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(212, 175, 55, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(212, 175, 55, 0.1) 0%, transparent 40%)",
        }}
        aria-hidden="true"
      />

      {/* اللوجو - فوق باليسار */}
      <div className="relative z-20 p-4" dir="ltr" style={{ textAlign: "left" }}>
        <Image
          src="/images/logo.webp"
          alt="واثق كلينك - Watheq Clinic"
          width={120}
          height={43}
          style={{ height: "32px", width: "auto" }}
          priority
          fetchPriority="high"
        />
      </div>

      {/* المحتوى الرئيسي */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 text-center">
        {/* اسم الشركة */}
        <h1 className="text-2xl sm:text-3xl font-black mb-1" style={{ color: "#C9B7AE" }}>
          واثق كلينك
        </h1>
        <p className="text-white/70 text-sm sm:text-base mb-6">
          الشركة السعودية الأولى للسياحة العلاجية بتركيا
        </p>

        {/* صورة قبل وبعد */}
        <div className="relative w-full max-w-xs sm:max-w-sm mb-6">
          <div
            className="relative aspect-square rounded-2xl overflow-hidden"
            style={{ boxShadow: "0 0 0 2px rgba(212, 175, 55, 0.4)" }}
          >
            <Image
              src="/images/hero-before-after.webp"
              alt="نتائج زراعة الشعر قبل وبعد - واثق كلينك"
              width={400}
              height={400}
              className="w-full h-full object-cover"
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 400px"
            />
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/50" />
            <div className="absolute bottom-3 left-3 bg-black/80 text-white px-3 py-1 rounded-md text-xs font-bold">
              قبل
            </div>
            <div
              className="absolute bottom-3 right-3 px-3 py-1 rounded-md text-xs font-bold"
              style={{ backgroundColor: "#C9B7AE", color: "#000000" }}
            >
              بعد
            </div>
          </div>
        </div>

        {/* زر واتساب أخضر واضح */}
        <a
          href="https://wa.me/966532424669?text=السلام%20عليكم،%20أريد%20تقييم%20حالتي%20مجاناً"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 w-full max-w-xs px-6 py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 active:scale-95 text-white"
          style={{
            backgroundColor: "#25D366",
            boxShadow: "0 10px 25px rgba(37, 211, 102, 0.4)",
          }}
          aria-label="تواصل معنا عبر واتساب"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          <span>تواصل معنا الآن</span>
        </a>
      </div>
    </header>
  );
}
