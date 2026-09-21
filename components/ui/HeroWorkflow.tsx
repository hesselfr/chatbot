"use client";

import { motion } from "motion/react";

const steps = [
  { label: "INBOX", note: "Aanvraag komt binnen" },
  { label: "AI ENGINEER", note: "Workflow herkent het proces" },
  { label: "UNDERSTAND", note: "Gegevens worden uitgelezen" },
  { label: "CHECK", note: "Informatie wordt gevalideerd" },
  { label: "ERP / CRM", note: "Record wordt klaargezet" },
  { label: "HUMAN APPROVAL", note: "Medewerker controleert" },
  { label: "DONE", note: "Workflow afgerond" },
];

const ROW = 66;
const DURATION = 8.4;
const segments = steps.length - 1;
const positions = steps.map((_, i) => i * ROW);
const times = steps.map((_, i) => i / segments);

export function HeroWorkflow() {
  return (
    <div className="relative w-full rounded-sm border border-line bg-paper/60 px-7 py-8 font-mono">
      <div className="mb-6 flex items-center justify-between">
        <span className="text-[11px] uppercase tracking-[0.18em] text-ink-faint">
          Voorbeeldproces
        </span>
        <span className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-accent">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
          </span>
          Live
        </span>
      </div>

      <div className="relative pl-5">
        <div
          className="absolute left-[3px] top-[6px] w-px bg-line-strong"
          style={{ height: positions[positions.length - 1] }}
          aria-hidden
        />

        <motion.div
          className="absolute left-0 top-0 size-[7px] rounded-full bg-accent shadow-[0_0_0_4px_var(--color-accent-soft)]"
          animate={{ y: positions }}
          transition={{
            duration: DURATION,
            times,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          aria-hidden
        />

        <ul className="flex flex-col">
          {steps.map((step, i) => (
            <li
              key={step.label}
              className="relative flex items-start gap-4"
              style={{ height: ROW }}
            >
              <motion.span
                className="mt-[3px] block size-[7px] shrink-0 -translate-x-[calc(1.25rem+3.5px)] rounded-full bg-line-strong"
                initial={false}
                animate={{
                  backgroundColor: [
                    "var(--color-line-strong)",
                    "var(--color-accent)",
                    "var(--color-line-strong)",
                  ],
                }}
                transition={{
                  duration: DURATION,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [
                    Math.max(0, i / segments - 0.05),
                    i / segments,
                    Math.min(1, i / segments + 0.05),
                  ],
                }}
                style={{ position: "absolute", left: 0 }}
                aria-hidden
              />
              <div>
                <div className="text-[12.5px] font-medium tracking-[0.06em] text-ink">
                  {step.label}
                </div>
                <div className="mt-0.5 font-sans text-[13px] tracking-normal text-ink-faint">
                  {step.note}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
