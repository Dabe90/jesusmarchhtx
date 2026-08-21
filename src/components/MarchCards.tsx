import Image from "next/image";
import Link from "next/link";
import { marches } from "@/lib/content";

export function MarchCards() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:items-stretch">
      {marches.map((march) => (
        <article
          key={march.slug}
          className="flex h-full flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white"
        >
          <div className="relative aspect-[4/5] shrink-0">
            <Image src={march.images[0]} alt={march.city} fill className="object-cover" />
          </div>
          <div className="flex flex-1 flex-col p-5">
            <h3 className="text-xl font-bold text-midnight">{march.city}</h3>
            <p className="mt-2 min-h-16 text-sm text-ink-3">{march.subtitle}</p>
            <Link
              href={`/marches/${march.slug}`}
              className="mt-auto inline-flex w-fit rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-gold-2"
            >
              Learn more
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
