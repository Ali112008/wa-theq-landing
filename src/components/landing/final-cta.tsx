import { WhatsAppButton } from "./whatsapp-button";
import { SnapIcon } from "./icons";

export function FinalCTA() {
  return (
    <section
      className="py-16 sm:py-20 bg-white relative overflow-hidden"
      aria-label="احجز استشارتك المجانية"
    >
      {/* خلفية زخرفية */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, #25D366 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0a0e1a] mb-4 leading-tight">
          هل أنت مستعد للتغيير؟
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mb-2 max-w-xl mx-auto">
          احصل على تقييم مجاني لحالتك من خبراء واثق كلينك
        </p>
        <p className="text-gray-500 text-sm sm:text-base mb-8">
          استشارة مجانية • بدون التزام • رد سريع خلال دقائق
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <WhatsAppButton size="lg" className="w-full sm:w-auto">
            احصل على تقييم مجاني الآن
          </WhatsAppButton>

          <a
            href="https://snapchat.com/t/cjtiTF1s"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#FFFC00] hover:bg-[#f0f000] text-black font-bold px-8 py-4 rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto"
          >
            <SnapIcon className="w-5 h-5" />
            <span>تابعنا على سناب</span>
          </a>
        </div>

        {/* معلومات التواصل */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <svg
                className="w-5 h-5 text-[#25D366]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>
              <span dir="ltr">+966 53 242 4669</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <svg
                className="w-5 h-5 text-amber-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>إسطنبول، تركيا</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <span>🇸🇦</span>
              <span>إدارة سعودية</span>
            </div>
          </div>

          {/* حقوق */}
          <p className="text-gray-400 text-xs mt-6">
            © {new Date().getFullYear()} واثق كلينك - الشركة السعودية الأولى
            للسياحة العلاجية في تركيا
          </p>
        </div>
      </div>
    </section>
  );
}
