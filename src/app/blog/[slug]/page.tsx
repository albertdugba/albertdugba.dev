import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PostBody } from "~/components/posts/post-body";
import { getPost } from "~/lib/posts";
import readingTime from "reading-time";
import { StructuredData } from "~/components/structured-data";
import { Grit } from "~/components/grit";

async function PostPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = await getPost(params.slug);

  if (!post) return notFound();

  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <>
      <StructuredData post={post} />
      <div className='min-h-screen w-full pt-6'>
        <nav className='flex items-center mb-10'>
          <div className='flex items-center gap-2 text-sm'>
            <Link
              href='/blog'
              className='text-gray hover:text-fg transition-colors'
            >
              Posts
            </Link>
            <span className='text-gray'>/</span>
            {post.tags?.[0] && (
              <span className='text-gray'>{post.tags[0]}</span>
            )}
          </div>
        </nav>

        <header className='w-full mb-10'>
          <h1 className='text-3xl sm:text-[2.5rem] lg:text-5xl font-bold tracking-[-0.03em] leading-[1.15] mb-4'>
            <Grit>
              <span className='relative inline-block'>
                <span
                  className='absolute -left-2 -top-1 w-6 h-6 sm:w-7 sm:h-7 z-0'
                  style={{ backgroundColor: "var(--lemonAccent)" }}
                  aria-hidden='true'
                />
                <span className='relative z-10'>{post.title.charAt(0)}</span>
              </span>
              <span className='underline decoration-[var(--lemonAccent)] decoration-4 underline-offset-2 [text-decoration-skip-ink:none]'>
                {post.title.slice(1)}
              </span>
            </Grit>
          </h1>

          <time className='text-sm text-gray block mb-3'>{formattedDate}</time>

          {!!post?.tags?.length && (
            <div className='flex flex-wrap gap-1.5 mb-3'>
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

          <span className='text-sm text-gray'>
            {readingTime(post.body).text}
          </span>
        </header>

        {/* Hero image — full width */}
        <div className='relative lg:h-[440px] h-[280px] mb-14 overflow-hidden'>
          <Image
            src={post.image}
            alt={post.title}
            fill
            className='object-contain rounded-xl'
          />
        </div>

        <PostBody>{post?.body}</PostBody>
      </div>
    </>
  );
}

export default PostPage;
