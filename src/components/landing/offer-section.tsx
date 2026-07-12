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
} from "./icons";
import type { ComponentType } from "react";

interface OfferItem {
  icon: ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

const offerItems: OfferItem[] = [
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
      className="py-12 sm:py-16 bg-white relative overflow-hidden"
      aria-label="عرض زراعة الشعر الشامل"
    >
      {/* خلفية زخرفية */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 50%, #f59e0b 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        {/* شارة العرض المحدود */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-red-50 border-2 border-red-500 text-red-600 px-4 py-2 rounded-full text-sm sm:text-base font-bold mb-4 animate-pulse">
            <ClockIcon className="w-5 h-5" />
            <span>عرض لفترة محدودة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0a0e1a] mb-4 leading-tight">
            زراعة الشعر شامل الطيران والفندق
            <br />
            <span className="text-amber-500">بتقنية DHI</span>
          </h2>

          {/* صندوق السعر */}
          <div className="inline-flex flex-col items-center bg-gradient-to-b from-amber-50 to-amber-100 border-2 border-amber-400 rounded-3xl px-8 py-6 shadow-xl my-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-gray-400 line-through text-xl sm:text-2xl">
                7,000 ريال
              </span>
              <span className="bg-red-500 text-white px-2 py-0.5 rounded text-xs font-bold">
                خصم 15%
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl sm:text-7xl font-black text-amber-600">
                5,980
              </span>
              <span className="text-2xl sm:text-3xl font-bold text-amber-700">
                ريال
              </span>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm mt-2">
              شامل كل شيء - بدون رسوم خفية
            </p>
          </div>
        </div>

        {/* شبكة ما يشمله العرض */}
        <div className="bg-[#0a0e1a] rounded-3xl p-6 sm:p-8 shadow-2xl">
          <h3 className="text-center text-white text-xl sm:text-2xl font-bold mb-6">
            العرض يشمل:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {offerItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 sm:gap-4 bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-4 hover:bg-white/10 hover:border-amber-500/30 transition-colors"
                >
                  <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <h4 className="text-white font-bold text-sm sm:text-base">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm mr-6">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ملاحظة */}
          <div className="mt-6 text-center">
            <p className="text-amber-300 text-sm sm:text-base font-semibold">
              ✦ إجمالي القيمة الحقيقية: أكثر من 7,000 ريال
            </p>
            <p className="text-gray-500 text-xs mt-1">
              أنت توفر أكثر من 1,000 ريال بهذا العرض
            </p>
          </div>

          {/* زر CTA */}
          <div className="mt-6">
            <WhatsAppButton
              size="lg"
              variant="gold"
              className="w-full"
              message="default"
            >
              احصل على العرض الآن
            </WhatsAppButton>
          </div>

          {/* تقييم مجاني CTA */}
          <div className="mt-3 text-center">
            <p className="text-gray-400 text-sm">
              أو{" "}
              <a
                href="https://wa.me/966532424669?text=السلام%20عليكم،%20أريد%20تقييم%20حالتي%20مجاناً"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] font-bold hover:underline"
              >
                تقييم حالتك مجاناً ✨
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
