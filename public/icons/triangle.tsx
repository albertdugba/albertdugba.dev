import { IconProps } from '../../../src/components/types/types';
import { FunctionComponent } from 'react';

const Triange: FunctionComponent<IconProps> = ({ size, color, ...rest }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 564 330'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...rest}
  >
    <path d='M178 106L283.655 265.75H72.3449L178 106Z' fill='#421A75' />
  </svg>
);

export default Triange;
