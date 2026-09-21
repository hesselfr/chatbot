import { ImageResponse } from "next/og";

export const alt = "Flowfield — AI engineers embedded in your business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F7F5F0",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 7,
              backgroundColor: "#15140F",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 30, fontWeight: 600, color: "#15140F", letterSpacing: -0.5 }}>
            Flowfield
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 600,
              color: "#15140F",
              lineHeight: 1.08,
              letterSpacing: -1.5,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Minder handmatig werk.</span>
            <span>Meer gedaan.</span>
          </div>
          <div style={{ fontSize: 26, color: "#55524A", display: "flex", maxWidth: 820 }}>
            AI-engineers embedded in je bedrijf, die repetitief werk vinden en automatiseren.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 8, height: 8, borderRadius: 8, backgroundColor: "#3FB79A", display: "flex" }} />
          <div style={{ fontSize: 20, color: "#55524A" }}>flowfield.nl</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
