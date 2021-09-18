import { useState, FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { GraphQLClient } from 'graphql-request';
import { Backdrop, AnimatedBackdrop } from '../common/backdrop/Backdrop';
import { IconLinks } from '../common/link/IconLinks';
import { AnimatePresence } from 'framer-motion';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { NavLink, SocialLinks } from '../common/link';
import { ContactWidget } from '../widget/contact/Contact';
import * as Icon from '../../../public/icons';

interface IProps {
  imageBackground: string;
  children: ReactNode;
}

export const getStaticProps = async () => {
  const graphcms = new GraphQLClient('https://api-us-east-1.graphcms.com/v2/ckovyil8d2u6801xq3snb4dss/master');

  const { works } = await graphcms.request(`
  query Works() {
    works{
      title
      linkContent
      projectImage
      projectImages
      hrefLink
      slug
      tag
    }
  }
  `);

  return {
    props: {
      works,
    },
  };
};

const Layout: FunctionComponent<IProps> = ({ children, imageBackground }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showContactWidget, setShowContactWidget] = useState(false);

  const handleToggleContactWidget = () => {
    setShowContactWidget((prevState) => !prevState);
    new Audio('./pop.wav').play();
  };

  const transition = {
    duration: 0.5,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  const imageVariants = {
    exit: { x: '100%', opacity: 0, transition },
    enter: {
      x: '0%',
      opacity: 1,
      transition,
    },
  };

  const bgVariants = {
    exit: { x: '-100%', opacity: 0, transition },
    enter: {
      x: '0%',
      opacity: 1,
      transition,
    },
  };

  return (
    <>
      <Wrapper initial="exit" animate="enter" exit="exit">
        {toggleMenu && <Backdrop onClick={() => setToggleMenu(false)} />}
        <AnimateSharedLayout>
          <motion.div initial="exit" animate="enter" exit="exit" className="background">
            <motion.div
              variants={imageVariants}
              className="background__image"
              style={{
                backgroundImage: `url(${imageBackground})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '100vh',
                width: '100%',
              }}
            />

            <AnimatedBackdrop variants={bgVariants} />
          </motion.div>
        </AnimateSharedLayout>

        <motion.div className="layout">
          <div className=" container justify__between">
            {toggleMenu ? (
              <Icon.Times
                size={35}
                color="var(--secondaryColor)"
                className="menu__bar"
                onClick={() => setToggleMenu((preState) => !preState)}
              />
            ) : (
              <Icon.Menu
                size={35}
                color="var(--secondaryColor)"
                className="menu__bar"
                onClick={() => setToggleMenu((preState) => !preState)}
              />
            )}

            <div className="menu__bar">
              <AnimatePresence>{toggleMenu && <IconLinks />}</AnimatePresence>
            </div>

            <div className="flex social__container">
              <SocialLinks
                className="ml-1"
                link="https://github.com/albertdugba"
                component={<Icon.Github size={25} color="#e1e1e1" />}
              />
              <SocialLinks
                className="ml-1"
                link="https://www.linkedin.com/in/albertdugba/"
                component={<Icon.Linkedin size={23} color="#e1e1e1" />}
              />
              <SocialLinks
                className="ml-1"
                link="https://twitter.com/Albert_Dugba"
                component={<Icon.Twitter size={25} color="#e1e1e1" />}
              />
              <SocialLinks
                className="ml-1"
                link="https://medium.com/@albert.dugba"
                component={<Icon.Medium size={25} color="#e1e1e1" />}
              />
            </div>

            <Nav className="justify__between">
              <li className="ml-1">
                <NavLink href="/works">Works</NavLink>
              </li>
              <li className="ml-1">
                <NavLink href="/posts" className="ml-1">
                  Blog
                </NavLink>
              </li>
              <li className="ml-1 cursor--pointer">
                <Link href="/">
                  <Image src="/albertdugba.jpg" width={45} height={45} className="round__border--radius" />
                </Link>
              </li>
            </Nav>
          </div>

          {showContactWidget && (
            <div className="container">
              <ContactWidget handleClose={() => setShowContactWidget(false)} />
            </div>
          )}

          <div className="contact cursor--pointer" onClick={() => handleToggleContactWidget()}>
            {showContactWidget ? <Icon.ChevronDown size={205} color="#fff" /> : <Icon.Chat size={45} color="#fff" />}
          </div>
          <div>{children}</div>
        </motion.div>
      </Wrapper>
    </>
  );
};

export default Layout;

const Wrapper = styled(motion.section)`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .contact {
    position: absolute;
    bottom: 20px;
    right: 40px;
    z-index: 3000;
    background: var(--secondaryColor);
    padding: 1rem;
    border-radius: 50%;
    height: 55px;
    width: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 20px 49px rgba(0, 0, 0, 0.8);

    @media (max-width: 701px) {
      bottom: 80px;
    }
  }

  .layout {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;

    .menu__bar {
      display: none;
      z-index: 200;
      cursor: pointer;
    }

    @media (max-width: 701px) {
      .social__container {
        display: none;
      }

      .menu__bar {
        display: block;
      }
    }
  }

  .background {
    overflow: hidden;

    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
      object-position: left top;
      /* margin-top: -20px; */
    }
  }
`;

const Nav = styled.ul`
  li {
    list-style: none;
  }
  a {
    display: block;
    text-decoration: none;
    color: #ddd;
    font-weight: bolder;

    @media (max-width: 701px) {
      img {
        height: 40px;
        width: 40px;
      }
    }
  }
`;
