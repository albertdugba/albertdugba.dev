import Head from 'next/head';
import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';
import Landing from '../components/Landing';

export const getStaticProps = async () => {
  const graphcms = new GraphQLClient(
    'https://api-us-west-2.graphcms.com/v2/ckn7dbcigby0f01xrec441zrb/master'
  );

  const { posts } = await graphcms.request(`
  {
    posts{
      title
      body
      tags
    }
  } 
  `);

  return {
    props: {
      posts,
    },
  };
};

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Albert Dugba</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Landing posts={posts} />
    </>
  );
}
