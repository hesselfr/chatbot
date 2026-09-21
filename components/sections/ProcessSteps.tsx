import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    n: "01",
    title: "Meelopen",
    body: "Een Flowfield Engineer werkt met je team mee en brengt terugkerend handmatig werk in kaart.",
  },
  {
    n: "02",
    title: "Prioriteren",
    body: "We beoordelen processen op tijdsbesparing, frequentie, foutgevoeligheid en technische haalbaarheid.",
  },
  {
    n: "03",
    title: "Bouwen",
    body: "De engineer bouwt de automatisering direct in de bestaande softwareomgeving.",
  },
  {
    n: "04",
    title: "Verbeteren",
    body: "We meten wat werkt, vangen uitzonderingen af en automatiseren stap voor stap verder.",
  },
];

export function ProcessSteps() {
  return (
    <section id="werkwijze" className="border-t border-line py-24 md:py-32">
      <Container>
        <Reveal className="max-w-2xl">
          <Kicker>Werkwijze</Kicker>
          <h2 className="mt-5 text-balance text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink md:text-[40px]">
            Wij beginnen bij het werk. Niet bij de technologie.
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div
            className="absolute left-0 right-0 top-[13px] hidden h-px bg-line-strong md:block"
            aria-hidden
          />
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.08}>
                <div className="relative">
                  <div className="relative z-10 mb-6 flex size-[27px] items-center justify-center rounded-full border border-ink bg-paper">
                    <span className="size-1.5 rounded-full bg-accent" />
                  </div>
                  <div className="font-mono text-[12px] tracking-[0.1em] text-ink-faint">
                    {step.n}
                  </div>
                  <h3 className="mt-2 text-[19px] font-semibold tracking-[-0.01em] text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-pretty text-[14.5px] leading-[1.6] text-ink-soft">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
