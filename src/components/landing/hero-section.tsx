import Image from "next/image";

export function HeroSection() {
  return (
    <header
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden px-4 py-10"
      style={{ backgroundColor: "#050505" }}
    >
      {/* Soft Radial Gradient Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 40%, rgba(216, 182, 118, 0.08) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Logo - Centered */}
      <div className="relative z-10 mb-8 flex flex-col items-center">
        <Image
          src="/images/logo.webp"
          alt="واثق كلينك - Watheq Clinic"
          width={140}
          height={50}
          style={{ height: "40px", width: "auto" }}
          priority
          fetchPriority="high"
        />
      </div>

      {/* Clinic Name */}
      <h2 className="relative z-10 text-sm font-bold mb-2" style={{ color: "#D8B676" }}>
        واثق كلينك
      </h2>
      <p className="relative z-10 text-xs text-white/60 mb-8 text-center">
        الشركة السعودية الأولى للسياحة العلاجية بتركيا
      </p>

      {/* Huge Headline */}
      <h1
        className="relative z-10 text-4xl sm:text-5xl font-black text-center mb-3 leading-tight"
        style={{
          background: "linear-gradient(180deg, #F1D49B 0%, #D8B676 50%, #C99A58 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        استعد شعرك الطبيعي
      </h1>

      {/* Subtitle with flags */}
      <p className="relative z-10 text-sm sm:text-base text-white/80 mb-8 text-center max-w-sm">
        🇸🇦 🇹🇷 زراعة الشعر بأحدث التقنيات في تركيا
      </p>

      {/* Trust Badge */}
      <div
        className="relative z-10 flex items-center gap-2 px-5 py-2.5 rounded-full mb-8"
        style={{
          border: "1px solid rgba(216, 182, 118, 0.4)",
          backgroundColor: "rgba(216, 182, 118, 0.05)",
        }}
      >
        <span className="text-sm font-bold" style={{ color: "#D8B676" }}>
          ⭐
        </span>
        <span className="text-xs sm:text-sm text-white font-medium">
          خدمنا أكثر من 10 آلاف عميل
        </span>
      </div>

      {/* Main CTA Button - Gold */}
      <a
        href="https://wa.me/966532424669?text=السلام%20عليكم،%20أريد%20تقييم%20حالتي%20مجاناً"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 flex items-center justify-center gap-3 w-full max-w-xs px-8 py-4 rounded-2xl font-bold text-base sm:text-lg transition-transform hover:scale-[1.03] text-black"
        style={{
          background: "linear-gradient(to left, #C99A58, #D8B676)",
          boxShadow: "0 4px 20px rgba(216, 182, 118, 0.3)",
          minHeight: "65px",
        }}
        aria-label="تواصل معنا عبر واتساب"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span>تواصل معنا الآن</span>
      </a>
    </header>
  );
}
