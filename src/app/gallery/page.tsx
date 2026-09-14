import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Kicker } from "@/components/Kicker";
import { PlayableVideo } from "@/components/PlayableVideo";
import { SectionFrame } from "@/components/SectionFrame";
import { shirtArt, signs, vendors } from "@/lib/content";

export const metadata: Metadata = { title: "Gallery" };

/** Original Wix /gallery Pro Galleries, in page order. */
const houston = [
  "/images/gallery/g01.jpg",
  "/images/gallery/g02.jpg",
  "/images/gallery/g03.jpg",
  "/images/gallery/g04.jpg",
  "/images/gallery/g05.jpg",
];
const tulsa = [
  "/images/gallery/g06.jpg",
  "/images/gallery/g07.jpg",
  "/images/gallery/g08.jpg",
  "/images/gallery/g09.jpg",
  "/images/gallery/g10.jpg",
  "/images/gallery/g11.jpg",
  "/images/gallery/g12.jpg",
  "/images/gallery/g13.jpg",
  "/images/gallery/g14.jpg",
  "/images/gallery/g42.jpg",
  "/images/gallery/g43.jpg",
  "/images/gallery/g44.jpg",
];
const dc = [
  "/images/gallery/g15.jpg",
  "/images/gallery/g16.jpg",
  "/images/gallery/g17.jpg",
  "/images/gallery/g18.jpg",
  "/images/gallery/g19.jpg",
  "/images/gallery/g20.jpg",
  "/images/gallery/g21.jpg",
  "/images/gallery/g22.jpg",
  "/images/gallery/g23.jpg",
];

export default function GalleryPage() {
  return (
    <>
      <section className="border-b border-black/10 bg-black px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <Kicker tone="dark">Sights and sounds</Kicker>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Gallery</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Experience our joy, worship, and God through pictures from Houston, Tulsa, and Washington, D.C.
            Press any photo to zoom.
          </p>
        </div>
      </section>

      <div className="bg-mist">
        <SectionFrame>
          <h2 className="text-3xl font-bold text-black sm:text-4xl">Videos</h2>
          <p className="mt-3 max-w-2xl text-ink-3">Watch Jesus March 01 and COMBINE AD.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <PlayableVideo
              src="/videos/hero.mp4"
              poster="/images/hero-banner.jpg"
              title="Jesus March 01 — Play video"
            />
            <PlayableVideo
              src="/videos/quote.mp4"
              poster="/images/quote-bg.jpg"
              title="COMBINE AD (STOMP) — Play video"
            />
          </div>
        </SectionFrame>

        <SectionFrame>
          <GalleryGrid title="Houston" images={houston} />
        </SectionFrame>
        <SectionFrame>
          <GalleryGrid title="Tulsa" images={tulsa} />
        </SectionFrame>
        <SectionFrame>
          <GalleryGrid title="D.C." images={dc} />
        </SectionFrame>
      </div>

      <section className="bg-cream text-ink">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-3xl font-bold sm:text-4xl">Downloadables</h2>
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
