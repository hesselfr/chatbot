import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const processes = [
  { n: "01", name: "Orderverwerking uit e-mail", status: "live" },
  { n: "02", name: "Wekelijkse managementrapportage", status: "live" },
  { n: "03", name: "Factuurcontrole en reconciliatie", status: "building" },
  { n: "04", name: "Klantopvolging na offerte", status: "identified" },
] as const;

const statusLabel: Record<(typeof processes)[number]["status"], string> = {
  live: "Live",
  building: "In bouw",
  identified: "Geïdentificeerd",
};

export function StartSmall() {
  return (
    <section className="border-t border-line py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Kicker>Opschalen</Kicker>
            <h2 className="mt-5 text-balance text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink md:text-[40px]">
              Begin met één proces.
            </h2>
            <p className="mt-6 max-w-[30rem] text-pretty text-[16px] leading-[1.65] text-ink-soft">
              Je hebt geen groot AI-transformatieprogramma nodig. We zoeken
              eerst één proces dat vaak voorkomt, veel tijd kost en
              technisch overzichtelijk is.
            </p>
            <p className="mt-4 max-w-[30rem] text-pretty text-[16px] leading-[1.65] text-ink-soft">
              Dat proces automatiseren we. We meten het resultaat. Daarna
              pakken we het volgende.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="border border-line">
            {processes.map((p) => (
              <div
                key={p.n}
                className="flex items-center justify-between gap-4 border-b border-line px-6 py-5 last:border-b-0 md:px-8"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[12px] text-ink-faint">{p.n}</span>
                  <span className="text-[15px] text-ink">{p.name}</span>
                </div>
                <span
                  className={cn(
                    "flex shrink-0 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em]",
                    p.status === "live" && "text-accent",
                    p.status === "building" && "text-ink-soft",
                    p.status === "identified" && "text-ink-faint"
                  )}
                >
                  <span
                    className={cn(
                      "size-1.5 rounded-full",
                      p.status === "live" && "bg-accent",
                      p.status === "building" && "animate-pulse bg-ink-soft",
                      p.status === "identified" &&
                        "border border-ink-faint bg-transparent"
                    )}
                  />
                  {statusLabel[p.status]}
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
