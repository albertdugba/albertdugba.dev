import { FunctionComponent } from 'react';
import Head from 'next/head';
import Layout from '@components/layout/layout';
import { CardsCarousel } from '@components/common/carousel/CardsCarousel';

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

export default AllPosts;
