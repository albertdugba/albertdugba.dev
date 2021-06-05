import styled from 'styled-components';
import * as React from 'react';

interface Props {
  children: React.ReactNode;
  title: string;
}

export const ResumeOverlay = ({ children, title }: Props) => {
  return (
    <Wrapper>
      <h3>{title}</h3>
      <Content>{children}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 15%;
  left: 3%;
  right: 3%;
  min-height: 20%;
  background: white;
  border-radius: 4px;
  padding: 1rem;
  z-index: 100;
`;

const Content = styled.div`
  width: 100%;
  overflow-y: scroll;
  overflow-x: scroll;
`;
