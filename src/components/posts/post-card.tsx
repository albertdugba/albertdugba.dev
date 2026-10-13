import Image from "next/image";
import Link from "next/link";
import readingTime from "reading-time";
import type { Post } from "~/types";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/**
 * Simple post card: rounded cover, "date, N min read", bold title. On hover the
 * card scales up slightly and a dark ring appears around the cover (the image
 * itself stays still).
 */
export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className='group block min-w-0 rounded-md transition-transform duration-300 ease-out hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-secondary motion-reduce:transition-none motion-reduce:hover:scale-100'
    >
      <div className='relative aspect-[3/2] rounded-md bg-lightest-gray outline outline-2 outline-offset-4 outline-transparent transition-[outline-color] duration-300 group-hover:outline-[var(--lighter-gray)]'>
        <Image
          src={post.image || "/blog/pnpm.avif"}
          alt=''
          fill
          sizes='(min-width: 1024px) 19rem, (min-width: 640px) 50vw, 100vw'
          className='rounded-md object-cover'
        />
      </div>

      <p className='mt-2 text-sm text-gray'>
        <time dateTime={new Date(post.date).toISOString()}>{formatDate(post.date)}</time>,{" "}
        {readingTime(post.body ?? "").text}
      </p>

      <h3 className='mt-1 text-[1.05rem] font-semibold leading-snug tracking-[-0.01em] text-lighter-gray underline decoration-transparent decoration-2 underline-offset-4 transition-[text-decoration-color] duration-300 group-hover:decoration-[var(--lemonAccent)]'>
        {post.title}
      </h3>
    </Link>
  );
}

/** Responsive grid of post cards: 1 column on phones, 2 on tablets, 3 on desktop. */
export function PostGrid({ posts }: { posts: Post[] }) {
  return (
    <div className='grid max-w-[60rem] grid-cols-[minmax(0,1fr)] gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3'>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
