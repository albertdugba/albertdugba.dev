import Link from "next/link";
import { PostGrid } from "~/components/posts/post-card";
import type { Post } from "~/types";

export function RecentArticles({ posts }: { posts: (Post | null)[] }) {
  const validPosts = posts.filter(Boolean) as Post[];

  if (validPosts.length === 0) return null;

  return (
    <section
      id='writing'
      className='mx-auto mt-24 w-full max-w-5xl scroll-mt-8 sm:mt-32'
    >
      <div className='mb-10 flex items-baseline justify-between gap-5'>
        <h2 className='text-xl font-bold tracking-[-0.035em] text-lighter-gray sm:text-2xl'>
          Writing
        </h2>
        <Link
          href='/blog'
          className='text-sm font-medium text-gray transition-colors hover:text-secondary'
        >
          View all
        </Link>
      </div>
      <PostGrid posts={validPosts} />
    </section>
  );
}
