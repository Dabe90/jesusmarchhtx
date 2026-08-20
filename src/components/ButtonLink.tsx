import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "outline" | "light";
};

export function ButtonLink({ href, children, variant = "gold" }: Props) {
  const styles = {
    gold: "bg-gold text-black hover:bg-gold-2",
    outline: "border border-black text-black hover:bg-black hover:text-white",
    light: "border border-white text-white hover:bg-white hover:text-black",
  }[variant];

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition ${styles}`}
    >
      {children}
    </Link>
  );
}
