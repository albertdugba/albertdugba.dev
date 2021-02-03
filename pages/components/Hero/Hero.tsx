import { useState, useEffect } from 'react';
import styled from 'styled-components';
import HeroSvgImage from '../../../styles/Icons/banner';

const Hero = () => {
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [index, setIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  const words = ['Frontend Developer', 'Technical Writer'];
  // typeWriter
  useEffect(() => {
    if (index === words.length) return;

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex(prev => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex(prev => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, Number(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink(prev => !prev);
    }, 400);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <>
      <Container className="container">
        <aside className="aside">
          <h1>Hello my name is Albert Dugba, I'm a </h1>
          <h1>
            {' '}
            {`${words[index].substring(0, subIndex)}${blink ? '|' : ''}`}
          </h1>
        </aside>

        <section></section>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    margin-top: 50px;
  }

  .aside {
    h1 {
      font-size: 3rem;
      @media (max-width: 600px) {
        font-size: 1.5rem;
        grid-template-columns: 1fr;
      }
    }
  }
`;

export default Hero;
