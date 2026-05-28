"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { isBefore, startOfDay, getDay, addDays } from "date-fns";
import { OPEN_DAYS } from "@/config/business";

interface Props {
  selected: Date | undefined;
  onSelect: (day: Date | undefined) => void;
}

const today = startOfDay(new Date());
const maxDate = addDays(today, 60);

function isDisabled(date: Date): boolean {
  if (isBefore(date, today)) return true;
  if (isBefore(maxDate, date)) return true;
  const dow = getDay(date);
  return !OPEN_DAYS.includes(dow);
}

export default function BookingCalendar({ selected, onSelect }: Props) {
  return (
    <div className="flex justify-center">
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={onSelect}
        disabled={isDisabled}
        fromDate={today}
        toDate={maxDate}
        showOutsideDays={false}
        classNames={{
          root: "text-white",
          month: "space-y-3",
          caption: "flex justify-center pt-1 relative items-center mb-2",
          caption_label: "text-sm font-semibold text-white",
          nav: "space-x-1 flex items-center",
          nav_button:
            "h-7 w-7 bg-transparent p-0 hover:text-amber-400 transition-colors",
          nav_button_previous: "absolute left-1",
          nav_button_next: "absolute right-1",
          table: "w-full border-collapse space-y-1",
          head_row: "flex",
          head_cell: "text-zinc-500 rounded-md w-10 font-normal text-xs text-center",
          row: "flex w-full mt-1",
          cell: "text-center text-sm p-0 relative",
          day: "h-10 w-10 p-0 font-normal rounded-lg hover:bg-zinc-800 transition-colors aria-selected:opacity-100 mx-auto flex items-center justify-center",
          day_selected:
            "bg-amber-600 text-white hover:bg-amber-500 focus:bg-amber-600",
          day_today: "text-amber-400 font-bold",
          day_outside: "text-zinc-700 opacity-50",
          day_disabled: "text-zinc-700 opacity-30 cursor-not-allowed",
          day_hidden: "invisible",
        }}
      />
    </div>
  );
}
