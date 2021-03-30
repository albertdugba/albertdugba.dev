import { Container } from './styles';
import Link from 'next/link';
import Dots from 'styles/Icons/dots';

const Overview = () => {
  return (
    <>
      <Container className="container">
        <div className="bio--container">
          <div className="bio--divider">
            <span>Bio</span>
          </div>
          <div className="bio--container__dots">
            <Dots />
          </div>
          <div className="bio--container__info">
            <p>
              I am a JavaScript and Frontend Engineer. I design with CSS and
              develop quality, user friendly, and scalable products with {'  '}
              <span className="span1">performance</span>,{' '}
              <span className="span2">accessibility</span>{' '}
              <span className="span3">progressive enhancement</span> in mind
              from the ground up.
              <br /> I enjoy building design systems for products & projects.
            </p>
            <Link href="/works">
              <button>
                <a>See my works</a>
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Overview;
