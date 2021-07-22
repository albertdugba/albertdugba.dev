import styled from 'styled-components';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination]);

export const ProjectCard = () => {
  return (
    <div className='container'>
      <CardContainer>
        <Swiper id='main' tag='section' wrapperTag='ul' navigation pagination>
          <SwiperSlide tag='li'>
            <Card>Card</Card>
          </SwiperSlide>
          <SwiperSlide tag='li'>
            <Card>Another Card</Card>
          </SwiperSlide>
        </Swiper>
      </CardContainer>
    </div>
  );
};

const CardContainer = styled.div`
  /* ↓ Custom properties for ease of adjustment */
  --space: 1rem;
  --color-light: #fff;
  --color-dark: #000;
  --reel-height: auto;
  --item-width: 25ch;
  display: flex;
  height: var(--reel-height);
  /* ↓ Overflow */
  overflow-x: auto;
  overflow-y: hidden;
`;

const Card = styled.div`
  margin-top: 40px;
  /* height: 350px; */
  height: 70vh;
  justify-content: center;
  width: 100%;
  max-width: 850px;
  color: #000;
  border-radius: 10px;
  margin-left: 1rem;
  margin-right: 1rem;
  padding: 1rem;
  background: linear-gradient(150deg, #e1e1e1, #1d161f 100%);
  
`;
