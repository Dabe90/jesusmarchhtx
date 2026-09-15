import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { InquiryForm } from "@/components/InquiryForm";
import { Kicker } from "@/components/Kicker";
import { chapterKinds, organizer } from "@/lib/content";

export const metadata: Metadata = {
  title: "Start a Bible Study Chapter",
  description:
    "Plant a Dear Daughter Bible Study chapter in your city, state, or on a campus. Pray, form a core team, train in the Word, launch, and stay connected to the family.",
};

const tracks = [
  {
    id: "city",
    title: "City & state",
    kicker: "Homes · churches · community rooms",
    body: "Like a satellite of the Houston study: a trained gathering in a new city that stays connected to Dear Daughter Bible Study Group each week.",
    image: "/images/houston-1.jpg",
    object: "object-[center_78%]",
  },
  {
    id: "campus",
    title: "Campus",
    kicker: "Students · staff · nearby churches",
    body: "Host the study where people already live and learn. Pray over the campus, find open hearts, gather a core team, and launch a weekly gathering.",
    image: "/images/houston-3.jpg",
    object: "object-[center_45%]",
  },
];

const phases = [
  {
    num: "01",
    name: "Prepare",
    kicker: "Pray first",
    items: [
      {
        title: "Pray over the place",
        body: "Walk the campus or the neighborhood. Ask the Lord who is already hungry for the Word — people of peace who will help you gather.",
      },
      {
        title: "Send the request",
        body: "Fill out the form. Dear Daughter Bible Study Group follows up from Houston, prays with you, and walks the planting with you. You are not doing this alone.",
      },
    ],
  },
  {
    num: "02",
    name: "Build",
    kicker: "Don’t plant alone",
    items: [
      {
        title: "Name a core team",
        body: "Invite two or three faithful people before you launch publicly. Share the vision. A chapter needs more than one person carrying it.",
      },
      {
        title: "Train in the Word",
        body: "We send weekly materials and discussion guides. Class of David trains Glory-Carriers who can teach the undiluted Word. Your gathering stays connected, like a satellite class.",
      },
    ],
  },
  {
    num: "03",
    name: "Launch",
    kicker: "Then go public",
    items: [
      {
        title: "Host the first gathering",
        body: "Set a regular place and time. Keep it simple: Scripture, discussion, prayer, and a clear gospel. If your campus requires a student organization, we will help you think that through.",
      },
      {
        title: "Stay in the family",
        body: "Weekly Word, Thursday Zoom prayer, Jesus March, and the work in Houston, Tulsa, D.C., and Nigeria. Multiply by making disciples — not by becoming a new denomination.",
      },
    ],
  },
];

