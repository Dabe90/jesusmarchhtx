import { links } from "@/lib/links";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-current">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-current">
      <path d="M14.5 8.5V6.75c0-.7.45-1.25 1.5-1.25H17V3h-1.9C12.7 3 11 4.7 11 7.15V8.5H9v2.5h2V21h3.5v-10h2.15l.35-2.5H14.5Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-current">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.2C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.4A3 3 0 0 0 .5 6.2 32 32 0 0 0 0 12a32 32 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.2c1.9.4 9.4.4 9.4.4s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.2A32 32 0 0 0 24 12a32 32 0 0 0-.5-5.8ZM9.8 15.5v-7l6.2 3.5-6.2 3.5Z" />
    </svg>
  );
}

export function SocialLinks({ className = "" }: { className?: string }) {
  const items = [
    { href: links.instagram, label: "Instagram @ddbs.htx", icon: <InstagramIcon /> },
    { href: links.facebook, label: "Facebook Jesus March HTX", icon: <FacebookIcon /> },
    { href: links.youtube, label: "YouTube @abedamilola", icon: <YouTubeIcon /> },
    { href: links.youtubeDearDaughter, label: "YouTube @deardaughter_bs", icon: <YouTubeIcon /> },
  ].filter((item) => Boolean(item.href));

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          aria-label={item.label}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-gold-2 transition hover:bg-gold hover:text-black"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}

export { InstagramIcon, FacebookIcon, YouTubeIcon };
