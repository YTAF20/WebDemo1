import nodemailer from "nodemailer";
import { format, parseISO } from "date-fns";
import {
  BUSINESS_NAME,
  BUSINESS_PHONE,
  BUSINESS_ADDRESS,
  BUSINESS_EMAIL,
} from "@/config/business";
import type { BookingRequest } from "@/lib/types";

function createTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

function formatDateTime(iso: string) {
  try {
    return format(parseISO(iso), "EEEE, MMMM d, yyyy 'at' h:mm a");
  } catch {
    return iso;
  }
}

const baseStyle = `
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  background: #ffffff;
`;

const headerStyle = `
  background: #0a0a0a;
  padding: 28px 32px;
  text-align: center;
`;

const bodyStyle = `
  padding: 32px;
  background: #f9f9f9;
`;

const accentColor = "#d97706";

export async function sendConfirmation(booking: BookingRequest) {
  const transporter = createTransporter();
  const dateLabel = formatDateTime(booking.slotStart);

  const html = `
<div style="${baseStyle}">
  <div style="${headerStyle}">
    <h1 style="color: ${accentColor}; margin: 0; font-size: 24px;">${BUSINESS_NAME}</h1>
    <p style="color: #ffffff; margin: 6px 0 0; font-size: 14px;">Booking Confirmation</p>
  </div>
  <div style="${bodyStyle}">
    <p style="font-size: 16px; color: #111;">Hi ${booking.name},</p>
    <p style="color: #444;">Your appointment has been confirmed. Here are your booking details:</p>

    <table style="width:100%; border-collapse:collapse; margin: 24px 0;">
      <tr><td style="padding:10px; border-bottom:1px solid #e5e7eb; color:#888; width:40%;">Service</td><td style="padding:10px; border-bottom:1px solid #e5e7eb; font-weight:bold;">${booking.service}</td></tr>
      <tr><td style="padding:10px; border-bottom:1px solid #e5e7eb; color:#888;">Date &amp; Time</td><td style="padding:10px; border-bottom:1px solid #e5e7eb; font-weight:bold;">${dateLabel}</td></tr>
      <tr><td style="padding:10px; border-bottom:1px solid #e5e7eb; color:#888;">Location</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">${BUSINESS_ADDRESS}</td></tr>
      <tr><td style="padding:10px; color:#888;">Phone</td><td style="padding:10px;">${BUSINESS_PHONE}</td></tr>
    </table>

    ${booking.notes ? `<p style="color:#444;"><strong>Your notes:</strong> ${booking.notes}</p>` : ""}

    <div style="background:#fffbeb; border-left:4px solid ${accentColor}; padding:14px 18px; margin:24px 0; border-radius:0 6px 6px 0;">
      <p style="margin:0; font-size:14px; color:#92400e;"><strong>Preparation tips:</strong> Please arrive 5 minutes early. Clean your vehicle windows before your appointment for best results. Avoid rolling down windows for 48–72 hours after tinting.</p>
    </div>

    <p style="color:#444;">Need to reschedule? Contact us at <a href="tel:${BUSINESS_PHONE}" style="color:${accentColor};">${BUSINESS_PHONE}</a> or reply to this email.</p>
    <p style="color:#888; font-size:13px; margin-top:32px;">— The ${BUSINESS_NAME} Team</p>
  </div>
  <div style="background:#0a0a0a; padding:16px 32px; text-align:center;">
    <p style="color:#555; font-size:12px; margin:0;">${BUSINESS_ADDRESS} &nbsp;|&nbsp; ${BUSINESS_PHONE}</p>
  </div>
</div>`;

  await transporter.sendMail({
    from: `"${BUSINESS_NAME}" <${process.env.GMAIL_USER}>`,
    to: booking.email,
    subject: `Booking Confirmed — ${booking.service} on ${format(parseISO(booking.slotStart), "MMM d")}`,
    html,
  });
}

export async function sendReminder(
  clientEmail: string,
  clientName: string,
  service: string,
  startTime: string
) {
  const transporter = createTransporter();
  const dateLabel = formatDateTime(startTime);

  const html = `
<div style="${baseStyle}">
  <div style="${headerStyle}">
    <h1 style="color: ${accentColor}; margin: 0; font-size: 24px;">${BUSINESS_NAME}</h1>
    <p style="color: #ffffff; margin: 6px 0 0; font-size: 14px;">Appointment Reminder</p>
  </div>
  <div style="${bodyStyle}">
    <p style="font-size: 16px; color: #111;">Hi ${clientName},</p>
    <p style="color:#444;">This is a friendly reminder that your tint appointment is <strong>tomorrow</strong>.</p>

    <table style="width:100%; border-collapse:collapse; margin: 24px 0;">
      <tr><td style="padding:10px; border-bottom:1px solid #e5e7eb; color:#888; width:40%;">Service</td><td style="padding:10px; border-bottom:1px solid #e5e7eb; font-weight:bold;">${service}</td></tr>
      <tr><td style="padding:10px; border-bottom:1px solid #e5e7eb; color:#888;">Date &amp; Time</td><td style="padding:10px; border-bottom:1px solid #e5e7eb; font-weight:bold;">${dateLabel}</td></tr>
      <tr><td style="padding:10px; border-bottom:1px solid #e5e7eb; color:#888;">Location</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">${BUSINESS_ADDRESS}</td></tr>
      <tr><td style="padding:10px; color:#888;">Phone</td><td style="padding:10px;">${BUSINESS_PHONE}</td></tr>
    </table>

    <div style="background:#fffbeb; border-left:4px solid ${accentColor}; padding:14px 18px; margin:24px 0; border-radius:0 6px 6px 0;">
      <p style="margin:0; font-size:14px; color:#92400e;"><strong>Reminder:</strong> Clean your windows before arriving, and plan to leave your car with us for approximately 2 hours. Avoid rolling windows down for 48–72 hours after tinting.</p>
    </div>

    <p style="color:#444;">Questions? Call us at <a href="tel:${BUSINESS_PHONE}" style="color:${accentColor};">${BUSINESS_PHONE}</a>.</p>
    <p style="color:#888; font-size:13px; margin-top:32px;">— The ${BUSINESS_NAME} Team</p>
  </div>
  <div style="background:#0a0a0a; padding:16px 32px; text-align:center;">
    <p style="color:#555; font-size:12px; margin:0;">${BUSINESS_ADDRESS} &nbsp;|&nbsp; ${BUSINESS_PHONE}</p>
  </div>
</div>`;

  await transporter.sendMail({
    from: `"${BUSINESS_NAME}" <${process.env.GMAIL_USER}>`,
    to: clientEmail,
    subject: `Reminder: Your ${service} appointment is tomorrow`,
    html,
  });
}
