"use client";

import Link from "next/link";
import { useState } from "react";
import { InquiryForm } from "@/components/InquiryForm";
import { partnerWays, volunteerMarchRoles } from "@/lib/content";

const tabs = [
  {
    id: "volunteer",
    label: "Volunteer for the Next March",
    formName: "Volunteer for next march",
    intro: "Lead from the front, cover the rear, or lift worship chants as we march.",
  },
  {
    id: "study",
    label: "Request a Bible Study in Your City",
    formName: "Community Bible Study",
    intro: "Dear Daughter Bible Study Group will come teach the undiluted Word in your community.",
  },
  {
    id: "partner",
    label: "Become a Global 360 Partner",
    formName: "Global 360 Partner",
    intro: "Stand with us through monthly prayer Zoom or by sponsoring outreach and Bibles.",
  },
] as const;

export function JoinHub() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("volunteer");
  const tab = tabs.find((item) => item.id === active) ?? tabs[0];

  const fields =
    tab.id === "volunteer"
      ? [
          { name: "name", label: "Name", required: true },
          { name: "email", label: "Email", type: "email", required: true },
          { name: "phone", label: "Phone", type: "tel" },
          {
            name: "role",
            label: "Volunteer position",
            required: true,
            options: volunteerMarchRoles,
            defaultValue: "Lead Marcher",
          },
        ]
      : tab.id === "study"
        ? [
            { name: "name", label: "Name", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            { name: "city", label: "City", required: true },
            { name: "note", label: "When and where should we gather?" },
          ]
        : [
            { name: "name", label: "Name", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            {
              name: "interest",
              label: "How do you want to partner?",
              required: true,
              options: partnerWays,
              defaultValue: "Monthly Global Prayer Zoom",
            },
          ];

  return (
    <section id="join" className="scroll-mt-24 bg-midnight px-4 py-12 text-white sm:px-5 md:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold sm:text-xs sm:tracking-[0.28em]">Action center</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">Join us &amp; get involved</h2>
        <p className="mt-4 max-w-2xl text-white/80">
          Volunteer, request a Bible study, start a chapter, or become a Global 360 Partner.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-3">
            {tabs.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(item.id)}
                className={`rounded-2xl border px-5 py-4 text-left transition ${
                  active === item.id
                    ? "border-gold bg-gold text-black"
                    : "border-white/20 bg-white/5 hover:border-gold/60"
                }`}
              >
                <p className="font-semibold">{item.label}</p>
                <p className={`mt-1 text-sm ${active === item.id ? "text-black/70" : "text-white/70"}`}>
                  {item.intro}
                </p>
              </button>
            ))}
          </div>

          <div className="min-w-0 rounded-3xl bg-white p-4 text-ink sm:p-6 md:p-8">
            <h3 className="text-2xl font-bold text-midnight">{tab.label}</h3>
            <p className="mt-2 mb-6 text-sm text-muted">{tab.intro}</p>
            <InquiryForm key={tab.id} formName={tab.formName} submitLabel="Send my request" fields={fields} />
            {tab.id === "study" ? (
              <p className="mt-6 text-sm text-ink-3">
                Starting a standing chapter in another state or on a campus?{" "}
                <Link href="/chapters" className="font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4">
                  Go to Start a chapter
                </Link>
                .
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
