import React, { FunctionComponent, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import { SliderHeadline } from './styled';

interface ISlideProps {
  slide: any;
  current: number;
  handleSlideClick: any;
  index: number;
}

export const Slide: FunctionComponent<ISlideProps> = (props) => {
  const slide = useRef<HTMLInputElement | any>(null);

  const router = useRouter();

  const handleMouseMove = (event: React.MouseEvent<HTMLLIElement>) => {
    const el = slide.current;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)));
    el.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)));
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLLIElement>) => {
    slide.current.style.setProperty('--x', 0);
    slide.current.style.setProperty('--y', 0);
  };

  const handleSlideClick = () => props.handleSlideClick(props.slide.index);

  const imageLoaded = (event: any) => {
    event.target.style.opacity = 1;
  };

  const current = props.current;
  let classNames = 'slide';

  if (current === props.index) classNames += ' slide--current';
  else if (current - 1 === props.index) classNames += ' slide--previous';
  else if (current + 1 === props.index) classNames += ' slide--next';
  else if (current + 1) classNames += ' slide--next';

  const { internalRoute, tag, projectImage, title, tags, slug, hrefLink, coverImage } = props.slide;

  return (
    <>
      {router.pathname === '/works' ? (
        <li
          ref={slide}
          className={classNames}
          onClick={handleSlideClick}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="slide__image-wrapper"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {internalRoute ? (
              <div style={{ zIndex: 20000 }}>
                <Link href="/work/[slug]" as={`/work/${slug}`}>
                  <a rel="noopener" href={hrefLink}>
                    <img
                      style={{ maxWidth: '200px', height: 'auto' }}
                      className="slide__image"
                      alt={title}
                      src={projectImage}
                      onLoad={imageLoaded}
                    />
                    <SliderHeadline>{tag}</SliderHeadline>
                  </a>
                </Link>
              </div>
            ) : (
              <div style={{ zIndex: 2000 }}>
                <SliderHeadline>{tag}</SliderHeadline>

                <a style={{ textDecoration: 'none', color: '#fff' }} target="_blank" href={hrefLink}>
                  <h1>{title}</h1>
                </a>
              </div>
            )}
          </div>
        </li>
      ) : router.pathname === '/posts' ? (
        <li
          ref={slide}
          className={classNames}
          onClick={handleSlideClick}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="slide__image-wrapper bg-image"
            style={{
              backgroundImage: `url(${coverImage.url})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              width: '100%',
            }}
          >
            <CardInfo>
              <Link href="/post/[slug]" as={`/post/${slug}`}>
                <a>
                  <h2>{title}</h2>
                  {tags?.map((tag: string, idx: number) => (
                    <span key={idx}>#{tag}</span>
                  ))}
                </a>
              </Link>
            </CardInfo>
          </div>
        </li>
      ) : null}
    </>
  );
};

const CardInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  color: #fff;
  z-index: 200;
  padding: 1rem;

  a {
    display: block;
    text-decoration: none;
    color: #fff;
  }

  span {
    display: inline-block;
    overflow-y: auto;
    padding: 0.4rem;
    font-weight: bolder;
    margin: auto;
  }

  @media (max-width: 701px) {
    h2 {
      font-size: 1rem;
    }
  }
`;

const Container = styled.div`
  height: 55%;
  width: 40vw;
  background-size: cover;
  background-position: center;
  background: #fff;
  position: relative;
  padding: 0.9rem;
  border-radius: 12px;
  margin-top: -1px;

  &:after {
    content: '';
    position: absolute;
    border-radius: 12px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.6);
    box-shadow: inset 30px 100px -120px var(--primaryColor), inset 0px -10px 50px -450px var(--primaryColor);
  }

  @media (max-width: 701px) {
    height: 250px;
    width: 350px;
    margin-top: 50px;
    h1 {
      font-size: 1rem;
    }
  }

  @media (max-width: 601px) {
    height: 320px;
    width: 270px;
    margin-top: 50px;
    h1 {
      font-size: 1rem;
    }
  }
`;
