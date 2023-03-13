import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Image from "next/image";

import { apolloClient } from "~/index";
import { SINGLE_POST } from "~/queries/posts";
import { Post } from "~/types/post";

interface PostProps {
  post: InferGetServerSidePropsType<typeof getServerSideProps>;
}
const BlogPage = ({ post }: PostProps) => {
  const { content, coverImage, postDescription, publishedAt, title, tags } =
    post.post;

  const bgImage = {
    background: `linear-gradient(to bottom,rgba(126, 4, 153, 0.5), rgba(51, 27, 51, 0.5)),
      url("${
        (coverImage.url && coverImage.url !== "") || coverImage.url !== null
          ? coverImage.url
          : "/blog-banner.jpeg"
      }") no-repeat center center/cover`,
    width: "100vw",
    height: "55vh",
  };
  return (
    <>
      <div style={bgImage} className='relative'>
        <div className='max-w-6xl mx-auto p-10 -mt-0'>
          <h1 className='lg:text-6xl text-2xl text-black'>{title}</h1>
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
