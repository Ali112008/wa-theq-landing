import { SnapIcon } from "./icons";

export function SnapchatFollow() {
  return (
    <section
      className="py-12 sm:py-16 bg-gradient-to-b from-[#131a2e] to-[#0a0e1a]"
      aria-label="متابعة مالك الشركة على سناب شات"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-l from-[#FFFC00]/10 to-transparent border-2 border-[#FFFC00]/30 rounded-3xl p-6 sm:p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#FFFC00] rounded-full mb-4 shadow-lg">
            <SnapIcon className="w-9 h-9 sm:w-12 sm:h-12 text-black" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3">
            تابع <span className="text-[#FFFC00]">مالك الشركة</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mb-6 max-w-xl mx-auto">
            شاهد أحدث قصص النجاح والنتائج الحقيقية ولحظات من داخل العيادة على
            سناب شات
          </p>

          <a
            href="https://snapchat.com/t/cjtiTF1s"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#FFFC00] hover:bg-[#f0f000] text-black font-bold px-8 py-4 rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-xl"
            aria-label="إضافة واثق كلينك على سناب شات"
          >
            <SnapIcon className="w-6 h-6" />
            <span>أضفنا على سناب شات</span>
          </a>

          {/* شارة - سناب حقيقي للمالك */}
          <p className="text-gray-400 text-xs sm:text-sm mt-4">
            ⭐ السناب الرسمي لمالك واثق كلينك - تحديثات يومية
          </p>
        </div>
      </div>
    </section>
  );
}
