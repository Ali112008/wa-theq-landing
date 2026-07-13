import { WhatsAppButton } from "./whatsapp-button";
import { CheckIcon } from "./icons";

const offerIncludes = [
  "الطيران ذهاب وعودة الرياض - اسطنبول",
  "الإقامة بفندق ليلتين",
  "بلازما مجاناً",
  "شامبو ورغوة مجاناً",
  "الزراعة بدون ألم",
];

export function OfferSection() {
  return (
    <section
      className="py-8 sm:py-12 bg-black border-t border-amber-500/10 relative overflow-hidden"
      aria-label="عرض زراعة الشعر"
    >
      {/* خلفية زخرفية */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(212, 175, 55, 0.6) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-2xl mx-auto px-4">
        {/* شارة عرض محدود */}
        <div className="text-center mb-4">
          <span className="inline-flex items-center gap-2 bg-amber-400 text-black px-4 py-1.5 rounded-full text-sm font-bold animate-pulse">
            ⏰ عرض لفترة محدودة
          </span>
        </div>

        {/* العنوان */}
        <h2 className="text-xl sm:text-2xl font-black text-center text-white mb-4 leading-relaxed">
          الزراعة شامل الطيران والفندق
          <br />
          <span className="text-amber-400 text-3xl sm:text-4xl">بـ 5,980 ريال</span>
        </h2>

        {/* صندوق العرض */}
        <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-amber-500/40 rounded-2xl p-5 sm:p-6 shadow-2xl">
          {/* العرض يشمل */}
          <h3 className="text-amber-400 font-bold mb-3 text-center">العرض يشمل:</h3>

          <ul className="space-y-2 mb-4">
            {offerIncludes.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-white text-sm sm:text-base">
                <span className="flex-shrink-0 w-5 h-5 bg-amber-400/20 rounded-full flex items-center justify-center">
                  <CheckIcon className="w-3 h-3 text-amber-400" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* تقنية DHI - مميزة */}
          <div className="bg-amber-400/10 border border-amber-400/30 rounded-xl p-3 mb-5 text-center">
            <p className="text-amber-400 font-bold text-sm sm:text-base">
              الزراعة بتقنية DHI
            </p>
          </div>

          {/* زر تقييم مجاناً */}
          <WhatsAppButton size="lg" variant="gold" className="w-full" message="consultation">
            لتقييم حالتك مجاناً
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
