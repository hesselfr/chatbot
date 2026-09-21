import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Hoe Flowfield omgaat met persoonsgegevens en bedrijfsgegevens bij het analyseren en automatiseren van processen.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-24 md:pt-40 md:pb-32">
        <Container>
          <div className="max-w-2xl">
            <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-ink-faint">
              Privacy
            </p>
            <h1 className="mt-5 text-balance text-[34px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink md:text-[42px]">
              Hoe we omgaan met je gegevens.
            </h1>
            <p className="mt-6 text-pretty text-[16px] leading-[1.65] text-ink-soft">
              Flowfield krijgt bij het analyseren en automatiseren van
              werkprocessen soms toegang tot bedrijfssystemen en de
              gegevens daarin, waaronder persoonsgegevens. Dit document
              legt in hoofdlijnen uit hoe we daarmee omgaan.
            </p>

            <div className="mt-14 flex flex-col gap-12">
              <section>
                <h2 className="text-[19px] font-semibold tracking-[-0.01em] text-ink">
                  Welke gegevens we verwerken
                </h2>
                <p className="mt-3 text-pretty text-[15px] leading-[1.7] text-ink-soft">
                  Tijdens een opdracht kan Flowfield toegang krijgen tot
                  bedrijfsgegevens die nodig zijn om een proces te
                  analyseren en te automatiseren, zoals e-mails, documenten
                  en gegevens in CRM- of ERP-systemen. Dit kan
                  persoonsgegevens van medewerkers, klanten of
                  leveranciers van de klant bevatten. Ook verwerken we
                  contactgegevens die je zelf aan ons verstrekt, zoals via
                  het contactformulier of per e-mail.
                </p>
              </section>

              <section>
                <h2 className="text-[19px] font-semibold tracking-[-0.01em] text-ink">
                  Waarom we deze gegevens verwerken
                </h2>
                <p className="mt-3 text-pretty text-[15px] leading-[1.7] text-ink-soft">
                  We gebruiken toegang tot gegevens uitsluitend om
                  processen in kaart te brengen, workflows te bouwen en
                  automatiseringen te testen en te onderhouden binnen de
                  scope van de afgesproken opdracht. Contactgegevens
                  gebruiken we om te reageren op je aanvraag.
                </p>
              </section>

              <section>
                <h2 className="text-[19px] font-semibold tracking-[-0.01em] text-ink">
                  Toegang en beveiliging
                </h2>
                <p className="mt-3 text-pretty text-[15px] leading-[1.7] text-ink-soft">
                  We werken op basis van least privilege: engineers krijgen
                  alleen toegang tot de systemen en gegevens die nodig zijn
                  voor het specifieke proces. Afspraken over toegang,
                  verwerking en beveiliging leggen we per opdracht
                  schriftelijk vast met de klant, onder meer in een
                  verwerkersovereenkomst waar van toepassing.
                </p>
              </section>

              <section>
                <h2 className="text-[19px] font-semibold tracking-[-0.01em] text-ink">
                  Bewaartermijn
                </h2>
                <p className="mt-3 text-pretty text-[15px] leading-[1.7] text-ink-soft">
                  We bewaren gegevens niet langer dan noodzakelijk voor het
                  doel van de opdracht of de wettelijke bewaarplicht die op
                  ons rust. Bij afronding van een opdracht maken we
                  afspraken over het verwijderen of overdragen van
                  toegang.
                </p>
              </section>

              <section>
                <h2 className="text-[19px] font-semibold tracking-[-0.01em] text-ink">
                  Delen met derden
                </h2>
                <p className="mt-3 text-pretty text-[15px] leading-[1.7] text-ink-soft">
                  We delen gegevens niet met derden, behalve waar dat nodig
                  is voor de uitvoering van de opdracht — bijvoorbeeld een
                  softwareleverancier waarmee wordt geïntegreerd — of waar
                  we daartoe wettelijk verplicht zijn.
                </p>
              </section>

              <section>
                <h2 className="text-[19px] font-semibold tracking-[-0.01em] text-ink">
                  Jouw rechten
                </h2>
                <p className="mt-3 text-pretty text-[15px] leading-[1.7] text-ink-soft">
                  Onder de AVG heb je recht op inzage, correctie en
                  verwijdering van je persoonsgegevens, en op bezwaar tegen
                  de verwerking ervan. Neem hiervoor contact met ons op via{" "}
                  <a
                    href="mailto:hallo@flowfield.nl"
                    className="text-ink underline decoration-line-strong underline-offset-4 hover:text-accent"
                  >
                    hallo@flowfield.nl
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-[19px] font-semibold tracking-[-0.01em] text-ink">
                  Contact
                </h2>
                <p className="mt-3 text-pretty text-[15px] leading-[1.7] text-ink-soft">
                  Vragen over dit privacybeleid? Mail naar{" "}
                  <a
                    href="mailto:hallo@flowfield.nl"
                    className="text-ink underline decoration-line-strong underline-offset-4 hover:text-accent"
                  >
                    hallo@flowfield.nl
                  </a>
                  . Ga terug naar de{" "}
                  <Link
                    href="/"
                    className="text-ink underline decoration-line-strong underline-offset-4 hover:text-accent"
                  >
                    homepage
                  </Link>
                  .
                </p>
              </section>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
