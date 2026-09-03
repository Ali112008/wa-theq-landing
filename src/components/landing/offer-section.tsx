const offerIncludes = [
  { icon: "plane", text: "الطيران ذهاب وعودة\nالرياض - اسطنبول" },
  { icon: "hotel", text: "الإقامة بفندق\nليلتين" },
  { icon: "syringe", text: "بلازما مجاناً" },
  { icon: "dhi", text: "الزراعة بتقنية DHI" },
  { icon: "bottle", text: "شامبو ورغوة\nمجاناً" },
  { icon: "noPain", text: "الزراعة بدون ألم" },
];

export function OfferSection() {
  return (
    <section
      className="py-4 sm:py-5"
      style={{ backgroundColor: "#050505" }}
      aria-label="عرض زراعة الشعر"
    >
      <div className="max-w-md mx-auto px-4">
        {/* Offer Badge */}
        <div className="text-center mb-3">
          <span
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-bold"
            style={{
              border: "1px solid #D8B676",
              backgroundColor: "#0a0a0a",
              color: "#D8B676",
            }}
          >
            ⏰ عرض لفترة محدودة
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-base text-white text-center mb-2 font-semibold leading-relaxed">
          الزراعة شامل الطيران والفندق
        </h2>

        {/* Price */}
        <div className="flex items-baseline justify-center gap-2 mb-3">
          <span className="text-5xl font-black" style={{ color: "#D8B676" }}>
            5,980
          </span>
          <span className="text-xl font-bold" style={{ color: "#D8B676" }}>
            ريال
          </span>
        </div>

        {/* Divider with text */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="h-px w-12" style={{ backgroundColor: "#D8B676" }} />
          <span className="text-sm font-bold" style={{ color: "#D8B676" }}>
            العرض يشمل
          </span>
          <span className="h-px w-12" style={{ backgroundColor: "#D8B676" }} />
        </div>

        {/* Grid - 2 columns, 3 rows = 6 cards */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {offerIncludes.map((item, i) => (
            <div
              key={i}
              className="rounded-xl p-4 flex flex-col items-center text-center"
              style={{
                border: "1px solid rgba(216, 182, 118, 0.3)",
                backgroundColor: "#0a0a0a",
              }}
            >
              <div className="mb-2" style={{ color: "#D8B676" }}>
                <OfferIcon icon={item.icon} className="w-7 h-7" />
              </div>
              <p className="text-white text-sm font-medium leading-snug whitespace-pre-line">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="https://wa.me/966504358697?text=السلام%20عليكم،%20أريد%20تقييم%20حالتي%20مجاناً"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 w-full px-6 py-4 rounded-2xl font-bold text-base transition-transform hover:scale-[1.03] text-black"
          style={{
            background: "linear-gradient(to left, #C99A58, #D8B676)",
            boxShadow: "0 4px 20px rgba(216, 182, 118, 0.3)",
          }}
          aria-label="تواصل معنا عبر واتساب"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          <span>تواصل معنا الآن</span>
        </a>
      </div>
    </section>
  );
}

function OfferIcon({ icon, className }: { icon: string; className?: string }) {
  const icons: Record<string, React.ReactElement> = {
    plane: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
      </svg>
    ),
    hotel: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v18" />
        <path d="M2 22h20" />
        <path d="M18 14h2a2 2 0 0 1 2 2v6" />
        <path d="M6 6h8M6 10h8M6 14h4M6 18h4" />
      </svg>
    ),
    syringe: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 2 4 4M17 7 9.5 14.5M14 11l-7.5 7.5a2.121 2.121 0 0 1-3-3L11 8" />
        <path d="m18 2-7 7M9.5 14.5 7 17l-4-4 2.5-2.5M21 5l-3-3" />
      </svg>
    ),
    dhi: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
    bottle: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6M10 3v3.5a2 2 0 0 1-.4 1.2L6.6 12a4 4 0 0 0-.6 2.1V19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4.9a4 4 0 0 0-.6-2.1L14.4 7.7A2 2 0 0 1 14 6.5V3" />
        <path d="M7 14h10" />
      </svg>
    ),
    noPain: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 14c-2 0-3-1-3-3s1-3 3-3 3 1 3 3" />
        <path d="M15 11h.01M21 11h.01M18 11h.01" />
        <path d="M3 18c2-1 3-2 4-3M14 18c1.5-1 2.5-2 3.5-3" />
      </svg>
    ),
  };
  return <span className={className}>{icons[icon]}</span>;
}
