import { WhatsAppButton, WhatsAppIcon } from "./whatsapp-button";
import { SnapIcon, CheckIcon, StarIcon } from "./icons";

const serviceBadges = [
  { icon: "hair", text: "زراعة الشعر" },
  { icon: "syringe", text: "علاج البلازما" },
  { icon: "consult", text: "استشارة مجانية" },
  { icon: "shield", text: "نتائج مضمونة" },
  { icon: "star", text: "خبرة احترافية" },
];

export function HeroSection() {
  return (
    <header
      className="relative min-h-[100svh] flex flex-col overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #060818 0%, #0a0e1f 50%, #060818 100%)",
      }}
    >
      {/* خلفية زخرفية - تأثير النجوم/الضوء */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 30%, rgba(212, 175, 55, 0.15) 0%, transparent 45%), radial-gradient(circle at 75% 70%, rgba(212, 175, 55, 0.1) 0%, transparent 40%)",
        }}
        aria-hidden="true"
      />
      {/* نقاط ذهبية متناثرة */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(212, 175, 55, 0.4) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      {/* شريط علوي احترافي - نظيف ومتناسق */}
      <div className="relative z-20 backdrop-blur-xl bg-[#060818]/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 gap-4">
            {/* اللوجو - صغير ونظيف */}
            <a href="#" className="flex items-center flex-shrink-0" aria-label="واثق كلينك">
              <img
                src="/images/logo.webp"
                alt="واثق كلينك - Watheq Clinic"
                style={{ height: "28px", width: "auto" }}
                loading="eager"
                fetchPriority="high"
              />
            </a>

            {/* روابط سريعة - مخفية على الموبايل */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#gallery" className="text-white/70 hover:text-amber-400 text-sm font-medium transition-colors whitespace-nowrap">
                نتائجنا
              </a>
              <a href="#offer" className="text-white/70 hover:text-amber-400 text-sm font-medium transition-colors whitespace-nowrap">
                العرض
              </a>
              <a href="#how" className="text-white/70 hover:text-amber-400 text-sm font-medium transition-colors whitespace-nowrap">
                كيف نعمل
              </a>
              <a href="#faq" className="text-white/70 hover:text-amber-400 text-sm font-medium transition-colors whitespace-nowrap">
                الأسئلة
              </a>
            </nav>

            {/* الأزرار - واتساب فقط على الموبايل */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {/* زر سناب - مخفي على الموبايل */}
              <a
                href="https://snapchat.com/t/JIsiC5jo"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center justify-center w-9 h-9 bg-[#FFFC00] hover:bg-[#f0f000] text-black rounded-full hover:scale-110 transition-all shadow-md"
                aria-label="تابعنا على سناب شات"
                title="سناب المالك"
              >
                <SnapIcon className="w-5 h-5" />
              </a>

              {/* زر واتساب - يظهر دائماً */}
              <a
                href="https://wa.me/966532424669?text=السلام%20عليكم،%20حابب%20أستفسر%20عن%20عرض%20زراعة%20الشعر"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-3 sm:px-5 py-2 rounded-full font-bold text-xs sm:text-sm hover:scale-105 transition-all shadow-md shadow-[#25D366]/30 whitespace-nowrap"
                aria-label="تواصل معنا عبر واتساب"
              >
                <WhatsAppIcon className="w-4 h-4 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">تواصل معنا</span>
                <span className="sm:hidden">واتساب</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* المحتوى الرئيسي - تخطيط مقسم */}
      <div className="relative z-10 flex-1 flex items-center px-4 sm:px-8 py-8">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* العمود الأيمن - النص */}
          <div className="text-center lg:text-right order-2 lg:order-1">
            {/* شارة الشركة السعودية */}
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-5 backdrop-blur-sm">
              <span>🇸🇦 الشركة السعودية الأولى للسياحة العلاجية في تركيا 🇹🇷</span>
            </div>

            {/* العنوان الرئيسي */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 leading-[1.3]">
              استعد شعرك وثقتك
              <br />
              <span className="bg-gradient-to-l from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                بنفسك
              </span>
            </h1>

            {/* العنوان الفرعي */}
            <p className="text-base sm:text-lg md:text-xl text-amber-300/90 font-semibold mb-3">
              لا تترك فراغاً في حياتك بعد اليوم
            </p>

            {/* وصف */}
            <p className="text-sm sm:text-base text-gray-300 mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              إذا كنت تعاني من تساقط الشعر أو الصلع، فإننا نقدم لك حلاً
              متكاملاً ومضموناً بأحدث تقنيات زراعة الشعر العالمية، بإشراف
              نخبة من الأطباء في تركيا.
            </p>

            {/* شارات الخدمة - 5 أيقونات */}
            <div className="grid grid-cols-5 gap-2 sm:gap-3 mb-6 max-w-lg mx-auto lg:mx-0">
              {serviceBadges.map((badge, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-1.5 p-2 sm:p-3 rounded-xl bg-white/5 border border-amber-500/20 hover:border-amber-500/40 transition-colors backdrop-blur-sm"
                >
                  <ServiceBadgeIcon
                    icon={badge.icon}
                    className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400"
                  />
                  <span className="text-[10px] sm:text-xs text-white/80 text-center leading-tight font-medium">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>

            {/* زر واتساب */}
            <div className="flex justify-center lg:justify-start mb-5">
              <WhatsAppButton size="lg" className="w-full sm:w-auto">
                احصل على استشارة مجانية الآن
              </WhatsAppButton>
            </div>

            {/* social proof - عملاء راضون + صور حقيقية */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="flex -space-x-3 rtl:space-x-reverse">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#0a0e1f] overflow-hidden bg-amber-100 flex-shrink-0"
                  >
                    <img
                      src={`/images/clients/client-${i}.webp`}
                      alt={`عميل سعيد ${i}`}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 justify-center lg:justify-start">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarIcon key={i} className="w-4 h-4 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-white/80 font-medium">
                  أكثر من 1000 عميل راضٍ
                </p>
              </div>
            </div>
          </div>

          {/* العمود الأيسر - صورة قبل وبعد */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* إطار الصورة */}
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl ring-1 ring-amber-500/30">
                <img
                  src="/images/hero-before-after.webp"
                  alt="نتائج زراعة الشعر قبل وبعد - واثق كلينك"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
                {/* خط فاصل عمودي - يدل على الانقسام قبل/بعد */}
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/40" />

                {/* تسميات قبل وبعد - قبل على اليسار، بعد على اليمين */}
                <div className="absolute bottom-3 left-3 bg-black/80 text-white px-3 py-1 rounded-md text-xs font-bold backdrop-blur-sm border border-white/20">
                  قبل
                </div>
                <div className="absolute bottom-3 right-3 bg-amber-500 text-black px-3 py-1 rounded-md text-xs font-bold">
                  بعد
                </div>
              </div>

              {/* شارة النتيجة المضمونة */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-gradient-to-br from-amber-400 to-amber-600 text-[#0a0e1f] w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center font-black text-center text-[10px] sm:text-xs shadow-xl border-4 border-[#0a0e1f]">
                <span className="leading-tight">
                  نتائج
                  <br />
                  مضمونة
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* مؤشر التمرير */}
      <div className="relative z-10 pb-4 flex justify-center">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-amber-400/60"
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

function ServiceBadgeIcon({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) {
  switch (icon) {
    case "hair":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2a9 9 0 0 1 9 9v3a9 9 0 0 1-9 9 9 9 0 0 1-9-9v-3a9 9 0 0 1 9-9z" />
          <path d="M7 14c1.5-1 3-1.5 5-1.5s3.5.5 5 1.5M7 11c1.5-1 3-1.5 5-1.5s3.5.5 5 1.5" />
        </svg>
      );
    case "syringe":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 2 4 4M17 7 9.5 14.5M14 11l-7.5 7.5a2.121 2.121 0 0 1-3-3L11 8" />
          <path d="m18 2-7 7M9.5 14.5 7 17l-4-4 2.5-2.5M21 5l-3-3" />
        </svg>
      );
    case "consult":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      );
    case "shield":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "star":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      );
    default:
      return null;
  }
}
