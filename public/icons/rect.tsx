import { FunctionComponent } from 'react';
import { IconProps } from 'types/types';

const Rect: FunctionComponent<IconProps> = ({ size, color, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 564 330" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <rect x="87" y="60" width="76" height="258" fill={color} />
  </svg>
);

export default Rect;
