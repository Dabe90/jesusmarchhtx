import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { InquiryForm } from "@/components/InquiryForm";

export const metadata: Metadata = { title: "Get Involved" };

export default function GetInvolvedPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.2fr_0.8fr]">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-gold">Volunteers needed</p>
        <h1 className="mt-3 font-display text-5xl text-black">Global 360 Partner</h1>
        <p className="mt-6 text-lg text-ink-3">
          Join the Global 360 Partner Network of Dear Daughter Bible Study (DDBS).
        </p>
        <p className="mt-4 text-muted">
          Dear Daughter Bible Study is a Spirit-led, non-denominational Bible study group open to men
          and women of all ages. Our mission is simple but profound: to teach the undiluted Word of
          God and reach every nation with the gospel of Jesus Christ.
        </p>
        <p className="mt-4 text-muted">
          From city marches to global outreach, we are answering God’s call to bring light to the
          world. We’ve seen His move in Houston, Tulsa, Washington D.C., Nigeria, and many more
          cities to come. Now we invite you to partner with us.
        </p>

        <h2 className="mt-10 font-display text-3xl text-black">Wherever you are, stand with us</h2>
        <ul className="mt-5 space-y-3 text-ink-3">
          <li><strong className="text-gold">Prayer</strong> — Join our monthly global Zoom prayer meetings.</li>
          <li><strong className="text-gold">Giving</strong> — Sponsor Jesus Marches, outreach events, and Bible study materials.</li>
          <li><strong className="text-gold">Connections</strong> — Help us reach new cities and nations with your network.</li>
          <li><strong className="text-gold">Advisory</strong> — Lend your voice, wisdom, and leadership as a spiritual or professional advisor.</li>
        </ul>

        <p className="mt-6 text-muted">
          If you can’t go, your support can. Whether through prayers, financial giving, or on-the-ground help, your partnership matters.
        </p>

        <h3 className="mt-10 font-display text-2xl text-black">What you get as a partner</h3>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-ink-3">
          <li>Monthly partner updates and prayer points</li>
          <li>Exclusive partner Zoom meetings</li>
          <li>Opportunities to shape and support mission efforts</li>
        </ul>

        <blockquote className="mt-10 border-l-2 border-gold pl-5 text-ink-3">
          Jesus March is organized by the Dear Daughter Bible Study, a Bible study group of young
          believers committed to sharing the undiluted Word of God and the gospel of Jesus. You can
          request a Bible study in your community, and we’ll be there.
        </blockquote>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/donate">Contribute</ButtonLink>
          <ButtonLink href="/volunteer" variant="outline">Volunteer roles</ButtonLink>
          <ButtonLink href="/newfamily" variant="outline">Request a Bible study</ButtonLink>
        </div>
      </div>

      <div className="rounded-3xl border border-black/10 bg-pink p-6 md:p-8">
        <h2 className="font-display text-2xl text-black">Partner with us</h2>
        <p className="mt-2 mb-6 text-sm text-muted">Tell us how you want to serve.</p>
        <InquiryForm
          formName="Get Involved"
          fields={[
            { name: "firstName", label: "First name", required: true },
            { name: "lastName", label: "Last name", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            { name: "city", label: "City" },
            { name: "interest", label: "How do you want to partner?", placeholder: "Prayer, giving, connections, advisory…" },
          ]}
        />
      </div>
    </section>
  );
}
