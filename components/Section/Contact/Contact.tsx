import { FormContainer, ContactContainer } from './styles';

const Contact = () => {
  return (
    <ContactContainer className="container">
      {/* <h1>Find me </h1> */}
      <div className="icons-group">
        <svg
          width="505"
          height="332"
          viewBox="0 0 505 332"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect width="505" height="332" fill="#E5E5E5" />
          <rect width="505" height="332" fill="white" />
          <ellipse cx="282.5" cy="116.5" rx="73.5" ry="74.5" fill="#5C2984" />
          <ellipse cx="160.5" cy="213.5" rx="73.5" ry="74.5" fill="#C654D0" />
          <path
            d="M187 78.5C187 106.943 164.614 130 137 130C109.386 130 87 106.943 87 78.5C87 50.0573 109.386 27 137 27C164.614 27 187 50.0573 187 78.5Z"
            fill="#C6B1D6"
          />
        </svg>
      </div>

      <FormContainer>
        <form action="">
          <h1>Lets talk</h1>
          <div className="input-group">
            <input type="text" required />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Name</label>
          </div>

          <div className="input-group">
            <input type="text" required />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Email</label>
          </div>

          <div className="input-group">
            <textarea></textarea>
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Message</label>
          </div>

          <button>Send</button>
        </form>
      </FormContainer>
    </ContactContainer>
  );
};

export default Contact;
