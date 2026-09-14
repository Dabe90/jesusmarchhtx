export function Kicker({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  const type =
    "max-w-full text-[10px] font-semibold uppercase tracking-[0.12em] break-words sm:text-xs sm:tracking-[0.22em]";

  if (tone === "dark") {
    return <p className={`${type} text-gold`}>{children}</p>;
  }

  return (
    <p className={`flex max-w-full items-center gap-3 ${type} text-navy`}>
      <span className="h-0.5 w-8 shrink-0 bg-gold" aria-hidden />
      <span className="min-w-0">{children}</span>
    </p>
  );
}
