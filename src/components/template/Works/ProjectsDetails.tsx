import { useState, useEffect, FunctionComponent } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import 'swiper/swiper-bundle.css';
import { IWorkProps } from 'interface';

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
}) => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShowNav(true);
      } else setShowNav(false);
    });
    return () =>
      window.removeEventListener('scroll', () => {
        if (window.scrollY > 100) {
          setShowNav(true);
        } else setShowNav(false);
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
                  <Link href={hrefLink}>
                    <a target="_blank">
                      <button>Visit site</button>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </ShowNavbar>
        )}
      </div>

      <Container className="container">
        <div className="container work__carousel mr-1">
          <Swiper autoplay={true} id="section" wrapperTag="ul">
            {projectImages?.map((item) => {
              return item.image.map((image: string, idx: number) => (
                <SwiperSlide key={idx}>
                  <img
                    style={{
                      // objectFit: 'contain',
                      display: 'flex',
                      // maxWidth: '70%',
                      alignItems: 'center',
                    }}
                    key={idx}
                    src={image}
                  />
                </SwiperSlide>
              ));
            })}
          </Swiper>
        </div>

        <div>
          <div className="work__info">
            <h2>{title}</h2>
            <p style={{ background: '#ece8f0c6', padding: '1rem', borderRadius: '5px' }}>{companyInfo}</p>

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
  box-shadow: 0 4px 9px rgba(0, 0, 0, 0.2);
`;

const Container = styled(motion.div)`
  max-width: 80%;
  margin: auto;
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
`;
