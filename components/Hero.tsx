import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "500+", label: "Vehicles Serviced" },
  { value: "5★", label: "Rated" },
  { value: "~2 hrs", label: "Avg. Turnaround" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black z-0" />
      <div className="absolute inset-0 z-0 opacity-35 pointer-events-none">
        <Image
          src="/background_tint.jpg"
          alt="Qualitints Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-[#0a0a0a] z-0" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight">
          Protect Your Ride.
          <br />
          <span className="text-white italic">Elevate the Look.</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed font-light">
          Window tinting, detailing, PPF, and custom wraps — precision-fit, dealer-grade results.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/book"
            className="px-8 py-4 bg-white hover:bg-zinc-100 text-black font-black text-sm rounded-md transition-all hover:-translate-y-0.5 tracking-wide uppercase"
          >
            Book an Appointment
          </Link>
          <a
            href="/#services"
            className="px-8 py-4 border border-white/15 hover:border-white/30 bg-white/3 hover:bg-white/6 text-zinc-300 hover:text-white font-semibold text-sm rounded-md transition-all uppercase tracking-wide"
          >
            View Services
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-16 pt-8 border-t border-white/8 flex flex-wrap justify-center gap-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-black text-white tabular-nums">{s.value}</p>
              <p className="text-[11px] text-zinc-500 mt-0.5 uppercase tracking-[0.12em]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10 opacity-30">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
