import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { ILinkProps } from '../../../lib/interface';


export const NavLink: FunctionComponent<ILinkProps> = ({ href, children }) => {
  return (
    <Link href={href}>
      <LinkWrapper linkColor="landing">{children}</LinkWrapper>
    </Link>
  );
};

interface ILink {
  linkColor: 'landing' | 'pageLink';
}

const LinkWrapper = styled.a<ILink>`
  position: relative;
  cursor: pointer;
  color: ${(props) => props.linkColor};

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
