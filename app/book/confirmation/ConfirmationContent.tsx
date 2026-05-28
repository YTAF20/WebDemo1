"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { BUSINESS_PHONE, BUSINESS_ADDRESS } from "@/config/business";

export default function ConfirmationContent() {
  const params = useSearchParams();
  const service = params.get("service") ?? "your service";
  const date = params.get("date") ?? "";
  const time = params.get("time") ?? "";
  const name = params.get("name") ?? "";
  const email = params.get("email") ?? "";

  return (
    <div className="max-w-md w-full text-center">
      {/* Success icon */}
      <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-amber-600/20 border-2 border-amber-600/50 flex items-center justify-center">
        <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 className="text-3xl font-bold mb-2">You&apos;re Booked!</h1>
      <p className="text-zinc-400 mb-8">
        Thanks{name ? `, ${name}` : ""}! Your appointment is confirmed.
        {email && (
          <> A confirmation has been sent to <span className="text-amber-400">{email}</span>.</>
        )}
      </p>

      {/* Booking summary */}
      <div className="bg-[#111827] border border-white/5 rounded-xl p-6 text-left space-y-3 mb-8">
        <DetailRow label="Service" value={service} />
        {date && <DetailRow label="Date" value={date} />}
        {time && <DetailRow label="Time" value={time} />}
        <DetailRow label="Location" value={BUSINESS_ADDRESS} />
        <DetailRow label="Questions?" value={BUSINESS_PHONE} />
      </div>

      {/* Tips */}
      <div className="bg-amber-600/10 border border-amber-600/20 rounded-xl p-5 text-sm text-amber-200/80 text-left mb-8">
        <p className="font-semibold text-amber-400 mb-2">Before your appointment:</p>
        <ul className="space-y-1 list-disc list-inside text-xs text-amber-200/70">
          <li>Arrive 5 minutes early</li>
          <li>Clean your vehicle windows beforehand</li>
          <li>Avoid rolling windows down for 48–72 hours after tinting</li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/"
          className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-semibold rounded-lg transition-colors"
        >
          Back to Home
        </Link>
        <Link
          href="/book"
          className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white text-sm font-semibold rounded-lg transition-colors"
        >
          Book Another
        </Link>
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 text-sm border-b border-white/5 pb-3 last:border-0 last:pb-0">
      <span className="text-zinc-500">{label}</span>
      <span className="text-white text-right">{value}</span>
    </div>
  );
}
