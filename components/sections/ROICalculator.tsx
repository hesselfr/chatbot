"use client";

import { useId, useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";

const ADDRESSABLE_SHARE = 0.6;

function formatNumber(n: number) {
  return new Intl.NumberFormat("nl-NL", { maximumFractionDigits: 0 }).format(n);
}

function formatCurrency(n: number) {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);
}

type SliderProps = {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  suffix: string;
};

function Slider({ label, value, onChange, min, max, step, suffix }: SliderProps) {
  const id = useId();
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-[14.5px] text-ink-soft">
          {label}
        </label>
        <span className="font-mono text-[15px] font-medium text-ink">
          {formatNumber(value)}
          <span className="ml-1 text-ink-faint">{suffix}</span>
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-1 w-full cursor-pointer appearance-none rounded-full bg-line-strong accent-accent"
      />
    </div>
  );
}

export function ROICalculator() {
  const [frequency, setFrequency] = useState(40);
  const [minutes, setMinutes] = useState(12);
  const [employees, setEmployees] = useState(4);
  const [hourlyCost, setHourlyCost] = useState(45);

  const results = useMemo(() => {
    const hoursPerMonth = (frequency * minutes * employees) / 60;
    const hoursPerYear = hoursPerMonth * 12;
    const costPerYear = hoursPerYear * hourlyCost;
    const addressableHours = hoursPerYear * ADDRESSABLE_SHARE;
    return { hoursPerMonth, hoursPerYear, costPerYear, addressableHours };
  }, [frequency, minutes, employees, hourlyCost]);

  return (
    <section className="border-t border-line py-24 md:py-32">
      <Container>
        <Reveal className="max-w-2xl">
          <Kicker>Reken mee</Kicker>
          <h2 className="mt-5 text-balance text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink md:text-[40px]">
            Wat kost dit ene proces je nu al?
          </h2>
          <p className="mt-5 text-pretty text-[16px] leading-[1.65] text-ink-soft">
            Vul een terugkerend proces in en zie direct de tijd en kosten
            die ermee gemoeid zijn.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 grid grid-cols-1 border border-line lg:grid-cols-2">
          <div className="flex flex-col gap-8 p-7 md:p-9">
            <Slider
              label="Aantal keer dat het proces per maand voorkomt"
              value={frequency}
              onChange={setFrequency}
              min={1}
              max={400}
              step={1}
              suffix="× / mnd"
            />
            <Slider
              label="Minuten handmatig werk per keer"
              value={minutes}
              onChange={setMinutes}
              min={1}
              max={90}
              step={1}
              suffix="min"
            />
            <Slider
              label="Aantal medewerkers dat dit werk doet"
              value={employees}
              onChange={setEmployees}
              min={1}
              max={40}
              step={1}
              suffix="pers."
            />
            <Slider
              label="Indicatieve kosten per uur"
              value={hourlyCost}
              onChange={setHourlyCost}
              min={20}
              max={120}
              step={5}
              suffix="€ / uur"
            />
          </div>

          <div className="flex flex-col justify-between border-t border-line bg-ink p-7 text-paper md:p-9 lg:border-l lg:border-t-0">
            <div className="grid grid-cols-2 gap-x-6 gap-y-8">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-paper/45">
                  Uren per maand
                </div>
                <div className="mt-2 text-[28px] font-semibold tracking-[-0.02em]">
                  {formatNumber(results.hoursPerMonth)}
                </div>
              </div>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-paper/45">
                  Uren per jaar
                </div>
                <div className="mt-2 text-[28px] font-semibold tracking-[-0.02em]">
                  {formatNumber(results.hoursPerYear)}
                </div>
              </div>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-paper/45">
                  Indicatieve arbeidskosten / jaar
                </div>
                <div className="mt-2 text-[28px] font-semibold tracking-[-0.02em]">
                  {formatCurrency(results.costPerYear)}
                </div>
              </div>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent-bright">
                  Potentieel te automatiseren
                </div>
                <div className="mt-2 text-[28px] font-semibold tracking-[-0.02em] text-accent-bright">
                  {formatNumber(results.addressableHours)} uur
                </div>
              </div>
            </div>

            <p className="mt-10 text-[13px] leading-[1.55] text-paper/45">
              Indicatieve berekening. Werkelijke automatiseringspotentie
              verschilt per proces.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
