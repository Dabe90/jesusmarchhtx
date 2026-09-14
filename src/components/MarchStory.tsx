import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { Kicker } from "@/components/Kicker";
import { marches } from "@/lib/content";

export function MarchStory({ slug }: { slug: string }) {
  const march = marches.find((item) => item.slug === slug);
  if (!march) return null;

  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
        <div className="grid items-center gap-10 text-left lg:grid-cols-2">
          <div>
            <Kicker>{march.kicker}</Kicker>
            <h1 className="mt-3 text-3xl font-bold text-midnight sm:text-4xl md:text-6xl">{march.title}</h1>
            <p className="mt-4 text-lg text-ink-3">{march.subtitle}</p>
            <div className="mt-6 space-y-4 text-muted">
              {march.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-6 text-ink-3">{march.cta}</p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
              <ButtonLink href={"href" in march && march.href ? march.href : "/gallery"} className="w-full sm:w-auto">
                {"href" in march && march.href ? "Explore" : "See pictures"}
              </ButtonLink>
              <ButtonLink href="/volunteer" variant="outline" className="w-full sm:w-auto">
                Volunteer
              </ButtonLink>
              <ButtonLink href="/#join" variant="outline" className="w-full sm:w-auto">
                Join the March
              </ButtonLink>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {march.images.map((src) => (
              <div key={src} className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={src}
                  alt={march.city}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
