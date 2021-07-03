import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { SocialLinks } from 'components/containers/Social';
import Github from 'styles/Icons/github';
import Twitter from 'styles/Icons/twitter';
import LinkedIn from 'styles/Icons/linkedin';
import Dev from 'styles/Icons/dev';
import Image from 'next/image';
import { ProjectCard } from '../containers/Card';
import { useRouter } from 'next/router';

type Props = {
  works?: any[];
  posts?: any[];
  backgroungImage?: string;
};

export const Div: FunctionComponent<Props> = ({
  works,
  posts,
  backgroungImage,
}) => {
  const route = useRouter();

  const handleRenderCards = pathName => {
    switch (pathName) {
      case '/works':
        return works?.map((work, index) => (
          <ProjectCard
            key={index}
            logo={work.projectImage}
            title={work.title}
          />
        ));
      case '/posts':
        return posts?.map((post, index) => (
          <>
            <ProjectCard
              key={index}
              logo={post.coverImage.url}
              title={post.slug}
            />
          </>
        ));

      default:
        return pathName;
    }
  };
  return (
    <Wrapper>
      <div className='image__overlay'>
        <img src={backgroungImage} />
      </div>
      <div className='background__overlay'>
        <div className='container justify__between'>
          <div className='flex'>
            <SocialLinks
              link='link'
              component={<Github size={22} color='#fff' />}
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
            <li>
              <NavLink href='/works'>Works</NavLink>
            </li>
            <li>
              <NavLink href='/posts'>Blog</NavLink>
            </li>
            <li>
              <NavLink href='/'>
                <Image
                  src='/albertdugba.jpg'
                  width={45}
                  height={45}
                  className='round__border--radius'
                />
              </NavLink>
            </li>
          </Nav>
        </div>

        <CardsContainer className='container'>
          {handleRenderCards(route.pathname)}
        </CardsContainer>
      </div>
    </Wrapper>
  );
};

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* white-space: nowrap; */
  /* position: relative; */
  overflow-x: auto;
  /* max-height: 20%; */
  border: 1px solid red;
  padding: 1rem;
  width: 400px;

  &:before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100px;
    top: 0;
    left: 0;
  }

  &:after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100px;
    top: 0;
    right: 0;
  }
`;

const Nav = styled.ul`
  li {
    list-style: none;
    margin-left: 1rem;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;

  .img__overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(
      to right,
      rgba(white, 0.1),
      rgba(0, 0, 0, 0.8)
    );
    img {
      width: 100%;
      max-width: 100%;
      height: 100vh;
      object-fit: cover;
      object-position: left top;
    }
  }

  .background__overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    color: #fff;
    background: rgba(24, 23, 26, 0.9);
  }
`;

const NavLink = styled.a`
  display: block;
  text-decoration: none;
  color: #fff;
`;
