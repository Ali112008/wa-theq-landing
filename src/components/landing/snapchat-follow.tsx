import { SnapIcon } from "./icons";

export function SnapchatFollow() {
  return (
    <section
      className="py-8 sm:py-12 bg-black border-t border-amber-500/10"
      aria-label="متابعة مالك الشركة على سناب شات"
    >
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="text-xl sm:text-2xl font-black text-white mb-4">
          لمتابعة مالك الشركة بسناب شات
        </h2>

        <a
          href="https://snapchat.com/t/JIsiC5jo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-black font-bold px-8 py-4 rounded-full text-base sm:text-lg transition-transform hover:scale-105 shadow-lg"
          aria-label="إضافة واثق كلينك على سناب شات"
        >
          <SnapIcon className="w-6 h-6" />
          <span>أضفنا على سناب شات</span>
        </a>

        {/* حقوق */}
        <p className="text-gray-500 text-xs mt-8">
          © {new Date().getFullYear()} واثق كلينك - الشركة السعودية الأولى للسياحة العلاجية بتركيا
        </p>
      </div>
    </section>
  );
}
