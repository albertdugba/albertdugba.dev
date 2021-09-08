import { FunctionComponent } from 'react';
import { IconProps } from 'src/lib/interface';

const World: FunctionComponent<IconProps> = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    width={size}
    height={size}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 36 36"
  >
    <path
      d="M26.54 18a19.38 19.38 0 0 0-.43-4h3.6a12.3 12.3 0 0 0-.67-1.6h-3.35a19.72 19.72 0 0 0-2.89-5.87a12.3 12.3 0 0 0-2.55-.76a17.83 17.83 0 0 1 3.89 6.59h-5.39V5.6h-1.5v6.77h-5.39a17.83 17.83 0 0 1 3.9-6.6a12.28 12.28 0 0 0-2.54.75a19.72 19.72 0 0 0-2.91 5.85H6.94A12.3 12.3 0 0 0 6.26 14h3.63a19.38 19.38 0 0 0-.43 4a19.67 19.67 0 0 0 .5 4.37H6.42A12.34 12.34 0 0 0 7.16 24h3.23a19.32 19.32 0 0 0 2.69 5.36a12.28 12.28 0 0 0 2.61.79A17.91 17.91 0 0 1 12 24h5.26v6.34h1.5V24H24a17.9 17.9 0 0 1-3.7 6.15a12.28 12.28 0 0 0 2.62-.81A19.32 19.32 0 0 0 25.61 24h3.2a12.34 12.34 0 0 0 .74-1.6H26a19.67 19.67 0 0 0 .54-4.4zm-9.29 4.37h-5.74a17.69 17.69 0 0 1-.09-8.4h5.83zm7.24 0h-5.74V14h5.83a18.21 18.21 0 0 1 .42 4a18.12 18.12 0 0 1-.51 4.37z"
      fill="currentColor"
    />
    <path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2zm0 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14z" fill="currentColor" />
  </svg>
);

export default World;