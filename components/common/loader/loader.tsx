import styled, { keyframes } from 'styled-components';

export const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderInner>
        <img src="/albertdugba.jpg" width={40} height={40} />
      </LoaderInner>
      <h2>loading...</h2>
    </LoaderContainer>
  );
};

const pulse = keyframes`
 to {
    opacity: 0;
    transform: scale(1);
  }
`;

const LoaderContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: var(--black300);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    color: var(--secondaryColor);
    margin-top: 2rem;
  }
`;

const LoaderInner = styled.div`
  height: 200px;
  position: relative;
  width: 200px;
  display: flex;
  align-items: center;

  img {
    border-radius: 50%;
    height: 100%;
    position: relative;
    width: 100%;
    z-index: 2;

    &:before {
      position: absolute;
      height: 100%;
      width: 100%;
    }
  }

  &::before,
  &:after {
    animation: ${pulse} 2s linear infinite;
    border: #fff solid 8px;
    border-radius: 50%;
    box-sizing: border-box;
    content: ' ';
    height: 140%;
    left: -20%;
    opacity: 0.6;
    position: absolute;
    top: -20%;
    transform: scale(0.714);
    width: 140%;
    z-index: 1;
  }

  &:after {
    animation-delay: 1s;
  }
`;
