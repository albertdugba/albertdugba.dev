import { IProjectProps } from '@/lib/interface';
import { FunctionComponent } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export const ImageSlider: FunctionComponent<IProjectProps> = ({ projectImages }) => {
  return (
    <Swiper autoplay={true} id="section" wrapperTag="ul">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {projectImages?.map((item) => {
          return item.image.map((image: string, idx: number) => (
            <SwiperSlide key={idx}>
              <img
                style={{
                  width: '80%',
                  height: '100%',
                }}
                key={idx}
                src={image}
              />
            </SwiperSlide>
          ));
        })}
      </div>
    </Swiper>
  );
};
