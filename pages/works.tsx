import styled from 'styled-components';
import Head from 'next/head';

const Container = styled.div`
  height: 40vh;
  width: 100%;
  position: relative;
  background: #abb7bd;

  .circle {
    position: absolute;
    top: 30px;
    left: 50px;
    right: 0;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background: blue;
  }

  .line {
    position: absolute;
    bottom: 120px;
    top: 30px;
    left: 0;
    height: 200px;
    width: 100px;
    background: #0e4d81;
    transform: translate(250px);
  }

  .circle1 {
    position: absolute;
    top: 30px;
    right: 200px;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background: blue;
    animation: bounce 2s linear infinite;
  }

  .line1 {
    position: absolute;
    bottom: 120px;
    top: 30px;
    right: 25.7%;
    height: 200px;
    width: 100px;
    background: #0e4d81;
    transform: translate(250px);
  }
`;

const Card = styled.div`
  max-width: 500px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  padding: 1rem;
`;

const Works = () => {
  return (
    <>
      <Head>
        <title>Works</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div className="container">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle1"></div>
          <div className="line1"></div>
        </div>
      </Container>
      <Card className="container">
        <h1>My Works</h1>
      </Card>
    </>
  );
};

export default Works;
