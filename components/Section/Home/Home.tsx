import Dots from 'styles/Icons/dots';
import ZigZag from 'styles/Icons/zigzag';
import { HomeContainer, GridContainer } from './styles';
import Image from 'next/image';

export const Home = () => {
  return (
    <HomeContainer>
      <div className="container">
        <GridContainer>
          <div className="info__text">
            <h1>Frontend Developer.</h1>
            <div>
              <p>
                I like to build solid and scalable frontend products with great
                user experience.
              </p>

              <p>
                I am very enthusiastist about building design systems,
                Progressive Web Apps, Performant User Interfaces.
              </p>
            </div>
          </div>

          <div className="info__img">
            <div className="left__dots">
              <Dots color="var(--primaryColor)" />
            </div>
            <div className="zigzag__line--left">
              <ZigZag size={50} color="#9588AA" />
            </div>

            <img
              src="./albertdugba.jpeg"
              alt="Albert Dugba"
              width="100%"
              height="auto"
            />
            <div className="right__dots">
              <Dots color="var(--primaryColor)" />
            </div>

            <div className="zigzag__line--right">
              <ZigZag size={50} color="#9588AA" />
            </div>
          </div>
        </GridContainer>

        <div className="down__dots">
          <Dots color="var(--primaryColor)" />
        </div>
      </div>
    </HomeContainer>
  );
};
