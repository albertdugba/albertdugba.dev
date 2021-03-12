import Link from 'next/link';
import styled from 'styled-components';

const NavMenu = styled.nav`
  position: fixed;
  background-color: red;
  padding: 0 15px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  visibility: hidden;

  .nav-menu-inner {
    min-height: 100vh;

    ul {
      padding: 1rem;

      li {
        display: block;
        margin-bottom: 20px;

        &::last-child {
          margin-bottom: 0;
        }

        a {
          display: inline-block;
          font-size: 2.5rem;
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
    top: 15px;
    right: 15px;
  }
`;

export const NavigationMenu = () => {
  return (
    <>
      <NavMenu>
        <div className="close-nav-menu">&times;</div>
        <div className="nav-menu-inner">
          <ul>
            <li>
              <Link href="#">
                <a>Home</a>
              </Link>
            </li>
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
              <Link href="#">
                <a>Works</a>
              </Link>
            </li>
          </ul>
        </div>
      </NavMenu>
    </>
  );
};
