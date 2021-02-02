import React from 'react';

interface IconProps {
  width: number;
  height: number;
}

export const MenuIcon = ({ width, height, ...props }) => (
  <svg fill="red" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path
      color="teal"
      width={width}
      height={height}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);
