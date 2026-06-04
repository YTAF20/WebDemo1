"use client";

export default function ComparisonSection() {
  return (
    <section id="comparisons" className="py-24 px-4 sm:px-6 bg-[#0d0d0d] border-t border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-amber-500 text-xs font-semibold uppercase tracking-widest">
            The Qualitints Standard
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
            Why We Only Do It The Best Way
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            We don&apos;t compromise on quality. Here is why we only offer Nano Ceramic films and use precision computer plotting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Ceramic vs Carbon */}
          <div className="bg-[#111827] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="p-2.5 rounded-lg bg-amber-500/10 text-amber-500 text-2xl font-bold">
                  ⚡
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white">Nano Ceramic vs. Carbon</h3>
                  <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                    Why we only offer Nano Ceramic
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {/* Nano Ceramic */}
                <div className="bg-black/40 border border-white/5 rounded-xl p-5">
                  <h4 className="text-sm font-bold text-amber-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    Nano Ceramic
                  </h4>
                  <ul className="space-y-3.5">
                    <li className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <CheckIcon />
                      <span><strong>99% UV & IR Rejection</strong> (superior heat blocking)</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <CheckIcon />
                      <span><strong>Superior Heat Reduction</strong> keeps cabin cool</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <CheckIcon />
                      <span><strong>No Signal Interference</strong> (GPS, Cell, Radio)</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <CheckIcon />
                      <span><strong>Never Fades</strong> or turns purple</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <CheckIcon />
                      <span><strong>Lifetime Durability</strong> & performance</span>
                    </li>
                  </ul>
                </div>

                {/* Carbon */}
                <div className="bg-black/20 border border-white/5 rounded-xl p-5 opacity-60 hover:opacity-80 transition-opacity">
                  <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-4">
                    Carbon / Standard
                  </h4>
                  <ul className="space-y-3.5">
                    <li className="flex items-start gap-2.5 text-sm text-zinc-500">
                      <CrossIcon />
                      <span>Lower Heat Rejection</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-zinc-500">
                      <CrossIcon />
                      <span>Can Interfere with Electronics</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-zinc-500">
                      <CrossIcon />
                      <span>Fades / turns purple over time</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-zinc-500">
                      <CrossIcon />
                      <span>Shorter Lifespan</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 text-center">
              <p className="text-sm font-medium text-amber-500/80 italic">
                Nano Ceramic = Premium Performance & Protection
              </p>
            </div>
          </div>

          {/* Plotter Cut vs Hand Cut */}
          <div className="bg-[#111827] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="p-2.5 rounded-lg bg-amber-500/10 text-amber-500 text-2xl font-bold">
                  📐
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white">Plotter-Cut vs. Hand-Cut</h3>
                  <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                    Why we only use precision plotter-cutting
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {/* Plotter Cut */}
                <div className="bg-black/40 border border-white/5 rounded-xl p-5">
                  <h4 className="text-sm font-bold text-amber-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    Plotter-Cut
                  </h4>
                  <ul className="space-y-3.5">
                    <li className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <CheckIcon />
                      <span><strong>Computer-Precise</strong> cuts for a perfect fit</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <CheckIcon />
                      <span><strong>Faster & Cleaner</strong> installation process</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <CheckIcon />
                      <span><strong>No Jagged Edges</strong> or glass scratching</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <CheckIcon />
                      <span><strong>Consistent Quality</strong> on every single window</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <CheckIcon />
                      <span><strong>Ideal for curves</strong> of complex modern cars</span>
                    </li>
                  </ul>
                </div>

                {/* Hand Cut */}
                <div className="bg-black/20 border border-white/5 rounded-xl p-5 opacity-60 hover:opacity-80 transition-opacity">
                  <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-4">
                    Hand-Cut
                  </h4>
                  <ul className="space-y-3.5">
                    <li className="flex items-start gap-2.5 text-sm text-zinc-500">
                      <CrossIcon />
                      <span>Relies solely on technician skill</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-zinc-500">
                      <CrossIcon />
                      <span>Slower cutting process on glass</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-zinc-500">
                      <CrossIcon />
                      <span>Higher chance of micro-imperfections</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-zinc-500">
                      <CrossIcon />
                      <span>More variability between jobs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 text-center">
              <p className="text-sm font-medium text-amber-500/80 italic">
                Plotter-cut = Flawless results every time
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      className="w-5 h-5 text-rose-500 shrink-0 mt-0.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
