"use client";

import { useState } from "react";
import { InquiryForm } from "@/components/InquiryForm";
import { joinRoles } from "@/lib/content";

const tabs = [
  {
    id: "register",
    label: "Register for Next March",
    formName: "March registration",
    intro: "Save your place for the next Jesus March Houston.",
    role: "March participant",
  },
  {
    id: "volunteer",
    label: "Volunteer as Lead/Rear Marcher",
    formName: "Volunteer",
    intro: "Lead from the front or cover the rear — we need both.",
    role: "Lead marchers",
  },
  {
    id: "study",
    label: "Request a Community Bible Study",
    formName: "Community Bible Study",
    intro: "Tell us your city. Dear Daughter Bible Study will come teach the Word.",
    role: "Request a Community Bible Study",
  },
] as const;

export function JoinHub() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("register");
  const tab = tabs.find((item) => item.id === active) ?? tabs[0];

  return (
    <section id="join" className="scroll-mt-24 bg-midnight px-5 py-16 text-white md:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">How to join us</p>
        <h2 className="mt-3 text-4xl font-bold md:text-5xl">Come march, serve, or study</h2>
        <p className="mt-4 max-w-2xl text-white/80">
          Register, volunteer, or request a Bible study without leaving this page.
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

          <div className="rounded-3xl bg-white p-6 text-ink md:p-8">
            <h3 className="text-2xl font-bold text-midnight">{tab.label}</h3>
            <p className="mt-2 mb-6 text-sm text-muted">{tab.intro}</p>
            <InquiryForm
              key={tab.id}
              formName={tab.formName}
              submitLabel="Send my request"
              fields={[
                { name: "name", label: "Name", required: true },
                { name: "dob", label: "Date of birth", type: "date", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                {
                  name: "role",
                  label: "Volunteer position",
                  required: true,
                  options: joinRoles,
                  defaultValue: tab.role,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
