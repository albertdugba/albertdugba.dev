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
  /* background-color: red; */

  .info__text {
    h1 {
      font-size: 3.9rem;
    }

    img {
      object-fit: contain;
      width: 100%;
      max-width: 800px;
      border-radius: 50%;
    }
  }
`;

export { HomeContainer, GridContainer };
