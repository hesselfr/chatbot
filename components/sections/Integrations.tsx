import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";

const tools = [
  "Microsoft 365",
  "Outlook",
  "Teams",
  "SharePoint",
  "Excel",
  "Business Central",
  "AFAS",
  "Exact",
  "Salesforce",
  "HubSpot",
  "Google Workspace",
  "Slack",
];

export function Integrations() {
  return (
    <section className="border-t border-line bg-paper-dim/50 py-24 md:py-32">
      <Container>
        <Reveal className="max-w-2xl">
          <Kicker>Integraties</Kicker>
          <h2 className="mt-5 text-balance text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink md:text-[40px]">
            Gebouwd rondom de software die je al gebruikt.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <div className="grid grid-cols-2 gap-px overflow-hidden border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
            {tools.map((tool) => (
              <div
                key={tool}
                className="flex h-24 items-center justify-center bg-paper px-4 text-center"
              >
                <span className="font-mono text-[13px] tracking-[-0.01em] text-ink-soft">
                  {tool}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-8">
          <p className="max-w-[36rem] text-[14.5px] leading-[1.6] text-ink-faint">
            En vrijwel iedere applicatie met een API, database of andere
            betrouwbare koppelmogelijkheid.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
