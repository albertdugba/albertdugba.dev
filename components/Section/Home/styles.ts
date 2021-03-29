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
      right: 0px;
      left: 52%;
      bottom: 3%;
      z-index: -1;
    }
  }
`;

export { HomeContainer, GridContainer };
