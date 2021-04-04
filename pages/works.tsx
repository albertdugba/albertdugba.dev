import styled from 'styled-components';
import Head from 'next/head';
import ProjectsBanner from 'components/containers/ProjectsBanner';
import Project from '../components/containers/Project';

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`;

const WorksPage = () => {
  return (
    <>
      <Head>
        <title>Works - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProjectsBanner title="/Works" />
      <div>
        <div className="container">
          <h1>Some selected projects that I have worked on.</h1>
          <ProjectsContainer>
            <Project
              heading="Personal Website"
              projectImage="/ytakenote.png"
              linkContent="albertdugba.dev"
              hrefLink="https://www.albertdugba.dev"
            />
            <Project
              heading="Ytakenote"
              projectImage="/ytakenote.png"
              linkContent="ytakenote.com"
              hrefLink="https://ytakenote.com"
            />
            <Project
              heading="Store"
              projectImage="/ytakenote.png"
              linkContent="albertdugba.dev"
              hrefLink="https://www.albertdugba.dev"
            />
            <Project
              heading="Personal Website"
              projectImage="/ytakenote.png"
              linkContent="albertdugba.dev"
              hrefLink="https://www.albertdugba.dev"
            />
          </ProjectsContainer>
        </div>
      </div>
    </>
  );
};

export default WorksPage;
