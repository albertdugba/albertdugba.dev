import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const NavMenu = styled(motion.nav)`
  position: fixed;
  background-color: #0a0a3d;
  padding: 0 15px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  overflow: hidden;

  .nav-menu-inner {
    /* min-height: 100vh; */

    ul {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (max-width: 801px) {
        align-items: flex-start;
      }

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
    right: 27px;
    color: #fff;
  }
`;

const NavLink = styled.a`
  display: inline-block;
  font-size: 4.2rem;
  text-decoration: none;
  color: #fff;
  text-align: left;

  @media (max-width: 801px) {
    font-size: 3.5rem;
  }
`;

interface NavMenuProps {
  toggleMenu: boolean;
  setToggleMenu: Function;
}

const variants = {
  open: { y: 0 },
  closed: { y: '-100%' },
};

export const NavigationMenu = ({ toggleMenu, setToggleMenu }: NavMenuProps) => {
  return (
    <>
      <>
        {toggleMenu && (
          <NavMenu
            variants={variants}
            initial="closed"
            animate={toggleMenu ? 'open' : 'closed'}
            transition={{ damping: 19, type: 'spring' }}>
            <div className="nav--menu__secondar">
              <div
                role="button"
                onClick={() => setToggleMenu(false)}
                className="close-nav-menu">
                X
              </div>

              <div className="nav-menu-inner">
                <ul onClick={() => setToggleMenu(false)}>
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
                    <NavLink href="#">
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
            </div>
          </NavMenu>
        )}
      </>
    </>
  );
};
