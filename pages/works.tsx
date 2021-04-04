import styled from 'styled-components';
import Head from 'next/head';
import Image from 'next/image';
import GraphQL from 'styles/Icons/graphql';
import TypeScript from 'styles/Icons/typescript';
import Terminal from 'styles/Icons/terminal';
import FireBase from 'styles/Icons/firebase';
import Github from 'styles/Icons/github';
import NodeJS from 'styles/Icons/node';
import NextJS from 'styles/Icons/nextjs';
import ReactJS from 'styles/Icons/react';
import Project from 'components/containers/Project';

const Container = styled.div`
  min-height: 100%;
  overflow: hidden;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit;
    font-size: 3rem;
    color: white;
  }
`;

const SvgIcons = styled.div`
  display: flex;
  position: relative;
  padding: 10px;

  .graphql {
    position: absolute;
    right: 0%;
    top: 0;
  }

  .typescript {
    position: absolute;
    bottom: 0%;
    right: 0;
  }

  .terminal {
    position: absolute;
    bottom: 0%;
    left: 0;
  }

  .firebase {
    position: absolute;
    top: 30%;
    left: 80%;

    @media (max-width: 801px) {
      left: 90%;
    }
  }

  .github {
    position: absolute;
    bottom: 0%;
    left: 0;
  }

  .nextjs {
    position: absolute;
    bottom: 0;
    top: 60%;
    left: 10%;
  }

  .react {
    position: absolute;
    top: 30%;
    left: 20%;

    @media (max-width: 801px) {
      top: -2%;
    }
  }
`;

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
      <div style={{ background: '#142b2e' }}>
        <SvgIcons className="container">
          <div className="overlay">
            <div className="graphql">
              <GraphQL width={40} height={40} color="grey" />
            </div>
            <div className="typescript">
              <TypeScript width={40} height={40} color="grey" />
            </div>

            <div className="firebase">
              <FireBase width={40} height={40} color="grey" />
            </div>
            <div className="github">
              <Github width={40} height={40} color="grey" />
            </div>
            <div className="nodejs">
              <NodeJS width={40} height={40} color="grey" />
            </div>
            <div className="react">
              <ReactJS width={40} height={40} color="grey" />
            </div>
          </div>

          <Container className="container">
            <h1 className="title">/Works.</h1>
          </Container>
        </SvgIcons>
      </div>

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
