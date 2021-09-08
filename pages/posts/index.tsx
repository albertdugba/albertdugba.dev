import { FunctionComponent } from 'react';
import Head from 'next/head';
import { CardsCarousel } from 'src/components/common/carousel';
import { GraphQLClient } from 'graphql-request';
import { Layout } from 'src/components/layout';

interface Props {
  posts: any[];
}

const AllPosts: FunctionComponent<Props> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blog Posts</title>
      </Head>

      <Layout imageBackground="./blog-doodle.jpg">
        <CardsCarousel posts={posts} />
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
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
    props: { posts },
  };
};

export default AllPosts;
