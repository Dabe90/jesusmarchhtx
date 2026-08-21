"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { marches, marchStories } from "@/lib/content";

export function StoryCarousel() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const story = marchStories[index];
  const march = marches.find((item) => item.slug === story.slug);
  const video = "video" in story ? story.video : undefined;

  function go(next: number) {
    setOpen(false);
    setIndex((next + marchStories.length) % marchStories.length);
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {marchStories.map((item, i) => (
          <button
            key={item.slug}
            type="button"
            onClick={() => {
              setIndex(i);
              setOpen(false);
            }}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              i === index ? "bg-gold text-black" : "bg-white text-navy hover:bg-gold/40"
            }`}
          >
            {item.city}
          </button>
        ))}
      </div>

      <div className="mt-6 overflow-hidden rounded-3xl border border-navy/10 bg-white">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr]">
          <div className="relative min-h-[280px] bg-black">
            {video ? (
              <video
                key={video}
                className="h-full w-full object-cover"
                controls
                playsInline
                preload="metadata"
                poster={story.poster}
              >
                <source src={video} type="video/mp4" />
              </video>
            ) : (
              <Image src={story.poster} alt={story.city} fill className="object-cover" />
            )}
          </div>
          <div className="flex flex-col p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-navy">{story.city}</p>
            <p className="mt-3 text-xl font-semibold text-midnight">{story.summary}</p>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {story.photos.map((src) => (
                <div key={src} className="relative aspect-square overflow-hidden rounded-xl">
                  <Image src={src} alt="" fill className="object-cover" />
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="mt-6 text-left text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4"
            >
              {open ? "Hide story" : "Read the story"}
            </button>
            {open && march ? (
              <div className="mt-4 space-y-3 text-sm text-ink-3">
                {march.body.slice(0, 2).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <Link href={`/marches/${story.slug}`} className="inline-flex font-semibold text-navy">
                  Full page →
                </Link>
              </div>
            ) : null}
            <div className="mt-auto flex gap-3 pt-6">
              <button
                type="button"
                onClick={() => go(index - 1)}
                className="rounded-full border border-navy/20 px-4 py-2 text-sm font-semibold text-navy"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-black"
              >
                Next city
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
