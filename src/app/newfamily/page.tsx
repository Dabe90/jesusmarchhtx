import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";

export const metadata: Metadata = { title: "New Family" };

export default function NewFamilyPage() {
  return (
    <section className="mx-auto grid max-w-5xl gap-10 px-5 py-16 md:grid-cols-2">
      <div>
        <h1 className="font-display text-5xl text-black">Welcome to the family</h1>
        <p className="mt-6 text-ink-3">
          Experience the fullness of God’s love. Jesus offers a life filled with hope, purpose, and
          peace, and His gift of salvation is for everyone.
        </p>
        <p className="mt-4 text-muted">
          If you haven’t yet opened your heart to Him, today is the perfect day. Jesus stands with
          open arms, ready to give you a new beginning. Accept His love, embrace His grace, and walk
          in the light of His salvation. Your life will never be the same again.
        </p>
      </div>
      <div className="rounded-3xl border border-black/10 bg-pink p-6 md:p-8">
        <InquiryForm
          formName="New Family"
          fields={[
            { name: "firstName", label: "First name", required: true },
            { name: "lastName", label: "Last name", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            { name: "phone", label: "Phone", type: "tel" },
            { name: "city", label: "City" },
            { name: "region", label: "Region / State / Province" },
            { name: "country", label: "Country" },
            { name: "acceptedJesus", label: "I recently accepted Jesus as my Savior (Yes / No)" },
            { name: "bibleStudy", label: "I want to join a Bible study (Yes / No)" },
          ]}
        />
      </div>
    </section>
  );
}
