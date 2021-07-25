import { IconProps } from 'types/types';
import { FunctionComponent } from 'react';

const Fing: FunctionComponent<IconProps> = ({ size, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 564 330" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <rect x="87" y="60" width="76" height="258" fill="#2B0A4B" />
    <circle cx="125" cy="60" r="38" fill="#2B0A4B" />
  </svg>
);

export default Fing;
