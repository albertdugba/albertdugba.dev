import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import { IconProps } from '../../src/lib/interface';

const ChevronDown: FunctionComponent<IconProps> = ({ size, color }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    initial={{ width: size, opacity: 0 }}
    animate={{ width: size, opacity: 1 }}
    width={size}
    height={size}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  >
    <path d="M16.293 9.293L12 13.586L7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" fill={color} />
  </motion.svg>
);

export default ChevronDown;
