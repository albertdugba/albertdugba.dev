import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';

/**
  @styles
 */

const NavOverlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  background: red;
  overflow-x: hidden;
  transition: 0.5s;

  ul {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;

    li a {
      font-size: 3rem;
      color: #fff;
      text-decoration: none;
    }
  }

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

interface NavMenuProps {
  toggleMenu: boolean;
  setToggleMenu: Function;
}

export const NavigationMenu = ({ toggleMenu, setToggleMenu }: NavMenuProps) => {
  return (
    <div style={{ background: 'red' }}>
      {toggleMenu && (
        <AnimatePresence>
          <NavOverlay>
            <div className="container flex">
              <h1>Albert Dugba</h1>

              <div
                role="button"
                onClick={() => setToggleMenu(false)}
                className="close-nav-menu">
                X
              </div>
            </div>

            <ul>
              <li>
                <Link href="#">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/works">
                  <a>Works</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Resumè</a>
                </Link>
              </li>
            </ul>
          </NavOverlay>
        </AnimatePresence>
      )}
    </div>
  );
};
