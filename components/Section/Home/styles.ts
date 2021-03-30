import styled from 'styled-components';

const HomeContainer = styled.div`
  position: relative;
  padding: 45px 0;
  height: 100vh;
  align-items: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  place-items: center;
  padding-top: 20px;

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
      max-width: 100%;
      height: auto;
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
      right: 1px;
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

    @media (max-width: 901px) {
      margin-top: 4rem;

      &:before {
        position: absolute;
        content: 'Hellooo';
        height: 100%;
        width: 95%;
        border: 1px solid grey;
        top: 4%;
        left: 10%;
        z-index: -1;
      }

      img {
        max-width: 100%;
        height: auto;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }

      .right__dots {
        position: absolute;
        right: 1px;
        left: 82%;
        bottom: 3%;
        z-index: -1;
      }

      .left__dots {
        position: absolute;
        top: -15%;
        height: 100%;
        width: 100%;
        left: -4%;
        z-index: -1;
      }

      .zigzag__line--right,
      .zigzag__line--left {
        display: none;
      }
    }
  }
`;

export { HomeContainer, GridContainer };
