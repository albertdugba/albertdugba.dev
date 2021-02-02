import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';

const NavItem = styled(motion.li)`
  list-style: none;
`;

const NavLink = styled.a`
  margin-left: 20px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease-out;
  color: inherit;

  &:hover {
    border-bottom: 1px solid var(--primaryColor);
  }
`;

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MenuItem: FunctionComponent = () => {
  return (
    <>
      <NavItem variants={variants}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/#about">
          <a>About</a>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/#works">
          <a>Works</a>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/#blog">
          <a>Blog</a>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/#contact">
          <a>Contact</a>
        </Link>
      </NavItem>
    </>
  );
};

export default MenuItem;
