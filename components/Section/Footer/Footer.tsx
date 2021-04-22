import { SocialLinks } from 'components/containers/Social';
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
        minHeight: '10vh',
        color: 'white',
      }}>
      <FooterContainer>
        <div className="container">
          <div className="footer__inner">
            <ul className="footer__inner--links">
              <li>Say Hello</li>
              <li>
                <a href="mailto:albert.dugba@gmail.com">
                  albert.dugba@gmail.com
                </a>
              </li>
            </ul>

            <ul className="footer__inner--links">
              <li>
                <Link href="/works">
                  <a>Works</a>
                </Link>
              </li>
              <li>
                <Link href="/posts">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/resume">
                  <a>Resumè</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="divider" />

          <FooterSocialContainer className="pd-1" style={{ padding: '1rem' }}>
            <h3>
              &copy; {new Date().getFullYear()} Albert Dugba - (version 1.0)
            </h3>
            <Social>
              <SocialLinks
                link="https://github.com/albertdugba"
                component={<Github width={20} height={20} color="#fff" />}
              />

              <SocialLinks
                link="https://twitter.com/Albert_Dugba"
                component={<Twitter width={20} height={20} color="#fff" />}
              />

              <SocialLinks
                link="https://www.linkedin.com/in/albert-dugba-723a3489/"
                component={<LinkedIn size={20} color="#EBE6F3" />}
              />

              <SocialLinks
                link="https://dev.to/albertdugba"
                component={<Dev size={20} color="#EBE6F3" />}
              />
            </Social>
          </FooterSocialContainer>
        </div>
      </FooterContainer>
    </div>
  );
};

export default Footer;
