import styled from 'styled-components';
import { ReactNode } from 'react';

export const Tag = ({ children }: { children: ReactNode }) => {
  return ( 
    <Wrapper>
      <div>
        <span>{children}</span>
      </div>
    </Wrapper>
  );
};

type WordProps = {
  size: string;
};

const Wrapper = styled.div`
  margin: 0 0 20px;
  font-size: 25px;
  display: inline-flex;
  &:last-child {
    margin: 0;
  }
  & > * {
    color: var(--primaryColor);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    text-decoration: none;
    font-size: 0.99rem;
    &::after {
      content: '';
      background: #5b4c68;
      position: absolute;
      left: 12px;
      bottom: -6px;
      width: calc(100% - 8px);
      height: calc(100% - 8px);
      z-index: -1;
      transition: 0.35s cubic-bezier(0.25, 0.1, 0, 2.05);
    }
    &:hover:after {
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 100%;
    }
  }
`;
