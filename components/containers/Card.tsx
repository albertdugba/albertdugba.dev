import { FunctionComponent } from 'react';
import styled from 'styled-components';

type CardProps = {
  logo: string;
  title: string;
};

export const ProjectCard: FunctionComponent<CardProps> = ({ logo, title }) => {
  return (
    <Wrapper>
      <img src={logo} title={title} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 220px;
  height: 300px;
  background: #efddf5;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;
  margin-right: 0.5rem;

  img {
    width: 100%;
    height: auto;
    max-width: 200px;
  }
`;
