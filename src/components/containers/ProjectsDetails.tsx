import { useState, useEffect, FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);
interface IProps {
  title: string;
  hrefLink: string;
  projectImages: any[];
  projectImage: string;
  slug: string;
  companyInfo: string;
  jobDescription: string;
}

const ProjectsBanner: FunctionComponent<IProps> = ({
  title,
  hrefLink,
  projectImages,
  projectImage,
  slug,
  companyInfo,
  jobDescription,
}) => {
  const [showNav, setShowNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', e => {
      if (window.scrollY > 100) {
        console.log(window.scrollY);
        setShowNav(true);
      } else setShowNav(false);

      if (window.scrollY) {
        setScrollPosition(window.scrollY);
      }
    });
    return () =>
      window.removeEventListener('scroll', () => {
        if (window.scrollY > 100) {
          setShowNav(true);
        } else setShowNav(false);

        if (window.scrollY) {
          setScrollPosition(window.scrollY);
        }
      });
  }, []);
  return (
    <section>
      <div className={showNav ? 'nav__bg' : ''}>
        {showNav && (
          <ShowNavbar>
            <div className='flex align__center justify__between container'>
              <img
                style={{ maxWidth: '150px' }}
                src={projectImage}
                alt={slug}
              />
              <ul>
                <li style={{ listStyle: 'none' }}>
                  <button>Visit site</button>
                </li>
              </ul>
            </div>
          </ShowNavbar>
        )}
      </div>

      <Container
        className='container'
        initial={{ minHeight: '0vh', width: '0%', opacity: 0 }}
        animate={{ minHeight: '100vh', width: '100%', opacity: 1 }}
        transition={{ type: 'tween', duration: 1 }}
      >
        <div className='work__carousel container'>
          <Swiper autoplay={true} id='section' wrapperTag='ul'>
            {projectImages?.map(item => {
              return item.image.map((image: string, idx: number) => (
                <SwiperSlide key={idx}>
                  <img
                    style={{
                      objectFit: 'contain',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      margin: ' 10px auto',
                      borderRadius: '7px',
                    }}
                    key={idx}
                    src={image}
                  />
                </SwiperSlide>
              ));
            })}
          </Swiper>
        </div>

        <div className='work__info'>
          <div>
            <img
              style={{
                maxWidth: '200px',
                // transform: scrollPosition > 30 && 'skewY(0.352rad)',
                // opacity: scrollPosition > 30 && '0',
              }}
              src={projectImage}
              alt={slug}
            />
          </div>

          <div className='work__text'>
            <h2>{title}</h2>
            <p style={{ background: '#ece8f0c6', padding: '1rem' }}>
              {companyInfo}
            </p>

            <h2>My Contribution</h2>
            <p>{jobDescription}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectsBanner;

/**
 * @styles
 */

const ShowNavbar = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: #fff;
  box-shadow: 0 4px 9px rgba(0, 0, 0, 0.5);
`;

const Container = styled(motion.div)`
  height: 100vh;
  width: 100%;
  display: flex;
  overflow: hidden;

  @media (max-width: 758px) {
    grid-template-columns: 1fr;
  }

  .work__carousel {
    padding: 1.5rem;
    width: 45%;
    background-color: var(--sec);
    position: fixed;
    left: 0%;
    height: 100vh;

    @media (max-width: 801px) {
      display: none;
    }
  }

  .work__info {
    padding: 3rem;
    /* overflow-y: auto;
    overflow-x: hidden; */
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 55%;
    position: absolute;
    right: 0%;
    /* height: 100vh; */
    /* overflow-x: scroll; */

    @media (max-width: 801px) {
      width: 100%;
    }
  }
`;
