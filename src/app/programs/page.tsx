import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { InquiryForm } from "@/components/InquiryForm";
import { Kicker } from "@/components/Kicker";
import { nextPrograms } from "@/lib/content";
import { links } from "@/lib/links";

export const metadata: Metadata = { title: "Programs" };

export default function ProgramsPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <Kicker>Upcoming marches · Class of David · The Rec</Kicker>
      <h1 className="mt-3 text-3xl font-bold text-midnight sm:text-5xl">Programs</h1>

      <h2 className="mt-12 text-3xl font-bold text-midnight">Next marches</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {nextPrograms.map((program) => (
          <article key={program.title} className="overflow-hidden rounded-3xl border border-navy/10 bg-white">
            <div className="relative aspect-[4/5]">
              <Image src={program.image} alt={program.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy">{program.when}</p>
              <h3 className="mt-2 text-2xl font-bold text-midnight">{program.title}</h3>
              <p className="mt-2 text-sm text-ink-3">{program.where}</p>
              <div className="mt-5">
                <ButtonLink href={program.href}>Learn more</ButtonLink>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <article className="overflow-hidden rounded-3xl border border-black/10 bg-white">
          <div className="relative h-64">
            <Image src="/images/card-david.jpg" alt="Class of David" fill className="object-cover" />
          </div>
          <div className="p-8">
            <h2 className="text-3xl font-bold text-black">Class of David</h2>
            <p className="mt-4 text-muted">
              Training in the undiluted Word of truth for believers who want to grow, lead, and
              make disciples.
            </p>
          </div>
        </article>
        <article className="overflow-hidden rounded-3xl border border-black/10 bg-white">
          <div className="relative h-64">
            <Image src="/images/card-podcast.jpg" alt="The Rec Podcast" fill className="object-cover" />
          </div>
          <div className="p-8">
            <h2 className="text-3xl font-bold text-black">The Rec Podcast</h2>
            <p className="mt-4 text-muted">
              Real talk, real faith, real life. Christian conversation, practical life lessons, and
              everyday solutions for relationships, purpose, and challenges.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={links.youtube}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-red px-5 py-3 text-sm font-semibold text-white"
              >
                YouTube @abedamilola
              </a>
              <a
                href={links.youtubeDearDaughter}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-red px-5 py-3 text-sm font-semibold text-white"
              >
                YouTube @deardaughter_bs
              </a>
            </div>
          </div>
        </article>
      </div>

      <article className="mt-8 overflow-hidden rounded-3xl border border-navy/10 bg-white md:grid md:grid-cols-2">
        <div className="relative min-h-56">
          <Image src="/images/houston-2.jpg" alt="Dear Daughter Bible Study" fill className="object-cover" />
        </div>
        <div className="p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy">New chapters</p>
          <h2 className="mt-3 text-3xl font-bold text-black">Start a Bible study chapter</h2>
          <p className="mt-4 text-muted">
            Plant Dear Daughter Bible Study in another state, another city, or on a campus. Request
            a gathering — we will come and walk with you.
          </p>
          <div className="mt-6">
            <ButtonLink href="/chapters">How to start a chapter</ButtonLink>
          </div>
        </div>
      </article>
      <div className="mt-12 max-w-xl rounded-3xl border border-black/10 bg-cream-2 p-8">
        <h3 className="text-2xl font-bold text-black">Subscribe now</h3>
        <p className="mt-2 mb-6 text-sm text-muted">Links will be sent to you.</p>
        <InquiryForm
          formName="Podcast subscribe"
          fields={[
            { name: "name", label: "Name", required: true },
            { name: "email", label: "Email", type: "email", required: true },
          ]}
          submitLabel="Send me the links"
        />
      </div>
    </section>
  );
}
