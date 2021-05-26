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
  position: relative;
  height: 420px;
  overflow: hidden;

  img {
    object-fit: contain;
    width: 100%;
    height: auto;
  }
`;

const ContentBody = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background: var(--primaryColor);
  display: flex;
  align-items: center;
  justify-content: center;

  .works {
    background: var(--secondaryColor);
    padding: 2rem;
    border-radius: 4px;
  }

  .works h1 {
    font-size: 2rem;
  }
`;

export { Container, ButtonLink, ContentBody };
