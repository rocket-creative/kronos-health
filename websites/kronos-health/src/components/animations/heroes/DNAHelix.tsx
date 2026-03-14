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

interface DNAHelixProps {
  className?: string;
  color?: string;
}

export function DNAHelix({ 
  className = "", 
  color = "0, 255, 209"
}: DNAHelixProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
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

    const rect = canvas.getBoundingClientRect();

    for (let i = 0; i < 40; i++) {
      particlesRef.current.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.2 + 0.05,
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
      
      const helixLength = rect.width * 1.6;
      const helixWidth = 100;
      const nodeCount = 35;
      const rotationSpeed = 0.6;
      const angle = -12 * (Math.PI / 180);

      const centerX = rect.width * 0.5;
      const centerY = rect.height * 0.5;

      particlesRef.current.forEach((particle) => {
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

      const strand1Points: { x: number; y: number; z: number }[] = [];
      const strand2Points: { x: number; y: number; z: number }[] = [];

      for (let i = 0; i <= nodeCount; i++) {
        const t = i / nodeCount;
        const localX = -helixLength / 2 + t * helixLength;
        const twistAngle = t * Math.PI * 6 + time * rotationSpeed;
        
        const y1Offset = Math.cos(twistAngle) * helixWidth;
        const z1 = Math.sin(twistAngle);
        
        const y2Offset = Math.cos(twistAngle + Math.PI) * helixWidth;
        const z2 = Math.sin(twistAngle + Math.PI);

        const rotatedX1 = localX * Math.cos(angle) - y1Offset * Math.sin(angle);
        const rotatedY1 = localX * Math.sin(angle) + y1Offset * Math.cos(angle);
        
        const rotatedX2 = localX * Math.cos(angle) - y2Offset * Math.sin(angle);
        const rotatedY2 = localX * Math.sin(angle) + y2Offset * Math.cos(angle);

        strand1Points.push({ 
          x: centerX + rotatedX1, 
          y: centerY + rotatedY1, 
          z: z1 
        });
        strand2Points.push({ 
          x: centerX + rotatedX2, 
          y: centerY + rotatedY2, 
          z: z2 
        });
      }

      for (let i = 0; i < strand1Points.length - 1; i++) {
        const p1 = strand1Points[i];
        const p2 = strand1Points[i + 1];
        const avgZ = (p1.z + p2.z) / 2;
        const opacity = 0.2 + avgZ * 0.2;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(${color}, ${opacity})`;
        ctx.lineWidth = 2.5 + avgZ * 1;
        ctx.stroke();
      }

      for (let i = 0; i < strand2Points.length - 1; i++) {
        const p1 = strand2Points[i];
        const p2 = strand2Points[i + 1];
        const avgZ = (p1.z + p2.z) / 2;
        const opacity = 0.2 + avgZ * 0.2;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(${color}, ${opacity})`;
        ctx.lineWidth = 2.5 + avgZ * 1;
        ctx.stroke();
      }

      for (let i = 0; i < strand1Points.length; i += 2) {
        const p1 = strand1Points[i];
        const p2 = strand2Points[i];
        const avgZ = (p1.z + p2.z) / 2;
        const opacity = 0.1 + Math.abs(avgZ) * 0.1;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(${color}, ${opacity})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      strand1Points.forEach((point) => {
        const opacity = 0.4 + point.z * 0.4;
        const size = 5 + point.z * 3;

        ctx.beginPath();
        ctx.arc(point.x, point.y, size + 6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${opacity * 0.08})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(point.x, point.y, size + 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${opacity * 0.15})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.9})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(point.x, point.y, size - 2, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${color}, ${opacity * 0.5})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      strand2Points.forEach((point) => {
        const opacity = 0.4 + point.z * 0.4;
        const size = 5 + point.z * 3;

        ctx.beginPath();
        ctx.arc(point.x, point.y, size + 6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${opacity * 0.08})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(point.x, point.y, size + 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${opacity * 0.15})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${opacity * 0.8})`;
        ctx.fill();
      });

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
