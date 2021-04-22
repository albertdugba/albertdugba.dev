import Link from 'next/link';
import styled from 'styled-components';

export const NavOverlay = ({ setToggleMenu, toggleMenu }) => {
  return (
    <>
      <div className="container">
        {toggleMenu && (
          <Overlay>
            <ul onClick={() => setToggleMenu(false)}>
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
                  <a>Rèsume</a>
                </Link>
              </li>
              <CloseButton onClick={() => setToggleMenu(false)}>
                <svg
                  width="69"
                  height="68"
                  viewBox="0 0 69 68"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0)">
                    <line
                      x1="1.46712"
                      y1="-1.35925"
                      x2="64.4671"
                      y2="66.6408"
                      stroke="var(--secondaryColor)"
                      stroke-width="4"
                    />
                    <line
                      x1="70.4039"
                      y1="1.4245"
                      x2="1.40385"
                      y2="69.4245"
                      stroke="var(--secondaryColor)"
                      stroke-width="4"
                    />
                  </g>
                </svg>
              </CloseButton>
            </ul>
          </Overlay>
        )}
      </div>
    </>
  );
};

/**
 * @styles
 */

const Overlay = styled.div`
  background-color: #0e0613;
  color: #fff;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  ul {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    li {
      list-style: none;

      a {
        display: block;
        text-decoration: none;
        font-size: 5rem;
        color: #fff;
        padding: 0.75rem;
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
  top: 5%;
  right: 5%;
`;
