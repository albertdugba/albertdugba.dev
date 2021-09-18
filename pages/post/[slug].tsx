import PostDetails from '@/pages/posts/PostDetails';
import { GraphQLClient } from 'graphql-request';
import Head from 'next/head';

const Post = ({ post }: any) => {
  return (
    <>
      <Head>
        <title>Albert Dugba Post - {post.slug}</title>
      </Head>
      <PostDetails {...post} />
    </>
  );
};

export const getStaticProps = async ({ params }: any) => {
  const graphcms = new GraphQLClient('https://api-us-east-1.graphcms.com/v2/ckovyil8d2u6801xq3snb4dss/master');

  const { post } = await graphcms.request(
    `
    query Post($slug: String!) {
      post(where: { slug: $slug }) {
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
  const graphcms = new GraphQLClient('https://api-us-east-1.graphcms.com/v2/ckovyil8d2u6801xq3snb4dss/master');

  const { posts } = await graphcms.request(
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
    fallback: false,
  };
};

export default Post;
