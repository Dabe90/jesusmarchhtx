import Image from "next/image";

type Stamp = "repeat" | "logo" | "date" | "none";

export function WatermarkedShot({
  src,
  alt,
  stamp = "none",
  className = "",
  sizes,
  priority = false,
}: {
  src: string;
  alt: string;
  stamp?: Stamp;
  className?: string;
  sizes?: string;
  priority?: boolean;
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
              Jesus March Tulsa
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
          className="pointer-events-none absolute right-3 bottom-3 h-14 w-14 rounded-full bg-white/90 object-contain shadow-lg"
        />
      ) : null}
      {stamp === "date" ? (
        <p className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-gold px-3 py-1 text-[11px] font-black tracking-[0.16em] text-black uppercase">
          Sept 26 · 12PM · City Hall
        </p>
      ) : null}
    </div>
  );
}
