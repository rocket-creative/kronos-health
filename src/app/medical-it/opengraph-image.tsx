import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kronos Group Medical IT & Compliance";
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
          backgroundImage: "linear-gradient(135deg, #0A0A0A 0%, #130D1F 100%)",
        }}
      >
        <div
          style={{
            fontSize: 14,
            color: "rgba(124,58,237,0.8)",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            marginBottom: 16,
          }}
        >
          Shield of Compliance
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "white",
            textTransform: "uppercase",
            letterSpacing: "0.02em",
            textAlign: "center",
          }}
        >
          Medical IT
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 300,
            color: "rgba(255,255,255,0.4)",
            textTransform: "uppercase",
            letterSpacing: "0.02em",
            marginTop: 4,
          }}
        >
          &amp; Compliance
        </div>
        <div
          style={{
            width: 120,
            height: 3,
            backgroundColor: "#82738C",
            marginTop: 24,
            marginBottom: 20,
          }}
        />
        <div
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.6)",
            textAlign: "center",
          }}
        >
          HIPAA Governance · Security Auditing · Device Hardening
        </div>
        <div
          style={{
            fontSize: 18,
            color: "rgba(255,255,255,0.35)",
            marginTop: 12,
          }}
        >
          Kronos Group
        </div>
      </div>
    ),
    { ...size }
  );
}
