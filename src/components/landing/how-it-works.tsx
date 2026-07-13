const steps = [
  {
    number: "1",
    icon: "phone",
    title: "تواصل معنا",
    desc: "أرسل صور حالتك عبر واتساب من الأمام والجوانب ومن الأعلى",
    color: "from-[#25D366] to-[#1ebe5d]",
  },
  {
    number: "2",
    icon: "consult",
    title: "تقييم مجاني وخطة علاج",
    desc: "يقدم لك فريقنا الطبي تقييماً مجانياً وخطة علاج مناسبة لحالتك",
    color: "from-amber-400 to-amber-600",
  },
  {
    number: "3",
    icon: "plane",
    title: "سافر واعمل العملية",
    desc: "نسافر لتركيا معك - الطيران والإقامة والعملية بشركة سعودية",
    color: "from-[#0a0e1a] to-[#131a2e]",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how"
      className="py-16 sm:py-20 bg-[#060818] relative overflow-hidden"
      aria-label="كيف تبدأ رحلتك"
    >
      {/* خلفية زخرفية */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(37, 211, 102, 0.1) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* العنوان */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3">
            خطوات بسيطة
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3">
            كيف تبدأ <span className="text-amber-400">رحلتك؟</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            3 خطوات بسيطة تفصلك عن استعادة شعرك وثقتك بنفسك
          </p>
        </div>

        {/* الخطوات */}
        <div className="relative">
          {/* خط الربط بين الخطوات */}
          <div className="hidden md:block absolute top-12 right-[16.66%] left-[16.66%] h-0.5 bg-gradient-to-l from-amber-500/30 via-amber-500/50 to-amber-500/30" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                {/* دائرة الرقم */}
                <div className={`relative w-24 h-24 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-2xl mb-6 z-10 ring-4 ring-[#060818]`}>
                  <StepIcon icon={step.icon} className="w-10 h-10 text-white" />
                  {/* رقم الخطوة */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center font-black text-[#0a0e1a] shadow-lg text-sm">
                    {step.number}
                  </div>
                </div>

                {/* العنوان */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {step.title}
                </h3>

                {/* الوصف */}
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA في النهاية */}
        <div className="text-center mt-12 sm:mt-16">
          <a
            href="https://wa.me/966532424669?text=السلام%20عليكم،%20أريد%20بدء%20رحلتي%20معكم%20وأرسل%20صور%20حالتي%20للتقييم%20المجاني"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-xl shadow-[#25D366]/30"
          >
            <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>ابدأ رحلتك الآن</span>
          </a>
          <p className="text-gray-500 text-xs sm:text-sm mt-3">
            ⚡ رد سريع خلال دقائق • استشارة مجانية • بدون التزام
          </p>
        </div>
      </div>
    </section>
  );
}

function StepIcon({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) {
  const icons: Record<string, React.ReactElement> = {
    phone: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
      </svg>
    ),
    consult: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M9 10h6M9 13h4" />
      </svg>
    ),
    plane: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
      </svg>
    ),
  };
  return <span className={className}>{icons[icon]}</span>;
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
    </svg>
  );
}
