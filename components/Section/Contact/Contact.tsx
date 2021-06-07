import { FunctionComponent } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FormContainer, ContactContainer } from './styles';

const Contact: FunctionComponent = () => {
  const [state, handleSubmit] = useForm('meqvqaka');

  return (
    <ContactContainer className='container pd-1'>
      <div className='icons-group'>
        <svg
          width='505'
          height='332'
          viewBox='0 0 505 332'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='505' height='332' fill='none' />
          <rect width='505' height='332' fill='none' />
          <ellipse cx='282.5' cy='116.5' rx='73.5' ry='74.5' fill='#5C2984' />
          <ellipse cx='160.5' cy='213.5' rx='73.5' ry='74.5' fill='#C654D0' />
          <path
            d='M187 78.5C187 106.943 164.614 130 137 130C109.386 130 87 106.943 87 78.5C87 50.0573 109.386 27 137 27C164.614 27 187 50.0573 187 78.5Z'
            fill='#C6B1D6'
          />
        </svg>
      </div>
      <FormContainer>
        {state.succeeded && (
          <p style={{ background: '#80b897', color: '#fff', padding: '.9rem' }}>
            Message has been successfully sent!
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <h1>Send me a message!</h1>
          <div className='input-group'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' required />
          </div>
          <ValidationError field='name' prefix='Name' errors={state.errors} />
          <div className='input-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' required />
          </div>
          <ValidationError
            field='message'
            prefix='Message'
            errors={state.errors}
          />
          <div className='input-group'>
            <label htmlFor='message'>Message</label>
            <textarea id='message' name='message' required />
          </div>

          <button>
            <span>{state.submitting ? 'Submitting...' : 'Shoot'} </span>
          </button>
        </form>
      </FormContainer>
    </ContactContainer>
  );
};

export default Contact;
