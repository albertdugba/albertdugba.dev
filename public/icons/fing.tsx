import { FunctionComponent } from 'react';
import { IconProps } from '@/lib/interface';

const Fing: FunctionComponent<IconProps> = ({ size, color, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 564 330" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <rect x="87" y="60" width="76" height="258" fill={color} />
    <circle cx="125" cy="60" r="38" fill={color} />
  </svg>
);

export default Fing;
