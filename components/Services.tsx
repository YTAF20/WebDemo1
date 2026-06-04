import Link from "next/link";

const services = [
  {
    title: "Window Tinting",
    description: "Precision computer plotter-cut nano ceramic film. Maximum UV block, infrared heat rejection, and zero signal interference.",
    icon: "🚗",
    badge: "Nano Ceramic Only",
  },
  {
    title: "Professional Detailing",
    description: "Full exterior paint restoration, clay bar treatment, interior steam clean, and deep conditioning for a showroom shine.",
    icon: "✨",
    badge: "Premium Care",
  },
  {
    title: "Paint Protection Film (PPF)",
    description: "Optically clear, self-healing urethane barrier protecting your vehicle's paint from rock chips, bugs, scratches, and debris.",
    icon: "🛡️",
    badge: "Self-Healing",
  },
  {
    title: "Vehicle Wraps",
    description: "High-quality vinyl wraps to change your vehicle's color, finish, or texture. Fully tucked edges for a seamless paint-like look.",
    icon: "🎨",
    badge: "Custom Styling",
  },
  {
    title: "Headlight Restoration",
    description: "Remove heavy oxidation, yellowing, and haze. Restores crystal-clear visibility and sealed with a durable UV-blocker coat.",
    icon: "💡",
    badge: "Safety First",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 bg-black/70">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-red-500 text-xs font-semibold uppercase tracking-widest">Our Service Menu</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">What We Offer</h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            Premium materials and certified techniques to protect and style your vehicle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="relative bg-[#111827] border border-white/5 rounded-xl p-7 hover:border-red-600/40 transition-all group"
            >
              {s.badge && (
                <span className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-600/20 text-red-400 border border-red-600/30">
                  {s.badge}
                </span>
              )}
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                {s.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}

          {/* CTA card */}
          <div className="bg-gradient-to-br from-red-950/30 to-zinc-900/10 border border-red-900/30 rounded-xl p-7 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-red-500 mb-2">Ready to Book?</h3>
              <p className="text-zinc-400 text-sm">
                Reserve your slot online and get a customized quote confirmed before or at your appointment.
              </p>
            </div>
            <Link
              href="/book"
              className="mt-6 inline-block text-center px-5 py-3 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg text-sm transition-colors"
            >
              Book an Appointment →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

