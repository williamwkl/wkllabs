import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "WKL Labs — We build small, serious software"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0c0c0e",
          backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 2px, transparent 2px)",
          backgroundSize: "40px 40px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "28px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: 26,
              color: "#9a9aa4",
              letterSpacing: "2px",
            }}
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 5l4 14 5-10 5 10 4-14"
                stroke="#e8e8ec"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            wkl·labs
          </div>

          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              color: "#e8e8ec",
              textAlign: "center",
              letterSpacing: "-2px",
              lineHeight: 1.1,
              maxWidth: "900px",
            }}
          >
            We build small, serious software.
          </div>

          <div style={{ display: "flex", gap: "16px", fontSize: 22 }}>
            <span style={{ color: "#f0956e" }}>Nabbee</span>
            <span style={{ color: "#3a3a44" }}>·</span>
            <span style={{ color: "#b9a4f2" }}>Spell Collector</span>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 18,
            color: "#7a7a84",
            letterSpacing: "2px",
          }}
        >
          wkllabs.com
        </div>
      </div>
    ),
    { ...size }
  )
}
