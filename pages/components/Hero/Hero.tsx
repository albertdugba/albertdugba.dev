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
      <Container className="container">
        <aside className="aside">
          <h1>Frontend Developer.</h1>
          <span>
            I like to craft solid and scalable frontend products with great user
            experiences.
          </span>
          <h4>Design Systems. UI Engineering. Progressive Apps. Performance</h4>
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
  width: 4rem;
  height: 10rem;
  padding: 2.8em;
  border-radius: 50%;
  margin: auto 0;

  li {
    display: block;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2rem;
    height: 2rem;
    margin: -2rem;
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
  height: calc(100vh - 10px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  place-items: center;
  color: var(--primaryColor);
  text-align: center;
  justify-content: center;
  font-family: var(--fontFamily2);
  overflow: hidden;
  grid-gap: -20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  .aside {
    margin-top: -100px;
    text-align: left;

    h4 {
      font-family: var(--fontFamily4);
    }

    h1 {
      font-size: 2.5rem;
    }
    @media (max-width: 701px) {
      margin-top: 0px;
      max-width: 90%;
      margin: auto;

      h1 {
        font-size: 2rem;
      }
    }
  }
`;

export default Hero;
