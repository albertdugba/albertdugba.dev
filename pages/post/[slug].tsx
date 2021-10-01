import Head from 'next/head';
import dynamic from 'next/dynamic';
import { graphcmsAPi } from '@/lib/service';
import { useRouter } from 'next/router';
import { Loader } from '@/common/loader/loader';

const PostDetails = dynamic(() => import('@/pages/posts/PostDetails'));

const Post = ({ post }: any) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <>
      <Head>
        <title>Albert's Blog - {post.slug}</title>
      </Head>
      <PostDetails {...post} />
    </>
  );
};

export const getStaticProps = async ({ params }: any) => {
  const { post } = await graphcmsAPi.request(
    `
    query Post($slug: String!) {
      post(where: { slug: $slug }) {
        id
        title
        content
        slug
        tags
        date
        coverImage {
          id
          url
        }
        author {
          name
          picture{
            url
          }
        }
      
      }
    }
  `,

    { slug: params.slug }
  );

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const { posts } = await graphcmsAPi.request(
    `
    {
      posts {
        id
        title
        content
        slug
        tags
        coverImage {
          id
          url
        }
        author {
          id
          name
        }
        date
      }
    }
  `
  );

  return {
    paths: posts.map(({ slug }: any) => ({
      params: { slug },
    })),
    fallback: true,
  };
};

export default Post;
