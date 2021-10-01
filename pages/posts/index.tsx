import { FunctionComponent } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { CardsCarousel } from '@/common/carousel';
import { graphcmsAPi } from '@/lib/service';
import { PostProps } from '@/lib/interface';
import { Loader } from '@/common/loader/loader';
import { Slider } from '@/common/slider/Slider';

// dynamic imports
const Layout = dynamic(() => import('@/layout/Layout'), { loading: () => <Loader /> });

interface Props {
  posts: PostProps[];
}

const AllPosts: FunctionComponent<Props> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>My Articles</title>
      </Head>
      <Layout imageBackground="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?cs=srgb&dl=pexels-josh-sorenson-1714208.jpg&fm=jpg">
        <Slider slides={posts} />
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
