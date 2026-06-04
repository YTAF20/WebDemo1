import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Window Tinting",
    description:
      "Precision computer plotter-cut nano ceramic film. Maximum UV block, infrared heat rejection, and zero signal interference.",
    badge: "Nano Ceramic Only",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 10h18" />
        <path d="M8 10v9" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Professional Detailing",
    description:
      "Full exterior paint restoration, clay bar treatment, interior steam clean, and deep conditioning for a showroom shine.",
    badge: "Premium Care",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
        <path d="M19 15l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" />
        <path d="M5 3l.7 2.1 2.1.7-2.1.7L5 9l-.7-2.1L2.2 6.5l2.1-.7L5 3z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Paint Protection Film",
    description:
      "Optically clear, self-healing urethane barrier protecting your vehicle's paint from rock chips, bugs, scratches, and debris.",
    badge: "Self-Healing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2l8 4v5.5c0 5.25-3.5 9.75-8 11.5C7.5 21.25 4 16.75 4 11.5V6l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Vehicle Wraps",
    description:
      "High-quality vinyl wraps to change your vehicle's color, finish, or texture. Fully tucked edges for a seamless paint-like look.",
    badge: "Custom Styling",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Headlight Restoration",
    description:
      "Remove heavy oxidation, yellowing, and haze. Restores crystal-clear visibility and sealed with a durable UV-blocker coat.",
    badge: "Safety First",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 px-4 sm:px-6 bg-[#0a0a0a] scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
          <div>
            <span className="text-zinc-400 text-[11px] font-bold uppercase tracking-[0.2em]">
              Service Menu
            </span>
            <h2 className="mt-2 text-4xl sm:text-5xl font-black tracking-tight">
              What We Offer
            </h2>
          </div>
          <p className="text-zinc-500 text-sm max-w-xs leading-relaxed sm:text-right">
            Premium materials and certified techniques to protect and style every vehicle.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.04]">
          {services.map((s) => (
            <div
              key={s.title}
              className="relative bg-[#0c0c0c] p-7 overflow-hidden group hover:bg-[#0f0f0f] transition-colors duration-200"
            >
              {/* Ghost number watermark */}
              <span className="absolute right-4 bottom-3 text-[5.5rem] font-black text-white/[0.03] leading-none select-none pointer-events-none tabular-nums">
                {s.num}
              </span>
              {/* Top accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <div className="p-2 rounded-md bg-white/5 text-white">
                    {s.icon}
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-zinc-600 pt-1">
                    {s.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-zinc-300 transition-colors duration-200">
                  {s.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}

          {/* CTA tile */}
          <div className="relative bg-[#0c0c0c] p-7 overflow-hidden flex flex-col justify-between group hover:bg-[#100a0a] transition-colors duration-200">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-white/0 via-white/15 to-white/0" />
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-600 mb-3">Ready?</p>
              <h3 className="text-xl font-black text-white mb-2 leading-tight">
                Reserve Your Slot Online
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Takes under 2 minutes. No deposit required.
              </p>
            </div>
            <Link
              href="/book"
              className="mt-8 inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-zinc-100 text-black font-bold rounded-md text-sm transition-all uppercase tracking-wide hover:-translate-y-0.5"
            >
              Book an Appointment
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
