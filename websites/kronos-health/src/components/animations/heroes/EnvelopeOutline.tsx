"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
}

interface EnvelopeOutlineProps {
  className?: string;
  color?: string;
}

export function EnvelopeOutline({ 
  className = "", 
  color = "0, 255, 209"
}: EnvelopeOutlineProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const timeRef = useRef<{ value: number }>({ value: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const trailParticlesRef = useRef<Particle[]>([]);

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

    const rect = canvas.getBoundingClientRect();

    for (let i = 0; i < 50; i++) {
      particlesRef.current.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.2 + 0.3,
        opacity: Math.random() * 0.15 + 0.05,
        life: Math.random() * 150,
        maxLife: 150 + Math.random() * 100,
      });
    }

    gsap.to(timeRef.current, {
      value: Math.PI * 200,
      duration: 400,
      repeat: -1,
      ease: "none",
    });

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const time = timeRef.current.value;
      const centerX = rect.width * 0.6;
      const centerY = rect.height * 0.5;
      
      const envelopeWidth = Math.min(rect.width * 0.35, 280);
      const envelopeHeight = envelopeWidth * 0.7;

      const floatX = Math.sin(time * 0.3) * 10;
      const floatY = Math.cos(time * 0.25) * 8;

      const cx = centerX + floatX;
      const cy = centerY + floatY;

      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        if (particle.x < 0) particle.x = rect.width;
        if (particle.x > rect.width) particle.x = 0;
        if (particle.y < 0) particle.y = rect.height;
        if (particle.y > rect.height) particle.y = 0;

        if (particle.life > particle.maxLife) {
          particle.life = 0;
          particle.x = Math.random() * rect.width;
          particle.y = Math.random() * rect.height;
        }

        const fadeIn = Math.min(particle.life / 20, 1);
        const fadeOut = Math.max(0, 1 - (particle.life - particle.maxLife + 20) / 20);
        const alpha = particle.opacity * fadeIn * fadeOut;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${alpha})`;
        ctx.fill();
      });

      const left = cx - envelopeWidth / 2;
      const right = cx + envelopeWidth / 2;
      const top = cy - envelopeHeight / 2;
      const bottom = cy + envelopeHeight / 2;

      const pulse = Math.sin(time * 1.5) * 0.1 + 0.9;
      const baseOpacity = 0.25 * pulse;

      ctx.beginPath();
      ctx.moveTo(left, top);
      ctx.lineTo(right, top);
      ctx.lineTo(right, bottom);
      ctx.lineTo(left, bottom);
      ctx.closePath();
      ctx.strokeStyle = `rgba(${color}, ${baseOpacity})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(left, top);
      ctx.lineTo(cx, cy + envelopeHeight * 0.1);
      ctx.lineTo(right, top);
      ctx.strokeStyle = `rgba(${color}, ${baseOpacity * 1.2})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(left, bottom);
      ctx.lineTo(cx - envelopeWidth * 0.15, cy + envelopeHeight * 0.1);
      ctx.strokeStyle = `rgba(${color}, ${baseOpacity * 0.6})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(right, bottom);
      ctx.lineTo(cx + envelopeWidth * 0.15, cy + envelopeHeight * 0.1);
      ctx.strokeStyle = `rgba(${color}, ${baseOpacity * 0.6})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      const corners = [
        { x: left, y: top },
        { x: right, y: top },
        { x: right, y: bottom },
        { x: left, y: bottom },
        { x: cx, y: cy + envelopeHeight * 0.1 },
      ];

      corners.forEach((corner, i) => {
        const cornerPulse = Math.sin(time * 2 + i * 0.5) * 0.3 + 0.7;
        
        ctx.beginPath();
        ctx.arc(corner.x, corner.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${0.1 * cornerPulse})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(corner.x, corner.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.8 * cornerPulse})`;
        ctx.fill();
      });

      const travelSpeed = 0.15;
      const travelPos = (time * travelSpeed) % 4;

      let dotX, dotY;
      
      if (travelPos < 1) {
        dotX = left + (right - left) * travelPos;
        dotY = top;
      } else if (travelPos < 2) {
        dotX = right;
        dotY = top + (bottom - top) * (travelPos - 1);
      } else if (travelPos < 3) {
        dotX = right - (right - left) * (travelPos - 2);
        dotY = bottom;
      } else {
        dotX = left;
        dotY = bottom - (bottom - top) * (travelPos - 3);
      }

      if (Math.random() > 0.7) {
        trailParticlesRef.current.push({
          x: dotX,
          y: dotY,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: 0.6,
          life: 0,
          maxLife: 40,
        });
      }

      trailParticlesRef.current = trailParticlesRef.current.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        p.opacity *= 0.95;

        if (p.life < p.maxLife) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * (1 - p.life / p.maxLife), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${color}, ${p.opacity})`;
          ctx.fill();
          return true;
        }
        return false;
      });

      ctx.beginPath();
      ctx.arc(dotX, dotY, 8, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color}, 0.2)`;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(dotX, dotY, 5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, 0.9)`;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(dotX, dotY, 3, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${color}, 0.6)`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      const atSignX = cx;
      const atSignY = cy - envelopeHeight * 0.15;
      const atRadius = envelopeWidth * 0.08;
      const atPulse = Math.sin(time * 1.2) * 0.2 + 0.8;

      ctx.beginPath();
      ctx.arc(atSignX, atSignY, atRadius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${color}, ${0.2 * atPulse})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(atSignX, atSignY, atRadius * 0.5, 0, Math.PI * 1.7);
      ctx.strokeStyle = `rgba(${color}, ${0.3 * atPulse})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(atSignX + atRadius * 0.5, atSignY);
      ctx.lineTo(atSignX + atRadius * 0.5, atSignY + atRadius * 0.4);
      ctx.strokeStyle = `rgba(${color}, ${0.3 * atPulse})`;
      ctx.lineWidth = 2;
      ctx.stroke();

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
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ pointerEvents: "none" }}
    />
  );
}
