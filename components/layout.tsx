import { ReactNode } from 'react';
import styled from 'styled-components';
import { SocialLinks } from './containers/Social';
import Github from 'styles/Icons/github';
import Twitter from 'styles/Icons/twitter';
import LinkedIn from 'styles/Icons/linkedin';
import Dev from 'styles/Icons/dev';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectCard } from './UI/ProjectCard';

interface Iprops {
  main?: ReactNode;
  works?: any[];
  posts?: any[];
}

const Layout = () => {
  return (
    <Wrapper>
      <div className='background'>
        <img src='./tech-doodle.png' alt='Background' />
      </div>
      <div className='layout'>
        <div className='container justify__between'>
          <div className='flex'>
            <SocialLinks
              link='link'
              component={<Github size={25} color='#fff' />}
            />

            <SocialLinks
              className='ml-1'
              link='link'
              component={<LinkedIn size={22} color='#fff' />}
            />
            <SocialLinks
              className='ml-1'
              link='link'
              component={<Twitter size={22} color='#fff' />}
            />
            <SocialLinks
              className='ml-1'
              link='link'
              component={<Dev size={22} color='#fff' />}
            />
          </div>

          <Nav className='justify__between'>
            <li className='ml-1'>
              <Link href='/works'>
                <a>Works</a>
              </Link>
            </li>
            <li className='ml-1'>
              <Link href='/posts'>
                <a>Blog</a>
              </Link>
            </li>
            <li className='ml-1'>
              <Link href='/'>
                <a>
                  <Image
                    src='/albertdugba.jpg'
                    width={45}
                    height={45}
                    className='round__border--radius'
                  />
                </a>
              </Link>
            </li>
          </Nav>
        </div>
      </div>
      <ProjectCard />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: auto;
    width: 100%;
    padding: 1rem;
  }

  .card {
    margin-top: 40px;
    min-height: 350px;
    justify-content: center;
    width: 100%;
    max-width: 550px;
    background-color: #e1e1e1;
    color: #000;
    border-radius: 10px;
    margin-left: 1rem;
    margin-right: 1rem;
    padding: 1rem;
  }

  .layout {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(24, 23, 26, 0.9);
    color: #fff;
    overflow: scroll;
  }

  .background {
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      object-position: left top;
      background-image: linear-gradient(
        to right,
        rgba(white, 0.1),
        rgba(0, 0, 0, 0.8)
      );
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
    color: #fff;
  }
`;
