import Link from "next/link";

import { Post } from "~/types";

const Navigation = ({ previous, next }: { previous?: Post; next?: Post }) => {
  if (!previous && !next) return null;

  const hasBoth = previous && next;

  return (
    <nav className='w-full mt-10 mb-12 border-2 border-fg/10 rounded-xl overflow-hidden'>
      {hasBoth ? (
        <>
          {/* Header row */}
          <div className='grid grid-cols-2 border-b-2 border-fg/10'>
            <div className='p-4 border-r-2 border-fg/10'>
              <Link
                href={`./${previous.slug}`}
                className='font-bold hover:text-secondary transition-colors'
              >
                ← Prev
              </Link>
            </div>
            <div className='p-4 text-right'>
              <Link
                href={`./${next.slug}`}
                className='font-bold hover:text-secondary transition-colors'
              >
                Next →
              </Link>
            </div>
          </div>

          {/* Title row */}
          <div className='grid grid-cols-2'>
            <div className='p-4 border-r-2 border-fg/10'>
              <Link
                href={`./${previous.slug}`}
                className='text-sm hover:text-secondary transition-colors'
              >
                {previous.title}
              </Link>
            </div>
            <div className='p-4 text-right'>
              <Link
                href={`./${next.slug}`}
                className='text-sm hover:text-secondary transition-colors'
              >
                {next.title}
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Single direction */}
          <div className='p-4 border-b-2 border-fg/10' style={{ textAlign: next ? "right" : "left" }}>
            {previous && (
              <Link
                href={`./${previous.slug}`}
                className='font-bold hover:text-secondary transition-colors'
              >
                ← Prev
              </Link>
            )}
            {next && (
              <Link
                href={`./${next.slug}`}
                className='font-bold hover:text-secondary transition-colors'
              >
                Next →
              </Link>
            )}
          </div>
          <div className='p-4' style={{ textAlign: next ? "right" : "left" }}>
            {previous && (
              <Link
                href={`./${previous.slug}`}
                className='text-sm hover:text-secondary transition-colors'
              >
                {previous.title}
              </Link>
            )}
            {next && (
              <Link
                href={`./${next.slug}`}
                className='text-sm hover:text-secondary transition-colors'
              >
                {next.title}
              </Link>
            )}
          </div>
        </>
      )}
    </nav>
  );
};

export default Navigation;
