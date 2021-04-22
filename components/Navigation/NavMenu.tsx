import Link from 'next/link';
import styled from 'styled-components';

export const NavOverlay = ({ setToggleMenu, toggleMenu }) => {
  return (
    <>
      <div className="container">
        <Overlay>
          <ul>
            <li>
              <Link href="/works">Works</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/resume">Rèsume</Link>
            </li>
          </ul>
        </Overlay>
      </div>
    </>
  );
};

/**
 * @styles
 */

const Overlay = styled.div`
  background-color: violet;
  opacity: 1;
  color: #fff;
  position: fixed;
  z-index: 100;
  top: 0%;
  left: 0;
  width: 100%;
  height: 100vh;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    li {
      list-style: none;

      a {
        display: block;
        text-decoration: none;
        font-size: 5.5rem;
      }
    }
  }
`;
