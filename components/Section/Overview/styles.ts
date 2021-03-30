import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem;

  @media (max-width: 801px) {
    grid-template-columns: 1fr;
    padding-top: 20rem;
  }

  .bio--container {
    .bio--divider {
      display: flex;
      align-items: center;
      &:before {
        position: absolute;
        content: '';
        width: 10%;
        background: red;
        height: 9px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
      }
    }
    position: relative;
    &__dots {
      z-index: -1;
    }

    &__info {
      z-index: 1;
      background: rgba(255, 255, 255, 0.9);
      position: absolute;
      top: 50px;
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
