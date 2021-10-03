import Head from 'next/head';
import { FunctionComponent } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Loader } from '@/common/loader/loader';
import { IWorkDetailsProps } from '@/lib/interface';
import { graphcmsAPi } from '@/lib/service';
import { allWorksQuery, singleWorkQuery } from '@/lib/graphql-queries';

// lazy
const WorkDetails = dynamic(() => import('@/pages/works').then((component: any) => component.WorkDetails));

const Work: FunctionComponent<IWorkDetailsProps> = ({ works }) => {
  const router = useRouter();

  if (router.isFallback) return <Loader />;

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
  const { works } = await graphcmsAPi.request(singleWorkQuery, {
    slug: params.slug,
  });

  return {
    props: {
      works,
    },
    revalidate: 1,
  };
};
export const getStaticPaths = async () => {
  const { works } = await graphcmsAPi.request(allWorksQuery);

  const paths = works.map(({ slug }: any) => ({ params: { slug } }));

  return {
    paths,
    fallback: true,
  };
};

export default Work;
