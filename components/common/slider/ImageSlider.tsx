import { useRef, FunctionComponent } from 'react';
import { IProjectProps } from '@/lib/interface';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export const ImageSlider: FunctionComponent<IProjectProps> = ({ projectImages }) => {
  return (
    <ImageContainer>
      <Swiper autoplay={true} id="section" wrapperTag="ul">
        {projectImages?.map((item) => {
          return item.image.map((image: string, idx: number) => (
            <SwiperSlide key={idx} tag="li" style={{ listStyle: 'none' }}>
              <img className="slider--image" key={idx} src={image} />
            </SwiperSlide>
          ));
        })}
      </Swiper>
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--secondaryColor);

  .slider--image {
    width: 100vw;
    max-width: 90%;
    height: auto;
    margin-left: 1rem;
    margin-right: 1rem;
    border-radius: 7px;
    box-shadow: 0 3px 90px rgba(0, 0, 0, 0.8);
  }
`;
