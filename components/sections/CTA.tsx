import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-dark py-28 md:py-36">
      <div
        className="pointer-events-none absolute inset-0 grid-line opacity-[0.06] bg-[length:64px_100%]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] size-[520px] rounded-full bg-accent/20 blur-[140px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-[-6%] size-[420px] rounded-full bg-accent-secondary/15 blur-[130px]"
        aria-hidden
      />

      <Container className="relative">
        <div className="max-w-3xl">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-paper/45">
            Aan de slag
          </p>
          <h2 className="mt-6 text-balance text-[34px] font-semibold leading-[1.15] tracking-[-0.02em] text-paper sm:text-[42px] md:text-[48px]">
            Welke handmatige processen draaien morgen nog steeds in jouw
            bedrijf?
          </h2>
          <p className="mt-6 max-w-[32rem] text-pretty text-[17px] leading-[1.6] text-paper/65">
            Laat een Flowfield Engineer een keer meekijken.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="mailto:hallo@flowfield.nl" variant="dark">
              Plan een kennismaking
            </Button>
            <Button href="mailto:hallo@flowfield.nl" variant="ghost" className="text-paper hover:text-accent-bright">
              Neem contact op
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
