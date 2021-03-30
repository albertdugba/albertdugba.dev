import styled from 'styled-components';

const ButtonLink = styled.div`
  a {
    text-decoration: none;
    display: inline-block;
    height: auto;
    border: 1px solid purple;
    padding: 1rem 3rem;
    background: purple;
    font-family: inherit;
    color: #fff;

    &:hover {
      background-color: violet;
    }
  }
`;

export { ButtonLink };
