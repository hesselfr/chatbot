import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";

const consultancy = ["Analyse", "Workshops", "Requirements", "Presentatie", "Overdracht", "Implementatie later"];
const flowfield = ["Meelopen", "Probleem vinden", "Prototype bouwen", "Testen met medewerker", "Live zetten", "Volgende proces"];

export function EngineerComparison() {
  return (
    <section className="border-t border-line bg-paper-dim/50 py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-14">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <Kicker>De aanpak</Kicker>
            <h2 className="mt-5 text-balance text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink md:text-[40px]">
              Geen externe consultant.
              <br />
              Een technische bouwer in je team.
            </h2>
            <p className="mt-6 max-w-[30rem] text-pretty text-[16px] leading-[1.65] text-ink-soft">
              Een Flowfield Engineer zit niet wekenlang requirements te
              schrijven. Hij of zij werkt naast de mensen die het proces
              iedere dag uitvoeren.
            </p>
            <p className="mt-4 max-w-[30rem] text-pretty text-[16px] leading-[1.65] text-ink-soft">
              Daardoor zien we automatiseringskansen die vanaf de buitenkant
              moeilijk zichtbaar zijn.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 divide-y divide-line border border-line sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              <div className="p-7 md:p-8">
                <div className="mb-6 font-mono text-[11.5px] uppercase tracking-[0.14em] text-ink-faint">
                  Traditionele consultancy
                </div>
                <ul className="flex flex-col gap-4">
                  {consultancy.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[15px] text-ink-faint">
                      <X className="size-4 shrink-0 text-ink-faint/70" strokeWidth={1.75} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-ink p-7 md:p-8">
                <div className="mb-6 font-mono text-[11.5px] uppercase tracking-[0.14em] text-paper/50">
                  Flowfield
                </div>
                <ul className="flex flex-col gap-4">
                  {flowfield.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[15px] text-paper">
                      <Check className="size-4 shrink-0 text-accent-bright" strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
