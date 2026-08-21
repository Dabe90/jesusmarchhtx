export function SectionFrame({
  children,
  id,
  dark = false,
}: {
  children: React.ReactNode;
  id?: string;
  dark?: boolean;
}) {
  return (
    <section id={id} className="px-5 py-8 md:py-10">
      <div
        className={`mx-auto max-w-7xl rounded-3xl border p-6 md:p-10 ${
          dark
            ? "border-white/20 bg-white/10"
            : "border-navy/15 bg-white/50"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
