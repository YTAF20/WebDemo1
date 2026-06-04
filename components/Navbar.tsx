"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-white/8 shadow-xl shadow-black/40"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Brand mark */}
        <Link href="/" className="flex items-center gap-1 group">
          <span className="text-xl font-black text-white tracking-tight">Quali</span>
          <span className="text-xl font-black text-zinc-500 tracking-tight">Tints</span>
          <span className="ml-1.5 w-1.5 h-1.5 rounded-full bg-white mb-0.5 group-hover:scale-125 transition-transform" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {[
            { label: "Services", href: "/#services" },
            { label: "Our Work", href: "/#work" },
            { label: "How It Works", href: "/#how-it-works" },
            { label: "Contact", href: "/#contact" },
          ].map(({ label, href }) => (
            <a key={label} href={href} className="nav-link text-sm text-zinc-400 hover:text-white transition-colors">
              {label}
            </a>
          ))}

          <a
            href="https://www.instagram.com/qualitints/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors"
            title="Follow on Instagram"
          >
            <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          <Link
            href="/book"
            className="px-5 py-2 bg-white hover:bg-zinc-100 text-black text-sm font-bold rounded-md transition-colors tracking-wide"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-zinc-400 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/98 border-t border-white/5 px-4 py-5 flex flex-col gap-4">
          {[
            { label: "Services", href: "/#services" },
            { label: "Our Work", href: "/#work" },
            { label: "How It Works", href: "/#how-it-works" },
            { label: "Contact", href: "/#contact" },
          ].map(({ label, href }) => (
            <a key={label} href={href} className="text-sm text-zinc-400 hover:text-white transition-colors" onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/qualitints/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 hover:text-white flex items-center gap-2 transition-colors"
            onClick={() => setOpen(false)}
          >
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            Instagram
          </a>
          <Link
            href="/book"
            className="px-5 py-2.5 bg-white hover:bg-zinc-100 text-black text-sm font-bold rounded-md text-center transition-colors"
            onClick={() => setOpen(false)}
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}
