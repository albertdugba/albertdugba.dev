import Head from 'next/head';
import { FunctionComponent } from 'react';
import { GraphQLClient } from 'graphql-request';
import { CardsCarousel } from 'src/components/common/carousel';
import { Layout } from '@components/layout';
import { IProjectProps } from 'src/lib/interface';

interface IProps {
  works: IProjectProps[];
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
      features
      slug
      tag
      internalRoute
    }
  }
  `);

  return {
    props: {
      works,
    },
  };
};

const cardVariants = {
  initial: {
    y: 0,
  },

  animate: {
    y: 0,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
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
