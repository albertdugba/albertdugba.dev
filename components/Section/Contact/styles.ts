import styled from 'styled-components';

const FormContainer = styled.div`
  height: auto;
  position: absolute;
  top: 5%;
  left: 10%;
  right: 0;

  @media (max-width: 801px) {
    left: 0%;
  }

  form {
    width: 100%;
    max-width: 650px;
    padding: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    background: rgba(255, 255, 255, 0.9);
    opacity: 0.8;

    button {
      background: none;
      width: 97%;
      border: 1px solid;
      font: inherit;
      line-height: 1;
      margin: 0.5em;
      padding: 1em 2em;
      transition: 0.25s;
      cursor: pointer;

      &.slide:hover,
      &.slide:focus {
        box-shadow: inset 6.5em 0 0 0 var(--hover);
      }

      &:hover,
      &:focus {
        color: #fff;
        background-color: purple;
        border: none;
      }
    }

    .input-group {
      position: relative;
      margin: 0px 0 2px;
      padding: 1rem;
    }

    input,
    textarea {
      font-family: inherit;
      font-size: 18px;
      padding: 10px 10px 10px 5px;
      display: block;
      width: 100%;
      border: none;
      outline: none;
      background: #fff;
      border-bottom: 1px solid #757575;
    }

    input:focus,
    textarea:focu {
      outline: none;
    }

    label {
      color: #999;
      font-size: 1.2rem;
      position: absolute;
      pointer-events: none;
      left: 16px;
      top: 10px;
      transition: 0.2s ease all;
      -moz-transition: 0.2s ease all;
      -webkit-transition: 0.2s ease all;
    }

    input:focus ~ label,
    input:valid ~ label,
    textarea:focus ~ label {
      top: -20px;
      font-size: 14px;
      color: #4285f4;
    }

    .bar {
      position: relative;
      display: block;
      width: 315px;
    }

    .bar:before,
    .bar:after {
      content: '';
      height: 2px;
      width: 0;
      bottom: 1px;
      position: absolute;
      background: #4285f4;
      transition: 0.2s ease all;
      -moz-transition: 0.2s ease all;
      -webkit-transition: 0.2s ease all;
    }

    .bar:before {
      left: 50%;
    }
  }
`;

const ContactContainer = styled.div`
  position: relative;

  @media (max-width: 501px) {
    .icons-group svg {
      width: 100%;
    }
  }
`;

export { FormContainer, ContactContainer };