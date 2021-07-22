import { FunctionComponent } from 'react';
import { GraphQLClient } from 'graphql-request';
import Layout from 'components/layout';
import { CardsCarousel } from 'components/UI/Carousel/CardsCarousel';

interface Props {
  works: any[];
}

export const getStaticProps = async () => {
  const graphcms = new GraphQLClient(
    'https://api-us-east-1.graphcms.com/v2/ckovyil8d2u6801xq3snb4dss/master'
  );

  const { works } = await graphcms.request(`
  query Works() {
    works{
      title
      linkContent
      projectImage
      projectImages
      hrefLink
      slug
    }
  }
  `);

  return {
    props: {
      works,
    },
  };
};

const WorksPage: FunctionComponent<Props> = ({ works }) => {
  return (
    <Layout imageBackground='./tech-doodle.png'>
      <CardsCarousel works={works} />
    </Layout>
  );
};

export default WorksPage;
