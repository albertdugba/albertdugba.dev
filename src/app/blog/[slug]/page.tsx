import { Overpass } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PostBody } from "~/components/posts/post-body";
import { TableOfContents } from "~/components/posts/table-of-contents";
import { extractHeadings } from "~/lib/extract-headings";
import { getPost } from "~/lib/posts";
import readingTime from "reading-time";
import { StructuredData } from "~/components/structured-data";

const overpass = Overpass({ subsets: ["latin"] });

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

  const headings = extractHeadings(post.body);

  return (
    <>
      <StructuredData post={post} />
      <div className='mx-auto w-full max-w-5xl pt-10 sm:pt-16'>
        <Link
          href='/blog'
          className='text-sm text-gray !no-underline transition-colors hover:text-fg'
        >
          ← Writing
        </Link>

        <header className='mt-10 max-w-[46rem]'>
          <h1
            className={`${overpass.className} text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.08] tracking-[-0.03em] text-secondary`}
          >
            {post.title}
          </h1>

          {post.description && (
            <p className='mt-5 text-lg leading-8 text-gray'>
              {post.description}
            </p>
          )}

          <div className='mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-2 font-mono text-xs text-gray'>
            <time>{formattedDate}</time>
            <span aria-hidden='true'>·</span>
            <span>{readingTime(post.body).text}</span>
            {post.tags?.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className='bg-[var(--lemonColor)] px-2 py-1 font-medium text-[var(--onSecondary)]'
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className='relative mb-14 mt-10 aspect-[16/9] overflow-hidden rounded-xl border border-light-gray bg-lightest-gray'>
          <Image
            src={post.image}
            alt=''
            fill
            priority
            sizes='(min-width: 1024px) 64rem, 100vw'
            className='!rounded-none object-cover !p-0'
          />
        </div>

        <div className='relative flex gap-10'>
          <div className='min-w-0 flex-1'>
            <PostBody>{post?.body}</PostBody>
          </div>
          <aside className='sticky top-24 hidden w-52 shrink-0 self-start xl:block'>
            <TableOfContents headings={headings} />
          </aside>
        </div>
      </div>
    </>
  );
}

export default PostPage;
