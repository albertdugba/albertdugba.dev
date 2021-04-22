import Link from 'next/link';
import { useState, FunctionComponent, Dispatch } from 'react';
import styled from 'styled-components';
import Moon from '../../styles/Icons/Moon';
import { NavOverlay } from './NavMenu';

type ToggleMenu = {
  toggleMenu: boolean;
};

export const Header: FunctionComponent = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div>
        <Container className="container">
          <div>
            <h3>
              <Link href="/">
                <a>Albert Dugba</a>
              </Link>{' '}
            </h3>
          </div>

          <nav className="nav__container">
            <ul>
              <li>
                <Link href="#">
                  <a>
                    <Moon height={35} width={35} color="blue" />
                  </a>
                </Link>
              </li>

              <li
                onClick={() => setToggleMenu(true)}
                className="hamburger__menu">
                <div>
                  <svg
                    width="62"
                    height="62"
                    viewBox="0 0 62 62"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <line
                      y1="9"
                      x2="48"
                      y2="9"
                      stroke="var(--primaryColor)"
                      strokeWidth="4"
                    />
                    <line
                      y1="21"
                      x2="28"
                      y2="21"
                      stroke="var(--primaryColor)"
                      strokeWidth="4"
                    />
                  </svg>
                </div>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
      <NavOverlay toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
    </>
  );
};

/**
 * @styles
 */

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  h3 a {
    text-decoration: none;
    color: inherit;
  }

  .nav__container {
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .hamburger__menu {
        margin-left: 1.5rem;
        display: flex;
        flex-direction: column;
        height: 20px;
        width: 20px;
        cursor: pointer;
      }

      li {
        list-style: none;
        margin-right: 1rem;

        a {
          display: block;
          height: 100%;
          text-decoration: none;
          color: inherit;
        }
      }
    }
  }
`;
