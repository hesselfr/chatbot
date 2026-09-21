import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";
import { EngineerNetwork } from "@/components/ui/EngineerNetwork";

const skills = [
  "Workflowanalyse",
  "API's en integraties",
  "AI-agents",
  "Automatiseringsplatforms",
  "Python",
  "Datahandling",
  "Security",
  "Testen",
  "Human-in-the-loop workflows",
];

const support = [
  "Senior technische review",
  "Vaste implementatiestandaarden",
  "Gedeelde technische patronen en connectors — nooit klantdata",
  "Security- en kwaliteitscontroles",
];

export function Engineers() {
  return (
    <section id="engineers" className="border-t border-line py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-14">
          <div>
            <Reveal>
              <Kicker>AI Engineers</Kicker>
              <h2 className="mt-5 text-balance text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink md:text-[40px]">
                Technisch sterk. Praktisch opgeleid.
              </h2>
              <p className="mt-6 max-w-[30rem] text-pretty text-[16px] leading-[1.65] text-ink-soft">
                Flowfield selecteert sterke technische talenten uit Computer
                Science, AI en software engineering. Ze worden specifiek
                opgeleid om processen te doorgronden en te automatiseren —
                niet om alleen te adviseren.
              </p>
            </Reveal>

            <Reveal delay={0.08} className="mt-9">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-line px-3 py-1.5 font-mono text-[12px] text-ink-soft"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12} className="mt-10">
              <p className="text-[14.5px] font-medium uppercase tracking-[0.08em] text-ink-faint">
                Iedere engineer wordt ondersteund door
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {support.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-t border-line pt-3 text-[15px] text-ink-soft first:border-t-0 first:pt-0"
                  >
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.16} className="mt-10 border border-line bg-paper-dim/60 p-6">
              <p className="text-pretty text-[16px] font-medium leading-[1.6] text-ink">
                Je krijgt niet alleen één engineer. Je krijgt de kennis van
                het hele Flowfield-netwerk — nooit de data van andere
                klanten.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="flex items-center">
            <EngineerNetwork />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
