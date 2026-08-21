import Image from "next/image";
import Link from "next/link";
import { BackgroundVideo } from "@/components/BackgroundVideo";
import { ButtonLink } from "@/components/ButtonLink";
import { DailyBlessing } from "@/components/DailyBlessing";
import { InquiryForm } from "@/components/InquiryForm";
import { JoinHub } from "@/components/JoinHub";
import { Kicker } from "@/components/Kicker";
import { MarchCards } from "@/components/MarchCards";
import { PlayableVideo } from "@/components/PlayableVideo";
import { whatWeDo } from "@/lib/content";
import { links } from "@/lib/links";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[92vh] overflow-hidden text-white">
        <BackgroundVideo src="/videos/hero.mp4" poster="/images/hero-banner.jpg" />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/55 via-navy/55 to-midnight/90" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-5 py-28 text-center">
          <Kicker tone="dark">Jesus March Houston</Kicker>
          <h1 className="mt-6 text-4xl leading-tight font-bold text-white md:text-6xl">
            Spreading Worship &amp; Revival Across Houston
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">
            A movement of believers uniting to speak the Word, spread love, and lift up our city.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/#join">Join the March</ButtonLink>
            <ButtonLink href="/#media" variant="light">
              Listen to the Podcast
            </ButtonLink>
          </div>
        </div>
      </section>

      <DailyBlessing />

      <section className="bg-white px-5 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Kicker>Clear and concise</Kicker>
          <h2 className="mt-3 text-4xl font-bold text-midnight md:text-5xl">What we do</h2>
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

      <section className="bg-mist px-5 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Kicker>From Houston to the nations</Kicker>
          <h2 className="mt-3 text-4xl font-bold text-midnight">Recent marches</h2>
          <MarchCards />
        </div>
      </section>

      <section className="bg-navy px-5 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl">
          <Kicker tone="dark">Partner from anywhere</Kicker>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Global 360 Partners</h2>
          <p className="mt-4 max-w-3xl text-white/85">
            Join the Global 360 Partner Network of Dear Daughter Bible Study. Wherever you are, stand
            with the March through prayer, giving, connections, and counsel.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-gold/40 bg-white/10 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Way one</p>
              <h3 className="mt-3 text-2xl font-bold">Monthly Global Prayer Zoom</h3>
              <p className="mt-4 text-white/80">
                Meet with partners around the world to pray for Houston, the nations, and every
                upcoming March. You’ll receive monthly prayer points and partner updates.
              </p>
            </article>
            <article className="rounded-3xl border border-white/20 bg-white/10 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Way two</p>
              <h3 className="mt-3 text-2xl font-bold">Outreach &amp; Bible Sponsor Support</h3>
              <p className="mt-4 text-white/80">
                Sponsor Jesus Marches, outreach events, and Bible study materials. If you can’t go,
                your support can — and it reaches cities we have not yet stepped into.
              </p>
            </article>
          </div>
          <div className="mt-10">
            <ButtonLink href="/getinvolved">Become a Global 360 Partner</ButtonLink>
          </div>
        </div>
      </section>

      <section id="media" className="scroll-mt-24 bg-white px-5 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Kicker>Podcast &amp; media hub</Kicker>
          <h2 className="mt-3 text-4xl font-bold text-midnight md:text-5xl">Hit play right here</h2>
          <p className="mt-4 max-w-2xl text-ink-3">
            Worship from the March, messages from The Rec, and new episodes as they drop. The Rec
            Podcast is real talk, real faith, and real life.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <PlayableVideo
              src="/videos/hero.mp4"
              poster="/images/hero-banner.jpg"
              title="Jesus March 01 — worship in the streets"
            />
            <PlayableVideo
              src="/videos/quote.mp4"
              poster="/images/quote-bg.jpg"
              title="COMBINE AD — The Rec message"
            />
          </div>
          <div id="media-subscribe" className="mt-10 grid gap-8 rounded-3xl border border-navy/10 bg-mist p-6 md:grid-cols-2 md:p-10">
            <div>
              <h3 className="text-2xl font-bold text-midnight">Subscribe to The Rec Podcast</h3>
              <p className="mt-3 text-ink-3">
                Episodes go out on Spotify, Apple Podcasts, and YouTube. Leave your email and we’ll
                send you the listen links — or follow along on Instagram for new drops.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#media-subscribe" className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white">
                  Spotify
                </a>
                <a href="#media-subscribe" className="rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white">
                  Apple Podcasts
                </a>
                <a href="#media-subscribe" className="rounded-full bg-red px-4 py-2 text-sm font-semibold text-white">
                  YouTube
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
