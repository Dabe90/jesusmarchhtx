import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { InquiryForm } from "@/components/InquiryForm";
import { JsonLd } from "@/components/JsonLd";
import { Kicker } from "@/components/Kicker";
import { PlayableVideo } from "@/components/PlayableVideo";
import { FacebookIcon, InstagramIcon, YouTubeIcon } from "@/components/SocialLinks";
import { WatermarkedShot } from "@/components/WatermarkedShot";
import { dcJoinWays, dcPhotos, marches } from "@/lib/content";
import { links, ZELLE_EMAIL } from "@/lib/links";

const dc = marches.find((march) => march.slug === "dc");
const marqueePhotos = [...dcPhotos, ...dcPhotos];
const stamps = ["repeat", "logo", "date", "none"] as const;
const dcStamp = {
  repeatLabel: "Jesus March DC",
  dateLabel: "Oct 17 · 2PM",
  dateExtra: " · Washington Cir NW",
};

export const metadata: Metadata = {
  title: "Jesus March Washington DC",
  description:
    "Join Jesus March Washington DC on Saturday, October 17, 2026 at 2PM at Washington Cir NW. Plan your visit — airports, nearby stays, Metro, and how to meet Dear Daughter Bible Study Group.",
  alternates: { canonical: "/dc" },
  openGraph: {
    title: "Jesus March Washington DC — Saturday, October 17, 2026",
    description:
      "2PM at Washington Cir NW. Plan your visit, march with us, watch live, or give.",
    url: "/dc",
    images: [{ url: "/images/flyer-dc.png", alt: "Jesus March Washington DC flyer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesus March Washington DC — October 17, 2026",
    description: "2PM at Washington Cir NW. Worship, prayer, and the name of Jesus over the nation.",
    images: ["/images/flyer-dc.png"],
  },
};

const liveLinks = [
  { href: links.facebook, label: "Facebook", handle: "Jesus March HTX", icon: <FacebookIcon /> },
  { href: links.youtubeDearDaughter, label: "YouTube", handle: "@deardaughter_bs", icon: <YouTubeIcon /> },
  { href: links.instagram, label: "Instagram", handle: "@ddbs.htx", icon: <InstagramIcon /> },
  { href: links.instagramGlobal, label: "Instagram", handle: "@ddbs.global", icon: <InstagramIcon /> },
];

export default function DcPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Event",
          name: "Jesus March Washington DC",
          startDate: "2026-10-17T14:00:00-04:00",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          url: "https://www.jesusmarchhtx.com/dc",
          image: "https://www.jesusmarchhtx.com/images/flyer-dc.png",
          description:
            "Worship, prayer, and the gospel in Washington DC, starting at Washington Cir NW.",
          location: {
            "@type": "Place",
            name: "Washington Cir NW",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Washington Cir NW",
              addressLocality: "Washington",
              addressRegion: "DC",
              postalCode: "20037",
              addressCountry: "US",
            },
          },
          organizer: {
            "@type": "Organization",
            name: "Dear Daughter Bible Study Group",
            url: "https://www.jesusmarchhtx.com",
          },
        }}
      />
      <section className="relative overflow-hidden bg-midnight text-white">
        <Image src="/images/gallery/g23.jpg" alt="" fill priority className="object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/55 via-navy/70 to-midnight" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden opacity-25 mix-blend-overlay"
        >
          <p className="absolute top-24 -left-10 hidden rotate-[-18deg] text-8xl font-black tracking-[0.4em] text-gold uppercase md:block">
            Jesus March DC Jesus March DC
          </p>
        </div>
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-5 md:grid-cols-[0.9fr_1.1fr] md:gap-10 md:py-20">
          <div className="tulsa-glow relative z-10 mx-auto w-full max-w-[240px] overflow-hidden rounded-[1.5rem] border-2 border-gold order-2 sm:max-w-sm md:order-1 md:max-w-md md:rounded-[2rem]">
            <Image
              src="/images/flyer-dc.png"
              alt="Jesus March Washington DC flyer — Saturday, October 17, 2026 at 2PM, Washington Cir NW, Washington, DC 20037"
              width={1080}
              height={1350}
              className="h-auto w-full"
              priority
            />
          </div>
          <div className="order-1 min-w-0 text-center md:order-2 md:text-left">
            <p className="inline-flex max-w-full rounded-full border border-gold/50 bg-gold/15 px-3 py-1 text-[10px] font-black tracking-[0.12em] text-gold uppercase sm:px-4 sm:text-xs sm:tracking-[0.28em]">
              Next march · Washington Cir NW
            </p>
            <h1 className="mt-4 text-4xl font-black leading-[0.95] sm:text-5xl md:text-7xl">
              Jesus
              <span className="block text-gold">March DC</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/90 sm:mt-5 sm:text-lg md:mx-0">
              The Lord said make His name known in Washington. We are going back — Saturday,
              October 17 at 2PM, starting at Washington Cir NW, Washington, DC 20037.
            </p>
            <dl className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
              <Fact label="When" value="Saturday, October 17, 2026" />
              <Fact label="Time" value="2:00 PM" />
              <Fact label="Start" value="Washington Cir NW" />
              <Fact label="City" value="Washington, DC 20037" />
            </dl>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:flex sm:flex-wrap">
              <ButtonLink href="#join-dc" className="w-full sm:w-auto">
                Join the March
              </ButtonLink>
              <ButtonLink href="#plan-visit" variant="light" className="w-full sm:w-auto">
                Plan your visit
              </ButtonLink>
              <ButtonLink href={links.tulsaPrayerZoom} variant="light" className="w-full sm:w-auto">
                Thursday prayer on Zoom
              </ButtonLink>
              <ButtonLink href="#give-dc" variant="light" className="w-full sm:w-auto">
                Give
              </ButtonLink>
              <ButtonLink href={links.dcMaps} variant="light" className="w-full sm:w-auto">
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
              <span className="block sm:inline">
                <span className="hidden sm:inline"> · </span>
                5:00 PM CST
              </span>
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-black/80 sm:text-base">
              Prayer is on Zoom. Come pray with Dear Daughter Bible Study Group as we cover
              Washington, D.C., the March, and the nations.
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
            <h2 className="mt-3 text-3xl font-bold text-midnight sm:text-4xl md:text-5xl">
              Make His name known in D.C.
            </h2>
            <div className="mt-6 space-y-4 text-ink-3">
              {dc?.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>
                Jesus March is organized by Dear Daughter Bible Study Group. Everyone is invited —
                bring a friend, bring your family, and come as you are. Jesus is the Host of the March.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <WatermarkedShot src="/images/gallery/g23.jpg" alt="Jesus Loves You banner at the U.S. Capitol" stamp="date" className="aspect-[4/5] rounded-3xl" {...dcStamp} />
            <WatermarkedShot src="/images/gallery/g21.jpg" alt="Team Jesus flags in Washington, D.C." stamp="logo" className="aspect-[4/5] rounded-3xl" {...dcStamp} />
            <WatermarkedShot src="/images/gallery/g17.jpg" alt="Worship during Jesus March DC" stamp="none" className="aspect-[4/5] rounded-3xl" {...dcStamp} />
            <WatermarkedShot src="/images/dc-3.jpg" alt="Friends at Jesus March Washington DC" stamp="logo" className="aspect-[4/5] rounded-3xl" {...dcStamp} />
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl">
          <PlayableVideo
            src="/videos/dc.mp4"
            poster="/images/gallery/g23.jpg"
            title="Jesus March Washington DC"
          />
        </div>
      </section>

      <section id="plan-visit" className="scroll-mt-24 bg-white">
        <div className="relative overflow-hidden bg-midnight text-white">
          <Image
            src="/images/gallery/g23.jpg"
            alt=""
            fill
            className="object-cover object-[center_40%] opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/90 to-navy/80" />
          <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-5 md:grid-cols-[1.1fr_0.9fr] md:items-end md:py-16">
            <div>
              <Kicker tone="dark">Coming to D.C.</Kicker>
              <h2 className="mt-3 text-3xl font-black leading-[0.95] sm:text-5xl md:text-6xl">
                Plan your visit
              </h2>
              <p className="mt-4 max-w-xl text-base text-white/85 sm:text-lg">
                Saturday, October 17 · 2PM · Washington Cir NW. Not the Mall. Foggy Bottom,
                by George Washington University. Fly in, rest nearby, walk to the circle ready to
                worship.
              </p>
              <nav
                aria-label="Plan your visit steps"
                className="mt-8 flex flex-wrap gap-2"
              >
                {visitNav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-full border border-white/25 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-gold hover:bg-gold hover:text-black"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {visitHeroPhotos.map((shot) => (
                <div
                  key={shot.src}
                  className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/15"
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                    sizes="(min-width: 768px) 15vw, 30vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-b border-navy/10 bg-mist">
          <dl className="mx-auto grid max-w-7xl gap-px bg-navy/10 sm:grid-cols-2 lg:grid-cols-4">
            {visitFacts.map((fact) => (
              <div key={fact.label} className="bg-mist px-4 py-5 sm:px-6">
                <dt className="text-[11px] font-bold tracking-[0.18em] text-navy uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-base font-semibold text-midnight sm:text-lg">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-5 md:py-16">
          <div className="grid gap-6 overflow-hidden rounded-[2rem] bg-navy text-white lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[280px] sm:min-h-[360px]">
              <Image
                src="/images/dc-1.jpg"
                alt="Jesus March gathering in Washington, D.C."
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 right-5 text-sm font-semibold text-white sm:text-base">
                This is what it looks like when the streets of D.C. lift up Jesus.
              </p>
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10">
              <p className="text-[11px] font-black tracking-[0.22em] text-gold uppercase">
                Meeting point
              </p>
              <h3 className="mt-3 text-2xl font-black sm:text-3xl">Washington Cir NW</h3>
              <p className="mt-2 text-white/80">Washington, DC 20037 · Foggy Bottom</p>
              <ul className="mt-6 space-y-3 text-sm text-white/90 sm:text-base">
                <li>
                  <span className="font-semibold text-gold">Metro:</span> Foggy Bottom–GWU
                  (Blue / Orange / Silver), then a short walk
                </li>
                <li>
                  <span className="font-semibold text-gold">Pin:</span> Washington Cir — not the
                  Lincoln Memorial, not the Capitol
                </li>
                <li>
                  <span className="font-semibold text-gold">When:</span> Saturday, October 17, 2026
                  at 2:00 PM
                </li>
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={links.dcMaps} className="w-full sm:w-auto">
                  Open in Maps
                </ButtonLink>
                <ButtonLink href="#join-dc" variant="light" className="w-full sm:w-auto">
                  I’m coming
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>

        <div id="visit-fly" className="scroll-mt-24 border-t border-navy/10 bg-mist px-4 py-12 sm:px-5 md:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[11px] font-black tracking-[0.22em] text-navy uppercase">
                  Step 1 · Fly
                </p>
                <h3 className="mt-2 text-3xl font-black text-midnight sm:text-4xl">
                  Land as close as you can
                </h3>
                <p className="mt-3 max-w-2xl text-ink-3">
                  Three airports serve the capital. Choose Reagan National when you can — Metro
                  drops you at Foggy Bottom a short walk from the circle.
                </p>
              </div>
              <div className="relative hidden h-28 w-44 overflow-hidden rounded-2xl md:block lg:h-32 lg:w-52">
                <Image
                  src="/images/gallery/g21.jpg"
                  alt="Flags at Jesus March Washington DC"
                  fill
                  className="object-cover"
                  sizes="208px"
                />
              </div>
            </div>

            <article className="mt-8 grid overflow-hidden rounded-[2rem] bg-navy text-white md:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[220px]">
                <Image
                  src="/images/gallery/g16.jpg"
                  alt="Marchers walking through Washington, D.C."
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </div>
              <div className="p-6 sm:p-8">
                <p className="inline-flex rounded-full bg-gold px-3 py-1 text-[11px] font-black tracking-[0.16em] text-black uppercase">
                  Best choice
                </p>
                <p className="mt-4 text-4xl font-black text-gold">DCA</p>
                <h4 className="mt-1 text-xl font-bold sm:text-2xl">
                  Ronald Reagan Washington National
                </h4>
                <p className="mt-2 text-sm text-white/70">About 4 miles from Foggy Bottom</p>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">
                  Closest door to our meeting point. Take the Blue or Yellow line toward downtown,
                  get off at Foggy Bottom–GWU, and walk a few minutes to Washington Cir.
                </p>
              </div>
            </article>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {dcAirports
                .filter((airport) => !airport.preferred)
                .map((airport) => (
                  <article
                    key={airport.code}
                    className="rounded-[1.5rem] border border-navy/10 bg-white p-5 sm:p-6"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="text-2xl font-black text-navy">{airport.code}</p>
                      <p className="text-sm text-muted">{airport.distance}</p>
                    </div>
                    <h4 className="mt-1 text-lg font-bold text-midnight">{airport.name}</h4>
                    <p className="mt-3 text-sm leading-relaxed text-ink-3">{airport.note}</p>
                  </article>
                ))}
            </div>
          </div>
        </div>

        <div id="visit-stay" className="scroll-mt-24 px-4 py-12 sm:px-5 md:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem]">
                  <Image
                    src="/images/dc-2.jpg"
                    alt="Worship and prayer at Jesus March DC"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 22vw, 45vw"
                  />
                </div>
                <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-[1.75rem]">
                  <Image
                    src="/images/dc-3.jpg"
                    alt="Friends together at Jesus March Washington DC"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 22vw, 45vw"
                  />
                </div>
              </div>
              <div>
                <p className="text-[11px] font-black tracking-[0.22em] text-navy uppercase">
                  Step 2 · Stay
                </p>
                <h3 className="mt-2 text-3xl font-black text-midnight sm:text-4xl">
                  Sleep near the circle
                </h3>
                <p className="mt-3 max-w-xl text-ink-3">
                  Foggy Bottom and the West End keep Saturday calm before the 2PM start. Georgetown
                  and Dupont Circle also work with a short Metro or rideshare. Book early — October
                  weekends fill up.
                </p>

                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <div>
                    <p className="font-bold text-midnight">Walk to the start</p>
                    <ul className="mt-4 space-y-4">
                      {dcStayNear.map((place) => (
                        <li key={place.name} className="border-l-2 border-gold pl-4">
                          <p className="font-semibold text-ink">{place.name}</p>
                          <p className="mt-1 text-sm text-muted">{place.detail}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-midnight">Also practical</p>
                    <ul className="mt-4 space-y-4">
                      {dcStayValue.map((place) => (
                        <li key={place.name} className="border-l-2 border-navy/20 pl-4">
                          <p className="font-semibold text-ink">{place.name}</p>
                          <p className="mt-1 text-sm text-muted">{place.detail}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="mt-6 rounded-2xl bg-mist px-4 py-3 text-sm text-ink-3">
                  Coming with a group? Note it on the form below — we will help connect rides and
                  rooms where we can. We do not hold a private hotel block right now.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="visit-arrive" className="scroll-mt-24 bg-midnight px-4 py-12 text-white sm:px-5 md:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <p className="text-[11px] font-black tracking-[0.22em] text-gold uppercase">
                  Step 3 · Arrive
                </p>
                <h3 className="mt-2 text-3xl font-black sm:text-4xl">
                  Get to Washington Cir
                </h3>
                <p className="mt-3 max-w-lg text-white/75">
                  Leave a buffer. Wear shoes you can march in. Pin the circle — not the monuments
                  across the Mall.
                </p>
                <div className="mt-8 space-y-5">
                  {dcTransit.map((item, i) => (
                    <div key={item.title} className="border-t border-white/15 pt-5">
                      <p className="text-sm font-black tracking-[0.18em] text-gold uppercase">
                        {String(i + 1).padStart(2, "0")} · {item.title}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-white/85 sm:text-base">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={links.dcMaps} className="w-full sm:w-auto">
                    Open Washington Cir on Maps
                  </ButtonLink>
                  <ButtonLink href="#join-dc" variant="light" className="w-full sm:w-auto">
                    Tell us you are coming
                  </ButtonLink>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem]">
                  <Image
                    src="/images/gallery/g17.jpg"
                    alt="Worship during Jesus March DC"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 22vw, 45vw"
                  />
                </div>
                <div className="relative mt-10 aspect-[4/5] overflow-hidden rounded-[1.75rem]">
                  <Image
                    src="/images/gallery/g22.jpg"
                    alt="Street worship at Jesus March Washington DC"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 22vw, 45vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="visit-faq" className="scroll-mt-24 px-4 py-12 sm:px-5 md:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <Kicker>Before you pack</Kicker>
                <h3 className="mt-3 text-3xl font-black text-midnight sm:text-4xl">
                  Quick answers
                </h3>
                <div className="relative mt-6 hidden aspect-[4/3] overflow-hidden rounded-[1.75rem] lg:block">
                  <Image
                    src="/images/gallery/g18.jpg"
                    alt="Jesus March Washington DC in the streets"
                    fill
                    className="object-cover"
                    sizes="30vw"
                  />
                </div>
              </div>
              <div className="divide-y divide-navy/10">
                {dcVisitFaqs.map((faq) => (
                  <div key={faq.q} className="py-5 first:pt-0 last:pb-0">
                    <p className="text-lg font-bold text-midnight">{faq.q}</p>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-3 sm:text-base">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-midnight px-4 py-12 text-white sm:px-5 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Kicker tone="dark">From the D.C. marches</Kicker>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl md:text-6xl">
            This is what it looks like
            <span className="block text-gold">when a nation lifts up Jesus.</span>
          </h2>
          <div className="mt-10 columns-2 gap-3 md:columns-3">
            {dcPhotos.map((src, i) => (
              <div key={src} className="mb-3 break-inside-avoid overflow-hidden rounded-2xl">
                <WatermarkedShot
                  src={src}
                  alt="Jesus March Washington DC"
                  stamp={stamps[i % stamps.length]}
                  className={i % 5 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"}
                  sizes="(min-width: 768px) 33vw, 50vw"
                  {...dcStamp}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="join-dc" className="scroll-mt-24 bg-navy px-4 py-12 text-white sm:px-5 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
          <div className="min-w-0">
            <Kicker tone="dark">How to join</Kicker>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">March with us, serve, or watch live</h2>
            <ol className="mt-8 space-y-5 text-white/90">
              <li>
                <strong className="text-gold">1. Be there.</strong> Meet at Washington Cir NW,
                Washington, DC 20037 on Saturday, October 17 at 2PM. Use{" "}
                <a href="#plan-visit" className="text-gold underline underline-offset-2">
                  Plan your visit
                </a>{" "}
                for airports, nearby stays, and Metro. Wear comfortable shoes and come ready to worship.
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
                YouTube, and Instagram — @ddbs.htx and @ddbs.global.
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
            <h3 className="text-2xl font-bold text-midnight">I’m coming to D.C.</h3>
            <p className="mt-2 mb-6 text-sm text-muted">
              We’ll follow up from Dear Daughter Bible Study Group.
            </p>
            <InquiryForm
              formName="Jesus March DC 2026"
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
                  options: dcJoinWays,
                  defaultValue: "I will march with you",
                },
                { name: "note", label: "Travel, carpool, or group notes" },
              ]}
            />
          </div>
        </div>
      </section>

      <section id="give-dc" className="scroll-mt-24 bg-mist px-4 py-12 sm:px-5 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Kicker>How to give</Kicker>
          <h2 className="mt-3 text-3xl font-bold text-midnight sm:text-4xl md:text-5xl">Help send the March</h2>
          <p className="mt-4 max-w-2xl text-ink-3">
            Your gift sponsors Jesus March Washington DC — flags, Bibles, outreach, and getting the
            team to the city. 100% goes to Dear Daughter Bible Study Group.
          </p>
          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2">
            <article className="rounded-3xl bg-gold p-5 text-black sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em]">Card · Apple Pay · Google Pay</p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">Give online with Zeffy</h3>
              <p className="mt-3 text-sm">No platform fees. Mention Jesus March DC if you can.</p>
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
                Send your gift by Zelle and note <strong>Jesus March DC</strong> in the memo.
              </p>
              <a
                href={links.zelleDcMailto}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white sm:w-auto"
              >
                Email {ZELLE_EMAIL}
              </a>
            </article>
          </div>
          <div className="mt-8 max-w-full overflow-hidden rounded-3xl border border-navy/10 bg-white sm:mt-10">
            <iframe
              title="Give to Jesus March Washington DC"
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

const visitNav = [
  { href: "#visit-fly", label: "1 · Fly" },
  { href: "#visit-stay", label: "2 · Stay" },
  { href: "#visit-arrive", label: "3 · Arrive" },
  { href: "#visit-faq", label: "FAQ" },
] as const;

const visitHeroPhotos = [
  { src: "/images/dc-1.jpg", alt: "Jesus March Washington DC crowd" },
  { src: "/images/gallery/g21.jpg", alt: "Flags at Jesus March DC" },
  { src: "/images/gallery/g23.jpg", alt: "Jesus Loves You banner in Washington DC" },
] as const;

const visitFacts = [
  { label: "Meet us", value: "Washington Cir NW, DC 20037" },
  { label: "Nearest Metro", value: "Foggy Bottom–GWU" },
  { label: "Easiest airport", value: "DCA · Reagan National" },
  { label: "Day & time", value: "Sat, Oct 17 · 2:00 PM" },
] as const;

const dcAirports = [
  {
    code: "DCA",
    name: "Ronald Reagan Washington National",
    distance: "About 4 miles from Foggy Bottom",
    preferred: true,
    note: "Closest door to our meeting point. Blue and Yellow Metro lines run from the airport — ride to Foggy Bottom–GWU and walk a few minutes to Washington Cir.",
  },
  {
    code: "IAD",
    name: "Washington Dulles International",
    distance: "About 26 miles west",
    preferred: false,
    note: "Good for wider flight choices and international arrivals. Silver Line Metro reaches Foggy Bottom; give yourself a little more than an hour door to door.",
  },
  {
    code: "BWI",
    name: "Baltimore/Washington International",
    distance: "About 32 miles northeast",
    preferred: false,
    note: "Often kind to the budget. Train or rideshare into D.C., then Metro to Foggy Bottom–GWU. Plan extra time on Saturday.",
  },
] as const;

const dcStayNear = [
  {
    name: "Foggy Bottom & West End",
    detail: "Best base. Many rooms are a 5–15 minute walk to Washington Cir NW.",
  },
  {
    name: "The Watergate Hotel",
    detail: "Along the river, a short walk from the circle and the Metro.",
  },
  {
    name: "Residence Inn Foggy Bottom",
    detail: "Suites help if you are bringing family or a small team.",
  },
] as const;

const dcStayValue = [
  {
    name: "Hotel Hive",
    detail: "Compact rooms near Foggy Bottom Metro — simple and close.",
  },
  {
    name: "State Plaza Hotel",
    detail: "Practical Foggy Bottom stay within walking distance of the start.",
  },
  {
    name: "Georgetown or Dupont Circle",
    detail: "Livelier evenings; short Metro or rideshare to Washington Cir before 2PM.",
  },
] as const;

const dcTransit = [
  {
    title: "Metro",
    body: "Ride Blue, Orange, or Silver to Foggy Bottom–GWU. Exit toward campus / Washington Circle — the start is a short walk. Leave a buffer so you are at the circle before 2PM.",
  },
  {
    title: "On foot",
    body: "If your hotel sits in Foggy Bottom or the West End, walk over. Bring shoes you can stand and march in. The circle is open air — check the forecast and dress for October.",
  },
  {
    title: "Rideshare",
    body: "Uber and Lyft drop near Washington Cir NW. Pin the circle, not the Lincoln Memorial or the Capitol. Expect slower traffic around the event; leave early.",
  },
] as const;

const dcVisitFaqs = [
  {
    q: "Is there a cost to march?",
    a: "No. Jesus March Washington DC with Dear Daughter Bible Study Group is free. We only ask you to tell us you are coming so we can pray for you and plan for the crowd.",
  },
  {
    q: "Can children come?",
    a: "Yes. Families are welcome. Keep little ones close in the crowd, bring water, and dress them for walking and weather.",
  },
  {
    q: "What should I bring?",
    a: "A willing heart, comfortable shoes, water, and weather layers. Flags and banners from past marches are welcome. Come ready to worship, pray, and lift the name of Jesus.",
  },
  {
    q: "How else can I prepare?",
    a: "Join Thursday Zoom prayer at 5:00 PM CST. Ask the Lord for D.C., for open hearts, and for safe travel. If you cannot stand with us in person, watch live and pray from where you are.",
  },
] as const;
