"use client";

import { FormEvent, useEffect, useState } from "react";
import { FORM_INBOX } from "@/lib/links";

type Field = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
};

type Props = {
  formName: string;
  fields: Field[];
  extra?: React.ReactNode;
  submitLabel?: string;
};

export function InquiryForm({
  formName,
  fields,
  extra,
  submitLabel = "Submit",
}: Props) {
  const [nextUrl, setNextUrl] = useState("/thanks");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    setNextUrl(`${window.location.origin}/thanks`);
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setSending(true);
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formName, ...data }),
    }).catch(() => undefined);
  }

  const hasName = fields.some((field) => field.name === "name");
  const hasEmail = fields.some((field) => field.name === "email");

  return (
    <form
      method="POST"
      action={`https://formsubmit.co/${FORM_INBOX}`}
      onSubmit={onSubmit}
      className="grid gap-4"
    >
      <input type="hidden" name="_subject" value={`${formName} — Jesus March HTX`} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value={nextUrl} />
      <input type="hidden" name="formName" value={formName} />
      {!hasName ? <input type="hidden" name="name" value={formName} /> : null}

      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor={`honey-${formName}`}>Website</label>
        <input
          id={`honey-${formName}`}
          type="text"
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {fields.map((field) => (
        <label key={field.name} className="grid gap-1 text-sm">
          <span className="text-ink-3">{field.label}</span>
          <input
            name={field.name}
            type={field.type ?? "text"}
            required={field.name === "email" ? true : field.required}
            placeholder={field.placeholder}
            className="rounded-xl border border-black/15 bg-white px-4 py-3 text-black outline-none ring-gold/40 placeholder:text-muted focus:ring-2"
          />
        </label>
      ))}
      {!hasEmail ? (
        <label className="grid gap-1 text-sm">
          <span className="text-ink-3">Email</span>
          <input
            name="email"
            type="email"
            required
            className="rounded-xl border border-black/15 bg-white px-4 py-3 text-black outline-none ring-gold/40"
          />
        </label>
      ) : null}
      {extra}
      <button
        type="submit"
        disabled={sending}
        className="mt-2 rounded-full bg-gold px-5 py-3 text-sm font-medium text-ink transition hover:bg-gold-2 disabled:opacity-60"
      >
        {sending ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}
