import type { Metadata } from "next";
import { Kicker } from "@/components/Kicker";
import { links, ZELLE_EMAIL } from "@/lib/links";

export const metadata: Metadata = { title: "Give" };

export default function DonatePage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-5 md:py-16">
      <div className="text-center">
        <Kicker>Partner through giving</Kicker>
        <h1 className="mt-4 text-4xl font-bold text-black sm:text-5xl">Give</h1>
        <blockquote className="mt-8 text-lg italic text-ink-3 sm:mt-10 sm:text-2xl">
          “Give, and it shall be given unto you; good measure, pressed down, and shaken together, and
          running over, shall men give into your bosom. For with the same measure that ye mete withal
          it shall be measured to you again.”
        </blockquote>
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-navy">Luke 6:38 KJV</p>
        <p className="mt-8 text-muted">
          You can serve and partner with us through your giving. Sponsor Jesus Marches, outreach
          events, and Bible study materials.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl bg-gold p-5 text-black sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em]">Card · Apple Pay · Google Pay</p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Give online with Zeffy</h2>
          <p className="mt-3 text-sm">
            100% of your gift goes to Dear Daughter Bible Study. No platform fees.
          </p>
          <a
            href={links.zeffy}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-semibold text-white sm:w-auto"
          >
            Open the Zeffy form
          </a>
        </article>
        <article className="rounded-3xl border border-black/10 bg-cream-2 p-5 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy">Zelle</p>
          <h2 className="mt-3 text-2xl font-bold text-black sm:text-3xl">Zelle to our ministry inbox</h2>
          <p className="mt-3 text-sm break-words text-ink-3">
            Send your gift by Zelle to{" "}
            <strong className="break-all">{ZELLE_EMAIL}</strong>.
          </p>
          <a
            href={links.zelleMailto}
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-semibold break-all text-white sm:w-auto"
          >
            Email {ZELLE_EMAIL}
          </a>
        </article>
      </div>

      <div className="mt-12 overflow-hidden rounded-3xl border border-black/10 bg-white">
        <iframe
          title="Zeffy donation form"
          src={links.zeffyEmbed}
          className="h-[560px] w-full max-w-full sm:h-[720px]"
          loading="lazy"
        />
      </div>
    </section>
  );
}
