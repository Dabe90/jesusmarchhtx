import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarchStory } from "@/components/MarchStory";
import { marches } from "@/lib/content";

export function generateStaticParams() {
  return marches.map((march) => ({ slug: march.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const march = marches.find((item) => item.slug === slug);
  if (!march) return { title: "March" };
  const canonical =
    march.slug === "tulsa" ? "/tulsa" : march.slug === "dc" ? "/dc" : `/marches/${march.slug}`;
  return {
    title: march.title,
    description: march.subtitle,
    alternates: { canonical },
    openGraph: {
      title: march.title,
      description: march.subtitle,
      url: canonical,
      images: march.images[0] ? [{ url: march.images[0] }] : undefined,
    },
  };
}

export default async function MarchPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const march = marches.find((item) => item.slug === slug);
  if (!march) notFound();

  return <MarchStory slug={slug} />;
}
