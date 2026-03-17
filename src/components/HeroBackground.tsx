"use client";

import dynamic from "next/dynamic";

const NeuralNetwork = dynamic(
  () => import("@/components/animations/heroes/NeuralNetwork").then(mod => mod.NeuralNetwork),
  { ssr: false }
);

const Waveform = dynamic(
  () => import("@/components/animations/heroes/Waveform").then(mod => mod.Waveform),
  { ssr: false }
);

const DataGrid = dynamic(
  () => import("@/components/animations/heroes/DataGrid").then(mod => mod.DataGrid),
  { ssr: false }
);

const RadialPulse = dynamic(
  () => import("@/components/animations/heroes/RadialPulse").then(mod => mod.RadialPulse),
  { ssr: false }
);

const Molecular = dynamic(
  () => import("@/components/animations/heroes/Molecular").then(mod => mod.Molecular),
  { ssr: false }
);

const ConcentricRings = dynamic(
  () => import("@/components/animations/heroes/ConcentricRings").then(mod => mod.ConcentricRings),
  { ssr: false }
);

const BrainNetwork = dynamic(
  () => import("@/components/animations/heroes/BrainNetwork").then(mod => mod.BrainNetwork),
  { ssr: false }
);

const DNAHelix = dynamic(
  () => import("@/components/animations/heroes/DNAHelix").then(mod => mod.DNAHelix),
  { ssr: false }
);

const EnvelopeOutline = dynamic(
  () => import("@/components/animations/heroes/EnvelopeOutline").then(mod => mod.EnvelopeOutline),
  { ssr: false }
);

type AnimationType = "neural" | "waveform" | "grid" | "pulse" | "molecular" | "rings" | "brain" | "dna" | "envelope";

interface HeroBackgroundProps {
  type: AnimationType;
  color?: string;
  className?: string;
}

export function HeroBackground({ type, color, className = "" }: HeroBackgroundProps) {
  const animations: Record<AnimationType, React.ReactNode> = {
    neural: <NeuralNetwork color={color || "130, 115, 140"} />,
    waveform: <Waveform color={color || "196, 181, 207"} />,
    grid: <DataGrid color={color || "130, 115, 140"} />,
    pulse: <RadialPulse color={color || "130, 115, 140"} />,
    molecular: <Molecular color={color || "130, 115, 140"} />,
    rings: <ConcentricRings color={color || "130, 115, 140"} />,
    brain: <BrainNetwork color={color || "130, 115, 140"} />,
    dna: <DNAHelix color={color || "130, 115, 140"} />,
    envelope: <EnvelopeOutline color={color || "130, 115, 140"} />,
  };

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {animations[type]}
    </div>
  );
}
