import { FunctionComponent } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { graphcmsAPi } from '@/lib/service';
import { IProjectProps } from '@/lib/interface';
import { Loader } from '@/common/loader/loader';
import { Slider } from '@/common/slider/Slider';

const Layout = dynamic(() => import('@/layout/Layout'), { loading: () => <Loader /> });

interface IProps {
  works: IProjectProps[];
}

const WorksPage: FunctionComponent<IProps> = ({ works }) => (
  <>
    <Head>
      <title>My Works</title>
    </Head>
    <Layout imageBackground="./tech-doodle.png">
      <Slider slides={works} />
    </Layout>
  </>
);

export const getServerSideProps = async () => {
  const { works } = await graphcmsAPi.request(`
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

export default WorksPage;
