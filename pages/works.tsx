import Head from 'next/head';
import { FunctionComponent } from 'react';
import { GraphQLClient } from 'graphql-request';
import { CardsCarousel } from '@components/UI/Carousel';
import Layout from '@components/Layout/layout';
import { IWorkProps } from 'types/types';

interface IProps {
  works: IWorkProps[];
}

export const getStaticProps = async () => {
  const graphcms = new GraphQLClient('https://api-us-east-1.graphcms.com/v2/ckovyil8d2u6801xq3snb4dss/master');

  const { works } = await graphcms.request(`
  query Works() {
    works{
      title
      linkContent
      projectImage
      projectImages
      hrefLink
      slug
      tag
    }
  }
  `);

  return {
    props: {
      works,
    },
  };
};

const WorksPage: FunctionComponent<IProps> = ({ works }) => (
  <div>
    <Head>
      <title>My Works | Projects</title>
    </Head>
    <Layout imageBackground="./tech-doodle.png">
      <CardsCarousel works={works} />
    </Layout>
  </div>
);

export default WorksPage;
