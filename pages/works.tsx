import { FunctionComponent } from 'react';
import { SocialLinks } from 'components/containers/Social';
import Github from 'styles/Icons/github';
import Twitter from 'styles/Icons/twitter';
import LinkedIn from 'styles/Icons/linkedin';
import Dev from 'styles/Icons/dev';
import styled from 'styled-components';
import { GraphQLClient } from 'graphql-request';
import { motion } from 'framer-motion';

interface Props {
  works: any[];
}

interface Props {
  works: any[];
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

const WorksPage: FunctionComponent<Props> = ({ works }) => {
  return (
    <>
      <Wrapper>
        <div className='flex__column'>
          <HomeContainer src='./tech-doodle.png' />
          <HomeContainer src='./tech-doodle.png' />
        </div>
        <div className='text'>
          <div className='justify__between container'>
            <div className='flex'>
              <SocialLinks
                link='https://github.com/albertdugba'
                component={<Github width={20} height={20} color='#fff' />}
              />
              <SocialLinks
                className='ml-1'
                link='https://github.com/albertdugba'
                component={<LinkedIn size={20} color='#fff' />}
              />

              <SocialLinks
                className='ml-1'
                link='https://twitter.com/Albert_Dugba'
                component={<Twitter width={20} height={20} color='#fff' />}
              />

              <SocialLinks
                className='ml-1'
                link='https://dev.to/albertdugba'
                component={<Dev size={20} color='#EBE6F3' />}
              />
            </div>
            <ul className='justify__between'>
              <NavLink href='/works'>
                <li className='mr-1'>Works</li>
              </NavLink>
              <NavLink href='/posts'>
                <li className='mr-1'>Blog</li>
              </NavLink>
              <NavLink href='/'>
                <img
                  src='https://scontent.facc6-1.fna.fbcdn.net/v/t1.6435-0/p526x296/199548180_4843198325707173_1589442917293810159_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeGOemwec3Sm0Ilhp_BE4-jSkBJ2qBLkopmQEnaoEuSimbwybb5za71pusO-YCw3CjkN7XuTtpgZsBKaueOuO4eC&_nc_ohc=lf6fKinu5m4AX9S899g&tn=y1hXR3x2ilqp3-Fs&_nc_ht=scontent.facc6-1.fna&tp=6&oh=e5f7ad5db1dc9a9e793d4a321cd21fbe&oe=60DEDB9E'
                  style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                />
              </NavLink>
            </ul>
          </div>

          <CardContainer className='container'>
            {works?.map(work => (
              <>
                <Card>
                  <img
                    style={{ width: '100%', maxWidth: '150px' }}
                    src={work.projectImage}
                  />
                </Card>
              </>
            ))}
          </CardContainer>
        </div>
      </Wrapper>
    </>
  );
};

export default WorksPage;

const HomeContainer = styled(motion.img)`
  position: relative;
  padding: 45px 0;
  overflow: hidden;
  width: 100%;
  height: auto;
  object-fit: contain;
  max-width: 100%;
  display: flex;
  background: var(--primaryColor);
  filter: contrast(100%);
`;

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .text {
    background: rgba(24, 23, 26, 0.9);
    opacity: 0.99;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    color: #fff;
  }

  .grid__layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    place-items: center;
    padding-top: 50px;
    justify-content: center;

    @media (max-width: 801px) {
      grid-template-columns: 1fr;
    }
  }
`;

const GridContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: var(--primaryColor);
  overflow: hidden;
  z-index: 10;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  place-items: center;
  padding-top: 50px;
  justify-content: center;

  @media (max-width: 801px) {
    grid-template-columns: 1fr;
  }

  .info__text {
    margin-left: 3rem;
    h1 {
      font-size: 4rem;
      color: var(--primaryColor);
    }

    h2 {
      font-size: 1.8rem;
    }

    div p {
      font-size: 1.2rem;
      line-height: 1.6;
    }
  }

  .info__img {
    position: relative;

    &:before {
      position: absolute;
      content: 'Hellooo';
      height: 100%;
      width: 100%;
      border: 1px solid var(--primaryColor);
      top: 8%;
      left: 10%;
      z-index: -1;
    }
    img {
      max-width: 290px;
      height: auto;
      object-fit: contain;
    }

    .left__dots {
      position: absolute;
      top: -11%;
      height: 100%;
      width: 100%;
      left: -10%;
      z-index: -1;
    }

    .right__dots {
      position: absolute;
      right: 1px;
      left: 92%;
      bottom: 3%;
      z-index: -1;
    }

    .zigzag__line--right {
      position: absolute;
      right: -2%;
      left: 120%;
      bottom: 50%;
      transform: translateX(-20px);
    }

    .zigzag__line--left {
      position: absolute;
      top: 40%;
      left: -20%;
      bottom: 50%;
      transform: rotate(30deg);
    }

    @media (max-width: 901px) {
      margin-top: 4rem;

      &:before {
        position: absolute;
        content: 'Hellooo';
        height: 100%;
        width: 95%;
        border: 1px solid grey;
        top: 4%;
        left: 10%;
        z-index: -1;
      }

      img {
        width: 100%;
        /* max-width: 270px; */
        object-fit: contain;
        height: auto;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }

      .right__dots {
        position: absolute;
        right: 1px;
        left: 82%;
        bottom: 3%;
        z-index: -1;
      }

      .left__dots {
        position: absolute;
        top: -15%;
        height: 100%;
        width: 100%;
        left: -4%;
        z-index: -1;
      }

      .zigzag__line--right,
      .zigzag__line--left {
        display: none;
      }
    }
  }
`;

const NavLink = styled.a`
  display: block;
  text-decoration: none;
  color: #fff;

  li {
    list-style: none;
  }
`;

const Card = styled.div`
  width: 100%;
  max-width: 20%;
  height: 50vh;
  background: #fff;
  color: #000;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 9px;
  padding: 1rem;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70%;
  z-index: 10000;
`;

export { HomeContainer, GridContainer, Wrapper, NavLink, Card, CardContainer };
