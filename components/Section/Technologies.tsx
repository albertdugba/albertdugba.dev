import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import FireBase from '../../styles/Icons/firebase';
import GraphQL from '../../styles/Icons/graphql';
import NextJS from '../../styles/Icons/nextjs';
import NodeJS from '../../styles/Icons/node';
import ReactJS from '../../styles/Icons/react';
import Redux from '../../styles/Icons/redux';
import Terminal from '../../styles/Icons/terminal';
import styled from 'styled-components';
import Slider from 'react-slick';

const IconsContainer = styled.div`
  .slick-dots li button {
    display: none;
  }
  & svg {
    padding-left: 0.5rem;
  }
`;

const Technologies = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 10000,
    cssEase: 'linear',
  };
  return (
    <div className="container">
      <h1>Tools and technologies I use</h1>
      <IconsContainer>
        <Slider {...settings}>
          <FireBase width={60} height={60} color="yello" />
          <GraphQL width={60} height={60} />
          <NextJS width={60} height={60} />
          <Terminal width={60} height={60} color="black" />
          <Redux width={60} height={60} />
          <NodeJS width={60} height={60} />
          <ReactJS width={60} height={60} color="blue" />
        </Slider>
      </IconsContainer>
    </div>
  );
};

export default Technologies;
