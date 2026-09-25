import { ButtonLink } from "@/components/ButtonLink";
import { InquiryForm } from "@/components/InquiryForm";
import { Kicker } from "@/components/Kicker";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Details",
  description:
    "Event details and registration for Jesus March gatherings organized by Dear Daughter Bible Study Group.",
  alternates: { canonical: "/event-details" },
};

export default function EventDetailsPage() {
  return (
    <section className="mx-auto grid max-w-5xl gap-10 px-5 py-16 md:grid-cols-2">
      <div>
        <Kicker>Join thousands of Jesus lovers</Kicker>
        <h1 className="mt-3 font-display text-4xl text-black">Event details & registration</h1>
        <p className="mt-6 text-ink-3">
          Join thousands of Jesus lovers across Houston for Jesus March Houston, a gathering of
          believers walking together to spread love and worship in our city. As we march, we speak
          the Word of God over our city.
        </p>
        <p className="mt-4 text-muted">
          We march through downtown Houston in a coordinated way, guided by lead marchers and rear
          marchers. Lead marchers lead in worship, chants, Bible readings, and prayers.
        </p>
        <p className="mt-4 text-muted">
          Everyone is invited. It doesn’t matter if you are a Christian or not — Jesus died for you
          and is the Host of the March.
        </p>
        <div className="mt-8">
          <ButtonLink href="/volunteer">See volunteer roles</ButtonLink>
        </div>
      </div>
      <div className="rounded-3xl border border-black/10 bg-cream-2 p-6">
        <InquiryForm
          formName="Event registration"
          fields={[
            { name: "firstName", label: "First name", required: true },
            { name: "lastName", label: "Last name", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            { name: "phone", label: "Phone", type: "tel" },
            { name: "dob", label: "Date of birth", type: "date" },
            { name: "role", label: "Position volunteering for" },
          ]}
          submitLabel="Register"
        />
      </div>
    </section>
  );
}
