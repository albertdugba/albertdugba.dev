import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import { IconProps } from 'interface';

const Contact: FunctionComponent<IconProps> = ({ size, color }) => (
  <motion.svg
    initial={{ width: size, opacity: 0 }}
    animate={{ width: size, opacity: 1 }}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    width={size}
    height={size}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 16 16"
  >
    <g fill={color}>
      <path d="M14 0a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
    </g>
  </motion.svg>
);

export default Contact;
