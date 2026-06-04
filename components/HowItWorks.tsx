const steps = [
  {
    number: "01",
    title: "Secure Your Slot",
    description:
      "Select a convenient date and time on our calendar. Online booking is 100% free and takes under a minute.",
  },
  {
    number: "02",
    title: "Get a Custom Quote",
    description:
      "Enter your vehicle details. We will contact you via phone or email to confirm final pricing for your specific car model.",
  },
  {
    number: "03",
    title: "Fast 2-3 Hour Service",
    description:
      "Bring your car in at the scheduled time. Relax in our comfortable lobby or drop it off and pick it up when done.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 bg-black/70">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-red-500 text-xs font-semibold uppercase tracking-widest">Simple Process</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">How It Works</h2>
          <p className="mt-4 text-zinc-400 max-w-lg mx-auto">
            Securing professional styling for your vehicle is simple and transparent. No deposit required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent" />

          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-full bg-[#1a1a1a] border-2 border-red-600/50 flex items-center justify-center mb-6 z-10">
                <span className="text-red-500 font-bold text-lg">{step.number}</span>
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

