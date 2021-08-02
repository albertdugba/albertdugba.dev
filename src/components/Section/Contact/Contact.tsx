import { FunctionComponent } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';
import Times from '@icons/times';

interface CloseProps {
  handleClose: (e: any) => void;
}

export const ContactWidget: FunctionComponent<CloseProps> = ({ handleClose }) => {
  const [state, handleSubmit] = useForm('meqvqaka');

  return (
    <>
      <FormContainer onSubmit={handleSubmit} className="contaner">
        <div className="close__wrapper">
          <Times className="close__button" size={30} color="var(--secondaryColor)" onClick={handleClose} />
        </div>
        <h4 className="form__title">
          Hi there <span role="img">👋 , like my works, lets talk</span>
        </h4>
        <div className="flex__column">
          <label htmlFor="name">Name</label>
          <input className="form__input" type="text" id="name" name="name" required />
        </div>
        <ValidationError field="name" prefix="Name" errors={state.errors} />
        <div className="flex__column">
          <label htmlFor="email">Email</label>
          <input className="form__input" type="email" id="email" name="email" required />
        </div>
        <ValidationError field="message" prefix="Message" errors={state.errors} />
        <div className="flex__column">
          <label htmlFor="message">Message</label>
          <textarea className="message__body" id="message" name="message" required />
        </div>

        <button>
          <span>{state.submitting ? 'Submitting...' : 'Shoot'} </span>
        </button>
      </FormContainer>
    </>
  );
};

const FormContainer = styled.form`
  max-width: 320px;
  width: 100%;
  margin: auto;
  position: absolute;
  bottom: 90px;
  right: 40px;
  min-height: 40vh;
  z-index: 2000;
  background: #fff;
  color: #000;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  font-family: inherit;

  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    right: 20px;
    width: 17px;
    height: 20px;
    background: #fff;
    transform: rotate(45deg);
  }

  label {
    display: block;
    margin-top: 20px;
    font-family: inherit;
  }
  @media (max-width: 701px) {
    .form__title {
      font-size: 1.3rem;
    }
  }

  .close__button {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: flex-end;
    padding: 0.4rem;
    background: #ddd;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    cursor: pointer;
  }

  .close__wrapper {
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: 701px) {
    height: 100vh;
    max-width: 100%;
    bottom: 0px;
    top: 0;
    left: 0;
    right: 0;
  }

  .form__input {
    border: none;
    outline: none;
    padding: 0.65rem 0.5rem;
    background: #e1e1e1;
    border-radius: 6px;
    font-family: inherit;
    overflow: hidden;
    font-size: 1rem;

    &:focus {
      border: 1px solid var(--secondaryColor);
      background-color: #fff;
    }
  }

  .message__body {
    border: none;
    outline: none;
    padding: 0.6rem 0.5rem;
    background: #e1e1e1;
    border-radius: 6px;
    height: 120px;
    font-family: inherit;
    font-size: 1rem;

    &:focus {
      border: 1px solid var(--secondaryColor);
      background-color: #fff;
    }
  }

  button {
    margin-top: 20px;
  }
`;
