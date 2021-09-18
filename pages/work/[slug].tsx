import Head from 'next/head';
import { GraphQLClient } from 'graphql-request';
import { FunctionComponent } from 'react';
import { IWorkDetailsProps } from '@/lib/interface';
import { WorkDetails } from '@/pages/works';

const Work: FunctionComponent<IWorkDetailsProps> = ({ works }) => {
  return (
    <>
      <Head>
        <title>Project - {works[0].slug}</title>
      </Head>
      {works.map((work: any) => (
        <WorkDetails key={work.slug} {...work} />
      ))}
    </>
  );
};

export const getStaticProps = async ({ params }: any) => {
  const graphcms = new GraphQLClient('https://api-us-east-1.graphcms.com/v2/ckovyil8d2u6801xq3snb4dss/master');

  const { works } = await graphcms.request(
    `
  query WorkDetailsQuery($slug: String!) {
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
      tech
      github
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
