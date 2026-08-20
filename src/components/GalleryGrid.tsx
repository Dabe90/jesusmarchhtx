"use client";

import Image from "next/image";
import { useState } from "react";

export function GalleryGrid({ title, images }: { title: string; images: string[] }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <h2 className="text-4xl font-bold text-black">{title}</h2>
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
        {images.map((src) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(src)}
            className="relative aspect-square overflow-hidden rounded-xl bg-ink-3"
          >
            <Image src={src} alt="" fill className="object-cover" />
          </button>
        ))}
      </div>
      {active ? (
        <button
          type="button"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-6"
          onClick={() => setActive(null)}
        >
          <Image src={active} alt="" width={1400} height={1000} className="max-h-[90vh] w-auto max-w-full object-contain" />
        </button>
      ) : null}
    </section>
  );
}
