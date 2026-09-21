"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const links = [
  { href: "#werkwijze", label: "Werkwijze" },
  { href: "#automatiseren", label: "Wat we automatiseren" },
  { href: "#engineers", label: "AI Engineers" },
  { href: "#voor-wie", label: "Voor wie" },
  { href: "#over-ons", label: "Over Flowfield" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-line bg-paper/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container>
        <nav className="flex h-18 items-center justify-between py-4">
          <Link
            href="#top"
            className="font-sans text-[19px] font-semibold tracking-[-0.02em] text-ink"
            onClick={() => setOpen(false)}
          >
            Flowfield
          </Link>

          <ul className="hidden items-center gap-9 lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[14.5px] text-ink-soft transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link
              href="#contact"
              className="inline-flex items-center rounded-sm bg-ink px-5 py-2.5 text-[14px] font-medium text-paper transition-colors hover:bg-accent"
            >
              Plan een kennismaking
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? "Sluit menu" : "Open menu"}
            aria-expanded={open}
            className="flex size-10 items-center justify-center text-ink lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>
      </Container>

      {open && (
        <div className="border-t border-line bg-paper lg:hidden">
          <Container>
            <ul className="flex flex-col divide-y divide-line">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-[16px] text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="my-5 block rounded-sm bg-ink px-5 py-3.5 text-center text-[15px] font-medium text-paper"
            >
              Plan een kennismaking
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
