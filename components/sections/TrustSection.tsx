import {
  UserCheck,
  KeyRound,
  ScrollText,
  FlaskConical,
  Lock,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";

const points = [
  {
    icon: UserCheck,
    title: "Menselijke goedkeuring",
    body: "Waar nodig blijft een medewerker de laatste stap controleren voordat iets doorgaat.",
  },
  {
    icon: KeyRound,
    title: "Least-privilege toegang",
    body: "Een engineer krijgt alleen toegang tot wat nodig is voor het proces, niet meer.",
  },
  {
    icon: ScrollText,
    title: "Logging en auditability",
    body: "Elke automatisering legt vast wat er is gebeurd, zodat het traceerbaar blijft.",
  },
  {
    icon: FlaskConical,
    title: "Testen voor productie",
    body: "Nieuwe workflows worden getest en meegelopen voordat ze live gaan.",
  },
  {
    icon: Lock,
    title: "AVG-bewuste implementatie",
    body: "We houden rekening met gegevensbescherming bij het ontwerpen van elke workflow.",
  },
  {
    icon: ShieldCheck,
    title: "Jij houdt de controle",
    body: "Je bedrijf blijft eigenaar van systemen en data. Wij bouwen erin, niet eromheen.",
  },
];

export function TrustSection() {
  return (
    <section className="border-t border-line bg-paper-dim/50 py-24 md:py-32">
      <Container>
        <Reveal className="max-w-2xl">
          <Kicker>Controle</Kicker>
          <h2 className="mt-5 text-balance text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink md:text-[40px]">
            Automatiseren zonder de controle kwijt te raken.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point, i) => {
            const Icon = point.icon;
            return (
              <Reveal key={point.title} delay={(i % 3) * 0.06}>
                <Icon className="size-5 text-accent" strokeWidth={1.75} />
                <h3 className="mt-4 text-[16.5px] font-semibold tracking-[-0.01em] text-ink">
                  {point.title}
                </h3>
                <p className="mt-2 text-pretty text-[14.5px] leading-[1.6] text-ink-soft">
                  {point.body}
                </p>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15} className="mt-14 border border-line bg-paper p-6">
          <p className="text-pretty text-[16px] font-medium leading-[1.6] text-ink">
            Autonoom waar het kan. Menselijke controle waar het moet.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
