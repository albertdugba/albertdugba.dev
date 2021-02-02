import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variant = {
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

const SideNav = () => {
  return (
    <SideNavLink variants={variants}>
      <motion.li variants={variant}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </motion.li>
      <motion.li variants={variant}>
        <Link href="/#about">
          <a>About</a>
        </Link>
      </motion.li>
      <motion.li variants={variant}>
        <Link href="/#blog">
          <a>Blog</a>
        </Link>
      </motion.li>
      <motion.li variants={variant}>
        <Link href="/#works">
          <a>Works</a>
        </Link>
      </motion.li>
      <motion.li variants={variant}>
        <Link href="/#contact">
          <a>Contact</a>
        </Link>
      </motion.li>
    </SideNavLink>
  );
};

const SideNavLink = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  padding: 20px 28px;
  justify-content: center;
  height: 70vh;

  li {
    padding-top: 20px;
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;
    transition: all 0.3s ease-out;
    &:hover {
      border-bottom: 1px solid white;
    }
  }
`;

export default SideNav;
