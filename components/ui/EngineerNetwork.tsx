const layers = ["Patterns", "Connectors", "Playbooks", "Security", "Best practices", "Integrations"];

export function EngineerNetwork() {
  return (
    <div className="border border-line bg-paper p-7 md:p-9">
      <div className="flex flex-col items-center">
        <div className="rounded-full border border-ink bg-ink px-5 py-2.5">
          <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-paper">
            Engineer
          </span>
        </div>

        <div className="h-8 w-px bg-line-strong" aria-hidden />

        <div className="border border-accent bg-accent-soft px-6 py-3 text-center">
          <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-accent">
            Flowfield Knowledge Layer
          </span>
        </div>

        <div className="relative mt-0 h-8 w-full max-w-[520px]" aria-hidden>
          <svg viewBox="0 0 520 32" className="h-full w-full" preserveAspectRatio="none">
            {layers.map((_, i) => {
              const x = (520 / (layers.length - 1)) * i;
              return (
                <path
                  key={i}
                  d={`M 260 0 L ${x} 32`}
                  stroke="var(--color-line-strong)"
                  strokeWidth={1}
                  fill="none"
                />
              );
            })}
          </svg>
        </div>

        <div className="grid w-full grid-cols-2 gap-2.5 sm:grid-cols-3">
          {layers.map((layer) => (
            <div
              key={layer}
              className="border border-line bg-paper-dim/60 px-3 py-2.5 text-center"
            >
              <span className="font-mono text-[11px] tracking-[0.02em] text-ink-soft">
                {layer}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
