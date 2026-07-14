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
      className="py-8 sm:py-12 border-t relative overflow-hidden"
      style={{ backgroundColor: "#000000", borderColor: "rgba(212, 175, 55, 0.1)" }}
      aria-label="عرض زراعة الشعر"
    >
      <div className="max-w-2xl mx-auto px-4">
        {/* شارة عرض محدود */}
        <div className="text-center mb-4">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold animate-pulse"
            style={{ backgroundColor: "#BF9B30", color: "#000000" }}
          >
            ⏰ عرض لفترة محدودة
          </span>
        </div>

        {/* العنوان */}
        <h2 className="text-lg sm:text-xl font-black text-center text-white mb-4 leading-relaxed">
          الزراعة شامل الطيران والفندق
          <br />
          <span style={{ color: "#BF9B30" }} className="text-3xl sm:text-4xl">بـ 5,980 ريال</span>
        </h2>

        {/* صندوق العرض */}
        <div
          className="rounded-2xl p-5 sm:p-6 shadow-2xl"
          style={{
            backgroundColor: "#0a0a0a",
            boxShadow: "0 0 0 2px rgba(212, 175, 55, 0.3)",
          }}
        >
          <h3 className="font-bold mb-3 text-center" style={{ color: "#BF9B30" }}>
            العرض يشمل:
          </h3>

          <ul className="space-y-2 mb-4">
            {offerIncludes.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-white text-sm sm:text-base">
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(212, 175, 55, 0.2)" }}
                >
                  <CheckIcon className="w-3 h-3" style={{ color: "#BF9B30" }} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* تقنية DHI */}
          <div
            className="rounded-xl p-3 mb-5 text-center"
            style={{
              backgroundColor: "rgba(212, 175, 55, 0.1)",
              border: "1px solid rgba(212, 175, 55, 0.3)",
            }}
          >
            <p className="font-bold text-sm sm:text-base" style={{ color: "#BF9B30" }}>
              الزراعة بتقنية DHI
            </p>
          </div>

          {/* زر تقييم مجاناً - أخضر */}
          <a
            href="https://wa.me/966532424669?text=السلام%20عليكم،%20أريد%20تقييم%20حالتي%20مجاناً"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 w-full px-6 py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 active:scale-95 text-white"
            style={{
              backgroundColor: "#25D366",
              boxShadow: "0 10px 25px rgba(37, 211, 102, 0.4)",
            }}
            aria-label="تواصل معنا عبر واتساب"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>لتقييم حالتك مجاناً</span>
          </a>
        </div>
      </div>
    </section>
  );
}
