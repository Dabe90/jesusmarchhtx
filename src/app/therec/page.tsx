import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { InquiryForm } from "@/components/InquiryForm";
import { Kicker } from "@/components/Kicker";
import { InstagramIcon } from "@/components/SocialLinks";
import { links } from "@/lib/links";

export const metadata: Metadata = { title: "The Rec" };

export default function TheRecPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <Image src="/images/quote-bg.jpg" alt="" fill className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="relative mx-auto max-w-4xl px-5 py-24 text-white">
          <Kicker tone="dark">Reconcile · Recreate · Recommit</Kicker>
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-5xl">Welcome to The Rec</h1>
          <p className="mt-6 text-lg text-white/90">
            As the name suggests, it’s short for Reconcile, Recreate, and Recommit — a trio of
            principles that guide our mission to serve young people and share the gospel of Jesus.
            Here we dive into deep worship, engage in profound Bible study, and foster fellowship
            with the Holy Spirit.
          </p>
          <p className="mt-4 text-white/70">
            Our gatherings are a celebration of God-size fun, where we infuse creativity and holiness
            into everyday life. Whether you’re seeking spiritual renewal, a creative outlet, or a
            community that values both faith and fun, The Rec is your destination.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2">
        <article className="rounded-3xl bg-gold p-5 text-ink sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em]">Upcoming event</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Back to School, Back to God</h2>
          <p className="mt-4">Free T-shirt for the first 50 attendees.</p>
          <a
            href={links.recEventbrite}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-black px-5 py-3 text-sm font-semibold text-white"
          >
            Get tickets on Eventbrite
          </a>
        </article>
        <div className="rounded-3xl border border-black/10 bg-pink p-5 sm:p-8">
          <h2 className="text-2xl font-bold text-black">Sign up</h2>
          <p className="mt-2 mb-6 text-sm text-muted">Missions, gatherings, and The Rec special service.</p>
          <InquiryForm
            formName="The Rec signup"
            fields={[
              { name: "firstName", label: "First name", required: true },
              { name: "lastName", label: "Last name", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "note", label: "How can we include you?" },
            ]}
          />
        </div>
      </section>

      <section className="bg-black py-16 text-white">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold sm:text-xs sm:tracking-[0.25em]">Follow us on Instagram</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">#theREC · @ddbs.htx</h2>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={links.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram @ddbs.htx"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold text-black transition hover:bg-gold-2"
            >
              <InstagramIcon />
            </a>
            <a
              href={links.recHashtag}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white px-5 py-3 text-sm font-semibold"
            >
              #theREC
            </a>
          </div>
          <div className="mt-10 overflow-hidden rounded-3xl bg-white">
            <iframe
              title="Dear Daughter Bible Study on Instagram"
              src="https://www.instagram.com/ddbs.htx/embed"
              className="h-[480px] w-full max-w-full sm:h-[720px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-16">
        <ButtonLink href="/programs">Listen to The Rec Podcast</ButtonLink>
      </div>
    </>
  );
}
