import styled from 'styled-components';
import Head from 'next/head';

const Container = styled.div`
  height: 40vh;
  width: 100%;
  position: relative;
  background: #abb7bd;

  h1 {
    font-size: 5.4rem;
  }
`;

const Works = () => {
  return (
    <>
      <Head>
        <title>Works</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1>My Works</h1>
      </Container>
    </>
  );
};

export default Works;
