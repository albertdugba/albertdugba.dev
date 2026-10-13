/**
 * Whisper-subtle "//" brand-mark illustration used as background art in the
 * hero and footer, echoing the mark on andyhook.dev: two elongated slanted
 * "blades" (one outlined, one softly filled) whose rounded caps are sheared
 * into a flag shape, plus a pair of dashed circles and a dashed diagonal.
 * All colours come from faint theme tokens so it stays barely there. Decorative.
 */
export function BrandMark({ className = "" }: { className?: string }) {
  const stroke = "var(--mark-stroke)";
  const dash = "var(--mark-dash)";
  // Blades are sheared with skewX(-20deg); tan(20°) ≈ 0.364.
  const skewLeft = "translate(190 120) skewX(-20)";
  const skewRight = "translate(360 120) skewX(-20)";

  return (
    <svg
      viewBox='0 0 640 760'
      fill='none'
      aria-hidden='true'
      className={className}
    >
      {/* dashed diagonal running parallel to the blades */}
      <line
        x1='432'
        y1='80'
        x2='214'
        y2='700'
        stroke={dash}
        strokeWidth={1}
        strokeDasharray='7 7'
        vectorEffect='non-scaling-stroke'
      />

      {/* left blade — outlined, sheared */}
      <rect
        x='0'
        y='0'
        width='150'
        height='520'
        rx='75'
        transform={skewLeft}
        stroke={stroke}
        strokeWidth={1}
        vectorEffect='non-scaling-stroke'
      />

      {/* two dashed circles nested along the left blade */}
      <circle
        cx='206'
        cy='300'
        r='64'
        stroke={dash}
        strokeWidth={1}
        strokeDasharray='7 7'
        vectorEffect='non-scaling-stroke'
      />
      <circle
        cx='140'
        cy='476'
        r='64'
        stroke={dash}
        strokeWidth={1}
        strokeDasharray='7 7'
        vectorEffect='non-scaling-stroke'
      />

      {/* right blade — softly filled, sheared, sitting in front */}
      <rect
        x='0'
        y='0'
        width='150'
        height='520'
        rx='75'
        transform={skewRight}
        fill='var(--mark-fill)'
        stroke={stroke}
        strokeWidth={1}
        vectorEffect='non-scaling-stroke'
      />
    </svg>
  );
}
