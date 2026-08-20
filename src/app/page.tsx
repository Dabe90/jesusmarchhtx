import Image from "next/image";
import Link from "next/link";
import { BackgroundVideo } from "@/components/BackgroundVideo";
import { ButtonLink } from "@/components/ButtonLink";
import { PlayableVideo } from "@/components/PlayableVideo";
import { marches } from "@/lib/content";

const marchVideos: Record<string, { src: string; poster: string }> = {
  houston: { src: "/videos/houston.mp4", poster: "/images/houston-1.jpg" },
  dc: { src: "/videos/dc.mp4", poster: "/images/dc-1.jpg" },
  tulsa: { src: "/videos/tulsa.mp4", poster: "/images/houston-3.jpg" },
  nigeria: { src: "/videos/nigeria.mp4", poster: "/images/card-partners.jpg" },
};

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[88vh] overflow-hidden text-white">
        <BackgroundVideo src="/videos/hero.mp4" poster="/images/hero-banner.jpg" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-5xl flex-col items-center justify-center px-5 py-28 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            Jesus March Houston
          </p>
          <h1 className="mt-6 text-4xl leading-tight font-bold text-white md:text-6xl">
            We will teach the undiluted Word of God to all nations of the world.
          </h1>
          <p className="mt-6 text-white/90">
            — Damilola Abe, President of the Dear Daughter Bible Study
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/getinvolved">Get involved</ButtonLink>
            <ButtonLink href="/gallery" variant="light">
              Gallery
            </ButtonLink>
            <ButtonLink href="/donate" variant="light">
              Give
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { href: "/gallery", title: "Gallery", body: "Experience our joy, worship, and God through sights and sounds." },
          { href: "/programs", title: "Podcasts", body: "Listen to timeless teachings and discussions." },
          { href: "/getinvolved", title: "Testimonies", body: "Join us and get involved now." },
          { href: "/therec", title: "The Rec", body: "Reconcile, recreate, and recommit with young people in Houston." },
        ].map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="rounded-2xl border border-black/10 bg-pink p-6 transition hover:border-gold"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red">{card.title}</p>
            <p className="mt-3 text-sm text-ink-3">{card.body}</p>
          </Link>
        ))}
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-12 md:grid-cols-2">
        <PlayableVideo
          src="/videos/hero.mp4"
          poster="/images/hero-banner.jpg"
          title="Jesus March 01 — Play video"
        />
        <PlayableVideo
          src="/videos/quote.mp4"
          poster="/images/quote-bg.jpg"
          title="COMBINE AD (STOMP) — Play video"
        />
      </section>

      <section className="relative overflow-hidden py-24 text-center text-white">
        <BackgroundVideo src="/videos/quote.mp4" poster="/images/quote-bg.jpg" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto max-w-4xl px-5">
          <p className="text-3xl font-medium italic text-white md:text-4xl">
            “The Spirit of the Sovereign Lord is on me, because the Lord has anointed me to proclaim good news to the poor.”
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.25em] text-gold">Isaiah 61:1</p>
        </div>
      </section>

      {marches.map((march) => {
        const video = marchVideos[march.slug];
        return (
          <section key={march.slug} id={march.slug} className="relative overflow-hidden text-white">
            {video ? <BackgroundVideo src={video.src} poster={video.poster} /> : null}
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">{march.kicker}</p>
                <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">{march.title}</h2>
                <p className="mt-4 text-lg text-white/90">{march.subtitle}</p>
                <div className="mt-6 space-y-4 text-white/80">
                  {march.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                <p className="mt-6 text-white">{march.cta}</p>
                <div className="mt-8 flex gap-3">
                  <ButtonLink href={"href" in march && march.href ? march.href : "/gallery"}>
                    See pictures
                  </ButtonLink>
                  <ButtonLink href="/volunteer" variant="light">
                    Volunteer
                  </ButtonLink>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {march.images.map((src) => (
                  <div key={src} className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                    <Image src={src} alt={march.city} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-pink">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red">News and events</p>
          <h2 className="mt-3 text-4xl font-bold text-black">What’s next</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl bg-black p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Last Sunday of the month</p>
              <h3 className="mt-3 text-3xl font-bold">The Rec Special Service</h3>
              <p className="mt-4 text-white/80">
                Deep worship, Bible study, and fellowship with the Holy Spirit. Join young people across Houston.
              </p>
              <div className="mt-6">
                <ButtonLink href="/therec">Learn more</ButtonLink>
              </div>
            </article>
            <article className="rounded-2xl bg-white p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red">January 2026</p>
              <h3 className="mt-3 text-3xl font-bold text-black">Jesus March Nigeria</h3>
              <p className="mt-4 text-ink-3">
                Nationwide movement every last Saturday in January. Lagos, Ibadan, Benin, Abuja, Port Harcourt, and more.
              </p>
              <div className="mt-6">
                <ButtonLink href="/jmnigeria">Register now</ButtonLink>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
