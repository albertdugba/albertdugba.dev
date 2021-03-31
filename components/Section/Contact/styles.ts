import styled from 'styled-components';

const FormContainer = styled.div`
  position: absolute;
  top: 15%;
  left: 20%;
  right: 0;

  @media (max-width: 801px) {
    left: 0%;
  }
  form {
    width: 100%;
    max-width: 550px;
    padding: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 1);
    opacity: 0.8;

    .input-group {
      position: relative;
      margin: 40px 0 20px;
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
      border-bottom: 1px solid #757575;
    }

    input:focus,
    textarea:focu {
      outline: none;
    }

    label {
      color: #999;
      font-size: 18px;
      font-weight: normal;
      position: absolute;
      pointer-events: none;
      left: 5px;
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
  /* background: violet; */

  @media (max-width: 501px) {
    .icons-group svg {
      width: 100%;
    }
  }
`;

export { FormContainer, ContactContainer };
