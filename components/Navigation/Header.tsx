import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;

  .nav__container {
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &::nth-child(3) {
      }

      .hamburger__menu {
        margin-left: 1.5rem;
        display: flex;
        flex-direction: column;
        height: 20px;
        width: 20px;

        span {
          height: 2px;
          width: 32px;
          background: purple;
          margin-top: 5px;
        }

        .last-child {
          width: 25px;
        }
      }

      li {
        list-style: none;

        a {
          display: block;
          margin-right: 2rem;
          height: 100%;
          text-decoration: none;
        }
      }
    }
  }
`;

export const Header = () => {
  return (
    <>
      <div>
        <Container className="container">
          <div className="logo">
            <Link href="#">AD.</Link>
          </div>

          <nav className="nav__container">
            <ul>
              <li>
                <Link href="#">Home</Link>
              </li>

              <li className="hamburger__menu">
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
