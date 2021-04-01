import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';

/**
  @styles
 */
const NavMenu = styled(motion.nav)`
  position: fixed;
  background-color: #0a0a3d;
  padding: 0 15px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  .nav-menu-inner {
    min-height: 100vh;
    ul {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      li {
        display: block;
        margin-bottom: 20px;
        &::last-child {
          margin-bottom: 0;
        }
        a {
          display: inline-block;
          font-size: 3.5rem;
          text-decoration: none;
          color: #fff;
        }
      }
    }
  }
`;

interface NavMenuProps {
  toggleMenu: boolean;
  setToggleMenu: Function;
}

export const NavigationMenu = ({ toggleMenu, setToggleMenu }) => {
  return (
    <div className="container">
      {toggleMenu && (
        <AnimatePresence>
          <NavMenu
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: 0 }}
            transition={{ damping: 19, type: 'spring' }}>
            <div
              role="button"
              onClick={() => setToggleMenu(false)}
              className="close-nav-menu">
              X
            </div>
            <div className="nav-menu-inner">
              <ul>
                <li>
                  <Link href="#">
                    <a>About</a>
                  </Link>
                </li>
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
                    <a>Reach Out</a>
                  </Link>
                </li>
              </ul>
            </div>
          </NavMenu>
        </AnimatePresence>
      )}
    </div>
  );
};
