import { FunctionComponent } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';
import Times from '@icons/times';
import { motion } from 'framer-motion';
import { contactContainer, contactItem } from 'src/components/animation/contactWidget';


interface CloseProps {
  handleClose: (e: any) => void;
}

export const ContactWidget: FunctionComponent<CloseProps> = ({ handleClose }) => {
  const [state, handleSubmit] = useForm('meqvqaka');

  return (
    <>
      <FormContainer
        variants={contactContainer}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit}
        className="contaner"
      >
        <div className="close__wrapper">
          <Times className="close__button" size={30} color="var(--secondaryColor)" onClick={handleClose} />
        </div>
        <motion.h4 variants={contactItem} className="form__title">
          Hi there <span role="img">👋 , lets talk</span>
        </motion.h4>

        <motion.div variants={contactItem} className="flex__column">
          <label htmlFor="name">Name</label>
          <input className="form__input" type="text" id="name" name="name" required />
        </motion.div>
        <ValidationError field="name" prefix="Name" errors={state.errors} />
        <motion.div variants={contactItem} className="flex__column">
          <label htmlFor="email">Email</label>
          <input className="form__input" type="email" id="email" name="email" required />
        </motion.div>
        <ValidationError field="message" prefix="Message" errors={state.errors} />
        <motion.div variants={contactItem} className="flex__column">
          <label htmlFor="message">Message</label>
          <textarea className="message__body" id="message" name="message" required />
        </motion.div>

        <motion.button variants={contactItem}>
          <span>{state.submitting ? 'Submitting...' : 'Shoot'} </span>
        </motion.button>
      </FormContainer>
    </>
  );
};

const FormContainer = styled(motion.form)`
  max-width: 350px;
  width: 100%;
  margin: auto;
  position: absolute;
  bottom: 80px;
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

  .form__alert {
    position: absolute;
    top: 0;
    right: 20px;
    left: 20px;
    width: 90%;
    z-index: 9999999;
    font-size: 0.9rem;
    background: #528b61;
    border-radius: 4px;
    padding: 1rem;
    color: var(--white);
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    right: 20px;
    width: 12px;
    height: 12px;
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
      color: var(--primaryColor);
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
    transition: border 0.3s ease-in-out;

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
