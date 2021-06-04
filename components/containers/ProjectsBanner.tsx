import styled from 'styled-components';
import GraphQL from 'styles/Icons/graphql';
import TypeScript from 'styles/Icons/typescript';
import Terminal from 'styles/Icons/terminal';
import FireBase from 'styles/Icons/firebase';
import Github from 'styles/Icons/github';
import NodeJS from 'styles/Icons/node';
import NextJS from 'styles/Icons/nextjs';
import ReactJS from 'styles/Icons/react';
import { FunctionComponent } from 'react';

interface Props {
  title: string;
}

const ProjectsBanner: FunctionComponent<Props> = ({ title }) => (
  <div style={{ background: 'var(--headerColor)', marginTop: '5.3rem' }}>
    <SvgIcons className="container">
      <div className="overlay">
        <div className="graphql">
          <GraphQL width={40} height={40} color="grey" />
        </div>

        <div className="terminal">
          <Terminal width={40} height={40} color="grey" />
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
        <h2 className="title">{title}</h2>
      </Container>
    </SvgIcons>
  </div>
);

export default ProjectsBanner;

/**
 * @styles
 */

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

  .terminal {
    position: absolute;
    right: 0%;
    top: 0;

    @media (min-width: 801px) {
      display: none;
    }
  }

  .graphql {
    position: absolute;
    right: 0%;
    top: 5%;

    @media (max-width: 801px) {
      display: none;
    }
  }

  .typescript {
    position: absolute;
    bottom: 0%;
    right: 0;
    @media (max-width: 801px) {
      display: none;
    }
  }

  .firebase {
    position: absolute;
    top: 30%;
    left: 80%;
    @media (max-width: 801px) {
      display: none;
    }

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
    @media (max-width: 801px) {
      display: none;
    }
  }

  .nodejs {
    @media (max-width: 801px) {
      display: none;
    }
  }

  .react {
    position: absolute;
    top: 30%;
    left: 20%;
    @media (max-width: 801px) {
      display: none;
    }

    @media (max-width: 801px) {
      top: -2%;
    }
  }
`;
