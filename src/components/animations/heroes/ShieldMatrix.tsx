"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface ShieldMatrixProps {
  className?: string;
  color?: string;
}

export function ShieldMatrix({
  className = "",
  color = "124, 58, 237",
}: ShieldMatrixProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const timeRef = useRef<{ value: number }>({ value: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const gridSize = 48;
    type Node = {
      x: number;
      y: number;
      phase: number;
      speed: number;
      shieldPhase: number;
      active: boolean;
    };
    const nodesRef: Node[] = [];

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      initNodes();
    };

    const initNodes = () => {
      nodesRef.length = 0;
      const rect = canvas.getBoundingClientRect();
      const cols = Math.ceil(rect.width / gridSize) + 1;
      const rows = Math.ceil(rect.height / gridSize) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          nodesRef.push({
            x: i * gridSize,
            y: j * gridSize,
            phase: Math.random() * Math.PI * 2,
            speed: 0.4 + Math.random() * 0.6,
            shieldPhase: Math.random() * Math.PI * 2,
            active: Math.random() > 0.65,
          });
        }
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    gsap.to(timeRef.current, {
      value: 100,
      duration: 100,
      repeat: -1,
      ease: "none",
    });

    const drawShield = (
      cx: number,
      cy: number,
      size: number,
      opacity: number
    ) => {
      const s = size;
      ctx.beginPath();
      ctx.moveTo(cx, cy - s);
      ctx.bezierCurveTo(cx + s * 0.7, cy - s * 0.8, cx + s, cy - s * 0.2, cx + s, cy + s * 0.3);
      ctx.bezierCurveTo(cx + s, cy + s * 0.7, cx + s * 0.5, cy + s, cx, cy + s * 1.1);
      ctx.bezierCurveTo(cx - s * 0.5, cy + s, cx - s, cy + s * 0.7, cx - s, cy + s * 0.3);
      ctx.bezierCurveTo(cx - s, cy - s * 0.2, cx - s * 0.7, cy - s * 0.8, cx, cy - s);
      ctx.closePath();
      ctx.strokeStyle = `rgba(${color}, ${opacity})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const time = timeRef.current.value;

      // Grid lines
      const cols = Math.ceil(rect.width / gridSize) + 1;
      const rows = Math.ceil(rect.height / gridSize) + 1;

      ctx.strokeStyle = `rgba(${color}, 0.04)`;
      ctx.lineWidth = 1;
      for (let i = 0; i <= cols; i++) {
        ctx.beginPath();
        ctx.moveTo(i * gridSize, 0);
        ctx.lineTo(i * gridSize, rect.height);
        ctx.stroke();
      }
      for (let j = 0; j <= rows; j++) {
        ctx.beginPath();
        ctx.moveTo(0, j * gridSize);
        ctx.lineTo(rect.width, j * gridSize);
        ctx.stroke();
      }

      // Nodes and shields
      nodesRef.forEach((node) => {
        const pulse = Math.sin(time * node.speed * 0.4 + node.phase) * 0.5 + 0.5;
        const shieldPulse = Math.sin(time * node.speed * 0.3 + node.shieldPhase) * 0.5 + 0.5;

        // Base dot at each grid intersection
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, 0.1)`;
        ctx.fill();

        if (!node.active) return;

        // Glow halo
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, gridSize * 0.8
        );
        gradient.addColorStop(0, `rgba(${color}, ${pulse * 0.12})`);
        gradient.addColorStop(1, `rgba(${color}, 0)`);
        ctx.beginPath();
        ctx.arc(node.x, node.y, gridSize * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Shield icon
        const shieldSize = 5 + shieldPulse * 3;
        drawShield(node.x, node.y, shieldSize, 0.15 + shieldPulse * 0.25);

        // Bright core dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2 + pulse * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${0.4 + pulse * 0.4})`;
        ctx.fill();

        // Connection lines between nearby active nodes
        if (pulse > 0.6) {
          nodesRef.forEach((other) => {
            if (!other.active || other === node) return;
            const dx = other.x - node.x;
            const dy = other.y - node.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < gridSize * 2.5) {
              const lineOpacity = ((pulse - 0.6) / 0.4) * (1 - dist / (gridSize * 2.5)) * 0.2;
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(other.x, other.y);
              ctx.strokeStyle = `rgba(${color}, ${lineOpacity})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          });
        }
      });

      // Slow vertical scan band
      const scanY = (time * 8) % (rect.height + 100) - 50;
      const scanGradient = ctx.createLinearGradient(0, scanY - 60, 0, scanY + 60);
      scanGradient.addColorStop(0, `rgba(${color}, 0)`);
      scanGradient.addColorStop(0.5, `rgba(${color}, 0.04)`);
      scanGradient.addColorStop(1, `rgba(${color}, 0)`);
      ctx.fillStyle = scanGradient;
      ctx.fillRect(0, scanY - 60, rect.width, 120);

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      gsap.killTweensOf(timeRef.current);
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ pointerEvents: "none" }}
    />
  );
}
