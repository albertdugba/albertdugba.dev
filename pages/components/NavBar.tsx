import { FunctionComponent } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Container, InnerContainer } from './lib/Container';

const NavBar: FunctionComponent = () => {
  return (
    <InnerContainer>
      <Container>
        <Nav>
          <h1>a.d</h1>
          <NavItems>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </NavItems>
        </Nav>
      </Container>
    </InnerContainer>
  );
};

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-weight: bolder;
    color: #fff;
  }
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  li {
    margin-left: 15px;

    a {
      font-weight: bold;
      color: #fff;
    }
  }
`;

export default NavBar;
