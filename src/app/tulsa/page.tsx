import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { InquiryForm } from "@/components/InquiryForm";
import { Kicker } from "@/components/Kicker";
import { FacebookIcon, InstagramIcon, YouTubeIcon } from "@/components/SocialLinks";
import { WatermarkedShot } from "@/components/WatermarkedShot";
import { marches, tulsaDrivePhotos, tulsaJoinWays, tulsaPhotos } from "@/lib/content";
import { links, ZELLE_EMAIL } from "@/lib/links";

const tulsa = marches.find((march) => march.slug === "tulsa");
const marqueePhotos = [...tulsaDrivePhotos, ...tulsaPhotos, ...tulsaDrivePhotos, ...tulsaPhotos];
const stamps = ["repeat", "logo", "date", "none"] as const;

export const metadata: Metadata = {
  title: "Jesus March Tulsa",
  description:
    "Join Jesus March Tulsa on Saturday, September 26, 2026 at 12PM, starting at Tulsa City Hall. Worship, pray, and preach Jesus with Dear Daughter Bible Study Group.",
  openGraph: {
    title: "Jesus March Tulsa — Saturday, September 26, 2026",
    description:
      "12PM at Tulsa City Hall. March with us, watch live, or give. Organized by Dear Daughter Bible Study Group.",
    url: "https://www.jesusmarchhtx.com/tulsa",
    images: ["/images/flyer-tulsa.jpg"],
  },
};

const liveLinks = [
  { href: links.facebook, label: "Facebook", handle: "Jesus March HTX", icon: <FacebookIcon /> },
  { href: links.youtubeDearDaughter, label: "YouTube", handle: "@deardaughter_bs", icon: <YouTubeIcon /> },
  { href: links.instagramTulsa, label: "Instagram", handle: "@ddbs.tulsa", icon: <InstagramIcon /> },
  { href: links.instagramGlobal, label: "Instagram", handle: "@ddbs.global", icon: <InstagramIcon /> },
];

