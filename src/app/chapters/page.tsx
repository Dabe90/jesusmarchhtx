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
    title: "City & state chapters",
    body: "Like a satellite of the Houston study: a trained gathering in a new city that stays connected to Dear Daughter Bible Study Group each week. Meet in a home, a church (as guests), or a community room.",
  },
  {
    title: "Campus chapters",
    body: "Students, staff, or a nearby church host the study where people already live and learn. Pray over the campus, find open hearts, gather a core team, and launch a weekly study.",
  },
];

const phases = [
  {
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
    name: "Build",
    kicker: "Don’t plant alone",
    items: [
      {
        title: "Name a core team",
        body: "Invite two or three faithful people before you launch publicly. Share the vision. A chapter needs more than one person carrying it.",
      },
      {
        title: "Train in the Word",
        body: "We send weekly materials and discussion guides. Class of David trains Glory-Carriers who can teach the undiluted Word. Your gathering stays connected to the established study, like a satellite class.",
      },
    ],
  },
  {
    name: "Launch & grow",
    kicker: "Then go public",
    items: [
      {
        title: "Host the first gathering",
        body: "Set a regular place and time. Invite openly. Keep it simple: Scripture, discussion, prayer, and a clear gospel. If your campus requires a student organization, we will help you think that through.",
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
      <section className="relative overflow-hidden bg-midnight text-white">
        <Image src="/images/houston-2.jpg" alt="" fill priority className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/60 via-navy/75 to-midnight" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 text-center sm:px-5 md:py-24 md:text-left">
          <Kicker tone="dark">Dear Daughter Bible Study Group</Kicker>
          <h1 className="mt-4 text-3xl font-black leading-[1.05] sm:text-5xl md:text-6xl">
            Start a new
            <span className="block text-gold">Bible study chapter</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/90 sm:text-lg md:mx-0">
            Plant the study in another state, another city, or on a campus. Pray, gather a core team,
            train in the Word, launch, and stay connected. {organizer.credit}
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:max-w-md sm:flex-row">
            <ButtonLink href="#start-chapter" className="w-full sm:w-auto">
              Request a chapter
            </ButtonLink>
            <ButtonLink href="#how" variant="light" className="w-full sm:w-auto">
              See the path
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-5 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Kicker>Two kinds of chapters</Kicker>
          <h2 className="mt-3 text-3xl font-bold text-midnight sm:text-4xl">Cities, states, and campuses</h2>
          <p className="mt-4 max-w-2xl text-ink-3">
            {organizer.summary} The same undiluted Word. A new living room, church, or campus room.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {tracks.map((track) => (
              <article key={track.title} className="rounded-3xl border border-navy/10 bg-mist p-5 sm:p-8">
                <h3 className="text-2xl font-bold text-midnight">{track.title}</h3>
                <p className="mt-3 text-ink-3">{track.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="scroll-mt-24 bg-mist px-4 py-12 sm:px-5 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Kicker>How chapters are planted</Kicker>
          <h2 className="mt-3 text-3xl font-bold text-midnight sm:text-4xl">Prepare. Build. Launch.</h2>
          <p className="mt-4 max-w-2xl text-ink-3">
            Healthy plants start in prayer, grow with a core team, train before they go public, and
            stay tied to the sending family. That is how we plant Dear Daughter chapters.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {phases.map((phase) => (
              <article key={phase.name} className="rounded-3xl bg-white p-5 sm:p-8">
                <p className="text-[10px] font-black tracking-[0.18em] text-gold uppercase">{phase.kicker}</p>
                <h3 className="mt-2 text-2xl font-bold text-midnight">{phase.name}</h3>
                <ol className="mt-6 space-y-5">
                  {phase.items.map((item, i) => (
                    <li key={item.title}>
                      <p className="text-sm font-black text-navy">
                        {i + 1}. {item.title}
                      </p>
                      <p className="mt-1 text-sm text-ink-3">{item.body}</p>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy px-4 py-12 text-white sm:px-5 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <Kicker tone="dark">Campus chapters</Kicker>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Bring the study to school</h2>
            <ul className="mt-6 space-y-3 text-white/85">
              <li>Pray on campus before you advertise. Ask the Lord for open, networked students.</li>
              <li>Build a small leadership team. Don’t launch as a one-person club.</li>
              <li>Keep a weekly rhythm: Word, discussion, prayer — then send people back to their friends.</li>
              <li>If your school requires a recognized student organization, say so on the form. We will help you walk that.</li>
              <li>Stay on Thursday Zoom prayer so Houston is covering you.</li>
            </ul>
          </div>
          <div>
            <Kicker tone="dark">City &amp; state chapters</Kicker>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">The Word in your city</h2>
            <ul className="mt-6 space-y-3 text-white/85">
              <li>{organizer.body[0]}</li>
              <li>Start as a satellite gathering connected to the Houston study — weekly materials, discussion guides, and a trained leader.</li>
              <li>Churches can host without the study becoming a church program. Homes and community rooms work too.</li>
              <li>As the group grows, form a prayer covering and raise local leadership through Class of David.</li>
              <li>You can still request that we come in person to teach and help you launch.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="start-chapter" className="scroll-mt-24 bg-white px-4 py-12 sm:px-5 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.05fr]">
          <div className="min-w-0">
            <Kicker>Send the request</Kicker>
            <h2 className="mt-3 text-3xl font-bold text-midnight sm:text-4xl">We’ll walk with you</h2>
            <p className="mt-4 text-ink-3">
              The first step every planting ministry uses is the same: tell someone. We follow up,
              coach the next steps, and stay with you through launch.
            </p>
            <p className="mt-4 text-sm text-muted">
              Our vision is to teach the undiluted Word of God to all nations and to make disciples
              of Christ. New chapters are one way that happens.
            </p>
          </div>
          <div className="min-w-0 overflow-hidden rounded-3xl border border-navy/10 bg-mist p-4 sm:p-6 md:p-8">
            <h3 className="text-2xl font-bold text-midnight">I want to start a chapter</h3>
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
