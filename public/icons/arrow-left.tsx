import { FunctionComponent } from 'react';
import { IconProps } from '@/lib/interface';

const ArrowLeft: FunctionComponent<IconProps> = ({ size, color, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    width={size}
    height={size}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  >
    <g fill="none">
      <path
        d="M1.027 11.993l4.235 4.25L6.68 14.83l-1.821-1.828l18.115-.002v-2l-18.12.002L6.69 9.174L5.277 7.757l-4.25 4.236z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default ArrowLeft;
