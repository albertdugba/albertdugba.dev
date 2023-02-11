import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import { apolloClient } from "~/index";
import { SINGLE_POST } from "~/queries/posts";
import { Post } from "~/types/post";

interface PostProps {
  post: InferGetServerSidePropsType<typeof getServerSideProps>;
}
const BlogPage = ({ post }: PostProps) => {
  return (
    <>
      <div
        className={`bg-center bg-no-repeat bg-cover h-[90vh] relative bg-gradient-to-r from-white to-black, bg-gradient-to-l from-white to-black, bg-gradient-to-b from-white to-black`}
      >
        <div className='max-w-4xl mx-auto h-full'>
          <div className='flex flex-col w-full h-full'>
            <h1 className='text-white lg:text-[50px] text-[30px]'>
              {post.post.title}
            </h1>
          </div>
        </div>
        <div className='bg-gradient-to-r from-white to-black, bg-gradient-to-l from-white to-black, bg-gradient-to-b from-white to-black'>
          <p className='bg-white -mt-40 max-w-4xl mx-auto rounded-lg border lg:p-10 p-6 leading-6 overflow-scroll'>
            {post.post.content}
          </p>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  const { data } = await apolloClient.query<Post>({
    query: SINGLE_POST,
    variables: { slug: params?.slug },
  });

  return {
    props: {
      post: data,
    },
  };
}
export default BlogPage;
