import Head from 'next/head';
import Landing from '../components/Landing';
import { GraphQLClient } from 'graphql-request';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export const getStaticProps: GetStaticProps = async context => {
  const graphcms = new GraphQLClient(
    'https://api-us-east-1.graphcms.com/v2/ckovyil8d2u6801xq3snb4dss/master'
  );

  const { posts } = await graphcms.request(`
  query Posts() {
    posts {
      id
      title
      excerpt
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
  `);

  const { works } = await graphcms.request(`
  query Works(){
    works {
      title
      linkContent
      projectImage
      hrefLink
      slug
    }
  }
  `);

  return {
    props: {
      posts,
      works,
    },
  };
};

export default function Home({
  posts,
  works,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Albert Dugba</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='Albert Dugba - Portfolio & Personal Website'
          content='Albert Dugba - Portfoio & Personal Website'
        />
      </Head>
      <Landing />
    </>
  );
}
