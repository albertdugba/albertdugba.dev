/**
 * A sparse system map for design systems, AI product work, and infrastructure.
 * It stays beyond the reading line and disappears below desktop widths.
 */
export function HeroBackground() {
  const line = "var(--guide-line)";
  const accent = "var(--lemonAccent)";

  return (
    <div
      className='pointer-events-none absolute -inset-x-10 -top-10 bottom-0 z-0 hidden overflow-visible lg:block'
      aria-hidden='true'
    >
      <svg
        viewBox='0 0 760 640'
        fill='none'
        className='absolute left-[24rem] top-0 h-[37rem] w-[43rem] max-w-none opacity-25'
      >
        {/* sweeping guide curves */}
        <path
          d='M54 616C154 514 112 349 227 218C303 131 403 93 540 69'
          stroke={line}
          strokeWidth='1.5'
        />
        <path
          d='M159 32C153 185 247 272 393 319C517 359 597 447 587 611'
          stroke={line}
          strokeDasharray='9 10'
          strokeWidth='1.5'
        />

        {/* component library window */}
        <rect x='194' y='184' width='220' height='170' rx='18' fill='var(--mark-fill)' stroke={line} strokeWidth='1.5' />
        <path d='M194 214H414' stroke={line} strokeWidth='1.5' />
        <circle cx='214' cy='199' r='3.5' fill={line} />
        <circle cx='228' cy='199' r='3.5' fill={line} />
        <circle cx='242' cy='199' r='3.5' fill={line} />
        {[
          [214, 232],
          [314, 232],
          [214, 292],
          [314, 292],
        ].map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <rect x={x} y={y} width='80' height='46' rx='9' stroke={line} strokeWidth='1.5' />
            <path d={`M${x + 22} ${y + 23}H${x + 52}`} stroke={accent} strokeWidth='3' strokeLinecap='round' />
          </g>
        ))}

        {/* model / signal badge */}
        <circle cx='560' cy='122' r='46' stroke={line} strokeWidth='1.5' />
        <circle cx='560' cy='122' r='30' stroke={line} strokeDasharray='4 6' strokeWidth='1.5' />
        {Array.from({ length: 8 }, (_, i) => {
          const angle = (i * Math.PI) / 4;
          const x1 = 560 + Math.cos(angle) * 12;
          const y1 = 122 + Math.sin(angle) * 12;
          const x2 = 560 + Math.cos(angle) * 22;
          const y2 = 122 + Math.sin(angle) * 22;
          return (
            <path
              key={i}
              d={`M${x1.toFixed(1)} ${y1.toFixed(1)}L${x2.toFixed(1)} ${y2.toFixed(1)}`}
              stroke={accent}
              strokeWidth='2'
              strokeLinecap='round'
            />
          );
        })}
        <path d='M560 113L567 122L560 131L553 122Z' fill={accent} />

        {/* pipeline: build → ship */}
        <circle cx='318' cy='470' r='9' stroke={line} strokeWidth='1.5' />
        <path d='M327 470H497' stroke={line} strokeWidth='1.5' />
        <circle cx='506' cy='470' r='9' stroke={line} strokeWidth='1.5' />
        <path d='M502 470L505 473L511 466' stroke={accent} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      </svg>
    </div>
  );
}
