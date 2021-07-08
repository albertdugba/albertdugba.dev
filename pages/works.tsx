import { FunctionComponent } from 'react';
import { GraphQLClient } from 'graphql-request';
import { Div } from '../components/UI/Div';
import Layout from 'components/layout';

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
  return <Layout />;
};

export default WorksPage;
