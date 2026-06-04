import type { Metadata } from "next";
import { Inter, Alex_Brush } from "next/font/google";
import "./globals.css";
import ScrollRestoration from "@/components/ScrollRestoration";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-signature",
});

export const metadata: Metadata = {
  title: "Qualitints",
  description:
    "Premium nano-ceramic window tinting, professional detailing, paint protection film (PPF), and vehicle wraps. Precision plotter-cut fit with lifetime warranty.",
  icons: {
    icon: "/images/logo_tint_clear.png",
    apple: "/images/logo_tint_clear.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${alexBrush.variable}`}>
      <body className="text-white antialiased bg-[#0a0a0a]">
        <ScrollRestoration />
        {children}
      </body>
    </html>
  );
}
