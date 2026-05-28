import Link from "next/link";
import { Suspense } from "react";
import ConfirmationContent from "./ConfirmationContent";

export default function ConfirmationPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4 py-16">
      <Suspense fallback={<div className="text-zinc-400">Loading…</div>}>
        <ConfirmationContent />
      </Suspense>
    </main>
  );
}
