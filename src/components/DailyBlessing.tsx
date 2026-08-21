"use client";

import { useMemo, useState } from "react";
import { InquiryForm } from "@/components/InquiryForm";
import { dailyBlessings, houstonPrayer, salvationPrayer } from "@/lib/content";

export function DailyBlessing() {
  const blessing = useMemo(() => {
    const day = Math.floor(Date.now() / 86400000);
    return dailyBlessings[day % dailyBlessings.length];
  }, []);
  const [open, setOpen] = useState(false);

  return (
    <section className="relative z-10 -mt-16 px-5">
      <div className="mx-auto grid max-w-7xl gap-6 rounded-3xl border border-gold/40 bg-white p-6 shadow-[0_24px_60px_rgba(5,13,40,0.22)] md:grid-cols-2 md:p-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy">Blessed first</p>
          <h2 className="mt-2 text-2xl font-bold text-midnight md:text-3xl">Daily blessing</h2>
          <p className="mt-5 text-xl font-medium italic leading-relaxed text-navy md:text-2xl">
            “{blessing.verse}”
          </p>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-gold">{blessing.ref}</p>
          <p className="mt-5 text-ink-3">{houstonPrayer}</p>
        </div>
        <div className="rounded-2xl bg-mist p-6">
          <h3 className="text-xl font-bold text-midnight">Salvation prayer</h3>
          <p className="mt-3 text-ink-3">{salvationPrayer}</p>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-6 inline-flex rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-gold-2"
          >
            Accepted Jesus today?
          </button>
          <p className="mt-3 text-sm text-muted">
            Let us pray with you and plug you into a local Bible study.
          </p>
        </div>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-[90] flex items-end justify-center bg-midnight/80 p-4 sm:items-center"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="salvation-title"
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <h3 id="salvation-title" className="text-2xl font-bold text-midnight">
              We want to pray with you
            </h3>
            <p className="mt-2 mb-6 text-sm text-ink-3">
              Tell us you received Jesus and we’ll follow up with prayer and a Bible study near you.
            </p>
            <InquiryForm
              formName="Accepted Jesus today"
              submitLabel="Pray with me"
              fields={[
                { name: "name", label: "Name", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "phone", label: "Phone", type: "tel" },
                { name: "city", label: "City", required: true },
                { name: "bibleStudy", label: "I want to join a Bible study (Yes / No)", required: true },
              ]}
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-4 w-full text-sm font-semibold text-navy"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
