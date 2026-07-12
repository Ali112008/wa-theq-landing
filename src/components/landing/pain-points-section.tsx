import { WhatsAppButton } from "./whatsapp-button";

const problems = [
  {
    icon: "hairLoss",
    title: "تساقط الشعر المستمر",
    desc: "كل يوم بتلاحظ شعر على الوسادة والمشط والاستحمام",
  },
  {
    icon: "baldness",
    title: "الصلع الأمامي والفراغات",
    desc: "خط الشعر بدأ يتراجع وبانت الفراغات الواضحة",
  },
  {
    icon: "confidence",
    title: "فقدان الثقة بالنفس",
    desc: "بتجنب الصور والمناسبات والنظر في المرآة",
  },
  {
    icon: "failedTreatments",
    title: "تجارب علاجية فاشلة",
    desc: "جربت زيوت وفيتامينات وكريمات بدون أي نتيجة",
  },
  {
    icon: "hesitation",
    title: "التردد في اتخاذ القرار",
    desc: "خايف من العملية، من النتيجة، من التكلفة",
  },
];

export function PainPointsSection() {
  return (
    <section
      className="py-16 sm:py-20 bg-white relative overflow-hidden"
      aria-label="هل تعاني من مشاكل الشعر؟"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* العمود الأيمن - النص والمشاكل */}
          <div>
            {/* عنوان */}
            <div className="mb-6">
              <span className="inline-block bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-4">
                هل هذا يحدث لك؟
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0a0e1a] mb-3 leading-[1.5]">
                هل تعاني من
                <br />
                <span className="text-amber-500">هذه المشاكل؟</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                لو واجهت أي من هذه المشاكل، فأنت في المكان الصحيح. الحل بين
                يديك الآن.
              </p>
            </div>

            {/* قائمة المشاكل الخمسة */}
            <div className="space-y-3 mb-8">
              {problems.map((problem, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-amber-300 hover:bg-amber-50/50 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <ProblemIcon
                      icon={problem.icon}
                      className="w-5 h-5 text-red-500"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#0a0e1a] text-sm sm:text-base">
                      {problem.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {problem.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA - أرسل صور حالتك الآن */}
            <div className="bg-gradient-to-l from-[#0a0e1a] to-[#131a2e] rounded-2xl p-5 sm:p-6">
              <p className="text-white text-lg sm:text-xl font-bold mb-2">
                أرسل صور حالتك الآن
              </p>
              <p className="text-gray-300 text-sm mb-4">
                واحصل على تقييم مجاني وخطة علاج مناسبة لحالتك
              </p>
              <WhatsAppButton size="lg" message="consultation" className="w-full">
                أرسل صور حالتك عبر واتساب
              </WhatsAppButton>
            </div>
          </div>

          {/* العمود الأيسر - موك أب الهاتف مع شات واتساب */}
          <div className="flex justify-center order-first lg:order-last mb-8 lg:mb-0">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative">
      {/* هاتف بإطار */}
      <div className="relative w-[280px] sm:w-[320px] bg-[#0a0e1a] rounded-[2.5rem] p-3 shadow-2xl">
        {/* النتوء العلوي */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#0a0e1a] rounded-b-2xl z-20" />

        {/* الشاشة */}
        <div className="bg-[#e5ddd5] rounded-[2rem] overflow-hidden h-[580px] flex flex-col">
          {/* شريط الحالة */}
          <div className="bg-[#075e54] text-white px-3 py-2 flex items-center justify-between text-[10px]">
            <span>9:41</span>
            <div className="flex gap-1">
              <span>●●●</span>
              <span>📶</span>
              <span>🔋</span>
            </div>
          </div>

          {/* رأس الواتساب */}
          <div className="bg-[#075e54] text-white px-3 py-2 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center font-black text-xs">
              و
            </div>
            <div className="flex-1">
              <p className="font-bold text-xs">واثق كلينك</p>
              <p className="text-[9px] opacity-80">متصل الآن</p>
            </div>
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
            </svg>
          </div>

          {/* الشات */}
          <div className="flex-1 overflow-hidden p-3 space-y-3" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='%23e5ddd5'/%3E%3Cpath d='M20 15l-5 10M25 15l-5 10' stroke='%23d4cab4' stroke-width='0.5' fill='none'/%3E%3C/svg%3E\")"
          }}>
            {/* رسالة العميل */}
            <div className="flex justify-end">
              <div className="bg-[#dcf8c6] rounded-lg rounded-tr-none px-3 py-2 max-w-[200px] shadow-sm">
                <p className="text-[10px] text-gray-800 leading-relaxed">
                  السلام عليكم، عندي مشكلة في تساقط الشعر وحابب أعرف الحل
                </p>
                <p className="text-[8px] text-gray-500 text-left mt-1">9:40 ✓✓</p>
              </div>
            </div>

            {/* رسالة العيادة */}
            <div className="flex justify-start">
              <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 max-w-[220px] shadow-sm">
                <p className="text-[10px] text-gray-800 leading-relaxed mb-1">
                  وعليكم السلام ورحمة الله 🌟
                </p>
                <p className="text-[10px] text-gray-800 leading-relaxed">
                  أهلاً بك في واثق كلينك. لمساعدتك بشكل أفضل:
                </p>
                <p className="text-[10px] text-gray-800 font-semibold leading-relaxed mt-1">
                  📸 أرسل صور حالتك الآن من الأمام والجوانب ومن الأعلى
                </p>
                <p className="text-[10px] text-gray-800 leading-relaxed mt-1">
                  وسنقدم لك <span className="text-[#075e54] font-bold">تقييم مجاني</span> وخطة العلاج المناسبة
                </p>
                <p className="text-[8px] text-gray-500 text-left mt-1">9:41</p>
              </div>
            </div>

            {/* صورة قبل/بعد في الشات */}
            <div className="flex justify-end">
              <div className="bg-[#dcf8c6] rounded-lg rounded-tr-none p-1 max-w-[180px] shadow-sm">
                <div className="bg-white rounded overflow-hidden">
                  <img
                    src="/images/hair-loss-example.webp"
                    alt="صورة حالة تساقط الشعر"
                    width={180}
                    height={180}
                    className="w-full h-32 object-cover"
                    loading="lazy"
                  />
                  <p className="text-[8px] text-gray-600 p-1.5 text-center">
                    صورة حالتي 📷
                  </p>
                </div>
                <p className="text-[8px] text-gray-500 text-left mt-1 px-1">9:42 ✓✓</p>
              </div>
            </div>

            {/* رد العيادة */}
            <div className="flex justify-start">
              <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 max-w-[220px] shadow-sm">
                <p className="text-[10px] text-gray-800 leading-relaxed">
                  ✅ تم استلام صورك بنجاح!
                </p>
                <p className="text-[10px] text-gray-800 leading-relaxed mt-1">
                  حالتك مناسبة جداً لزراعة الشعر بتقنية DHI. سأرسل لك خطة العلاج والتفاصيل كاملة.
                </p>
                <p className="text-[8px] text-gray-500 text-left mt-1">9:43</p>
              </div>
            </div>

            {/* مؤشر الكتابة */}
            <div className="flex justify-start">
              <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 shadow-sm">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                </div>
              </div>
            </div>
          </div>

          {/* شريط الكتابة السفلي */}
          <div className="bg-[#f0f0f0] px-2 py-1.5 flex items-center gap-1.5">
            <div className="flex-1 bg-white rounded-full px-3 py-1.5 flex items-center gap-1">
              <span className="text-[9px] text-gray-400 flex-1">اكتب رسالة</span>
              <span className="text-[10px]">😊</span>
            </div>
            <div className="w-7 h-7 bg-[#075e54] rounded-full flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* شارة عائمة - تقييم مجاني */}
      <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#25D366] to-[#1ebe5d] text-white px-4 py-2 rounded-full font-bold text-xs sm:text-sm shadow-xl flex items-center gap-1.5">
        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
        تقييم مجاني الآن
      </div>
    </div>
  );
}

function ProblemIcon({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) {
  const icons: Record<string, React.ReactElement> = {
    hairLoss: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 14c0-3 2-5 5-5s5 2 5 5" />
        <path d="M9 18l-1 3M14 18l-1 3M19 16l2 2" />
        <circle cx="12" cy="9" r="1" />
      </svg>
    ),
    baldness: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8 2 5 5 5 9v3a7 7 0 0 0 14 0V9c0-4-3-7-7-7z" />
        <path d="M8 12c1.5-1 2.5-1.5 4-1.5s2.5.5 4 1.5" opacity="0.5" />
      </svg>
    ),
    confidence: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M9 14c-2 1-3 3-3 5v2h12v-2c0-2-1-4-3-5" />
        <path d="M8 8c0-1 .5-2 1.5-2M15 6c1 0 2 1 2 2" opacity="0.5" />
      </svg>
    ),
    failedTreatments: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 2v6l-4 6a4 4 0 0 0 3 6h8a4 4 0 0 0 3-6l-4-6V2" />
        <path d="M9 2h6M7 14h10" opacity="0.5" />
        <path d="M5 5l4 4M19 5l-4 4M5 19l4-4M19 19l-4-4" />
      </svg>
    ),
    hesitation: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 9c0-1 1-2 3-2s3 1 3 2-1 2-3 2v2" />
        <circle cx="12" cy="16" r="0.5" fill="currentColor" />
      </svg>
    ),
  };
  return <span className={className}>{icons[icon]}</span>;
}
