import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";
import { SystemsDiagram } from "@/components/ui/SystemsDiagram";

const examples = [
  "Order uit een PDF overtypen in ERP",
  "Gegevens uit e-mails in CRM zetten",
  "Rapportages iedere week opnieuw samenstellen",
  "Offerteaanvragen handmatig verwerken",
  "Documenten controleren en classificeren",
  "Klanten handmatig opvolgen",
  "Werkbonnen en servicerapporten verwerken",
];

export function ProblemSection() {
  return (
    <section className="border-t border-line py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
          <div>
            <Reveal>
              <Kicker>Het probleem</Kicker>
              <h2 className="mt-5 text-balance text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink md:text-[40px]">
                Je bedrijf zit vol werk dat niemand zou moeten doen.
              </h2>
              <p className="mt-6 max-w-[32rem] text-pretty text-[16px] leading-[1.65] text-ink-soft">
                De meeste bedrijven hebben inmiddels moderne software. Toch
                besteden medewerkers elke week uren aan het overtypen,
                kopiëren en controleren van informatie tussen systemen die
                niet met elkaar praten.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-10 border border-line bg-paper-dim/60 p-6">
              <p className="text-pretty text-[16px] font-medium leading-[1.6] text-ink">
                Het probleem is meestal niet dat software ontbreekt. Het
                probleem zit tussen de systemen.
              </p>
            </Reveal>

            <Reveal delay={0.15} className="mt-10">
              <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {examples.map((example) => (
                  <li
                    key={example}
                    className="flex items-start gap-3 border-t border-line py-3 text-[14.5px] leading-[1.5] text-ink-soft first:border-t-0 sm:first:border-t"
                  >
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-ink-faint" />
                    {example}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="flex items-center">
            <SystemsDiagram />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
