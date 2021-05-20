import { GetStaticProps, GetStaticPaths } from 'next';
import { GraphQLClient } from 'graphql-request';
import PostDetails from 'components/containers/PostDetails';

const Post = ({ post }) => {
  console.log(post);
  return <PostDetails {...post} />;
};

export const getStaticProps = async ({ params }) => {
  const graphcms = new GraphQLClient(
    'https://api-us-east-1.graphcms.com/v2/ckovyil8d2u6801xq3snb4dss/master'
  );

  const { post } = await graphcms.request(
    `
    query Post($slug: String!) {
      post(where: { slug: $slug }) {
        id
        title
        content{
          text
        }
        slug
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
  const graphcms = new GraphQLClient(
    'https://api-us-east-1.graphcms.com/v2/ckovyil8d2u6801xq3snb4dss/master'
  );

  const { posts } = await graphcms.request(
    `
    {
      posts {
        id
        title
        content{
          text
        }
        slug
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
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
};

export default Post;
