import { FunctionComponent, useState } from 'react';
import { Slide } from './Slide';
import { SliderControl } from './SliderControl';
import { IProjectProps } from '@/lib/interface';
import { SliderContainer, SliderWrapper, SliderControls } from './styled';

interface ISlidesProps {
  slides: any;
}

export const Slider: FunctionComponent<ISlidesProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };
  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };
  const handleSlideClick = (index: number) => {
    setCurrent(index);
  };

  const wrapperTransform = {
    transform: `translateX(-${current * (100 / slides.length)}%)`,
  };

  return (
    <SliderContainer>
      <SliderWrapper style={wrapperTransform}>
        {slides.map((slide: IProjectProps, index: number) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={() => handleSlideClick(index)}
          />
        ))}
      </SliderWrapper>

      <div className="slider__controls">
        <SliderControl type="previous" title="Go to previous slide" handleClick={handlePreviousClick} />
        <SliderControl type="next" title="Go to next slide" handleClick={handleNextClick} />
      </div>
    </SliderContainer>
  );
};
