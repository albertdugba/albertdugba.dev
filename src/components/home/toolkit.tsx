"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Atom,
  BookOpenText,
  Cloud,
  Container,
  Gauge,
  GitBranch,
  PanelsTopLeft,
  Terminal,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

type Tool = {
  label: string;
  icon: LucideIcon;
  iconClassName: string;
};

const TOOLS: Tool[] = [
  { label: "React", icon: Atom, iconClassName: "text-sky-500" },
  { label: "Vite", icon: Zap, iconClassName: "text-violet-500" },
  { label: "Storybook", icon: BookOpenText, iconClassName: "text-pink-500" },
  { label: "Node.js", icon: Terminal, iconClassName: "text-emerald-600" },
  { label: "Docker", icon: Container, iconClassName: "text-sky-600" },
  { label: "DigitalOcean", icon: Cloud, iconClassName: "text-blue-600" },
  { label: "design systems", icon: PanelsTopLeft, iconClassName: "text-violet-500" },
  { label: "CI/CD", icon: GitBranch, iconClassName: "text-orange-500" },
  { label: "performance", icon: Gauge, iconClassName: "text-emerald-500" },
];

const EASE = [0.23, 1, 0.32, 1] as const;

function ToolMorph() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const tool = TOOLS[activeIndex];
  const Icon = tool.icon;

  useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % TOOLS.length);
    }, 2400);

    return () => window.clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <span>
      <span className='sr-only'>
        Tools I use: {TOOLS.map(({ label }) => label).join(", ")}.
      </span>
      <span
        aria-hidden='true'
        className='relative mx-1 inline-flex h-8 min-w-[14ch] overflow-hidden align-middle'
      >
        <AnimatePresence initial={false} mode='wait'>
          <motion.span
            key={tool.label}
            initial={{ opacity: 0, y: "65%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-65%" }}
            transition={{ duration: 0.24, ease: EASE }}
            className='absolute left-0 inline-flex items-center gap-1.5 rounded-full border border-light-gray bg-primary/90 px-2 py-1 text-[0.78em] font-semibold leading-none text-lighter-gray shadow-sm will-change-transform'
          >
            <Icon className={`size-[1em] ${tool.iconClassName}`} strokeWidth={2.25} />
            {tool.label}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}

export function Toolkit() {
  return (
    <p>
      I build with <ToolMorph /> and use product-minded frontend systems to
      make delivery repeatable and reliable.
    </p>
  );
}
