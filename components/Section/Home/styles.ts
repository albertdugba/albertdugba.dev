import styled from 'styled-components';

const HomeContainer = styled.div`
  position: relative;
  padding: 45px 0;
  height: 90vh;
  align-items: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;

  @media (max-width: 801px) {
    grid-template-columns: 1fr;
  }

  .info__text {
    h1 {
      font-size: 4rem;
      color: #9588aa;
    }

    h2 {
      font-size: 1.8rem;
    }

    div p {
      font-size: 1.2rem;
      line-height: 1.6;
    }
  }

  .info__img {
    position: relative;

    &:before {
      position: absolute;
      content: 'Hellooo';
      height: 100%;
      width: 100%;
      border: 1px solid purple;
      top: 8%;
      left: 10%;
      z-index: -1;
    }

    img {
      height: 350px;
      width: 350px;
      object-fit: contain;
    }

    .left__dots {
      position: absolute;
      top: -11%;
      height: 100%;
      width: 100%;
      left: -10%;
      z-index: -1;
    }

    .right__dots {
      position: absolute;
      right: 20px;
      left: 92%;
      bottom: 3%;
      z-index: -1;
    }

    .zigzag__line--right {
      position: absolute;
      right: -2%;
      left: 120%;
      bottom: 50%;
      transform: translateX(-20px);
    }

    .zigzag__line--left {
      position: absolute;
      top: 40%;
      left: -20%;
      bottom: 50%;
      transform: rotate(30deg);
    }
  }
`;

export { HomeContainer, GridContainer };
