import type { Metadata } from "next";
import Image from "next/image";
import { InquiryForm } from "@/components/InquiryForm";
import { links } from "@/lib/links";

export const metadata: Metadata = { title: "Programs" };

export default function ProgramsPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-gold">Class of David · The Rec Podcast</p>
      <h1 className="mt-3 text-5xl font-bold text-black">Programs</h1>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <article className="overflow-hidden rounded-3xl border border-black/10 bg-pink">
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
        <article className="overflow-hidden rounded-3xl border border-black/10 bg-pink">
          <div className="relative h-64">
            <Image src="/images/card-podcast.jpg" alt="The Rec Podcast" fill className="object-cover" />
          </div>
          <div className="p-8">
            <h2 className="text-3xl font-bold text-black">The Rec Podcast</h2>
            <p className="mt-4 text-muted">
              Real talk, real faith, real life. Christian conversation, practical life lessons, and
              everyday solutions for relationships, purpose, and challenges.
            </p>
            <p className="mt-4 text-sm text-ink-3">
              Catch us on Spotify, Apple Podcasts, Google Podcasts, Amazon Music, and more.
            </p>
            <a
              href={links.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-black px-5 py-3 text-sm font-semibold text-white"
            >
              Follow @ddbs.htx for new episodes
            </a>
          </div>
        </article>
      </div>
      <div className="mt-12 max-w-xl rounded-3xl border border-black/10 bg-pink p-8">
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
