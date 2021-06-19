import { FunctionComponent } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import ProjectsBanner from 'components/containers/ProjectsBanner';
import Project from '../components/containers/Project';
import Footer from 'components/Section/Footer/Footer';
import { GraphQLClient } from 'graphql-request';

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
`;

// export const getStaticPaths = async () => {};
// export const getStaticProps = async () => {};

export const projectData = [
  {
    title: 'Personal Website',
    projectImage: '/ytakenote.png',
    linkContent: 'albertdugba.dev',
    hrefLink: 'https://www.albertdugba.dev',
  },
  {
    title: 'Personal Website',
    projectImage: '/ytakenote.png',
    linkContent: 'albertdugba.dev',
    hrefLink: 'https://www.albertdugba.dev',
  },
  {
    title: 'Ytakenote',
    projectImage: '/ytakenote.png',
    linkContent: 'ytakenote.com',
    hrefLink: 'https://ytakenote.com',
  },
];

interface Props {
  works: [];
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
      hrefLink
    }
  }
  `);

  return {
    props: {
      works,
    },
  };
};

const WorksPage = ({ works }) => {
  console.log('Works ', works);
  return (
    <>
      <Head>
        <title>Works - Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='Albert Dugba - Works & Projects'
          content='Albert Dugba - Works & Projects'
        ></meta>
      </Head>
      <ProjectsBanner title='/Works' />
      <div>
        <div className='container'>
          <h1>Some selected projects that I have worked on.</h1>
          <ProjectsContainer>
            {works.map((project, idx) => (
              <Link
                key={idx}
                href={`/work/[params]`}
                as={`/work/${project.title}`}
              >
                <Project
                  title={project.title}
                  projectImage={project.projectImage}
                  linkContent={project.linkContent}
                  hrefLink={project.hrefLink}
                />
              </Link>
            ))}
          </ProjectsContainer>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default WorksPage;
