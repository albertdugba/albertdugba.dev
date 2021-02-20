import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Twitter from '../../../../styles/Icons/twitter';
import Dev from '../../../../styles/Icons/dev';
import Medium from '../../../../styles/Icons/medium';
import LinkedIn from '../../../../styles/Icons/linkedin';

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

const SideNav = ({ toggleOpen }) => {
  const closeMenuLinks = () => toggleOpen();
  return (
    <SideNavLink variants={variants}>
      <motion.li variants={variant} onClick={closeMenuLinks}>
        <Link href="/#about">
          <a>About</a>
        </Link>
      </motion.li>
      <motion.li variants={variant} onClick={closeMenuLinks}>
        <Link href="/#blog">
          <a>Blog</a>
        </Link>
      </motion.li>
      <motion.li variants={variant} onClick={closeMenuLinks}>
        <Link href="/#works">
          <a>Works</a>
        </Link>
      </motion.li>
      <motion.li variants={variant} onClick={closeMenuLinks}>
        <Link href="/#contact">
          <a>Contact</a>
        </Link>
      </motion.li>

      <motion.li>
        <Link href="https://twitter.com/Albert_Dugba">
          <a>
            <Twitter width="1rem" height="1rem" />
          </a>
        </Link>
        <Link href="https://twitter.com/Albert_Dugba">
          <a>
            <Dev width="1rem" height="1rem" />
          </a>
        </Link>
        <Link href="https://twitter.com/Albert_Dugba">
          <a>
            <Medium width="1rem" height="1rem" />
          </a>
        </Link>
        <Link href="https://twitter.com/Albert_Dugba">
          <a>
            <LinkedIn width="1rem" height="1rem" />
          </a>
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
  z-index: 12;

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
