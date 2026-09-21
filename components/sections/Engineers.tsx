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
  "Gedeelde implementatiestandaarden",
  "Herbruikbare workflow-componenten",
  "Centrale kennis uit eerdere implementaties",
  "Security- en kwaliteitscontroles",
];

const selection = [
  {
    n: "01",
    title: "Technische screening",
    body: "Beoordeling op programmeervaardigheid, systeemdenken en probleemoplossend vermogen.",
  },
  {
    n: "02",
    title: "Praktijkcase",
    body: "Een realistische automatiseringscase, beoordeeld door een senior engineer van Flowfield.",
  },
  {
    n: "03",
    title: "Onboarding",
    body: "Training in workflow-analyse, integraties, security en het Flowfield-playbook.",
  },
  {
    n: "04",
    title: "Meelopen met een senior",
    body: "De eerste klantopdrachten altijd samen met een ervaren engineer, niet alleen.",
  },
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
              <p className="mt-4 max-w-[30rem] text-pretty text-[16px] leading-[1.65] text-ink-soft">
                Voordat een engineer alleen bij een klant werkt, heeft hij of
                zij minstens één praktijkcase en een periode meelopen met een
                senior engineer achter de rug.
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
                het hele Flowfield-netwerk.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="flex items-center">
            <EngineerNetwork />
          </Reveal>
        </div>

        <div className="mt-20 border-t border-line pt-16 md:mt-24 md:pt-20">
          <Reveal>
            <p className="text-[14.5px] font-medium uppercase tracking-[0.08em] text-ink-faint">
              Van kandidaat tot Flowfield Engineer
            </p>
          </Reveal>

          <div className="relative mt-10">
            <div
              className="absolute left-0 right-0 top-[13px] hidden h-px bg-line-strong md:block"
              aria-hidden
            />
            <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
              {selection.map((step, i) => (
                <Reveal key={step.n} delay={i * 0.06}>
                  <div className="relative">
                    <div className="relative z-10 mb-6 flex size-[27px] items-center justify-center rounded-full border border-ink bg-paper">
                      <span className="size-1.5 rounded-full bg-accent-secondary" />
                    </div>
                    <div className="font-mono text-[12px] tracking-[0.1em] text-ink-faint">
                      {step.n}
                    </div>
                    <h3 className="mt-2 text-[16.5px] font-semibold tracking-[-0.01em] text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-pretty text-[14px] leading-[1.6] text-ink-soft">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
