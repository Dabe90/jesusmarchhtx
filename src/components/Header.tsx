"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/content";

const extraLinks = [
  { href: "/tulsa", label: "Tulsa" },
  { href: "/dc", label: "D.C." },
  { href: "/#join", label: "Join" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href.includes("#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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

        <nav className="hidden items-center gap-3 text-[13px] text-white/80 lg:flex xl:gap-5 xl:text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap transition hover:text-gold ${
                isActive(pathname, link.href) ? "font-semibold text-gold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          {extraLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap transition hover:text-gold ${
                isActive(pathname, link.href) ? "font-semibold text-gold" : ""
              }`}
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
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 lg:hidden"
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
        <div className="border-t border-white/10 bg-midnight px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-3 text-white">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2 ${isActive(pathname, link.href) ? "font-semibold text-gold" : ""}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {extraLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2 ${isActive(pathname, link.href) ? "font-semibold text-gold" : ""}`}
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
