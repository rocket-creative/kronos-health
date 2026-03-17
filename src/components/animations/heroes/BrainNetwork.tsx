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

interface BrainNetworkProps {
  className?: string;
  color?: string;
}

export function BrainNetwork({ 
  className = "", 
  color = "130, 115, 140"
}: BrainNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const timeRef = useRef<{ value: number }>({ value: 0 });
  const particlesRef = useRef<Particle[]>([]);

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

    gsap.to(timeRef.current, {
      value: Math.PI * 200,
      duration: 600,
      repeat: -1,
      ease: "none",
    });

    function getBrainPoint(t: number, scale: number, offsetX: number, offsetY: number): { x: number; y: number } {
      const x = 16 * Math.pow(Math.sin(t), 3);
      const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
      
      const brainX = x * 0.7 + Math.sin(t * 2) * 2;
      const brainY = y * 0.85 + Math.cos(t * 3) * 1.5;
      
      return {
        x: offsetX + brainX * scale,
        y: offsetY + brainY * scale * 0.9,
      };
    }

    function isInsideBrain(px: number, py: number, centerX: number, centerY: number, scale: number): boolean {
      const relX = (px - centerX) / scale;
      const relY = (py - centerY) / scale;
      
      const t = Math.atan2(relY, relX);
      const brainPoint = getBrainPoint(t, 1, 0, 0);
      const brainDist = Math.sqrt(brainPoint.x * brainPoint.x + brainPoint.y * brainPoint.y);
      const pointDist = Math.sqrt(relX * relX + relY * relY);
      
      return pointDist < brainDist * 1.1;
    }

    const brainCurves = [
      { scale: 1.0, opacity: 0.25, dashPattern: null as number[] | null, rotationOffset: 0 },
      { scale: 0.85, opacity: 0.2, dashPattern: [6, 8], rotationOffset: 0.1 },
      { scale: 0.7, opacity: 0.18, dashPattern: null, rotationOffset: 0.2 },
      { scale: 0.55, opacity: 0.15, dashPattern: [4, 6], rotationOffset: 0.3 },
      { scale: 0.4, opacity: 0.12, dashPattern: null, rotationOffset: 0.4 },
    ];

    const nodes: Array<{
      t: number;
      curveIndex: number;
      size: number;
      speed: number;
    }> = [];

    for (let c = 0; c < brainCurves.length; c++) {
      const nodeCount = 4 + c;
      for (let n = 0; n < nodeCount; n++) {
        nodes.push({
          t: (n / nodeCount) * Math.PI * 2,
          curveIndex: c,
          size: 5 - c * 0.7,
          speed: (c % 2 === 0 ? 1 : -1) * (0.15 + Math.random() * 0.1),
        });
      }
    }

    function createParticle(rect: DOMRect, centerX: number, centerY: number, scale: number): Particle {
      let x, y;
      let attempts = 0;
      do {
        const t = Math.random() * Math.PI * 2;
        const dist = Math.random() * scale * 14;
        x = centerX + Math.cos(t) * dist;
        y = centerY + Math.sin(t) * dist;
        attempts++;
      } while (!isInsideBrain(x, y, centerX, centerY, scale) && attempts < 20);

      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.35 + 0.1,
        life: Math.random() * 150,
        maxLife: 150 + Math.random() * 100,
      };
    }

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const time = timeRef.current.value;
      
      const floatX = Math.sin(time * 0.4) * 12 + Math.sin(time * 0.25) * 8;
      const floatY = Math.cos(time * 0.35) * 10 + Math.cos(time * 0.2) * 6;
      
      const centerX = rect.width * 0.5 + floatX;
      const centerY = rect.height * 0.5 + floatY;
      const scale = Math.min(rect.width, rect.height) * 0.022;

      if (particlesRef.current.length < 80) {
        for (let i = particlesRef.current.length; i < 80; i++) {
          particlesRef.current.push(createParticle(rect, centerX, centerY, scale));
        }
      }

      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        const dx = centerX - particle.x;
        const dy = centerY - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        particle.vx += (dx / dist) * 0.008;
        particle.vy += (dy / dist) * 0.008;
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        if (particle.life > particle.maxLife || dist < 15 || !isInsideBrain(particle.x, particle.y, centerX, centerY, scale * 1.2)) {
          particlesRef.current[index] = createParticle(rect, centerX, centerY, scale);
        }

        const fadeIn = Math.min(particle.life / 25, 1);
        const fadeOut = Math.max(0, 1 - (particle.life - particle.maxLife + 25) / 25);
        const alpha = particle.opacity * fadeIn * fadeOut;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${alpha})`;
        ctx.fill();
      });

      brainCurves.forEach((curve, curveIndex) => {
        const curveScale = scale * curve.scale;
        const rotation = time * 0.05 * (curveIndex % 2 === 0 ? 1 : -1) + curve.rotationOffset;

        ctx.beginPath();
        
        for (let i = 0; i <= 100; i++) {
          const t = (i / 100) * Math.PI * 2 + rotation;
          const point = getBrainPoint(t, curveScale, centerX, centerY);
          
          if (i === 0) {
            ctx.moveTo(point.x, point.y);
          } else {
            ctx.lineTo(point.x, point.y);
          }
        }
        
        ctx.closePath();
        ctx.strokeStyle = `rgba(${color}, ${curve.opacity})`;
        ctx.lineWidth = curveIndex === 0 ? 2 : 1.5;
        
        if (curve.dashPattern) {
          ctx.setLineDash(curve.dashPattern);
        } else {
          ctx.setLineDash([]);
        }
        
        ctx.stroke();
      });

      nodes.forEach((node) => {
        const curve = brainCurves[node.curveIndex];
        const curveScale = scale * curve.scale;
        const rotation = time * 0.05 * (node.curveIndex % 2 === 0 ? 1 : -1) + curve.rotationOffset;
        
        const currentT = node.t + time * node.speed;
        const point = getBrainPoint(currentT + rotation, curveScale, centerX, centerY);
        
        const pulse = Math.sin(time * 2 + node.t) * 0.3 + 0.7;

        ctx.beginPath();
        ctx.arc(point.x, point.y, node.size + 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${0.06 * pulse})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(point.x, point.y, node.size + 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${0.12 * pulse})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(point.x, point.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.8 * pulse})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(point.x, point.y, node.size - 1, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${color}, ${0.4 * pulse})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([]);
        ctx.stroke();
      });

      const corePulse = Math.sin(time * 1.2) * 0.2 + 0.8;
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, 18, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color}, ${0.06 * corePulse})`;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(centerX, centerY, 12, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color}, ${0.12 * corePulse})`;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(centerX, centerY, 7, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${0.85 * corePulse})`;
      ctx.fill();

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