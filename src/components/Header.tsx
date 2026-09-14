"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-midnight/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-5">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo-march.png"
            alt="Jesus March"
            width={56}
            height={56}
            className="h-10 w-10 shrink-0 rounded-full bg-white object-contain sm:h-12 sm:w-12"
            priority
          />
          <span className="truncate text-sm font-semibold tracking-wide text-white sm:text-lg">
            Jesus March
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/tulsa"
            className="transition hover:text-gold"
          >
            Tulsa
          </Link>
          <Link
            href="/dc"
            className="transition hover:text-gold"
          >
            D.C.
          </Link>
          <Link
            href="/#join"
            className="transition hover:text-gold"
          >
            Join
          </Link>
          <Link
            href="/donate"
            className="rounded-full bg-gold px-4 py-2 font-semibold text-black transition hover:bg-gold-2"
          >
            Give
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-4 bg-white" />
          </div>
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-midnight px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-white">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/tulsa" className="py-2" onClick={() => setOpen(false)}>
              Tulsa
            </Link>
            <Link href="/dc" className="py-2" onClick={() => setOpen(false)}>
              D.C.
            </Link>
            <Link href="/#join" className="py-2" onClick={() => setOpen(false)}>
              Join
            </Link>
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
