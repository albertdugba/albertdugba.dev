import Head from 'next/head';
import dynamic from 'next/dynamic';
import { graphcmsAPi } from '@/lib/service';
import { useRouter } from 'next/router';
import { Loader } from '@/common/loader/loader';
import { singlePostQuery } from '@/lib/graphql-queries';

const PostDetails = dynamic(() => import('@/pages/posts/PostDetails'));

const Post = ({ post }: any) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="albertdugba.dev" />
        <meta property="og:description" content={post.postDescription} />
        <meta property="og:title" content={post.title} />
        <meta property="og:image" content={post.coverImage.url} />
        <meta name="twitter:card" content={post.coverImage.url} />
        <meta name="twitter:site" content="@Albert_Dugba" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.postDescription} />
        <meta name="twitter:image" content={post.coverImage.url} />
        <meta name="Blog Posts" content="Featured articles" />
      </Head>
      <PostDetails {...post} />
    </>
  );
};

export const getStaticProps = async ({ params }: any) => {
  const { post } = await graphcmsAPi.request(singlePostQuery, { slug: params.slug });

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
        slug
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
