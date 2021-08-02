import styled from 'styled-components';

const FormContainer = styled.form`
  max-width: 50%;
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

export { FormContainer };
