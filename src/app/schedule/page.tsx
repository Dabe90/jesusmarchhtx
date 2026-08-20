import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = { title: "Schedule" };

export default function SchedulePage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center">
      <h1 className="font-display text-5xl text-black">Schedule</h1>
      <p className="mt-6 text-ink-3">No full calendar to display at the moment.</p>
      <div className="mt-10 grid gap-4 text-left">
        <article className="rounded-2xl border border-black/10 bg-pink p-6">
          <p className="text-sm text-gold">Last Sunday of the month</p>
          <h2 className="mt-2 font-display text-2xl">The Rec Special Service</h2>
        </article>
        <article className="rounded-2xl border border-black/10 bg-pink p-6">
          <p className="text-sm text-gold">January 31, 2026</p>
          <h2 className="mt-2 font-display text-2xl">Jesus March Nigeria</h2>
        </article>
      </div>
      <div className="mt-10">
        <ButtonLink href="/therec">See The Rec</ButtonLink>
      </div>
    </section>
  );
}
