import { SnapIcon } from "./icons";

export function SnapchatFollow() {
  return (
    <section
      className="py-6 sm:py-8"
      style={{ backgroundColor: "#050505" }}
      aria-label="متابعة مالك الشركة على سناب شات"
    >
      <div className="max-w-xl mx-auto px-4">
        {/* Snapchat CTA Card */}
        <a
          href="https://snapchat.com/t/JIsiC5jo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-5 rounded-2xl transition-transform hover:scale-[1.02]"
          style={{
            border: "1px solid rgba(216, 182, 118, 0.3)",
            backgroundColor: "#0a0a0a",
          }}
          aria-label="إضافة واثق كلينك على سناب شات"
        >
          {/* Snapchat Icon */}
          <div
            className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#D8B676" }}
          >
            <SnapIcon className="w-8 h-8 text-black" />
          </div>

          {/* Text */}
          <div className="flex-1 text-right">
            <p className="font-bold text-sm sm:text-base" style={{ color: "#D8B676" }}>
              تابعنا على سناب شات
            </p>
            <p className="text-white/60 text-xs sm:text-sm">
              لمتابعة مالك الشركة بسناب شات
            </p>
          </div>

          {/* Arrow */}
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

        {/* Copyright */}
        <p className="text-white/30 text-xs mt-4 text-center">
          © {new Date().getFullYear()} واثق كلينك
        </p>
      </div>
    </section>
  );
}
