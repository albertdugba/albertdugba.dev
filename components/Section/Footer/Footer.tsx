import Link from 'next/link';
import Dev from 'styles/Icons/dev';
import Github from 'styles/Icons/github';
import Instagram from 'styles/Icons/instagram';
import LinkedIn from 'styles/Icons/linkedin';
import Twitter from 'styles/Icons/twitter';
import { FooterContainer, Social, FooterSocialContainer } from './style';

const Footer = () => {
  return (
    <div
      style={{
        background: 'var(--sectionBgColor)',
        height: '50vh',
        color: 'white',
      }}>
      <FooterContainer>
        <div className="container">
          <div className="footer__inner">
            <ul className="footer__inner--links">
              <li>Say Hello</li>
              <li>
                <a href="mailto:m.bluth@example.com">albert.dugba@gmail.com</a>
              </li>
            </ul>

            <ul className="footer__inner--links">
              <li>
                <Link href="/works">
                  <a>Works</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="resume">
                  <a>Resumè</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="divider container"></div>

          <FooterSocialContainer className="container">
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
