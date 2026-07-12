import { WhatsAppButton } from "./whatsapp-button";
import {
  PlaneIcon,
  HotelIcon,
  SyringeIcon,
  BottleIcon,
  NoPainIcon,
  DhiIcon,
  ClockIcon,
  CheckIcon,
  StarIcon,
} from "./icons";

const offerItems = [
  { icon: PlaneIcon, title: "الطيران ذهاب وعودة", desc: "الرياض ↔ إسطنبول" },
  { icon: HotelIcon, title: "الإقامة الفندقية", desc: "ليلتين في فندق مريح" },
  { icon: SyringeIcon, title: "البلازما PRP", desc: "مجاناً - قيمة 800 ريال" },
  {
    icon: BottleIcon,
    title: "شامبو ورغوة",
    desc: "مجاناً - للعناية بعد العملية",
  },
  { icon: NoPainIcon, title: "زراعة بدون ألم", desc: "بتخدير موضعي مريح" },
  { icon: DhiIcon, title: "تقنية DHI", desc: "أحدث تقنيات زراعة الشعر" },
];

export function OfferSection() {
  return (
    <section
      id="offer"
      className="py-12 sm:py-16 relative overflow-hidden"
      style={{ background: "#000000" }}
      aria-label="عرض زراعة الشعر الشامل"
    >
      {/* خلفية زخرفية - نقاط ذهبية */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(212, 175, 55, 0.6) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* شارة العرض المحدود */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2 rounded-full text-sm sm:text-base font-bold mb-4 shadow-lg shadow-red-600/30 animate-pulse">
            <ClockIcon className="w-5 h-5" />
            <span>عرض لفترة محدودة</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2">
            زراعة الشعر شامل الطيران والفندق
          </h2>
          <p className="text-amber-400 text-base sm:text-lg font-semibold">
            بتقنية DHI - أحدث تقنيات زراعة الشعر
          </p>
        </div>

        {/* صندوق العرض الرئيسي - أسود مع ذهبي */}
        <div className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border-2 border-amber-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
            {/* السعر - يسار */}
            <div className="text-center md:text-right">
              {/* شارة الخصم */}
              <div className="inline-flex flex-col items-center bg-amber-500 text-black px-4 py-2 rounded-2xl mb-4 shadow-lg">
                <span className="text-xs font-bold">تخفيض خاص</span>
                <span className="text-sm font-black">حتى 1000 ريال</span>
              </div>

              {/* السعر القديم */}
              <div className="mb-2">
                <span className="text-gray-500 text-sm">السعر الأصلي</span>
                <div className="text-gray-500 line-through text-2xl sm:text-3xl">
                  7,000
                </div>
              </div>

              {/* السعر الجديد */}
              <div className="mb-2">
                <div className="flex items-baseline justify-center md:justify-start gap-2">
                  <span className="text-6xl sm:text-7xl md:text-8xl font-black text-amber-400 leading-none">
                    5,980
                  </span>
                  <span className="text-2xl sm:text-3xl font-bold text-amber-300">
                    ريال
                  </span>
                </div>
              </div>

              <p className="text-gray-400 text-xs sm:text-sm mt-3">
                شامل كل شيء - بدون رسوم خفية
              </p>
            </div>

            {/* ماذا يحصل العميل - يمين */}
            <div className="bg-white/5 border border-amber-500/20 rounded-2xl p-5 sm:p-6">
              <h3 className="text-amber-400 text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
                <StarIcon className="w-5 h-5" />
                ماذا يحصل العميل؟
              </h3>

              <ul className="space-y-3">
                {offerItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-white"
                    >
                      <span className="flex-shrink-0 w-7 h-7 bg-amber-500/20 rounded-full flex items-center justify-center">
                        <CheckIcon className="w-4 h-4 text-amber-400" />
                      </span>
                      <div className="flex-1">
                        <span className="font-semibold text-sm sm:text-base">
                          {item.title}
                        </span>
                        <span className="text-gray-400 text-xs sm:text-sm block">
                          {item.desc}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* زر CTA ذهبي */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="https://wa.me/966532424669?text=السلام%20عليكم،%20حابب%20أستفسر%20عن%20عرض%20زراعة%20الشعر%20في%20تركيا%20شامل%20الطيران%20والفندق%20بـ%205980%20ريال"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-l from-amber-500 to-amber-400 text-black font-black px-10 py-4 rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-xl shadow-amber-500/30 w-full sm:w-auto"
            >
              <span>احجز الآن</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>

            <a
              href="https://wa.me/966532424669?text=السلام%20عليكم،%20أريد%20تقييم%20حالتي%20مجاناً"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-xl shadow-[#25D366]/30 w-full sm:w-auto"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>تقييم حالتك مجاناً</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
    </svg>
  );
}
