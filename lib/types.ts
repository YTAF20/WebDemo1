import type { Service } from "@/config/business";

export interface TimeSlot {
  start: string; // ISO string
  end: string;   // ISO string
  label: string; // e.g. "9:00 AM"
}

export interface BookingRequest {
  name: string;
  phone: string;
  email: string;
  service: Service;
  notes?: string;
  slotStart: string; // ISO string
  slotEnd: string;   // ISO string
}

export interface BookingDetails extends BookingRequest {
  eventId: string;
}
