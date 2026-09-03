/**
 * Configuration shared across landing page components.
 */
export const CONTACT = {
  whatsapp: "966532424669",
  whatsappLink:
    "https://wa.me/966532424669?text=" +
    encodeURIComponent(
      "السلام عليكم، حابب أستفسر عن عرض زراعة الشعر في تركيا شامل الطيران والفندق بـ 5980 ريال"
    ),
  // Default consultation message for free evaluation CTA
  whatsappConsultLink:
    "https://wa.me/966532424669?text=" +
    encodeURIComponent(
      "السلام عليكم، أريد تقييم حالتي مجاناً لزراعة الشعر بتقنية DHI"
    ),
  snapchat: "https://snapchat.com/t/cjtiTF1s",
  phone: "+966532424669",
  phoneDisplay: "+966 53 242 4669",
};

// Offer details
export const OFFER = {
  currentPrice: "5,980",
  oldPrice: "7,000",
  currency: "ريال",
  includes: [
    {
      icon: "plane",
      title: "الطيران ذهاب وعودة",
      desc: "الرياض ↔ إسطنبول",
    },
    {
      icon: "hotel",
      title: "الإقامة الفندقية",
      desc: "ليلتين في فندق مريح",
    },
    {
      icon: "syringe",
      title: "البلازما PRP",
      desc: "مجاناً - قيمة 800 ريال",
    },
    {
      icon: "bottle",
      title: "شامبو ورغوة",
      desc: "مجاناً - للعناية بعد العملية",
    },
    {
      icon: "noPain",
      title: "زراعة بدون ألم",
      desc: "بتخدير موضعي مريح",
    },
    {
      icon: "dhi",
      title: "تقنية DHI",
      desc: "أحدث تقنيات زراعة الشعر",
    },
  ],
};
