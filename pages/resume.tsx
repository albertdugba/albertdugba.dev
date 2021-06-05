import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { List } from 'components/containers/List';
import { ResumeLayout } from 'components/containers/ResumeLayout';
import { ResumeOverlay } from 'components/containers/ResumeOverlay';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  const technologies = [
    'JavaScript',
    'React',
    'Redux / Redux-toolkit',
    'GraphQL',
    'Next.js',
    'Typescript',
    'Sass',
    'Node.js',
    'CSS-in-JS',
  ];

  const others = [
    'Design Systems',
    'E2E Testing',
    'Unit Testing',
    'PWAs',
    'Responsive Web Design',
    'Performance Optimization',
  ];

  const tools = [
    'Cypress',
    'Github / Github Actions',
    'Yarn',
    'Npm',
    'Webpack',
  ];

  const [toggled, setToggle] = useState(false);
  return (
    <>
      <Head>
        <title>Rèsume - Albert Dugba</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Albert Dugba - Rèsume"
          content="Albert Dugba - Rèsume | Work Experience"
        />
      </Head>

      <GridLayout>
        <section className="left">
          <div style={{ padding: '0', margin: '0', lineHeight: '1.2' }}>
            <h3 onClick={() => setToggle(prevState => !prevState)}>Menu</h3>
            <MobileOnly>
              {toggled && <Backdrop onClick={() => setToggle(false)} />}
              {toggled && (
                <motion.div initial={{ width: 0 }} animate={{ width: '40%' }}>
                  <ResumeOverlay title="Tech Stack I work & have experience with.">
                    <div style={{ height: '200px' }}>
                      <div className="justify__around">
                        <List items={technologies} title="Core Stack:" />
                        <List items={others} title="Others:" />
                        <List items={tools} title="Tools:" />
                      </div>
                    </div>
                  </ResumeOverlay>
                </motion.div>
              )}
            </MobileOnly>

            <div>
              <h1 style={{ color: 'var(--primaryColor)', lineHeight: '0' }}>
                Albert
              </h1>
              <h1 style={{ color: 'var(--primaryColor)' }}>Dugba</h1>
            </div>
          </div>
          <h2>Software Engineer</h2>
          <p>
            A self taught software engineer passionate about creating rich and
            intelligent User Interfaces. I am open to opportunities to learn new
            technologies, grow and add value to the company.
          </p>

          <div className="pt-1 mt-1 line__break" />
          <ResumeLayout
            jobTitle="Frontend Engineer"
            company="Ytakenote App"
            date="Jan 2021 - Present"
            jobDescription="I orchestrated and developed the frontend infrastructure,
              design and functionality for Ytakenote's new
              JavaScript-centric app powered by React."
          />
          <ResumeLayout
            jobTitle="Frontend Engineer"
            company="Origo Health"
            date="Oct 2020 - Feb 2021"
            jobDescription="I orchestrated and developed the frontend infrastructure,
              design and functionality for Ytakenote's new
              JavaScript-centric app powered by React."
          />
          <ResumeLayout
            jobTitle="Flutter Developer"
            company="Renegades Africa"
            date="January 2021 - Present"
            jobDescription="I orchestrated and developed the frontend infrastructure,
              design and functionality for Ytakenote's new
              JavaScript-centric app powered by React."
          />
        </section>

        <div className="right">
          <div className="flex__column hide-on-mobile">
            <span>
              <Link href="https://albertdugba.dev">
                <a target="_">albertdugba.dev</a>
              </Link>
            </span>
            <span>Accra, Ghana</span>
          </div>

          <List items={technologies} title="Core:" />
          <List items={others} title="Others:" />
          <List items={tools} title="Tools:" />
        </div>
      </GridLayout>
    </>
  );
};

export default Resume;

/**
 * @styles
 */

const MobileOnly = styled.div`
  display: none;
  @media (max-width: 801px) {
    display: block;
  }
`;

const GridLayout = styled.div`
  width: 100%;
  max-width: 90%;
  margin: auto;
  overflow: hidden;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 6fr 350px;
  background-color: #ebe6f3;
  grid-gap: 40px;
  width: 100vw;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    max-width: 100%;
  }

  .right {
    padding: 1rem;

    @media (max-width: 950px) {
      display: none;
    }
    h1 {
      font-size: 5rem;
    }
  }

  .left {
    padding: 1rem;
    order: -1;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.3);
`;
