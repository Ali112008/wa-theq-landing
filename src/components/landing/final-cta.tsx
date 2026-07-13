import { WhatsAppButton } from "./whatsapp-button";
import { SnapIcon } from "./icons";
import { StarIcon } from "./icons";

export function FinalCTA() {
  return (
    <section
      className="py-16 sm:py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #060818 0%, #0a0e1f 50%, #060818 100%)",
      }}
      aria-label="جاهز تستعد ثقتك"
    >
      {/* خلفية زخرفية */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(212, 175, 55, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(37, 211, 102, 0.15) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />
      {/* نقاط ذهبية متناثرة */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(212, 175, 55, 0.4) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* شارة العرض المحدود */}
        <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 text-red-400 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          عرض لفترة محدودة - الكميات محدودة
        </div>

        {/* العنوان الرئيسي */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
          جاهز تستعيد
          <br />
          <span className="bg-gradient-to-l from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
            ثقتك؟
          </span>
        </h2>

        {/* الوصف */}
        <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          أرسل صور حالتك الآن واحصل على تقييم مجاني من نخبة الأطباء
        </p>

        {/* تقييم بالنجوم */}
        <div className="flex items-center justify-center gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <StarIcon key={i} className="w-6 h-6 text-amber-400" />
          ))}
        </div>
        <p className="text-gray-400 text-sm mb-8">
          تقييم 4.9/5 من أكثر من 1000 عميل سعيد
        </p>

        {/* الأزرار */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
          <WhatsAppButton size="lg" className="w-full sm:w-auto">
            احصل على تقييم مجاني الآن
          </WhatsAppButton>

          <a
            href="https://snapchat.com/t/JIsiC5jo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#FFFC00] hover:bg-[#f0f000] text-black font-bold px-8 py-4 rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto"
          >
            <SnapIcon className="w-5 h-5" />
            <span>تابعنا على سناب</span>
          </a>
        </div>

        {/* ضمانات */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-gray-400 mb-8">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#25D366]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>استشارة مجانية</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#25D366]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>بدون التزام</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#25D366]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>رد سريع خلال دقائق</span>
          </div>
        </div>

        {/* معلومات التواصل */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm">
            <a
              href="https://wa.me/966532424669"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-[#25D366] transition-colors"
            >
              <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>
              <span dir="ltr">+966 53 242 4669</span>
            </a>

            <div className="flex items-center gap-2 text-gray-300">
              <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>إسطنبول، تركيا</span>
            </div>

            <div className="flex items-center gap-2 text-gray-300">
              <span>🇸🇦 إدارة سعودية</span>
            </div>
          </div>

          {/* حقوق */}
          <p className="text-gray-500 text-xs mt-6">
            © {new Date().getFullYear()} واثق كلينك - الشركة السعودية الأولى
            للسياحة العلاجية في تركيا
          </p>
        </div>
      </div>
    </section>
  );
}
