import { IconProps } from 'types';
import { FunctionComponent } from 'react';

const CircleOutline: FunctionComponent<IconProps> = ({ size, color, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 121 119" fill="none" {...rest}>
    <path
      d="M120 59.5C120 91.793 93.3767 118 60.5 118C27.6233 118 1 91.793 1 59.5C1 27.207 27.6233 1 60.5 1C93.3767 1 120 27.207 120 59.5Z"
      fill="none"
      stroke={color}
      strokeWidth={2}
    />
  </svg>
);

export default CircleOutline;
