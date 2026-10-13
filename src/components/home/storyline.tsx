"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { PanelsTopLeft, Sparkles, Stethoscope, type LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";

const EASE = [0.23, 1, 0.32, 1] as const;

const STORY_STEPS = [
  {
    workflow: "complex workflows",
    product: "clear product systems",
    ai: "AI can unlock",
  },
  {
    workflow: "diagnostic data",
    product: "interfaces teams trust",
    ai: "AI can assist",
  },
  {
    workflow: "clinical processes",
    product: "resilient products",
    ai: "AI can make possible",
  },
];

function StoryChip({
  label,
  icon: Icon,
  iconClassName,
  widthClassName,
  shouldReduceMotion,
}: {
  label: string;
  icon: LucideIcon;
  iconClassName: string;
  widthClassName: string;
  shouldReduceMotion: boolean | null;
}) {
  return (
    <span
      className={`relative mx-1 inline-flex h-[1.75em] ${widthClassName} align-middle overflow-hidden rounded-xl border border-light-gray bg-lightest-gray px-2.5 py-1.5 sm:px-3`}
    >
      <AnimatePresence initial={false} mode='sync'>
        <motion.span
          key={label}
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 1.04 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.22, ease: EASE }}
          className='absolute inset-0 flex items-center justify-center gap-1.5 whitespace-nowrap text-[0.75em] font-semibold tracking-[-0.02em] text-lighter-gray will-change-transform'
        >
          <Icon className={`size-[1em] shrink-0 ${iconClassName}`} strokeWidth={2.4} aria-hidden='true' />
          {label}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Storyline({ inline = false }: { inline?: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const step = STORY_STEPS[activeIndex];

  useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % STORY_STEPS.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, [shouldReduceMotion]);

  const content = (
    <>
      <span className='sr-only'>
        I turn complex workflows into clear product systems, while
        exploring what AI can unlock.
      </span>
      <span aria-hidden='true'>
        I turn
        <StoryChip
          label={step.workflow}
          icon={Stethoscope}
          iconClassName='text-secondary opacity-70'
          widthClassName='w-[20ch]'
          shouldReduceMotion={shouldReduceMotion}
        />
        into
        <StoryChip
          label={step.product}
          icon={PanelsTopLeft}
          iconClassName='text-secondary opacity-70'
          widthClassName='w-[24ch]'
          shouldReduceMotion={shouldReduceMotion}
        />
        , while exploring what
        <StoryChip
          label={step.ai}
          icon={Sparkles}
          iconClassName='text-secondary opacity-70'
          widthClassName='w-[20ch]'
          shouldReduceMotion={shouldReduceMotion}
        />
        .
      </span>
    </>
  );

  if (inline) {
    return (
      <motion.span
        initial={shouldReduceMotion ? false : { opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.24, ease: EASE }}
        className='font-semibold text-lighter-gray'
      >
        {content}
      </motion.span>
    );
  }

  return (
    <motion.p
      initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.32, ease: EASE }}
      className='mt-8 max-w-xl text-[clamp(1.65rem,4vw,2.5rem)] font-semibold leading-[1.2] tracking-[-0.04em] text-lighter-gray'
    >
      {content}
    </motion.p>
  );
}
