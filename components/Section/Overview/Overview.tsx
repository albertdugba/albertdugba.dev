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
              <strong> Hey, I'm Albert Dugba, </strong>
            </p>
            <p>I am a self taught software engineer from Ghana.</p>
            <p>
              I have have 2 years of experience building applications with
              frontend technologies. As a UI engineer, I thrive to work with the
              right tools to deliver fast, performant and accessiblity from the
              ground up.
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
