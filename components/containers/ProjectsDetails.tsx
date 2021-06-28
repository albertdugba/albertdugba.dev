import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const ProjectsBanner = ({
  title,
  hrefLink,
  projectImages,
  projectImage,
  slug,
  companyInfo,
  jobDescription,
}) => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', e => {
      if (window.scrollY > 100) {
        setShowNav(true);
      } else setShowNav(false);
    });
    return () =>
      window.removeEventListener('scroll', e => {
        console.log(e);
      });
  }, []);
  return (
    <section>
      <div className={showNav && 'nav__bg'}>
        {showNav && (
          <div className='nav'>
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
          </div>
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
            <img style={{ maxWidth: '200px' }} src={projectImage} alt={slug} />
          </div>

          <div className='work__text'>
            <h2>{title}</h2>
            <p style={{ background: '#ece8f0c6', padding: '1rem' }}>
              {companyInfo}
            </p>

            <h2>My Contribution</h2>
            <p>{jobDescription}</p>
          </div>
          <div className='work__text'>
            <h2>{title}</h2>
            <p>{companyInfo}</p>

            <h2>My Contribution</h2>
            <p>{jobDescription}</p>
          </div>
          <div className='work__text'>
            <h2>{title}</h2>
            <p>{companyInfo}</p>

            <h2>My Contribution</h2>
            <p>{jobDescription}</p>
          </div>
          <div className='work__text'>
            <h2>{title}</h2>
            <p>{companyInfo}</p>

            <h2>My Contribution</h2>
            <p>{jobDescription}</p>
          </div>
          <div className='work__text'>
            <h2>{title}</h2>
            <p>{companyInfo}</p>

            <h2>My Contribution</h2>
            <p>{jobDescription}</p>
          </div>
          <div className='work__text'>
            <h2>{title}</h2>
            <p>{companyInfo}</p>

            <h2>My Contribution</h2>
            <p>{jobDescription}</p>
          </div>
          <div className='work__text'>
            <h2>{title}</h2>
            <p>{companyInfo}</p>

            <h2>My Contribution</h2>
            <p>{jobDescription}</p>
          </div>
          <div className='work__text'>
            <h2>{title}</h2>
            <p>{companyInfo}</p>

            <h2>My Contribution</h2>
            <p>{jobDescription}</p>
          </div>
          <div className='work__text'>
            <h2>{title}</h2>
            <p>{companyInfo}</p>

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
