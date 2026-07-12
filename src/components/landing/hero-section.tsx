import { WhatsAppButton } from "./whatsapp-button";
import { SnapIcon } from "./icons";

export function HeroSection() {
  return (
    <header
      className="relative min-h-[100svh] flex flex-col"
      style={{
        background:
          "linear-gradient(135deg, #0a0e1a 0%, #131a2e 50%, #0a0e1a 100%)",
      }}
    >
      {/* خلفية زخرفية */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(251, 191, 36, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(37, 211, 102, 0.1) 0%, transparent 40%)",
        }}
        aria-hidden="true"
      />

      {/* شريط علوي - الشعار + زر سناب */}
      <div className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-4">
        <div className="flex items-center gap-2">
          {/* Logo */}
          <div className="bg-white/95 rounded-lg p-2 shadow-lg">
            <img
              src="/images/logo.png"
              alt="واثق كلينك - Watheq Clinic"
              width={120}
              height={43}
              className="h-10 sm:h-11 w-auto"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>

        {/* زر سناب في الأعلى */}
        <a
          href="https://snapchat.com/t/cjtiTF1s"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#FFFC00] text-black px-4 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg"
          aria-label="تابعنا على سناب شات"
        >
          <SnapIcon className="w-5 h-5" />
          <span className="hidden sm:inline">سناب المالك</span>
          <span className="sm:hidden">سناب</span>
        </a>
      </div>

      {/* المحتوى الرئيسي */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 pb-8 pt-2">
        {/* شارة الشركة السعودية */}
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 backdrop-blur-sm">
          <span className="text-base">🇸🇦</span>
          <span>الشركة السعودية الأولى للسياحة العلاجية في تركيا 🇹🇷</span>
        </div>

        {/* العنوان الرئيسي */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white text-center mb-3 sm:mb-4 leading-tight">
          زراعة الشعر في تركيا
          <br />
          <span className="bg-gradient-to-l from-amber-400 to-amber-300 bg-clip-text text-transparent">
            شامل الطيران والفندق
          </span>
        </h1>

        {/* السعر */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="text-gray-400 line-through text-lg sm:text-xl">
            7,000 ريال
          </span>
          <span className="text-4xl sm:text-5xl md:text-6xl font-black text-amber-400">
            5,980
          </span>
          <span className="text-xl sm:text-2xl font-bold text-amber-300">
            ريال
          </span>
        </div>

        {/* صورة قبل وبعد */}
        <div className="relative w-full max-w-md mb-6 sm:mb-8">
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl ring-2 ring-amber-500/30">
            <img
              src="/images/hero-before-after.webp"
              alt="نتائج زراعة الشعر قبل وبعد - واثق كلينك"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            {/* تسميات قبل وبعد - قبل على اليسار، بعد على اليمين */}
            <div className="absolute top-3 left-3 bg-red-500/90 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
              قبل
            </div>
            <div className="absolute top-3 right-3 bg-green-500/90 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
              بعد
            </div>
          </div>

          {/* شارة النتيجة */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-[#0a0e1a] px-5 py-2 rounded-full shadow-xl font-bold text-sm sm:text-base whitespace-nowrap">
            ✦ نتائج طبيعية مضمونة
          </div>
        </div>

        {/* زر واتساب الرئيسي - واضح وكبير */}
        <WhatsAppButton size="lg" className="w-full max-w-md text-center">
          احصل على تقييم حالتك مجاناً
        </WhatsAppButton>

        {/* ملاحظة تحفزية */}
        <p className="text-gray-400 text-xs sm:text-sm mt-3 text-center">
          ⚡ عرض لفترة محدودة - الكميات محدودة
        </p>

        {/* مؤشر التمرير */}
        <div className="mt-6 sm:mt-8 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}
