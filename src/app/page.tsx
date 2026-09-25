import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BackgroundVideo } from "@/components/BackgroundVideo";
import { ButtonLink } from "@/components/ButtonLink";
import { ChapterInvite } from "@/components/ChapterInvite";
import { DailyBlessing } from "@/components/DailyBlessing";
import { InquiryForm } from "@/components/InquiryForm";
import { JoinHub } from "@/components/JoinHub";
import { Kicker } from "@/components/Kicker";
import { PlayableVideo } from "@/components/PlayableVideo";
import { StoryCarousel } from "@/components/StoryCarousel";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { nextPrograms, organizer, whatWeDo } from "@/lib/content";
import { links } from "@/lib/links";

export const metadata: Metadata = {
  title: { absolute: "Jesus March Houston | Dear Daughter Bible Study" },
  description:
    "Join Jesus March in Houston, Tulsa, and Washington DC. Worship, prayer, Bible study, and the gospel — organized by Dear Daughter Bible Study Group.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Jesus March Houston",
    description:
      "Uniting believers. Lifting up cities. Preaching Jesus. Next marches in Tulsa and Washington DC.",
    url: "/",
    images: [{ url: "/images/hero-banner.jpg", alt: "Jesus March in the streets" }],
  },
};

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden text-white">
        <BackgroundVideo src="/videos/hero.mp4" poster="/images/hero-banner.jpg" />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/50 via-navy/50 to-midnight/90" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-center px-4 py-24 text-center sm:px-5 md:py-28">
          <Image
            src="/images/logo-march.png"
            alt="Jesus March"
            width={140}
            height={140}
            className="mb-6 h-24 w-24 rounded-full bg-white object-contain shadow-[0_12px_40px_rgba(0,0,0,0.35)] sm:h-28 sm:w-28 md:h-36 md:w-36"
            priority
          />
          <Kicker tone="dark">Organized by Dear Daughter Bible Study Group</Kicker>
          <h1 className="mt-5 max-w-[16ch] text-3xl leading-[1.1] font-bold text-balance text-white sm:max-w-none sm:text-4xl md:text-6xl">
            Uniting Believers. Lifting Up Cities. Preaching Jesus.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-white/90 sm:mt-6 sm:text-lg">
            A movement born in Houston, taking the undiluted Word of God to the streets and the nations.
          </p>
          <div className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center">
            <ButtonLink href="/#next" className="w-full sm:w-auto">
              Join the Next March
            </ButtonLink>
            <ButtonLink href="/#media" variant="light" className="w-full sm:w-auto">
              Listen to The REC Podcast
            </ButtonLink>
          </div>
        </div>
      </section>

      <DailyBlessing />

      <section className="bg-white px-5 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Kicker>Clear action</Kicker>
          <h2 className="mt-3 text-3xl font-bold text-midnight sm:text-4xl md:text-5xl">What we do</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whatWeDo.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-[0_12px_40px_rgba(14,41,115,0.08)] transition duration-300 hover:-translate-y-2 hover:border-gold hover:shadow-[0_18px_40px_rgba(14,41,115,0.18)]"
              >
                <div className="relative aspect-[4/3]">
                  <Image src={item.image} alt="" fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy">{item.title}</p>
                  <p className="mt-3 text-sm text-ink-3">{item.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="family" className="scroll-mt-24 bg-mist px-5 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Kicker>The family behind the March</Kicker>
          <h2 className="mt-3 text-3xl font-bold text-midnight sm:text-4xl md:text-5xl">{organizer.name}</h2>
          <p className="mt-4 max-w-3xl text-lg text-ink-3">{organizer.credit}</p>
          <p className="mt-4 max-w-3xl text-ink-3">{organizer.summary}</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {organizer.body.map((paragraph) => (
              <p key={paragraph} className="rounded-3xl border border-navy/10 bg-white p-6 text-ink-3">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            {organizer.verses.map((verse) => (
              <p key={verse.ref} className="text-sm text-navy">
                <span className="font-semibold text-gold">{verse.ref}</span> — {verse.text}
              </p>
            ))}
          </div>
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <ButtonLink href="/#join" className="w-full sm:w-auto">Request a Bible study</ButtonLink>
            <ButtonLink href={links.prayerCity} variant="outline" className="w-full sm:w-auto">
              Houston Prayer City
            </ButtonLink>
          </div>
        </div>
      </section>

      <ChapterInvite />

      <section id="next" className="scroll-mt-24 bg-navy px-5 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl">
          <Kicker tone="dark">Next programs</Kicker>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">Mark your calendar</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {nextPrograms.map((program) => (
              <article key={program.title} className="overflow-hidden rounded-3xl bg-white text-ink">
                <div className="relative aspect-[4/5]">
                  <Image src={program.image} alt={program.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy">{program.when}</p>
                  <h3 className="mt-2 text-2xl font-bold text-midnight">{program.title}</h3>
                  <p className="mt-2 text-sm text-ink-3">{program.where}</p>
                  <div className="mt-5">
                    <ButtonLink href={program.href}>{program.title}</ButtonLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist px-5 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Kicker>From Houston to the nations</Kicker>
          <h2 className="mt-3 text-3xl font-bold text-midnight sm:text-4xl">March stories</h2>
          <p className="mt-3 max-w-2xl text-ink-3">
            Swipe the cities. Watch, look, then expand only if you want the longer story.
          </p>
          <div className="mt-8">
            <StoryCarousel />
          </div>
          <div className="mt-10 rounded-3xl bg-navy px-6 py-10 text-center text-white md:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">The vision</p>
            <p className="mt-3 text-4xl font-bold text-gold md:text-6xl">1 Billion</p>
            <p className="mt-2 text-lg md:text-2xl">Goal: reach 1 billion souls for Christ by 2030.</p>
          </div>
        </div>
      </section>

      <section id="media" className="scroll-mt-24 bg-white px-5 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Kicker>The REC Podcast Hub</Kicker>
          <h2 className="mt-3 text-3xl font-bold text-midnight sm:text-4xl md:text-5xl">Hit play right here</h2>
          <p className="mt-4 max-w-2xl text-ink-3">
            Recent teachings and worship from the March. Press play, then subscribe so you don’t miss The Rec.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <YouTubeEmbed
              videoId={links.youtubeEmbed}
              title="damilola abe on YouTube"
              channelHref={links.youtube}
            />
            <PlayableVideo
              src="/videos/hero.mp4"
              poster="/images/hero-banner.jpg"
              title="Jesus March 01 — worship in the streets"
            />
          </div>
          <div id="media-subscribe" className="mt-10 grid gap-8 rounded-3xl border border-navy/10 bg-mist p-6 md:grid-cols-2 md:p-10">
            <div>
              <h3 className="text-2xl font-bold text-midnight">Subscribe in one click</h3>
              <p className="mt-3 text-ink-3">
                Leave your email and we’ll send Spotify, Apple Podcasts, and YouTube links — or follow
                @ddbs.htx for new drops.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#media-subscribe" className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white">
                  Spotify
                </a>
                <a href="#media-subscribe" className="rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white">
                  Apple Podcasts
                </a>
                <a
                  href={links.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-red px-4 py-2 text-sm font-semibold text-white"
                >
                  YouTube @abedamilola
                </a>
                <a
                  href={links.youtubeDearDaughter}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-red px-4 py-2 text-sm font-semibold text-white"
                >
                  YouTube @deardaughter_bs
                </a>
              </div>
              <a
                href={links.instagram}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4"
              >
                Follow @ddbs.htx
              </a>
            </div>
            <InquiryForm
              formName="Podcast subscribe"
              submitLabel="Send me the links"
              fields={[
                { name: "name", label: "Name", required: true },
                { name: "email", label: "Email", type: "email", required: true },
              ]}
            />
          </div>
        </div>
      </section>

      <JoinHub />
    </>
  );
}
