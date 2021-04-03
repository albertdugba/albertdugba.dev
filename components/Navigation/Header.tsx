import Link from 'next/link';
import styled from 'styled-components';
import Moon from '../../styles/Icons/Moon';

const Container = styled.header`
  display: flex;
  /* padding-top: 20px; */
  justify-content: space-between;
  align-items: center;
  /* position: fixed;
  right: 0;
  left: 0;
  z-index: 1; */

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

        span {
          height: 2px;
          width: 40px;
          background: #0d0d7e;
          margin-top: 8px;
        }

        .last-child {
          width: 25px;
        }
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

export const Header = ({ setToggleMenu }) => {
  return (
    <>
      <div>
        <Container className="container">
          <div>
            <h3>Albert Dugba </h3>
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
                className="hamburger__menu"
                role="button"
                onClick={() => setToggleMenu(prevState => !prevState)}>
                <span />
                <span className="last-child" />
              </li>
            </ul>
          </nav>
        </Container>
      </div>
    </>
  );
};
