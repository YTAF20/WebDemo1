import Link from "next/link";

const BUSINESS_NAME = process.env.NEXT_PUBLIC_BUSINESS_NAME ?? "ProTint Auto";
const BUSINESS_PHONE = process.env.NEXT_PUBLIC_BUSINESS_PHONE ?? "(555) 123-4567";
const BUSINESS_ADDRESS = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS ?? "123 Main St, City, ST 00000";
const BUSINESS_EMAIL = process.env.NEXT_PUBLIC_BUSINESS_EMAIL ?? "info@protintauto.com";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-white/5 py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-amber-500 font-bold text-lg mb-3">{BUSINESS_NAME}</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Professional window tinting for every vehicle. Quality films, expert installation, lasting results.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-widest">Contact</h4>
          <ul className="space-y-2 text-zinc-400 text-sm">
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {BUSINESS_ADDRESS}
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-amber-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href={`tel:${BUSINESS_PHONE}`} className="hover:text-amber-400 transition-colors">
                {BUSINESS_PHONE}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-amber-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href={`mailto:${BUSINESS_EMAIL}`} className="hover:text-amber-400 transition-colors">
                {BUSINESS_EMAIL}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-widest">Hours</h4>
          <ul className="space-y-1 text-zinc-400 text-sm">
            <li className="flex justify-between"><span>Monday – Friday</span><span>9:00 AM – 5:00 PM</span></li>
            <li className="flex justify-between"><span>Saturday</span><span>9:00 AM – 5:00 PM</span></li>
            <li className="flex justify-between text-zinc-600"><span>Sunday</span><span>Closed</span></li>
          </ul>
          <Link
            href="/book"
            className="mt-5 inline-block px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/5 text-center text-zinc-600 text-xs">
        © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
