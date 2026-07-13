"use client";

import { useState } from "react";
import { WhatsAppButton } from "./whatsapp-button";

const faqs = [
  {
    q: "متى تظهر النتائج؟",
    a: "تبدأ النتائج الأولية في الظهور بعد 3-4 أشهر من العملية، وتظهر النتائج الكاملة بعد 8-12 شهراً. الشعر المزروع ينمو بشكل طبيعي تدريجياً، وستلاحظ الفرق الكبير في الكثافة والشكل خلال السنة الأولى.",
  },
  {
    q: "كم يوم في تركيا؟",
    a: "مدة الإقامة ليلتين و 3 أيام. اليوم الأول: الوصول والاستقرار في الفندق. اليوم الثاني: إجراء العملية والراحة. اليوم الثالث: المتابعة الطبية والعودة للسعودية. البرنامج منظم بالكامل من قبل فريقنا.",
  },
  {
    q: "هل العملية مؤلمة؟",
    a: "لا، العملية غير مؤلمة عملياً. نستخدم تخديراً موضعياً متقدماً يمنع أي شعور بالألم أثناء العملية. قد تشعر بإحساس بسيط بالشد أو الوخز عند البداية، لكن معظم عملائنا يشاهدون التلفاز أو يستمعون للموسيقى أثناء العملية بشكل مريح.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-16 sm:py-20 bg-white relative overflow-hidden"
      aria-label="الأسئلة الشائعة"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* العنوان */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3">
            إجابات لكل أسئلتك
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0a0e1a] mb-3">
            الأسئلة <span className="text-amber-500">الشائعة</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            كل ما تحتاج معرفته قبل اتخاذ قرار زراعة الشعر
          </p>
        </div>

        {/* قائمة الأسئلة */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === i
                  ? "border-amber-300 bg-amber-50/30 shadow-md"
                  : "border-gray-200 hover:border-amber-200"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-3 p-4 sm:p-5 text-right"
                aria-expanded={openIndex === i}
              >
                <span className="font-bold text-[#0a0e1a] text-sm sm:text-base flex-1">
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === i
                      ? "bg-amber-500 text-white rotate-180"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  openIndex === i
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-4 sm:px-5 pb-5 text-gray-700 text-sm sm:text-base leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA في النهاية */}
        <div className="text-center mt-10 sm:mt-12 p-6 sm:p-8 bg-gradient-to-l from-[#0a0e1a] to-[#131a2e] rounded-3xl">
          <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
            لديك سؤال آخر؟
          </h3>
          <p className="text-gray-400 text-sm sm:text-base mb-5">
            فريقنا جاهز للإجابة على جميع استفساراتك عبر واتساب
          </p>
          <WhatsAppButton size="lg" message="default">
            اسأل سؤالك عبر واتساب
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
