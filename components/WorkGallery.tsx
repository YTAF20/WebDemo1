"use client";

import { useState } from "react";

// ─── ADD YOUR PHOTOS HERE ────────────────────────────────────────────────────
// Drop images into /public/images/work/ and update the src paths below.
// Each project can have as many photos as you like.
const projects = [
  {
    id: 1,
    title: "Recent Work #1",
    tag: "Window Tinting",
    description:
      "2025 Ford Raptor F150 came in for 15% fronts and 5% rear",
    images: [
      { src: "/images/work/p1-1.jpg", alt: "Tint job — exterior front view" },
      { src: "/images/work/p1-2.jpg", alt: "Tint job — exterior rear view" },
      { src: "/images/work/p1-3.jpg", alt: "Tint job — front window" },
      { src: "/images/work/p1-4.jpg", alt: "Tint job — rear window" },
    ],
  },
  {
    id: 2,
    title: "Recent Work #2",
    tag: "PPF / Protection",
    description:
      "Full-front PPF with self-healing urethane film. Invisible shield against rock chips, bugs, and scratches.",
    images: [
      { src: "/images/work/p2-1.jpg", alt: "PPF — hood coverage" },
      { src: "/images/work/p2-2.jpg", alt: "PPF — front bumper wrap" },
      { src: "/images/work/p2-3.jpg", alt: "PPF — fender edge detail" },
    ],
  },
  {
    id: 3,
    title: "Recent Work #3",
    tag: "Vehicle Wrap",
    description:
      "Custom color-change vinyl wrap with tucked edges and a flawless, mirror-smooth finish.",
    images: [
      { src: "/images/work/p3-1.jpg", alt: "Wrap — full front view" },
      { src: "/images/work/p3-2.jpg", alt: "Wrap — side profile" },
      { src: "/images/work/p3-3.jpg", alt: "Wrap — rear view" },
    ],
  },
];
// ─────────────────────────────────────────────────────────────────────────────

function ChevronLeft() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  );
}

function CameraPlaceholder({ index, total, label }: { index: number; total: number; label: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-[#0f1318] to-zinc-900 select-none">
      <svg className="w-10 h-10 text-zinc-700 mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
      </svg>
      <p className="text-zinc-500 text-sm font-medium">Photo {index + 1} / {total}</p>
      <p className="text-zinc-700 text-[11px] mt-1 max-w-[160px] text-center leading-snug">{label}</p>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [current, setCurrent] = useState(0);
  const total = project.images.length;

  const prev = () => setCurrent((i) => (i - 1 + total) % total);
  const next = () => setCurrent((i) => (i + 1) % total);

  const img = project.images[current];

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#111827] transition-all duration-300 hover:border-white/15 hover:shadow-xl hover:shadow-black/40">
      {/* ── Image area ── */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
        {/* Placeholder sits behind — visible only if image fails to load */}
        <CameraPlaceholder index={current} total={total} label={img.alt} />

        {/* Real image — visible immediately, hidden via onError if missing */}
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

        {/* Tag */}
        <span className="absolute top-4 left-4 z-10 text-[10px] font-bold tracking-wider uppercase bg-white/90 text-black px-2.5 py-1 rounded-md">
          {project.tag}
        </span>

        {/* Photo counter */}
        <span className="absolute top-4 right-4 z-10 text-[11px] font-semibold text-white/70 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full tabular-nums">
          {current + 1} / {total}
        </span>

        {/* Prev / Next arrows — always visible on mobile, hover on desktop */}
        {total > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white transition-all hover:bg-black/80 hover:border-white/30 opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={next}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white transition-all hover:bg-black/80 hover:border-white/30 opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
            >
              <ChevronRight />
            </button>
          </>
        )}

        {/* Dot indicators */}
        {total > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to photo ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current
                  ? "w-5 bg-white"
                  : "w-1.5 bg-white/35 hover:bg-white/60"
                  }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── Card info ── */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-white">{project.title}</h3>
        <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{project.description}</p>
      </div>
    </div>
  );
}

export default function WorkGallery() {
  return (
    <section id="work" className="py-16 px-4 sm:px-6 bg-black/70 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-zinc-400 text-xs font-semibold uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
            Our Recent Transformations
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            From daily drivers to exotic supercars — precision, premium films, master-level craftsmanship.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/qualitints/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-white/10 hover:border-white/20 text-white font-bold rounded-xl transition-all hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5 text-zinc-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
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
