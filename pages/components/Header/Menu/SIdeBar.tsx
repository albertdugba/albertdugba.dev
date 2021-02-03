import styled from 'styled-components';
import { motion } from 'framer-motion';
import SideNav from '../SideNav/SideNav';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 10px 10px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(0px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const Aside = styled(motion.aside)`
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  right: 100px;
  width: 240px;
  background: var(--primaryColor);
  @media (min-width: 600px) {
    display: none;
  }
`;

const SideBar = ({ isOpen, toggleOpen }) => {
  return (
    <Aside
      variants={sidebar}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}>
      <SideNav toggleOpen={toggleOpen} />
    </Aside>
  );
};

export default SideBar;
