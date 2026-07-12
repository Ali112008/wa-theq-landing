import { ShieldIcon, StarIcon, HeartIcon, CheckIcon } from "./icons";

const badges = [
  { icon: ShieldIcon, text: "نتائج مضمونة", color: "text-amber-400" },
  { icon: StarIcon, text: "تقنيات حديثة", color: "text-amber-400" },
  { icon: HeartIcon, text: "آلاف العملاء السعداء", color: "text-amber-400" },
  { icon: CheckIcon, text: "إدارة سعودية", color: "text-amber-400" },
];

export function TrustBadges() {
  return (
    <section
      className="py-6 sm:py-8 bg-[#0a0e1a] border-y border-amber-500/10"
      aria-label="مميزات واثق كلينك"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center gap-2 text-center p-3 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-colors"
              >
                <Icon className={`w-7 h-7 sm:w-8 sm:h-8 ${badge.color}`} />
                <span className="text-white text-xs sm:text-sm font-semibold">
                  {badge.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
