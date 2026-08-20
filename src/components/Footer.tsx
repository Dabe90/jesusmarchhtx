import Image from "next/image";
import Link from "next/link";
import { links, ZELLE_EMAIL } from "@/lib/links";

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-ink-2">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Image src="/images/logo.png" alt="" width={56} height={50} className="mb-4 h-12 w-auto" />
          <p className="max-w-md font-display text-2xl text-cream">
            We will teach the undiluted Word of God to all nations of the world.
          </p>
          <p className="mt-3 text-sm text-muted">
            — Damilola Abe, President of the Dear Daughter Bible Study
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-gold-2">
            <a href={links.instagram} target="_blank" rel="noreferrer">Instagram @ddbs.htx</a>
            <a href={links.facebook} target="_blank" rel="noreferrer">Facebook</a>
            <a href={links.recEventbrite} target="_blank" rel="noreferrer">The Rec tickets</a>
            <a href={links.zeffy} target="_blank" rel="noreferrer">Give on Zeffy</a>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-cream-2">
            <li><Link href="/gallery" className="hover:text-gold-2">Gallery</Link></li>
            <li><Link href="/jmnigeria" className="hover:text-gold-2">Jesus March Nigeria</Link></li>
            <li><Link href="/volunteer" className="hover:text-gold-2">Volunteer</Link></li>
            <li><Link href="/newfamily" className="hover:text-gold-2">New Family</Link></li>
            <li><Link href="/blog" className="hover:text-gold-2">Blog</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Partner</p>
          <ul className="mt-4 space-y-2 text-sm text-cream-2">
            <li><Link href="/getinvolved" className="hover:text-gold-2">Global 360 Partners</Link></li>
            <li><Link href="/donate" className="hover:text-gold-2">Give</Link></li>
            <li><Link href="/vision" className="hover:text-gold-2">Our Vision</Link></li>
            <li>
              <a href={`mailto:${ZELLE_EMAIL}`} className="hover:text-gold-2">
                Zelle {ZELLE_EMAIL}
              </a>
            </li>
            <li><Link href="/privacy-policy" className="hover:text-gold-2">Privacy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 px-5 py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} Jesus March · Dear Daughter Bible Study
      </div>
    </footer>
  );
}
