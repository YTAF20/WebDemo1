const steps = [
  {
    number: "01",
    title: "Secure Your Slot",
    description:
      "Select a convenient date and time on our live calendar. Online booking is free and takes under a minute.",
  },
  {
    number: "02",
    title: "Get a Custom Quote",
    description:
      "Enter your vehicle details. We'll confirm final pricing for your specific car before or at your appointment.",
  },
  {
    number: "03",
    title: "Fast 2–3 Hour Service",
    description:
      "Bring your car in at the scheduled time. Relax in our comfortable lobby or drop it off and we'll call you when it's done.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 px-4 sm:px-6 bg-[#080808] scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-zinc-400 text-[11px] font-bold uppercase tracking-[0.2em]">
              The Process
            </span>
            <h2 className="mt-2 text-4xl sm:text-5xl font-black tracking-tight">
              How It Works
            </h2>
          </div>
          <p className="text-zinc-500 text-sm max-w-xs leading-relaxed sm:text-right">
            No deposit required. Transparent pricing. Fast, professional service every time.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative overflow-hidden">
              {/* Ghost number — huge, faded behind content */}
              <span className="absolute -top-10 -left-3 text-[7rem] sm:text-[9rem] font-black leading-none text-white/[0.04] select-none pointer-events-none tabular-nums">
                {step.number}
              </span>

              {/* Connector dot + line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-3.5 left-full w-full h-px">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
                </div>
              )}

              <div className="relative z-10 pt-8">
                {/* Red slim accent */}
                <div className="w-8 h-0.5 bg-white mb-6" />
                <h3 className="text-lg font-black text-white mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
