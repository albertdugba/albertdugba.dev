import { FunctionComponent, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { graphcmsAPi } from '@/lib/service';
import { CardsCarousel } from '@/common/carousel';
import { IProjectProps } from '@/lib/interface';

const Layout = dynamic(() => import('@/layout/Layout'), { loading: () => <h1>loading</h1> });

interface IProps {
  works: IProjectProps[];
}

const WorksPage: FunctionComponent<IProps> = ({ works }) => (
  <Layout imageBackground="./tech-doodle.png">
    <CardsCarousel works={works} />
  </Layout>
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
