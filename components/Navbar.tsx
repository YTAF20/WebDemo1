"use client";

import Link from "next/link";
import { useState } from "react";
import { BUSINESS_NAME } from "@/config/business";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold text-amber-500 tracking-wide">
          {BUSINESS_NAME}
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Services
          </a>
          <a href="#how-it-works" className="text-sm text-zinc-400 hover:text-white transition-colors">
            How It Works
          </a>
          <a href="#contact" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Contact
          </a>
          <Link
            href="/book"
            className="px-5 py-2 bg-amber-600 hover:bg-amber-500 text-white text-sm font-semibold rounded-md transition-colors"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-zinc-400 hover:text-white"
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
        <div className="md:hidden bg-black/95 border-t border-white/5 px-4 py-4 flex flex-col gap-4">
          <a href="#services" className="text-sm text-zinc-400 hover:text-white" onClick={() => setOpen(false)}>Services</a>
          <a href="#how-it-works" className="text-sm text-zinc-400 hover:text-white" onClick={() => setOpen(false)}>How It Works</a>
          <a href="#contact" className="text-sm text-zinc-400 hover:text-white" onClick={() => setOpen(false)}>Contact</a>
          <Link
            href="/book"
            className="px-5 py-2 bg-amber-600 hover:bg-amber-500 text-white text-sm font-semibold rounded-md text-center transition-colors"
            onClick={() => setOpen(false)}
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}
