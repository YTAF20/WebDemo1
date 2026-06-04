"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { CAL_LINK } from "@/config/business";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function BookPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#dc2626" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-16 px-4 sm:px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 pt-8">
            <span className="text-red-500 text-xs font-semibold uppercase tracking-widest">
              Online Booking
            </span>
            <h1 className="mt-2 text-4xl font-bold">Book Your Appointment</h1>
            <p className="mt-3 text-zinc-400">
              Select an available time slot below to schedule your styling service.
            </p>
          </div>

          {/* Pricing Disclaimer */}
          <div className="mb-8 p-4 rounded-xl bg-red-600/10 border border-red-600/20 text-center max-w-2xl mx-auto">
            <p className="text-sm text-zinc-300">
              <span className="text-red-500 font-semibold">Note:</span> Appointments are free to book online. Final pricing is based on your vehicle model/size, surface condition, and styling preferences, and will be confirmed via phone/text or at the start of your appointment.
            </p>
          </div>

          {/* Embed Container */}
          <div className="bg-[#111827] border border-white/5 rounded-2xl p-4 sm:p-6 overflow-hidden">
            <Cal
              calLink={CAL_LINK}
              style={{ width: "100%", height: "100%", minHeight: "650px", overflow: "scroll" }}
              config={{ layout: "month_view", theme: "dark" }}
            />
          </div>
        </div>
      </main>
    </>
  );
}

