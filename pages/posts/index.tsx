import { FunctionComponent } from 'react';
import { GraphQLClient } from 'graphql-request';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Layout from 'components/layout';
import { CardsCarousel } from 'components/UI/Carousel/CardsCarousel';

interface Props {
  posts: any[];
}

const AllPosts: FunctionComponent<Props> = ({ posts }) => {
  return (
    <Layout imageBackground='./blog-doodle.jpg'>
      <CardsCarousel posts={posts} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
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

  return {
    props: {
      posts,
    },
  };
};
export default AllPosts;
