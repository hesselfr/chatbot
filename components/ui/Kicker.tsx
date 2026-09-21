import { cn } from "@/lib/utils";

export function Kicker({
  children,
  className,
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.18em]",
        dark ? "text-paper/50" : "text-ink-faint",
        className
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          dark ? "bg-accent-bright" : "bg-accent"
        )}
      />
      {children}
    </div>
  );
}
