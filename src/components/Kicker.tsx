export function Kicker({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  if (tone === "dark") {
    return (
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
        {children}
      </p>
    );
  }

  return (
    <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-navy">
      <span className="h-0.5 w-8 shrink-0 bg-gold" aria-hidden />
      {children}
    </p>
  );
}
