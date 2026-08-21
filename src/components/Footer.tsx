import Image from "next/image";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { SocialLinks } from "@/components/SocialLinks";
import { FORM_INBOX, ZELLE_EMAIL, links } from "@/lib/links";

export function Footer() {
  return (
    <footer className="overflow-x-hidden bg-midnight text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="min-w-0">
          <Image src="/images/logo.png" alt="" width={56} height={50} className="mb-4 h-12 w-auto" />
          <p className="max-w-sm text-2xl font-semibold text-white">
            Spreading worship and revival across Houston.
          </p>
          <p className="mt-4 text-sm text-white/70">
            Dear Daughter Bible Study · Jesus March HTX
          </p>
          <p className="mt-4 text-sm text-white/80">
            <a className="hover:text-gold" href={`mailto:${FORM_INBOX}`}>
              {FORM_INBOX}
            </a>
          </p>
          <p className="mt-1 text-sm text-white/80">
            Zelle {ZELLE_EMAIL}
          </p>
          <SocialLinks className="mt-6" />
        </div>

        <div className="min-w-0 overflow-hidden rounded-3xl border border-gold/30 bg-white/5 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Get text updates</p>
          <h2 className="mt-2 text-xl font-bold">March alerts on your phone</h2>
          <p className="mt-2 mb-4 text-sm text-white/70">
            Leave your number and we’ll reach out with the next gathering.
          </p>
          <div className="min-w-0 overflow-hidden rounded-2xl bg-white p-4">
            <InquiryForm
              formName="Text updates"
              submitLabel="Keep me posted"
              fields={[
                { name: "name", label: "Name", required: true },
                { name: "phone", label: "Phone", type: "tel", required: true },
                { name: "email", label: "Email", type: "email", required: true },
              ]}
            />
          </div>
        </div>

        <div className="min-w-0 lg:col-span-2">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Explore</p>
          <ul className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80">
            <li><Link href="/gallery" className="hover:text-gold">Gallery</Link></li>
            <li><Link href="/#media" className="hover:text-gold">Podcast</Link></li>
            <li><Link href="/#join" className="hover:text-gold">Join the March</Link></li>
            <li>
              <a href={links.prayerCity} className="hover:text-gold" target="_blank" rel="noopener noreferrer">
                Jesus March Nigeria
              </a>
            </li>
            <li><Link href="/volunteer" className="hover:text-gold">Volunteer</Link></li>
            <li><Link href="/getinvolved" className="hover:text-gold">Global 360 Partners</Link></li>
            <li><Link href="/donate" className="hover:text-gold">Give</Link></li>
            <li><Link href="/vision" className="hover:text-gold">Our Vision</Link></li>
            <li><Link href="/therec" className="hover:text-gold">The Rec</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-gold">Privacy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Jesus March · Dear Daughter Bible Study. All rights reserved.
      </div>
    </footer>
  );
}
