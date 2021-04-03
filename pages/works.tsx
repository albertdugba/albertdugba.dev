import styled from 'styled-components';
import Head from 'next/head';
import Circle from 'styles/Icons/circle';
import GridLines from 'styles/Icons/gridlines';
import DotsHorizontal from 'styles/Icons/dotshorizontal';
import I from 'styles/Icons/i';
import { Header } from 'components/Navigation/Header';
import { useState } from 'react';

const Container = styled.div`
  height: 100%;
  overflow: hidden;

  .svg__shapes {
    position: relative;
  }

  .svg__shape1 {
    position: absolute;
    top: 0;
    left: 20%;
    height: 100%;
    width: 100%;
  }

  .svg__shapes2 {
    position: absolute;
    top: 20%;
    left: 70%;
  }
`;

const Works = () => {
  return (
    <>
      <Head>
        <title>Works - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ background: '#f0e5f0' }}>
        <Container className="container">
          <div className="svg__shapes">
            <div className="svg__shapes1"></div>
            <div className="svg__shapes2">
              <DotsHorizontal />
            </div>
            <div className="svg__shapes3">
              <I />
            </div>
            <div className="svg__shapes4">
              <Circle />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Works;
