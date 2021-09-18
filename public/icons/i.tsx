import { FunctionComponent } from 'react';
import { IconProps } from 'src/lib/interface';

const I: FunctionComponent<IconProps> = ({ size, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 564 330" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <rect x="59" y="79" width="41" height="60" fill="#69186A" />
    <circle cx="79.5" cy="46.5" r="20.5" fill="#6E1F94" />
  </svg>
);

export default I;
