import Link from 'next/link';
import styled from 'styled-components';
import Moon from '../../styles/Icons/Moon';

const Container = styled.header`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;

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
          width: 32px;
          background: #0d0d7e;
          margin-top: 5px;
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

interface HeaderProps {
  setToggleMenu: Function;
}

export const Header = ({ setToggleMenu }: HeaderProps) => {
  return (
    <>
      <div>
        <Container className="container">
          <div>
            <h3>&lt; AD / &gt;</h3>
          </div>

          <nav className="nav__container">
            <ul>
              <li>
                <Link href="#">
                  <a>
                    <Moon height={25} width={25} color="blue" />
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
