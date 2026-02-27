import { useEffect, useRef, useCallback } from "react";

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animRef = useRef<number>(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = document.documentElement.scrollHeight;

    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
    }

    ctx.clearRect(0, 0, w, h);

    const spacing = 60;
    const mx = mouseRef.current.x;
    const my = mouseRef.current.y + window.scrollY;
    const radius = 150;

    const isDark = document.documentElement.classList.contains("dark");
    const baseAlpha = isDark ? 0.06 : 0.08;
    const hoverAlpha = isDark ? 0.35 : 0.3;
    const baseColor = isDark ? "255,255,255" : "0,0,0";

    const startCol = Math.max(0, Math.floor((mx - radius) / spacing));
    const endCol = Math.min(Math.ceil(w / spacing), Math.ceil((mx + radius) / spacing));
    const startRow = Math.max(0, Math.floor((my - radius) / spacing));
    const endRow = Math.min(
      Math.ceil(h / spacing),
      Math.ceil((my + radius) / spacing)
    );

    // Draw base dots (batch)
    ctx.fillStyle = `rgba(${baseColor},${baseAlpha})`;
    for (let x = 0; x <= w; x += spacing) {
      for (let y = 0; y <= h; y += spacing) {
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Draw hover-affected dots
    for (let col = startCol; col <= endCol; col++) {
      for (let row = startRow; row <= endRow; row++) {
        const x = col * spacing;
        const y = row * spacing;
        const dx = mx - x;
        const dy = my - y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < radius) {
          const t = 1 - dist / radius;
          const size = 1 + t * 3;
          const alpha = baseAlpha + (hoverAlpha - baseAlpha) * t;
          ctx.fillStyle = `rgba(139,92,246,${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    animRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    animRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animRef.current);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
