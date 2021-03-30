import { Container } from './styles';
import Link from 'next/link';

const Overview = () => {
  return (
    <>
      <Container className="container">
        <div className="text">
          <p>
            I am a JavaScript and Frontend Engineer. I design with CSS and
            develop quality, user friendly, and scalable products with {'  '}
            <span className="span1">performance</span>,{' '}
            <span className="span2">accessibility</span>{' '}
            <span className="span3">progressive enhancement</span> in mind from
            the ground up.
            <br /> I enjoy building design systems for products & projects.
          </p>
          <Link href="/works">
            <button>
              <a>See my works</a>
            </button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Overview;
