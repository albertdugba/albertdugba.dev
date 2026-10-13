/**
 * Hero framing in the style of andyhook.dev: a hatched band in the left
 * gutter (between the page frame and where the text starts), a dashed
 * text-start guide, and a large dashed arc. Desktop only; all decorative.
 */

const line = "var(--guide-line)";

/** Hatched gutter + dashed text-start line, placed beside the heading block. */
export function HeroGutter() {
  return (
    <div aria-hidden='true' className='pointer-events-none absolute inset-y-0 left-0 hidden lg:block'>
      {/* dashed guide where the text starts, overshooting the block a little */}
      <svg className='absolute -top-16 left-0 h-[calc(100%+12rem)] w-px -translate-x-1/2 overflow-visible' preserveAspectRatio='none'>
        <line
          x1='0.5'
          x2='0.5'
          y1='0'
          y2='100%'
          stroke={line}
          strokeDasharray='9 5'
          vectorEffect='non-scaling-stroke'
        />
      </svg>

      {/* hatched band filling the gutter between the page frame and the text */}
      <svg className='absolute right-0 top-0 h-[calc(100%+5rem)] w-10'>
        <defs>
          <pattern id='hero-hatch' width='12' height='12' patternUnits='userSpaceOnUse'>
            <path d='M-3 3L3 -3M0 12L12 0M9 15L15 9' stroke='var(--guide-hatch)' strokeWidth='1' />
          </pattern>
        </defs>
        <rect width='100%' height='100%' fill='url(#hero-hatch)' />
      </svg>
    </div>
  );
}

/** Large dashed arc and diagonal, low on the right of the hero. */
export function HeroArc() {
  return (
    <svg
      aria-hidden='true'
      viewBox='0 0 600 600'
      fill='none'
      className='pointer-events-none absolute left-[31rem] top-[26rem] -z-10 hidden h-[36rem] w-[36rem] max-w-none opacity-60 lg:block'
    >
      <circle cx='300' cy='300' r='270' stroke={line} strokeDasharray='6 6' vectorEffect='non-scaling-stroke' />
      <path d='M470 -40L250 640' stroke={line} strokeDasharray='6 7' vectorEffect='non-scaling-stroke' />
    </svg>
  );
}
