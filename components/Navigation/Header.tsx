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

      li {
        list-style: none;

        a {
          display: block;
          margin-left: 1.2rem;
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
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Works</Link>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
    </>
  );
};
