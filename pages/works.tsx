import { FunctionComponent } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { IProjectProps } from '@/lib/interface';
import { Loader } from '@/common/loader/loader';
import { Slider } from '@/common/slider/Slider';
import { graphcmsAPi } from '@/lib/service';
import { allWorksQuery } from '@/lib/graphql-queries';

const Layout = dynamic(() => import('@/layout/Layout'), { loading: () => <Loader title="Loading Projects..." /> });

interface IProps {
  works: IProjectProps[];
}

const WorksPage: FunctionComponent<IProps> = ({ works }) => (
  <>
    <Head>
      <title>My Works</title>
      <meta name="My Works" content="Some selected projects I have worked on" />
    </Head>
    <Layout imageBackground="./tech-doodle.png">
      <Slider slides={works} />
    </Layout>
  </>
);

export const getServerSideProps = async () => {
  const { works } = await graphcmsAPi.request(allWorksQuery);

  return {
    props: {
      works,
    },
  };
};

export default WorksPage;
