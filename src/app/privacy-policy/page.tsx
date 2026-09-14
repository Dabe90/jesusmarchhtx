import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="font-display text-3xl text-black sm:text-5xl">Privacy policy</h1>
      <p className="mt-6 text-muted">
        Jesus March HTX and Dear Daughter Bible Study collect information you choose to share with
        us through forms on this website, including your name, email, phone number, city, and how
        you would like to serve or receive ministry.
      </p>
      <p className="mt-4 text-muted">
        We use this information to follow up with new believers, volunteers, partners, and people
        who request Bible studies or event registration. We do not sell your personal information.
      </p>
      <h2 className="mt-10 font-display text-3xl text-black">Safety and security</h2>
      <p className="mt-4 text-muted">
        Form submissions are sent to our ministry inbox and, when configured, through our email
        provider. Access is limited to people serving in administration and follow-up.
      </p>
      <p className="mt-4 text-muted">
        Questions about this policy can be sent to{" "}
        <a href="mailto:ddbs.htx@gmail.com" className="text-gold-2">
          ddbs.htx@gmail.com
        </a>
        .
      </p>
    </section>
  );
}
