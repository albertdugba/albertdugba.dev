import { InferGetServerSidePropsType } from "next";
import dynamic from "next/dynamic";

import { apolloClient } from "~/index";
import { Post } from "~/types/post";
import { ALL_POSTS } from "~/queries/posts";
import { BlogCard } from "~/components/card";

const BlogLayout = dynamic(
  () => import("~/components/layout").then((comp) => comp.BlogLayout),
  { ssr: false }
);

interface BlogsProps {
  posts: InferGetServerSidePropsType<typeof getServerSideProps>;
}

const Blogs = ({ posts }: BlogsProps) => {
  return (
    <BlogLayout title='blog'>
      {/* <div className='p-3 lg:block lg:max-w-6xl w-11/12 mx-auto -mt-20 z-[99999999999999] h-[390px] text-center justify-center flex flex-col bg-gradient-to-r from-[#f5deed] to-[#f9f7f9] rounded-md shadow-lg'>
        Featured Blog Post
      </div> */}

      <ul className='flex pb-20 lg:flex-row md:flex-row flex-col gap-8 mt-6 lg:max-w-6xl w-11/12 mx-auto'>
        {posts?.posts.map((post) => (
          <BlogCard
            key={post.id}
            date={post.updatedAt}
            description={post.content.slice(0, 100)}
            title={post.title}
            slug={post.slug}
            imageUrl={post.coverImage.url}
          />
        ))}
      </ul>
    </BlogLayout>
  );
};
export default Blogs;

export async function getServerSideProps() {
  const { data } = await apolloClient.query<Post[]>({
    query: ALL_POSTS,
  });

  return {
    props: {
      posts: data,
    },
  };
}
