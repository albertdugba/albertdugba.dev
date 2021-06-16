import ProjectsBanner from 'components/containers/ProjectsBanner';
import { projectData } from 'pages/works';

const Work = () => {
  return <ProjectsBanner title='[Project Name]' />;
};

export const getStaticProps = async ({ params }) => {
  const data = await projectData.find(title => title === params.title);
  const serializedData = data;

  return {
    props: {
      serializedData,
    },
  };
};
export const getStaticPaths = async () => {
  const serializedData = await projectData;

  return {
    paths: serializedData.map(({ title }) => ({
      params: { title },
    })),
    fallback: false,
  };
};

export default Work;
