import ProjectsBanner from 'components/containers/ProjectsBanner';
import { GraphQLClient } from 'graphql-request';

const Work = ({ works }) => {
  console.log('[Works]  ', works);
  return <ProjectsBanner title='[Project Name]' {...works} />;
};

export const getStaticProps = async ({ params }) => {
  const graphcms = new GraphQLClient(
    'https://api-us-east-1.graphcms.com/v2/ckovyil8d2u6801xq3snb4dss/master'
  );

  const { works } = await graphcms.request(
    `
  query WorkPageQuery($slug: String!) {
    works(where: {slug: $slug}) {
      title
      projectImage
      linkContent
      hrefLink
      jobDescription
    }
  }
  `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      works,
    },
  };
};
export const getStaticPaths = async () => {
  const graphcms = new GraphQLClient(
    'https://api-us-east-1.graphcms.com/v2/ckovyil8d2u6801xq3snb4dss/master'
  );

  const { works } = await graphcms.request(`
  {
    works {
      title
      linkContent
      projectImage
      hrefLink
      slug
    }
  }
`);

  const paths = works.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default Work;
