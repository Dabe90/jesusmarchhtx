import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "outline" | "light";
  className?: string;
};

export function ButtonLink({ href, children, variant = "gold", className = "" }: Props) {
  const styles = {
    gold: "bg-gold text-black hover:bg-gold-2",
    outline: "border border-black text-black hover:bg-black hover:text-white",
    light: "border border-white text-white hover:bg-white hover:text-black",
  }[variant];

  const external = href.startsWith("http");

  return (
    <Link
      href={href}
      className={`inline-flex max-w-full min-w-0 items-center justify-center rounded-full px-5 py-2.5 text-center text-sm font-semibold transition ${styles} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </Link>
  );
}
