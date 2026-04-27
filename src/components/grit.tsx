"use client";

import { useCallback, useRef } from "react";

export function Grit({ children }: { children: React.ReactNode }) {
  const overlayRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number>();

  const handleMouseMove = useCallback(() => {
    if (overlayRef.current) {
      const x = Math.round(Math.random() * 400);
      const y = Math.round(Math.random() * 400);
      overlayRef.current.style.backgroundPosition = `${x}px ${y}px`;
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    let lastTime = 0;
    const animate = (time: number) => {
      if (time - lastTime > 120) {
        handleMouseMove();
        lastTime = time;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
  }, [handleMouseMove]);

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    if (overlayRef.current) {
      overlayRef.current.style.backgroundPosition = "0 0";
    }
  }, []);

  return (
    <span
      className='relative inline-block overflow-hidden'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <span ref={overlayRef} className='grit-overlay' />
    </span>
  );
}
