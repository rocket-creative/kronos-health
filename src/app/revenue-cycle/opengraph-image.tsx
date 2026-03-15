import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kronos Health Revenue Cycle Management";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0A0A",
          backgroundImage: "linear-gradient(135deg, #0A0A0A 0%, #161616 100%)",
        }}
      >
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: "white",
            textTransform: "uppercase",
            letterSpacing: "0.02em",
            textAlign: "center",
          }}
        >
          Revenue Cycle
        </div>
        <div
          style={{
            fontSize: 24,
            color: "rgba(0,255,255,0.8)",
            marginTop: 12,
          }}
        >
          Kronos Health
        </div>
        <div
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.6)",
            marginTop: 16,
            textAlign: "center",
          }}
        >
          IDR Dispute Resolution & No Surprises Act
        </div>
        <div
          style={{
            width: 120,
            height: 3,
            backgroundColor: "#00FFFF",
            marginTop: 24,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
