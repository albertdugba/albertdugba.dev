import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink, SocialLinks } from '../common/link';
import { Tag } from '../common/tag/Tag';
import * as Icon from '@icons/index';

const Landing = () => {
  return (
    <Wrapper>
      <motion.div className="profile" initial={{ y: '20%' }} animate={{ y: '-5%' }}>
        <img
          src="./albertdugba.jpg"
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            border: '2px solid var(--secondaryColor)',
          }}
        />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div
            className="text__center"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '50px',
            }}
          >
            <h3>Hi</h3> {'  '}
            <span role="img">👋</span>
          </div>
          <p>
            I'm <strong>Albert Dugba</strong>, self taught software engineer with 2+ years of experience. As a UI
            engineer, I thrive to work with the right tools to deliver fast, performant and accessiblity from the ground
            up with great user experience.
          </p>
          <div>
            <p>
              I work with technologies like react,redux,typescript,graphQL
            </p>
            <p>
              Kindly check out my <NavLink href="/works">works</NavLink> and <NavLink href="/posts">articles</NavLink>
            </p>
          </div>
        </motion.div>
        <Social>
          <SocialLinks link="https://github.com/albertdugba" component={<Icon.Github size={25} color="#c9bad6" />} />
          <SocialLinks
            link="https://www.linkedin.com/in/albertdugba/"
            component={<Icon.Linkedin size={23} color="#c9bad6" />}
          />
          <SocialLinks link="https://twitter.com/Albert_Dugba" component={<Icon.Twitter size={25} color="#c9bad6" />} />
          <SocialLinks link="https://medium.com/@albert.dugba" component={<Icon.Medium size={25} color="#c9bad6" />} />
        </Social>
      </motion.div>

      <div className="circle">
        <Icon.CircleOutline size={80} color="#dfd3d6" />
      </div>

      <div className="triange">
        <Icon.Triangle color="var(--secondaryColor)" size={120} />
      </div>

      <div className="fing">
        <Icon.Fing color="#2B0A4B'" size={200} />
      </div>

      <div className="b-circle">
        <Icon.BigCircle size={90} color="#c9bad6" />
      </div>
    </Wrapper>
  );
};

const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 10px;
  width: 100%;

  svg:hover {
    fill: var(--primaryColor);
  }
`;

const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: rgb(2, 0, 36);
  background: #f1e0e3;
  position: relative;
  overflow: hidden;
  font-size: 0.95rem;

  .links a {
    display: inline-block;
    text-decoration: none;
    font-weight: bolder;

    .hover {
      padding: 0;
      position: relative;
      &:before,
      &:after {
        content: '';
        position: absolute;
        width: 0px;
        height: 5px;
        margin: 5px 0 0;
        transition-duration: 0.5s;
        opacity: 0;
        background-color: red;

        &.hover-3 {
          &:before {
            left: 50%;
          }
          &:after {
            right: 50%;
          }
        }
      }
    }
  }

  .circle {
    position: absolute;
    top: 0;
    right: 0;
  }

  .triange {
    position: absolute;
    bottom: -30px;
    left: 0;
    transform: rotateX(180deg);
  }

  .fing {
    position: absolute;
    top: -60px;
    left: 0%;
    transform: rotate(-180deg);

    @media (max-width: 601px) {
      left: -20%;
      top: -90px;
      transform: rotate(-180deg);
    }
  }

  .b-circle {
    position: absolute;
    bottom: -40px;
    right: 0;
  }

  .profile {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    width: 100%;
    max-width: 90%;
    height: 70%;
    background: #fff;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    margin-top: 50px;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      bottom: -2px;
      height: 20px;
      width: 98%;
      border-bottom: 5px solid var(--secondaryColor);
      border-radius: 25px;
    }

    img {
      position: absolute;
      top: -80px;
    }

    @media (min-width: 801px) {
      max-width: 45%;
    }
  }
`;

export default Landing;
