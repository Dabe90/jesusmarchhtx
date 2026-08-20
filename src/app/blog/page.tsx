import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center">
      <h1 className="text-5xl font-bold text-black">All posts</h1>
      <p className="mt-6 text-ink-3">Check back soon.</p>
      <p className="mt-2 text-muted">Once posts are published, you’ll see them here.</p>
      <div className="mt-10">
        <ButtonLink href="/">Back home</ButtonLink>
      </div>
    </section>
  );
}
