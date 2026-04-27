import Image from "next/image";
import Link from "next/link";
import type { Post } from "~/types";
import { Grit } from "~/components/grit";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function PostTitle({ title }: { title: string }) {
  return (
    <h1 className='text-lg sm:text-2xl font-bold leading-snug'>
      <Grit>
        <span className='relative inline-block'>
          <span
            className='absolute -left-1.5 -top-0.5 w-4 h-4 z-0'
            style={{ backgroundColor: "var(--lemonAccent)" }}
            aria-hidden='true'
          />
          <span className='relative z-10'>{title.charAt(0)}</span>
        </span>
        <span className='underline decoration-[var(--lemonAccent)] decoration-[3px] underline-offset-2 [text-decoration-skip-ink:none]'>
          {title.slice(1)}
        </span>
      </Grit>
    </h1>
  );
}

function ArticleRow({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className='group flex gap-6 py-8 border-t border-light-gray first:border-t-0'
    >
      <div className='relative w-32 h-32 sm:w-40 sm:h-36 flex-shrink-0 overflow-hidden rounded-lg'>
        <Image
          src={post.image}
          alt={post.title}
          fill
          className='object-cover'
        />
      </div>

      <div className='flex flex-col justify-center min-w-0 flex-1'>
        <PostTitle title={post.title} />

        <div className='flex items-center gap-2 mt-2 flex-wrap'>
          <time className='text-sm text-gray'>{formatDate(post.date)}</time>
        </div>

        {!!post.tags?.length && (
          <div className='flex flex-wrap gap-1.5 mt-2'>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className='text-xs font-semibold px-2 py-0.5 rounded-sm bg-secondary text-[var(--lemonAccent)]'
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <p className='mt-2 text-article-color/70 leading-relaxed line-clamp-2'>
          {post.description}
        </p>
      </div>
    </Link>
  );
}

export function RecentArticles({ posts }: { posts: (Post | null)[] }) {
  const validPosts = posts.filter(Boolean) as Post[];

  if (validPosts.length === 0) return null;

  return (
    <section className='mt-20 mb-16'>
      <div className='flex items-baseline justify-between'>
        <h2 className='text-2xl font-bold tracking-tight'>Recent Posts</h2>
        <Link
          href='/blog'
          className='text-sm font-medium text-gray hover:text-secondary transition-colors'
        >
          View all →
        </Link>
      </div>

      <div>
        {validPosts.map((post) => (
          <ArticleRow key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
