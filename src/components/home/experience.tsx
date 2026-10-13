"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "./section-heading";

type Job = {
  company: string;
  role: string;
  description: string;
  home: string;
  /** Short year shown in the left rail. TODO: confirm exact years. */
  year: string;
  /** Full tenure shown when expanded. TODO: confirm exact dates. */
  tenure: string;
  /** Monogram + brand colour for the logo tile (stand-in for a real logo). */
  mono: string;
  color: string;
};

// TODO: confirm the years / tenures below — they're editable placeholders.
const EXPERIENCE: Job[] = [
  {
    company: "Deciphex",
    role: "Senior Frontend Engineer",
    description:
      "Building high-end UI applications and tooling for lab pathology and diagnostics — design systems, complex data-heavy interfaces, and internal tooling used across teams.",
    home: "https://www.deciphex.com/",
    year: "2023",
    tenure: "2023 – Present",
    mono: "D",
    color: "#2563eb",
  },
  {
    company: "DrDoGood",
    role: "Founding Frontend Engineer",
    description:
      "One of the founding frontend engineers on a telemedicine platform connecting doctors and patients for virtual consultations and appointment scheduling.",
    home: "https://www.drdogood.health/",
    year: "2021",
    tenure: "2021 – 2023",
    mono: "Dr",
    color: "#10b981",
  },
  {
    company: "Montech Studios",
    role: "Frontend Engineer",
    description:
      "Built user interfaces across web3, blockchain, fintech, and edtech projects at a software development studio.",
    home: "https://www.montech.io/",
    year: "2020",
    tenure: "2020 – 2021",
    mono: "M",
    color: "#7c3aed",
  },
  {
    company: "OrigoHealth",
    role: "Frontend Engineer",
    description:
      "Developed digital healthcare solutions for patient care and medical services.",
    home: "https://origohealth.net/",
    year: "2019",
    tenure: "2019 – 2020",
    mono: "O",
    color: "#06b6d4",
  },
];

function PlusIcon({ open }: { open: boolean }) {
  return (
    <span
      className='relative flex size-9 shrink-0 items-center justify-center rounded-full border border-light-gray transition-colors duration-300 group-hover:border-secondary'
      aria-hidden='true'
    >
      <span className='absolute h-[1.5px] w-3.5 rounded bg-lighter-gray' />
      <motion.span
        className='absolute h-3.5 w-[1.5px] rounded bg-lighter-gray'
        animate={{ rotate: open ? 90 : 0, opacity: open ? 0 : 1 }}
        transition={{ duration: 0.25 }}
      />
    </span>
  );
}

function Row({ job }: { job: Job }) {
  const [open, setOpen] = useState(false);

  return (
    <div className='border-b border-light-gray last:border-b-0'>
      <button
        type='button'
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className='group flex w-full items-center gap-4 px-0 py-6 text-left transition-colors duration-300 hover:bg-lightest-gray sm:gap-6 sm:py-7'
      >
        <span className='hidden w-12 shrink-0 text-sm font-medium text-gray sm:block'>
          {job.year}
        </span>

        <span
          className='flex size-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white shadow-sm'
          style={{ backgroundColor: job.color }}
        >
          {job.mono}
        </span>

        <span className='min-w-0 flex-1'>
          <span className='block truncate text-lg font-semibold text-lighter-gray transition-colors group-hover:text-secondary'>
            {job.company}
          </span>
          <span className='mt-0.5 block truncate text-sm text-gray sm:hidden'>
            {job.role}
          </span>
        </span>

        <span className='hidden flex-1 truncate text-gray sm:block'>
          {job.role}
        </span>

        <PlusIcon open={open} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className='overflow-hidden'
          >
            <div className='pb-8 sm:pl-[5.75rem]'>
              <p className='max-w-2xl leading-7 text-article-color/80'>
                {job.description}
              </p>

              <dl className='mt-6 flex flex-wrap gap-x-12 gap-y-4'>
                <div>
                  <dt className='text-sm font-semibold text-lighter-gray'>
                    Home
                  </dt>
                  <dd className='mt-1'>
                    <a
                      href={job.home}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-sm text-secondary underline underline-offset-2 decoration-[var(--lemonAccent)] decoration-2'
                    >
                      {job.home.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className='text-sm font-semibold text-lighter-gray'>
                    Role
                  </dt>
                  <dd className='mt-1 text-sm text-gray'>{job.role}</dd>
                </div>
                <div>
                  <dt className='text-sm font-semibold text-lighter-gray'>
                    Tenure
                  </dt>
                  <dd className='mt-1 text-sm text-gray'>{job.tenure}</dd>
                </div>
              </dl>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export const Experience = () => {
  return (
    <section id='experience' className='scroll-mt-8 lg:mt-28 mt-20'>
      <SectionHeading label='Experience' title='Where I&apos;ve worked' />

      <div className='border-y border-light-gray'>
        {EXPERIENCE.map((job) => (
          <Row key={job.company} job={job} />
        ))}
      </div>
    </section>
  );
};
