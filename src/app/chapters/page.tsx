import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { InquiryForm } from "@/components/InquiryForm";
import { Kicker } from "@/components/Kicker";
import { chapterKinds, organizer } from "@/lib/content";

export const metadata: Metadata = {
  title: "Start a Bible Study Chapter",
  description:
    "Plant a Dear Daughter Bible Study chapter in your state, city, or on a campus. Request a gathering and we will walk with you in the undiluted Word of God.",
};

const tracks = [
  {
    title: "City & state chapters",
    body: "Living in another state or a new city? Request a Dear Daughter Bible Study gathering. We will come teach the undiluted Word and walk with you as a local chapter takes root.",
  },
  {
    title: "Campus chapters",
    body: "Students, staff, or a church near campus can host the study at school. Tell us your college — we will follow up, pray with you, and help you gather.",
  },
];

const steps = [
  {
    n: "1",
    title: "Tell us where you are",
    body: "City, state, or campus. We need a name, a place, and a willing heart — not a polished ministry plan.",
  },
  {
    n: "2",
    title: "We follow up",
    body: "Dear Daughter Bible Study Group will reach out from Houston. We pray with you, hear the assignment, and talk through next steps.",
  },
  {
    n: "3",
    title: "Stay in the Word together",
    body: "Chapters use weekly materials and discussion guides. Class of David trains Glory-Carriers who can teach the undiluted Word.",
  },
  {
    n: "4",
    title: "Gather — we come, or we walk with you",
    body: "You can request that we come to your community. Campus chapters often start with a small, faithful group and grow from there.",
  },
  {
    n: "5",
    title: "Stay in the family",
    body: "Thursday Zoom prayer, Jesus March, Houston Prayer City, and the work in Tulsa, D.C., and Nigeria. A chapter is not a new denomination — it is this same study in a new place.",
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
            Plant the study in another state, another city, or on a campus. {organizer.credit} You
            can request a gathering in your community — and we will come.
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:max-w-md sm:flex-row">
            <ButtonLink href="#start-chapter" className="w-full sm:w-auto">
              Request a chapter
            </ButtonLink>
            <ButtonLink href="/#family" variant="light" className="w-full sm:w-auto">
              About the study
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-5 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Kicker>Two ways to plant</Kicker>
          <h2 className="mt-3 text-3xl font-bold text-midnight sm:text-4xl">States, cities, and campuses</h2>
          <p className="mt-4 max-w-2xl text-ink-3">
            {organizer.summary} The same Word. A new living room, church, or campus room.
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

      <section className="bg-mist px-4 py-12 sm:px-5 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Kicker>How a chapter begins</Kicker>
          <h2 className="mt-3 text-3xl font-bold text-midnight sm:text-4xl">This is the path</h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {steps.map((step) => (
              <li key={step.n} className="rounded-3xl bg-white p-5">
                <p className="text-sm font-black text-gold">{step.n}</p>
                <h3 className="mt-2 text-lg font-bold text-midnight">{step.title}</h3>
                <p className="mt-2 text-sm text-ink-3">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-navy px-4 py-12 text-white sm:px-5 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <Kicker tone="dark">Campus chapters</Kicker>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Bring the study to school</h2>
            <p className="mt-4 text-white/85">
              College is a door. A campus chapter is a Dear Daughter Bible Study that meets where
              students already live, learn, and decide who they will follow.
            </p>
            <ul className="mt-6 space-y-3 text-white/85">
              <li>Open to men and women — students, staff, and friends nearby.</li>
              <li>Start small. A faithful handful in the Word is a chapter.</li>
              <li>If your school has a student-organization process, note that on the form and we will help you think it through.</li>
              <li>Stay connected to Thursday prayer and the wider family, so you are not carrying this alone.</li>
            </ul>
          </div>
          <div>
            <Kicker tone="dark">City &amp; state chapters</Kicker>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">The Word in your city</h2>
            <p className="mt-4 text-white/85">
              {organizer.body[0]} We meet with weekly materials and discussion guides, Class of David
              training, and daily prayer.
            </p>
            <p className="mt-4 text-white/85">{organizer.body[2]}</p>
          </div>
        </div>
      </section>

      <section id="start-chapter" className="scroll-mt-24 bg-white px-4 py-12 sm:px-5 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.05fr]">
          <div className="min-w-0">
            <Kicker>Send the request</Kicker>
            <h2 className="mt-3 text-3xl font-bold text-midnight sm:text-4xl">We’ll walk with you</h2>
            <p className="mt-4 text-ink-3">
              Tell us whether this is a city, a state, or a campus. We follow up from Dear Daughter
              Bible Study Group — the same family that organizes Jesus March.
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
                { name: "note", label: "When, where, and who is gathering with you?" },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
