"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulsePhase: number;
  type: "primary" | "secondary" | "tertiary";
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  opacity: number;
}

interface WaveRing {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
}

interface NeuralNetworkProps {
  className?: string;
  nodeCount?: number;
  color?: string;
}

export function NeuralNetwork({ 
  className = "", 
  nodeCount = 30,
  color = "0, 255, 209"
}: NeuralNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const waveRingsRef = useRef<WaveRing[]>([]);
  const animationRef = useRef<number | null>(null);
  const timeRef = useRef<{ value: number }>({ value: 0 });

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
    
    nodesRef.current = Array.from({ length: nodeCount }, (_, i) => {
      const type = i < 5 ? "primary" : i < 12 ? "secondary" : "tertiary";
      return {
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * (type === "primary" ? 0.25 : type === "secondary" ? 0.4 : 0.5),
        vy: (Math.random() - 0.5) * (type === "primary" ? 0.25 : type === "secondary" ? 0.4 : 0.5),
        radius: type === "primary" ? 2.5 + Math.random() * 1 : type === "secondary" ? 1.5 + Math.random() * 0.5 : 0.8 + Math.random() * 0.5,
        pulsePhase: Math.random() * Math.PI * 2,
        type,
      };
    });

    for (let i = 0; i < 20; i++) {
      particlesRef.current.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 0.8 + 0.2,
        life: Math.random() * 100,
        maxLife: 100 + Math.random() * 100,
        opacity: Math.random() * 0.15 + 0.03,
      });
    }

    gsap.to(timeRef.current, {
      value: Math.PI * 200,
      duration: 600,
      repeat: -1,
      ease: "none",
    });

    const connectionDistance = 500;
    const secondaryConnectionDistance = 400;

    function createWaveRing(x: number, y: number) {
      waveRingsRef.current.push({
        x,
        y,
        radius: 0,
        maxRadius: 80 + Math.random() * 40,
        opacity: 0.4,
      });
    }

    let lastWaveTime = 0;

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const time = timeRef.current.value;
      const nodes = nodesRef.current;

      if (time - lastWaveTime > 2) {
        lastWaveTime = time;
        const randomNode = nodes[Math.floor(Math.random() * 8)];
        if (randomNode) {
          createWaveRing(randomNode.x, randomNode.y);
        }
      }

      waveRingsRef.current = waveRingsRef.current.filter((ring) => {
        ring.radius += 1.5;
        ring.opacity = 0.4 * (1 - ring.radius / ring.maxRadius);
        
        if (ring.radius < ring.maxRadius) {
          ctx.beginPath();
          ctx.arc(ring.x, ring.y, ring.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${color}, ${ring.opacity})`;
          ctx.lineWidth = 2;
          ctx.stroke();
          return true;
        }
        return false;
      });

      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        particle.vx += (Math.random() - 0.5) * 0.02;
        particle.vy += (Math.random() - 0.5) * 0.02;
        particle.vx *= 0.99;
        particle.vy *= 0.99;

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

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        node.vx += (Math.random() - 0.5) * 0.01;
        node.vy += (Math.random() - 0.5) * 0.01;
        
        const maxSpeed = node.type === "primary" ? 0.5 : node.type === "secondary" ? 0.8 : 1;
        const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
        if (speed > maxSpeed) {
          node.vx = (node.vx / speed) * maxSpeed;
          node.vy = (node.vy / speed) * maxSpeed;
        }

        if (node.x < 0 || node.x > rect.width) node.vx *= -1;
        if (node.y < 0 || node.y > rect.height) node.vy *= -1;

        node.x = Math.max(0, Math.min(rect.width, node.x));
        node.y = Math.max(0, Math.min(rect.height, node.y));
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const maxDist = (nodes[i].type === "primary" || nodes[j].type === "primary") 
            ? connectionDistance 
            : secondaryConnectionDistance;

          if (distance < maxDist) {
            const baseOpacity = (nodes[i].type === "primary" || nodes[j].type === "primary") ? 0.5 : 0.25;
            const opacity = (1 - distance / maxDist) * baseOpacity;
            
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${color}, ${opacity})`;
            ctx.lineWidth = (nodes[i].type === "primary" && nodes[j].type === "primary") ? 1.8 : 1.2;
            ctx.stroke();

            const pulseSpeed = 3;
            const pulsePos = ((time * pulseSpeed) + nodes[i].pulsePhase) % (Math.PI * 2);
            const normalizedPulse = (pulsePos / (Math.PI * 2));
            
            const px = nodes[i].x + dx * normalizedPulse;
            const py = nodes[i].y + dy * normalizedPulse;
            const pulseOpacity = Math.sin(normalizedPulse * Math.PI) * opacity * 2.5;
            
            ctx.beginPath();
            ctx.arc(px, py, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${color}, ${pulseOpacity})`;
            ctx.fill();

            const pulsePos2 = ((time * pulseSpeed) + nodes[j].pulsePhase + Math.PI) % (Math.PI * 2);
            const normalizedPulse2 = (pulsePos2 / (Math.PI * 2));
            
            const px2 = nodes[j].x - dx * normalizedPulse2;
            const py2 = nodes[j].y - dy * normalizedPulse2;
            const pulseOpacity2 = Math.sin(normalizedPulse2 * Math.PI) * opacity * 2;
            
            ctx.beginPath();
            ctx.arc(px2, py2, 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${color}, ${pulseOpacity2})`;
            ctx.fill();
          }
        }
      }

      nodes.forEach((node) => {
        const pulse = Math.sin(time * 2 + node.pulsePhase) * 0.5 + 0.5;
        const radius = node.radius + pulse * (node.type === "primary" ? 2 : 1);
        const baseOpacity = node.type === "primary" ? 0.9 : node.type === "secondary" ? 0.7 : 0.5;
        const opacity = baseOpacity * (0.7 + pulse * 0.3);

        if (node.type === "primary") {
          ctx.beginPath();
          ctx.arc(node.x, node.y, radius + 12, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${color}, ${opacity * 0.05})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(node.x, node.y, radius + 6, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${color}, ${opacity * 0.1})`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, radius + 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${opacity * 0.15})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = node.type === "primary" 
          ? `rgba(255, 255, 255, ${opacity})` 
          : `rgba(${color}, ${opacity})`;
        ctx.fill();

        if (node.type === "primary") {
          ctx.beginPath();
          ctx.arc(node.x, node.y, radius - 2, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${color}, ${opacity * 0.6})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
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
      gsap.killTweensOf(timeRef.current);
    };
  }, [nodeCount, color]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ pointerEvents: "none" }}
    />
  );
}
