import Head from 'next/head';
import dynamic from 'next/dynamic';
import { IProjectProps } from '@/lib/interface';
import { Loader } from '@/common/loader/loader';
import styled from 'styled-components';

const Layout = dynamic(() => import('@/layout/Layout'), { loading: () => <Loader /> });

const About = () => {
  return (
    <Layout imageBackground="./tech-doodle.png">
      <Container className="container">
        <h1>About me</h1>
      </Container>
    </Layout>
  );
};

export default About;

const Container = styled.div`
  height: 60vh;
  width: 100%;
  background-color: #fff;
  border-radius: 13px;
  opacity: 0.4;
  backdrop-filter: blur(2px);

  h1 {
    font-size: 2rem;
    color: #000;
    padding: 1rem;
  }
`;
