import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { GalleryGrid } from "@/components/GalleryGrid";
import { shirtArt, signs, vendors } from "@/lib/content";

export const metadata: Metadata = { title: "Gallery" };

const houston = Array.from({ length: 12 }, (_, i) => `/images/gallery/g${String(i + 1).padStart(2, "0")}.jpg`);
const tulsa = Array.from({ length: 8 }, (_, i) => `/images/gallery/g${String(i + 13).padStart(2, "0")}.jpg`);
const dc = Array.from({ length: 8 }, (_, i) => `/images/gallery/g${String(i + 21).padStart(2, "0")}.jpg`);

export default function GalleryPage() {
  return (
    <>
      <section className="border-b border-black/10 bg-black px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Sights and sounds</p>
          <h1 className="mt-3 text-5xl font-bold text-white">Gallery</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Experience our joy, worship, and God through pictures from Houston, Tulsa, and Washington, D.C.
            Press any photo to zoom.
          </p>
        </div>
      </section>
      <GalleryGrid title="Houston" images={houston} />
      <GalleryGrid title="Tulsa" images={tulsa} />
      <GalleryGrid title="D.C." images={dc} />

      <section className="bg-cream text-ink">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-4xl font-bold">Downloadables</h2>
          <p className="mt-3 text-ink/70">
            Please download the file to print your own shirts or use as signs.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
            {shirtArt.map((item) => (
              <a
                key={item.title + item.note}
                href={item.src}
                download
                className="overflow-hidden rounded-2xl border border-ink/10 bg-white"
              >
                <div className="relative aspect-square">
                  <Image src={item.src} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-ink/60">{item.note}</p>
                </div>
              </a>
            ))}
          </div>

          <h3 className="mt-14 text-3xl font-bold">Signs</h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {signs.map((sign, i) => (
              <div key={sign} className="rounded-2xl bg-ink px-5 py-8 text-center text-cream">
                <p className="text-2xl font-bold">{sign}</p>
                <a
                  href={`/images/gallery/g${String(31 + (i % 9)).padStart(2, "0")}.jpg`}
                  download
                  className="mt-3 inline-block text-sm text-gold-2"
                >
                  Download
                </a>
              </div>
            ))}
          </div>

          <h3 className="mt-14 text-3xl font-bold">T-shirt vendors</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {vendors.map((v) => (
              <div key={v.name} className="rounded-2xl border border-ink/10 bg-white p-5">
                <p className="font-medium">{v.name}</p>
                <a href={`tel:${v.phone.replace(/-/g, "")}`} className="text-sm text-ink/70">
                  {v.phone}
                </a>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href="/donate">Giving is sharing</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
