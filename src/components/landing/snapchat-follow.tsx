import { SnapIcon } from "./icons";

export function SnapchatFollow() {
  return (
    <section
      className="py-8 sm:py-12 border-t"
      style={{ backgroundColor: "#000000", borderColor: "rgba(212, 175, 55, 0.1)" }}
      aria-label="متابعة مالك الشركة على سناب شات"
    >
      <div className="max-w-xl mx-auto px-4">
        {/* بنر سناب شات مباشر */}
        <a
          href="https://snapchat.com/t/JIsiC5jo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-5 rounded-2xl transition-all hover:scale-[1.02]"
          style={{
            backgroundColor: "#0a0a0a",
            boxShadow: "0 0 0 2px rgba(212, 175, 55, 0.3)",
          }}
          aria-label="إضافة واثق كلينك على سناب شات"
        >
          {/* أيقونة سناب */}
          <div
            className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#D8B676" }}
          >
            <SnapIcon className="w-8 h-8 text-black" />
          </div>

          {/* النص */}
          <div className="flex-1 text-right">
            <p className="font-bold text-sm sm:text-base" style={{ color: "#D8B676" }}>
              تابعنا على سناب شات
            </p>
            <p className="text-white/60 text-xs sm:text-sm">
              لمتابعة مالك الشركة بسناب شات
            </p>
          </div>

          {/* سهم */}
          <svg
            className="w-5 h-5 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
            style={{ color: "#D8B676" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </a>

        {/* حقوق */}
        <p className="text-white/40 text-xs mt-6 text-center">
          © {new Date().getFullYear()} واثق كلينك - الشركة السعودية الأولى للسياحة العلاجية بتركيا
        </p>
      </div>
    </section>
  );
}
