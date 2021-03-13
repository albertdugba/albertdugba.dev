import styled from 'styled-components';

const HomeContainer = styled.div`
  position: relative;
  padding: 45px 0;
  height: 90vh;
  align-items: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-top: 30px;

  @media (max-width: 801px) {
    grid-template-columns: 1fr;
  }

  .info__text {
    h1 {
      font-size: 4rem;
    }
  }

  .info__img {
    position: relative;
    @media (max-width: 801px) {
      display: none;
    }
    img {
      height: 250px;
      width: 250px;
      object-fit: contain;
    }
  }
`;

export { HomeContainer, GridContainer };
