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
  return { title: march.title };
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
