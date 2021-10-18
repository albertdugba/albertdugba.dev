import { FunctionComponent } from 'react';
import { IconProps } from '@/lib/interface';
import { motion } from 'framer-motion';

const animateDownwards = {
  initial: {},
};

const transition = {
  duration: 2,
  ease: 'easeInOut',
  times: [0, 0.2, 0.5, 0.8, 1],
  loop: Infinity,
  repeatDelay: 1,
};

const Triange: FunctionComponent<IconProps> = ({ size, color, ...rest }) => (
  <motion.svg
    transition={transition}
    initial={{ transform: `translateY(-10%)` }}
    animate={{ transform: [`translateY(5%)`, `translateY(50%)`, `translateY(10%)`] }}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    width={size}
    height={size}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 64 64"
  >
    <path d="M32 62L62 2H2z" fill="currentColor" />
  </motion.svg>
);

export default Triange;
