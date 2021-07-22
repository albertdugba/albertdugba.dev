import styled from 'styled-components';
import SwiperCore, { Pagination, Navigation, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface IProps {
  works?: any[];
  posts?: any[];
}

export const CardsCarousel: FunctionComponent<IProps> = ({ works, posts }) => {
  SwiperCore.use([Navigation, Pagination, EffectCoverflow]);
  const router = useRouter();
  console.log(router);

  return (
    <Wrapper className='container'>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        effect='coverflow'
        autoplay={true}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        slidesPerView={2}
        centeredSlides
        style={{ height: '500px' }}
      >
        {router.pathname === '/works'
          ? works.map((work, idx) => (
              <SwiperSlide key={idx}>
                <Link href='/work/[slug]' as={`/work/${work.slug}`}>
                  <Card>
                    <h1>{work?.title}</h1>
                  </Card>
                </Link>
              </SwiperSlide>
            ))
          : posts.map((post, idx) => (
              <SwiperSlide key={idx}>
                <Link href='/post/[slug]' as={`/post/${post.slug}`}>
                  <Card>
                    <h1>{post.title}</h1>
                  </Card>
                </Link>
              </SwiperSlide>
            ))}
      </Swiper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 30px;
`;

const Card = styled.div`
  height: 300px;
  width: 450px;
  padding: 1rem;
  border-radius: 15px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  position: relative;
  overflow: hidden;
  background: #29203a;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  background: linear-gradient(30deg, #454349 10%, #21132b);
`;
