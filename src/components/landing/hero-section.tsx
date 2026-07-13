import { WhatsAppButton, WhatsAppIcon } from "./whatsapp-button";
import { SnapIcon } from "./icons";
import Image from "next/image";

export function HeroSection() {
  return (
    <header
      className="relative min-h-[100svh] flex flex-col overflow-hidden"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      {/* خلفية زخرفية ذهبية */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 30%, rgba(212, 175, 55, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(212, 175, 55, 0.15) 0%, transparent 40%)",
        }}
        aria-hidden="true"
      />

      {/* شريط علوي - اللوجو + زر سناب */}
      <div className="relative z-20 flex items-center justify-between px-4 py-3 border-b border-gold-dark/20">
        <Image
          src="/images/logo.webp"
          alt="واثق كلينك - Watheq Clinic"
          width={100}
          height={36}
          style={{ height: "28px", width: "auto" }}
          priority
          fetchPriority="high"
        />
        <a
          href="https://snapchat.com/t/JIsiC5jo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-9 h-9 bg-gold hover:bg-gold-light text-black rounded-full transition-transform hover:scale-110"
          aria-label="تابعنا على سناب شات"
          title="سناب المالك"
        >
          <SnapIcon className="w-5 h-5" />
        </a>
      </div>

      {/* المحتوى الرئيسي */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-6 text-center">
        {/* اسم الشركة */}
        <h2 className="text-gold text-base sm:text-lg font-bold mb-1">
          واثق كلينك
        </h2>
        <p className="text-white/80 text-xs sm:text-sm mb-6">
          الشركة السعودية الأولى للسياحة العلاجية بتركيا
        </p>

        {/* صورة قبل وبعد */}
        <div className="relative w-full max-w-xs sm:max-w-sm mb-6">
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl" style={{ boxShadow: "0 0 0 2px rgba(212, 175, 55, 0.4)" }}>
            <Image
              src="/images/hero-before-after.webp"
              alt="نتائج زراعة الشعر قبل وبعد - واثق كلينك"
              width={400}
              height={400}
              className="w-full h-full object-cover"
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 400px"
            />
            {/* خط فاصل عمودي */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/50" />
            {/* تسميات قبل/بعد */}
            <div className="absolute bottom-3 left-3 bg-black/80 text-white px-3 py-1 rounded-md text-xs font-bold">
              قبل
            </div>
            <div className="absolute bottom-3 right-3 bg-gold text-black px-3 py-1 rounded-md text-xs font-bold">
              بعد
            </div>
          </div>
        </div>

        {/* زر واتساب واضح وكبير */}
        <a
          href="https://wa.me/966532424669?text=السلام%20عليكم،%20أريد%20تقييم%20حالتي%20مجاناً%20لزراعة%20الشعر%20بتقنية%20DHI"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 w-full max-w-xs px-6 py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 active:scale-95 text-black"
          style={{
            background: "linear-gradient(to left, #B8941F, #D4AF37)",
            boxShadow: "0 10px 25px rgba(212, 175, 55, 0.3)",
          }}
          aria-label="تواصل معنا عبر واتساب"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
          </svg>
          <span>لتقييم حالتك مجاناً</span>
        </a>
      </div>
    </header>
  );
}
