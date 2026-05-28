const steps = [
  {
    number: "01",
    title: "Pick a Date & Time",
    description:
      "Browse real-time availability pulled directly from our calendar. Choose any open slot that works for you.",
  },
  {
    number: "02",
    title: "Fill in Your Details",
    description:
      "Tell us your name, contact info, which service you want, and any notes about your vehicle.",
  },
  {
    number: "03",
    title: "Get Confirmation",
    description:
      "You'll receive an email confirmation right away, plus a reminder the day before your appointment.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 bg-[#0d0d0d]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-amber-500 text-xs font-semibold uppercase tracking-widest">Simple Process</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">How It Works</h2>
          <p className="mt-4 text-zinc-400 max-w-lg mx-auto">
            Booking your tint appointment takes about 2 minutes — no phone calls, no waiting on hold.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent" />

          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-full bg-[#1a1a1a] border-2 border-amber-600/50 flex items-center justify-center mb-6 z-10">
                <span className="text-amber-500 font-bold text-lg">{step.number}</span>
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
