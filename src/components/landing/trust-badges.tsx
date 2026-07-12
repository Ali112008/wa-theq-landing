import { ShieldIcon, StarIcon, HeartIcon, CheckIcon } from "./icons";
import { WhatsAppButton } from "./whatsapp-button";

const features = [
  { icon: ShieldIcon, text: "الضمان الممتد" },
  { icon: CheckIcon, text: "النتائج من أول جلسة" },
  { icon: StarIcon, text: "الخبرة والاحترافية" },
];

export function TrustBadges() {
  return (
    <section
      className="py-8 sm:py-10 bg-white border-b border-gray-100"
      aria-label="مميزات واثق كلينك"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* صورة عملاء - يسار */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3 rtl:space-x-reverse">
              {["أ", "م", "ع", "س", "خ"].map((letter, i) => (
                <div
                  key={i}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white overflow-hidden bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold shadow-md"
                >
                  {letter}
                </div>
              ))}
            </div>
            <div className="text-right">
              <div className="flex items-center gap-0.5 justify-start">
                {[1, 2, 3, 4, 5].map((i) => (
                  <StarIcon key={i} className="w-4 h-4 text-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-gray-700 font-bold">
                +1000 عميل سعيد
              </p>
            </div>
          </div>

          {/* زر واتساب - وسط */}
          <WhatsAppButton size="md" className="hidden sm:inline-flex">
            اتصل بنا عبر الواتساب
          </WhatsAppButton>

          {/* المميزات - يمين */}
          <div className="flex flex-col gap-2">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="flex items-center gap-2">
                  <span className="flex-shrink-0 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                    <Icon className="w-4 h-4 text-amber-600" />
                  </span>
                  <span className="text-sm sm:text-base text-gray-800 font-semibold">
                    {f.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
