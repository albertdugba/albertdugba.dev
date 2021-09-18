import { FunctionComponent } from 'react';
import Head from 'next/head';
import { GraphQLClient } from 'graphql-request';
import Layout from '@/layout/Layout';
import { CardsCarousel } from '@/common/carousel';

interface Props {
  posts: any[];
}

const AllPosts: FunctionComponent<Props> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blog Posts</title>
      </Head>

      <Layout imageBackground="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80">
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
