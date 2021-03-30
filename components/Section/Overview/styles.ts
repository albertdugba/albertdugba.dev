import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-top: 15rem;

  @media (max-width: 801px) {
    grid-template-columns: 1fr;
    place-items: center;
  }

  .text p {
    .span1 {
      border-bottom: 2px solid blue;
    }
    .span2 {
      border-bottom: 2px solid green;
    }

    .span3 {
      border-bottom: 2px solid red;
      transform: translate(-20px);
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
