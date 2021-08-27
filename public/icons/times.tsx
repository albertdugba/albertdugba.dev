import { FunctionComponent } from 'react';
import { IconProps } from 'interface';

const Times: FunctionComponent<IconProps> = ({ size, color, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    width={size}
    height={size}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 36 36"
    {...rest}
  >
    <path
      d="M19.41 18l8.29-8.29a1 1 0 0 0-1.41-1.41L18 16.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29l-8.3 8.29A1 1 0 1 0 9.7 27.7l8.3-8.29l8.29 8.29a1 1 0 0 0 1.41-1.41z"
      fill={color}
    />
  </svg>
);

export default Times;
