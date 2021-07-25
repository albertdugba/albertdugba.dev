import { useState, FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import { SocialLinks } from './containers/Social';

import Image from 'next/image';
import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';
import { Backdrop } from './UI/Backdrop/Backdrop';
import { IconLinks } from './UI/Mobile/IconLinks';
import { AnimatePresence } from 'framer-motion';
import Times from '@icons/times';
import Menu from '@icons/menu';
import Github from '@icons/github';
import LinkedIn from '@icons/linkedin';
import Twitter from '@icons/twitter';
import Medium from '@icons/medium';

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

  return (
    <Wrapper>
      {toggleMenu && <Backdrop onClick={() => setToggleMenu(false)} />}
      <div className="background">
        <img src={imageBackground} alt="Background" />
        <img src={imageBackground} alt="Background" />
        <img src={imageBackground} alt="Background" />
        <img src={imageBackground} alt="Background" />
        <img src={imageBackground} alt="Background" />
        <img src={imageBackground} alt="Background" />
        <img src={imageBackground} alt="Background" />
        <img src={imageBackground} alt="Background" />
      </div>
      <div className="layout">
        <div className=" container justify__between">
          {toggleMenu ? (
            <Times
              size={35}
              color="var(--secondaryColor)"
              className="menu__bar"
              onClick={() => setToggleMenu((preState) => !preState)}
            />
          ) : (
            <Menu
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
              component={<Github size={25} color="#c9bad6" />}
            />
            <SocialLinks
              className="ml-1"
              link="https://www.linkedin.com/in/albertdugba/"
              component={<LinkedIn size={23} color="#c9bad6" />}
            />
            <SocialLinks
              className="ml-1"
              link="https://twitter.com/Albert_Dugba"
              component={<Twitter size={25} color="#c9bad6" />}
            />
            <SocialLinks
              className="ml-1"
              link="https://medium.com/@albert.dugba"
              component={<Medium size={25} color="#c9bad6" />}
            />
          </div>

          <Nav className="justify__between">
            <li className="ml-1">
              <Link href="/works">
                <a>Works</a>
              </Link>
            </li>
            <li className="ml-1">
              <Link href="/posts">
                <a>Blog</a>
              </Link>
            </li>
            <li className="ml-1">
              <Link href="/">
                <a>
                  <Image src="/albertdugba.jpg" width={45} height={45} className="round__border--radius" />
                </a>
              </Link>
            </li>
          </Nav>
        </div>

        {children}
      </div>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .layout {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(15, 13, 19, 0.85);
    color: #fff;

    .menu__bar {
      display: none;
      z-index: 200;
      cursor: pointer;
    }

    .header__tab {
      border-radius: 9px;
      width: 100%;
      margin-top: 20px;

      div {
        display: flex;
        justify-content: flex-end;

        a {
          color: #fff;
          font-size: 0.9rem;
        }
      }

      a {
        color: var(--secondaryColor);
        text-decoration: none;
      }
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
      height: auto;
      object-fit: cover;
      object-position: left top;
      margin-top: -20px;
      background-image: linear-gradient(to right, rgba(white, 0.1), rgba(0, 0, 0, 0.8));
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
    color: var(--secondaryColor);

    @media (max-width: 701px) {
      img {
        height: 40px;
        width: 40px;
      }
    }
  }
`;
