import { FunctionComponent } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { CardsCarousel } from '@/common/carousel';
import { graphcmsAPi } from '@/lib/service';
import { PostProps } from '@/lib/interface';

// dynamic imports
const Layout = dynamic(() => import('@/layout/Layout'));

interface Props {
  posts: PostProps[];
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

export const getServerSideProps = async () => {
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
    props: { posts },
  };
};

export default AllPosts;
