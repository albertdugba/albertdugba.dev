import { InferGetServerSidePropsType } from "next";
import dynamic from "next/dynamic";

import { apolloClient } from "~/index";
import { Post } from "~/types/post";
import { ALL_POSTS } from "~/queries/posts";
import { BlogCard } from "~/components/card";
import { Layout } from "~/components/layout";

interface BlogsProps {
  posts: InferGetServerSidePropsType<typeof getServerSideProps>;
}

const Blogs = ({ posts }: BlogsProps) => {
  console.log(posts);
  return (
    <Layout title='blogs'>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-10 mt-20 lg:max-w-6xl w-11/12 mx-auto'>
        {posts?.posts.map((post) => (
          <BlogCard
            key={post.id}
            date={post.updatedAt}
            description={post.content.slice(0, 100)}
            title={post.title}
            slug={post.slug}
            imageUrl={post?.coverImage?.url}
          />
        ))}
      </ul>
    </Layout>
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
