import Head from 'next/head';
import { GraphQLClient } from 'graphql-request';
import Landing from '../components/Landing';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export const getStaticProps: GetStaticProps = async context => {
  const graphcms = new GraphQLClient(
    'https://api-us-west-2.graphcms.com/v2/ckn7dbcigby0f01xrec441zrb/master'
  );

  const { posts } = await graphcms.request(`
  query Posts() {
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

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Albert Dugba</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Albert Dugba - Portfolio & Personal Website"
          content="Albert Dugba - Portfoio & Personal Website"
        />
      </Head>

      <Landing posts={posts} />
    </>
  );
}
