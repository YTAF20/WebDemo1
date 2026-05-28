import Link from "next/link";

const services = [
  {
    title: "Full Car Tint",
    description: "Complete window coverage for all side and rear glass. Maximum UV block and a uniform look.",
    icon: "🚗",
    badge: "Most Popular",
  },
  {
    title: "Front 2 Windows",
    description: "Driver and passenger windows tinted to match your existing rear factory tint.",
    icon: "🪟",
    badge: null,
  },
  {
    title: "Rear Windows Only",
    description: "Rear side and back glass covered — great for privacy and cargo protection.",
    icon: "🔙",
    badge: null,
  },
  {
    title: "Windshield Film",
    description: "Clear or light shade heat-rejection film for your windshield. Legal in most states.",
    icon: "🛡️",
    badge: "Heat Block",
  },
  {
    title: "SUV / Truck Package",
    description: "Full coverage for larger vehicles including rear windshield and all side glass.",
    icon: "🚙",
    badge: "Best Value",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-amber-500 text-xs font-semibold uppercase tracking-widest">What We Offer</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">Our Services</h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            We use premium films from top-tier brands to ensure lasting quality, sharp aesthetics, and maximum heat and UV rejection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="relative bg-[#111827] border border-white/5 rounded-xl p-7 hover:border-amber-600/40 transition-all group"
            >
              {s.badge && (
                <span className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-600/20 text-amber-400 border border-amber-600/30">
                  {s.badge}
                </span>
              )}
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                {s.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}

          {/* CTA card */}
          <div className="bg-gradient-to-br from-amber-600/20 to-amber-800/10 border border-amber-600/30 rounded-xl p-7 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-amber-400 mb-2">Ready to Book?</h3>
              <p className="text-zinc-400 text-sm">
                Check real-time availability and reserve your slot in under 2 minutes.
              </p>
            </div>
            <Link
              href="/book"
              className="mt-6 inline-block text-center px-5 py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-lg text-sm transition-colors"
            >
              Book an Appointment →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
