"use client";

import { useMemo } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { isBefore, startOfDay, getDay, addDays } from "date-fns";
import { OPEN_DAYS } from "@/config/business";

interface Props {
  selected: Date | undefined;
  onSelect: (day: Date | undefined) => void;
}

export default function BookingCalendar({ selected, onSelect }: Props) {
  // Computed inside the component so they update if the page is open past midnight
  const { today, maxDate, isDisabled } = useMemo(() => {
    const t = startOfDay(new Date());
    const max = addDays(t, 60);
    return {
      today: t,
      maxDate: max,
      isDisabled(date: Date) {
        if (isBefore(date, t)) return true;
        if (isBefore(max, date)) return true;
        return !OPEN_DAYS.includes(getDay(date));
      },
    };
  }, []);

  return (
    <div className="rdp-wrapper flex justify-center">
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={onSelect}
        disabled={isDisabled}
        fromDate={today}
        toDate={maxDate}
        showOutsideDays={false}
      />
    </div>
  );
}
