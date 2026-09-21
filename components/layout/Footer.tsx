import Link from "next/link";
import { Container } from "@/components/ui/Container";

const nav = [
  { href: "#werkwijze", label: "Werkwijze" },
  { href: "#automatiseren", label: "Wat we automatiseren" },
  { href: "#engineers", label: "AI Engineers" },
  { href: "#over-ons", label: "Over Flowfield" },
  { href: "mailto:hallo@flowfield.nl", label: "Contact" },
];

export function Footer() {
  return (
    <footer id="over-ons" className="border-t border-line bg-paper py-16">
      <Container>
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <span className="font-sans text-[19px] font-semibold tracking-[-0.02em] text-ink">
              Flowfield
            </span>
            <p className="mt-3 text-[14px] leading-[1.6] text-ink-faint">
              AI engineers embedded in your business.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-10 sm:grid-cols-3">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
                Navigatie
              </div>
              <ul className="mt-4 flex flex-col gap-2.5">
                {nav.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[14px] text-ink-soft transition-colors hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
                Juridisch
              </div>
              <ul className="mt-4 flex flex-col gap-2.5">
                <li>
                  <Link
                    href="/privacy"
                    className="text-[14px] text-ink-soft transition-colors hover:text-ink"
                  >
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
                Locatie
              </div>
              <p className="mt-4 text-[14px] text-ink-soft">Nederland</p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-8 text-[13px] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Flowfield</span>
        </div>
      </Container>
    </footer>
  );
}
