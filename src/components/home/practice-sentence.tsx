"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SwatchBook } from "lucide-react";
import { useEffect, useState } from "react";
import type { IconType } from "react-icons";
import {
  SiAndroid,
  SiApple,
  SiChromatic,
  SiD3,
  SiDocker,
  SiEsbuild,
  SiEslint,
  SiExpo,
  SiFigma,
  SiGithubactions,
  SiLit,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPnpm,
  SiReact,
  SiStorybook,
  SiTanstack,
  SiTurborepo,
  SiTypescript,
  SiVitest,
  SiWebcomponentsdotorg,
} from "react-icons/si";
import { ReactNativeLogo, ViteLogo } from "./brand-icons";

type Tool = { name: string; icon: IconType; color: string };

type Practice = { label: string; tools: Tool[] };

const PRACTICES: Practice[] = [
  {
    label: "UI engineering & architecture",
    tools: [
      { name: "React", icon: SiReact, color: "#149eca" },
      { name: "Next.js", icon: SiNextdotjs, color: "var(--lighter-gray)" },
      { name: "TanStack", icon: SiTanstack, color: "#ef4444" },
      { name: "D3 (data viz)", icon: SiD3, color: "#f68e1e" },
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
    label: "mobile apps",
    tools: [
      { name: "Expo", icon: SiExpo, color: "var(--lighter-gray)" },
      { name: "React Native", icon: ReactNativeLogo, color: "#61dafb" },
      { name: "iOS", icon: SiApple, color: "var(--lighter-gray)" },
      { name: "Android", icon: SiAndroid, color: "#3ddc84" },
    ],
  },
  {
    label: "developer tooling",
    tools: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "Vite", icon: ViteLogo, color: "var(--lighter-gray)" },
      { name: "esbuild", icon: SiEsbuild, color: "#d4a000" },
      { name: "Turborepo", icon: SiTurborepo, color: "#ef4444" },
      { name: "pnpm", icon: SiPnpm, color: "#f69220" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088ff" },
      { name: "Docker", icon: SiDocker, color: "#2496ed" },
      { name: "ESLint", icon: SiEslint, color: "#4b32c3" },
      { name: "Vitest", icon: SiVitest, color: "#6e9f18" },
    ],
  },
];

const BACKEND: Practice = {
  label: "backend services",
  tools: [
    { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e" },
    { name: "NestJS", icon: SiNestjs, color: "#e0234e" },
  ],
};

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

function PracticeList({ practices, offset }: { practices: Practice[]; offset: number }) {
  return practices.map((practice, i) => (
    <span key={practice.label}>
      <span className='whitespace-nowrap'>
        <span className='font-medium text-lighter-gray'>{practice.label}</span>
        <span className='sr-only'>
          {" "}
          ({practice.tools.map((tool) => tool.name).join(", ")})
        </span>
        <MorphIcon tools={practice.tools} offset={(offset + i) * 650} />
      </span>
      {i < practices.length - 2 ? ", " : i === practices.length - 2 ? (practices.length === 2 ? " and " : ", and ") : ""}
    </span>
  ));
}

export function PracticeSentence() {
  return (
    <p id='practice'>
      Most of my work is in <PracticeList practices={PRACTICES} offset={0} />, but I
      also juggle <PracticeList practices={[BACKEND]} offset={PRACTICES.length} /> to get the job
      done.
    </p>
  );
}
