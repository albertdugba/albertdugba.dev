import styled from 'styled-components';
import { motion } from 'framer-motion';
import FireBase from '../../../styles/Icons/firebase';
import Github from '../../../styles/Icons/github';
import GraphQL from '../../../styles/Icons/graphql';
import NextJS from '../../../styles/Icons/nextjs';
import NodeJS from '../../../styles/Icons/node';
import ReactJS from '../../../styles/Icons/react';
import Redux from '../../../styles/Icons/redux';
import Terminal from '../../../styles/Icons/terminal';
import TypeScript from '../../../styles/Icons/typescript';

const Hero = () => {
  return (
    <>
      <Container>
        <aside className="aside">
          <h1>
            Hi, welcome to my site, my name is Albert and I'm Software Engineer
            {/* with a focus on frontend development */}
          </h1>
        </aside>

        <Section
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
          }}>
          <li className="github--icon">
            <Github width="2.2rem" height="2.2rem" />
          </li>
          <li className="github--icon">
            <Github width="2.2rem" height="2.2rem" />
          </li>
          <li className="nodejs--icon">
            <NodeJS width="2.2rem" height="2.2rem" />
          </li>
          <li className="nextjs--icon">
            <NextJS width="2.2rem" height="2.2rem" />
          </li>
          <li className="terminal--icon">
            <Terminal width="2.2rem" height="2.2rem" />
          </li>
          <li className="typescript--icon">
            <TypeScript width="2.2rem" height="2.2rem" />
          </li>
          <li className="reactjs--icon">
            <ReactJS width="2.2rem" height="2.2rem" />
          </li>
          <li className="graphql--icon">
            <GraphQL width="2.2rem" height="2.2rem" />
          </li>
          <li className="firebase--icon">
            <FireBase width="2.2rem" height="2.2rem" />
          </li>
          <li className="redux--icon">
            <Redux width="2.2rem" height="2.2rem" />
          </li>
        </Section>
      </Container>
    </>
  );
};

const Section = styled(motion.section)`
  position: relative;
  width: 18rem;
  height: 18rem;
  padding: 2.8em;
  border-radius: 50%;
  margin: 1.75em auto 0;

  li {
    display: block;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4em;
    height: 4em;
    margin: -2em;
  }

  .github--icon {
    transform: rotate(0deg) translate(10rem) rotate(0deg);
  }
  .nodejs--icon {
    transform: rotate(45deg) translate(10rem) rotate(-45deg);
  }
  .terminal--icon {
    transform: rotate(90deg) translate(10rem) rotate(-90deg);
  }
  .nextjs--icon {
    transform: rotate(135deg) translate(9em) rotate(-135deg);
  }
  .graphql--icon {
    transform: rotate(180deg) translate(10rem) rotate(-180deg);
  }
  .typescript--icon {
    transform: rotate(225deg) translate(10rem) rotate(-225deg);
  }
  .firebase--icon {
    transform: rotate(270deg) translate(10rem) rotate(-270deg);
  }

  .redux--icon {
    transform: rotate(315deg) translate(10rem) rotate(-315deg);
  }
`;

const Container = styled.div`
  height: calc(100vh - 50px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background: #34223a;
  color: white;
  text-align: center;
  justify-content: center;
  font-family: var(--fontFamily2);
  overflow: hidden;

  h2 {
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    margin-top: 50px;
  }

  .aside {
    margin-top: -100px;
    h1 {
      font-size: 2.5rem;
      @media (max-width: 600px) {
        margin-top: 70px;
        font-size: 2.5rem;
        grid-template-columns: 1fr;
      }
    }
  }
`;

export default Hero;
