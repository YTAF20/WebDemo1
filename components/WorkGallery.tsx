"use client";

import Image from "next/image";

const items = [
  {
    title: "Nano Ceramic Window Tinting",
    description: "Sleek dark look with 99% UV block and maximum heat rejection.",
    src: "/images/gallery_tint.png",
    tag: "Window Tinting",
  },
  {
    title: "Paint Protection Film (PPF)",
    description: "Optically clear, self-healing invisible shield against rock chips.",
    src: "/images/gallery_ppf.png",
    tag: "PPF / Protection",
  },
  {
    title: "Custom Vinyl Wraps",
    description: "Flawless color change wrap with tucked edges and metallic finish.",
    src: "/images/gallery_wrap.png",
    tag: "Vehicle Wraps",
  },
];

export default function WorkGallery() {
  return (
    <section id="work" className="py-16 px-4 sm:px-6 bg-black/70 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-zinc-400 text-xs font-semibold uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
            Our Recent Transformations
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            From daily drivers to exotic supercars, we handle every vehicle with precision, premium films, and master-level craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#111827] transition-all hover:border-white/20"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity" />
                <span className="absolute top-4 left-4 text-[10px] font-bold tracking-wider uppercase bg-white/90 text-black px-2.5 py-1 rounded-md">
                  {item.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white group-hover:text-zinc-400 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://www.instagram.com/qualitints/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-white/10 hover:border-white/20 text-white font-bold rounded-xl transition-all hover:-translate-y-0.5"
          >
            <svg
              className="w-5 h-5 text-zinc-400 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <span>Follow @qualitints on Instagram</span>
          </a>
          <p className="mt-3 text-xs text-zinc-500">
            We post daily project completions, client feedback, and behind-the-scenes shop work!
          </p>
        </div>
      </div>
    </section>
  );
}
