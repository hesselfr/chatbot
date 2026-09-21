import {
  Handshake,
  Workflow,
  Calculator,
  Headset,
  FileText,
  LineChart,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const categories = [
  {
    icon: Handshake,
    title: "Sales & offertes",
    tone: "accent",
    items: [
      "Aanvragen verwerken",
      "CRM bijwerken",
      "Offertes voorbereiden",
      "Follow-up automatiseren",
    ],
  },
  {
    icon: Workflow,
    title: "Operations",
    tone: "secondary",
    items: [
      "Orderverwerking",
      "Werkbonnen",
      "Planning",
      "Statusupdates",
    ],
  },
  {
    icon: Calculator,
    title: "Finance",
    tone: "accent",
    items: [
      "Factuurcontrole",
      "Documentverwerking",
      "Reconciliatie",
      "Rapportages",
    ],
  },
  {
    icon: Headset,
    title: "Customer service",
    tone: "secondary",
    items: [
      "E-mailclassificatie",
      "Informatie opzoeken",
      "Conceptantwoorden",
      "Tickets verwerken",
    ],
  },
  {
    icon: FileText,
    title: "Documenten",
    tone: "accent",
    items: [
      "PDF / Excel uitlezen",
      "Data structureren",
      "Documenten controleren",
      "Informatie koppelen",
    ],
  },
  {
    icon: LineChart,
    title: "Management",
    tone: "secondary",
    items: [
      "Periodieke rapportages",
      "KPI-updates",
      "Managementinformatie",
      "Uitzonderingen signaleren",
    ],
  },
] as const;

export function UseCases() {
  return (
    <section id="automatiseren" className="border-t border-line py-24 md:py-32">
      <Container>
        <Reveal className="max-w-2xl">
          <Kicker>Toepassingen</Kicker>
          <h2 className="mt-5 text-balance text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink md:text-[40px]">
            Waar we beginnen
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            const isSecondary = cat.tone === "secondary";
            return (
              <Reveal key={cat.title} delay={(i % 3) * 0.06} className="bg-paper p-7 md:p-8">
                <span
                  className={cn(
                    "flex size-10 items-center justify-center rounded-sm",
                    isSecondary ? "bg-accent-secondary-soft" : "bg-accent-soft"
                  )}
                >
                  <Icon
                    className={cn(
                      "size-5",
                      isSecondary ? "text-accent-secondary" : "text-accent"
                    )}
                    strokeWidth={1.75}
                  />
                </span>
                <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.01em] text-ink">
                  {cat.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="text-[14px] leading-[1.5] text-ink-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mt-10">
          <p className="max-w-[34rem] text-[14.5px] leading-[1.6] text-ink-faint">
            We vervangen je bestaande software niet. We zorgen dat de
            systemen beter samenwerken.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
