import { FunctionComponent } from 'react';
import { IconProps } from 'types';

const GridLines: FunctionComponent<IconProps> = ({ size, color, ...rest }) => (
  <svg width={size} height={size} viewBox='0 0 404 311' fill='none' {...rest}>
    <path
      d='M217.037 199.732H216.105L219.668 190.469H220.594L217.037 199.732ZM227.379 197.506L228.598 192.66H229.682L227.836 199H226.957L225.416 194.195L223.916 199H223.037L221.197 192.66H222.275L223.523 197.406L225 192.66H225.873L227.379 197.506ZM230.502 195.771C230.502 195.15 230.623 194.592 230.865 194.096C231.111 193.6 231.451 193.217 231.885 192.947C232.322 192.678 232.82 192.543 233.379 192.543C234.242 192.543 234.939 192.842 235.471 193.439C236.006 194.037 236.273 194.832 236.273 195.824V195.9C236.273 196.518 236.154 197.072 235.916 197.564C235.682 198.053 235.344 198.434 234.902 198.707C234.465 198.98 233.961 199.117 233.391 199.117C232.531 199.117 231.834 198.818 231.299 198.221C230.768 197.623 230.502 196.832 230.502 195.848V195.771ZM231.592 195.9C231.592 196.604 231.754 197.168 232.078 197.594C232.406 198.02 232.844 198.232 233.391 198.232C233.941 198.232 234.379 198.018 234.703 197.588C235.027 197.154 235.189 196.549 235.189 195.771C235.189 195.076 235.023 194.514 234.691 194.084C234.363 193.65 233.926 193.434 233.379 193.434C232.844 193.434 232.412 193.646 232.084 194.072C231.756 194.498 231.592 195.107 231.592 195.9ZM240.697 193.633C240.533 193.605 240.355 193.592 240.164 193.592C239.453 193.592 238.971 193.895 238.717 194.5V199H237.633V192.66H238.688L238.705 193.393C239.061 192.826 239.564 192.543 240.217 192.543C240.428 192.543 240.588 192.57 240.697 192.625V193.633ZM243.469 196.064L242.789 196.773V199H241.705V190H242.789V195.443L243.369 194.746L245.344 192.66H246.662L244.195 195.309L246.949 199H245.678L243.469 196.064ZM251.473 197.318C251.473 197.025 251.361 196.799 251.139 196.639C250.92 196.475 250.535 196.334 249.984 196.217C249.438 196.1 249.002 195.959 248.678 195.795C248.357 195.631 248.119 195.436 247.963 195.209C247.811 194.982 247.734 194.713 247.734 194.4C247.734 193.881 247.953 193.441 248.391 193.082C248.832 192.723 249.395 192.543 250.078 192.543C250.797 192.543 251.379 192.729 251.824 193.1C252.273 193.471 252.498 193.945 252.498 194.523H251.408C251.408 194.227 251.281 193.971 251.027 193.756C250.777 193.541 250.461 193.434 250.078 193.434C249.684 193.434 249.375 193.52 249.152 193.691C248.93 193.863 248.818 194.088 248.818 194.365C248.818 194.627 248.922 194.824 249.129 194.957C249.336 195.09 249.709 195.217 250.248 195.338C250.791 195.459 251.23 195.604 251.566 195.771C251.902 195.939 252.15 196.143 252.311 196.381C252.475 196.615 252.557 196.902 252.557 197.242C252.557 197.809 252.33 198.264 251.877 198.607C251.424 198.947 250.836 199.117 250.113 199.117C249.605 199.117 249.156 199.027 248.766 198.848C248.375 198.668 248.068 198.418 247.846 198.098C247.627 197.773 247.518 197.424 247.518 197.049H248.602C248.621 197.412 248.766 197.701 249.035 197.916C249.309 198.127 249.668 198.232 250.113 198.232C250.523 198.232 250.852 198.15 251.098 197.986C251.348 197.818 251.473 197.596 251.473 197.318Z'
      fill='#fff'
    />
    <line
      x1={157}
      y1={162}
      x2={157}
      y2={273}
      stroke='#A89DE8'
      strokeWidth={2}
    />
    <line
      x1={199}
      y1={162}
      x2={199}
      y2={272}
      stroke='#A89DE8'
      strokeWidth={2}
    />
    <line
      x1={127}
      y1={210}
      x2={276}
      y2={210}
      stroke='#A89DE8'
      strokeWidth={2}
    />
    <line
      x1={141}
      y1={218}
      x2={254}
      y2={218}
      stroke='#A89DE8'
      strokeWidth={2}
    />
    <path d='M141 235H254' stroke='#A89DE8' strokeWidth={2} />
    <path d='M127 247H276' stroke='#A89DE8' strokeWidth={2} />
    <path d='M166 162L166 273' stroke='#A89DE8' strokeWidth={2} />
  </svg>
);

export default GridLines;
