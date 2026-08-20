"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="Jesus March HTX"
            width={44}
            height={40}
            className="h-10 w-auto"
            priority
          />
          <span className="hidden text-lg font-semibold tracking-wide text-black sm:block">
            Jesus March
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-ink-3 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-red"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/donate"
            className="rounded-full bg-gold px-4 py-2 font-semibold text-black transition hover:bg-gold-2"
          >
            Give
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/20 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-black" />
            <span className="block h-0.5 w-5 bg-black" />
            <span className="block h-0.5 w-4 bg-black" />
          </div>
        </button>
      </div>

      {open ? (
        <div className="border-t border-black/10 bg-white px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-black">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-1"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donate"
              className="mt-2 rounded-full bg-gold px-4 py-2 text-center font-semibold text-black"
              onClick={() => setOpen(false)}
            >
              Give
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
