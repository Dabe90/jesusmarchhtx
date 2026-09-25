import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <section className="mx-auto max-w-xl px-5 py-24 text-center">
      <h1 className="text-4xl font-bold text-black">Thanks for submitting</h1>
      <p className="mt-4 text-ink-3">
        Your message was sent. We will follow up from Dear Daughter Bible Study.
      </p>
      <div className="mt-8">
        <ButtonLink href="/">Back home</ButtonLink>
      </div>
    </section>
  );
}
