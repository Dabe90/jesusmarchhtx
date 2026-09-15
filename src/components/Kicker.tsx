export function Kicker({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark" | "warm";
}) {
  const type =
    "max-w-full text-[10px] font-semibold uppercase tracking-[0.12em] break-words sm:text-xs sm:tracking-[0.22em]";

  if (tone === "dark") {
    return <p className={`${type} text-gold`}>{children}</p>;
  }

  const color = tone === "warm" ? "text-olive" : "text-navy";

  return (
    <p className={`flex max-w-full items-center gap-3 ${type} ${color}`}>
      <span className="h-0.5 w-8 shrink-0 bg-gold" aria-hidden />
      <span className="min-w-0">{children}</span>
    </p>
  );
}
