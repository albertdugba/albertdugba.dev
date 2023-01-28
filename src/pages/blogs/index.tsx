import { InferGetServerSidePropsType } from "next";
import Image from "next/image";
import { BlogLayout } from "~/components/layout";
import { apolloClient } from "~/config/apollo-client";
import { Post } from "~/types/post";
import { ALL_POSTS } from "~/queries/posts";

interface BlogsProps {
  posts: InferGetServerSidePropsType<typeof getServerSideProps>;
}

const Blogs = ({ posts }: BlogsProps) => {
  return (
    <BlogLayout title='Blog'>
      <div className='p-3 lg:block  lg:max-w-4xl w-11/12 mx-auto -mt-20 z-[99999999999999] h-[290px] text-center justify-center flex flex-col bg-gradient-to-r from-[#f5deed] to-[#f9f7f9] rounded-md shadow-lg'>
        Featured Blog Post
      </div>

      <ul className='flex lg:flex-row flex-col gap-8 mt-6 lg:max-w-4xl w-12/12 mx-auto'>
        {posts?.posts.map(post => (
          <li
            key={post.id}
            className='bg-gradient-to-r h-[200px] lg:w-[300px] w-11/12 mx-a from-[#f5deed] to-[#f9f7f9] rounded-md my-3'
          >
            <div className='bg-white h-full shadow-md border border-gray-200 rounded-lg mb-5'>
              <a>
                <Image
                  src={post.coverImage.url}
                  alt={post.title}
                  height={200}
                  width={200}
                  style={{ objectFit: "cover" }}
                  className='rounded-t-lg w-full h-full'
                />
              </a>

              <h1>{post.title}</h1>
            </div>
          </li>
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
