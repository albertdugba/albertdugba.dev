"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SwatchBook } from "lucide-react";
import { useEffect, useState } from "react";
import type { IconType } from "react-icons";
import {
  SiAndroid,
  SiApple,
  SiBiome,
  SiChromatic,
  SiD3,
  SiDocker,
  SiEsbuild,
  SiEslint,
  SiExpo,
  SiFigma,
  SiGithubactions,
  SiLit,
  SiNextdotjs,
  SiPnpm,
  SiPrettier,
  SiReact,
  SiStorybook,
  SiTanstack,
  SiTurborepo,
  SiTypescript,
  SiVite,
  SiVitest,
  SiWebcomponentsdotorg,
} from "react-icons/si";

type Tool = { name: string; icon: IconType; color: string };

const PRACTICES: { label: string; tools: Tool[] }[] = [
  {
    label: "product UI",
    tools: [
      { name: "React", icon: SiReact, color: "#149eca" },
      { name: "Next.js", icon: SiNextdotjs, color: "var(--lighter-gray)" },
      { name: "TanStack", icon: SiTanstack, color: "#ef4444" },
      { name: "Vite", icon: SiVite, color: "#646cff" },
      { name: "D3 (data viz)", icon: SiD3, color: "#f68e1e" },
    ],
  },
  {
    label: "mobile apps",
    tools: [
      { name: "Expo", icon: SiExpo, color: "var(--lighter-gray)" },
      { name: "React Native", icon: SiReact, color: "#149eca" },
      { name: "iOS", icon: SiApple, color: "var(--lighter-gray)" },
      { name: "Android", icon: SiAndroid, color: "#3ddc84" },
    ],
  },
  {
    label: "design systems",
    tools: [
      { name: "Storybook", icon: SiStorybook, color: "#ff4785" },
      { name: "Lit", icon: SiLit, color: "#324fff" },
      { name: "Web Components", icon: SiWebcomponentsdotorg, color: "#29abe2" },
      { name: "Figma", icon: SiFigma, color: "#f24e1e" },
      { name: "Design tokens", icon: SwatchBook as unknown as IconType, color: "#8064bc" },
      { name: "Chromatic", icon: SiChromatic, color: "#fc521f" },
    ],
  },
  {
    label: "developer tooling & CI/CD",
    tools: [
      { name: "esbuild", icon: SiEsbuild, color: "#d4a000" },
      { name: "Vite", icon: SiVite, color: "#646cff" },
      { name: "Turborepo", icon: SiTurborepo, color: "#ef4444" },
      { name: "pnpm", icon: SiPnpm, color: "#f69220" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088ff" },
      { name: "Docker", icon: SiDocker, color: "#2496ed" },
    ],
  },
  {
    label: "developer experience",
    tools: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "ESLint", icon: SiEslint, color: "#4b32c3" },
      { name: "Prettier", icon: SiPrettier, color: "#c9952a" },
      { name: "Biome", icon: SiBiome, color: "#60a5fa" },
      { name: "Vitest", icon: SiVitest, color: "#6e9f18" },
    ],
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;
const INTERVAL = 2600;

/**
 * A fixed-size slot that cycles through a set of logos. Each slot starts on
 * its own offset so the sentence never flickers all at once, and the slot
 * size never changes, so the text never reflows.
 */
function MorphIcon({ tools, offset }: { tools: Tool[]; offset: number }) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const tool = tools[index];
  const Icon = tool.icon;

  useEffect(() => {
    if (reduceMotion) return;
    let interval: number | undefined;
    const start = window.setTimeout(() => {
      setIndex((i) => (i + 1) % tools.length);
      interval = window.setInterval(() => setIndex((i) => (i + 1) % tools.length), INTERVAL);
    }, INTERVAL + offset);
    return () => {
      window.clearTimeout(start);
      window.clearInterval(interval);
    };
  }, [reduceMotion, tools.length, offset]);

  return (
    <span
      className='relative ml-1.5 inline-flex size-[1.05em] align-[-0.15em]'
      title={tool.name}
      aria-hidden='true'
    >
      <AnimatePresence initial={false} mode='popLayout'>
        <motion.span
          key={tool.name}
          initial={{ opacity: 0, scale: 0.5, rotate: -25, filter: "blur(4px)" }}
          animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.5, rotate: 25, filter: "blur(4px)" }}
          transition={{ duration: 0.45, ease: EASE }}
          className='absolute inset-0 flex items-center justify-center'
        >
          <Icon className='size-full' style={{ color: tool.color }} />
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function PracticeSentence() {
  return (
    <p id='practice'>
      Over the years, I&apos;ve worked on{" "}
      {PRACTICES.map((practice, i) => (
        <span key={practice.label}>
          <span className='whitespace-nowrap'>
            <span className='font-medium text-lighter-gray'>{practice.label}</span>
            <span className='sr-only'>
              {" "}
              ({practice.tools.map((tool) => tool.name).join(", ")})
            </span>
            <MorphIcon tools={practice.tools} offset={i * 650} />
          </span>
          {i < PRACTICES.length - 2 ? ", " : i === PRACTICES.length - 2 ? ", and " : ""}
        </span>
      ))}
      , helping teams ship with confidence.
    </p>
  );
}
