"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";
import type { TimeSlot } from "@/lib/types";

interface Props {
  date: Date | undefined;
  selected: TimeSlot | undefined;
  onSelect: (slot: TimeSlot) => void;
}

export default function TimeSlotPicker({ date, selected, onSelect }: Props) {
  const [slots, setSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!date) {
      setSlots([]);
      return;
    }

    const dateStr = format(date, "yyyy-MM-dd");
    setLoading(true);
    setError(null);

    fetch(`/api/availability?date=${dateStr}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load availability");
        return res.json();
      })
      .then((data: TimeSlot[]) => setSlots(data))
      .catch(() => setError("Could not load available times. Please try again."))
      .finally(() => setLoading(false));
  }, [date]);

  if (!date) {
    return (
      <p className="text-zinc-500 text-sm text-center py-6">
        Select a date to see available time slots.
      </p>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8 gap-2 text-zinc-400">
        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>
        <span className="text-sm">Loading available times…</span>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-400 text-sm text-center py-4">{error}</p>;
  }

  if (slots.length === 0) {
    return (
      <p className="text-zinc-500 text-sm text-center py-6">
        No available slots on this date. Please choose another day.
      </p>
    );
  }

  return (
    <div>
      <p className="text-zinc-400 text-xs mb-3 uppercase tracking-wider">
        Available times on {format(date, "EEEE, MMMM d")}
      </p>
      <div className="grid grid-cols-3 gap-2">
        {slots.map((slot) => {
          const isSelected = selected?.start === slot.start;
          return (
            <button
              key={slot.start}
              type="button"
              onClick={() => onSelect(slot)}
              className={`py-2.5 px-3 rounded-lg text-sm font-medium border transition-all ${
                isSelected
                  ? "bg-amber-600 border-amber-500 text-white"
                  : "bg-[#1a1a2e] border-white/10 text-zinc-300 hover:border-amber-600/50 hover:text-white"
              }`}
            >
              {slot.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
