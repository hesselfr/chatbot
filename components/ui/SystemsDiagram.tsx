const systems = ["Outlook", "Excel", "ERP", "CRM", "SharePoint", "PDF"];

function hexPoint(i: number, cx: number, cy: number, r: number) {
  const angle = (Math.PI / 180) * (i * 60 - 90);
  return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
}

const SIZE = 280;
const CENTER = SIZE / 2;
const RADIUS = 104;
const points = systems.map((_, i) => hexPoint(i, CENTER, CENTER, RADIUS));

// Manual state: information zig-zags between every system, no single owner.
const messyEdges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 0],
  [0, 2],
  [1, 4],
  [3, 5],
  [2, 5],
];

function Panel({
  title,
  caption,
  mode,
}: {
  title: string;
  caption: string;
  mode: "messy" | "clean";
}) {
  return (
    <div className="border border-line bg-paper p-6">
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="mx-auto w-full max-w-[260px]"
        aria-hidden
      >
        {mode === "messy" &&
          messyEdges.map(([a, b], idx) => (
            <line
              key={idx}
              x1={points[a].x}
              y1={points[a].y}
              x2={points[b].x}
              y2={points[b].y}
              stroke="var(--color-line-strong)"
              strokeWidth={1}
            />
          ))}

        {mode === "clean" &&
          points.map((p, i) => (
            <line
              key={i}
              x1={CENTER}
              y1={CENTER}
              x2={p.x}
              y2={p.y}
              stroke="var(--color-accent)"
              strokeWidth={1.25}
            />
          ))}

        {mode === "clean" && (
          <g>
            <rect
              x={CENTER - 30}
              y={CENTER - 15}
              width={60}
              height={30}
              rx={2}
              fill="var(--color-ink)"
            />
            <text
              x={CENTER}
              y={CENTER + 4}
              textAnchor="middle"
              fontSize={9}
              fontFamily="var(--font-mono)"
              fill="var(--color-paper)"
              letterSpacing={0.5}
            >
              FLOWFIELD
            </text>
          </g>
        )}

        {mode === "messy" && (
          <g>
            <circle
              cx={CENTER}
              cy={CENTER}
              r={17}
              fill="none"
              stroke="var(--color-line-strong)"
              strokeWidth={1}
              strokeDasharray="3 3"
            />
          </g>
        )}

        {points.map((p, i) => (
          <g key={systems[i]}>
            <rect
              x={p.x - 34}
              y={p.y - 12}
              width={68}
              height={24}
              rx={2}
              fill="var(--color-paper)"
              stroke="var(--color-line-strong)"
              strokeWidth={1}
            />
            <text
              x={p.x}
              y={p.y + 4}
              textAnchor="middle"
              fontSize={9.5}
              fontFamily="var(--font-mono)"
              fill="var(--color-ink-soft)"
            >
              {systems[i]}
            </text>
          </g>
        ))}
      </svg>

      <div className="mt-5 text-center">
        <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">
          {title}
        </div>
        <p className="mt-1.5 text-[13.5px] text-ink-soft">{caption}</p>
      </div>
    </div>
  );
}

export function SystemsDiagram() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <Panel
        title="Nu"
        caption="Medewerkers kopiëren informatie handmatig van systeem naar systeem."
        mode="messy"
      />
      <Panel
        title="Met Flowfield"
        caption="Eén automatiseringslaag verbindt de systemen met elkaar."
        mode="clean"
      />
    </div>
  );
}
