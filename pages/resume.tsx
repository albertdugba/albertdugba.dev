import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const Resume = () => {
  return (
    <>
      <Head>
        <title>Rèsume</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="Albert Dugba - Rèsume" content="Albert Dugba - Rèsume" />
      </Head>
      <Container className="container">
        <GridLayout>
          <div className="left">
            <h1>Rèsume</h1>
            <div>
              <span>
                <Link href="albertdugba.dev">
                  <a target="_">albertdugba.dev</a>
                </Link>
              </span>
              <span>Accra, Ghana</span>
            </div>

            <section>
              <h3>Core Technologies:</h3>
              <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>GraphQL</li>
                <li>Next.js</li>
                <li>Typescript</li>
                <li>Sass</li>
                <li>Node.js</li>
                <li>NodeJS</li>
                <li>Firebase</li>
                <li>CSS-in-JS</li>
              </ul>
            </section>

            <section>
              <h3>Others:</h3>
              <ul>
                <li>Design Systems</li>
                <li>E2E Testing</li>
                <li>PWAs</li>
                <li>Responsive Web Design</li>
                <li>Performance Optimization</li>
              </ul>
            </section>
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

            <div className="experience">
              <div>
                <h2>Experience</h2>
              </div>

              <div>
                <span>Independent Contractor (Ytakenote)</span>
                <span>- March,2021 - Present</span>
              </div>
              <div>
                <p>
                  I orchestrated and developed the frontend infrastructure,
                  design and functionality for Ytakenote's new
                  JavaScript-centric app powered by React.
                </p>
              </div>
            </div>
            <div className="experience">
              <div>
                <h2>Experience</h2>
              </div>

              <div>
                <span>Independent Contractor (Ytakenote)</span>
                <span>- March,2021 - Present</span>
              </div>
              <div>
                <p>
                  I orchestrated and developed the frontend infrastructure,
                  design and functionality for Ytakenote's new
                  JavaScript-centric app powered by React.
                </p>
              </div>
            </div>
            <div className="experience">
              <div>
                <h2>Experience</h2>
              </div>

              <div>
                <span>Independent Contractor (Ytakenote)</span>
                <span>- March,2021 - Present</span>
              </div>
              <div>
                <p>
                  I orchestrated and developed the frontend infrastructure,
                  design and functionality for Ytakenote's new
                  JavaScript-centric app powered by React.
                </p>
              </div>
            </div>
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
  padding: 1.2rem;
  grid-gap: 30px;

  .right {
    h1 {
      font-size: 4rem;
    }
  }
`;
