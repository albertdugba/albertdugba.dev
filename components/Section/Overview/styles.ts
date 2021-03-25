import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media (max-width: 801px) {
    grid-template-columns: 1fr;
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

  .shaps {
    animation: rotate-all 2s 0 infinite linear alternate;
  }

  .div1 {
    width: 80px;
    height: 80px;
    background-color: #dddd;
    position: relative;
    margin: auto;
    animation: square-to-circle 2.5s 0.5s infinite
      cubic-bezier(1, 0.015, 0.295, 1.225) alternate-reverse;
  }

  .div2 {
    width: 80px;
    height: 80px;
    background-color: #669999;
    position: relative;
    margin: auto;
    /* animation: square-to-circle2 2.5s 0.42s infinite
      cubic-bezier(1, 0.015, 0.295, 1.225) alternate-reverse; */
  }

  #one {
    top: 70px;
    border-radius: 50%;
  }

  #two {
    border-radius: 50%;
    top: 70px;
    right: 80px;
  }

  #three {
    border-radius: 50%;
    top: 70px;
  }

  #four {
    border-radius: 50%;
    bottom: 90px;
    left: 80px;
    /* top: 90px; */
  }

  @keyframes square-to-circle {
    0% {
      border-radius: 0 0 0 0;
      background: blue;
      transform: rotate(45deg);
    }
    25% {
      border-radius: 50% 0 0 0;
      background: darksalmon;
      transform: rotate(135deg);
    }
    50% {
      border-radius: 50% 50% 0 0;
      background: indianred;
      transform: rotate(180deg);
    }
    75% {
      border-radius: 50% 50% 50% 0;
      background: lightcoral;
      transform: rotate(315deg);
    }
    100% {
      border-radius: 50%;
      background: darksalmon;
      transform: rotate(404deg);
    }
  }

  @keyframes square-to-circle2 {
    0% {
      border-radius: 0 0 0 0;
      background: teal;
      transform: rotate(45deg);
    }
    25% {
      border-radius: 0 0 50% 0;
      background: darksalmon;
      transform: rotate(135deg);
    }
    50% {
      border-radius: 0 0 50% 50%;
      background: indianred;
      transform: rotate(180deg);
    }
    75% {
      background: lightcoral;
      transform: rotate(315deg);
    }
    100% {
      border-radius: 50%;
      background: darksalmon;
      transform: rotate(404deg);
    }
  }
`;
