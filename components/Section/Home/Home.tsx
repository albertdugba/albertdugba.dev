import Dots from 'styles/Icons/dots';
import ZigZag from 'styles/Icons/zigzag';
import { HomeContainer, GridContainer } from './styles';

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
              <Dots />
            </div>
            <div className="zigzag__line--left">
              <ZigZag size={50} color="#9588AA" />
            </div>

            <img
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--iOYHlV4o--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/23934/e82e4303-0604-40eb-a785-52ad1a40d4f1.jpg"
              alt=""
            />
            <div className="right__dots">
              <Dots />
            </div>

            <div className="zigzag__line--right">
              <ZigZag size={50} color="#9588AA" />
            </div>
          </div>
        </GridContainer>
      </div>
    </HomeContainer>
  );
};
