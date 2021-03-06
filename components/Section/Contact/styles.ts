import styled from 'styled-components';

const FormContainer = styled.div`
  width: 100%;
  max-width: 650px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  background: var(--secondaryColor);
  background: rgba(255, 255, 255, 0.9);
  border-radius: 1px;

  position: absolute;
  top: 5%;
  left: 12%;
  right: 0;

  @media (max-width: 801px) {
    left: 0%;
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
    background: transparent;
    border-bottom: 1px solid #757575;
  }

  input:focus,
  textarea:focus {
    outline: none;
  }

  label {
    display: block;
  }
`;

const ContactContainer = styled.div`
  position: relative;
  margin-top: 8rem;

  @media (max-width: 501px) {
    margin-top: 2rem;
    .icons-group svg {
      width: 100%;
    }
  }
`;

export { FormContainer, ContactContainer };
