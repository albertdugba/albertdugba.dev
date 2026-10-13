import { Overpass } from "next/font/google";
import { Posts } from "~/components/posts";
import { getAllPosts } from "~/lib/posts";
import type { Post } from "~/types";

const overpass = Overpass({ subsets: ["latin"] });

const PostsPage = async () => {
  const posts = (await getAllPosts())
    .filter((post): post is Post => Boolean(post?.isPublished))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className='mx-auto w-full max-w-5xl pb-24 pt-20 sm:pt-28'>
      <header className='mb-14 max-w-[40rem] sm:mb-16'>
        <h1
          className={`${overpass.className} text-[clamp(2.75rem,6vw,4.5rem)] leading-none tracking-[-0.03em] text-secondary`}
        >
          Writing
        </h1>
        <p className='mt-5 text-lg leading-8 text-article-color'>
          Notes on software engineering, design systems, AI, performance,
          tooling, and life outside the editor.
        </p>
      </header>

      <Posts posts={posts} />
    </div>
  );
};
export default PostsPage;
