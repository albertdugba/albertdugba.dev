import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { ILinkProps } from 'types';

export const NavLink: FunctionComponent<ILinkProps> = ({ href, children }) => {
  return (
    <Link href={href}>
      <LinkWrapper>{children}</LinkWrapper>
    </Link>
  );
};

const LinkWrapper = styled.a`
  position: relative;
  cursor: pointer;
  color: var(--purple100);

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    margin: -1px 0;
    background-color: #926e92;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.4s ease-in-out 0s;
  }
  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;
