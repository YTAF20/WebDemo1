import { google } from "googleapis";
import {
  BUSINESS_HOURS,
  OPEN_DAYS,
  SLOT_DURATION_MINUTES,
  BUSINESS_ADDRESS,
} from "@/config/business";
import type { TimeSlot, BookingRequest } from "@/lib/types";
import { format, addMinutes, startOfDay, setHours, addDays, parseISO } from "date-fns";

function getCalendarClient() {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });
  return google.calendar({ version: "v3", auth });
}

export async function getAvailableSlots(dateStr: string): Promise<TimeSlot[]> {
  const calendar = getCalendarClient();
  const calendarId = process.env.GOOGLE_CALENDAR_ID ?? "primary";

  const date = parseISO(dateStr);
  const dayOfWeek = date.getDay();

  if (!OPEN_DAYS.includes(dayOfWeek)) return [];

  const dayStart = setHours(startOfDay(date), BUSINESS_HOURS.start);
  const dayEnd = setHours(startOfDay(date), BUSINESS_HOURS.end);

  const freeBusyRes = await calendar.freebusy.query({
    requestBody: {
      timeMin: dayStart.toISOString(),
      timeMax: dayEnd.toISOString(),
      items: [{ id: calendarId }],
    },
  });

  const busyPeriods = freeBusyRes.data.calendars?.[calendarId]?.busy ?? [];

  const slots: TimeSlot[] = [];
  let cursor = dayStart;

  while (addMinutes(cursor, SLOT_DURATION_MINUTES) <= dayEnd) {
    const slotEnd = addMinutes(cursor, SLOT_DURATION_MINUTES);

    const overlaps = busyPeriods.some((busy) => {
      if (!busy.start || !busy.end) return false;
      const busyStart = new Date(busy.start);
      const busyEnd = new Date(busy.end);
      return cursor < busyEnd && slotEnd > busyStart;
    });

    if (!overlaps) {
      slots.push({
        start: cursor.toISOString(),
        end: slotEnd.toISOString(),
        label: format(cursor, "h:mm a"),
      });
    }

    cursor = addMinutes(cursor, SLOT_DURATION_MINUTES);
  }

  return slots;
}

export async function createBooking(booking: BookingRequest): Promise<string> {
  const calendar = getCalendarClient();
  const calendarId = process.env.GOOGLE_CALENDAR_ID ?? "primary";

  const description = [
    `Service: ${booking.service}`,
    `Phone: ${booking.phone}`,
    `Email: ${booking.email}`,
    booking.notes ? `Notes: ${booking.notes}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const event = await calendar.events.insert({
    calendarId,
    sendUpdates: "none",
    requestBody: {
      summary: `${booking.service} — ${booking.name}`,
      description,
      location: BUSINESS_ADDRESS,
      start: { dateTime: booking.slotStart },
      end: { dateTime: booking.slotEnd },
      attendees: [{ email: booking.email, displayName: booking.name }],
      extendedProperties: {
        private: {
          clientEmail: booking.email,
          clientPhone: booking.phone,
          clientName: booking.name,
          service: booking.service,
          source: "website-booking",
        },
      },
    },
  });

  return event.data.id ?? "";
}

export async function getTomorrowEvents(): Promise<
  Array<{ clientEmail: string; clientName: string; service: string; startTime: string }>
> {
  const calendar = getCalendarClient();
  const calendarId = process.env.GOOGLE_CALENDAR_ID ?? "primary";

  const tomorrow = addDays(startOfDay(new Date()), 1);
  const dayStart = tomorrow;
  const dayEnd = addDays(tomorrow, 1); // exclusive upper bound: start of day after tomorrow

  const res = await calendar.events.list({
    calendarId,
    timeMin: dayStart.toISOString(),
    timeMax: dayEnd.toISOString(),
    singleEvents: true,
    orderBy: "startTime",
  });

  const events = res.data.items ?? [];

  return events
    .map((ev) => {
      const props = ev.extendedProperties?.private;
      if (!props?.source || props.source !== "website-booking") return null;
      return {
        clientEmail: props.clientEmail ?? "",
        clientName: props.clientName ?? "",
        service: props.service ?? "",
        startTime: ev.start?.dateTime ?? ev.start?.date ?? "",
      };
    })
    .filter((e): e is NonNullable<typeof e> => e !== null && e.clientEmail !== "");
}
