import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "WKL Labs — Tools built for modern businesses"
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
          backgroundColor: "#070d1a",
          position: "relative",
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(#1e3a5f 1px, transparent 1px), linear-gradient(90deg, #1e3a5f 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.3,
          }}
        />
        {/* Blue glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "500px",
            background: "radial-gradient(ellipse at center, rgba(59,130,246,0.25) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            position: "relative",
          }}
        >
          {/* Wordmark */}
          <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
            <span style={{ fontSize: 40, fontWeight: 800, color: "white", letterSpacing: "-1px" }}>
              WKL
            </span>
            <span style={{ fontSize: 40, fontWeight: 800, color: "#475569", letterSpacing: "-1px" }}>
              Labs
            </span>
          </div>

          {/* Divider */}
          <div style={{ width: "48px", height: "2px", backgroundColor: "#1e3a5f" }} />

          {/* Headline */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "white",
              textAlign: "center",
              letterSpacing: "-2px",
              lineHeight: 1.1,
              maxWidth: "900px",
            }}
          >
            Tools built for{" "}
            <span style={{ color: "#475569" }}>modern</span>{" "}
            businesses
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 24,
              color: "#64748b",
              textAlign: "center",
              maxWidth: "700px",
              lineHeight: 1.5,
            }}
          >
            BookIt · MenuQR · More coming
          </div>
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 18,
            color: "#334155",
            letterSpacing: "2px",
          }}
        >
          wklapp.com
        </div>
      </div>
    ),
    { ...size }
  )
}
