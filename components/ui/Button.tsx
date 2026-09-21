import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  className?: string;
  icon?: boolean;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-[14.5px] font-medium tracking-[-0.01em] transition-all duration-200 whitespace-nowrap";

const variants = {
  primary: "bg-ink text-paper hover:bg-accent",
  secondary:
    "border border-line-strong text-ink hover:border-ink hover:bg-ink hover:text-paper",
  ghost: "text-ink hover:text-accent",
  dark: "bg-paper text-dark hover:bg-accent-bright hover:text-paper",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  icon = true,
}: ButtonProps) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
      {icon && (
        <ArrowUpRight
          className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2}
        />
      )}
    </Link>
  );
}
