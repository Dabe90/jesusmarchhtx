import Image from "next/image";

type Stamp = "repeat" | "logo" | "date" | "none";

export function WatermarkedShot({
  src,
  alt,
  stamp = "none",
  className = "",
  sizes,
  priority = false,
  repeatLabel = "Jesus March Tulsa",
  dateLabel = "Sept 26 · 12PM",
  dateExtra = " · City Hall",
}: {
  src: string;
  alt: string;
  stamp?: Stamp;
  className?: string;
  sizes?: string;
  priority?: boolean;
  repeatLabel?: string;
  dateLabel?: string;
  dateExtra?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-midnight ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes={sizes ?? "(min-width: 768px) 33vw, 100vw"}
      />
      {stamp === "repeat" ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex flex-wrap content-center justify-center gap-x-8 gap-y-10 overflow-hidden opacity-50 mix-blend-overlay"
        >
          {Array.from({ length: 18 }).map((_, i) => (
            <span
              key={i}
              className="-rotate-12 text-[11px] font-black tracking-[0.35em] text-gold uppercase"
            >
              {repeatLabel}
            </span>
          ))}
        </div>
      ) : null}
      {stamp === "logo" ? (
        <Image
          src="/images/logo-march.png"
          alt=""
          width={72}
          height={72}
          className="pointer-events-none absolute right-2 bottom-2 h-10 w-10 rounded-full bg-white/90 object-contain shadow-lg sm:right-3 sm:bottom-3 sm:h-14 sm:w-14"
        />
      ) : null}
      {stamp === "date" ? (
        <p className="pointer-events-none absolute bottom-2 left-2 max-w-[calc(100%-1rem)] rounded-full bg-gold px-2.5 py-1 text-[10px] leading-tight font-black tracking-wide text-black uppercase sm:bottom-3 sm:left-3 sm:px-3 sm:text-[11px] sm:tracking-[0.16em]">
          {dateLabel}
          <span className="hidden sm:inline">{dateExtra}</span>
        </p>
      ) : null}
    </div>
  );
}
