export const BUSINESS_NAME = process.env.NEXT_PUBLIC_BUSINESS_NAME ?? "Qualitints";
export const BUSINESS_PHONE = process.env.NEXT_PUBLIC_BUSINESS_PHONE ?? "(415) 324-6196";
export const BUSINESS_ADDRESS = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS ?? "46560 Fremont Blvd #113, Fremont, CA 94538";
export const BUSINESS_EMAIL = process.env.NEXT_PUBLIC_BUSINESS_EMAIL ?? "qualitints@gmail.com";

export const BUSINESS_HOURS = { start: 9, end: 17 }; // 9am–5pm

// 0=Sun, 1=Mon, ..., 6=Sat
export const OPEN_DAYS = [1, 2, 3, 4, 5, 6]; // Mon–Sat

export const SLOT_DURATION_MINUTES = 120; // 2 hours per appointment

export const SERVICES = [
  "Window Tinting (Nano Ceramic)",
  "Professional Detailing",
  "Paint Protection Film (PPF)",
  "Vehicle Wraps",
  "Headlight Restoration",
] as const;

export type Service = (typeof SERVICES)[number];

export const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK ?? "placeholder-cal-user/tint-job";


