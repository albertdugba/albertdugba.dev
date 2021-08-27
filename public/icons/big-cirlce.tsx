import { FunctionComponent } from 'react';
import { IconProps } from 'interface';

const BigCirle: FunctionComponent<IconProps> = ({ size, color, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 121 119" fill="none" {...rest}>
    <ellipse cx={60.5} cy={59.5} rx={60.5} ry={59.5} fill={color} />
  </svg>
);

export default BigCirle;




