import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Kicker } from "@/components/Kicker";

const doors = [
  {
    href: "/chapters#city",
    label: "City & state",
    body: "A weekly gathering in a home, a church, or a community room — still connected to Houston.",
    image: "/images/houston-1.jpg",
  },
  {
    href: "/chapters#campus",
    label: "Campus",
    body: "Students and staff carrying the Word where people already live and learn.",
    image: "/images/houston-3.jpg",
  },
] as const;

export function ChapterInvite() {
  return (
    <section id="chapters" className="scroll-mt-24 overflow-hidden bg-paper px-4 py-16 sm:px-5 md:py-24">
      <div className="mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Kicker tone="warm">Plant the Word</Kicker>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-espresso sm:text-4xl md:text-5xl">
            Start a chapter
            <span className="mt-1 block font-normal italic text-clay">in your city or on campus</span>
          </h2>
          <p className="mt-5 max-w-md text-ink-3">
            Dear Daughter Bible Study Group will walk with you. Same undiluted Word. A new living room,
            church, or campus room.
          </p>
          <div className="mt-8">
            <ButtonLink href="/chapters">See how chapters are planted</ButtonLink>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {doors.map((door) => (
            <Link
              key={door.href}
              href={door.href}
              className="group relative isolate overflow-hidden rounded-[1.75rem] text-white"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={door.image}
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 640px) 280px, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-clay/40 to-espresso/10" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[10px] font-semibold tracking-[0.22em] text-gold uppercase">Chapter</p>
                <p className="mt-1 text-2xl font-bold">{door.label}</p>
                <p className="mt-2 text-sm text-white/80">{door.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
