import { SocialLinks } from 'components/containers/Social';
import Link from 'next/link';
import styled from 'styled-components';
import Dev from 'styles/Icons/dev';
import Github from 'styles/Icons/github';
import LinkedIn from 'styles/Icons/linkedin';
import Twitter from 'styles/Icons/twitter';
import { motion } from 'framer-motion';

export const NavOverlay = ({ setToggleMenu, toggleMenu }) => {
  const handleClose = () => setToggleMenu(false);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container">
        {toggleMenu && (
          <Overlay>
            <ul>
              <li onClick={handleClose}>
                <Link href="/works">
                  <a>Works</a>
                </Link>
              </li>
              <li onClick={handleClose}>
                <Link href="/posts">
                  <a>Blog</a>
                </Link>
              </li>
              <li onClick={handleClose}>
                <Link href="/resume">
                  <a>Rèsume</a>
                </Link>
              </li>

              <SocialContainer>
                <SocialLinks
                  link="https://github.com/albertdugba"
                  component={<Github width={30} height={30} color="#fff" />}
                />

                <SocialLinks
                  link="https://twitter.com/Albert_Dugba"
                  component={<Twitter width={30} height={30} color="#fff" />}
                />

                <SocialLinks
                  link="https://www.linkedin.com/in/albert-dugba-723a3489/"
                  component={<LinkedIn size={30} color="#EBE6F3" />}
                />

                <SocialLinks
                  link="https://dev.to/albertdugba"
                  component={<Dev size={30} color="#EBE6F3" />}
                />
              </SocialContainer>
              <CloseButton onClick={() => setToggleMenu(false)}>
                <svg
                  width="49"
                  height="49"
                  viewBox="0 0 69 68"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0)">
                    <line
                      x1="1.46712"
                      y1="-1.35925"
                      x2="64.4671"
                      y2="66.6408"
                      stroke="var(--secondaryColor)"
                      strokeWidth="4"
                    />
                    <line
                      x1="70.4039"
                      y1="1.4245"
                      x2="1.40385"
                      y2="69.4245"
                      stroke="var(--secondaryColor)"
                      strokeWidth="4"
                    />
                  </g>
                </svg>
              </CloseButton>
            </ul>
          </Overlay>
        )}
      </motion.div>
    </>
  );
};

/**
 * @styles
 */

const Overlay = styled(motion.div)`
  background-color: #0e0613;
  color: #fff;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  ul {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    text-align: left;
    /* height: 100vh; */

    li {
      padding-top: 50px;
      list-style: none;

      a {
        display: block;
        text-decoration: none;
        font-size: 4rem;
        color: #fff;
        padding-top: 0.75rem;
      }
    }
  }
`;

const CloseButton = styled.button`
  border: none;
  outline: none;
  background: none;
  height: 110px;
  width: 110px;
  border-radius: 50%;
  position: absolute;
  top: 0%;
  right: 2%;
`;

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-top: 1px solid var(--secondaryColor);
  margin: 50px auto;

  svg {
    margin: 20px auto;
    margin-right: 2rem;
    margin-left: 2rem;
    cursor: pointer;
  }
`;
