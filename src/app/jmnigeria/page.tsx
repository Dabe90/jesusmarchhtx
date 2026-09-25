import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Countdown } from "@/components/Countdown";
import { InquiryForm } from "@/components/InquiryForm";
import { Kicker } from "@/components/Kicker";
import { nigeriaCities } from "@/lib/content";
import { links } from "@/lib/links";

export const metadata: Metadata = {
  title: "Jesus March Nigeria",
  description:
    "Jesus March Nigeria lifts the name of Jesus across Lagos, Ibadan, Benin, Abuja, and Port Harcourt. A nationwide January march.",
  alternates: { canonical: "/jmnigeria" },
};

export default function NigeriaPage() {
  return (
    <>
      <section className="bg-mist">
        <div className="mx-auto max-w-4xl px-5 py-24 text-left">
          <Kicker>#ReviveOurStreets</Kicker>
          <h1 className="mt-4 text-3xl font-bold text-black sm:text-5xl md:text-6xl">Jesus March Nigeria</h1>
          <p className="mt-6 text-lg text-ink-3">
            This January 2027, thousands will walk the streets of Nigeria to proclaim the name of Jesus.
            Join the movement.
          </p>
          <p className="mt-4 font-semibold text-navy">#Revive Our Streets · last Saturday of January 2027</p>
          <Countdown target="2027-01-30T00:00:00" />
          <div className="mt-8">
            <ButtonLink href={links.prayerCity}>Explore</ButtonLink>
          </div>
          <p className="mt-8 text-xl italic text-ink-3">
            Mark 16:15 — “Go ye into the world and preach the gospel…”
          </p>
          <p className="mt-4 text-sm text-muted">
            {nigeriaCities.join(", ")}, and more
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16">
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-navy sm:text-sm sm:tracking-[0.2em]">
          Worship rally · Prayer walk · Street evangelism · Live music
        </p>
        <h2 className="mt-8 text-center text-3xl font-bold text-black sm:text-4xl">Mission statement</h2>
        <p className="mx-auto mt-6 max-w-3xl text-center text-ink-3">
          The Jesus March Nigeria is a prophetic gathering of believers across Nigeria, united to
          exalt the name of Jesus in public worship, prayer, and declaration. We march to awaken
          hearts, stir revival, and proclaim that Jesus is Lord over our land.
        </p>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {nigeriaCities.map((city) => (
            <li key={city} className="rounded-2xl border border-black/10 bg-cream-2 px-5 py-4 text-center font-semibold text-black">
              {city}
            </li>
          ))}
          <li className="rounded-2xl bg-gold px-5 py-4 text-center font-semibold text-black">And more</li>
        </ul>
        <h2 className="mt-16 text-3xl font-bold text-black">About the March</h2>
        <p className="mt-4 text-muted">
          Since its inception, the Jesus March has become a yearly movement of faith, unity, and
          bold proclamation. Held more than three times across Nigeria, it draws believers from
          every tribe and tongue to walk together in worship and witness.
        </p>
        <blockquote className="mt-10 border-l-2 border-gold pl-5 text-ink-3">
          “I joined the Jesus March in January 2025 pregnant. I trekked a distance I’ve never trekked
          before in my life. We marched from Iyana-Ipaja to Egbeda. When my EDD was close and the
          devil wanted to raise his ugly head, I reminded God that this baby was part of Jesus March
          2025. To the glory of God she will witness and partake in Jesus March 2026 — and to the
          glory of God she is here, hale and hearty, preparing for Jesus March 2026 with me.”
          <footer className="mt-3 text-sm font-semibold text-navy">Cecilia K.A., Lagos</footer>
        </blockquote>
      </section>

      <section className="bg-navy">
        <div className="mx-auto grid max-w-5xl gap-10 px-5 py-16 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Register now</h2>
            <p className="mt-4 text-white/80">
              Join the nationwide movement. Tell us your city and we’ll connect you with the March
              nearest you.
            </p>
            <div className="mt-8">
              <ButtonLink href="/donate">Support the March</ButtonLink>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-6">
            <InquiryForm
              formName="Jesus March Nigeria registration"
              fields={[
                { name: "firstName", label: "First name", required: true },
                { name: "lastName", label: "Last name", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "phone", label: "Phone", type: "tel" },
                { name: "city", label: "City", placeholder: "Lagos, Ibadan, Abuja…" },
              ]}
              submitLabel="Register"
            />
          </div>
        </div>
      </section>
    </>
  );
}
