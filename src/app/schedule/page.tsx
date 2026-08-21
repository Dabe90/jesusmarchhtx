import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { nextPrograms } from "@/lib/content";

export const metadata: Metadata = { title: "Schedule" };

export default function SchedulePage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center">
      <h1 className="font-display text-5xl text-black">Schedule</h1>
      <p className="mt-6 text-ink-3">Upcoming marches and gatherings.</p>
      <div className="mt-10 grid gap-4 text-left">
        {nextPrograms.map((program) => (
          <article key={program.title} className="rounded-2xl border border-black/10 border-l-4 border-l-gold bg-white p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy">{program.when}</p>
            <h2 className="mt-2 font-display text-2xl">{program.title}</h2>
            <p className="mt-2 text-sm text-ink-3">{program.where}</p>
          </article>
        ))}
        <article className="rounded-2xl border border-black/10 border-l-4 border-l-gold bg-white p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy">Last Sunday of the month</p>
          <h2 className="mt-2 font-display text-2xl">The Rec Special Service</h2>
        </article>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/#next">See flyers</ButtonLink>
        <ButtonLink href="/therec" variant="outline">
          See The Rec
        </ButtonLink>
      </div>
    </section>
  );
}