export default function TulsaPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-midnight text-white">
        <Image src="/images/tulsa/d01.jpg" alt="" fill priority className="object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/55 via-navy/70 to-midnight" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden opacity-25 mix-blend-overlay"
        >
          <p className="absolute top-24 -left-10 hidden rotate-[-18deg] text-8xl font-black tracking-[0.4em] text-gold uppercase md:block">
            Jesus March Tulsa Jesus March Tulsa
          </p>
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-5 md:grid-cols-[0.9fr_1.1fr] md:gap-10 md:py-20">
          <div className="tulsa-glow relative mx-auto w-full max-w-[240px] overflow-hidden rounded-[1.5rem] border-2 border-gold order-2 sm:max-w-sm md:order-1 md:max-w-md md:rounded-[2rem]">
            <Image
              src="/images/flyer-tulsa.jpg"
              alt="Jesus March Tulsa flyer — Saturday, September 26, 2026 at 12PM, Tulsa City Hall"
              width={1080}
              height={1350}
              className="h-auto w-full"
              priority
            />
          </div>
          <div className="order-1 min-w-0 text-center md:order-2 md:text-left">
            <p className="inline-flex max-w-full rounded-full border border-gold/50 bg-gold/15 px-3 py-1 text-[10px] font-black tracking-[0.12em] text-gold uppercase sm:px-4 sm:text-xs sm:tracking-[0.28em]">
              Next march · Tulsa City Hall
            </p>
            <h1 className="mt-4 text-4xl font-black leading-[0.95] sm:text-5xl md:text-7xl">
              Jesus
              <span className="block text-gold">March Tulsa</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/90 sm:mt-5 sm:text-lg md:mx-0">
              The streets fill with worship. Flags go up. The name of Jesus is preached out loud.
              Saturday, September 26 — 12PM — start at City Hall.
            </p>
            <dl className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
              <Fact label="When" value="Saturday, September 26, 2026" />
              <Fact label="Time" value="12:00 PM" />
              <Fact label="Start" value="Tulsa City Hall" />
              <Fact label="City" value="Tulsa, Oklahoma" />
            </dl>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:flex sm:flex-wrap">
              <ButtonLink href="#join-tulsa" className="w-full sm:w-auto">
                Join the March
              </ButtonLink>
              <ButtonLink href={links.tulsaPrayerZoom} variant="light" className="w-full sm:w-auto">
                Thursday prayer on Zoom
              </ButtonLink>
              <ButtonLink href="#give-tulsa" variant="light" className="w-full sm:w-auto">
                Give
              </ButtonLink>
              <ButtonLink href={links.tulsaMaps} variant="light" className="w-full sm:w-auto">
                Get directions
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-black py-4">
        <div className="tulsa-marquee flex w-max gap-3">
          {marqueePhotos.map((src, i) => (
            <div key={`${src}-${i}`} className="relative h-24 w-36 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-44 md:h-36 md:w-56">
              <Image src={src} alt="" fill className="object-cover" sizes="224px" />
            </div>
          ))}
        </div>
      </section>

      <section id="prayer" className="scroll-mt-24 bg-gold px-4 py-10 text-black sm:px-5 md:py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-stretch gap-5 md:flex-row md:items-center md:justify-between md:gap-6">
          <div className="min-w-0">
            <p className="text-[10px] font-black tracking-[0.2em] uppercase sm:text-xs sm:tracking-[0.28em]">Every Thursday</p>
            <h2 className="mt-2 text-2xl font-black sm:text-3xl md:text-4xl">
              Join us for prayer
              <span className="block sm:inline"> · 5:00 PM CST</span>
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-black/80 sm:text-base">
              Prayer is on Zoom. Come pray with Dear Daughter Bible Study Group as we cover Tulsa,
              the March, and the nations.
            </p>
          </div>
          <a
            href={links.tulsaPrayerZoom}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full shrink-0 items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white md:w-auto"
          >
            Open the Zoom prayer
          </a>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-5 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <Kicker>What this is</Kicker>
            <h2 className="mt-3 text-3xl font-bold text-midnight sm:text-4xl md:text-5xl">Light in the streets of Tulsa</h2>
            <div className="mt-6 space-y-4 text-ink-3">
              {tulsa?.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>
                Jesus March is organized by Dear Daughter Bible Study Group. Everyone is invited —
                bring a friend, bring your family, and come as you are. Jesus is the Host of the March.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <WatermarkedShot src="/images/tulsa/d09.jpg" alt="Marchers carrying Jesus Loves You banner" stamp="date" className="aspect-[4/5] rounded-3xl" />
            <WatermarkedShot src="/images/tulsa/d14.jpg" alt="Preaching during Jesus March Tulsa" stamp="logo" className="aspect-[4/5] rounded-3xl" />
            <WatermarkedShot src="/images/tulsa/d21.jpg" alt="Jesus March Tulsa at City Hall" stamp="none" className="aspect-[4/5] rounded-3xl" />
            <WatermarkedShot src="/images/tulsa/d22.jpg" alt="Friends at Jesus March Tulsa" stamp="logo" className="aspect-[4/5] rounded-3xl" />
          </div>
        </div>
      </section>

      <section className="bg-midnight px-4 py-12 text-white sm:px-5 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Kicker tone="dark">From the Tulsa marches</Kicker>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl md:text-6xl">
            This is what it looks like
            <span className="block text-gold">when a city lifts up Jesus.</span>
          </h2>
          <div className="mt-10 columns-2 gap-3 md:columns-3">
            {[...tulsaDrivePhotos, ...tulsaPhotos].map((src, i) => (
              <div key={src} className="mb-3 break-inside-avoid overflow-hidden rounded-2xl">
                <WatermarkedShot
                  src={src}
                  alt="Jesus March Tulsa"
                  stamp={stamps[i % stamps.length]}
                  className={i % 5 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"}
                  sizes="(min-width: 768px) 33vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="join-tulsa" className="scroll-mt-24 bg-navy px-4 py-12 text-white sm:px-5 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
          <div className="min-w-0">
            <Kicker tone="dark">How to join</Kicker>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">March with us, serve, or watch live</h2>
            <ol className="mt-8 space-y-5 text-white/90">
              <li>
                <strong className="text-gold">1. Be there.</strong> Meet at Tulsa City Hall on Saturday,
                September 26 at 12PM. Wear comfortable shoes and come ready to worship.
              </li>
              <li>
                <strong className="text-gold">2. Tell us you’re coming.</strong> Fill out the form so we
                can count you, connect groups, and help with travel or carpooling.
              </li>
              <li>
                <strong className="text-gold">3. Pray with us every Thursday.</strong> Join Zoom prayer at
                5:00 PM CST.
              </li>
              <li>
                <strong className="text-gold">4. Can’t come in person?</strong> Watch live on Facebook,
                YouTube, and Instagram — @ddbs.tulsa and @ddbs.global.
              </li>
            </ol>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {liveLinks.map((item) => (
                <a
                  key={item.handle}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 transition hover:border-gold hover:bg-white/10"
                >
                  <span className="text-gold">{item.icon}</span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.18em] text-white/60">{item.label}</span>
                    <span className="font-semibold">{item.handle}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div className="min-w-0 overflow-hidden rounded-3xl bg-white p-4 text-ink sm:p-6 md:p-8">
            <h3 className="text-2xl font-bold text-midnight">I’m coming to Tulsa</h3>
            <p className="mt-2 mb-6 text-sm text-muted">
              We’ll follow up from Dear Daughter Bible Study Group.
            </p>
            <InquiryForm
              formName="Jesus March Tulsa 2026"
              submitLabel="Count me in"
              fields={[
                { name: "firstName", label: "First name", required: true },
                { name: "lastName", label: "Last name", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "phone", label: "Phone", type: "tel", required: true },
                { name: "city", label: "City you are coming from" },
                {
                  name: "how",
                  label: "How are you joining?",
                  required: true,
                  options: tulsaJoinWays,
                  defaultValue: "I will march with you",
                },
                { name: "note", label: "Travel, carpool, or group notes" },
              ]}
            />
          </div>
        </div>
      </section>

      <section id="give-tulsa" className="scroll-mt-24 bg-mist px-4 py-12 sm:px-5 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Kicker>How to give</Kicker>
          <h2 className="mt-3 text-3xl font-bold text-midnight sm:text-4xl md:text-5xl">Help send the March</h2>
          <p className="mt-4 max-w-2xl text-ink-3">
            Your gift sponsors Jesus March Tulsa — flags, Bibles, outreach, and getting the team to
            the city. 100% goes to Dear Daughter Bible Study Group.
          </p>
          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2">
            <article className="rounded-3xl bg-gold p-5 text-black sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em]">Card · Apple Pay · Google Pay</p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">Give online with Zeffy</h3>
              <p className="mt-3 text-sm">No platform fees. Mention Jesus March Tulsa if you can.</p>
              <a
                href={links.zeffy}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-semibold text-white sm:w-auto"
              >
                Open the giving form
              </a>
            </article>
            <article className="rounded-3xl border border-navy/10 bg-white p-5 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy">Zelle</p>
              <h3 className="mt-3 text-2xl font-bold break-words text-midnight sm:text-3xl">Zelle</h3>
              <p className="mt-1 text-lg font-semibold break-all text-midnight">{ZELLE_EMAIL}</p>
              <p className="mt-3 text-sm text-ink-3">
                Send your gift by Zelle and note <strong>Jesus March Tulsa</strong> in the memo.
              </p>
              <a
                href={links.zelleTulsaMailto}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white sm:w-auto"
              >
                Email {ZELLE_EMAIL}
              </a>
            </article>
          </div>
          <div className="mt-8 max-w-full overflow-hidden rounded-3xl border border-navy/10 bg-white sm:mt-10">
            <iframe
              title="Give to Jesus March Tulsa"
              src={links.zeffyEmbed}
              className="h-[560px] w-full max-w-full sm:h-[720px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-left">
      <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold sm:text-xs">{label}</dt>
      <dd className="mt-1 text-base font-semibold break-words sm:text-lg">{value}</dd>
    </div>
  );
}
