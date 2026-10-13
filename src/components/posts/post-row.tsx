import Image from "next/image";
import Link from "next/link";
import type { Post } from "~/types";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function formatMonth(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

/**
 * Mobile: a dark card with a framed cover (number + month, title, tags, arrow).
 * sm and up: a compact row with a small square thumbnail, date, and tags.
 */
export function PostRow({ post, index }: { post: Post; index: number }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className='group flex flex-col rounded-2xl bg-[var(--lemonColor)] p-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary sm:grid sm:grid-cols-[8rem_minmax(0,1fr)] sm:items-center sm:gap-8 sm:rounded-xl sm:bg-transparent sm:p-0'
    >
      <div className='relative aspect-[16/9] overflow-hidden rounded-xl bg-lightest-gray sm:aspect-square sm:rounded-lg sm:border sm:border-light-gray'>
        <Image
          src={post.image || "/blog/pnpm.avif"}
          alt=''
          fill
          sizes='(min-width: 640px) 8rem, 100vw'
          className='object-cover transition-transform duration-500 ease-out sm:group-hover:scale-[1.04]'
        />
      </div>

      <div className='flex min-w-0 flex-1 flex-col px-3.5 pb-3.5 pt-5 sm:block sm:p-0'>
        <span className='font-mono text-sm font-medium text-[var(--onSecondary)] sm:hidden'>
          {String(index + 1).padStart(2, "0")} — {formatMonth(post.date)}
        </span>

        <h3 className='mt-4 text-[1.6rem] font-bold leading-tight tracking-[-0.03em] text-[var(--bg)] sm:mt-0 sm:text-xl sm:leading-snug sm:tracking-[-0.02em] sm:text-lighter-gray'>
          <span className='underline decoration-transparent decoration-2 underline-offset-[6px] transition-[text-decoration-color] duration-300 sm:group-hover:decoration-[var(--lemonAccent)]'>
            {post.title}
          </span>
        </h3>

        <p className='mt-1.5 hidden max-w-[34rem] text-sm leading-6 text-gray sm:line-clamp-2'>
          {post.description}
        </p>

        <div className='mt-3 hidden flex-wrap items-center gap-1.5 sm:flex'>
          <time className='mr-1 font-mono text-xs text-gray'>
            {formatDate(post.date)}
          </time>
          {post.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className='bg-[var(--lemonColor)] px-2 py-1 font-mono text-[0.68rem] font-medium text-[var(--onSecondary)]'
            >
              {tag}
            </span>
          ))}
        </div>

        <div className='mt-auto flex items-center justify-between gap-4 pt-8 sm:hidden'>
          <div className='flex flex-wrap gap-1.5'>
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className='bg-[var(--onSecondary)] px-2 py-1 font-mono text-xs font-medium text-[var(--lemonColor)]'
              >
                {tag}
              </span>
            ))}
          </div>
          <span
            className='flex size-11 shrink-0 items-center justify-center rounded-full bg-[var(--onSecondary)] text-lg text-[var(--lemonColor)]'
            aria-hidden='true'
          >
            ↗
          </span>
        </div>
      </div>
    </Link>
  );
}
