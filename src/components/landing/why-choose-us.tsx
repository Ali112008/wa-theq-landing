const reasons = [
  {
    icon: "shield",
    title: "ضمان النتائج",
    desc: "نضمن لك نتائج مرضية مع متابعة كاملة بعد العملية",
  },
  {
    icon: "tech",
    title: "تقنيات حديثة",
    desc: "أحدث تقنيات زراعة الشعر العالمية DHI و Sapphire",
  },
  {
    icon: "doctors",
    title: "أطباء متخصصون",
    desc: "نخبة من أفضل أطباء التجميل في تركيا",
  },
  {
    icon: "plane",
    title: "شامل الطيران والفندق",
    desc: "عرض متكامل يشمل الطيران والإقامة الفندقية",
  },
  {
    icon: "price",
    title: "أسعار منافسة",
    desc: "أفضل سعر في السوق السعودي مع جودة عالية",
  },
  {
    icon: "consult",
    title: "استشارة مجانية",
    desc: "تقييم حالتك مجاناً قبل اتخاذ أي قرار",
  },
];

export function WhyChooseUs() {
  return (
    <section
      className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
      aria-label="لماذا تختار واثق"
    >
      {/* خلفية زخرفية */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0a0e1a 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* العنوان */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block bg-gold/20 text-gold-dark px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3">
            مزايا واثق كلينك
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0a0e1a] mb-3">
            لماذا تختار <span className="text-gold-dark">واثق؟</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            نقدم لك تجربة متكاملة من الاستشارة حتى النتيجة النهائية، بأعلى
            معايير الجودة والاحترافية
          </p>
        </div>

        {/* شبكة المزايا - 6 بطاقات */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl border border-gray-100 hover:border-gold-light transition-all duration-300 hover:-translate-y-1"
            >
              {/* الأيقونة */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-gold to-gold-dark rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md shadow-gold-dark/20">
                <ReasonIcon icon={reason.icon} className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              {/* العنوان */}
              <h3 className="font-bold text-[#0a0e1a] text-sm sm:text-lg mb-1.5">
                {reason.title}
              </h3>
              {/* الوصف */}
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReasonIcon({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) {
  const icons: Record<string, React.ReactElement> = {
    shield: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    tech: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    doctors: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        <path d="m11 11 2 2 4-4" />
      </svg>
    ),
    plane: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
      </svg>
    ),
    price: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
    consult: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h.01M12 10h.01M16 10h.01" />
      </svg>
    ),
  };
  return <span className={className}>{icons[icon]}</span>;
}
