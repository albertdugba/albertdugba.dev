import { FunctionComponent } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import ProjectsDetails from 'components/containers/ProjectsDetails';
import Project from '../components/containers/Project';
import Footer from 'components/Section/Footer/Footer';
import { GraphQLClient } from 'graphql-request';
import { Banner } from 'components/containers/Banner';

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
`;

interface Props {
  works: any[];
}

export const getStaticProps = async () => {
  const graphcms = new GraphQLClient(
    'https://api-us-east-1.graphcms.com/v2/ckovyil8d2u6801xq3snb4dss/master'
  );

  const { works } = await graphcms.request(`
  query Works(){
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
  return (
    <>
      <Head>
        <title>Works - Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='Albert Dugba - Works & Projects'
          content='Albert Dugba - Works & Projects | Portfolio'
        ></meta>
      </Head>

      <Banner
        title='Works'
        subTitle='Some selected projects that I have worked on.'
      />
      <div>
        <div className='container'>
          <ProjectsContainer>
            {works.map((project, idx) => (
              <Project
                key={idx}
                slug={project.slug}
                title={project.title}
                projectImage={project.projectImage}
                linkContent={project.linkContent}
                hrefLink={project.hrefLink}
              />
            ))}
          </ProjectsContainer>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default WorksPage;
