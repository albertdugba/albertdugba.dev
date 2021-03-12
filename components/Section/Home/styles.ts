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
  margin-top: 30px;

  .info__text {
    h1 {
      font-size: 4rem;
    }

    .info__img img {
      object-fit: contain;
      width: 100%;
      max-width: 200px;
      border-radius: 50%;
      display: none;
    }
  }
`;

export { HomeContainer, GridContainer };
