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
              src="https://instagram.facc1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/165471823_894836077733531_4585199131174438146_n.jpg?tp=1&_nc_ht=instagram.facc1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=RB8y058YcWkAX-PddBr&ccb=7-4&oh=90736025cab2b3f938d2ab284e5d01cc&oe=608AD651&_nc_sid=83d603"
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
