import Dev from 'styles/Icons/dev';
import Github from 'styles/Icons/github';
import Instagram from 'styles/Icons/instagram';
import LinkedIn from 'styles/Icons/linkedin';
import Twitter from 'styles/Icons/twitter';
import { FooterContainer, Social, FooterSocialContainer } from './style';

const Footer = () => {
  return (
    <div style={{ background: '#000', height: '50vh', color: 'white' }}>
      <FooterContainer>
        <div className="container">
          <div>
            <h2>Say Hello</h2>
            <span>albert.dugba@gmail.com</span>
          </div>

          <hr />

          <FooterSocialContainer>
            <span>&copy; {new Date().getFullYear()} Albert Dugba</span>
            <Social>
              <Github width={20} height={20} color="purple" />
              <Twitter width={20} height={20} color="purple" />
              <LinkedIn size={20} color="purple" />
              <Dev size={20} color="purple" />
              <Instagram size={20} color="purple" />
            </Social>
          </FooterSocialContainer>
        </div>
      </FooterContainer>
    </div>
  );
};

export default Footer;
