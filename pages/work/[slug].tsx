import ProjectsDetails from '@components/template/Works/ProjectsDetails';
import { GraphQLClient } from 'graphql-request';
import { FunctionComponent } from 'react';
import Head from 'next/head';

interface IProps {
  works: any[];
}

const Work: FunctionComponent<IProps> = ({ works }) => {
  return (
    <>
      <Head>
        <title>Project - {works[0].slug}</title>
      </Head>
      {works.map((work: any) => (
        <ProjectsDetails key={work.slug} {...work} />
      ))}
    </>
  );
};

export const getStaticProps = async ({ params }: any) => {
  const graphcms = new GraphQLClient('https://api-us-east-1.graphcms.com/v2/ckovyil8d2u6801xq3snb4dss/master');

  const { works } = await graphcms.request(
    `
  query WorkPageQuery($slug: String!) {
    works(where: {slug: $slug}) {
      title
      projectImage
      projectImages
      linkContent
      hrefLink
      jobDescription
      slug
      companyInfo
      features
      challenges
      tag
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
  const graphcms = new GraphQLClient('https://api-us-east-1.graphcms.com/v2/ckovyil8d2u6801xq3snb4dss/master');

  const { works } = await graphcms.request(`
  {
    works {
      title
      linkContent
      projectImage
      projectImages
      hrefLink
      slug
      companyInfo
      tag
    }
  }
`);

  const paths = works.map(({ slug }: any) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default Work;
