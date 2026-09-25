import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { nextPrograms } from "@/lib/content";
import { links } from "@/lib/links";

export const metadata: Metadata = {
  title: "Schedule",
  description:
    "Thursday Zoom prayer at 5:00 PM CST, plus upcoming Jesus March gatherings with Dear Daughter Bible Study Group.",
  alternates: { canonical: "/schedule" },
};

export default function SchedulePage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center">
      <h1 className="font-display text-3xl text-black sm:text-5xl">Schedule</h1>
      <p className="mt-6 text-ink-3">Upcoming marches and gatherings.</p>
      <div className="mt-10 grid gap-4 text-left">
        {nextPrograms.map((program) => (
          <article key={program.title} className="rounded-2xl border border-black/10 border-l-4 border-l-gold bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-navy sm:tracking-[0.2em]">{program.when}</p>
            <h2 className="mt-2 font-display text-2xl">{program.title}</h2>
            <p className="mt-2 text-sm text-ink-3">{program.where}</p>
            <div className="mt-4">
              <ButtonLink href={program.href}>{program.title}</ButtonLink>
            </div>
          </article>
        ))}
        <article className="rounded-2xl border border-black/10 border-l-4 border-l-gold bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-navy sm:tracking-[0.2em]">Every Thursday · 5:00 PM CST</p>
          <h2 className="mt-2 font-display text-2xl">Zoom prayer</h2>
          <p className="mt-2 text-sm text-ink-3">Join us on Zoom as we pray for Tulsa, the March, and the nations.</p>
          <div className="mt-4">
            <ButtonLink href={links.tulsaPrayerZoom}>Open Zoom</ButtonLink>
          </div>
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
