import { useState, useEffect } from 'react';
import styled from 'styled-components';
import HeroSvgImage from '../../../styles/Icons/banner';

const Hero = () => {
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [index, setIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  const words = ['Frontend Developer', 'Technical Writer', 'Problem Solver'];
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
      <Container>
        <aside className="aside">
          <h2 className="contaier">
            Hi, welcome to my site, my name is Albert and I'm a{' '}
            {`${words[index].substring(0, subIndex)}${blink ? '|' : ''}`}
          </h2>
        </aside>

        <section></section>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: calc(100vh - 80px);
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  background: #34223a;
  color: white;
  text-align: center;
  justify-content: center;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    margin-top: 50px;
  }

  .aside {
    margin-top: -100px;
    h1 {
      font-size: 3rem;
      @media (max-width: 600px) {
        margin-top: 70px;
        font-size: 2.5rem;
        grid-template-columns: 1fr;
      }
    }
  }
`;

export default Hero;
