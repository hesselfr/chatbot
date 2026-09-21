"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Moeten we vooraf weten wat we willen automatiseren?",
    a: "Nee. Je hoeft vooraf niet te weten wat je wilt automatiseren. Een Flowfield Engineer loopt mee, observeert het werk en signaleert kansen die je zelf misschien niet als 'automatisering' zou herkennen.",
  },
  {
    q: "Vervangt Flowfield onze bestaande software?",
    a: "Nee. We bouwen bovenop en tussen de systemen die je al gebruikt, zoals je ERP, CRM en Microsoft 365. Het doel is dat die systemen beter samenwerken, niet dat ze vervangen worden.",
  },
  {
    q: "Is dit alleen geschikt voor grote bedrijven?",
    a: "Flowfield past het best bij bedrijven met 50 tot 500 medewerkers en meerdere systemen naast elkaar. Binnen die groep verschilt de sector sterk, maar het patroon van handmatig werk is vaak hetzelfde.",
  },
  {
    q: "Wat kan een AI Engineer automatiseren?",
    a: "Vooral terugkerend, regelgebaseerd werk: informatie overtypen, documenten controleren, e-mails classificeren, rapportages samenstellen en gegevens tussen systemen synchroniseren. Uitzonderingen blijven bij een medewerker.",
  },
  {
    q: "Hoe voorkomen jullie fouten?",
    a: "Elke workflow wordt getest voordat hij live gaat, met logging en controlepunten. Waar de impact van een fout groot is, bouwen we een menselijke goedkeuringsstap in.",
  },
  {
    q: "Kan een engineer toegang krijgen tot onze systemen?",
    a: "Ja, op basis van least privilege: alleen toegang tot wat nodig is voor het specifieke proces. Toegang en acties worden vastgelegd, zodat alles traceerbaar blijft.",
  },
  {
    q: "Hoe snel kan een eerste workflow live?",
    a: "Dat verschilt per proces, maar we richten ons bewust op een eerste workflow die overzichtelijk is, zodat je binnen enkele weken een werkende automatisering ziet, niet pas na maanden.",
  },
  {
    q: "Wat gebeurt er nadat een workflow is gebouwd?",
    a: "We meten of hij het verwachte werk uit handen neemt, vangen uitzonderingen af en verbeteren waar nodig. Daarna pakken we samen het volgende proces op.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-line py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <Reveal>
            <Kicker>Veelgestelde vragen</Kicker>
            <h2 className="mt-5 text-balance text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink md:text-[40px]">
              Vragen die we vaak krijgen.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="border-t border-line">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={faq.q} className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-[16px] font-medium tracking-[-0.01em] text-ink">
                      {faq.q}
                    </span>
                    <Plus
                      className={cn(
                        "size-4.5 shrink-0 text-ink-faint transition-transform duration-200",
                        isOpen && "rotate-45 text-accent"
                      )}
                      strokeWidth={1.75}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[38rem] pb-6 text-pretty text-[15px] leading-[1.65] text-ink-soft">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
