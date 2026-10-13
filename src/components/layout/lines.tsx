/**
 * Hairline page structure in the style of andyhook.dev: SVG <line>s with
 * `vector-effect="non-scaling-stroke"` so they stay a crisp 1px at any size.
 * Colours come from the faint --guide-line token.
 */

function VLine({ className = "", dashed = false }: { className?: string; dashed?: boolean }) {
  return (
    <svg
      aria-hidden='true'
      className={`absolute inset-y-0 h-full w-px overflow-visible ${className}`}
      preserveAspectRatio='none'
    >
      <line
        x1='0.5'
        x2='0.5'
        y1='0'
        y2='100%'
        stroke='var(--guide-line)'
        strokeWidth={1}
        strokeDasharray={dashed ? "9 5" : undefined}
        vectorEffect='non-scaling-stroke'
      />
    </svg>
  );
}

/** Two verticals framing the content column, running the full page height. */
export function PageFrame() {
  return (
    <div className='pointer-events-none absolute inset-0 z-0 hidden sm:block' aria-hidden='true'>
      <div className='relative mx-auto h-full max-w-6xl'>
        <VLine className='left-0' />
        <VLine className='right-0' />
      </div>
    </div>
  );
}

/** A full-bleed horizontal hairline marking a section boundary. */
export function Rule({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-px w-full ${className}`} aria-hidden='true'>
      <svg
        className='absolute left-1/2 top-0 h-px w-screen -translate-x-1/2 overflow-visible'
        preserveAspectRatio='none'
      >
        <line
          x1='0'
          x2='100%'
          y1='0.5'
          y2='0.5'
          stroke='var(--guide-line)'
          strokeWidth={1}
          vectorEffect='non-scaling-stroke'
        />
      </svg>
    </div>
  );
}

/**
 * Dashed ring around a circular control (e.g. social icons). Inside a
 * `group`, hovering or focusing fades the dashes and draws a solid ring
 * clockwise from the top in their place.
 */
export function DashedRing({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden='true' className={`absolute inset-0 size-full -rotate-90 ${className}`}>
      <circle
        cx='50%'
        cy='50%'
        r='48%'
        fill='none'
        stroke='currentColor'
        strokeWidth={1}
        strokeDasharray='10 3'
        className='transition-opacity duration-300 ease-out group-hover:opacity-0 group-focus-visible:opacity-0 motion-reduce:transition-none'
      />
      <circle
        cx='50%'
        cy='50%'
        r='48%'
        fill='none'
        stroke='var(--lighter-gray)'
        strokeWidth={1}
        pathLength={100}
        strokeDasharray='100'
        strokeDashoffset='100'
        className='transition-[stroke-dashoffset] duration-500 ease-out group-hover:[stroke-dashoffset:0] group-focus-visible:[stroke-dashoffset:0] motion-reduce:transition-none'
      />
    </svg>
  );
}
