import styled from 'styled-components';

const SliderContainer = styled.div`
  height: var(--slide-size);
  margin: 0 auto;
  position: relative;
  width: var(--slide-size);
`;

const SliderWrapper = styled.ul`
  display: flex;
  position: absolute;
  margin: 0 calc(var(--slide-margin) * -1);
  transition: transform var(--base-duration) cubic-bezier(0.25, 1, 0.35, 1);

  @media (max-width: 801px) {
    margin-top: 50px;
  }
`;

const SliderControls = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: calc(100% + 1rem);
  width: 100%;

  .btn {
    --size: 3rem;

    align-items: center;
    background-color: transparent;
    border: 3px solid transparent;
    border-radius: 100%;
    display: flex;
    height: var(--size);
    padding: 0;
    width: var(--size);

    &:focus {
      border-color: var(--secondaryColor);
      outline: none;
    }

    &--previous > * {
      transform: rotate(180deg);
    }

    margin-top: 6rem;
    @media (min-width: 801px) {
    }
  }
`;

const SlideImageWrapper = styled.div`
  background-color: var(--black);
  border-radius: 4%;
  height: 120%;
  left: 0%;
  overflow: hidden;
  position: absolute;
  opacity: 1;
  top: 0%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  transition: transform calc(var(--base-duration) / 4) var(--base-ease);
  width: 100%;

  &:after {
    content: '';
    position: absolute;
    border-radius: 12px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // z-index: 1;
    background: rgba(0, 0, 0, 0.6);
    box-shadow: inset 30px 100px -120px var(--primaryColor), inset 0px -10px 50px -450px var(--primaryColor);
  }

  @media (min-width: 801px) {
    height: 55vh;
  }
`;

const SliderHeadline = styled.span`
  font-weight: 600;
  position: absolute;
  top: 0;
  left: 2%;
  padding: 0.1rem 0.5rem;
  background: #fff;
  color: #000;
  border-radius: 5px;
  z-index: 100;
  text-transform: uppercase;
  font-size: 0.7rem;
  margin-top: 0.5rem;
  font-weight: 500;
`;

export { SliderContainer, SliderWrapper, SliderControls, SlideImageWrapper, SliderHeadline };
