import Link from "next/link";
import Image from "next/image";
import {
  BUSINESS_NAME,
  BUSINESS_PHONE,
  BUSINESS_ADDRESS,
  BUSINESS_EMAIL,
} from "@/config/business";

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-black overflow-hidden pt-16 pb-10 px-4 sm:px-6 scroll-mt-16">
      {/* Hairline accent at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Background brand watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[11rem] sm:text-[16rem] font-black text-white/[0.018] tracking-tight uppercase whitespace-nowrap leading-none">
          QUALITINTS
        </span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand col */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo_tint_clear.png"
                alt="Qualitints"
                width={140}
                height={48}
                className="h-11 w-auto object-contain"
              />
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-5 max-w-[220px]">
              Precision nano-ceramic tinting, PPF, detailing, and wraps. Done right the first time.
            </p>
            <a
              href="https://www.instagram.com/qualitints/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-zinc-500 hover:text-white text-sm transition-colors group"
            >
              <svg className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              @qualitints
            </a>
          </div>

          {/* Contact col */}
          <div>
            <h4 className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-5">Contact</h4>
            <ul className="space-y-3 text-zinc-500 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {BUSINESS_ADDRESS}
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-zinc-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${BUSINESS_PHONE}`} className="hover:text-white transition-colors">
                  {BUSINESS_PHONE}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-zinc-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${BUSINESS_EMAIL}`} className="hover:text-white transition-colors">
                  {BUSINESS_EMAIL}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours col */}
          <div>
            <h4 className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-5">Hours</h4>
            <ul className="space-y-2 text-sm mb-6">
              <li className="flex justify-between text-zinc-500">
                <span>Monday – Friday</span>
                <span className="text-zinc-400">9:00 AM – 5:00 PM</span>
              </li>
              <li className="flex justify-between text-zinc-500">
                <span>Saturday</span>
                <span className="text-zinc-400">9:00 AM – 5:00 PM</span>
              </li>
              <li className="flex justify-between text-zinc-700">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-zinc-100 text-black text-sm font-bold rounded-md transition-all uppercase tracking-wide hover:-translate-y-0.5"
            >
              Book Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-zinc-700">
          <span>© {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</span>
          <span className="uppercase tracking-widest text-[10px]">Precision · Quality · Trust</span>
        </div>
      </div>
    </footer>
  );
}
