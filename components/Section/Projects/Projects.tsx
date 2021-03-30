import Link from 'next/link';
import { ButtonLink } from './styles';

const Projects = () => {
  return (
    <div className="container">
      <h1>I design and experiments with new technologies.</h1>
      <ButtonLink>
        <Link href="/works">
          <a>See my work</a>
        </Link>
      </ButtonLink>
    </div>
  );
};

export default Projects;
