import Link from 'next/link';
import { Container, ButtonLink } from './styles';

const Projects = () => {
  return (
    <div style={{ background: '#201c29' }}>
      <div className="container">
        <Container>
          <div className="works">
            <h1>I develop and experiments with new technologies.</h1>
            <ButtonLink>
              <Link href="/works">
                <a>See my work</a>
              </Link>
            </ButtonLink>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Projects;
