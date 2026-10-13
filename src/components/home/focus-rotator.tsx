"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const FOCUS_AREAS = [
  "product strategy",
  "browser performance",
  "frontend systems",
  "design systems",
  "AI engineering",
  "LLM applications",
  "agentic workflows",
];

const EASE = [0.23, 1, 0.32, 1] as const;

export function FocusRotator() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % FOCUS_AREAS.length);
    }, 2400);

    return () => window.clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <span>
      <span className='sr-only'>Areas of focus: {FOCUS_AREAS.join(", ")}</span>
      <span
        aria-hidden='true'
        className='relative inline-flex h-8 min-w-[18ch] overflow-hidden align-bottom text-lg font-extrabold tracking-[-0.03em] text-secondary underline decoration-[var(--lemonAccent)] decoration-4 underline-offset-4 sm:text-xl'
      >
        <AnimatePresence initial={false} mode='wait'>
          <motion.span
            key={FOCUS_AREAS[activeIndex]}
            initial={{ opacity: 0, y: "65%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-65%" }}
            transition={{ duration: 0.24, ease: EASE }}
            className='absolute left-0 whitespace-nowrap will-change-transform'
          >
            {FOCUS_AREAS[activeIndex]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
