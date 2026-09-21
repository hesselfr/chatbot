import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";

const traits = [
  "50 tot 500 medewerkers",
  "Operationeel complex MKB- of mid-marketbedrijf",
  "Meerdere softwaresystemen naast elkaar",
  "Substantieel backoffice- of operationsteam",
  "Terugkerende administratieve workflows",
  "Wil AI toepassen, mist interne uitvoeringscapaciteit",
];

const sectors = [
  "Groothandel",
  "Technische dienstverlening",
  "Logistiek",
  "Industrie",
  "Zakelijke dienstverlening",
  "Verhuur",
  "Installatie & onderhoud",
  "Vastgoed",
];

export function WhoItsFor() {
  return (
    <section id="voor-wie" className="border-t border-line py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-14">
          <div>
            <Reveal>
              <Kicker>Voor wie</Kicker>
              <h2 className="mt-5 text-balance text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink md:text-[40px]">
                Voor bedrijven waar mensen nog systemen met elkaar
                verbinden.
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="mt-8">
              <ul className="flex flex-col gap-3.5">
                {traits.map((trait) => (
                  <li
                    key={trait}
                    className="flex items-start gap-3 border-t border-line pt-3.5 text-[15.5px] text-ink-soft first:border-t-0 first:pt-0"
                  >
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                    {trait}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="border border-line p-7 md:p-8">
              <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">
                Voorbeeldsectoren
              </div>
              <div className="flex flex-wrap gap-2.5">
                {sectors.map((sector) => (
                  <span
                    key={sector}
                    className="border border-line-strong px-3.5 py-2 text-[14px] text-ink"
                  >
                    {sector}
                  </span>
                ))}
              </div>
              <p className="mt-7 text-pretty text-[15px] leading-[1.6] text-ink-soft">
                De sector verschilt. Het patroon is vaak hetzelfde.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
