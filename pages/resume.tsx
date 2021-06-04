import { List } from 'components/containers/List';
import { ResumeLayout } from 'components/containers/ResumeLayout';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const Resume = () => {
  const technologies = [
    'JavaScript',
    'React',
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
    'Github',
    'Github Actions',
    'Yarn',
    'Npm',
    'Webpack',
  ];
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
      <Container>
        <GridLayout>
          <section className="right">
            <div>
              <h1>Albert</h1>
              <h1>Dugba</h1>
              <h2>Frontend Engineer</h2>
              <p>A self taught software engineer valued</p>
            </div>
            <ResumeLayout
              jobTitle="Frontend Engineer"
              company="Ytakenote"
              date="January 2021 - Present"
              jobDescription="I orchestrated and developed the frontend infrastructure,
              design and functionality for Ytakenote's new
              JavaScript-centric app powered by React."
            />
            <ResumeLayout
              jobTitle="Frontend Engineer"
              company="Ytakenote"
              date="January 2021 - Present"
              jobDescription="I orchestrated and developed the frontend infrastructure,
              design and functionality for Ytakenote's new
              JavaScript-centric app powered by React."
            />
            <ResumeLayout
              jobTitle="Frontend Engineer"
              company="Ytakenote"
              date="January 2021 - Present"
              jobDescription="I orchestrated and developed the frontend infrastructure,
              design and functionality for Ytakenote's new
              JavaScript-centric app powered by React."
            />
            <ResumeLayout
              jobTitle="Frontend Engineer"
              company="Ytakenote"
              date="January 2021 - Present"
              jobDescription="I orchestrated and developed the frontend infrastructure,
              design and functionality for Ytakenote's new
              JavaScript-centric app powered by React."
            />
          </section>

          <div className="left">
            <div className="flex__column">
              <span>
                <Link href="https://albertdugba.dev">
                  <a target="_">albertdugba.dev</a>
                </Link>
              </span>
              <span>Accra, Ghana</span>
            </div>

            <List items={technologies} title="Core technologies:" />
            <List items={others} title="Others:" />
            <List items={tools} title="Tools:" />
          </div>
        </GridLayout>
      </Container>
    </>
  );
};

export default Resume;

/**
 * @styles
 */

const Container = styled.div`
  background-color: #ebe6f3;
  min-height: 100vh;
  max-width: 80%;
  margin: auto;
`;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 6fr 300px;
  padding: 2rem;
  grid-gap: 40px;

  .right {
    border: 1px solid #ddd;
    padding: 1rem;
    h1 {
      font-size: 4rem;
    }
  }

  .left {
    border: 1px solid #ddd;
    padding: 1rem;
  }
`;
