"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Atom {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  radius: number;
  connections: number[];
}

interface MolecularProps {
  className?: string;
  atomCount?: number;
  color?: string;
}

export function Molecular({ 
  className = "", 
  atomCount = 20,
  color = "0, 255, 209" // kronos-cyan RGB
}: MolecularProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const rotationRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const atomsRef = useRef<Atom[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const spread = 200;
    atomsRef.current = Array.from({ length: atomCount }, (_, i) => {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = spread * (0.5 + Math.random() * 0.5);
      
      return {
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi),
        baseX: r * Math.sin(phi) * Math.cos(theta),
        baseY: r * Math.sin(phi) * Math.sin(theta),
        baseZ: r * Math.cos(phi),
        radius: 4 + Math.random() * 4,
        connections: [],
      };
    });

    atomsRef.current.forEach((atom, i) => {
      const distances: { index: number; dist: number }[] = [];
      
      atomsRef.current.forEach((other, j) => {
        if (i !== j) {
          const dx = atom.baseX - other.baseX;
          const dy = atom.baseY - other.baseY;
          const dz = atom.baseZ - other.baseZ;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          distances.push({ index: j, dist });
        }
      });
      
      distances.sort((a, b) => a.dist - b.dist);
      atom.connections = distances.slice(0, 2 + Math.floor(Math.random() * 2)).map(d => d.index);
    });

    gsap.to(rotationRef.current, {
      x: Math.PI * 2,
      y: Math.PI * 2,
      duration: 30,
      repeat: -1,
      ease: "none",
    });

    const rotatePoint = (x: number, y: number, z: number, rx: number, ry: number) => {
      let newY = y * Math.cos(rx) - z * Math.sin(rx);
      let newZ = y * Math.sin(rx) + z * Math.cos(rx);
      y = newY;
      z = newZ;

      const newX = x * Math.cos(ry) + z * Math.sin(ry);
      newZ = -x * Math.sin(ry) + z * Math.cos(ry);
      
      return { x: newX, y, z: newZ };
    };

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const centerX = rect.width * 0.5;
      const centerY = rect.height * 0.5;
      const rx = rotationRef.current.x;
      const ry = rotationRef.current.y;

      const projectedAtoms = atomsRef.current.map((atom, i) => {
        const rotated = rotatePoint(atom.baseX, atom.baseY, atom.baseZ, rx * 0.3, ry);
        const scale = 400 / (400 + rotated.z);
        
        return {
          index: i,
          x: centerX + rotated.x * scale,
          y: centerY + rotated.y * scale,
          z: rotated.z,
          scale,
          radius: atom.radius * scale,
          connections: atom.connections,
        };
      });

      projectedAtoms.sort((a, b) => a.z - b.z);

      projectedAtoms.forEach((atom) => {
        atom.connections.forEach((connIndex) => {
          const other = projectedAtoms.find(a => a.index === connIndex);
          if (other && atom.index < connIndex) {
            const opacity = ((atom.scale + other.scale) / 2 - 0.5) * 0.4;
            
            if (opacity > 0) {
              ctx.beginPath();
              ctx.moveTo(atom.x, atom.y);
              ctx.lineTo(other.x, other.y);
              ctx.strokeStyle = `rgba(${color}, ${opacity})`;
              ctx.lineWidth = 1;
              ctx.stroke();

              const midX = (atom.x + other.x) / 2;
              const midY = (atom.y + other.y) / 2;
              ctx.beginPath();
              ctx.arc(midX, midY, 2, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(${color}, ${opacity * 0.5})`;
              ctx.fill();
            }
          }
        });
      });

      projectedAtoms.forEach((atom) => {
        const opacity = (atom.scale - 0.5) * 1.5;
        
        if (opacity > 0) {
          ctx.beginPath();
          ctx.arc(atom.x, atom.y, atom.radius + 6, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${color}, ${opacity * 0.1})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(atom.x, atom.y, atom.radius + 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${color}, ${opacity * 0.2})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(atom.x, atom.y, atom.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${color}, ${opacity * 0.6})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(atom.x - atom.radius * 0.3, atom.y - atom.radius * 0.3, atom.radius * 0.3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.3})`;
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      gsap.killTweensOf(rotationRef.current);
    };
  }, [atomCount, color]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ pointerEvents: "none" }}
    />
  );
}
