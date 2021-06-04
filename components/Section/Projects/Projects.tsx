import Link from 'next/link';
import { Container, ContentBody } from './styles';
import { FunctionComponent } from 'react';

const Projects: FunctionComponent = () => {
  return (
    <Container>
      <img src="./tech-doodle-lg.png" />

      <ContentBody>
        <div className="works container">
          <h1>I develop and experiments with new technologies.</h1>
          <Link href="/works">
            <button className="btn-1">
              <span>
                <a>See my work</a>
              </span>
            </button>
          </Link>
        </div>
      </ContentBody>
    </Container>
  );
};

export default Projects;
