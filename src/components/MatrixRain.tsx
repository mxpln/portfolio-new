import React, { useEffect, useRef } from 'react';

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '私ムゾヲンサコ¥$<>[]{}01アイウエオカキクケコサシスセソタチツテト';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];
    const speeds: number[] = [];
    const opacities: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
      speeds[i] = 1 + Math.random();
      opacities[i] = 0.5 + Math.random() * 0.5;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 0, 20, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillStyle = `rgba(184, 41, 247, ${opacities[i]})`;
        ctx.font = `${fontSize}px VT323`;
        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.99) {
          drops[i] = 0;
          speeds[i] = 1 + Math.random();
          opacities[i] = 0.5 + Math.random() * 0.5;
        }
        drops[i] += speeds[i];
      }
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Reset drops when resizing
      const newColumns = canvas.width / fontSize;
      drops.length = 0;
      speeds.length = 0;
      opacities.length = 0;
      
      for (let i = 0; i < newColumns; i++) {
        drops[i] = Math.random() * -100;
        speeds[i] = 1 + Math.random();
        opacities[i] = 0.5 + Math.random() * 0.5;
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-rain" />;
};

export default MatrixRain;