import { FunctionComponent, useState } from 'react';
import { Slide } from './Slide';
import { SliderControl } from './SliderControl';

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
    <div className="slider">
      <ul className="slider__wrapper" style={wrapperTransform}>
        {slides.map((slide: any, index: number) => {
          return (
            <Slide
              key={index}
              slide={slide}
              index={index}
              current={current}
              handleSlideClick={() => handleSlideClick(index)}
            />
          );
        })}
      </ul>

      <div className="slider__controls">
        <SliderControl type="previous" title="Go to previous slide" handleClick={handlePreviousClick} />
        <SliderControl type="next" title="Go to next slide" handleClick={handleNextClick} />
      </div>
    </div>
  );
};
