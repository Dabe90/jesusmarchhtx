import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "DD Cinemas" };

export default function CinemasPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center">
      <h1 className="font-display text-5xl text-black">DD Cinemas</h1>
      <p className="mt-6 text-ink-3">
        Media, stories, and films from Dear Daughter Bible Study. More to come.
      </p>
      <div className="relative mx-auto mt-10 aspect-video max-w-xl overflow-hidden rounded-3xl">
        <Image src="/images/card-podcast.jpg" alt="" fill className="object-cover" />
      </div>
    </section>
  );
}
