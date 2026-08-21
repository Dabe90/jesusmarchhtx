import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { Kicker } from "@/components/Kicker";
import { volunteerRoles } from "@/lib/content";

export const metadata: Metadata = { title: "Volunteer" };

export default function VolunteerPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <Kicker>Let’s march</Kicker>
      <h1 className="mt-3 font-display text-5xl text-black">Volunteer</h1>
      <p className="mt-4 max-w-2xl text-ink-3">
        Come and be part of this extraordinary event as we lift up the banner of our King, Jesus,
        and make a positive impact on our nation and the world.
      </p>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {volunteerRoles.map((role) => (
          <article key={role.title} className="rounded-2xl border border-black/10 border-l-4 border-l-gold bg-white p-6">
            <h2 className="font-display text-2xl text-black">{role.title}</h2>
            <p className="mt-3 text-sm text-muted">{role.body}</p>
          </article>
        ))}
      </div>
      <div className="mt-12 max-w-xl rounded-3xl border border-black/10 bg-cream-2 p-8">
        <h2 className="font-display text-2xl text-black">Volunteer form</h2>
        <p className="mt-2 mb-6 text-sm text-muted">Please state the area where you would like to volunteer.</p>
        <InquiryForm
          formName="Volunteer"
          fields={[
            { name: "firstName", label: "First name", required: true },
            { name: "lastName", label: "Last name", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            { name: "phone", label: "Phone", type: "tel" },
            { name: "dob", label: "Date of birth", type: "date" },
            { name: "role", label: "Position volunteering for", required: true },
          ]}
        />
      </div>
    </section>
  );
}
