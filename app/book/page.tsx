"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import BookingCalendar from "@/components/BookingCalendar";
import TimeSlotPicker from "@/components/TimeSlotPicker";
import BookingForm from "@/components/BookingForm";
import type { TimeSlot } from "@/lib/types";

type Step = "datetime" | "form";

export default function BookPage() {
  const [step, setStep] = useState<Step>("datetime");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | undefined>();

  function handleSlotSelect(slot: TimeSlot) {
    setSelectedSlot(slot);
    setStep("form");
  }

  function handleBack() {
    setStep("datetime");
    setSelectedSlot(undefined);
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-16 px-4 sm:px-6 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 pt-8">
            <span className="text-amber-500 text-xs font-semibold uppercase tracking-widest">
              Online Booking
            </span>
            <h1 className="mt-2 text-4xl font-bold">Book Your Appointment</h1>
            <p className="mt-3 text-zinc-400">
              Select a date and time, then fill in your details.
            </p>
          </div>

          {/* Step indicator */}
          <div className="flex items-center justify-center gap-3 mb-8 text-sm">
            <StepBadge number={1} label="Date & Time" active={step === "datetime"} done={step === "form"} />
            <div className="w-12 h-px bg-white/10" />
            <StepBadge number={2} label="Your Details" active={step === "form"} done={false} />
          </div>

          {/* Card */}
          <div className="bg-[#111827] border border-white/5 rounded-2xl p-6 sm:p-8">
            {step === "datetime" ? (
              <div className="space-y-8">
                <div>
                  <h2 className="text-lg font-semibold mb-4">1. Choose a Date</h2>
                  <BookingCalendar selected={selectedDate} onSelect={setSelectedDate} />
                </div>

                <div className="border-t border-white/5 pt-6">
                  <h2 className="text-lg font-semibold mb-4">2. Choose a Time</h2>
                  <TimeSlotPicker
                    date={selectedDate}
                    selected={selectedSlot}
                    onSelect={handleSlotSelect}
                  />
                </div>
              </div>
            ) : selectedSlot ? (
              <div>
                <h2 className="text-lg font-semibold mb-6">3. Complete Your Booking</h2>
                <BookingForm slot={selectedSlot} onBack={handleBack} />
              </div>
            ) : null}
          </div>

          <p className="text-center text-xs text-zinc-600 mt-6">
            Need help?{" "}
            <Link href="/#contact" className="text-amber-600 hover:text-amber-400 underline">
              Contact us
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}

function StepBadge({
  number,
  label,
  active,
  done,
}: {
  number: number;
  label: string;
  active: boolean;
  done: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
          done
            ? "bg-amber-600 text-white"
            : active
            ? "bg-amber-600 text-white"
            : "bg-zinc-800 text-zinc-500"
        }`}
      >
        {done ? (
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          number
        )}
      </div>
      <span className={`text-sm ${active ? "text-white font-medium" : "text-zinc-500"}`}>
        {label}
      </span>
    </div>
  );
}
