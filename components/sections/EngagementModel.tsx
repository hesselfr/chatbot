import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const models = [
  {
    n: "01",
    name: "AI Workflow Scan",
    body: "Breng de grootste automatiseringskansen in kaart.",
    detail:
      "We lopen mee met je team en leveren een concreet overzicht van processen met de meeste potentie.",
  },
  {
    n: "02",
    name: "Deployment Sprint",
    body: "Een Flowfield Engineer bouwt en implementeert de eerste workflows.",
    detail:
      "Van prioritering tot een werkende automatisering, live in je bestaande systemen.",
  },
  {
    n: "03",
    name: "Embedded Engineer",
    body: "Structurele technische capaciteit om processen te blijven automatiseren.",
    detail:
      "Een Flowfield Engineer die doorlopend nieuwe kansen vindt, bouwt en onderhoudt.",
  },
];

export function EngagementModel() {
  return (
    <section className="border-t border-line bg-paper-dim/50 py-24 md:py-32">
      <Container>
        <Reveal className="max-w-2xl">
          <Kicker>Samenwerken</Kicker>
          <h2 className="mt-5 text-balance text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink md:text-[40px]">
            Van eerste workflow naar structurele AI-capaciteit.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
          {models.map((model, i) => (
            <Reveal
              key={model.n}
              delay={i * 0.08}
              className="flex flex-col bg-paper p-7 md:p-8"
            >
              <span className="font-mono text-[12px] text-ink-faint">
                {model.n}
              </span>
              <h3 className="mt-4 text-[19px] font-semibold tracking-[-0.01em] text-ink">
                {model.name}
              </h3>
              <p className="mt-3 text-[15px] font-medium leading-[1.5] text-ink">
                {model.body}
              </p>
              <p className="mt-3 text-pretty text-[14.5px] leading-[1.6] text-ink-soft">
                {model.detail}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-12">
          <Button href="#contact" variant="primary">
            Bespreek waar we kunnen beginnen
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
