import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { FunctionComponent } from 'react';
import { IProjectProps } from 'src/lib/interface';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export const ImageSlider: FunctionComponent<IProjectProps> = ({ projectImages }) => {
  return (
    <Swiper autoplay={true} id="section" wrapperTag="ul">
      {projectImages?.map((item) => {
        return item.image.map((image: string, idx: number) => (
          <SwiperSlide key={idx}>
            <img
              style={{
                display: 'flex',
                alignItems: 'center',
                maxWidth: '70%',
              }}
              key={idx}
              src={image}
            />
          </SwiperSlide>
        ));
      })}
    </Swiper>
  );
};
