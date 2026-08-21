import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Kicker } from "@/components/Kicker";

export const metadata: Metadata = { title: "Our Vision" };

export default function VisionPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <Kicker>Dear Daughter Bible Study Group</Kicker>
      <h1 className="mt-3 font-display text-5xl text-black">Our vision</h1>
      <ol className="mt-10 space-y-4 text-lg text-ink-3">
        <li>1. Teach the undiluted Word of God to all nations.</li>
        <li>2. Reach one billion souls for Christ by 2030.</li>
      </ol>
      <h2 className="mt-14 font-display text-3xl text-black">To do these</h2>
      <ol className="mt-6 space-y-4 text-muted">
        <li>1. We will give ourselves to the studying of the Word of God.</li>
        <li>2. We will train others in the undiluted Word of truth.</li>
        <li>3. We will go to all nations teaching them in the infallible Word of God.</li>
        <li>
          4. We will use all godly means necessary to preach Jesus including Jesus March, rallies,
          media, music, and as we are led by the Holy Spirit.
        </li>
        <li>5. We will make disciples of Christ of all nations.</li>
      </ol>
      <div className="mt-12">
        <ButtonLink href="/donate">We need your support today</ButtonLink>
      </div>
    </section>
  );
}
