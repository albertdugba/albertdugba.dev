import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { SocialLinks } from '../common/link';
import * as Icon from '@icons/index';

const Landing = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transform: `translateY(-5%)`,
      transition: {
        staggerChildren: 0.1,
        damping: 300,
        type: 'tween',
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <>
      <Head>
        <title>Albert Dugba - Software Engineer</title>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta name="description" content="Hi, I'm Albert Dugba, a Frontend Engineer." />

        <meta itemProp="name" content="Albert Dugba - Software Engineer" />
        <meta itemProp="description" content="Hi, I'm Albert Dugba, a Frontend Engineer." />
        <meta itemProp="image" content="https://albertdugba.dev/albertdugba.webp" />

        <meta property="og:url" content="https://albertdugba.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Albert Dugba - Software Engineer" />
        <meta property="og:description" content="Hi, I'm Albert Dugba, a Frontend Engineer." />
        <meta property="og:image" content="https://albertdugba.dev/albertdugba.webp" />

        <meta name="twitter:card" content="https://albertdugba.dev/albertdugba.webp" />
        <meta name="twitter:title" content="Albert Dugba - Frontend Engineer" />
        <meta name="twitter:description" content="Hi, I'm Albert Dugba, a Frontend Engineer." />
        <meta name="twitter:site" content="@Albert_Dugba" />
        <meta name="twitter:title" content="@Albert_Dugba" />
        <meta name="author" content="Albert Dugba" />
        <meta name="albertdugba.dev" content="Portfolio website | Blog " />
      </Head>
      <Wrapper>
        <motion.div className="profile" initial={{ y: '50%' }} animate={{ y: '0%' }} transition={{ damping: 40 }}>
          <motion.img
            initial={{ y: '-100px' }}
            animate={{ y: '0%' }}
            src="./albertdugba.webp"
            alt="Profile Picture"
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              border: '2px solid var(--secondaryColor)',
            }}
          />
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div
              variants={item}
              className="text__center"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '50px',
              }}
            >
              <motion.h3 variants={item}>Hi</motion.h3> {'  '}
              <motion.span variants={item} role="img">
                👋
              </motion.span>
            </motion.div>
            <motion.p variants={item}>
              I'm <strong>Albert Dugba</strong>, self taught software engineer with <strong>2+ </strong>years of
              experience. As a UI engineer, I thrive to work with the right tools to deliver fast, performant and
              accessiblity from the ground up with great user experience.
            </motion.p>
            <div>
              <motion.p variants={item}>
                I work with technologies like react,redux,typescript and graphQL. Ocassionally, I do backend with nodejs
                and mongodb
              </motion.p>

              <motion.p variants={item}>
                Kindly check out my{' '}
                <Link href="/works">
                  <a>works</a>
                </Link>{' '}
                and{' '}
                <Link href="/posts">
                  <a>articles.</a>
                </Link>
              </motion.p>
            </div>
          </motion.div>
          <Social>
            <SocialLinks
              arialLabel="CV"
              link="https://drive.google.com/file/d/1bSv7GDcPGPSPx7lgLhj5C0GsdmlcxXz-/view?usp=sharing"
              component={<Icon.CV size={29} color="var(--secondaryColor)" />}
            />
            <SocialLinks
              arialLabel="Github"
              className="ml-1"
              link="https://github.com/albertdugba"
              component={<Icon.Github size={29} color="var(--secondaryColor)" />}
            />
            <SocialLinks
              arialLabel="Linkedin"
              className="ml-1"
              link="https://www.linkedin.com/in/albertdugba/"
              component={<Icon.Linkedin size={29} color="var(--secondaryColor)" />}
            />
            <SocialLinks
              arialLabel="Twitter"
              className="ml-1"
              link="https://twitter.com/Albert_Dugba"
              component={<Icon.Twitter size={29} color="var(--secondaryColor)" />}
            />
          </Social>
        </motion.div>
      </Wrapper>
    </>
  );
};

const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 10px;
  width: 100%;

  svg :hover {
    fill: var(--primaryColor);
  }
`;

const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #e4e6eb;
  position: relative;
  overflow: hidden;
  font-size: 0.95rem;

  p a {
    display: inline-block;
    color: var(--secondaryColor);
    text-decoration: none;
    font-weight: 800;
    font-size: 1rem !important;
    position: relative;

    &:hover:after {
      left: 0;
      height: 5px;
      width: 100%;
    }

    &:after {
      position: absolute;
      content: '';
      height: 5px;
      width: 50%;
      background: var(--primaryColor);
      opacity: 0.8;
      bottom: 2px;
      left: 0;
      transition: all 0.3s ease-in-out;
    }
  }

  .profile {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    /* width: 100%; */
    max-width: 90%;
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
      max-width: 580px;
    }
  }
`;

export default Landing;
