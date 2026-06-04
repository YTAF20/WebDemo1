"use client";

import Link from "next/link";
import { useState } from "react";
import { BUSINESS_NAME } from "@/config/business";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold text-red-500 tracking-wide">
          {BUSINESS_NAME}
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Services
          </a>
          <a href="#work" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Our Work
          </a>
          <a href="#how-it-works" className="text-sm text-zinc-400 hover:text-white transition-colors">
            How It Works
          </a>
          <a href="#contact" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Contact
          </a>
          <a
            href="https://www.instagram.com/qualitints/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
            title="Follow on Instagram"
          >
            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <Link
            href="/book"
            className="px-5 py-2 bg-red-600 hover:bg-red-500 text-white text-sm font-semibold rounded-md transition-colors"
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
          <a href="#work" className="text-sm text-zinc-400 hover:text-white" onClick={() => setOpen(false)}>Our Work</a>
          <a href="#how-it-works" className="text-sm text-zinc-400 hover:text-white" onClick={() => setOpen(false)}>How It Works</a>
          <a href="#contact" className="text-sm text-zinc-400 hover:text-white" onClick={() => setOpen(false)}>Contact</a>
          <a
            href="https://www.instagram.com/qualitints/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 hover:text-white flex items-center gap-2"
            onClick={() => setOpen(false)}
          >
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span>Instagram</span>
          </a>
          <Link
            href="/book"
            className="px-5 py-2 bg-red-600 hover:bg-red-500 text-white text-sm font-semibold rounded-md text-center transition-colors"
            onClick={() => setOpen(false)}
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}
