import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "WKL Labs: custom software for growing businesses"
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
              letterSpacing: "0px",
            }}
          >
            <svg width="46" height="36" viewBox="0 0 800 626">
              <polygon fill="#e0dac6" points="38,145 225,35 225,470 38,588" />
              <polygon fill="#bdbbae" points="225,372 405,262 268,456 225,480" />
              <polygon fill="#e0dac6" points="403,262 762,480 578,590 403,483" />
              <polygon fill="#dc8034" points="582,143 765,36 765,258 582,364" />
            </svg>
            WKL Labs
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
            Custom software for growing businesses.
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
