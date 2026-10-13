import type { ReactNode } from "react";
import { Reveal } from "./reveal";

/**
 * Small eyebrow-style section label used across the homepage sections,
 * echoing the quiet section markers on andyhook.dev.
 */
export function SectionHeading({
  label,
  title,
  action,
}: {
  label: string;
  title?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <Reveal className='mb-8'>
      <div className='flex items-baseline justify-between gap-4'>
        <div>
          <span className='flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray'>
            <span
              className='inline-block size-1.5 rounded-full'
              style={{ backgroundColor: "var(--lemonAccent)" }}
              aria-hidden='true'
            />
            {label}
          </span>
          {title && (
            <h2 className='mt-3 text-2xl font-bold tracking-tight text-lighter-gray'>
              {title}
            </h2>
          )}
        </div>
        {action}
      </div>
    </Reveal>
  );
}
