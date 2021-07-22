import { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import { SocialLinks } from './containers/Social';
import Github from 'styles/Icons/github';
import Twitter from 'styles/Icons/twitter';
import LinkedIn from 'styles/Icons/linkedin';
import Dev from 'styles/Icons/dev';
import Image from 'next/image';
import Link from 'next/link';
import { CardsCarousel } from './UI/Carousel/CardsCarousel';
import { GraphQLClient } from 'graphql-request';

interface IProps {
  imageBackground: string;
  children: ReactNode;
}

export const getStaticProps = async () => {
  const graphcms = new GraphQLClient(
    'https://api-us-east-1.graphcms.com/v2/ckovyil8d2u6801xq3snb4dss/master'
  );

  const { works } = await graphcms.request(`
  query Works() {
    works{
      title
      linkContent
      projectImage
      projectImages
      hrefLink
      slug
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
  return (
    <Wrapper>
      <div className='background'>
        <img src={imageBackground} alt='Background' />
        <img src={imageBackground} alt='Background' />
        <img src={imageBackground} alt='Background' />
        <img src={imageBackground} alt='Background' />
        <img src={imageBackground} alt='Background' />
        <img src={imageBackground} alt='Background' />
        <img src={imageBackground} alt='Background' />
        <img src={imageBackground} alt='Background' />
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
        {children}
      </div>
    </Wrapper>
  );
};

export default Layout;

const Works = styled.div`
  overflow-y: scroll;
  /* overflow-x: scroll; */
  display: flex;
  max-width: 100%;
  margin: auto;
  height: 100vh;
  width: 100%;
  h1 {
    /* height: 400px; */
    height: 400px;
    width: 250px;
    border-radius: 10px;
    padding: 1rem;
    background: #cfe6e9;
    color: #000;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

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
    background: rgba(24, 23, 26, 0.9);
    color: #fff;
    overflow: scroll;
  }

  .background {
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      object-position: left top;
      margin-top: -20px;
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
