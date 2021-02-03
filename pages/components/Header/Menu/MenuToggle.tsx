import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Button = styled.button`
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const Path = props => {
  return (
    <motion.path
      color="var(--primaryColor)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16m-7 6h7"
      {...props}
    />
  );
};

const MenuToggle = ({ toggle }) => {
  return (
    <Button onClick={toggle}>
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <Path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16m-7 6h7"
        />
        <Path
          color="teal"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </Button>
  );
};

export default MenuToggle;
