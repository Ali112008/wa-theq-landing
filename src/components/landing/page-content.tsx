import { translations } from "./translations";

interface ContentProps {
  lang: "ar" | "en";
}

export function HeroSection({ lang }: ContentProps) {
  const t = translations[lang];
  const isRtl = lang === "ar";
  const whatsappLink = "https://wa.me/966504358697?text=" + encodeURIComponent(
    lang === "ar" 
      ? "السلام عليكم، أريد تقييم حالتي مجاناً"
      : "Hello, I'd like a free consultation"
  );

  return (
    <header
      className="relative flex flex-col items-center justify-center overflow-hidden px-4 pt-8 pb-4"
      style={{ backgroundColor: "#050505" }}
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 35%, rgba(216, 182, 118, 0.1) 0%, transparent 55%)",
        }}
        aria-hidden="true"
      />

      {/* Language Switch */}
      <a
        href={lang === "ar" ? "/en" : "/"}
        className="absolute top-4 right-4 z-50 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold transition-transform hover:scale-105"
        style={{
          border: "1px solid rgba(216, 182, 118, 0.4)",
          backgroundColor: "#0a0a0a",
          color: "#D8B676",
        }}
      >
        <span>{t.langFlag}</span>
        <span>{t.switchLang}</span>
      </a>

      {/* Logo */}
      <div className="relative z-10 mb-3">
        <img
          src="/images/logo.webp"
          alt="Watheq Clinic"
          style={{ height: "48px", width: "auto" }}
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Headline */}
      <h1
        className="relative z-10 text-5xl font-black text-center mb-3 leading-tight"
        style={{
          background: "linear-gradient(180deg, #F1D49B 0%, #D8B676 50%, #C99A58 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {t.clinicName}
      </h1>

      {/* Subtitle */}
      <p className="relative z-10 text-lg text-white/80 mb-3 text-center max-w-xs leading-relaxed">
        {t.subtitle}
      </p>

      {/* Trust Badge */}
      <div
        className="relative z-10 flex items-center gap-2 px-5 py-2 rounded-full mb-4"
        style={{
          border: "1px solid rgba(216, 182, 118, 0.4)",
          backgroundColor: "#0a0a0a",
        }}
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{ color: "#D8B676" }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span className="text-base font-bold" style={{ color: "#D8B676" }}>
          {t.trustBadge}
        </span>
      </div>

      {/* CTA Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 flex items-center justify-center gap-3 w-full max-w-sm px-8 py-4 rounded-2xl font-bold text-lg transition-transform hover:scale-[1.03] text-black"
        style={{
          background: "linear-gradient(to left, #C99A58, #D8B676)",
          boxShadow: "0 4px 20px rgba(216, 182, 118, 0.3)",
          minHeight: "60px",
        }}
        aria-label={t.ctaButton}
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span>{t.ctaButton}</span>
      </a>
    </header>
  );
}

export function BeforeAfterGallery({ lang }: ContentProps) {
  const t = translations[lang];
  const isRtl = lang === "ar";
  const images = [
    { src: "/images/gallery/new-2.webp" },
    { src: "/images/gallery/new-1.webp" },
    { src: "/images/gallery/new-3.webp" },
    { src: "/images/gallery/new-4.webp" },
    { src: "/images/gallery/new-5.webp" },
    { src: "/images/gallery/new-6.webp" },
    { src: "/images/gallery/new-7.webp" },
    { src: "/images/gallery/new-8.webp" },
    { src: "/images/gallery/new-9.webp" },
    { src: "/images/gallery/new-10.webp" },
  ];
  const allImages = [...images, ...images];

  return (
    <section
      className="py-5 sm:py-6 overflow-hidden"
      style={{ backgroundColor: "#050505" }}
      dir="ltr"
      aria-label={t.galleryTitle}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="h-px w-12 sm:w-20" style={{ backgroundColor: "#D8B676" }} />
          <h2 className="text-2xl sm:text-3xl font-black" style={{ color: "#D8B676" }}>
            {t.galleryTitle}
          </h2>
          <span className="h-px w-12 sm:w-20" style={{ backgroundColor: "#D8B676" }} />
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto px-12 sm:px-16">
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-banner w-max">
            {allImages.map((img, i) => (
              <div key={i} className="flex-shrink-0 px-1.5" style={{ width: "33.333%" }}>
                <div
                  className="relative rounded-xl overflow-hidden"
                  style={{
                    border: "1px solid rgba(216, 182, 118, 0.3)",
                    backgroundColor: "#0a0a0a",
                    aspectRatio: "4 / 5",
                  }}
                >
                  <img
                    src={img.src}
                    alt={`${t.galleryTitle} ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function OfferSection({ lang }: ContentProps) {
  const t = translations[lang];
  const isRtl = lang === "ar";
  const whatsappLink = "https://wa.me/966504358697?text=" + encodeURIComponent(
    lang === "ar" ? "السلام عليكم، أريد تقييم حالتي مجاناً" : "Hello, I'd like a free consultation"
  );

  return (
    <section
      className="py-4 sm:py-5"
      style={{ backgroundColor: "#050505" }}
      dir={isRtl ? "rtl" : "ltr"}
      aria-label={t.offerTitle}
    >
      <div className="max-w-md mx-auto px-4">
        <div className="text-center mb-3">
          <span
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-bold"
            style={{ border: "1px solid #D8B676", backgroundColor: "#0a0a0a", color: "#D8B676" }}
          >
            {t.offerBadge}
          </span>
        </div>

        <h2 className="text-base text-white text-center mb-2 font-semibold leading-relaxed">
          {t.offerTitle}
        </h2>

        <div className="flex items-baseline justify-center gap-2 mb-3">
          <span className="text-5xl font-black" style={{ color: "#D8B676" }}>{t.offerPrice}</span>
          <span className="text-xl font-bold" style={{ color: "#D8B676" }}>{t.offerCurrency}</span>
        </div>

        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="h-px w-12" style={{ backgroundColor: "#D8B676" }} />
          <span className="text-sm font-bold" style={{ color: "#D8B676" }}>{t.offerIncludes}</span>
          <span className="h-px w-12" style={{ backgroundColor: "#D8B676" }} />
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          {t.offerItems.map((item, i) => (
            <div
              key={i}
              className="rounded-xl p-4 flex flex-col items-center text-center"
              style={{ border: "1px solid rgba(216, 182, 118, 0.3)", backgroundColor: "#0a0a0a" }}
            >
              <div className="mb-2" style={{ color: "#D8B676" }}>
                <OfferIcon icon={item.icon} className="w-7 h-7" />
              </div>
              <p className="text-white text-sm font-medium leading-snug whitespace-pre-line">{item.text}</p>
            </div>
          ))}
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 w-full px-6 py-4 rounded-2xl font-bold text-base transition-transform hover:scale-[1.03] text-black"
          style={{ background: "linear-gradient(to left, #C99A58, #D8B676)", boxShadow: "0 4px 20px rgba(216, 182, 118, 0.3)" }}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          <span>{t.ctaButton2}</span>
        </a>
      </div>
    </section>
  );
}

export function SnapchatFollow({ lang }: ContentProps) {
  const t = translations[lang];
  const isRtl = lang === "ar";

  return (
    <section
      className="py-3 sm:py-4"
      style={{ backgroundColor: "#050505" }}
      dir={isRtl ? "rtl" : "ltr"}
      aria-label={t.snapTitle}
    >
      <div className="max-w-xl mx-auto px-4">
        <a
          href="https://snapchat.com/t/JIsiC5jo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-5 rounded-2xl transition-transform hover:scale-[1.02]"
          style={{ border: "1px solid rgba(216, 182, 118, 0.3)", backgroundColor: "#0a0a0a" }}
        >
          <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: "#D8B676" }}>
            <SnapIcon className="w-8 h-8 text-black" />
          </div>
          <div className="flex-1 text-right">
            <p className="font-bold text-sm sm:text-base" style={{ color: "#D8B676" }}>{t.snapTitle}</p>
            <p className="text-white/60 text-xs sm:text-sm">{t.snapSubtitle}</p>
          </div>
          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" style={{ color: "#D8B676" }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </a>
        <p className="text-white/30 text-xs mt-2 text-center">{t.copyright}</p>
      </div>
    </section>
  );
}

export function FloatingWhatsApp({ lang }: ContentProps) {
  const t = translations[lang];
  const whatsappLink = "https://wa.me/966504358697?text=" + encodeURIComponent(
    lang === "ar" ? "السلام عليكم، حابب أستفسر عن عرض زراعة الشعر" : "Hello, I'd like to inquire about the hair transplant offer"
  );

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.floatText}
      className="fixed bottom-4 left-4 z-50 flex items-center gap-2 font-bold px-5 py-3 rounded-full transition-all duration-300 hover:scale-105 text-white"
      style={{ backgroundColor: "#25D366", boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)" }}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
      </span>
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
      <span className="text-sm">{t.floatText}</span>
    </a>
  );
}

function SnapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.27-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.122-.78-1.722-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.061-.046-.135-.046-.211-.015-.239.166-.464.42-.509 3.264-.54 4.731-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.299 1.104.299.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06Z" />
    </svg>
  );
}

function OfferIcon({ icon, className }: { icon: string; className?: string }) {
  const icons: Record<string, React.ReactElement> = {
    plane: (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" /></svg>),
    hotel: (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M2 22V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v18" /><path d="M2 22h20" /><path d="M18 14h2a2 2 0 0 1 2 2v6" /><path d="M6 6h8M6 10h8M6 14h4M6 18h4" /></svg>),
    syringe: (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d="m18 2 4 4M17 7 9.5 14.5M14 11l-7.5 7.5a2.121 2.121 0 0 1-3-3L11 8" /><path d="m18 2-7 7M9.5 14.5 7 17l-4-4 2.5-2.5M21 5l-3-3" /></svg>),
    dhi: (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" /></svg>),
    bottle: (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6M10 3v3.5a2 2 0 0 1-.4 1.2L6.6 12a4 4 0 0 0-.6 2.1V19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4.9a4 4 0 0 0-.6-2.1L14.4 7.7A2 2 0 0 1 14 6.5V3" /><path d="M7 14h10" /></svg>),
    noPain: (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M9 14c-2 0-3-1-3-3s1-3 3-3 3 1 3 3" /><path d="M15 11h.01M21 11h.01M18 11h.01" /><path d="M3 18c2-1 3-2 4-3M14 18c1.5-1 2.5-2 3.5-3" /></svg>),
  };
  return <span className={className}>{icons[icon]}</span>;
}
