"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { format, parseISO } from "date-fns";
import { SERVICES } from "@/config/business";
import type { TimeSlot } from "@/lib/types";

interface Props {
  slot: TimeSlot;
  onBack: () => void;
}

export default function BookingForm({ slot, onBack }: Props) {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: SERVICES[0],
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          slotStart: slot.start,
          slotEnd: slot.end,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Booking failed. Please try again.");
      }

      const params = new URLSearchParams({
        service: form.service,
        date: format(parseISO(slot.start), "EEEE, MMMM d, yyyy"),
        time: slot.label,
        name: form.name,
        email: form.email,
      });
      router.push(`/book/confirmation?${params.toString()}`);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      {/* Selected slot summary */}
      <div className="mb-6 p-4 rounded-lg bg-amber-600/10 border border-amber-600/30 flex items-center justify-between">
        <div>
          <p className="text-xs text-amber-400 uppercase tracking-wider mb-0.5">Selected slot</p>
          <p className="text-white font-semibold">
            {format(parseISO(slot.start), "EEEE, MMMM d")} at {slot.label}
          </p>
        </div>
        <button
          type="button"
          onClick={onBack}
          className="text-xs text-zinc-400 hover:text-white underline"
        >
          Change
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-zinc-400 mb-1.5">Full Name *</label>
            <input
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Smith"
              className="w-full bg-[#1a1a2e] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-600/60 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs text-zinc-400 mb-1.5">Phone Number *</label>
            <input
              name="phone"
              required
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="(555) 000-0000"
              className="w-full bg-[#1a1a2e] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-600/60 transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs text-zinc-400 mb-1.5">Email Address *</label>
          <input
            name="email"
            required
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            className="w-full bg-[#1a1a2e] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-600/60 transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs text-zinc-400 mb-1.5">Service *</label>
          <select
            name="service"
            required
            value={form.service}
            onChange={handleChange}
            className="w-full bg-[#1a1a2e] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-600/60 transition-colors appearance-none cursor-pointer"
          >
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs text-zinc-400 mb-1.5">
            Notes / Special Requests{" "}
            <span className="text-zinc-600">(optional)</span>
          </label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows={3}
            placeholder="Vehicle make/model, shade preference, etc."
            className="w-full bg-[#1a1a2e] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-600/60 transition-colors resize-none"
          />
        </div>

        {error && (
          <p className="text-red-400 text-sm bg-red-900/20 border border-red-800/30 rounded-lg px-4 py-2.5">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full py-3.5 bg-amber-600 hover:bg-amber-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-colors text-sm"
        >
          {submitting ? "Booking…" : "Confirm Appointment"}
        </button>

        <p className="text-center text-xs text-zinc-500">
          You&apos;ll receive a confirmation email right after booking.
        </p>
      </form>
    </div>
  );
}
