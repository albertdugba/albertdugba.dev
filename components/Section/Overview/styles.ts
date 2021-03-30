import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  align-items: center;
  padding: 1rem;
  .svg--container {
    width: 100%;
  }

  @media (max-width: 801px) {
    grid-template-columns: 1fr;
    padding-top: 8rem;
    margin-top: 12rem;
    grid-gap: 20px;
    background: none;

    .svg--container {
      width: 100%;
      margin-left: auto;
    }
  }

  button {
    background: none;
    border: none;
    outline: none;
    display: block;
    font-size: 1rem;
    font-weight: bold;
    position: relative;
    min-width: 180px;
    padding: 1rem 2rem;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.4s ease-out;
    background-color: blue;

    a {
      color: #fff;
      text-decoration: none;
    }
  }

  p {
    font-size: 1.2rem;
    color: #232324;
    line-height: 1.8;
  }
`;
