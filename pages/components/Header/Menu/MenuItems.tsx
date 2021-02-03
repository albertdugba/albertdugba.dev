import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MenuItem from './MenuItem';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation: FunctionComponent = () => {
  return (
    <MenuContainer variants={variants}>
      <MenuItem />
    </MenuContainer>
  );
};

// styles
const MenuContainer = styled(motion.ul)`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    display: none;
  }
`;

export default Navigation;
