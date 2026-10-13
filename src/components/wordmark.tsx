import { Overpass } from "next/font/google";

const overpass = Overpass({ subsets: ["latin"], weight: ["400", "900"] });

/** "[albert dugba]" wordmark: heavy first name, regular surname, in code brackets. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`${overpass.className} inline-flex items-baseline leading-none tracking-[-0.035em] text-lighter-gray [font-feature-settings:'kern'] [text-rendering:geometricPrecision] ${className}`}
    >
      <span className='font-normal text-gray' aria-hidden='true'>
        [
      </span>
      <span className='px-[0.14em] font-black'>albert</span>
      <span className='font-normal'>dugba</span>
      <span className='font-normal text-gray' aria-hidden='true'>
        ]
      </span>
    </span>
  );
}
