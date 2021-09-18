import { FunctionComponent } from 'react';
import { IconProps } from '../../src/lib/interface';

const Menu: FunctionComponent<IconProps> = ({ size, color, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    width={size}
    height={size}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
    {...rest}
  >
    <path d="M21 16H3v-2h18v2zm0-6H3V8h18v2z" fill={color} />
  </svg>
);

export default Menu;
