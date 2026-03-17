"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface DataGridProps {
  className?: string;
  gridSize?: number;
  color?: string;
}

export function DataGrid({ 
  className = "", 
  gridSize = 60,
  color = "130, 115, 140" // kronos-cyan RGB
}: DataGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const timeRef = useRef<{ value: number }>({ value: 0 });
  const dataPointsRef = useRef<Array<{
    gridX: number;
    gridY: number;
    active: boolean;
    pulse: number;
    delay: number;
  }>>([]);

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
      
      initDataPoints();
    };

    const initDataPoints = () => {
      const rect = canvas.getBoundingClientRect();
      const cols = Math.ceil(rect.width / gridSize) + 1;
      const rows = Math.ceil(rect.height / gridSize) + 1;
      
      dataPointsRef.current = [];
      
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (Math.random() > 0.7) {
            dataPointsRef.current.push({
              gridX: i,
              gridY: j,
              active: true,
              pulse: Math.random() * Math.PI * 2,
              delay: Math.random() * 5,
            });
          }
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

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const time = timeRef.current.value;
      const cols = Math.ceil(rect.width / gridSize) + 1;
      const rows = Math.ceil(rect.height / gridSize) + 1;

      ctx.strokeStyle = `rgba(${color}, 0.03)`;
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

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * gridSize;
          const y = j * gridSize;
          
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${color}, 0.1)`;
          ctx.fill();
        }
      }

      dataPointsRef.current.forEach((point) => {
        const x = point.gridX * gridSize;
        const y = point.gridY * gridSize;
        
        const pulseValue = Math.sin(time * 0.5 + point.pulse + point.delay) * 0.5 + 0.5;
        const size = 3 + pulseValue * 4;
        const opacity = 0.3 + pulseValue * 0.5;

        ctx.beginPath();
        ctx.arc(x, y, size + 8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${opacity * 0.1})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, size + 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${opacity * 0.2})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${opacity})`;
        ctx.fill();

        if (pulseValue > 0.7) {
          const neighbors = dataPointsRef.current.filter((other) => {
            const dx = Math.abs(other.gridX - point.gridX);
            const dy = Math.abs(other.gridY - point.gridY);
            return dx <= 2 && dy <= 2 && (dx !== 0 || dy !== 0);
          });

          neighbors.slice(0, 2).forEach((neighbor) => {
            const nx = neighbor.gridX * gridSize;
            const ny = neighbor.gridY * gridSize;
            
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(nx, ny);
            ctx.strokeStyle = `rgba(${color}, ${(pulseValue - 0.7) * 0.5})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          });
        }
      });

      const scanLineY = (time * 20) % rect.height;
      const gradient = ctx.createLinearGradient(0, scanLineY - 50, 0, scanLineY + 50);
      gradient.addColorStop(0, `rgba(${color}, 0)`);
      gradient.addColorStop(0.5, `rgba(${color}, 0.05)`);
      gradient.addColorStop(1, `rgba(${color}, 0)`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, scanLineY - 50, rect.width, 100);

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      gsap.killTweensOf(timeRef.current);
    };
  }, [gridSize, color]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ pointerEvents: "none" }}
    />
  );
}
