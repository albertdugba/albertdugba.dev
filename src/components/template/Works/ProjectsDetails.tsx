import { useState, useEffect, FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import 'swiper/swiper-bundle.css';
import { IWorkProps } from 'types/types';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export const ProjectsBanner: FunctionComponent<IWorkProps> = ({
  title,
  hrefLink,
  projectImages,
  projectImage,
  slug,
  companyInfo,
  jobDescription,
  features,
  challenges,
  internalRoute,
}) => {
  const [showNav, setShowNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
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
            <div className="flex align__center justify__between container">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
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

      <Container className="container">
        <div className="work__carousel">
          <Swiper autoplay={true} id="section" wrapperTag="ul">
            {projectImages?.map((item) => {
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

        <div className="work__info">
          <div>
            <img
              style={{
                maxWidth: '200px',
                perspectiveOrigin: '50% 20%',
              }}
              src={projectImage}
              alt={slug}
            />
          </div>

          <div className="work__text">
            <h2>{title}</h2>
            <p style={{ background: '#ece8f0c6', padding: '1rem' }}>{companyInfo}</p>

            <h2>My Contribution</h2>
            <div>
              <p>{jobDescription}</p>
              <ul>
                {features?.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <h2>Challenges</h2>
            <p>{challenges}</p>
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
    height: 100%;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 55%;
    position: absolute;
    right: 0%;
    bottom: 30px;

    @media (max-width: 801px) {
      width: 100%;
    }
  }
`;
