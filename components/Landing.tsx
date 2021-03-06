import styled from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';
import BigCirle from 'styles/Icons/big-cirlce';
import CircleOutline from 'styles/Icons/circle-outline';
import Fing from 'styles/Icons/fing';
import Rect from 'styles/Icons/rect';
import Triange from 'styles/Icons/triangle';
import { Home } from './Section/Home/Home';
import Github from 'styles/Icons/github';
import { SocialLinks } from './containers/Social';
import LinkedIn from 'styles/Icons/linkedin';
import Twitter from 'styles/Icons/twitter';
import Medium from 'styles/Icons/medium';
import { Social } from './Section/Footer/style';

const Landing = () => {
  return (
    <Wrapper>
      <motion.div
        className='profile'
        initial={{ y: '20%' }}
        animate={{ y: '-5%' }}
      >
        <motion.img
          initial={{ height: '0px', width: '0px', transform: 'skewY(0)' }}
          animate={{
            height: '150px',
            width: '150px',
            transform: 'skewY(20px)',
          }}
          transition={{ type: 'spring', delay: 0.5 }}
          src='./albertdugba.jpg'
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            border: '2px solid var(--secondaryColor)',
          }}
        />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div
            className='text__center'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '50px',
            }}
          >
            <p>Hi</p> {'  '}
            <span role='img'>👋</span>
          </div>
          <p>
            I'm <strong>Albert Dugba</strong>, self taught software engineer
            with 2+ years of experience. As a UI engineer, I thrive to work with
            the right tools to deliver fast, performant and accessiblity from
            the ground up with great user experience.
          </p>
          <p className='links'>
            Kindly check out my{' '}
            <Link href='/works'>
              <a className='hover hover-3'>works</a>
            </Link>{' '}
            and{' '}
            <Link href='/posts'>
              <a className='hover hover-3'>articles</a>
            </Link>
          </p>
        </motion.div>
        <Social>
          <SocialLinks
            link='https://github.com/albertdugba'
            component={<Github size={25} color='#c9bad6' />}
          />
          <SocialLinks
            link='https://www.linkedin.com/in/albertdugba/'
            component={<LinkedIn size={23} color='#c9bad6' />}
          />
          <SocialLinks
            link='https://twitter.com/Albert_Dugba'
            component={<Twitter size={25} color='#c9bad6' />}
          />
          <SocialLinks
            link='https://twitter.com/Albert_Dugba'
            component={<Medium size={25} color='#c9bad6' />}
          />
        </Social>
      </motion.div>

      <div className='circle'>
        <CircleOutline size={80} color='#dfd3d6' />
      </div>

      <div className='triange'>
        <Triange size={120} />
      </div>

      <div className='fing'>
        <Fing size={200} />
      </div>

      <div className='b-circle'>
        <BigCirle size={90} color='#c9bad6' />
      </div>
    </Wrapper>
  );
};

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
    min-height: 60%;
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
