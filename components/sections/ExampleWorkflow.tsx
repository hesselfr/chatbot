"use client";

import { useState } from "react";
import {
  Mail,
  ScanSearch,
  UserSearch,
  ShieldCheck,
  Database,
  UserCheck,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type Step = {
  icon: LucideIcon;
  label: string;
  detail: string;
  actor: "ai" | "human";
};

const steps: Step[] = [
  {
    icon: Mail,
    label: "Klant stuurt aanvraag naar Outlook",
    detail:
      "Een e-mail met een aanvraag komt binnen zoals altijd, inclusief bijlagen zoals PDF's of Excel-bestanden.",
    actor: "ai",
  },
  {
    icon: ScanSearch,
    label: "AI leest e-mail en bijlagen",
    detail:
      "De workflow leest de inhoud van het bericht en de bijlagen, en zet ongestructureerde tekst om in bruikbare gegevens.",
    actor: "ai",
  },
  {
    icon: UserSearch,
    label: "Klant en aanvraag worden herkend",
    detail:
      "De juiste klant, het juiste contract en het type aanvraag worden automatisch herkend en gekoppeld.",
    actor: "ai",
  },
  {
    icon: ShieldCheck,
    label: "Informatie wordt gecontroleerd",
    detail:
      "Gegevens worden getoetst aan bestaande records: klopt het artikel, de hoeveelheid, het adres, de prijsafspraak.",
    actor: "ai",
  },
  {
    icon: Database,
    label: "Concept wordt aangemaakt in ERP / CRM",
    detail:
      "Een conceptorder, -offerte of -mutatie wordt klaargezet in het bestaande systeem, klaar voor gebruik.",
    actor: "ai",
  },
  {
    icon: UserCheck,
    label: "Medewerker controleert uitzonderingen",
    detail:
      "Twijfelgevallen en afwijkingen gaan naar een medewerker. Standaardgevallen hoeven niet handmatig bekeken te worden.",
    actor: "human",
  },
  {
    icon: CheckCircle2,
    label: "Workflow wordt afgerond",
    detail:
      "Het record is compleet, gecontroleerd en klaar in het systeem — zonder dat iemand iets heeft overgetypt.",
    actor: "ai",
  },
];

export function ExampleWorkflow() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section id="voorbeeld" className="border-t border-line py-24 md:py-32">
      <Container>
        <Reveal className="max-w-2xl">
          <Kicker>Een voorbeeld</Kicker>
          <h2 className="mt-5 text-balance text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink md:text-[40px]">
            Van aanvraag naar actie. Zonder overtypen.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <div className="border border-line">
            <ol className="grid grid-cols-2 gap-px bg-line sm:grid-cols-4 lg:grid-cols-7">
              {steps.map((s, i) => {
                const Icon = s.icon;
                const isActive = i === active;
                const isHuman = s.actor === "human";
                return (
                  <li key={s.label} className="contents">
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      aria-pressed={isActive}
                      className={cn(
                        "flex flex-col items-start gap-3 p-5 text-left transition-colors duration-150",
                        isActive ? "bg-ink" : "bg-paper hover:bg-paper-dim"
                      )}
                    >
                      <span
                        className={cn(
                          "flex size-9 items-center justify-center rounded-full border",
                          isActive
                            ? isHuman
                              ? "border-accent-secondary-bright bg-accent-secondary/20"
                              : "border-accent-bright bg-accent/20"
                            : "border-line-strong bg-paper"
                        )}
                      >
                        <Icon
                          className={cn(
                            "size-4",
                            isActive
                              ? isHuman
                                ? "text-accent-secondary-bright"
                                : "text-accent-bright"
                              : "text-ink-soft"
                          )}
                          strokeWidth={1.75}
                        />
                      </span>
                      <span
                        className={cn(
                          "font-mono text-[11px] tracking-[0.08em]",
                          isActive ? "text-paper/45" : "text-ink-faint"
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "text-[13.5px] font-medium leading-[1.35]",
                          isActive ? "text-paper" : "text-ink"
                        )}
                      >
                        {s.label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>

            <div className="flex items-start gap-4 border-t border-line bg-paper-dim/50 p-6 md:p-7">
              <span
                className={cn(
                  "mt-0.5 shrink-0 rounded-full px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.1em]",
                  step.actor === "human"
                    ? "bg-accent-secondary-soft text-accent-secondary"
                    : "bg-ink text-paper"
                )}
              >
                {step.actor === "human" ? "Mens" : "AI"}
              </span>
              <p className="text-pretty text-[15px] leading-[1.6] text-ink-soft">
                {step.detail}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-8">
          <p className="text-[15px] font-medium text-ink">
            AI doet het voorspelbare werk. Mensen houden controle waar dat
            nodig is.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
