import styled from 'styled-components';

const ButtonLink = styled.div`
  a {
    text-decoration: none;
    display: inline-block;
    height: 40px;
    border: 1px solid #fff;
    padding: 1rem 3rem;
    background: var(--primaryColor);
    font-family: inherit;
    color: #fff;

    &:hover {
      background-color: var(--primaryColor);
    }
  }
`;

const Container = styled.div`
  background: var(--primaryColor);
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* max-width: 800px; */
  /* margin: auto; */

  @media (max-width: 700px) {
    flex-direction: column;
    /* max-width: 400px; */
    padding: 1rem;
  }

  .card {
    background: #fff;
    width: 700px;
    padding: 5rem;
    min-height: 400px;
    height: 100%;
    /* box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4); */
    /* border-radius: 1px; */
    display: flex;
    flex-direction: column;
    flex: 45% 0 45%;

    @media (max-width: 700px) {
      width: 460px;
      min-height: 200px;
      padding: 1rem;
    }

    @media (max-width: 500px) {
      width: 350px;
    }

    &__footer {
      margin-top: auto;
    }

    &__footer button {
    }
  }
`;

export { Container, ButtonLink, ContentBody };
