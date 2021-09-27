import Head from 'next/head';
import dynamic from 'next/dynamic';
import { FunctionComponent } from 'react';
import { IWorkDetailsProps } from '@/lib/interface';
import { graphcmsAPi } from '@/lib/service';

// lazy
const WorkDetails = dynamic(() => import('@/pages/works').then((component: any) => component.WorkDetails));

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
  const { works } = await graphcmsAPi.request(
    `
  query WorkDetailsQuery($slug: String!) {
    works(where: {slug: $slug}) {
      title
      projectImage
      projectImages
      linkContent
      hrefLink
      jobDescription
      involvement
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
  const { works } = await graphcmsAPi.request(`
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
