import styled from 'styled-components';

export const Banner = ({ title }) => {
  return (
    <Wrapper>
      <h1 className='title'>{title}</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 10;
  /* background-color: var(--primaryColor); */
  height: 200px;
  width: 100%;

  .title {
    font-size: 3rem;
    color: var(--primaryColor);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
