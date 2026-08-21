"use client";

import { useMemo, useState } from "react";
import { dailyBlessings, houstonPrayer } from "@/lib/content";

export function DailyBlessing() {
  const blessing = useMemo(() => {
    const day = Math.floor(Date.now() / 86400000);
    return dailyBlessings[day % dailyBlessings.length];
  }, []);
  const [copied, setCopied] = useState(false);

  async function share() {
    const text = `“${blessing.verse}” — ${blessing.ref}\n\n${houstonPrayer}\n\nJesus March Houston\nhttps://www.jesusmarchhtx.com`;
    try {
      if (navigator.share) {
        await navigator.share({ title: "A blessing from Jesus March Houston", text });
        return;
      }
    } catch {
      /* user cancelled share */
    }
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className="relative z-10 -mt-16 px-5">
      <div className="mx-auto max-w-4xl rounded-3xl border border-gold/40 bg-white p-6 shadow-[0_24px_60px_rgba(5,13,40,0.22)] md:max-w-7xl md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy">Daily blessing</p>
        <h2 className="mt-2 text-2xl font-bold text-midnight md:text-3xl">A word for Houston today</h2>
        <p className="mt-6 text-xl font-medium italic leading-relaxed text-navy md:text-2xl">
          “{blessing.verse}”
        </p>
        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-gold">{blessing.ref}</p>
        <p className="mt-6 max-w-2xl text-ink-3">{houstonPrayer}</p>
        <button
          type="button"
          onClick={share}
          className="mt-8 inline-flex rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-gold-2"
        >
          {copied ? "Copied" : "Share this blessing"}
        </button>
      </div>
    </section>
  );
}
