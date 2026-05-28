import { NextRequest, NextResponse } from "next/server";
import { createBooking } from "@/lib/google-calendar";
import { sendConfirmation } from "@/lib/email";
import { SERVICES } from "@/config/business";
import type { BookingRequest } from "@/lib/types";

export async function POST(req: NextRequest) {
  let body: Partial<BookingRequest>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, phone, email, service, notes, slotStart, slotEnd } = body;

  if (!name || !phone || !email || !service || !slotStart || !slotEnd) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  if (!(SERVICES as readonly string[]).includes(service)) {
    return NextResponse.json({ error: "Invalid service" }, { status: 400 });
  }

  const booking: BookingRequest = {
    name: name.trim(),
    phone: phone.trim(),
    email: email.trim().toLowerCase(),
    service,
    notes: notes?.trim(),
    slotStart,
    slotEnd,
  };

  try {
    const eventId = await createBooking(booking);
    await sendConfirmation(booking);
    return NextResponse.json({ success: true, eventId });
  } catch (err) {
    console.error("Booking error:", err);
    return NextResponse.json({ error: "Failed to create booking" }, { status: 500 });
  }
}
