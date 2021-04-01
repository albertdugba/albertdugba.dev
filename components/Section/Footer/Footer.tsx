import Dev from 'styles/Icons/dev';
import Github from 'styles/Icons/github';
import LinkedIn from 'styles/Icons/linkedin';
import Twitter from 'styles/Icons/twitter';
import { FooterContainer } from './style';
const Footer = () => {
  return (
    <>
      <FooterContainer>
        <div className="container">
          <div>
            <h2>Say Hello</h2>
            <span>albert.dugba@gmail.com</span>
          </div>

          <hr />

          <div>
            <span>&copy; {new Date().getFullYear()} Albert Dugba</span>
            <div className="handles">
              <Github width={20} height={20} color="#ddd" />
              <Twitter width={20} height={20} color="#ddd" />
              <LinkedIn width={20} height={20} />
              <Dev width={20} height={20} />
            </div>
          </div>
        </div>
      </FooterContainer>
    </>
  );
};

export default Footer;
