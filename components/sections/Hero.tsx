import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroWorkflow } from "@/components/ui/HeroWorkflow";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10 grid-line bg-[length:64px_100%]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-gradient-to-b from-accent-soft/60 via-transparent to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-24 right-[-8%] -z-10 size-[420px] rounded-full bg-accent-secondary-soft/70 blur-[110px]"
        aria-hidden
      />

      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div>
            <p className="mb-7 font-mono text-[12px] uppercase tracking-[0.18em] text-ink-faint">
              AI engineers embedded in your business
            </p>

            <h1 className="text-balance text-[42px] font-semibold leading-[1.06] tracking-[-0.025em] text-ink sm:text-[54px] md:text-[64px]">
              Minder handmatig werk.
              <br />
              Meer gedaan.
            </h1>

            <p className="mt-7 max-w-[34rem] text-pretty text-[17px] leading-[1.6] text-ink-soft md:text-[18.5px]">
              Onze AI-engineers werken naast je team, vinden repetitieve
              processen en automatiseren ze in de systemen die je al
              gebruikt.
            </p>

            <p className="mt-4 max-w-[34rem] text-pretty text-[15.5px] leading-[1.65] text-ink-faint">
              Geen maandenlange implementatie. Geen adviesrapport dat in een
              la verdwijnt. We zoeken, bouwen en zetten werkende
              automatiseringen live.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="#contact" variant="primary">
                Plan een kennismaking
              </Button>
              <Button href="#voorbeeld" variant="secondary" icon={false}>
                Bekijk hoe het werkt
              </Button>
            </div>

            <p className="mt-9 text-[13.5px] text-ink-faint">
              Voor Nederlandse MKB- en mid-marketbedrijven.
            </p>
          </div>

          <HeroWorkflow />
        </div>
      </Container>
    </section>
  );
}
