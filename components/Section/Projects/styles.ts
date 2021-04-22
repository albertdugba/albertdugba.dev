import styled from 'styled-components';

const ButtonLink = styled.div`
  a {
    text-decoration: none;
    display: inline-block;
    height: auto;
    border: 1px solid #fff;
    padding: 1rem 3rem;
    background: var(--primaryColor);
    font-family: inherit;
    color: #fff;

    &:hover {
      background-color: var(--primaryColor);
      /* border: none; */
    }
  }
`;

const Container = styled.div`
  /* display: flex; */
  align-items: center;
  /* background: #17141d; */
  color: #fff;
  padding: 1rem;

  .works {
    /* width: 50%; */
  }
`;

export { Container, ButtonLink };
