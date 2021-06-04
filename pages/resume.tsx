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
  return (
    <>
      <Head>
        <title>Rèsume</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Albert Dugba - Rèsume"
          content="Albert Dugba - Rèsume | Work Experience"
        />
      </Head>
      <Container className="container">
        <GridLayout>
          <div className="left">
            <h1>Rèsume</h1>
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
          </div>

          <section className="right">
            <div>
              <h1>Albert Dugba</h1>
              <h2>Frontend Engineer</h2>
              <p>
                Engineer valued for driving high-performance accessible web
                experiences. I design quality, user-friendly and scalable
                products regardless of stack.
              </p>
            </div>
            <ResumeLayout
              jobTitle="Frontend Engineer"
              company="Ytakenote"
              date="January 2021- Present"
              jobDescription="I orchestrated and developed the frontend infrastructure,
              design and functionality for Ytakenote's new
              JavaScript-centric app powered by React."
            />
          </section>
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
`;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 300px 6fr;
  padding: 2rem;
  grid-gap: 30px;

  .right {
    h1 {
      font-size: 4rem;
    }
  }
`;
