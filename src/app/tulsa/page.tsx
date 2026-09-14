import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { InquiryForm } from "@/components/InquiryForm";
import { Kicker } from "@/components/Kicker";
import { FacebookIcon, InstagramIcon, YouTubeIcon } from "@/components/SocialLinks";
import { marches, tulsaJoinWays, tulsaPhotos } from "@/lib/content";
import { links, ZELLE_EMAIL } from "@/lib/links";

const tulsa = marches.find((march) => march.slug === "tulsa");

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
        <Image
          src="/images/gallery/g06.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/70 via-navy/80 to-midnight" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-20">
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-gold/40 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
            <Image
              src="/images/flyer-tulsa.jpg"
              alt="Jesus March Tulsa flyer — Saturday, September 26, 2026 at 12PM, Tulsa City Hall"
              width={1080}
              height={1350}
              className="h-auto w-full"
              priority
            />
          </div>
          <div>
            <Kicker tone="dark">Dear Daughter Bible Study Group</Kicker>
            <h1 className="mt-4 text-5xl font-bold leading-tight md:text-7xl">Jesus March Tulsa</h1>
            <p className="mt-5 max-w-xl text-lg text-white/90">
              Declaring the gospel, lifting up the name of Jesus, and winning souls with love.
              Come ready to worship, pray, and share the Good News.
            </p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              <Fact label="When" value="Saturday, September 26, 2026" />
              <Fact label="Time" value="12:00 PM" />
              <Fact label="Start" value="Tulsa City Hall" />
              <Fact label="City" value="Tulsa, Oklahoma" />
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#join-tulsa">Join the March</ButtonLink>
              <ButtonLink href="#give-tulsa" variant="light">
                Give
              </ButtonLink>
              <ButtonLink href={links.tulsaMaps} variant="light">
                Get directions
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <Kicker>What this is</Kicker>
            <h2 className="mt-3 text-4xl font-bold text-midnight md:text-5xl">Light in the streets of Tulsa</h2>
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
            {tulsaPhotos.slice(0, 4).map((src) => (
              <div key={src} className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                <Image src={src} alt="Jesus March Tulsa" fill className="object-cover" sizes="(min-width: 1024px) 25vw, 50vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist px-5 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Kicker>From the last Tulsa March</Kicker>
          <h2 className="mt-3 text-4xl font-bold text-midnight">See what God is doing</h2>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
            {tulsaPhotos.map((src) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src={src} alt="Jesus March Tulsa gathering" fill className="object-cover" sizes="(min-width: 768px) 33vw, 50vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="join-tulsa" className="scroll-mt-24 bg-navy px-5 py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <Kicker tone="dark">How to join</Kicker>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">March with us, serve, or watch live</h2>
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
                <strong className="text-gold">3. Can’t come in person?</strong> Watch live on Facebook,
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
          <div className="rounded-3xl bg-white p-6 text-ink md:p-8">
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

      <section id="give-tulsa" className="scroll-mt-24 bg-mist px-5 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Kicker>How to give</Kicker>
          <h2 className="mt-3 text-4xl font-bold text-midnight md:text-5xl">Help send the March</h2>
          <p className="mt-4 max-w-2xl text-ink-3">
            Your gift sponsors Jesus March Tulsa — flags, Bibles, outreach, and getting the team to
            the city. 100% goes to Dear Daughter Bible Study Group.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl bg-gold p-8 text-black">
              <p className="text-xs font-semibold uppercase tracking-[0.2em]">Card · Apple Pay · Google Pay</p>
              <h3 className="mt-3 text-3xl font-bold">Give online with Zeffy</h3>
              <p className="mt-3 text-sm">No platform fees. Mention Jesus March Tulsa if you can.</p>
              <a
                href={links.zeffy}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full bg-black px-5 py-3 text-sm font-semibold text-white"
              >
                Open the giving form
              </a>
            </article>
            <article className="rounded-3xl border border-navy/10 bg-white p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy">Zelle</p>
              <h3 className="mt-3 text-3xl font-bold text-midnight">Zelle {ZELLE_EMAIL}</h3>
              <p className="mt-3 text-sm text-ink-3">
                Send your gift by Zelle and note <strong>Jesus March Tulsa</strong> in the memo.
              </p>
              <a
                href={links.zelleTulsaMailto}
                className="mt-6 inline-flex rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white"
              >
                Email {ZELLE_EMAIL}
              </a>
            </article>
          </div>
          <div className="mt-10 overflow-hidden rounded-3xl border border-navy/10 bg-white">
            <iframe
              title="Give to Jesus March Tulsa"
              src={links.zeffyEmbed}
              className="h-[720px] w-full"
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
    <div className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3">
      <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{label}</dt>
      <dd className="mt-1 text-lg font-semibold">{value}</dd>
    </div>
  );
}
