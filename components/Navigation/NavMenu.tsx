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
      }
    }
  }

  .close-nav-menu {
    height: 40px;
    width: 40px;
    display: block;
    line-height: 35px;
    border-radius: 50%;
    position: absolute;
    border: 1px solid #dddd;
    text-align: center;
    cursor: pointer;
    top: 25px;
    right: 45px;
    color: #fff;
  }
`;

const NavLink = styled(Link)`
  display: inline-block;
  font-size: 4.2rem;
  text-decoration: none;
  color: #fff;
`;

interface NavMenuProps {
  toggleMenu: boolean;
  setToggleMenu: Function;
}

export const NavigationMenu = ({ toggleMenu, setToggleMenu }: NavMenuProps) => {
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
                  <NavLink href="#">
                    <a>About</a>
                  </NavLink>
                </li>
                <li>
                  <NavLink href="#">
                    <a>Blog</a>
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/works">
                    <a>Works</a>
                  </NavLink>
                </li>
                <li>
                  <NavLink href="#">
                    <a>Reach Out</a>
                  </NavLink>
                </li>
              </ul>
            </div>
          </NavMenu>
        </AnimatePresence>
      )}
    </div>
  );
};
