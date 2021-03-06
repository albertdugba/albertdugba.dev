import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  align-items: center;
  padding: 1rem;
  margin-top: 6rem;

  .info {
    margin-top: 0.5rem;

    h1 {
      color: var(--primaryColor);
    }
  }

  .svg--container {
    width: 100%;
  }

  @media (max-width: 802px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
    background: none;

    .svg--container {
      width: 100%;
      margin-left: auto;
    }
  }

  p {
    font-size: 1.2rem;
    color: #232324;
    line-height: 1.8;
  }
`;
