import { WhatsAppButton, WhatsAppIcon } from "./whatsapp-button";
import { SnapIcon } from "./icons";
import Image from "next/image";

export function HeroSection() {
  return (
    <header
      className="relative min-h-[100svh] flex flex-col overflow-hidden bg-black"
    >
      {/* خلفية زخرفية ذهبية */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 30%, rgba(212, 175, 55, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(212, 175, 55, 0.15) 0%, transparent 40%)",
        }}
        aria-hidden="true"
      />

      {/* شريط علوي - اللوجو + زر سناب */}
      <div className="relative z-20 flex items-center justify-between px-4 py-3 border-b border-amber-500/20">
        <Image
          src="/images/logo.webp"
          alt="واثق كلينك - Watheq Clinic"
          width={100}
          height={36}
          style={{ height: "28px", width: "auto" }}
          priority
          fetchPriority="high"
        />
        <a
          href="https://snapchat.com/t/JIsiC5jo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-9 h-9 bg-amber-400 hover:bg-amber-300 text-black rounded-full transition-transform hover:scale-110"
          aria-label="تابعنا على سناب شات"
          title="سناب المالك"
        >
          <SnapIcon className="w-5 h-5" />
        </a>
      </div>

      {/* المحتوى الرئيسي */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-6 text-center">
        {/* اسم الشركة */}
        <h2 className="text-amber-400 text-base sm:text-lg font-bold mb-1">
          واثق كلينك
        </h2>
        <p className="text-gray-300 text-xs sm:text-sm mb-6">
          الشركة السعودية الأولى للسياحة العلاجية بتركيا
        </p>

        {/* صورة قبل وبعد */}
        <div className="relative w-full max-w-xs sm:max-w-sm mb-6">
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl ring-2 ring-amber-500/40">
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
            {/* خط فاصل عمودي */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/50" />
            {/* تسميات قبل/بعد */}
            <div className="absolute bottom-3 left-3 bg-black/80 text-white px-3 py-1 rounded-md text-xs font-bold">
              قبل
            </div>
            <div className="absolute bottom-3 right-3 bg-amber-400 text-black px-3 py-1 rounded-md text-xs font-bold">
              بعد
            </div>
          </div>
        </div>

        {/* زر واتساب واضح وكبير */}
        <WhatsAppButton size="lg" className="w-full max-w-xs" message="consultation">
          لتقييم حالتك مجاناً
        </WhatsAppButton>
      </div>
    </header>
  );
}
