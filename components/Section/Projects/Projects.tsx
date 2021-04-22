import Link from 'next/link';
import { Container, ButtonLink } from './styles';

const Projects = () => {
  return (
    <div style={{ background: 'var(--sectionBgColor)' }}>
      <div className="container">
        <Container>
          <div className="works">
            <h1>I develop and experiments with new technologies.</h1>
            <Link href="/works">
              <button className="btn-1">
                <span>
                  <a>See my work</a>
                </span>
              </button>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Projects;
