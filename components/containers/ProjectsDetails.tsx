import styled from 'styled-components';
import { motion } from 'framer-motion';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination]);

const ProjectsBanner = ({
  title,
  hrefLink,
  projectImages,
  projectImage,
  slug,
  companyInfo,
  jobDescription,
}) => {
  return (
    <Container
      initial={{ height: '0', width: '0', opacity: 0 }}
      animate={{ height: '100vh', width: '100%', opacity: 1 }}
      transition={{ type: 'tween', duration: 1 }}
    >
      <div style={{ padding: '2rem' }}>
        <h1>{hrefLink}</h1>
        <Swiper id='section' wrapperTag='ul' pagination navigation>
          {projectImages?.map(item => {
            return item.image.map((image: string, idx: number) => (
              <SwiperSlide key={idx}>
                <img key={idx} src={image} />
              </SwiperSlide>
            ));
          })}
        </Swiper>
      </div>

      <div style={{ background: 'var(--secondaryColor)', padding: '1rem' }}>
        <div className='work__details'>
          <div>
            <img style={{ maxWidth: '300px' }} src={projectImage} alt={slug} />
          </div>
        </div>

        <div className='work__text'>
          <h2>{title}</h2>
          <p>{companyInfo}</p>

          <h2>My Contribution</h2>
          <p>{jobDescription}</p>
        </div>
      </div>
    </Container>
  );
};

export default ProjectsBanner;

/**
 * @styles
 */

const Container = styled(motion.div)`
  overflow: hidden;
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 500px 1fr;
  grid-gap: 50px;

  .work__details {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    h2 {
      text-align: center;
    }
  }
`;
