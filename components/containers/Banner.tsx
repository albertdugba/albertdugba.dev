import styled from 'styled-components';
import { FunctionComponent } from 'react';

type Props = {
  title: string;
  subTitle?: string;
};

export const Banner: FunctionComponent<Props> = ({ title, subTitle }) => {
  return (
    <Wrapper>
      <h1 className='title'>{title}</h1>
      <span>{subTitle}</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 10;
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    margin-top: -10px;
  }

  .title {
    font-size: 3rem;
    color: var(--primaryColor);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
