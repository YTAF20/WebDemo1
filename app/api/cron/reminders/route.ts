import { NextRequest, NextResponse } from "next/server";
import { getTomorrowEvents } from "@/lib/google-calendar";
import { sendReminder } from "@/lib/email";

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  const expected = `Bearer ${process.env.CRON_SECRET}`;

  if (!process.env.CRON_SECRET || authHeader !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const events = await getTomorrowEvents();
    const results = await Promise.allSettled(
      events.map((ev) =>
        sendReminder(ev.clientEmail, ev.clientName, ev.service, ev.startTime)
      )
    );

    const sent = results.filter((r) => r.status === "fulfilled").length;
    const failed = results.filter((r) => r.status === "rejected").length;

    return NextResponse.json({ sent, failed, total: events.length });
  } catch (err) {
    console.error("Cron reminder error:", err);
    return NextResponse.json({ error: "Failed to send reminders" }, { status: 500 });
  }
}