export default function ChaptersPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-espresso text-white">
        <Image src="/images/houston-2.jpg" alt="" fill priority className="object-cover object-[center_35%] opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-br from-espresso/75 via-clay/55 to-espresso/88" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-10 hidden h-72 w-72 rounded-full bg-gold/25 blur-3xl lg:block"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-16 bottom-0 hidden h-64 w-64 rounded-full bg-olive/25 blur-3xl lg:block"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-5 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="min-w-0 text-center lg:text-left">
            <p className="mx-auto max-w-full rounded-full border border-gold/40 bg-gold/10 px-3 py-1.5 text-center text-[10px] font-semibold leading-snug tracking-[0.14em] text-gold uppercase sm:px-4 sm:tracking-[0.18em] lg:mx-0 lg:inline-block">
              Dear Daughter Bible Study Group
            </p>
            <h1 className="mx-auto mt-6 max-w-[13ch] text-[2rem] font-bold leading-[1.08] tracking-tight sm:max-w-none sm:text-5xl md:text-7xl lg:mx-0">
              Plant the Word
              <span className="mt-2 block font-normal italic text-gold">
                where you
                <span className="block">already live</span>
              </span>
            </h1>
            <p className="mx-auto mt-6 w-full max-w-xl text-base leading-relaxed text-white/85 sm:text-lg lg:mx-0">
              A new chapter is a living room, a church, or a campus room — still the same undiluted
              Scripture. Pray, gather a core team, train, launch, and stay connected. {organizer.credit}
            </p>
            <p className="mt-5 text-[10px] font-semibold tracking-[0.18em] text-gold uppercase">
              Houston · Tulsa · D.C. · nations
            </p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:max-w-md sm:flex-row lg:max-w-none">
              <ButtonLink href="#start-chapter" className="w-full sm:w-auto">
                Request a chapter
              </ButtonLink>
              <ButtonLink href="#how" variant="light" className="w-full sm:w-auto">
                See the path
              </ButtonLink>
            </div>
          </div>

          <div className="relative mx-auto hidden h-[28rem] w-full max-w-md lg:block">
            <div className="absolute top-0 right-0 h-[22rem] w-[17rem] overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
              <Image src="/images/houston-2.jpg" alt="Marchers lifting a Jesus Saves sign" fill className="object-cover" priority />
            </div>
            <div className="absolute bottom-0 left-0 h-48 w-44 overflow-hidden rounded-[1.5rem] border-4 border-espresso shadow-[0_16px_40px_rgba(0,0,0,0.4)]">
              <Image src="/images/houston-3.jpg" alt="The team gathered in prayer" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-clay/20 bg-clay px-4 py-6 text-center sm:px-5">
        <p className="mx-auto max-w-md px-2 text-sm leading-relaxed text-white/90 sm:max-w-2xl sm:text-base">
          <span className="font-semibold text-white">Colossians 3:16</span>
          <span className="mx-3 hidden text-white/50 sm:inline">—</span>
          <span className="mt-1 block italic sm:mt-0 sm:inline">Let the message of Christ dwell among you.</span>
        </p>
      </section>

      <section className="bg-paper px-4 py-16 sm:px-5 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl min-w-0">
            <Kicker tone="warm">Two doors</Kicker>
            <h2 className="mt-3 text-[1.75rem] font-bold leading-tight tracking-tight text-espresso md:text-5xl">
              Cities, states,{" "}
              <span className="block md:inline">and campuses</span>
            </h2>
            <p className="mt-4 text-ink-3">
              {organizer.summary} Choose the kind of chapter that fits the people you already know.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {tracks.map((track) => (
              <article
                key={track.id}
                id={track.id}
                className="scroll-mt-28 overflow-hidden rounded-[2rem] bg-espresso text-white shadow-[0_20px_50px_rgba(184,92,56,0.14)]"
              >
                <div className="relative aspect-[16/10] sm:aspect-[16/9]">
                  <Image
                    src={track.image}
                    alt=""
                    fill
                    className={`object-cover ${track.object}`}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso from-30% via-clay/20 to-black/10" />
                  <p className="absolute bottom-4 left-5 right-5 text-[10px] font-semibold tracking-[0.18em] text-gold uppercase">
                    {track.kicker}
                  </p>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-3xl font-bold">{track.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/80">{track.body}</p>
                  <div className="mt-6">
                    <ButtonLink href="#start-chapter">Request this chapter</ButtonLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="scroll-mt-24 bg-white px-4 py-16 sm:px-5 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <Kicker tone="warm">How chapters are planted</Kicker>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-espresso sm:text-5xl">
              Prepare. Build. Launch.
            </h2>
            <p className="mt-4 text-ink-3">
              Healthy plants start in prayer, grow with a core team, train before they go public, and
              stay tied to the sending family.
            </p>
          </div>

          <ol className="mt-14 space-y-0">
            {phases.map((phase, index) => (
              <li
                key={phase.name}
                className={`grid gap-6 border-clay/20 py-10 md:grid-cols-[8rem_1fr] md:gap-12 ${
                  index === 0 ? "border-t" : ""
                } border-b`}
              >
                <p className="font-display text-5xl font-bold leading-none text-clay md:text-6xl">{phase.num}</p>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.22em] text-olive uppercase">{phase.kicker}</p>
                  <h3 className="mt-1 text-3xl font-bold text-espresso">{phase.name}</h3>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    {phase.items.map((item) => (
                      <div key={item.title}>
                        <p className="font-semibold text-olive">{item.title}</p>
                        <p className="mt-2 text-sm leading-relaxed text-ink-3">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-paper px-4 py-16 sm:px-5 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <article id="campus-detail" className="rounded-[2rem] bg-white p-7 shadow-[0_16px_40px_rgba(44,33,28,0.06)] sm:p-10">
            <Kicker tone="warm">Campus chapters</Kicker>
            <h2 className="mt-3 text-3xl font-bold text-espresso">Bring the study to school</h2>
            <ul className="mt-6 space-y-4 text-ink-3">
              <li className="border-l-2 border-gold pl-4">Pray on campus before you advertise. Ask the Lord for open, networked students.</li>
              <li className="border-l-2 border-gold pl-4">Build a small leadership team. Don’t launch as a one-person club.</li>
              <li className="border-l-2 border-gold pl-4">Keep a weekly rhythm: Word, discussion, prayer — then send people back to their friends.</li>
              <li className="border-l-2 border-gold pl-4">If your school requires a recognized student organization, say so on the form. We will help you walk that.</li>
              <li className="border-l-2 border-gold pl-4">Stay on Thursday Zoom prayer so Houston is covering you.</li>
            </ul>
          </article>
          <article className="rounded-[2rem] bg-clay p-7 text-white sm:p-10">
            <Kicker tone="dark">City &amp; state chapters</Kicker>
            <h2 className="mt-3 text-3xl font-bold">The Word in your city</h2>
            <ul className="mt-6 space-y-4 text-white/85">
              <li>{organizer.body[0]}</li>
              <li>Start as a satellite gathering connected to the Houston study — weekly materials, discussion guides, and a trained leader.</li>
              <li>Churches can host without the study becoming a church program. Homes and community rooms work too.</li>
              <li>As the group grows, form a prayer covering and raise local leadership through Class of David.</li>
              <li>You can still request that we come in person to teach and help you launch.</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="start-chapter" className="scroll-mt-24 bg-espresso px-4 py-16 text-white sm:px-5 md:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold tracking-[0.22em] text-gold uppercase">Send the request</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">We’ll walk with you</h2>
            <p className="mt-5 max-w-md text-white/80">
              The first step every planting ministry uses is the same: tell someone. We follow up,
              coach the next steps, and stay with you through launch.
            </p>
            <p className="mt-5 max-w-md text-sm text-white/60">
              Our vision is to teach the undiluted Word of God to all nations and to make disciples
              of Christ. New chapters are one way that happens.
            </p>
          </div>
          <div className="min-w-0 overflow-hidden rounded-[2rem] bg-white p-5 text-ink sm:p-8">
            <h3 className="text-2xl font-bold text-espresso">I want to start a chapter</h3>
            <p className="mt-2 mb-6 text-sm text-muted">We’ll reply from Dear Daughter Bible Study Group.</p>
            <InquiryForm
              formName="New chapter request"
              submitLabel="Send my chapter request"
              fields={[
                { name: "firstName", label: "First name", required: true },
                { name: "lastName", label: "Last name", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "phone", label: "Phone", type: "tel", required: true },
                {
                  name: "kind",
                  label: "What kind of chapter?",
                  required: true,
                  options: chapterKinds,
                  defaultValue: "City or state chapter",
                },
                { name: "city", label: "City", required: true },
                { name: "state", label: "State", required: true },
                { name: "campus", label: "Campus / school (if this is a campus chapter)" },
                { name: "team", label: "Who else is on your core team?" },
                { name: "note", label: "Place, day/time, and anything we should pray into" },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
